/* eslint-disable no-console */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const templatesDir = path.join(repoRoot, "scripts/readme-templates");

const MODULES = [
  "Transactions",
  "Verify Payments (Transaction verification)",
  "Charges",
  "Bulk Charges",
  "Subaccounts",
  "Transaction Splits",
  "Terminal",
  "Virtual Terminal",
  "Customers",
  "Direct Debit",
  "Dedicated Virtual Accounts",
  "Apple Pay",
  "Plans",
  "Subscriptions",
  "Transfer Recipients",
  "Transfers",
  "Transfers Control (OTP settings; under Transfers)",
  "Balance",
  "Payment Requests (Invoices)",
  "Verification (Resolve Account / Validate Account / Resolve Card BIN)",
  "Products",
  "Storefronts",
  "Orders",
  "Payment Pages",
  "Settlements",
  "Integration",
  "Control Panel (Payment session timeout; under Integration)",
  "Refunds",
  "Disputes",
  "Banks",
  "Miscellaneous",
];

const MODULE_SCHEMAS = [
  ["Transactions", "Transaction*"],
  ["Verify Payments (Transaction verification)", "VerifyResponse / TransactionFetchResponse"],
  ["Charges", "Charge*"],
  ["Bulk Charges", "BulkCharge*"],
  ["Subaccounts", "Subaccount*"],
  ["Transaction Splits", "Split*"],
  ["Terminal", "Terminal*"],
  ["Virtual Terminal", "VirtualTerminal*"],
  ["Customers", "Customer*"],
  ["Direct Debit", "DirectDebit*"],
  ["Dedicated Virtual Accounts", "DedicatedNuban* / DedicatedVirtualAccount*"],
  ["Apple Pay", "ApplePay*"],
  ["Plans", "Plan*"],
  ["Subscriptions", "Subscription*"],
  ["Transfer Recipients", "TransferRecipient*"],
  ["Transfers", "Transfer*"],
  [
    "Transfers Control (OTP settings; under Transfers)",
    "TransferEnable* / TransferDisable* / TransferFinalize*",
  ],
  ["Balance", "Balance*"],
  ["Payment Requests (Invoices)", "PaymentRequest*"],
  ["Verification (Resolve Account / Validate Account / Resolve Card BIN)", "Verification*"],
  ["Products", "Product*"],
  ["Storefronts", "Storefront*"],
  ["Orders", "Order*"],
  ["Payment Pages", "Page*"],
  ["Settlements", "Settlement*"],
  ["Integration", "Integration*"],
  ["Control Panel (Payment session timeout; under Integration)", "ControlPanel*"],
  ["Refunds", "Refund*"],
  ["Disputes", "Dispute*"],
  ["Banks", "Bank*"],
  ["Miscellaneous", "Miscellaneous* / Currency"],
];

