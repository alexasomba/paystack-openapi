[English](README.md) · [Español](README.es-ES.md) · [Français](README.fr-FR.md)

# alexasomba-paystack

Client Python pour l'API Paystack, généré à partir de la spécification Paystack OpenAPI dans ce référentiel.


## Pourquoi ce SDK

- Généré à partir de la source de vérité Paystack OpenAPI dans ce dépôt
- Inclut des aides opt-in pour les délais d'attente, les tentatives, l'idempotence et les erreurs d'API structurées
- Maintient les modèles et les API générés alignés sur les spécifications de génération du SDK


## Exigences

Python 3.10+. La version 2.0 augmente la version minimale de Python afin que chaque installation puisse utiliser le transport urllib3 2.8 corrigé. Mettez à niveau Python avant de procéder à la mise à niveau à partir du SDK 1.x.

## Installation

```sh
pip install "alexasomba-paystack>=2.0.0"
```

Ou depuis la source :

```sh
pip install git+https://github.com/alexasomba/paystack-python.git
```

Importez ensuite :

```python
import alexasomba_paystack
```

Authentifiez les requêtes avec votre clé secrète Paystack via l'objet de configuration généré :

```python
configuration = alexasomba_paystack.Configuration(
    access_token="sk_test_...",
)
```


## Démarrage rapide

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

Les appels d'API générés renvoient des instances de modèle typées. Capturez `ApiException` lorsque vous avez besoin des détails bruts de la réponse HTTP lors du débogage.


## Bases de l'API

- URL de base : `https://api.paystack.co`
- HTTPS est requis pour toutes les demandes.
- Les demandes et les réponses sont basées sur JSON.
- Les réponses les plus réussies suivent les enveloppes `status`, `message`, `data` et `meta` en option décrites dans `Paystack-API/0a-Introduction.md`.
- Les montants sont généralement envoyés en sous-unités monétaires telles que le kobo, les pesewas ou les centimes. Consultez la documentation du module pour connaître les règles spécifiques aux devises.


## Authentification et environnements

- Les SDK côté serveur doivent utiliser votre clé secrète (`sk_test_*` ou `sk_live_*`).
- Les SDK du navigateur doivent utiliser uniquement votre clé publique (`pk_test_*` ou `pk_live_*`).
- Envoyez les informations d'identification de l'API côté serveur sous la forme `Authorization: Bearer YOUR_SECRET_KEY`.
- Les modes test et live utilisent différentes clés et environnements isolés.
- Faites pivoter les clés si elles sont exposées et ne confiez jamais les clés secrètes au contrôle de code source.
- Si vous activez la liste blanche des adresses IP dans Paystack, les demandes provenant d'adresses IP non sur liste blanche seront bloquées.


## Fiabilité

Ce SDK inclut des assistants opt-in dans `alexasomba_paystack.extras` :

```python
from alexasomba_paystack.extras import create_paystack_client

client = create_paystack_client(
    "YOUR_SECRET_KEY",
    timeout_seconds=30,
    idempotency=True,
)
```

Utilisez la couche extras lorsque vous souhaitez un client de niveau supérieur avec un comportement de délai d'attente, de nouvelle tentative et d'idempotence préconfiguré.


## Pagination

- Paystack prend en charge à la fois la pagination décalée et la pagination du curseur.
- La pagination décalée utilise `page` et `perPage`.
- La pagination du curseur utilise les curseurs `use_cursor=true` plus `next` ou `previous` renvoyés dans `meta`.
- La pagination du curseur est particulièrement utile pour les ensembles de données volumineux ou qui changent fréquemment.
- La forme exacte du `meta` varie selon le point final et le mode de pagination.


## Couverture


## Erreurs

