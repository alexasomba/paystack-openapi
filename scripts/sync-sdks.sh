#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")/.."
args=(--remote)
if [[ ${1:-} != --* && $# -gt 0 ]]; then args+=(--message "$1"); shift; fi
exec node scripts/sync-sdks.mjs "${args[@]}" "$@"
