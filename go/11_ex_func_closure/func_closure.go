package main

import "fmt"

func fibonacci() func() int {
	var f1, f2 = 0, 1
	var i = -1
	return func() int {
		i++
		if i == 0 {
			return 0
		}
		if i == 1 {
			return 1
		}
		f3 := f1 + f2
		f1 = f2
		f2 = f3
		return f3
	}
}

func main() {
	f := fibonacci()

	for i := 0; i < 10; i++ {
		fmt.Println(f())
	}
}
