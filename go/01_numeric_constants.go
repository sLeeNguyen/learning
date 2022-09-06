package main

import "fmt"

const Big = 1 << 100

func main() {
	fmt.Println(Big >> 50)
}
