from __future__ import annotations

import json
import os
import threading
from http.server import BaseHTTPRequestHandler, HTTPServer
from pathlib import Path
from typing import Any, ClassVar

import alexasomba_paystack
from alexasomba_paystack.api.transaction_api import TransactionApi
from alexasomba_paystack.extras import create_paystack_client
from alexasomba_paystack.models.transaction_initialize import TransactionInitialize
from alexasomba_paystack.models.transaction_initialize_amount import TransactionInitializeAmount


def load_fixtures() -> dict[str, Any]:
    path = Path(__file__).resolve().parents[2] / "contract-fixtures" / "paystack.json"
    return json.loads(path.read_text())


class ContractHandler(BaseHTTPRequestHandler):
    fixtures: ClassVar[dict[str, Any]]
    seen: ClassVar[dict[str, Any]] = {}

    def do_POST(self) -> None:
        length = int(self.headers.get("Content-Length", "0"))
        body = self.rfile.read(length).decode()
        self.__class__.seen = {
            "path": self.path,
            "method": "POST",
            "authorization": self.headers.get("Authorization"),
            "idempotency": self.headers.get("Idempotency-Key"),
            "body": json.loads(body),
        }

        payload = json.dumps(self.fixtures["transactionInitialize"]["response"]).encode()
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.send_header("X-Paystack-Request-Id", self.fixtures["requestId"])
        self.send_header("Content-Length", str(len(payload)))
        self.end_headers()
        self.wfile.write(payload)

    def log_message(self, _format: str, *args: Any) -> None:
        return


def test_transaction_initialize_uses_shared_contract_fixture() -> None:
    fixtures = load_fixtures()
    ContractHandler.fixtures = fixtures
    ContractHandler.seen = {}
    server = HTTPServer(("127.0.0.1", 0), ContractHandler)
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()

    try:
        base_url = f"http://127.0.0.1:{server.server_port}"
        client = create_paystack_client(
            fixtures["secretKey"],
            base_url=base_url,
            idempotency=True,
            idempotency_key="contract-idempotency",
        )
        api = TransactionApi(client)
        response = api.initialize(
            transaction_initialize=TransactionInitialize(
                email=fixtures["transactionInitialize"]["request"]["email"],
                amount=TransactionInitializeAmount(
                    fixtures["transactionInitialize"]["request"]["amount"]
                ),
            )
        )

        assert ContractHandler.seen["path"] == "/transaction/initialize"
        assert ContractHandler.seen["authorization"] == f"Bearer {fixtures['secretKey']}"
        assert ContractHandler.seen["idempotency"] == "contract-idempotency"
        assert ContractHandler.seen["body"] == fixtures["transactionInitialize"]["request"]
        assert response.data.reference == fixtures["transactionInitialize"]["response"]["data"]["reference"]
    finally:
        server.shutdown()
        thread.join(timeout=5)


def test_optional_live_smoke_skipped_by_default() -> None:
    secret_key = os.getenv("PAYSTACK_SECRET_KEY")
    if not secret_key:
        import pytest

        pytest.skip("PAYSTACK_SECRET_KEY is not set; skipping optional live smoke test")

    configuration = alexasomba_paystack.Configuration(access_token=secret_key)
    with alexasomba_paystack.ApiClient(configuration) as api_client:
        api = TransactionApi(api_client)
        assert api.list() is not None