/** @type {Record<string, [string, string][]>} */
const MODULE_EXAMPLES = {
  node: [
    [
      "Transactions",
      '```ts\nconst tx = await paystack.transaction_initialize({\n  body: { email: "customer@example.com", amount: 5000 },\n});\n```',
    ],
    [
      "Verify Payments (Transaction verification)",
      '```ts\nconst verified = await paystack.transaction_verify({\n  params: { path: { reference: "ref_123" } },\n});\n```',
    ],
    [
      "Charges",
      '```ts\nawait paystack.charge_create({\n  body: { email: "customer@example.com", amount: 5000, bank: { code: "057", account_number: "0001234567" } },\n});\n```',
    ],
    [
      "Bulk Charges",
      '```ts\nawait paystack.bulkCharge_initiate({\n  body: [{ authorization: "AUTH_xxx", amount: 5000, reference: "bulk-ref-1" }],\n});\n```',
    ],
    [
      "Subaccounts",
      '```ts\nawait paystack.subaccount_create({\n  body: { business_name: "Acme Stores", settlement_bank: "057", account_number: "0001234567", percentage_charge: 10 },\n});\n```',
    ],
    [
      "Transaction Splits",
      '```ts\nawait paystack.split_create({\n  body: { name: "Main split", type: "percentage", currency: "NGN", subaccounts: [] },\n});\n```',
    ],
    ["Terminal", "```ts\nconst terminals = await paystack.terminal_list();\n```"],
    [
      "Virtual Terminal",
      '```ts\nawait paystack.virtualTerminal_create({\n  body: { name: "Web checkout terminal" },\n});\n```',
    ],
    [
      "Customers",
      '```ts\nawait paystack.customer_create({\n  body: { email: "customer@example.com", first_name: "Ada", last_name: "Lovelace" },\n});\n```',
    ],
    [
      "Direct Debit",
      '```ts\nawait paystack.directdebit_initialize({\n  body: { email: "customer@example.com", amount: 5000, bank_code: "057" },\n});\n```',
    ],
    [
      "Dedicated Virtual Accounts",
      '```ts\nawait paystack.dedicatedAccount_assign({\n  body: { customer: 12345, preferred_bank: "wema-bank" },\n});\n```',
    ],
    [
      "Apple Pay",
      '```ts\nawait paystack.applePay_registerDomain({\n  body: { domainName: "example.com" },\n});\n```',
    ],
    [
      "Plans",
      '```ts\nawait paystack.plan_create({\n  body: { name: "Starter", amount: 500000, interval: "monthly" },\n});\n```',
    ],
    [
      "Subscriptions",
      '```ts\nawait paystack.subscription_create({\n  body: { customer: "CUS_xxx", plan: "PLN_xxx" },\n});\n```',
    ],
    [
      "Transfer Recipients",
      '```ts\nawait paystack.transferrecipient_create({\n  body: { type: "nuban", name: "Ada Lovelace", account_number: "0001234567", bank_code: "057", currency: "NGN" },\n});\n```',
    ],
    [
      "Transfers",
      '```ts\nawait paystack.transfer_create({\n  body: { source: "balance", amount: 5000, recipient: "RCP_xxx", reason: "Vendor payout" },\n});\n```',
    ],
    [
      "Transfers Control (OTP settings; under Transfers)",
      "```ts\nawait paystack.transfer_enableOtp();\n```",
    ],
    ["Balance", "```ts\nconst balance = await paystack.balance_fetch();\n```"],
    [
      "Payment Requests (Invoices)",
      '```ts\nawait paystack.paymentRequest_create({\n  body: { customer: "CUS_xxx", amount: 5000, description: "Consulting invoice" },\n});\n```',
    ],
    [
      "Verification (Resolve Account / Validate Account / Resolve Card BIN)",
      '```ts\nawait paystack.bank_resolveAccountNumber({\n  params: { query: { account_number: "0001234567", bank_code: "057" } },\n});\n```',
    ],
    [
      "Products",
      '```ts\nawait paystack.product_create({\n  body: { name: "T-shirt", description: "Cotton tee", price: 5000, currency: "NGN" },\n});\n```',
    ],
    ["Storefronts", "```ts\nconst storefronts = await paystack.storefront_list();\n```"],
    [
      "Orders",
      '```ts\nawait paystack.order_create({\n  body: { customer: "CUS_xxx", items: [] },\n});\n```',
    ],
    [
      "Payment Pages",
      '```ts\nawait paystack.page_create({\n  body: { name: "Event Ticket", amount: 5000, description: "Landing page for ticket sales" },\n});\n```',
    ],
    ["Settlements", "```ts\nconst settlements = await paystack.settlement_list();\n```"],
    [
      "Integration",
      "```ts\nconst timeout = await paystack.integration_fetchPaymentSessionTimeout();\n```",
    ],
    [
      "Control Panel (Payment session timeout; under Integration)",
      "```ts\nawait paystack.integration_updatePaymentSessionTimeout({\n  body: { timeout: 20 },\n});\n```",
    ],
    [
      "Refunds",
      "```ts\nawait paystack.refund_create({\n  body: { transaction: 123456789, amount: 5000 },\n});\n```",
    ],
    ["Disputes", "```ts\nconst disputes = await paystack.dispute_list();\n```"],
    [
      "Banks",
      '```ts\nconst banks = await paystack.bank_list({ params: { query: { country: "nigeria" } } });\n```',
    ],
    [
      "Miscellaneous",
      "```ts\nconst countries = await paystack.miscellaneous_listCountries();\n```",
    ],
  ],
  axios: [],
  browser: [],
  go: [],
  php: [],
  python: [],
};

/** @param {'axios' | 'browser'} targetKey */
function cloneNodeExamplesFromNode(targetKey) {
  MODULE_EXAMPLES[targetKey] = MODULE_EXAMPLES.node.map(([moduleName, snippet]) => [
    moduleName,
    snippet
      .replaceAll("@alexasomba/paystack-node", `@alexasomba/paystack-${targetKey}`)
      .replace("const paystack = createPaystack({", "const paystack = createPaystack({"),
  ]);
}

