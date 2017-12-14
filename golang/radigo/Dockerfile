FROM golang:1.9-alpine

RUN apk add --update --no-cache git ffmpeg

RUN go get -u -v github.com/yyoshiki41/radigo/cmd/radigo/...
RUN mkdir -p /tmp/radigo && mkdir -p /tmp/radigo/output

ENTRYPOINT ["radigo"]
