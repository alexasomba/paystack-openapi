[English](README.md) · [Español](README.es-ES.md) · [Français](README.fr-FR.md)

# Cliente de la API de Paystack para Go

Cliente para la API de Paystack escrito en Go, generado a partir de la especificación OpenAPI de Paystack incluida en este repositorio.

## ¿Por qué utilizar este SDK?

- Generado a partir de la especificación OpenAPI de Paystack (la fuente de referencia) contenida en este repositorio.
- Incluye utilidades para mejorar la fiabilidad, tales como gestión de tiempos de espera (timeouts), reintentos, idempotencia y errores de API estructurados.
- Ofrece cobertura de endpoints conforme a la especificación utilizada para generar el cliente.

## Instalación

```sh
go get github.com/alexasomba/paystack-go@latest
```

Luego, realiza la importación:

```go
import paystack "github.com/alexasomba/paystack-go"
```

Autentica tus solicitudes incluyendo tu clave secreta (secret key) de Paystack como un token de tipo "bearer" en la cabecera de la configuración generada.

## Inicio rápido

```go
package main

import (
	"context"
	"fmt"
	"os"

	paystack "github.com/alexasomba/paystack-go"
)

func main() {
	cfg := paystack.NewConfiguration()
	cfg.AddDefaultHeader("Authorization", "Bearer "+os.Getenv("PAYSTACK_SECRET_KEY"))

	client := paystack.NewAPIClient(cfg)
	resp, _, err := client.TransactionAPI.TransactionInitialize(context.Background()).
		TransactionInitialize(paystack.TransactionInitialize{
			Email:  "customer@example.com",
			Amount: paystack.PtrInt32(5000),
		}).
		Execute()
	if err != nil {
		panic(err)
	}

fmt.Println(resp.Data.AuthorizationUrl)
}
```

El cliente generado devuelve el objeto de respuesta tipado de Paystack, la respuesta HTTP sin procesar y un posible error. Al depurar problemas de integración, revisa tanto el error como el contenido (payload) de la respuesta.

## Conceptos básicos de la API

- URL base: `https://api.paystack.co`
- Es obligatorio utilizar HTTPS para todas las solicitudes.
- Tanto las solicitudes como las respuestas utilizan el formato JSON.
- La mayoría de las respuestas exitosas siguen la estructura de envoltorio (envelope) descrita en `Paystack-API/0a-Introduction.md`, que incluye los campos `status`, `message`, `data` y, opcionalmente, `meta`.
- Los importes suelen enviarse en subunidades de la moneda (por ejemplo: kobo, pesewas o centavos). Consulta la documentación del módulo para conocer las reglas específicas de cada moneda.

## Autenticación y entornos

- Los SDK que se ejecutan en el lado del servidor deben utilizar tu clave secreta (`sk_test_*` o `sk_live_*`).
- Los SDK para navegador deben utilizar únicamente tu clave pública (`pk_test_*` o `pk_live_*`).
- Utiliza `Authorization: Bearer YOUR_SECRET_KEY` para las credenciales de la API en el lado del servidor.
- Los modos de prueba (test) y de producción (live) emplean claves distintas y entornos aislados.
- Rota las claves si estas llegan a exponerse y nunca incluyas claves secretas en el control de versiones (repositorio de código).
- Si habilitas la lista blanca de direcciones IP en Paystack, las solicitudes provenientes de direcciones IP que no estén en dicha lista serán bloqueadas.

## Fiabilidad

Este SDK incluye utilidades opcionales en `reliability.go`:

```go
opts := paystack.DefaultReliabilityOptions()
opts.Timeout = 30 * time.Second
opts.Idempotency.Enabled = true
client, ctx := paystack.NewAPIClientWithReliability(os.Getenv("PAYSTACK_SECRET_KEY"), opts)
```

Utiliza estas herramientas cuando desees estandarizar, en un único lugar, el comportamiento relativo a los tiempos de espera (timeout), los reintentos y la idempotencia en todos tus servicios.

## Paginación

- Paystack admite tanto la paginación basada en desplazamiento (offset) como la basada en punteros (cursor).
- La paginación por desplazamiento utiliza `page` y `perPage`.
- La paginación por punteros utiliza `use_cursor=true`, junto con los punteros `next` o `previous`, los cuales se devuelven en `meta`.
- La paginación por punteros resulta especialmente útil para conjuntos de datos grandes o que cambian con frecuencia.
- La estructura exacta de `meta` varía según el endpoint y el modo de paginación utilizado.

## Cobertura

## Errores

- Paystack utiliza códigos de estado HTTP convencionales, tales como `200`, `201`, `400`, `401`, `404` y `5xx`.
- Las respuestas de error suelen incluir `status`, `message`, `type`, `code`, así como información de diagnóstico opcional `meta`.
- Los tipos de error descritos en `Paystack-API/0d-Errors.md` incluyen `api_error`, `validation_error` y `processor_error`.
- Para los flujos de cobro y verificación, examine siempre el cuerpo de la respuesta devuelta y los campos de estado, no solo el código HTTP.