cloneNodeExamplesFromNode("axios");
cloneNodeExamplesFromNode("browser");

MODULE_EXAMPLES.go = [
  [
    "Transactions",
    '```go\nresp, _, err := client.TransactionAPI.TransactionInitialize(ctx).\n  TransactionInitialize(paystack.TransactionInitialize{Email: "customer@example.com", Amount: paystack.PtrInt32(5000)}).\n  Execute()\n```',
  ],
  [
    "Verify Payments (Transaction verification)",
    '```go\nverified, _, err := client.TransactionAPI.TransactionVerify(ctx, "ref_123").Execute()\n```',
  ],
  [
    "Charges",
    '```go\n_, _, err := client.ChargeAPI.ChargeCreate(ctx).\n  ChargeCreate(paystack.ChargeCreateRequest{Email: "customer@example.com"}).\n  Execute()\n```',
  ],
  [
    "Bulk Charges",
    '```go\n_, _, err := client.BulkChargeAPI.BulkChargeInitiate(ctx).\n  BulkChargeInitiate([]paystack.BulkChargeInitiate{{Authorization: "AUTH_xxx", Amount: 5000, Reference: "bulk-ref-1"}}).\n  Execute()\n```',
  ],
  [
    "Subaccounts",
    '```go\n_, _, err := client.SubaccountAPI.SubaccountCreate(ctx).\n  SubaccountCreate(paystack.SubaccountCreate{BusinessName: "Acme Stores"}).\n  Execute()\n```',
  ],
  [
    "Transaction Splits",
    '```go\n_, _, err := client.SplitAPI.SplitCreate(ctx).\n  SplitCreate(paystack.SplitCreate{Name: "Main split", Type: "percentage", Currency: "NGN"}).\n  Execute()\n```',
  ],
  ["Terminal", "```go\nterminals, _, err := client.TerminalAPI.TerminalList(ctx).Execute()\n```"],
  [
    "Virtual Terminal",
    '```go\n_, _, err := client.VirtualTerminalAPI.VirtualTerminalCreate(ctx).\n  VirtualTerminalCreate(paystack.VirtualTerminalCreate{Name: "Web checkout terminal"}).\n  Execute()\n```',
  ],
  [
    "Customers",
    '```go\n_, _, err := client.CustomerAPI.CustomerCreate(ctx).\n  CustomerCreate(paystack.CustomerCreate{Email: "customer@example.com"}).\n  Execute()\n```',
  ],
  [
    "Direct Debit",
    '```go\n_, _, err := client.DirectDebitAPI.DirectdebitInitialize(ctx).\n  DirectDebitInitializeRequest(paystack.DirectDebitInitializeRequest{Email: "customer@example.com"}).\n  Execute()\n```',
  ],
  [
    "Dedicated Virtual Accounts",
    "```go\n_, _, err := client.DedicatedVirtualAccountAPI.DedicatedAccountAssign(ctx).\n  DedicatedVirtualAccountAssign(paystack.DedicatedVirtualAccountAssign{Customer: 12345}).\n  Execute()\n```",
  ],
  [
    "Apple Pay",
    '```go\n_, _, err := client.ApplePayAPI.ApplePayRegisterDomain(ctx).\n  ApplePayParam(paystack.ApplePayParam{DomainName: "example.com"}).\n  Execute()\n```',
  ],
  [
    "Plans",
    '```go\n_, _, err := client.PlanAPI.PlanCreate(ctx).\n  PlanCreate(paystack.PlanCreate{Name: "Starter", Amount: 500000, Interval: "monthly"}).\n  Execute()\n```',
  ],
  [
    "Subscriptions",
    '```go\n_, _, err := client.SubscriptionAPI.SubscriptionCreate(ctx).\n  SubscriptionCreate(paystack.SubscriptionCreate{Customer: "CUS_xxx", Plan: "PLN_xxx"}).\n  Execute()\n```',
  ],
  [
    "Transfer Recipients",
    '```go\n_, _, err := client.TransferRecipientAPI.TransferrecipientCreate(ctx).\n  TransferRecipientCreate(paystack.TransferRecipientCreate{Name: "Ada Lovelace", Type: "nuban"}).\n  Execute()\n```',
  ],
  [
    "Transfers",
    '```go\n_, _, err := client.TransferAPI.TransferCreate(ctx).\n  TransferInitiate(paystack.TransferInitiate{Source: "balance", Amount: 5000, Recipient: "RCP_xxx"}).\n  Execute()\n```',
  ],
  [
    "Transfers Control (OTP settings; under Transfers)",
    "```go\n_, _, err := client.TransferAPI.TransferEnableOtp(ctx).Execute()\n```",
  ],
  ["Balance", "```go\nbalance, _, err := client.BalanceAPI.BalanceFetch(ctx).Execute()\n```"],
  [
    "Payment Requests (Invoices)",
    '```go\n_, _, err := client.PaymentRequestAPI.PaymentRequestCreate(ctx).\n  PaymentRequestCreate(paystack.PaymentRequestCreate{Amount: 5000, Description: "Consulting invoice"}).\n  Execute()\n```',
  ],
  [
    "Verification (Resolve Account / Validate Account / Resolve Card BIN)",
    '```go\nresolved, _, err := client.BankAPI.BankResolveAccountNumber(ctx).\n  AccountNumber("0001234567").\n  BankCode("057").\n  Execute()\n```',
  ],
  [
    "Products",
    '```go\n_, _, err := client.ProductAPI.ProductCreate(ctx).\n  ProductCreate(paystack.ProductCreate{Name: "T-shirt", Price: 5000, Currency: "NGN"}).\n  Execute()\n```',
  ],
  [
    "Storefronts",
    "```go\nstorefronts, _, err := client.StorefrontAPI.StorefrontList(ctx).Execute()\n```",
  ],
  [
    "Orders",
    '```go\n_, _, err := client.OrderAPI.OrderCreate(ctx).\n  OrderCreate(paystack.OrderCreate{Customer: "CUS_xxx"}).\n  Execute()\n```',
  ],
  [
    "Payment Pages",
    '```go\n_, _, err := client.PageAPI.PageCreate(ctx).\n  PageCreate(paystack.PageCreate{Name: "Event Ticket", Amount: 5000}).\n  Execute()\n```',
  ],
  [
    "Settlements",
    "```go\nsettlements, _, err := client.SettlementAPI.SettlementList(ctx).Execute()\n```",
  ],
  [
    "Integration",
    "```go\ntimeout, _, err := client.IntegrationAPI.IntegrationFetchPaymentSessionTimeout(ctx).Execute()\n```",
  ],
  [
    "Control Panel (Payment session timeout; under Integration)",
    "```go\n_, _, err := client.IntegrationAPI.IntegrationUpdatePaymentSessionTimeout(ctx).\n  Timeout(20).\n  Execute()\n```",
  ],
  [
    "Refunds",
    "```go\n_, _, err := client.RefundAPI.RefundCreate(ctx).\n  RefundCreate(paystack.RefundCreate{Transaction: 123456789, Amount: paystack.PtrInt32(5000)}).\n  Execute()\n```",
  ],
  ["Disputes", "```go\ndisputes, _, err := client.DisputeAPI.DisputeList(ctx).Execute()\n```"],
  [
    "Banks",
    '```go\nbanks, _, err := client.BankAPI.BankList(ctx).\n  Country("nigeria").\n  Execute()\n```',
  ],
  [
    "Miscellaneous",
    "```go\ncountries, _, err := client.MiscellaneousAPI.MiscellaneousListCountries(ctx).Execute()\n```",
  ],
];

