# \TransactionAPI

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**TransactionChargeAuthorization**](TransactionAPI.md#TransactionChargeAuthorization) | **Post** /transaction/charge_authorization | Charge Authorization
[**TransactionCheckAuthorization**](TransactionAPI.md#TransactionCheckAuthorization) | **Post** /transaction/check_authorization | Check Authorization
[**TransactionEvent**](TransactionAPI.md#TransactionEvent) | **Get** /transaction/{id}/event | Get Transaction Event
[**TransactionExport**](TransactionAPI.md#TransactionExport) | **Get** /transaction/export | Export Transactions
[**TransactionFetch**](TransactionAPI.md#TransactionFetch) | **Get** /transaction/{id} | Fetch Transaction
[**TransactionInitialize**](TransactionAPI.md#TransactionInitialize) | **Post** /transaction/initialize | Initialize Transaction
[**TransactionList**](TransactionAPI.md#TransactionList) | **Get** /transaction | List Transactions
[**TransactionPartialDebit**](TransactionAPI.md#TransactionPartialDebit) | **Post** /transaction/partial_debit | Partial Debit
[**TransactionSession**](TransactionAPI.md#TransactionSession) | **Get** /transaction/{id}/session | Get Transaction Session
[**TransactionTimeline**](TransactionAPI.md#TransactionTimeline) | **Get** /transaction/timeline/{id} | Fetch Transaction Timeline
[**TransactionTotals**](TransactionAPI.md#TransactionTotals) | **Get** /transaction/totals | Transaction Totals
[**TransactionVerify**](TransactionAPI.md#TransactionVerify) | **Get** /transaction/verify/{reference} | Verify Transaction



## TransactionChargeAuthorization

> ChargeAuthorizationResponse TransactionChargeAuthorization(ctx).TransactionChargeAuthorization(transactionChargeAuthorization).Execute()

Charge Authorization



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/alexasomba/paystack-openapi/sdks/go"
)

func main() {
    transactionChargeAuthorization := *openapiclient.NewTransactionChargeAuthorization("Email_example", int32(123), "AuthorizationCode_example") // TransactionChargeAuthorization |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TransactionAPI.TransactionChargeAuthorization(context.Background()).TransactionChargeAuthorization(transactionChargeAuthorization).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TransactionAPI.TransactionChargeAuthorization``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TransactionChargeAuthorization`: ChargeAuthorizationResponse
    fmt.Fprintf(os.Stdout, "Response from `TransactionAPI.TransactionChargeAuthorization`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTransactionChargeAuthorizationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionChargeAuthorization** | [**TransactionChargeAuthorization**](TransactionChargeAuthorization.md) |  | 

### Return type

[**ChargeAuthorizationResponse**](ChargeAuthorizationResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TransactionCheckAuthorization

> Response TransactionCheckAuthorization(ctx).Email(email).Amount(amount).AuthorizationCode(authorizationCode).Currency(currency).Execute()

Check Authorization



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/alexasomba/paystack-openapi/sdks/go"
)

func main() {
    email := "email_example" // string | Customer's email address
    amount := int32(56) // int32 | Amount should be in kobo if currency is NGN, pesewas if currency is GHS, and cents if currency is ZAR
    authorizationCode := "authorizationCode_example" // string | Valid authorization code to charge (optional)
    currency := "currency_example" // string | The transaction currency (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TransactionAPI.TransactionCheckAuthorization(context.Background()).Email(email).Amount(amount).AuthorizationCode(authorizationCode).Currency(currency).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TransactionAPI.TransactionCheckAuthorization``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TransactionCheckAuthorization`: Response
    fmt.Fprintf(os.Stdout, "Response from `TransactionAPI.TransactionCheckAuthorization`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTransactionCheckAuthorizationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **string** | Customer&#39;s email address | 
 **amount** | **int32** | Amount should be in kobo if currency is NGN, pesewas if currency is GHS, and cents if currency is ZAR | 
 **authorizationCode** | **string** | Valid authorization code to charge | 
 **currency** | **string** | The transaction currency | 

### Return type

[**Response**](Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TransactionEvent

> Response TransactionEvent(ctx, id).Execute()

Get Transaction Event



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/alexasomba/paystack-openapi/sdks/go"
)

func main() {
    id := int64(789) // int64 | The ID of the transaction

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TransactionAPI.TransactionEvent(context.Background(), id).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TransactionAPI.TransactionEvent``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TransactionEvent`: Response
    fmt.Fprintf(os.Stdout, "Response from `TransactionAPI.TransactionEvent`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int64** | The ID of the transaction | 

### Other Parameters

Other parameters are passed through a pointer to a apiTransactionEventRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Response**](Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TransactionExport

> TransactionExportResponse TransactionExport(ctx).From(from).To(to).Status(status).Customer(customer).SubaccountCode(subaccountCode).Settlement(settlement).Execute()

Export Transactions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/alexasomba/paystack-openapi/sdks/go"
)

func main() {
    from := time.Now() // time.Time | The start date (optional)
    to := time.Now() // time.Time | The end date (optional)
    status := "success" // string | Filter by the status of the transaction (optional)
    customer := float32(123172416) // float32 | Filter by customer ID (optional)
    subaccountCode := "ACCT_dskvlw3y3dMukmt" // string | Filter by subaccount code (optional)
    settlement := int64(5687910) // int64 | Filter by the settlement ID (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TransactionAPI.TransactionExport(context.Background()).From(from).To(to).Status(status).Customer(customer).SubaccountCode(subaccountCode).Settlement(settlement).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TransactionAPI.TransactionExport``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TransactionExport`: TransactionExportResponse
    fmt.Fprintf(os.Stdout, "Response from `TransactionAPI.TransactionExport`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTransactionExportRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **time.Time** | The start date | 
 **to** | **time.Time** | The end date | 
 **status** | **string** | Filter by the status of the transaction | 
 **customer** | **float32** | Filter by customer ID | 
 **subaccountCode** | **string** | Filter by subaccount code | 
 **settlement** | **int64** | Filter by the settlement ID | 

### Return type

[**TransactionExportResponse**](TransactionExportResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TransactionFetch

> TransactionFetchResponse TransactionFetch(ctx, id).Execute()

Fetch Transaction



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/alexasomba/paystack-openapi/sdks/go"
)

func main() {
    id := int64(4099260516) // int64 | The ID of the transaction to fetch

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TransactionAPI.TransactionFetch(context.Background(), id).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TransactionAPI.TransactionFetch``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TransactionFetch`: TransactionFetchResponse
    fmt.Fprintf(os.Stdout, "Response from `TransactionAPI.TransactionFetch`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int64** | The ID of the transaction to fetch | 

### Other Parameters

Other parameters are passed through a pointer to a apiTransactionFetchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**TransactionFetchResponse**](TransactionFetchResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TransactionInitialize

> TransactionInitializeResponse TransactionInitialize(ctx).TransactionInitialize(transactionInitialize).Execute()

Initialize Transaction



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/alexasomba/paystack-openapi/sdks/go"
)

func main() {
    transactionInitialize := *openapiclient.NewTransactionInitialize("Email_example", int32(123)) // TransactionInitialize |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TransactionAPI.TransactionInitialize(context.Background()).TransactionInitialize(transactionInitialize).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TransactionAPI.TransactionInitialize``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TransactionInitialize`: TransactionInitializeResponse
    fmt.Fprintf(os.Stdout, "Response from `TransactionAPI.TransactionInitialize`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTransactionInitializeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionInitialize** | [**TransactionInitialize**](TransactionInitialize.md) |  | 

### Return type

[**TransactionInitializeResponse**](TransactionInitializeResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TransactionList

> TransactionListResponse TransactionList(ctx).UseCursor(useCursor).Next(next).Previous(previous).PerPage(perPage).Page(page).From(from).To(to).Status(status).Source(source).TerminalId(terminalId).VirtualAccountNumber(virtualAccountNumber).CustomerCode(customerCode).Amount(amount).Settlement(settlement).Channel(channel).SubaccountCode(subaccountCode).SplitCode(splitCode).Execute()

List Transactions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/alexasomba/paystack-openapi/sdks/go"
)

func main() {
    useCursor := true // bool | A flag to indicate if cursor based pagination should be used (optional)
    next := "next_example" // string | An alphanumeric value returned for every cursor based retrieval, used to retrieve the next set of data  (optional)
    previous := "previous_example" // string | An alphanumeric value returned for every cursor based retrieval, used to retrieve the previous set of data  (optional)
    perPage := int32(56) // int32 | The number of records to fetch per request (optional)
    page := int32(56) // int32 | The offset to retrieve data from (optional)
    from := time.Now() // time.Time | The start date (optional)
    to := time.Now() // time.Time | The end date (optional)
    status := "status_example" // string | Filter transaction by status (optional)
    source := "source_example" // string | The origin of the payment (optional)
    terminalId := "terminalId_example" // string | Filter transactions by a terminal ID (optional)
    virtualAccountNumber := "virtualAccountNumber_example" // string | Filter transactions by a virtual account number (optional)
    customerCode := "customerCode_example" // string | Filter transactions by a customer code (optional)
    amount := int64(789) // int64 | Filter transactions by a specific amount (optional)
    settlement := int64(789) // int64 | The settlement ID to filter for settled transactions (optional)
    channel := "channel_example" // string | The payment method the customer used to complete the transaction (optional)
    subaccountCode := "subaccountCode_example" // string | Filter transaction by subaccount code (optional)
    splitCode := "splitCode_example" // string | Filter transaction by split code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TransactionAPI.TransactionList(context.Background()).UseCursor(useCursor).Next(next).Previous(previous).PerPage(perPage).Page(page).From(from).To(to).Status(status).Source(source).TerminalId(terminalId).VirtualAccountNumber(virtualAccountNumber).CustomerCode(customerCode).Amount(amount).Settlement(settlement).Channel(channel).SubaccountCode(subaccountCode).SplitCode(splitCode).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TransactionAPI.TransactionList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TransactionList`: TransactionListResponse
    fmt.Fprintf(os.Stdout, "Response from `TransactionAPI.TransactionList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTransactionListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **useCursor** | **bool** | A flag to indicate if cursor based pagination should be used | 
 **next** | **string** | An alphanumeric value returned for every cursor based retrieval, used to retrieve the next set of data  | 
 **previous** | **string** | An alphanumeric value returned for every cursor based retrieval, used to retrieve the previous set of data  | 
 **perPage** | **int32** | The number of records to fetch per request | 
 **page** | **int32** | The offset to retrieve data from | 
 **from** | **time.Time** | The start date | 
 **to** | **time.Time** | The end date | 
 **status** | **string** | Filter transaction by status | 
 **source** | **string** | The origin of the payment | 
 **terminalId** | **string** | Filter transactions by a terminal ID | 
 **virtualAccountNumber** | **string** | Filter transactions by a virtual account number | 
 **customerCode** | **string** | Filter transactions by a customer code | 
 **amount** | **int64** | Filter transactions by a specific amount | 
 **settlement** | **int64** | The settlement ID to filter for settled transactions | 
 **channel** | **string** | The payment method the customer used to complete the transaction | 
 **subaccountCode** | **string** | Filter transaction by subaccount code | 
 **splitCode** | **string** | Filter transaction by split code | 

### Return type

[**TransactionListResponse**](TransactionListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TransactionPartialDebit

> TransactionPartialDebitResponse TransactionPartialDebit(ctx).TransactionPartialDebit(transactionPartialDebit).Execute()

Partial Debit



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/alexasomba/paystack-openapi/sdks/go"
)

func main() {
    transactionPartialDebit := *openapiclient.NewTransactionPartialDebit("Email_example", int64(123), "AuthorizationCode_example", openapiclient.Currency("GHS")) // TransactionPartialDebit |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TransactionAPI.TransactionPartialDebit(context.Background()).TransactionPartialDebit(transactionPartialDebit).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TransactionAPI.TransactionPartialDebit``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TransactionPartialDebit`: TransactionPartialDebitResponse
    fmt.Fprintf(os.Stdout, "Response from `TransactionAPI.TransactionPartialDebit`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTransactionPartialDebitRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionPartialDebit** | [**TransactionPartialDebit**](TransactionPartialDebit.md) |  | 

### Return type

[**TransactionPartialDebitResponse**](TransactionPartialDebitResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TransactionSession

> Response TransactionSession(ctx, id).Execute()

Get Transaction Session



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/alexasomba/paystack-openapi/sdks/go"
)

func main() {
    id := int64(789) // int64 | The ID of the transaction

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TransactionAPI.TransactionSession(context.Background(), id).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TransactionAPI.TransactionSession``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TransactionSession`: Response
    fmt.Fprintf(os.Stdout, "Response from `TransactionAPI.TransactionSession`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int64** | The ID of the transaction | 

### Other Parameters

Other parameters are passed through a pointer to a apiTransactionSessionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Response**](Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TransactionTimeline

> TransactionTimelineResponse TransactionTimeline(ctx, id).Execute()

Fetch Transaction Timeline



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/alexasomba/paystack-openapi/sdks/go"
)

func main() {
    id := int64(3936799950) // int64 | The ID of the transaction to fetch

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TransactionAPI.TransactionTimeline(context.Background(), id).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TransactionAPI.TransactionTimeline``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TransactionTimeline`: TransactionTimelineResponse
    fmt.Fprintf(os.Stdout, "Response from `TransactionAPI.TransactionTimeline`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int64** | The ID of the transaction to fetch | 

### Other Parameters

Other parameters are passed through a pointer to a apiTransactionTimelineRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**TransactionTimelineResponse**](TransactionTimelineResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TransactionTotals

> TransactionTotalsResponse TransactionTotals(ctx).From(from).To(to).Execute()

Transaction Totals



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/alexasomba/paystack-openapi/sdks/go"
)

func main() {
    from := time.Now() // time.Time | The start date (optional)
    to := time.Now() // time.Time | The end date (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TransactionAPI.TransactionTotals(context.Background()).From(from).To(to).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TransactionAPI.TransactionTotals``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TransactionTotals`: TransactionTotalsResponse
    fmt.Fprintf(os.Stdout, "Response from `TransactionAPI.TransactionTotals`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTransactionTotalsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **time.Time** | The start date | 
 **to** | **time.Time** | The end date | 

### Return type

[**TransactionTotalsResponse**](TransactionTotalsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TransactionVerify

> VerifyResponse TransactionVerify(ctx, reference).Execute()

Verify Transaction



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/alexasomba/paystack-openapi/sdks/go"
)

func main() {
    reference := "re4lyvq3s3" // string | The transaction reference to verify

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TransactionAPI.TransactionVerify(context.Background(), reference).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TransactionAPI.TransactionVerify``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TransactionVerify`: VerifyResponse
    fmt.Fprintf(os.Stdout, "Response from `TransactionAPI.TransactionVerify`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reference** | **string** | The transaction reference to verify | 

### Other Parameters

Other parameters are passed through a pointer to a apiTransactionVerifyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**VerifyResponse**](VerifyResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

