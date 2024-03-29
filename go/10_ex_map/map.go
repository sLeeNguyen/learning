package main

import (
	"strings"

	"golang.org/x/tour/wc"
)

func WordCount(s string) map[string]int {
	var words = strings.Split(s, " ")
	var m = make(map[string]int)
	for _, w := range words {
		m[w] += 1
	}
	return m
}

func main() {
	wc.Test(WordCount)
}