MODULE_EXAMPLES.php = [
  [
    "Transactions",
    "```php\n$response = $transactionApi->transactionInitialize(\n    new TransactionInitialize(['email' => 'customer@example.com', 'amount' => 5000])\n);\n```",
  ],
  [
    "Verify Payments (Transaction verification)",
    "```php\n$verified = $transactionApi->transactionVerify('ref_123');\n```",
  ],
  [
    "Charges",
    "```php\n$chargeApi->chargeCreate(new ChargeCreateRequest(['email' => 'customer@example.com']));\n```",
  ],
  [
    "Bulk Charges",
    "```php\n$bulkChargeApi->bulkChargeInitiate([\n    new BulkChargeInitiate(['authorization' => 'AUTH_xxx', 'amount' => 5000, 'reference' => 'bulk-ref-1']),\n]);\n```",
  ],
  [
    "Subaccounts",
    "```php\n$subaccountApi->subaccountCreate(new SubaccountCreate(['business_name' => 'Acme Stores']));\n```",
  ],
  [
    "Transaction Splits",
    "```php\n$splitApi->splitCreate(new SplitCreate(['name' => 'Main split', 'type' => 'percentage', 'currency' => 'NGN']));\n```",
  ],
  ["Terminal", "```php\n$terminals = $terminalApi->terminalList();\n```"],
  [
    "Virtual Terminal",
    "```php\n$virtualTerminalApi->virtualTerminalCreate(new VirtualTerminalCreate(['name' => 'Web checkout terminal']));\n```",
  ],
  [
    "Customers",
    "```php\n$customerApi->customerCreate(new CustomerCreate(['email' => 'customer@example.com']));\n```",
  ],
  [
    "Direct Debit",
    "```php\n$directDebitApi->directdebitInitialize(new DirectDebitInitializeRequest(['email' => 'customer@example.com']));\n```",
  ],
  [
    "Dedicated Virtual Accounts",
    "```php\n$dedicatedVirtualAccountApi->dedicatedAccountAssign(new DedicatedVirtualAccountAssign(['customer' => 12345]));\n```",
  ],
  [
    "Apple Pay",
    "```php\n$applePayApi->applePayRegisterDomain(new ApplePayParam(['domain_name' => 'example.com']));\n```",
  ],
  [
    "Plans",
    "```php\n$planApi->planCreate(new PlanCreate(['name' => 'Starter', 'amount' => 500000, 'interval' => 'monthly']));\n```",
  ],
  [
    "Subscriptions",
    "```php\n$subscriptionApi->subscriptionCreate(new SubscriptionCreate(['customer' => 'CUS_xxx', 'plan' => 'PLN_xxx']));\n```",
  ],
  [
    "Transfer Recipients",
    "```php\n$transferRecipientApi->transferrecipientCreate(new TransferRecipientCreate(['name' => 'Ada Lovelace', 'type' => 'nuban']));\n```",
  ],
  [
    "Transfers",
    "```php\n$transferApi->transferCreate(new TransferInitiate(['source' => 'balance', 'amount' => 5000, 'recipient' => 'RCP_xxx']));\n```",
  ],
  [
    "Transfers Control (OTP settings; under Transfers)",
    "```php\n$transferApi->transferEnableOtp();\n```",
  ],
  ["Balance", "```php\n$balance = $balanceApi->balanceFetch();\n```"],
  [
    "Payment Requests (Invoices)",
    "```php\n$paymentRequestApi->paymentRequestCreate(new PaymentRequestCreate(['amount' => 5000, 'description' => 'Consulting invoice']));\n```",
  ],
  [
    "Verification (Resolve Account / Validate Account / Resolve Card BIN)",
    "```php\n$resolved = $bankApi->bankResolveAccountNumber('0001234567', '057');\n```",
  ],
  [
    "Products",
    "```php\n$productApi->productCreate(new ProductCreate(['name' => 'T-shirt', 'price' => 5000, 'currency' => 'NGN']));\n```",
  ],
  ["Storefronts", "```php\n$storefronts = $storefrontApi->storefrontList();\n```"],
  ["Orders", "```php\n$orderApi->orderCreate(new OrderCreate(['customer' => 'CUS_xxx']));\n```"],
  [
    "Payment Pages",
    "```php\n$pageApi->pageCreate(new PageCreate(['name' => 'Event Ticket', 'amount' => 5000]));\n```",
  ],
  ["Settlements", "```php\n$settlements = $settlementApi->settlementList();\n```"],
  [
    "Integration",
    "```php\n$timeout = $integrationApi->integrationFetchPaymentSessionTimeout();\n```",
  ],
  [
    "Control Panel (Payment session timeout; under Integration)",
    "```php\n$integrationApi->integrationUpdatePaymentSessionTimeout(20);\n```",
  ],
  [
    "Refunds",
    "```php\n$refundApi->refundCreate(new RefundCreate(['transaction' => 123456789, 'amount' => 5000]));\n```",
  ],
  ["Disputes", "```php\n$disputes = $disputeApi->disputeList();\n```"],
  ["Banks", "```php\n$banks = $bankApi->bankList('nigeria');\n```"],
  ["Miscellaneous", "```php\n$countries = $miscellaneousApi->miscellaneousListCountries();\n```"],
];

