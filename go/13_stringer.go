package main

import "fmt"

type Person struct {
	Name string
	Age  int
}

func (p Person) String() string {
	return fmt.Sprintf("%v - %v y.o", p.Name, p.Age)
}

func main() {
	a := Person{"Lee Nguyen", 24}
	b := Person{"ND Khanh", 22}
	fmt.Println(a)
	fmt.Println(b)
}
