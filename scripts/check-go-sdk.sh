#!/usr/bin/env bash
set -euo pipefail

if command -v go >/dev/null 2>&1; then
  go -C sdks/go mod tidy
  git diff --exit-code sdks/go/go.mod sdks/go/go.sum
  go -C sdks/go test ./...
  go -C sdks/go vet ./...
  exit 0
fi

if ! command -v docker >/dev/null 2>&1; then
  echo "go is not installed and docker is unavailable" >&2
  exit 1
fi

docker run --rm \
  -u "$(id -u):$(id -g)" \
  -e GOCACHE=/tmp/go-build-cache \
  -e GOPATH=/tmp/go \
  -v "$PWD:/local" \
  -w /local \
  golang:1.23 \
  sh -c 'go -C sdks/go mod tidy && git diff --exit-code sdks/go/go.mod sdks/go/go.sum && go -C sdks/go test ./... && go -C sdks/go vet ./...'