MODULE_EXAMPLES.python = [
  [
    "Transactions",
    '```python\nresponse = transaction_api.transaction_initialize(\n    transaction_initialize=TransactionInitialize(email="customer@example.com", amount=5000)\n)\n```',
  ],
  [
    "Verify Payments (Transaction verification)",
    '```python\nverified = transaction_api.transaction_verify("ref_123")\n```',
  ],
  [
    "Charges",
    '```python\ncharge_api.charge_create(\n    charge_create_request=ChargeCreateRequest(email="customer@example.com")\n)\n```',
  ],
  [
    "Bulk Charges",
    '```python\nbulk_charge_api.bulk_charge_initiate([\n    BulkChargeInitiate(authorization="AUTH_xxx", amount=5000, reference="bulk-ref-1")\n])\n```',
  ],
  [
    "Subaccounts",
    '```python\nsubaccount_api.subaccount_create(\n    subaccount_create=SubaccountCreate(business_name="Acme Stores")\n)\n```',
  ],
  [
    "Transaction Splits",
    '```python\nsplit_api.split_create(\n    split_create=SplitCreate(name="Main split", type="percentage", currency="NGN")\n)\n```',
  ],
  ["Terminal", "```python\nterminals = terminal_api.terminal_list()\n```"],
  [
    "Virtual Terminal",
    '```python\nvirtual_terminal_api.virtual_terminal_create(\n    virtual_terminal_create=VirtualTerminalCreate(name="Web checkout terminal")\n)\n```',
  ],
  [
    "Customers",
    '```python\ncustomer_api.customer_create(\n    customer_create=CustomerCreate(email="customer@example.com")\n)\n```',
  ],
  [
    "Direct Debit",
    '```python\ndirect_debit_api.directdebit_initialize(\n    direct_debit_initialize_request=DirectDebitInitializeRequest(email="customer@example.com")\n)\n```',
  ],
  [
    "Dedicated Virtual Accounts",
    "```python\ndedicated_virtual_account_api.dedicated_account_assign(\n    dedicated_virtual_account_assign=DedicatedVirtualAccountAssign(customer=12345)\n)\n```",
  ],
  [
    "Apple Pay",
    '```python\napple_pay_api.apple_pay_register_domain(\n    apple_pay_param=ApplePayParam(domain_name="example.com")\n)\n```',
  ],
  [
    "Plans",
    '```python\nplan_api.plan_create(\n    plan_create=PlanCreate(name="Starter", amount=500000, interval="monthly")\n)\n```',
  ],
  [
    "Subscriptions",
    '```python\nsubscription_api.subscription_create(\n    subscription_create=SubscriptionCreate(customer="CUS_xxx", plan="PLN_xxx")\n)\n```',
  ],
  [
    "Transfer Recipients",
    '```python\ntransfer_recipient_api.transferrecipient_create(\n    transfer_recipient_create=TransferRecipientCreate(name="Ada Lovelace", type="nuban")\n)\n```',
  ],
  [
    "Transfers",
    '```python\ntransfer_api.transfer_create(\n    transfer_initiate=TransferInitiate(source="balance", amount=5000, recipient="RCP_xxx")\n)\n```',
  ],
  [
    "Transfers Control (OTP settings; under Transfers)",
    "```python\ntransfer_api.transfer_enable_otp()\n```",
  ],
  ["Balance", "```python\nbalance = balance_api.balance_fetch()\n```"],
  [
    "Payment Requests (Invoices)",
    '```python\npayment_request_api.payment_request_create(\n    payment_request_create=PaymentRequestCreate(amount=5000, description="Consulting invoice")\n)\n```',
  ],
  [
    "Verification (Resolve Account / Validate Account / Resolve Card BIN)",
    '```python\nresolved = bank_api.bank_resolve_account_number("0001234567", "057")\n```',
  ],
  [
    "Products",
    '```python\nproduct_api.product_create(\n    product_create=ProductCreate(name="T-shirt", price=5000, currency="NGN")\n)\n```',
  ],
  ["Storefronts", "```python\nstorefronts = storefront_api.storefront_list()\n```"],
  [
    "Orders",
    '```python\norder_api.order_create(order_create=OrderCreate(customer="CUS_xxx"))\n```',
  ],
  [
    "Payment Pages",
    '```python\npage_api.page_create(page_create=PageCreate(name="Event Ticket", amount=5000))\n```',
  ],
  ["Settlements", "```python\nsettlements = settlement_api.settlement_list()\n```"],
  [
    "Integration",
    "```python\ntimeout = integration_api.integration_fetch_payment_session_timeout()\n```",
  ],
  [
    "Control Panel (Payment session timeout; under Integration)",
    "```python\nintegration_api.integration_update_payment_session_timeout(20)\n```",
  ],
  [
    "Refunds",
    "```python\nrefund_api.refund_create(refund_create=RefundCreate(transaction=123456789, amount=5000))\n```",
  ],
  ["Disputes", "```python\ndisputes = dispute_api.dispute_list()\n```"],
  ["Banks", '```python\nbanks = bank_api.bank_list(country="nigeria")\n```'],
  ["Miscellaneous", "```python\ncountries = miscellaneous_api.miscellaneous_list_countries()\n```"],
];

