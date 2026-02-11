import { describe, it, expect } from "vitest";

import { createPaystackClient } from "../src/client.js";

describe("PaystackAxiosClient", () => {
	it("should initialize correctly", () => {
		const client = createPaystackClient({ secretKey: "sk_test_123" });
		expect(client).toBeDefined();
	});
});
