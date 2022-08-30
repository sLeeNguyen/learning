package helpers

import "testing"

func TestAdd(t *testing.T) {
	a := 10
	b := 11
	res := Add(a, b)
	if res != 21 {
		t.Fatalf(`%d + %d must be 21, but received %d`, a, b, res)
	}
}

func TestMinus(t *testing.T) {
	res := Minus(10, 11)
	if res != -1 {
		t.Fatalf(`%d + %d must be -1, but received %d`, 10, 11, res)
	}
}

func TestMulti(t *testing.T) {
	res := Multi(10, 11)
	if res != 110 {
		t.Fatalf(`%d + %d must be 110, but received %d`, 10, 11, res)
	}
}

func TestDivSuccess(t *testing.T) {
	res, _ := Div(10, 2)
	if res != 5 {
		t.Fatalf(`%d + %d must be 5, but received %f`, 10, 2, res)
	}
}

func TestDivFailed(t *testing.T) {
	_, err := Div(10, 0)
	if err == nil || err.Error() != "Divided by Zero" {
		t.Fatalf(`Expected the error Divided by Zero`)
	}
}