const SHARED_VALUES = {
  api_basics: [
    "## API Basics",
    "",
    "- Base URL: `https://api.paystack.co`",
    "- HTTPS is required for all requests.",
    "- Requests and responses are JSON-based.",
    "- Most successful responses follow the `status`, `message`, `data`, and optional `meta` envelope described in `Paystack-API/0a-Introduction.md`.",
    "- Amounts are usually sent in currency subunits such as kobo, pesewas, or cents. Check the module docs for currency-specific rules.",
  ].join("\n"),
  authentication: [
    "## Authentication & Environments",
    "",
    "- Server-side SDKs should use your secret key (`sk_test_*` or `sk_live_*`).",
    "- Browser SDKs should use only your public key (`pk_test_*` or `pk_live_*`).",
    "- Send server-side API credentials as `Authorization: Bearer YOUR_SECRET_KEY`.",
    "- Test and live modes use different keys and isolated environments.",
    "- Rotate keys if they are exposed, and never commit secret keys to source control.",
    "- If you enable IP whitelisting in Paystack, requests from non-whitelisted IPs will be blocked.",
  ].join("\n"),
  pagination_overview: [
    "## Pagination",
    "",
    "- Paystack supports both offset pagination and cursor pagination.",
    "- Offset pagination uses `page` and `perPage`.",
    "- Cursor pagination uses `use_cursor=true` plus `next` or `previous` cursors returned in `meta`.",
    "- Cursor pagination is especially useful for large or frequently changing datasets.",
    "- The exact `meta` shape varies by endpoint and pagination mode.",
  ].join("\n"),
  errors_overview: [
    "## Errors",
    "",
    "- Paystack uses conventional HTTP status codes such as `200`, `201`, `400`, `401`, `404`, and `5xx`.",
    "- Error responses typically include `status`, `message`, `type`, `code`, and optional diagnostic `meta` information.",
    "- Error types described in `Paystack-API/0d-Errors.md` include `api_error`, `validation_error`, and `processor_error`.",
    "- For charge and verify flows, always inspect the returned response body and status fields, not just the HTTP code.",
  ].join("\n"),
  modules_list: MODULES.map((moduleName) => `- ${moduleName}`).join("\n"),
  module_schema_table: [
    "| Module | Schema / model family |",
    "| --- | --- |",
    ...MODULE_SCHEMAS.map(([moduleName, family]) => `| ${moduleName} | \`${family}\` |`),
  ].join("\n"),
};

