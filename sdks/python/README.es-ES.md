[English](README.md) · [Español](README.es-ES.md) · [Français](README.fr-FR.md)

# alexasomba-paystack

Cliente de Python para la API de Paystack, generado a partir de la especificación OpenAPI de Paystack incluida en este repositorio.


## ¿Por qué utilizar este SDK?

- Generado a partir de la fuente de verdad (OpenAPI de Paystack) contenida en este repositorio.
- Incluye utilidades opcionales para gestionar tiempos de espera (timeouts), reintentos, idempotencia y errores de API estructurados.
- Mantiene los modelos y las API generados alineados con la especificación de generación del SDK.


## Requisitos

Python 3.10 o superior. La versión 2.0 eleva el requisito mínimo de Python para garantizar que todas las instalaciones puedan utilizar el transporte `urllib3` 2.8 (con parches). Asegúrate de actualizar Python antes de pasar de la versión 1.x del SDK a la nueva versión.


## Instalación

```sh
pip install "alexasomba-paystack>=2.0.0"
```

O bien, desde el código fuente:

```sh
pip install git+https://github.com/alexasomba/paystack-python.git
```

Luego, realiza la importación:

```python
import alexasomba_paystack
```

Autentica tus solicitudes utilizando tu clave secreta de Paystack a través del objeto de configuración generado:

```python
configuration = alexasomba_paystack.Configuration(
    access_token="sk_test_...",
)
```


## Inicio rápido

```python
import os

import alexasomba_paystack
from alexasomba_paystack.api.transaction_api import TransactionApi
from alexasomba_paystack.models.transaction_initialize import TransactionInitialize

configuration = alexasomba_paystack.Configuration(
    access_token=os.environ["PAYSTACK_SECRET_KEY"],
)

with alexasomba_paystack.ApiClient(configuration) as api_client:
    api = TransactionApi(api_client)
    response = api.transaction_initialize(
        transaction_initialize=TransactionInitialize(
            email="customer@example.com",
            amount=5000,
        )
    )
    print(response.data.authorization_url)
```

Las llamadas a la API generadas devuelven instancias de modelos tipados. Captura `ApiException` si necesitas acceder a los detalles de la respuesta HTTP sin procesar durante la depuración.


## Conceptos básicos de la API

- URL base: `https://api.paystack.co`
- Es obligatorio utilizar HTTPS para todas las solicitudes.
- Tanto las solicitudes como las respuestas están basadas en formato JSON.
- La mayoría de las respuestas exitosas siguen la estructura de envoltorio (envelope) compuesta por `status`, `message`, `data` y, opcionalmente, `meta`, tal como se describe en `Paystack-API/0a-Introduction.md`.
- Los importes suelen enviarse en subunidades de moneda, como *kobo*, *pesewas* o céntimos. Consulta la documentación del módulo para conocer las reglas específicas de cada moneda.


## Autenticación y entornos

- Los SDK del lado del servidor deben utilizar tu clave secreta (`sk_test_*` o `sk_live_*`).
- Los SDK del lado del navegador deben utilizar únicamente tu clave pública (`pk_test_*` o `pk_live_*`).
- Envía las credenciales de la API del lado del servidor como `Authorization: Bearer YOUR_SECRET_KEY`.
- Los modos de prueba (*test*) y de producción (*live*) utilizan claves diferentes y entornos aislados.
- Rota las claves si estas quedan expuestas y nunca incluyas claves secretas en el control de versiones (repositorio de código).
- Si habilitas la lista blanca de direcciones IP en Paystack, las solicitudes provenientes de direcciones IP que no estén en dicha lista serán bloqueadas.


## Fiabilidad

Este SDK incluye herramientas auxiliares opcionales en `alexasomba_paystack.extras`:

```python
from alexasomba_paystack.extras import create_paystack_client

client = create_paystack_client(
    "YOUR_SECRET_KEY",
    timeout_seconds=30,
    idempotency=True,
)
```

Utiliza la capa de funciones adicionales (*extras layer*) cuando necesites un cliente de nivel superior que ya incluya configuraciones predefinidas para tiempos de espera (*timeout*), reintentos e idempotencia.


## Paginación

- Paystack admite tanto la paginación basada en desplazamiento (*offset*) como la paginación basada en punteros (*cursor*).
- La paginación basada en desplazamiento utiliza `page` y `perPage`.
- La paginación basada en punteros utiliza `use_cursor=true`, junto con los punteros `next` o `previous`, los cuales se obtienen a través de `meta`.
- La paginación basada en punteros resulta especialmente útil para conjuntos de datos grandes o que cambian con frecuencia.
- La estructura exacta de `meta` varía según el endpoint y el modo de paginación.


## Cobertura


## Errores

- Paystack utiliza códigos de estado HTTP convencionales, tales como `200`, `201`, `400`, `401`, `404` y `5xx`.
- Las respuestas de error suelen incluir `status`, `message`, `type`, `code`, además de información de diagnóstico opcional `meta`.
- Los tipos de error descritos en `Paystack-API/0d-Errors.md` incluyen `api_error`, `validation_error` y `processor_error`.
- Para los flujos de cobro y verificación, examine siempre el cuerpo de la respuesta devuelta y los campos de estado, no solo el código HTTP.

Este SDK se genera a partir de la especificación del SDK en este monorepositorio y abarca las operaciones incluidas en los módulos de API generados bajo `alexasomba_paystack.api`.


## Módulos

Para este SDK, estas familias de esquemas se generan como módulos de modelo bajo `alexasomba_paystack.models` y son utilizadas por los módulos de API generados bajo `alexasomba_paystack.api`.