Este SDK se genera a partir de [api/openapi.yaml](./api/openapi.yaml) e incluye actualmente el conjunto completo de operaciones derivadas de la especificación del SDK, la cual está alineada con la API de Paystack.

## Módulos

En este SDK, estas familias de esquemas se generan como modelos de Go en la raíz del paquete y son referenciadas por los servicios de API generados.

| Módulo                                                               | Familia de esquemas / modelos                            |
| -------------------------------------------------------------------- | -------------------------------------------------------- |
| Transacciones                                                        | `Transaction*`                                           |
| Verify Payments (Transaction verification)                           | `VerifyResponse / TransactionFetchResponse`              |
| Charges                                                              | `Charge*`                                                |
| Bulk Charges                                                         | `BulkCharge*`                                            |
| Subaccounts                                                          | `Subaccount*`                                            |
| Transaction Splits                                                   | `Split*`                                                 |
| Terminal                                                             | `Terminal*`                                              |
| Virtual Terminal                                                     | `VirtualTerminal*`                                       |
| Customers                                                            | `Customer*`                                              |
| Direct Debit                                                         | `DirectDebit*`                                           |
| Dedicated Virtual Accounts                                           | `DedicatedNuban* / DedicatedVirtualAccount*`             |
| Apple Pay                                                            | `ApplePay*`                                              |
| Plans                                                                | `Plan*`                                                  |
| Subscriptions                                                        | `Subscription*`                                          |
| Transfer Recipients                                                  | `TransferRecipient*`                                     |
| Transfers                                                            | `Transfer*`                                              |
| Transfers Control (OTP settings; under Transfers)                    | `TransferEnable* / TransferDisable* / TransferFinalize*` |
| Balance                                                              | `Balance*`                                               |
| Payment Requests (Invoices)                                          | `PaymentRequest*`                                        |
| Verification (Resolve Account / Validate Account / Resolve Card BIN) | `Verification*`                                          |
| Products                                                             | `Product*`                                               |
| Storefronts                                                          | `Storefront*`                                            |
| Orders                                                               | `Order*`                                                 |
| Payment Pages                                                        | `Page*`                                                  |
| Settlements                                                          | `Settlement*`                                            |
| Integration                                                          | `Integration*`                                           |
| Control Panel (Payment session timeout; under Integration)           | `ControlPanel*`                                          |
| Refunds                                                              | `Refund*`                                                |
| Disputes                                                             | `Dispute*`                                               |
| Bancos                                                               | `Bank*`                                                  |
| Varios                                                               | `Miscellaneous* / Currency`                              |

## Ejemplos de módulos

Estos ejemplos son deliberadamente breves. Úsalos como puntos de partida y, a continuación, amplía las estructuras de solicitud tipadas y los constructores de solicitudes (builders) de estilo fluido que ofrece el paquete generado.

### Transacciones

```go
resp, _, err := client.TransactionAPI.TransactionInitialize(ctx).
  TransactionInitialize(paystack.TransactionInitialize{Email: "customer@example.com", Amount: paystack.PtrInt32(5000)}).
  Execute()
```

### Verificación de pagos (verificación de transacciones)

```go
verified, _, err := client.TransactionAPI.TransactionVerify(ctx, "ref_123").Execute()
```

### Cargos

```go
_, _, err := client.ChargeAPI.ChargeCreate(ctx).
  ChargeCreate(paystack.ChargeCreateRequest{Email: "customer@example.com"}).
  Execute()
```

### Cargos masivos

```go
_, _, err := client.BulkChargeAPI.BulkChargeInitiate(ctx).
  BulkChargeInitiate([]paystack.BulkChargeInitiate{{Authorization: "AUTH_xxx", Amount: 5000, Reference: "bulk-ref-1"}}).
  Execute()
```

### Subcuentas

```go
_, _, err := client.SubaccountAPI.SubaccountCreate(ctx).
  SubaccountCreate(paystack.SubaccountCreate{BusinessName: "Acme Stores"}).
  Execute()
```

### División de transacciones

```go
_, _, err := client.SplitAPI.SplitCreate(ctx).
  SplitCreate(paystack.SplitCreate{Name: "Main split", Type: "percentage", Currency: "NGN"}).
  Execute()
```

### Terminal

```go
terminals, _, err := client.TerminalAPI.TerminalList(ctx).Execute()
```

### Terminal virtual

```go
_, _, err := client.VirtualTerminalAPI.VirtualTerminalCreate(ctx).
  VirtualTerminalCreate(paystack.VirtualTerminalCreate{Name: "Web checkout terminal"}).
  Execute()
```

### Clientes

```go
_, _, err := client.CustomerAPI.CustomerCreate(ctx).
  CustomerCreate(paystack.CustomerCreate{Email: "customer@example.com"}).
  Execute()
```

### Débito directo

```go
_, _, err := client.DirectDebitAPI.DirectdebitInitialize(ctx).
  DirectDebitInitializeRequest(paystack.DirectDebitInitializeRequest{Email: "customer@example.com"}).
  Execute()
```

### Cuentas virtuales dedicadas

