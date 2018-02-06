build:
	@echo "[+] build"
	dep ensure
	env GOOS=linux GOARCH=amd64 go build -ldflags="-s -w" -o bin/main

.PHONY: build
