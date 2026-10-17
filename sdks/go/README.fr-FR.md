[English](README.md) · [Español](README.es-ES.md) · [Français](README.fr-FR.md)

# Client API Go de Paystack

Accédez au client pour l'API Paystack, générée à partir de la spécification Paystack OpenAPI dans ce référentiel.


## Pourquoi ce SDK

- Généré à partir de la source de vérité Paystack OpenAPI dans ce dépôt
- Inclut des aides à la fiabilité pour les délais d'attente, les tentatives, l'idempotence et les erreurs d'API structurées
- Suit la même couverture de points de terminaison que la spécification SDK fournie utilisée pour la génération de clients

## Installation

```sh
go get github.com/alexasomba/paystack-go@latest
```

Importez ensuite :

```go
import paystack "github.com/alexasomba/paystack-go"
```

Authentifiez les demandes en attachant votre clé secrète Paystack en tant qu'en-tête de jeton de porteur sur la configuration générée.


## Démarrage rapide

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

Le client généré renvoie l'objet de réponse Paystack tapé, la réponse HTTP brute et une erreur. Vérifiez à la fois l’erreur et la charge utile de la réponse lors du débogage des problèmes d’intégration.


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

Ce SDK inclut des assistants opt-in dans `reliability.go` :

```go
opts := paystack.DefaultReliabilityOptions()
opts.Timeout = 30 * time.Second
opts.Idempotency.Enabled = true
client, ctx := paystack.NewAPIClientWithReliability(os.Getenv("PAYSTACK_SECRET_KEY"), opts)
```

Utilisez ces assistants lorsque vous souhaitez un seul endroit pour standardiser le comportement de délai d’attente, de nouvelle tentative et d’idempotence entre les services.


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

Ce SDK est généré à partir de [api/openapi.yaml](./api/openapi.yaml) et est actuellement livré avec l'ensemble complet des opérations produites à partir de la spécification SDK alignée sur l'API Paystack.

## Modules

Pour ce SDK, ces familles de schémas sont émises en tant que modèles Go générés dans la racine du package et référencées par les services API générés.

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

Ce sont des exemples volontairement courts. Utilisez-les comme points d'entrée, puis développez les structures de requêtes typées et les générateurs de requêtes fluides affichés par le package généré.


### Transactions

```go
resp, _, err := client.TransactionAPI.TransactionInitialize(ctx).
  TransactionInitialize(paystack.TransactionInitialize{Email: "customer@example.com", Amount: paystack.PtrInt32(5000)}).
  Execute()
```


### Vérifier les paiements (vérification des transactions)

```go
verified, _, err := client.TransactionAPI.TransactionVerify(ctx, "ref_123").Execute()
```


### Frais

```go
_, _, err := client.ChargeAPI.ChargeCreate(ctx).
  ChargeCreate(paystack.ChargeCreateRequest{Email: "customer@example.com"}).
  Execute()
```


### Frais groupés

```go
_, _, err := client.BulkChargeAPI.BulkChargeInitiate(ctx).
  BulkChargeInitiate([]paystack.BulkChargeInitiate{{Authorization: "AUTH_xxx", Amount: 5000, Reference: "bulk-ref-1"}}).
  Execute()
```


### Sous-comptes

```go
_, _, err := client.SubaccountAPI.SubaccountCreate(ctx).
  SubaccountCreate(paystack.SubaccountCreate{BusinessName: "Acme Stores"}).
  Execute()
```


### Répartition des transactions

```go
_, _, err := client.SplitAPI.SplitCreate(ctx).
  SplitCreate(paystack.SplitCreate{Name: "Main split", Type: "percentage", Currency: "NGN"}).
  Execute()
```


### Terminal
```go
terminals, _, err := client.TerminalAPI.TerminalList(ctx).Execute()
```


### Terminal virtuel

```go
_, _, err := client.VirtualTerminalAPI.VirtualTerminalCreate(ctx).
  VirtualTerminalCreate(paystack.VirtualTerminalCreate{Name: "Web checkout terminal"}).
  Execute()
```


### Clients

```go
_, _, err := client.CustomerAPI.CustomerCreate(ctx).
  CustomerCreate(paystack.CustomerCreate{Email: "customer@example.com"}).
  Execute()
```


### Prélèvement automatique

```go
_, _, err := client.DirectDebitAPI.DirectdebitInitialize(ctx).
  DirectDebitInitializeRequest(paystack.DirectDebitInitializeRequest{Email: "customer@example.com"}).
  Execute()
```


### Comptes virtuels dédiés

```go
_, _, err := client.DedicatedVirtualAccountAPI.DedicatedAccountAssign(ctx).
  DedicatedVirtualAccountAssign(paystack.DedicatedVirtualAccountAssign{Customer: 12345}).
  Execute()
```


### Apple Pay