```go
_, _, err := client.DedicatedVirtualAccountAPI.DedicatedAccountAssign(ctx).
  DedicatedVirtualAccountAssign(paystack.DedicatedVirtualAccountAssign{Customer: 12345}).
  Execute()
```

### Apple Pay

```go
_, _, err := client.ApplePayAPI.ApplePayRegisterDomain(ctx).
  ApplePayParam(paystack.ApplePayParam{DomainName: "example.com"}).
  Execute()
```

### Planes

```go
_, _, err := client.PlanAPI.PlanCreate(ctx).
  PlanCreate(paystack.PlanCreate{Name: "Starter", Amount: 500000, Interval: "monthly"}).
  Execute()
```

### Suscripciones

```go
_, _, err := client.SubscriptionAPI.SubscriptionCreate(ctx).
  SubscriptionCreate(paystack.SubscriptionCreate{Customer: "CUS_xxx", Plan: "PLN_xxx"}).
  Execute()
```

### Destinatarios de transferencias

```go
_, _, err := client.TransferRecipientAPI.TransferrecipientCreate(ctx).
  TransferRecipientCreate(paystack.TransferRecipientCreate{Name: "Ada Lovelace", Type: "nuban"}).
  Execute()
```

### Transferencias

```go
_, _, err := client.TransferAPI.TransferCreate(ctx).
  TransferInitiate(paystack.TransferInitiate{Source: "balance", Amount: 5000, Recipient: "RCP_xxx"}).
  Execute()
```

### Control de transferencias (configuración de OTP; dentro de Transferencias)

```go
_, _, err := client.TransferAPI.TransferEnableOtp(ctx).Execute()
```

### Saldo

```go
balance, _, err := client.BalanceAPI.BalanceFetch(ctx).Execute()
```

### Solicitudes de pago (facturas)

```go
_, _, err := client.PaymentRequestAPI.PaymentRequestCreate(ctx).
  PaymentRequestCreate(paystack.PaymentRequestCreate{Amount: 5000, Description: "Consulting invoice"}).
  Execute()
```

### Verificación (resolución de cuenta / validación de cuenta / resolución de BIN de tarjeta)

```go
resolved, _, err := client.BankAPI.BankResolveAccountNumber(ctx).
  AccountNumber("0001234567").
  BankCode("057").
  Execute()
```

### Productos

```go
_, _, err := client.ProductAPI.ProductCreate(ctx).
  ProductCreate(paystack.ProductCreate{Name: "T-shirt", Price: 5000, Currency: "NGN"}).
  Execute()
```

### Tiendas

```go
storefronts, _, err := client.StorefrontAPI.StorefrontList(ctx).Execute()
```

### Pedidos

```go
_, _, err := client.OrderAPI.OrderCreate(ctx).
  OrderCreate(paystack.OrderCreate{Customer: "CUS_xxx"}).
  Execute()
```

### Páginas de pago

```go
_, _, err := client.PageAPI.PageCreate(ctx).
  PageCreate(paystack.PageCreate{Name: "Event Ticket", Amount: 5000}).
  Execute()
```

### Liquidaciones

```go
settlements, _, err := client.SettlementAPI.SettlementList(ctx).Execute()
```

### Integración

```go
timeout, _, err := client.IntegrationAPI.IntegrationFetchPaymentSessionTimeout(ctx).Execute()
```

### Panel de control (tiempo de espera de la sesión de pago; en la sección de Integración)

```go
_, _, err := client.IntegrationAPI.IntegrationUpdatePaymentSessionTimeout(ctx).
  Timeout(20).
  Execute()
```

### Reembolsos

```go
_, _, err := client.RefundAPI.RefundCreate(ctx).
  RefundCreate(paystack.RefundCreate{Transaction: 123456789, Amount: paystack.PtrInt32(5000)}).
  Execute()
```

### Disputas

```go
disputes, _, err := client.DisputeAPI.DisputeList(ctx).Execute()
```

### Bancos

```go
banks, _, err := client.BankAPI.BankList(ctx).
  Country("nigeria").
  Execute()
```

### Varios

```go
countries, _, err := client.MiscellaneousAPI.MiscellaneousListCountries(ctx).Execute()
```

## Notas de configuración

El cliente de Go generado sigue exponiendo la interfaz de configuración estándar de OpenAPI Generator. En la mayoría de las integraciones, lo único que es necesario modificar es la cabecera del token de autenticación (bearer token).

## SDKs relacionados

- Node: [alexasomba/paystack-node](https://github.com/alexasomba/paystack-node)
- Axios: [alexasomba/paystack-axios](https://github.com/alexasomba/paystack-axios)
- Navegador: [alexasomba/paystack-browser](https://github.com/alexasomba/paystack-browser)
- PHP: [alexasomba/paystack-php](https://github.com/alexasomba/paystack-php)
- Python: [alexasomba/paystack-python](https://github.com/alexasomba/paystack-python)

## Código fuente

- Fuente del monorepo: [alexasomba/paystack-openapi](https://github.com/alexasomba/paystack-openapi)
- Repositorio del SDK independiente: [https://github.com/alexasomba/paystack-go](https://github.com/alexasomba/paystack-go)
