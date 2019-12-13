FROM golang:1-alpine as builder
WORKDIR /go/src/workdir/app
COPY . .
RUN go build

FROM alpine
COPY --from=builder /go/src/workdir/app/app /app
EXPOSE 18888
ENTRYPOINT ["/app"]