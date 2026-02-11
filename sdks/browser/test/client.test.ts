import { describe, it, expect } from "vitest";

import { createPaystackClient } from "../src/client.js";

describe("PaystackBrowserClient", () => {
	it("should initialize correctly", () => {
		const client = createPaystackClient({ apiKey: "pk_test_123" });
		expect(client).toBeDefined();
	});
});
