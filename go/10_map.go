package main

import "fmt"

func mutatingMap() {
	fmt.Println("-----------------------")
	var m = map[string]string{
		"john": "13/01/1999",
		"tony": "06/02/2000",
	}
	fmt.Println("m:", m)
	fmt.Println()
	delete(m, "a")
	fmt.Println("deleted non-exist key:", m)
	delete(m, "john")
	fmt.Println("deleted exist key:", m)

	john, isExist := m["john"]
	if !isExist {
		fmt.Println("Key john does not exist", john == "")
	}
}

func main() {
	var m map[string]string = make(map[string]string)
	var n = map[string]int{
		"x": 5,
		"y": 10,
	}
	m["b"] = "y"
	m["a"] = "x"
	fmt.Println(m)
	fmt.Println(n)

	mutatingMap()
}
