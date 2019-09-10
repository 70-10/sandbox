package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestEven(t *testing.T) {
	assert.Equal(t, "Even", logic(1, 2))
	assert.Equal(t, "Even", logic(6, 4))
}

func TestOdd(t *testing.T) {
	assert.Equal(t, "Odd", logic(1, 3))
	assert.Equal(t, "Odd", logic(9, 7))

}
