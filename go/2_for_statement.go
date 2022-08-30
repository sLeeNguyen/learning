package main

import (
	"fmt"
	"math"
)

func Sqrt(x float64) float64 {
	z := x / 2
	for i := 0; i < 100; i++ {
		z -= (z*z - x) / (2 * z)
	}
	return z
}

func TestFor() {
	for i := 0; i < 10; i++ {
		fmt.Println(i + 1)
	}
	fmt.Println()
	sum := 1
	for sum < 1000 {
		sum += sum
	}
	fmt.Println(sum)
}

func main() {
	fmt.Println("Manual:", Sqrt(91))
	fmt.Println("Lib:", math.Sqrt(91))
}
