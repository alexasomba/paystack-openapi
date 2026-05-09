#!/usr/bin/env bash
set -euo pipefail

go -C sdks/go mod tidy
git diff --exit-code sdks/go/go.mod sdks/go/go.sum
go -C sdks/go test ./...
go -C sdks/go vet ./...
