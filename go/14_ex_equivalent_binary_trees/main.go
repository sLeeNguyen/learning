package main

import (
	"fmt"
	"sort"

	"golang.org/x/tour/tree"
)

// Walk walks the tree t sending all values
// from the tree to the channel ch.
func Walk(t *tree.Tree, ch chan int) {
	if t == nil {
		return
	}
	ch <- t.Value
	Walk(t.Left, ch)
	Walk(t.Right, ch)
}

func ToSlice(c chan int) []int {
	s := make([]int, 0)
	for i := range c {
		s = append(s, i)
	}
	return s
}

// Same determines whether the trees
// t1 and t2 contain the same values.
func Same(t1, t2 *tree.Tree) bool {
	var c1 = make(chan int, 10)
	var c2 = make(chan int, 10)
	Walk(t1, c1)
	close(c1)
	Walk(t2, c2)
	close(c2)

	s1 := ToSlice(c1)
	s2 := ToSlice(c2)
	sort.Ints(s1)
	sort.Ints(s2)
	for i := 0; i < 10; i++ {
		if s1[i] != s2[i] {
			return false
		}
	}
	return true
}

func main() {
	var ch = make(chan int)
	go Walk(tree.New(1), ch)
	for i := 0; i < 10; i++ {
		fmt.Println(<-ch)
	}

	fmt.Println("Same(tree.New(1), tree.New(1)) =", Same(tree.New(1), tree.New(1)))
	fmt.Println("Same(tree.New(1), tree.New(2)) =", Same(tree.New(1), tree.New(2)))
}
