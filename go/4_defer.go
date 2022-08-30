package main

import "fmt"

func main() {
	defer fmt.Println("deferred call")
	defer fmt.Println("deferred call 2")
	for i := 1; i < 10; i++ {
		fmt.Printf("%d ", i)
	}
	fmt.Println()
	defer fmt.Println("deferred call 3")
}
