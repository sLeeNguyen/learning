package helpers

import "errors"

func Add(a int, b int) int {
	return a + b
}

func Minus(a int, b int) int {
	return a - b
}

func Multi(a int, b int) int {
	return a * b
}

func Div(a int, b int) (float64, error) {
	if b == 0 {
		return 0, errors.New("Divided by Zero")
	}
	return float64(a) / float64(b), nil
}
