package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestCheck(t *testing.T) {
	tests := []struct {
		expect []int
		actual []int
		hit    int
		blow   int
	}{
		{expect: []int{1, 2, 3}, actual: []int{1, 2, 3}, hit: 3, blow: 0},
		{expect: []int{1, 2, 3, 4}, actual: []int{1, 2, 3, 4}, hit: 4, blow: 0},
		{expect: []int{1, 0, 3}, actual: []int{1, 2, 3}, hit: 2, blow: 0},
		{expect: []int{1, 3, 2}, actual: []int{1, 2, 3}, hit: 1, blow: 2},
	}

	for _, test := range tests {
		h, b := check(test.expect, test.actual)
		assert.Equal(t, test.hit, h)
		assert.Equal(t, test.blow, b)
	}

}
