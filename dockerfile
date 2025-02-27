# syntax=docker/dockerfile:1

FROM golang:1.22.2-alpine AS builder

# Set destination for COPY
WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download


COPY . .

RUN go build -o oschat ./cmd/main/main.go


RUN apk add --no-cache sqlite sqlite-dev


EXPOSE 2020

# Run
CMD ["./oschat"]