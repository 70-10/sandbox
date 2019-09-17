package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestLogic(t *testing.T) {
	assert.Equal(t, 2, logic([]int{8, 12, 40}, 0))
	assert.Equal(t, 0, logic([]int{5, 6, 8, 10}, 0))
	assert.Equal(t, 8, logic([]int{382253568, 723152896, 37802240, 379425024, 404894720, 471526144}, 0))
}
