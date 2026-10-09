#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")/.."
args=()
if [[ ${1:-} != --* && $# -gt 0 ]]; then args+=(--destination "$1"); shift; fi
exec node scripts/sync-sdks.mjs "${args[@]}" "$@"