```go
_, _, err := client.ApplePayAPI.ApplePayRegisterDomain(ctx).
  ApplePayParam(paystack.ApplePayParam{DomainName: "example.com"}).
  Execute()
```


### Plans
```go
_, _, err := client.PlanAPI.PlanCreate(ctx).
  PlanCreate(paystack.PlanCreate{Name: "Starter", Amount: 500000, Interval: "monthly"}).
  Execute()
```


### Abonnements

```go
_, _, err := client.SubscriptionAPI.SubscriptionCreate(ctx).
  SubscriptionCreate(paystack.SubscriptionCreate{Customer: "CUS_xxx", Plan: "PLN_xxx"}).
  Execute()
```


### Destinataires du transfert

```go
_, _, err := client.TransferRecipientAPI.TransferrecipientCreate(ctx).
  TransferRecipientCreate(paystack.TransferRecipientCreate{Name: "Ada Lovelace", Type: "nuban"}).
  Execute()
```


### Transferts

```go
_, _, err := client.TransferAPI.TransferCreate(ctx).
  TransferInitiate(paystack.TransferInitiate{Source: "balance", Amount: 5000, Recipient: "RCP_xxx"}).
  Execute()
```


### Contrôle des transferts (paramètres OTP ; sous Transferts)

```go
_, _, err := client.TransferAPI.TransferEnableOtp(ctx).Execute()
```


### Solde

```go
balance, _, err := client.BalanceAPI.BalanceFetch(ctx).Execute()
```


### Demandes de paiement (factures)

```go
_, _, err := client.PaymentRequestAPI.PaymentRequestCreate(ctx).
  PaymentRequestCreate(paystack.PaymentRequestCreate{Amount: 5000, Description: "Consulting invoice"}).
  Execute()
```


### Vérification (Résoudre le compte / Valider le compte / Résoudre le BIN de la carte)

```go
resolved, _, err := client.BankAPI.BankResolveAccountNumber(ctx).
  AccountNumber("0001234567").
  BankCode("057").
  Execute()
```


### Produits

```go
_, _, err := client.ProductAPI.ProductCreate(ctx).
  ProductCreate(paystack.ProductCreate{Name: "T-shirt", Price: 5000, Currency: "NGN"}).
  Execute()
```


### Vitrines de magasins

```go
storefronts, _, err := client.StorefrontAPI.StorefrontList(ctx).Execute()
```


### Commandes

```go
_, _, err := client.OrderAPI.OrderCreate(ctx).
  OrderCreate(paystack.OrderCreate{Customer: "CUS_xxx"}).
  Execute()
```


### Pages de paiement

```go
_, _, err := client.PageAPI.PageCreate(ctx).
  PageCreate(paystack.PageCreate{Name: "Event Ticket", Amount: 5000}).
  Execute()
```


### Règlements

```go
settlements, _, err := client.SettlementAPI.SettlementList(ctx).Execute()
```


### Intégration

```go
timeout, _, err := client.IntegrationAPI.IntegrationFetchPaymentSessionTimeout(ctx).Execute()
```


### Panneau de configuration (Délai d'expiration de la session de paiement ; sous Intégration)

```go
_, _, err := client.IntegrationAPI.IntegrationUpdatePaymentSessionTimeout(ctx).
  Timeout(20).
  Execute()
```


### Remboursements

```go
_, _, err := client.RefundAPI.RefundCreate(ctx).
  RefundCreate(paystack.RefundCreate{Transaction: 123456789, Amount: paystack.PtrInt32(5000)}).
  Execute()
```


### Litiges

```go
disputes, _, err := client.DisputeAPI.DisputeList(ctx).Execute()
```


### Banques

```go
banks, _, err := client.BankAPI.BankList(ctx).
  Country("nigeria").
  Execute()
```


### Divers

```go
countries, _, err := client.MiscellaneousAPI.MiscellaneousListCountries(ctx).Execute()
```


## Notes de configuration

Le client Go généré expose toujours la surface de configuration standard du serveur OpenAPI Generator. Dans la plupart des intégrations, la seule chose que vous devez remplacer est l'en-tête du jeton du porteur.


## SDK associés

- Node : [alexasomba/paystack-node](https://github.com/alexasomba/paystack-node)
- Axios : [alexasomba/paystack-axios](https://github.com/alexasomba/paystack-axios)
- Navigateur : [alexasomba/paystack-browser](https://github.com/alexasomba/paystack-browser)
- PHP : [alexasomba/paystack-php](https://github.com/alexasomba/paystack-php)
- Python : [alexasomba/paystack-python](https://github.com/alexasomba/paystack-python)


## Source

- Source Monorepo : [alexasomba/paystack-openapi](https://github.com/alexasomba/paystack-openapi)
- Dépôt SDK autonome : [https://github.com/alexasomba/paystack-go](https://github.com/alexasomba/paystack-go)
