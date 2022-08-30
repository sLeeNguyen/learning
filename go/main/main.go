package main

import (
	"fmt"
	"log"

	"lee.com/helpers"
)

func main() {
	log.SetPrefix("main: ")
	log.SetFlags(0)

	var a int = 10
	var b int = 0
	fmt.Println(a, " + ", b, " = ", helpers.Add(a, b))
	fmt.Println(a, " - ", b, " = ", helpers.Minus(a, b))
	fmt.Println(a, " * ", b, " = ", helpers.Multi(a, b))
	res, err := helpers.Div(a, b)
	if err != nil {
		log.Fatalln(err)
	}
	fmt.Println(a, " / ", b, " = ", res)
}
