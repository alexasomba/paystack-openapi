# \SettlementAPI

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**SettlementsFetch**](SettlementAPI.md#SettlementsFetch) | **Get** /settlement | List Settlements
[**SettlementsTransaction**](SettlementAPI.md#SettlementsTransaction) | **Get** /settlement/{id}/transactions | Fetch Settlement Transactions



## SettlementsFetch

> Response SettlementsFetch(ctx).PerPage(perPage).Page(page).Execute()

List Settlements



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
    perPage := int32(50) // int32 | The number of records to fetch per request (optional)
    page := int32(2) // int32 | The offset to retrieve data from (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SettlementAPI.SettlementsFetch(context.Background()).PerPage(perPage).Page(page).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SettlementAPI.SettlementsFetch``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SettlementsFetch`: Response
    fmt.Fprintf(os.Stdout, "Response from `SettlementAPI.SettlementsFetch`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSettlementsFetchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **perPage** | **int32** | The number of records to fetch per request | 
 **page** | **int32** | The offset to retrieve data from | 

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


## SettlementsTransaction

> Response SettlementsTransaction(ctx, id).Execute()

Fetch Settlement Transactions



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
    id := int32(8610870) // int32 | The settlement ID in which you want to fetch its transactions

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SettlementAPI.SettlementsTransaction(context.Background(), id).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SettlementAPI.SettlementsTransaction``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SettlementsTransaction`: Response
    fmt.Fprintf(os.Stdout, "Response from `SettlementAPI.SettlementsTransaction`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int32** | The settlement ID in which you want to fetch its transactions | 

### Other Parameters

Other parameters are passed through a pointer to a apiSettlementsTransactionRequest struct via the builder pattern


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

