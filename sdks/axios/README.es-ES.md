[English](README.md) · [Español](README.es-ES.md) · [Français](README.fr-FR.md)

# @alexasomba/paystack-axios

[![npm version](https://img.shields.io/npm/v/@alexasomba/paystack-axios.svg)](https://www.npmjs.com/package/@alexasomba/paystack-axios)
[![license](https://img.shields.io/npm/l/@alexasomba/paystack-axios.svg)](https://github.com/alexasomba/paystack-axios/blob/main/LICENSE)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@alexasomba/paystack-axios)](https://bundlephobia.com/package/@alexasomba/paystack-axios)

Cliente de la API de Paystack basado en Axios; ofrece un entorno familiar para los usuarios de Axios, manteniendo un tipado completo y cumpliendo estrictamente con la especificación.

## Características

- **Basado en Axios**: Reutiliza tu instancia de Axios, interceptores y patrones de configuración.
- **Precisión basada en especificaciones**: Generado directamente a partir de la especificación OpenAPI de Paystack.
- **100% tipado (Type-safe)**: Soporte completo para TypeScript, con tipos generados para cada endpoint, solicitud y respuesta.
- **Gestión detallada de errores**: `PaystackError` conserva los campos `code`, `type` y `meta` de Paystack, junto con el ID de solicitud, el estado HTTP y el cuerpo de la respuesta sin procesar.
- **Reintentos inteligentes e idempotencia**: Incluye compatibilidad integrada para reintentos seguros en métodos idempotentes y gestión automática de `Idempotency-Key`.

## Instalación

```bash
pnpm add @alexasomba/paystack-axios axios
```

## Funciones para agentes (Agent Skills)

Este paquete incluye funciones (skills) de TanStack Intent para la integración con Paystack con asistencia de agentes:

```bash
npx @tanstack/intent@latest list
npx @tanstack/intent@latest install --map
npx @tanstack/intent@latest load @alexasomba/paystack-axios#paystack-axios-api-operations
```

Entre las funciones útiles se encuentran `paystack-axios-client-setup`, `paystack-axios-api-operations`, `paystack-axios-operation-discovery`, `paystack-axios-transport`, `paystack-axios-typed-payloads`, `paystack-axios-responses-errors`, `paystack-axios-retries-idempotency` y `paystack-axios-webhooks`.

Autentica las solicitudes utilizando tu clave secreta de Paystack:

```ts
process.env.PAYSTACK_SECRET_KEY = "sk_test_...";
```

## Inicio rápido

```ts
import { createPaystack, assertOk } from "@alexasomba/paystack-axios";

const paystack = createPaystack({
  secretKey: process.env.PAYSTACK_SECRET_KEY!,
  idempotencyKey: "auto",
});

const result = await paystack.transaction_initialize({
  body: {
    email: "customer@example.com",
    amount: 5000,
  },
});

const data = assertOk(result);
console.log(data.authorization_url);
```

`assertOk` devuelve el payload (carga útil) exitoso de Paystack y genera un `PaystackError` estructurado en caso de respuestas que no sean de tipo 2xx, o bien, devuelve envoltorios (envelopes) de tipo `{ status: false }`.

## Conceptos básicos de la API

- URL base: `https://api.paystack.co`
- Se requiere HTTPS para todas las solicitudes.
- Tanto las solicitudes como las respuestas están basadas en formato JSON.
- La mayoría de las respuestas exitosas siguen la estructura de envoltorio (envelope) compuesta por `status`, `message`, `data` y, opcionalmente, `meta`, tal como se describe en `Paystack-API/0a-Introduction.md`.
- Los importes suelen enviarse en subunidades de moneda, como kobo, pesewas o céntimos. Consulta la documentación del módulo para conocer las reglas específicas de cada moneda.

## Autenticación y entornos

- Los SDK del lado del servidor deben utilizar tu clave secreta (`sk_test_*` o `sk_live_*`).
- Los SDK para navegador deben utilizar únicamente tu clave pública (`pk_test_*` o `pk_live_*`).
- Envía las credenciales de la API del lado del servidor como `Authorization: Bearer YOUR_SECRET_KEY`.
- Los modos de prueba (test) y de producción (live) utilizan claves diferentes y entornos aislados.
- Rota las claves si estas quedan expuestas y nunca incluyas claves secretas en el control de versiones (repositorio de código).
- Si habilitas la lista blanca de direcciones IP en Paystack, las solicitudes provenientes de direcciones IP que no estén en dicha lista serán bloqueadas.

## Configuración avanzada

### Uso de una instancia personalizada de Axios

Puedes proporcionar tu propia instancia de Axios si deseas reutilizar interceptores, configuraciones de proxy, middleware de observabilidad o valores predeterminados a nivel de toda la organización.

```ts
import axios from "axios";
import { createPaystack } from "@alexasomba/paystack-axios";

const myAxios = axios.create({
  timeout: 10000,
});

const paystack = createPaystack({
  secretKey: "sk_...",
  axiosInstance: myAxios,
});
```

### Configuración granular de reintentos

Los reintentos son especialmente útiles ante fallos transitorios, como `408`, `429` y respuestas temporales del tipo `5xx`. Mantén habilitada la idempotencia en las solicitudes POST al reintentar operaciones que modifican datos.

## Exportación de tipos estables

Este SDK exporta segmentos de cliente (client slices) agrupados y estables, así como alias seleccionados para solicitudes, consultas y respuestas. De este modo, las integraciones que dependen de este SDK no necesitan reconstruir los tipos a partir de `ReturnType<typeof createPaystack>`, `paths` o `operations`.

```ts
import {
  createPaystack,
  type Paystack,
  type PaystackTransactionClient,
  type PaystackSubscriptionClient,
  type TransactionInitializePayload,
  type TransactionChargeAuthorizationPayload,
  type SubscriptionCreatePayload,
  type SubscriptionListQueryParams,
  type RefundCreatePayload,
} from "@alexasomba/paystack-axios";

const paystack: Paystack = createPaystack({
  secretKey: process.env.PAYSTACK_SECRET_KEY!,
});

const transactionClient: PaystackTransactionClient = paystack.transaction;
const subscriptionClient: PaystackSubscriptionClient = paystack.subscription;

const tx: TransactionInitializePayload = {
  email: "customer@example.com",
  amount: 5000,
};

const chargeAuthorization: TransactionChargeAuthorizationPayload = {
  email: "customer@example.com",
  amount: 2500,
  authorization_code: "AUTH_123",
};

const subscriptionCreate: SubscriptionCreatePayload = {
  customer: "CUS_123",
  plan: "PLN_123",
};

const subscriptionList: SubscriptionListQueryParams = {
  customer: 123,
};

const refundCreate: RefundCreatePayload = {
  transaction: "TRX_123",
  amount: 1000,
};
```

Entre los alias más destacados se incluyen: inicialización de transacciones / autorización de cargos / verificación; creación, listado, desactivación, activación, obtención y gestión de enlaces o correos electrónicos para suscripciones; obtención, creación y actualización de clientes; listado, creación, actualización y obtención de planes o productos; listado y obtención de disputas; creación y obtención de reembolsos; creación y obtención de solicitudes de pago; envío de eventos a terminales; así como herramientas de verificación para la resolución y validación de cuentas, y la consulta de BIN de tarjetas.

Los segmentos de cliente (client slices) incluyen `PaystackTransactionClient`, `PaystackCustomerClient`, `PaystackSubscriptionClient`, `PaystackPlanClient`, `PaystackProductClient`, `PaystackDisputeClient` y `PaystackRefundClient`.

Los métodos agrupados reflejan las operaciones de OpenAPI generadas que son compatibles. Los elementos auxiliares no compatibles, como `subscription.update`, no forman parte, de forma intencionada, de la interfaz pública del SDK.

## Paginación

- Paystack admite tanto la paginación basada en desplazamiento (offset) como la paginación basada en cursor.
- La paginación basada en desplazamiento utiliza `page` y `perPage`.
- La paginación basada en cursor utiliza `use_cursor=true`, junto con los cursores `next` o `previous`, que se devuelven en `meta`.
- La paginación basada en cursor es especialmente útil para conjuntos de datos grandes o que cambian con frecuencia.
- La estructura exacta de `meta` varía según el endpoint y el modo de paginación.

```ts
const paystack = createPaystack({
  secretKey: "sk_...",
  retry: {
    retries: 3,
    retryOnStatuses: [408, 429, 503],
  },
});
```

## Gestión de errores

```ts
import { toPaystackApiError } from "@alexasomba/paystack-axios";

const result = await paystack.transaction_initialize({/* ... */});
const error = toPaystackApiError(result);

if (error) {
  console.error(`Status ${error.status}: ${error.message}`);
  console.error(`Paystack code: ${error.code}`);
  console.error(`Paystack type: ${error.type}`);
  console.error(`Paystack Request ID: ${error.requestId}`);
  console.error(error.raw);
}
```

Utilice `error.code` y `error.type` para gestionar los distintos casos ante fallos de validación, del procesador o de la API. El `requestId` resulta útil al correlacionar registros (logs) o al escalar un problema ante el equipo de soporte de Paystack, mientras que `error.raw` / `error.body` permiten conservar el envoltorio de respuesta original para fines de diagnóstico.

## Errores

- Paystack utiliza códigos de estado HTTP convencionales, tales como `200`, `201`, `400`, `401`, `404` y `5xx`.
- Las respuestas de error suelen incluir `status`, `message`, `type`, `code`, además de información de diagnóstico opcional `meta`.
- Los tipos de error descritos en `Paystack-API/0d-Errors.md` incluyen `api_error`, `validation_error` y `processor_error`.
- En los flujos de cobro (charge) y verificación (verify), examine siempre el cuerpo de la respuesta devuelta y los campos de estado, no solo el código HTTP.

## Cobertura

Este SDK se genera a partir de la especificación del SDK contenida en este monorepositorio y, actualmente, abarca el conjunto completo de operaciones tipadas generadas para el contrato alineado con la API de Paystack.

## Módulos

Para este SDK, estas familias de esquemas se exponen a través de tipos de TypeScript generados en `src/openapi-types.ts` y funciones auxiliares de operaciones en `src/operations.ts`.

| Módulo                                                                    | Familia de esquemas / modelos                            |
| ------------------------------------------------------------------------- | -------------------------------------------------------- |
| Transacciones                                                             | `Transaction*`                                           |
| Verificación de pagos (verificación de transacciones)                     | `VerifyResponse / TransactionFetchResponse`              |
| Cargos                                                                    | `Charge*`                                                |
| Cargos masivos                                                            | `BulkCharge*`                                            |
| Subcuentas                                                                | `Subaccount*`                                            |
| División de transacciones                                                 | `Split*`                                                 |
| Terminal                                                                  | `Terminal*`                                              |
| Terminal virtual                                                          | `VirtualTerminal*`                                       |
| Clientes                                                                  | `Customer*`                                              |
| Débito directo                                                            | `DirectDebit*`                                           |
| Cuentas virtuales dedicadas                                               | `DedicatedNuban* / DedicatedVirtualAccount*`             |
| Apple Pay                                                                 | `ApplePay*`                                              |
| Planes                                                                    | `Plan*`                                                  |
| Suscripciones                                                             | `Subscription*`                                          |
| Destinatarios de transferencias                                           | `TransferRecipient*`                                     |
| Transferencias                                                            | `Transfer*`                                              |
| Control de transferencias (configuración de OTP; en Transferencias)       | `TransferEnable* / TransferDisable* / TransferFinalize*` |
| Saldo                                                                     | `Balance*`                                               |
| Solicitudes de pago (facturas)                                            | `PaymentRequest*`                                        |
| Verificación (resolver cuenta / validar cuenta / resolver BIN de tarjeta) | `Verification*`                                          |
| Productos                                                                 | `Product*`                                               |
| Tiendas (escaparates)                                                     | `Storefront*`                                            |
| Pedidos                                                                   | `Order*`                                                 |
| Páginas de pago                                                           | `Page*`                                                  |
| Liquidaciones                                                             | `Settlement*`                                            |
| Integración                                                               | `Integration*`                                           |
| Panel de control (tiempo de espera de la sesión de pago; en Integración)  | `ControlPanel*`                                          |
| Reembolsos                                                                | `Refund*`                                                |
| Disputas                                                                  | `Dispute*`                                               |
| Bancos                                                                    | `Bank*`                                                  |
| Varios                                                                    | `Miscellaneous* / Currency`                              |

## Ejemplos de módulos

Estos son ejemplos deliberadamente breves. Úsalos como puntos de partida y, a continuación, amplía los cuerpos de las solicitudes (request bodies) con los campos tipados que te ofrece tu editor y `src/openapi-types.ts`.

### Transacciones

```ts
const tx = await paystack.transaction_initialize({
  body: { email: "customer@example.com", amount: 5000 },
});
```

### Verificación de pagos (verificación de transacciones)

```ts
const verified = await paystack.transaction_verify({
  params: { path: { reference: "ref_123" } },
});
```

### Cargos

```ts
await paystack.charge_create({
  body: {
    email: "customer@example.com",
    amount: 5000,
    bank: { code: "057", account_number: "0001234567" },
  },
});
```

### Cargos masivos

```ts
await paystack.bulkCharge_initiate({
  body: [{ authorization: "AUTH_xxx", amount: 5000, reference: "bulk-ref-1" }],
});
```

### Subcuentas

```ts
await paystack.subaccount_create({
  body: {
    business_name: "Acme Stores",
    settlement_bank: "057",
    account_number: "0001234567",
    percentage_charge: 10,
  },
});
```

### División de transacciones

```ts
await paystack.split_create({
  body: { name: "Main split", type: "percentage", currency: "NGN", subaccounts: [] },
});
```

### Terminal

```ts
const terminals = await paystack.terminal_list();
```

### Terminal virtual

```ts
await paystack.virtualTerminal_create({
  body: { name: "Web checkout terminal" },
});
```

### Clientes

```ts
await paystack.customer_create({
  body: { email: "customer@example.com", first_name: "Ada", last_name: "Lovelace" },
});
```

### Débito directo

```ts
await paystack.directdebit_initialize({
  body: { email: "customer@example.com", amount: 5000, bank_code: "057" },
});
```

### Cuentas virtuales dedicadas

```ts
await paystack.dedicatedAccount_assign({
  body: { customer: 12345, preferred_bank: "wema-bank" },
});
```

### Apple Pay

```ts
await paystack.applePay_registerDomain({
  body: { domainName: "example.com" },
});
```

### Planes

```ts
await paystack.plan_create({
  body: { name: "Starter", amount: 500000, interval: "monthly" },
});
```

### Suscripciones

```ts
await paystack.subscription_create({
  body: { customer: "CUS_xxx", plan: "PLN_xxx" },
});
```

### Destinatarios de transferencias

```ts
await paystack.transferrecipient_create({
  body: {
    type: "nuban",
    name: "Ada Lovelace",
    account_number: "0001234567",
    bank_code: "057",
    currency: "NGN",
  },
});
```

### Transferencias

```ts
await paystack.transfer_create({
  body: { source: "balance", amount: 5000, recipient: "RCP_xxx", reason: "Vendor payout" },
});
```

### Control de transferencias (configuración de OTP; dentro de Transferencias)

```ts
await paystack.transfer_enableOtp();
```

### Saldo

```ts
const balance = await paystack.balance_fetch();
```

### Solicitudes de pago (facturas)

```ts
await paystack.paymentRequest_create({
  body: { customer: "CUS_xxx", amount: 5000, description: "Consulting invoice" },
});
```

### Verificación (Resolver cuenta / Validar cuenta / Resolver BIN de tarjeta)

```ts
await paystack.bank_resolveAccountNumber({
  params: { query: { account_number: "0001234567", bank_code: "057" } },
});
```

### Productos

```ts
await paystack.product_create({
  body: { name: "T-shirt", description: "Cotton tee", price: 5000, currency: "NGN" },
});
```

### Tiendas

```ts
const storefronts = await paystack.storefront_list();
```

### Pedidos

```ts
await paystack.order_create({
  body: { customer: "CUS_xxx", items: [] },
});
```

### Páginas de pago

```ts
await paystack.page_create({
  body: { name: "Event Ticket", amount: 5000, description: "Landing page for ticket sales" },
});
```

### Liquidaciones

```ts
const settlements = await paystack.settlement_list();
```

### Integración

```ts
const timeout = await paystack.integration_fetchPaymentSessionTimeout();
```

### Panel de control (Tiempo de espera de la sesión de pago; en la sección de Integración)

```ts
await paystack.integration_updatePaymentSessionTimeout({
  body: { timeout: 20 },
});
```

### Reembolsos

```ts
await paystack.refund_create({
  body: { transaction: 123456789, amount: 5000 },
});
```

### Disputas

```ts
const disputes = await paystack.dispute_list();
```

### Bancos

```ts
const banks = await paystack.bank_list({ params: { query: { country: "nigeria" } } });
```

### Varios

```ts
const countries = await paystack.miscellaneous_listCountries();
```

## SDK relacionados

- [@alexasomba/paystack-node](https://github.com/alexasomba/paystack-node) - Implementación nativa de `fetch` para Node.js.
- [@alexasomba/paystack-browser](https://github.com/alexasomba/paystack-browser) - Optimizado para `fetch` en navegadores.

## Utilizado por

- **[Better Auth Paystack Plugin](https://github.com/alexasomba/better-auth-paystack)**: Un plugin integral de Paystack para Better Auth.

## Fuente

- Fuente del monorepo: [alexasomba/paystack-openapi](https://github.com/alexasomba/paystack-openapi)
- Repositorio del SDK independiente: [https://github.com/alexasomba/paystack-axios](https://github.com/alexasomba/paystack-axios)

## Licencia

MIT
