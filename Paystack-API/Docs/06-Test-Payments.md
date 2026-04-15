# Test Payments

You can use the following test details to test different payment channels.

## Cards

### Card expiry date

The expiry date for each card can be any date in the future.

### Successful cards

> [!NOTE]
> **No validation (reusable)**  
> **Card:** `4084 0840 8408 4081`  
> **Expiry:** `04/27`  
> **CVV:** `408`

> [!NOTE]
> **PIN validation**  
> **Card:** `5078 5078 5078 5078 12`  
> **Expiry:** `04/27`  
> **CVV:** `081`  
> **Pin:** `1111`

> [!NOTE]
> **PIN + OTP validation**  
> **Card:** `5060 6666 6666 6666 666`  
> **Expiry:** `04/27`  
> **CVV:** `123`  
> **Pin:** `1234`  
> **OTP:** `123456`

> [!NOTE]
> **PIN + Phone + OTP validation**  
> **Card:** `5078 5078 5078 5078 04`  
> **Expiry:** `04/27`  
> **CVV:** `884`  
> **Pin:** `0000`  
> **OTP:** `123456`

> [!NOTE]
> **Bank Auth Simulation (reusable)**  
> **Card:** `5192 6027 2058 4796`  
> **Expiry:** `04/27`  
> **CVV:** `123`

### Failed cards

> [!ERROR]
> **Declined**  
> **Card:** `4084 0800 0000 5408`  
> **Expiry:** `04/27`  
> **CVV:** `001`

> [!ERROR]
> **Token Not Generated**  
> **Card:** `5078 5078 5078 5078 53`  
> **Expiry:** `04/27`  
> **CVV:** `082`  
> **Pin:** `0000`

### Refunds

To test for certain refunds scenario, you can use these cards when completing a transaction. The transaction will be successful but the card used determines the response of a refund request.

> [!WARNING]
> **Failed**  
> **Card:** `4084 0800 0067 1803`  
> **Expiry:** `04/27`  
> **CVV:** `180`

> [!WARNING]
> **Needs attention**  
> **Card:** `4084 0800 0067 1902`  
> **Expiry:** `04/27`  
> **CVV:** `190`

### API errors

> [!ERROR]
> **Insufficent funds**  
> **Card:** `4084 0800 0067 0037`  
> **Expiry:** `04/27`  
> **CVV:** `787`

---

## EFT & Account usage

These accounts are supposed to be used to test for certain refunds scenario. However, since the accounts will always cause the transaction to be successful, you can also use them to test for successful transactions. The title on the cards show what the refund status will be when you initiate a refund on the transaction.

- **Failed:** `101 220 493 6`
- **Needs attention:** `101 220 493 5`

---

## Bank accounts

Nigerian merchants can use a regular bank account to create a transfer recipient when testing in test mode.

> [!NOTE]
> **Zenith Bank (transaction)**  
> **Account:** `000 000 000 0`  
> **Birthday:** `2007-04-15`  
> **OTP:** `123456`

> [!NOTE]
> **Zenith Bank (transfer)**  
> **Account:** `000 000 000 0`  
> **Code:** `057`

> [!NOTE]
> **Kuda Bank**  
> **Account:** `+234 810 000 000 0`  
> **Code:** `50211`  
> **Token:** `123456`

---

## Mobile money

> [!NOTE]
> **MTN (No PIN/OTP)**  
> **Number:** `055 123 498 7`  
> **Network:** `MTN`

> [!NOTE]
> **M-Pesa (No PIN/OTP)**  
> **Number:** `+254 710 000 000`  
> **Network:** `M-Pesa`

> [!NOTE]
> **CIV - Orange**  
> **Number:** `070 000 000 0`  
> **Network:** `Orange`  
> **OTP:** `1234`

---

## Dedicated virtual account

You can make use of the sample bank application we created to initiate a transfer to your test virtual account. If you simply want to try out the dedicated virtual account product, make use of the test account below:

> [!TIP]
> **Demo Bank**  
> **Account:** `123 000 164 4`  
> **Pin:** `0000`
