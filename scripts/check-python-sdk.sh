#!/usr/bin/env bash
set -euo pipefail

cd sdks/python
PYTHON_BIN="${PYTHON_BIN:-python}"
if ! command -v "$PYTHON_BIN" >/dev/null 2>&1 && command -v python3 >/dev/null 2>&1; then
  PYTHON_BIN="python3"
fi

SDK_CHECK_VENV="$(mktemp -d "${TMPDIR:-/tmp}/paystack-python-check.XXXXXX")"
trap 'rm -rf "$SDK_CHECK_VENV"' EXIT
"$PYTHON_BIN" -m venv "$SDK_CHECK_VENV"
PYTHON_BIN="$SDK_CHECK_VENV/bin/python"

"$PYTHON_BIN" -m pip install --upgrade pip
"$PYTHON_BIN" -m pip install -r requirements.txt -r test-requirements.txt
"$PYTHON_BIN" -m pytest
"$PYTHON_BIN" -m mypy --follow-imports=skip --disable-error-code=misc alexasomba_paystack/extras.py test/test_contract.py
"$PYTHON_BIN" -m ruff check alexasomba_paystack/extras.py test/test_contract.py
"$PYTHON_BIN" -m build
"$PYTHON_BIN" -m twine check dist/*
