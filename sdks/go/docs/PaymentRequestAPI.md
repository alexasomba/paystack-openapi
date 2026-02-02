# \PaymentRequestAPI

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**PaymentRequestArchive**](PaymentRequestAPI.md#PaymentRequestArchive) | **Post** /paymentrequest/archive/{id} | Archive Payment Request
[**PaymentRequestCreate**](PaymentRequestAPI.md#PaymentRequestCreate) | **Post** /paymentrequest | Create Payment Request
[**PaymentRequestFetch**](PaymentRequestAPI.md#PaymentRequestFetch) | **Get** /paymentrequest/{id} | Fetch Payment Request
[**PaymentRequestFinalize**](PaymentRequestAPI.md#PaymentRequestFinalize) | **Post** /paymentrequest/finalize/{id} | Finalize Payment Request
[**PaymentRequestList**](PaymentRequestAPI.md#PaymentRequestList) | **Get** /paymentrequest | List Payment Request
[**PaymentRequestNotify**](PaymentRequestAPI.md#PaymentRequestNotify) | **Post** /paymentrequest/notify/{id} | Send Notification
[**PaymentRequestTotals**](PaymentRequestAPI.md#PaymentRequestTotals) | **Get** /paymentrequest/totals | Payment Request Total
[**PaymentRequestUpdate**](PaymentRequestAPI.md#PaymentRequestUpdate) | **Put** /paymentrequest/{id} | Update Payment Request
[**PaymentRequestVerify**](PaymentRequestAPI.md#PaymentRequestVerify) | **Get** /paymentrequest/verify/{id} | Verify Payment Request



## PaymentRequestArchive

> PaymentRequestArchiveResponse PaymentRequestArchive(ctx, id).Execute()

Archive Payment Request



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/alexasomba/paystack-go"
)

func main() {
    id := int32(18823736) // int32 | The unique identifier of a previously created payment request

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.PaymentRequestAPI.PaymentRequestArchive(context.Background(), id).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `PaymentRequestAPI.PaymentRequestArchive``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PaymentRequestArchive`: PaymentRequestArchiveResponse
    fmt.Fprintf(os.Stdout, "Response from `PaymentRequestAPI.PaymentRequestArchive`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int32** | The unique identifier of a previously created payment request | 

### Other Parameters

Other parameters are passed through a pointer to a apiPaymentRequestArchiveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**PaymentRequestArchiveResponse**](PaymentRequestArchiveResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PaymentRequestCreate

> PaymentRequestCreateResponse PaymentRequestCreate(ctx).PaymentRequestCreate(paymentRequestCreate).Execute()

Create Payment Request



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/alexasomba/paystack-go"
)

func main() {
    paymentRequestCreate := *openapiclient.NewPaymentRequestCreate("Customer_example", int32(123)) // PaymentRequestCreate |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.PaymentRequestAPI.PaymentRequestCreate(context.Background()).PaymentRequestCreate(paymentRequestCreate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `PaymentRequestAPI.PaymentRequestCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PaymentRequestCreate`: PaymentRequestCreateResponse
    fmt.Fprintf(os.Stdout, "Response from `PaymentRequestAPI.PaymentRequestCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPaymentRequestCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentRequestCreate** | [**PaymentRequestCreate**](PaymentRequestCreate.md) |  | 

### Return type

[**PaymentRequestCreateResponse**](PaymentRequestCreateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PaymentRequestFetch

> PaymentRequestListResponse PaymentRequestFetch(ctx, id).Execute()

Fetch Payment Request



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/alexasomba/paystack-go"
)

func main() {
    id := int32(18823736) // int32 | The unique identifier of a previously created payment request

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.PaymentRequestAPI.PaymentRequestFetch(context.Background(), id).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `PaymentRequestAPI.PaymentRequestFetch``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PaymentRequestFetch`: PaymentRequestListResponse
    fmt.Fprintf(os.Stdout, "Response from `PaymentRequestAPI.PaymentRequestFetch`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int32** | The unique identifier of a previously created payment request | 

### Other Parameters

Other parameters are passed through a pointer to a apiPaymentRequestFetchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**PaymentRequestListResponse**](PaymentRequestListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PaymentRequestFinalize

> PaymentRequestFinalizeResponse PaymentRequestFinalize(ctx, id).Execute()

Finalize Payment Request



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/alexasomba/paystack-go"
)

func main() {
    id := int32(18823736) // int32 | The unique identifier of a draft payment request

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.PaymentRequestAPI.PaymentRequestFinalize(context.Background(), id).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `PaymentRequestAPI.PaymentRequestFinalize``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PaymentRequestFinalize`: PaymentRequestFinalizeResponse
    fmt.Fprintf(os.Stdout, "Response from `PaymentRequestAPI.PaymentRequestFinalize`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int32** | The unique identifier of a draft payment request | 

### Other Parameters

Other parameters are passed through a pointer to a apiPaymentRequestFinalizeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**PaymentRequestFinalizeResponse**](PaymentRequestFinalizeResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PaymentRequestList

> PaymentRequestListResponse PaymentRequestList(ctx).PerPage(perPage).Page(page).Customer(customer).Status(status).Currency(currency).From(from).To(to).Execute()

List Payment Request



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/alexasomba/paystack-go"
)

func main() {
    perPage := int32(56) // int32 | Number of records to fetch per page (optional)
    page := int32(56) // int32 | The section to retrieve (optional)
    customer := "customer_example" // string | Customer ID (optional)
    status := "success" // string | Invoice status to filter (optional)
    currency := "currency_example" // string | If your integration supports more than one currency, choose the one to filter (optional)
    from := time.Now() // time.Time | The start date (optional)
    to := time.Now() // time.Time | The end date (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.PaymentRequestAPI.PaymentRequestList(context.Background()).PerPage(perPage).Page(page).Customer(customer).Status(status).Currency(currency).From(from).To(to).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `PaymentRequestAPI.PaymentRequestList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PaymentRequestList`: PaymentRequestListResponse
    fmt.Fprintf(os.Stdout, "Response from `PaymentRequestAPI.PaymentRequestList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPaymentRequestListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **perPage** | **int32** | Number of records to fetch per page | 
 **page** | **int32** | The section to retrieve | 
 **customer** | **string** | Customer ID | 
 **status** | **string** | Invoice status to filter | 
 **currency** | **string** | If your integration supports more than one currency, choose the one to filter | 
 **from** | **time.Time** | The start date | 
 **to** | **time.Time** | The end date | 

### Return type

[**PaymentRequestListResponse**](PaymentRequestListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PaymentRequestNotify

> PaymentRequestSendNotificationResponse PaymentRequestNotify(ctx, id).Execute()

Send Notification



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/alexasomba/paystack-go"
)

func main() {
    id := int32(18823736) // int32 | The unique identifier of a previously created payment request

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.PaymentRequestAPI.PaymentRequestNotify(context.Background(), id).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `PaymentRequestAPI.PaymentRequestNotify``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PaymentRequestNotify`: PaymentRequestSendNotificationResponse
    fmt.Fprintf(os.Stdout, "Response from `PaymentRequestAPI.PaymentRequestNotify`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int32** | The unique identifier of a previously created payment request | 

### Other Parameters

Other parameters are passed through a pointer to a apiPaymentRequestNotifyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**PaymentRequestSendNotificationResponse**](PaymentRequestSendNotificationResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PaymentRequestTotals

> PaymentRequestTotalResponse PaymentRequestTotals(ctx).Execute()

Payment Request Total



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/alexasomba/paystack-go"
)

func main() {

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.PaymentRequestAPI.PaymentRequestTotals(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `PaymentRequestAPI.PaymentRequestTotals``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PaymentRequestTotals`: PaymentRequestTotalResponse
    fmt.Fprintf(os.Stdout, "Response from `PaymentRequestAPI.PaymentRequestTotals`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiPaymentRequestTotalsRequest struct via the builder pattern


### Return type

[**PaymentRequestTotalResponse**](PaymentRequestTotalResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PaymentRequestUpdate

> PaymentRequestUpdateResponse PaymentRequestUpdate(ctx, id).PaymentRequestUpdate(paymentRequestUpdate).Execute()

Update Payment Request



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/alexasomba/paystack-go"
)

func main() {
    id := int32(18823736) // int32 | The unique identifier of a previously created payment request
    paymentRequestUpdate := *openapiclient.NewPaymentRequestUpdate() // PaymentRequestUpdate |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.PaymentRequestAPI.PaymentRequestUpdate(context.Background(), id).PaymentRequestUpdate(paymentRequestUpdate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `PaymentRequestAPI.PaymentRequestUpdate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PaymentRequestUpdate`: PaymentRequestUpdateResponse
    fmt.Fprintf(os.Stdout, "Response from `PaymentRequestAPI.PaymentRequestUpdate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int32** | The unique identifier of a previously created payment request | 

### Other Parameters

Other parameters are passed through a pointer to a apiPaymentRequestUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **paymentRequestUpdate** | [**PaymentRequestUpdate**](PaymentRequestUpdate.md) |  | 

### Return type

[**PaymentRequestUpdateResponse**](PaymentRequestUpdateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PaymentRequestVerify

> PaymentRequestVerifyResponse PaymentRequestVerify(ctx, id).Execute()

Verify Payment Request



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/alexasomba/paystack-go"
)

func main() {
    id := int32(18823736) // int32 | The unique identifier of a previously created payment request

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.PaymentRequestAPI.PaymentRequestVerify(context.Background(), id).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `PaymentRequestAPI.PaymentRequestVerify``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PaymentRequestVerify`: PaymentRequestVerifyResponse
    fmt.Fprintf(os.Stdout, "Response from `PaymentRequestAPI.PaymentRequestVerify`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int32** | The unique identifier of a previously created payment request | 

### Other Parameters

Other parameters are passed through a pointer to a apiPaymentRequestVerifyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**PaymentRequestVerifyResponse**](PaymentRequestVerifyResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