/** @param {[string, string][]} examples */
function renderModuleExamples(examples) {
  return examples.map(([moduleName, snippet]) => `### ${moduleName}\n\n${snippet}`).join("\n\n");
}

const TARGETS = [
  {
    name: "node",
    templatePath: path.join(templatesDir, "node.md"),
    filePath: path.join(repoRoot, "sdks/node/README.md"),
    values: {
      package_name: "@alexasomba/paystack-node",
      package_description:
        "TypeScript-first Paystack API client for Node.js, generated from the official Paystack OpenAPI spec.",
      package_install: "pnpm add @alexasomba/paystack-node",
      sdk_repo_url: "https://github.com/alexasomba/paystack-node",
      related_sdk_1_name: "@alexasomba/paystack-browser",
      related_sdk_1_url: "https://github.com/alexasomba/paystack-browser",
      related_sdk_1_description: "Optimized for browser fetches.",
      related_sdk_2_name: "@alexasomba/paystack-axios",
      related_sdk_2_url: "https://github.com/alexasomba/paystack-axios",
      related_sdk_2_description: "For projects using Axios.",
    },
  },
  {
    name: "axios",
    templatePath: path.join(templatesDir, "axios.md"),
    filePath: path.join(repoRoot, "sdks/axios/README.md"),
    values: {
      package_name: "@alexasomba/paystack-axios",
      package_description:
        "Paystack API client backed by Axios, providing a familiar ecosystem for Axios users while remaining fully typed and spec-compliant.",
      package_install: "pnpm add @alexasomba/paystack-axios axios",
      sdk_repo_url: "https://github.com/alexasomba/paystack-axios",
      related_sdk_1_name: "@alexasomba/paystack-node",
      related_sdk_1_url: "https://github.com/alexasomba/paystack-node",
      related_sdk_1_description: "Native Node.js fetch implementation.",
      related_sdk_2_name: "@alexasomba/paystack-browser",
      related_sdk_2_url: "https://github.com/alexasomba/paystack-browser",
      related_sdk_2_description: "Optimized for browser fetches.",
    },
  },
  {
    name: "browser",
    templatePath: path.join(templatesDir, "browser.md"),
    filePath: path.join(repoRoot, "sdks/browser/README.md"),
    values: {
      package_name: "@alexasomba/paystack-browser",
      package_description:
        "Paystack API client optimized for browser environments, providing a lightweight, fully typed, and spec-compliant way to interact with the Paystack API via native fetch.",
      package_install: "pnpm add @alexasomba/paystack-browser",
      sdk_repo_url: "https://github.com/alexasomba/paystack-browser",
      related_sdk_1_name: "@alexasomba/paystack-node",
      related_sdk_1_url: "https://github.com/alexasomba/paystack-node",
      related_sdk_1_description: "Native Node.js SDK with webhook support.",
      related_sdk_2_name: "@alexasomba/paystack-axios",
      related_sdk_2_url: "https://github.com/alexasomba/paystack-axios",
      related_sdk_2_description: "For projects using Axios.",
    },
  },
  {
    name: "python",
    templatePath: path.join(templatesDir, "python.md"),
    filePath: path.join(repoRoot, "sdks/python/README.md"),
    values: {
      package_name: "alexasomba-paystack",
      package_slug: "alexasomba_paystack",
      package_version: "1.1.1",
      sdk_repo_url: "https://github.com/alexasomba/paystack-python",
    },
  },
  {
    name: "php",
    templatePath: path.join(templatesDir, "php.md"),
    filePath: path.join(repoRoot, "sdks/php/README.md"),
    values: {
      package_name: "Paystack",
      package_version: "1.1.1",
      sdk_repo_url: "https://github.com/alexasomba/paystack-php",
    },
  },
  {
    name: "go",
    templatePath: path.join(templatesDir, "go.md"),
    filePath: path.join(repoRoot, "sdks/go/README.md"),
    values: {
      package_name: "Go API client for paystack",
      package_version: "1.1.1",
      sdk_repo_url: "https://github.com/alexasomba/paystack-go",
    },
  },
];

