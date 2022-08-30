package main

import "fmt"

func main() {
	i, j := 42, 2000

	p := &i
	fmt.Println(*p) // 42
	*p = 21
	fmt.Println(i) // 21

	p = &j
	*p = *p / 4
	fmt.Println(j) // 500
}
