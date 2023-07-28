package main

import (
	"fmt"
	"sync"
	"time"
)

type Fetcher interface {
	// Fetch returns the body of URL and
	// a slice of URLs found on that page.
	Fetch(url string) (body string, urls []string, err error)
}

type fetchedUrl struct {
	mu sync.Mutex
	v  map[string]bool
}

func (fu *fetchedUrl) Add(url string) {
	fu.mu.Lock()
	fu.v[url] = true
	fu.mu.Unlock()
}

func (fu *fetchedUrl) IsFetched(url string) bool {
	fu.mu.Lock()
	defer fu.mu.Unlock()
	return fu.v[url]
}

var cached = fetchedUrl{v: make(map[string]bool)}

// Crawl uses fetcher to recursively crawl
// pages starting with url, to a maximum of depth.
func Crawl(url string, depth int, fetcher Fetcher) {
	// This implementation doesn't do either:
	if depth <= 0 {
		return
	}
	fmt.Printf("crawling: %s\n", url)
	if cached.IsFetched(url) {
		fmt.Printf("found in cached: %s\n\n", url)
		return
	}
	body, urls, err := fetcher.Fetch(url)
	if err != nil {
		fmt.Println(err)
		fmt.Println()
		return
	}
	cached.Add(url)
	fmt.Printf("found: %s %q\n\n", url, body)
	for _, u := range urls {
		go Crawl(u, depth-1, fetcher)
	}
	return
}

func main() {
	Crawl("https://golang.org/", 4, fetcher)

	time.Sleep(time.Second)
	fmt.Println(cached.v)
}

// fakeFetcher is Fetcher that returns canned results.
type fakeFetcher map[string]*fakeResult

type fakeResult struct {
	body string
	urls []string
}

func (f fakeFetcher) Fetch(url string) (string, []string, error) {
	res, ok := f[url]
	if ok {
		return res.body, res.urls, nil
	}
	return "", nil, fmt.Errorf("not found: %s", url)
}

// fetcher is a populated fakeFetcher.
var fetcher = fakeFetcher{
	"https://golang.org/": &fakeResult{
		"The Go Programming Language",
		[]string{
			"https://golang.org/pkg/",
			"https://golang.org/cmd/",
		},
	},
	"https://golang.org/pkg/": &fakeResult{
		"Packages",
		[]string{
			"https://golang.org/",
			"https://golang.org/cmd/",
			"https://golang.org/pkg/fmt/",
			"https://golang.org/pkg/os/",
		},
	},
	"https://golang.org/pkg/fmt/": &fakeResult{
		"Package fmt",
		[]string{
			"https://golang.org/",
			"https://golang.org/pkg/",
		},
	},
	"https://golang.org/pkg/os/": &fakeResult{
		"Package os",
		[]string{
			"https://golang.org/",
			"https://golang.org/pkg/",
		},
	},
}
