# \BalanceAPI

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**BalanceFetch**](BalanceAPI.md#BalanceFetch) | **Get** /balance | Fetch Balance
[**BalanceLedger**](BalanceAPI.md#BalanceLedger) | **Get** /balance/ledger | Balance Ledger



## BalanceFetch

> BalanceCheckResponse BalanceFetch(ctx).Execute()

Fetch Balance



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

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BalanceAPI.BalanceFetch(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BalanceAPI.BalanceFetch``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `BalanceFetch`: BalanceCheckResponse
    fmt.Fprintf(os.Stdout, "Response from `BalanceAPI.BalanceFetch`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiBalanceFetchRequest struct via the builder pattern


### Return type

[**BalanceCheckResponse**](BalanceCheckResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## BalanceLedger

> BalanceFetchLedgerResponse BalanceLedger(ctx).PerPage(perPage).Page(page).From(from).To(to).Execute()

Balance Ledger



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
    perPage := int32(56) // int32 | Number of records to fetch per page (optional)
    page := int32(56) // int32 | The section to retrieve (optional)
    from := time.Now() // time.Time | The start date (optional)
    to := time.Now() // time.Time | The end date (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BalanceAPI.BalanceLedger(context.Background()).PerPage(perPage).Page(page).From(from).To(to).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BalanceAPI.BalanceLedger``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `BalanceLedger`: BalanceFetchLedgerResponse
    fmt.Fprintf(os.Stdout, "Response from `BalanceAPI.BalanceLedger`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiBalanceLedgerRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **perPage** | **int32** | Number of records to fetch per page | 
 **page** | **int32** | The section to retrieve | 
 **from** | **time.Time** | The start date | 
 **to** | **time.Time** | The end date | 

### Return type

[**BalanceFetchLedgerResponse**](BalanceFetchLedgerResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

