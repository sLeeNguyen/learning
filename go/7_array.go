package main

import "fmt"

func main() {
	a := [6]int{1, 2, 3, 4, 5, 7}
	fmt.Println("a:", a)
	b := a[1:4]
	fmt.Println("b: ", b)

	b[0] = 5
	fmt.Println("a after changed:", a)
	fmt.Println("b after changed:", b)

	fmt.Println()
	fmt.Print("b: ")
	printSlice(b)
	fmt.Println()

	c := b[0:4]
	fmt.Print("c: ")
	printSlice(c)
	c[0] += 1
	fmt.Println()

	fmt.Println("a: ", a)
}

func printSlice(s []int) {
	fmt.Printf("len=%d cap=%d %v\n", len(s), cap(s), s)
}
