package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestLogic(t *testing.T) {
	assert.Equal(t, 0, logic(0, 0, 0))
	assert.Equal(t, 1, logic(1, 0, 0))
	assert.Equal(t, 1, logic(0, 1, 0))
	assert.Equal(t, 2, logic(0, 1, 1))
	assert.Equal(t, 3, logic(1, 1, 1))
}