/** @param {string} filePath */
async function readText(filePath) {
  return fs.readFile(filePath, "utf8");
}

/**
 * @param {string} filePath
 * @param {string} next
 */
async function writeTextIfChanged(filePath, next) {
  const prev = await readText(filePath);
  if (prev === next) return false;
  await fs.writeFile(filePath, next, "utf8");
  return true;
}

/** @param {string} text */
function normalizeNewlines(text) {
  return text.replace(/\r\n/g, "\n");
}

/**
 * @param {string} template
 * @param {Record<string, string>} values
 */
function renderTemplate(template, values) {
  return template.replace(/\{\{([a-z0-9_]+)\}\}/g, (match, key) => values[key] ?? match);
}

async function main() {
  const results = await Promise.all(
    TARGETS.map(async ({ name, templatePath, filePath, values }) => {
      try {
        const template = normalizeNewlines(await readText(templatePath));
        const next =
          renderTemplate(
            template,
            /** @type {any} */ ({
              ...SHARED_VALUES,
              ...values,
              module_examples: renderModuleExamples(
                /** @type {any} */ (MODULE_EXAMPLES)[name] ?? [],
              ),
            }),
          ).trimEnd() + "\n";
        const changed = await writeTextIfChanged(filePath, next);
        return { name, changed };
      } catch (error) {
        return { name, changed: false, error };
      }
    }),
  );

  const failed = results.filter((result) => result.error !== undefined);
  if (failed.length > 0) {
    for (const failure of failed) {
      console.error(`[sdk:readme] Failed for ${failure.name}:`, failure.error);
    }
    process.exitCode = 1;
    return;
  }

  const changed = results.filter((result) => result.changed).map((result) => result.name);
  if (changed.length) {
    console.log(`[sdk:readme] Updated: ${changed.join(", ")}`);
  } else {
    console.log("[sdk:readme] No changes needed");
  }
}

await main();
