package main

import (
	"io"
	"os"
	"strings"
)

type rot13Reader struct {
	r io.Reader
}

func (r13 rot13Reader) Read(b []byte) (int, error) {
	n, err := r13.r.Read(b)

	for i := 0; i < n; i++ {
		if b[i] >= 'A' && b[i] <= 'Z' {
			b[i] = byte(65 + (b[i]-65+13)%26)
		} else if b[i] >= 'a' && b[i] <= 'z' {
			b[i] = byte(97 + (b[i]-97+13)%26)
		}
	}
	return n, err
}

func main() {
	s := strings.NewReader("Lbh penpxrq gur pbqr!")
	r := rot13Reader{s}
	io.Copy(os.Stdout, &r)
}