- Paystack utilise des codes d'état HTTP conventionnels tels que `200`, `201`, `400`, `401`, `404` et `5xx`.
- Les réponses d'erreur incluent généralement `status`, `message`, `type`, `code` et des informations de diagnostic facultatives `meta`.
- Les types d'erreurs décrits dans `Paystack-API/0d-Errors.md` incluent `api_error`, `validation_error` et `processor_error`.
- Pour les flux de facturation et de vérification, inspectez toujours le corps de la réponse et les champs d'état renvoyés, pas seulement le code HTTP.

Ce SDK est généré à partir de la spécification SDK dans ce monorepo et couvre les opérations émises dans les modules API générés sous `alexasomba_paystack.api`.

## Modules

Pour ce SDK, ces familles de schémas sont émises en tant que modules de modèle générés sous `alexasomba_paystack.models` et utilisées par les modules API générés sous `alexasomba_paystack.api`.

| Module | Schéma / famille de modèles |
| -------------------------------------------------------------------- | ---------------------------------------------------- |
| Opérations | `Transaction*` |
| Vérifier les paiements (vérification des transactions) | `VerifyResponse / TransactionFetchResponse` |
| Frais | `Charge*` |
| Frais de gros | `BulkCharge*` |
| Sous-comptes | `Subaccount*` |
| Fractionnements de transactions | `Split*` |
| Borne | `Terminal*` |
| Terminal virtuel | `VirtualTerminal*` |
| Clients | `Customer*` |
| Prélèvement automatique | `DirectDebit*` |
| Comptes virtuels dédiés | `DedicatedNuban* / DedicatedVirtualAccount*` |
| Apple Payer | `ApplePay*` |
| Forfaits | `Plan*` |
| Abonnements | `Subscription*` |
| Destinataires du transfert | `TransferRecipient*` |
| Transferts | `Transfer*` |
| Contrôle des transferts (paramètres OTP ; sous Transferts) | `TransferEnable* / TransferDisable* / TransferFinalize*` |
| Solde | `Balance*` |
| Demandes de paiement (factures) | `PaymentRequest*` |
| Vérification (Résoudre le compte / Valider le compte / Résoudre le BIN de la carte) | `Verification*` |
| Produits | `Product*` |
| Vitrines de magasins | `Storefront*` |
| Commandes | `Order*` |
| Pages de paiement | `Page*` |
| Règlements | `Settlement*` |
| Intégration | `Integration*` |
| Panneau de configuration (Délai d'expiration de la session de paiement ; sous Intégration) | `ControlPanel*` |
| Remboursements | `Refund*` |
| Litiges | `Dispute*` |
| Banques | `Bank*` |
| Divers | `Miscellaneous* / Currency` |


## Exemples de modules

Ce sont des exemples volontairement courts. Utilisez-les comme points d'entrée, puis développez les modèles générés et les arguments de méthode pour votre cas d'utilisation.


### Transactions

```python
response = transaction_api.transaction_initialize(
    transaction_initialize=TransactionInitialize(email="customer@example.com", amount=5000)
)
```


### Vérifier les paiements (vérification des transactions)

```python
verified = transaction_api.transaction_verify("ref_123")
```


### Frais

```python
charge_api.charge_create(
    charge_create_request=ChargeCreateRequest(email="customer@example.com")
)
```


### Frais groupés

```python
bulk_charge_api.bulk_charge_initiate([
    BulkChargeInitiate(authorization="AUTH_xxx", amount=5000, reference="bulk-ref-1")
])
```


### Sous-comptes

```python
subaccount_api.subaccount_create(
    subaccount_create=SubaccountCreate(business_name="Acme Stores")
)
```


### Répartition des transactions

```python
split_api.split_create(
    split_create=SplitCreate(name="Main split", type="percentage", currency="NGN")
)
```


### Terminal
```python
terminals = terminal_api.terminal_list()
```


### Terminal virtuel

```python
virtual_terminal_api.virtual_terminal_create(
    virtual_terminal_create=VirtualTerminalCreate(name="Web checkout terminal")
)
```


### Clients

```python
customer_api.customer_create(
    customer_create=CustomerCreate(email="customer@example.com")
)
```


### Prélèvement automatique

```python
direct_debit_api.directdebit_initialize(
    direct_debit_initialize_request=DirectDebitInitializeRequest(email="customer@example.com")
)
```


### Comptes virtuels dédiés

```python
dedicated_virtual_account_api.dedicated_account_assign(
    dedicated_virtual_account_assign=DedicatedVirtualAccountAssign(customer=12345)
)
```


### Apple Pay

```python
apple_pay_api.apple_pay_register_domain(
    apple_pay_param=ApplePayParam(domain_name="example.com")
)
```


### Plans
```python
plan_api.plan_create(
    plan_create=PlanCreate(name="Starter", amount=500000, interval="monthly")
)
```


### Abonnements

```python
subscription_api.subscription_create(
    subscription_create=SubscriptionCreate(customer="CUS_xxx", plan="PLN_xxx")
)
```


### Destinataires du transfert

```python
transfer_recipient_api.transferrecipient_create(
    transfer_recipient_create=TransferRecipientCreate(name="Ada Lovelace", type="nuban")
)
```


### Transferts

```python
transfer_api.transfer_create(
    transfer_initiate=TransferInitiate(source="balance", amount=5000, recipient="RCP_xxx")
)
```


### Contrôle des transferts (paramètres OTP ; sous Transferts)

```python
transfer_api.transfer_enable_otp()
```


### Solde

```python
balance = balance_api.balance_fetch()
```


### Demandes de paiement (factures)

```python
payment_request_api.payment_request_create(
    payment_request_create=PaymentRequestCreate(amount=5000, description="Consulting invoice")
)
```


### Vérification (Résoudre le compte / Valider le compte / Résoudre le BIN de la carte)

```python
resolved = bank_api.bank_resolve_account_number("0001234567", "057")
```


### Produits

```python
product_api.product_create(
    product_create=ProductCreate(name="T-shirt", price=5000, currency="NGN")
)
```


### Vitrines de magasins

```python
storefronts = storefront_api.storefront_list()
```


### Commandes

```python
order_api.order_create(order_create=OrderCreate(customer="CUS_xxx"))
```


### Pages de paiement

```python
page_api.page_create(page_create=PageCreate(name="Event Ticket", amount=5000))
```


### Règlements

```python
settlements = settlement_api.settlement_list()
```


### Intégration

```python
timeout = integration_api.integration_fetch_payment_session_timeout()
```


### Panneau de configuration (Délai d'expiration de la session de paiement ; sous Intégration)

```python
integration_api.integration_update_payment_session_timeout(20)
```


### Remboursements

```python
refund_api.refund_create(refund_create=RefundCreate(transaction=123456789, amount=5000))
```


### Litiges

```python
disputes = dispute_api.dispute_list()
```


### Banques

```python
banks = bank_api.bank_list(country="nigeria")
```


### Divers

```python
countries = miscellaneous_api.miscellaneous_list_countries()
```


## Notes de configuration

Le client Python généré expose toujours la surface de configuration standard d'OpenAPI Generator. En utilisation normale, la principale chose dont vous avez besoin est la configuration du jeton du porteur ainsi que tout réglage facultatif du client HTTP.


## SDK associés

- Node : [alexasomba/paystack-node](https://github.com/alexasomba/paystack-node)
- Axios : [alexasomba/paystack-axios](https://github.com/alexasomba/paystack-axios)
- Navigateur : [alexasomba/paystack-browser](https://github.com/alexasomba/paystack-browser)
- Allez : [alexasomba/paystack-go](https://github.com/alexasomba/paystack-go)
- PHP : [alexasomba/paystack-php](https://github.com/alexasomba/paystack-php)


## Source

- Source Monorepo : [alexasomba/paystack-openapi](https://github.com/alexasomba/paystack-openapi)
- Dépôt SDK autonome : [https://github.com/alexasomba/paystack-python](https://github.com/alexasomba/paystack-python)
