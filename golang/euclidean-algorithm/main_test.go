package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestGcd(t *testing.T) {
	tests := []struct {
		a      int
		b      int
		expect int
	}{
		{a: 20, b: 32, expect: 4},
		{a: 390, b: 273, expect: 39},
		{a: 2, b: 15, expect: 1},
		{a: 2, b: 14, expect: 2},
	}

	for _, test := range tests {
		assert.Equal(t, test.expect, gcd(test.a, test.b))
	}
}
