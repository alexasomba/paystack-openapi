#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")/.."
if [[ ${1:-} != --* && $# -gt 0 ]]; then
  destination=$1
  shift
  exec node scripts/sync-sdks.mjs --destination "$destination" "$@"
fi
exec node scripts/sync-sdks.mjs "$@"