| Módulo                                                               | Familia de esquemas/modelos                                    |
| -------------------------------------------------------------------- | -------------------------------------------------------- |
| Transactions                                                         | `Transaction*`                                           |
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
| Disputas                                                             | `Dispute*`                                               |
| Bancos                                                               | `Bank*`                                                  |
| Varios                                                               | `Miscellaneous* / Currency`                              |


## Ejemplos de módulos

Estos ejemplos son deliberadamente breves. Úsalos como puntos de partida y, posteriormente, amplía los modelos generados y los argumentos de los métodos según las necesidades de tu caso de uso.

### Transacciones

```python
response = transaction_api.transaction_initialize(
    transaction_initialize=TransactionInitialize(email="customer@example.com", amount=5000)
)
```


### Verificación de pagos (verificación de transacciones)

```python
verified = transaction_api.transaction_verify("ref_123")
```


### Cargos

```python
charge_api.charge_create(
    charge_create_request=ChargeCreateRequest(email="customer@example.com")
)
```


### Cargos masivos

```python
bulk_charge_api.bulk_charge_initiate([
    BulkChargeInitiate(authorization="AUTH_xxx", amount=5000, reference="bulk-ref-1")
])
```


### Subcuentas

```python
subaccount_api.subaccount_create(
    subaccount_create=SubaccountCreate(business_name="Acme Stores")
)
```


### División de transacciones

```python
split_api.split_create(
    split_create=SplitCreate(name="Main split", type="percentage", currency="NGN")
)
```


### Terminal

```python
terminals = terminal_api.terminal_list()
```


### Terminal virtual

```python
virtual_terminal_api.virtual_terminal_create(
    virtual_terminal_create=VirtualTerminalCreate(name="Web checkout terminal")
)
```


### Clientes

```python
customer_api.customer_create(
    customer_create=CustomerCreate(email="customer@example.com")
)
```


### Débito directo

```python
direct_debit_api.directdebit_initialize(
    direct_debit_initialize_request=DirectDebitInitializeRequest(email="customer@example.com")
)
```


### Cuentas virtuales dedicadas

```python
dedicated_virtual_account_api.dedicated_account_assign(
    dedicated_virtual_account_assign=DedicatedVirtualAccountAssign(customer=12345)
)
```


### Apple Pay

```python
apple_pay_api.apple_pay_register_domain(
    apple_pay_param=ApplePayParam(domain_name="example.com")
)
```


### Planes

```python
plan_api.plan_create(
    plan_create=PlanCreate(name="Starter", amount=500000, interval="monthly")
)
```


### Suscripciones

```python
subscription_api.subscription_create(
    subscription_create=SubscriptionCreate(customer="CUS_xxx", plan="PLN_xxx")
)
```


### Destinatarios de transferencias

```python
transfer_recipient_api.transferrecipient_create(
    transfer_recipient_create=TransferRecipientCreate(name="Ada Lovelace", type="nuban")
)
```


### Transferencias

```python
transfer_api.transfer_create(
    transfer_initiate=TransferInitiate(source="balance", amount=5000, recipient="RCP_xxx")
)
```


### Control de transferencias (configuración de OTP; dentro de Transferencias)

```python
transfer_api.transfer_enable_otp()
```


### Saldo

```python
balance = balance_api.balance_fetch()
```


### Solicitudes de pago (facturas)

```python
payment_request_api.payment_request_create(
    payment_request_create=PaymentRequestCreate(amount=5000, description="Consulting invoice")
)
```


### Verificación (resolución de cuenta / validación de cuenta / resolución de BIN de tarjeta)

```python
resolved = bank_api.bank_resolve_account_number("0001234567", "057")
```


### Productos

```python
product_api.product_create(
    product_create=ProductCreate(name="T-shirt", price=5000, currency="NGN")
)
```


### Tiendas

```python
storefronts = storefront_api.storefront_list()
```


### Pedidos

```python
order_api.order_create(order_create=OrderCreate(customer="CUS_xxx"))
```


### Páginas de pago

```python
page_api.page_create(page_create=PageCreate(name="Event Ticket", amount=5000))
```


### Liquidaciones

```python
settlements = settlement_api.settlement_list()
```


### Integración

```python
timeout = integration_api.integration_fetch_payment_session_timeout()
```


### Panel de control (tiempo de espera de la sesión de pago; en la sección de Integración)

```python
integration_api.integration_update_payment_session_timeout(20)
```


### Reembolsos

```python
refund_api.refund_create(refund_create=RefundCreate(transaction=123456789, amount=5000))
```


### Disputas

```python
disputes = dispute_api.dispute_list()
```


### Bancos

```python
banks = bank_api.bank_list(country="nigeria")
```


### Varios

```python
countries = miscellaneous_api.miscellaneous_list_countries()
```


## Notas de configuración

El cliente de Python generado sigue ofreciendo la interfaz de configuración estándar de OpenAPI Generator. En un uso habitual, lo principal que se requiere es configurar el token de autenticación (bearer token), además de realizar cualquier ajuste opcional en el cliente HTTP.

## SDKs relacionados

- Node: [alexasomba/paystack-node](https://github.com/alexasomba/paystack-node)
- Axios: [alexasomba/paystack-axios](https://github.com/alexasomba/paystack-axios)
- Navegador: [alexasomba/paystack-browser](https://github.com/alexasomba/paystack-browser)
- Go: [alexasomba/paystack-go](https://github.com/alexasomba/paystack-go)
- PHP: [alexasomba/paystack-php](https://github.com/alexasomba/paystack-php)


## Código fuente

- Fuente del monorepo: [alexasomba/paystack-openapi](https://github.com/alexasomba/paystack-openapi)
- Repositorio del SDK independiente: [https://github.com/alexasomba/paystack-python](https://github.com/alexasomba/paystack-python)
