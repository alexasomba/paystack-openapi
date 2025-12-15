# \RefundAPI

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RefundCreate**](RefundAPI.md#RefundCreate) | **Post** /refund | Create Refund
[**RefundFetch**](RefundAPI.md#RefundFetch) | **Get** /refund/{id} | Fetch Refund
[**RefundList**](RefundAPI.md#RefundList) | **Get** /refund | List Refunds
[**RefundRetry**](RefundAPI.md#RefundRetry) | **Post** /refund/retry_with_customer_details/{id} | Retry Refund



## RefundCreate

> RefundCreateResponse RefundCreate(ctx).RefundCreate(refundCreate).Execute()

Create Refund



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
    refundCreate := *openapiclient.NewRefundCreate("Transaction_example") // RefundCreate |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RefundAPI.RefundCreate(context.Background()).RefundCreate(refundCreate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RefundAPI.RefundCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RefundCreate`: RefundCreateResponse
    fmt.Fprintf(os.Stdout, "Response from `RefundAPI.RefundCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiRefundCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refundCreate** | [**RefundCreate**](RefundCreate.md) |  | 

### Return type

[**RefundCreateResponse**](RefundCreateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RefundFetch

> RefundFetchResponse RefundFetch(ctx, id).Execute()

Fetch Refund



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
    id := int32(15581137) // int32 | The identifier of the refund

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RefundAPI.RefundFetch(context.Background(), id).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RefundAPI.RefundFetch``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RefundFetch`: RefundFetchResponse
    fmt.Fprintf(os.Stdout, "Response from `RefundAPI.RefundFetch`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int32** | The identifier of the refund | 

### Other Parameters

Other parameters are passed through a pointer to a apiRefundFetchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**RefundFetchResponse**](RefundFetchResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RefundList

> RefundListResponse RefundList(ctx).PerPage(perPage).Page(page).From(from).To(to).Execute()

List Refunds



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
    perPage := int32(10) // int32 | Number of records to fetch per page (optional) (default to 50)
    page := int32(56) // int32 | The section to retrieve (optional)
    from := time.Now() // time.Time | The start date (optional)
    to := time.Now() // time.Time | The end date (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RefundAPI.RefundList(context.Background()).PerPage(perPage).Page(page).From(from).To(to).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RefundAPI.RefundList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RefundList`: RefundListResponse
    fmt.Fprintf(os.Stdout, "Response from `RefundAPI.RefundList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiRefundListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **perPage** | **int32** | Number of records to fetch per page | [default to 50]
 **page** | **int32** | The section to retrieve | 
 **from** | **time.Time** | The start date | 
 **to** | **time.Time** | The end date | 

### Return type

[**RefundListResponse**](RefundListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RefundRetry

> RefundRetryResponse RefundRetry(ctx, id).RefundRetry(refundRetry).Execute()

Retry Refund



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
    id := int32(15581137) // int32 | The identifier of the refund
    refundRetry := *openapiclient.NewRefundRetry(*openapiclient.NewRefundRetryAccountDetails("Currency_example", "AccountNumber_example", "BankId_example")) // RefundRetry |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RefundAPI.RefundRetry(context.Background(), id).RefundRetry(refundRetry).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RefundAPI.RefundRetry``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RefundRetry`: RefundRetryResponse
    fmt.Fprintf(os.Stdout, "Response from `RefundAPI.RefundRetry`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int32** | The identifier of the refund | 

### Other Parameters

Other parameters are passed through a pointer to a apiRefundRetryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **refundRetry** | [**RefundRetry**](RefundRetry.md) |  | 

### Return type

[**RefundRetryResponse**](RefundRetryResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

