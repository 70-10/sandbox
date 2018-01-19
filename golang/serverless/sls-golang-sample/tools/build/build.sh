#!/bin/sh -e

echo "==> dep ensure"
dep ensure

echo "==> build"
GOOS=linux GOARCH=amd64 go build -o bin/main
