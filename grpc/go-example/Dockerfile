FROM golang:1-alpine

RUN apk --no-cache add git protobuf

RUN go get google.golang.org/grpc
RUN go get github.com/golang/protobuf/protoc-gen-go
