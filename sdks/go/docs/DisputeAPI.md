# \DisputeAPI

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DisputeDownload**](DisputeAPI.md#DisputeDownload) | **Get** /dispute/export | Export Disputes
[**DisputeEvidence**](DisputeAPI.md#DisputeEvidence) | **Post** /dispute/{id}/evidence | Add Evidence
[**DisputeFetch**](DisputeAPI.md#DisputeFetch) | **Get** /dispute/{id} | Fetch Dispute
[**DisputeList**](DisputeAPI.md#DisputeList) | **Get** /dispute | List Disputes
[**DisputeResolve**](DisputeAPI.md#DisputeResolve) | **Put** /dispute/{id}/resolve | Resolve Dispute
[**DisputeTransaction**](DisputeAPI.md#DisputeTransaction) | **Get** /dispute/transaction/{id} | List Transaction Disputes
[**DisputeUpdate**](DisputeAPI.md#DisputeUpdate) | **Put** /dispute/{id} | Update Dispute
[**DisputeUploadUrl**](DisputeAPI.md#DisputeUploadUrl) | **Get** /dispute/{id}/upload_url | Fetch Upload URL



## DisputeDownload

> DisputeExportResponse DisputeDownload(ctx).PerPage(perPage).Page(page).Status(status).From(from).To(to).Execute()

Export Disputes



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
    status := "awaiting-merchant-feedback" // string |  (optional)
    from := time.Now() // time.Time | The start date (optional)
    to := time.Now() // time.Time | The end date (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DisputeAPI.DisputeDownload(context.Background()).PerPage(perPage).Page(page).Status(status).From(from).To(to).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DisputeAPI.DisputeDownload``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DisputeDownload`: DisputeExportResponse
    fmt.Fprintf(os.Stdout, "Response from `DisputeAPI.DisputeDownload`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDisputeDownloadRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **perPage** | **int32** | Number of records to fetch per page | 
 **page** | **int32** | The section to retrieve | 
 **status** | **string** |  | 
 **from** | **time.Time** | The start date | 
 **to** | **time.Time** | The end date | 

### Return type

[**DisputeExportResponse**](DisputeExportResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DisputeEvidence

> DisputeAddEvidenceResponse DisputeEvidence(ctx, id).DisputeEvidence(disputeEvidence).Execute()

Add Evidence



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
    id := int32(4734583785) // int32 | The unique identifier of the dispute
    disputeEvidence := *openapiclient.NewDisputeEvidence("CustomerEmail_example", "CustomerName_example", "CustomerPhone_example", "ServiceDetails_example") // DisputeEvidence |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DisputeAPI.DisputeEvidence(context.Background(), id).DisputeEvidence(disputeEvidence).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DisputeAPI.DisputeEvidence``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DisputeEvidence`: DisputeAddEvidenceResponse
    fmt.Fprintf(os.Stdout, "Response from `DisputeAPI.DisputeEvidence`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int32** | The unique identifier of the dispute | 

### Other Parameters

Other parameters are passed through a pointer to a apiDisputeEvidenceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **disputeEvidence** | [**DisputeEvidence**](DisputeEvidence.md) |  | 

### Return type

[**DisputeAddEvidenceResponse**](DisputeAddEvidenceResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DisputeFetch

> DisputeFetchResponse DisputeFetch(ctx, id).Execute()

Fetch Dispute



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
    id := int32(1801929) // int32 | The unique identifier of the dispute

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DisputeAPI.DisputeFetch(context.Background(), id).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DisputeAPI.DisputeFetch``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DisputeFetch`: DisputeFetchResponse
    fmt.Fprintf(os.Stdout, "Response from `DisputeAPI.DisputeFetch`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int32** | The unique identifier of the dispute | 

### Other Parameters

Other parameters are passed through a pointer to a apiDisputeFetchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**DisputeFetchResponse**](DisputeFetchResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DisputeList

> DisputeListResponse DisputeList(ctx).PerPage(perPage).Page(page).Status(status).Transaction(transaction).From(from).To(to).Execute()

List Disputes



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
    status := "awaiting-merchant-feedback" // string | Dispute status (optional)
    transaction := "transaction_example" // string | Transaction ID (optional)
    from := time.Now() // time.Time | The start date (optional)
    to := time.Now() // time.Time | The end date (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DisputeAPI.DisputeList(context.Background()).PerPage(perPage).Page(page).Status(status).Transaction(transaction).From(from).To(to).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DisputeAPI.DisputeList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DisputeList`: DisputeListResponse
    fmt.Fprintf(os.Stdout, "Response from `DisputeAPI.DisputeList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDisputeListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **perPage** | **int32** | Number of records to fetch per page | 
 **page** | **int32** | The section to retrieve | 
 **status** | **string** | Dispute status | 
 **transaction** | **string** | Transaction ID | 
 **from** | **time.Time** | The start date | 
 **to** | **time.Time** | The end date | 

### Return type

[**DisputeListResponse**](DisputeListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DisputeResolve

> DisputeResolveResponse DisputeResolve(ctx, id).DisputeResolve(disputeResolve).Execute()

Resolve Dispute



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
    id := int32(4734583785) // int32 | The unique identifier of the dispute
    disputeResolve := *openapiclient.NewDisputeResolve("Resolution_example", "Message_example", int32(123), "UploadedFilename_example") // DisputeResolve |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DisputeAPI.DisputeResolve(context.Background(), id).DisputeResolve(disputeResolve).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DisputeAPI.DisputeResolve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DisputeResolve`: DisputeResolveResponse
    fmt.Fprintf(os.Stdout, "Response from `DisputeAPI.DisputeResolve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int32** | The unique identifier of the dispute | 

### Other Parameters

Other parameters are passed through a pointer to a apiDisputeResolveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **disputeResolve** | [**DisputeResolve**](DisputeResolve.md) |  | 

### Return type

[**DisputeResolveResponse**](DisputeResolveResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DisputeTransaction

> DisputeListTransactionResponse DisputeTransaction(ctx, id).Execute()

List Transaction Disputes



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
    id := int32(4734583785) // int32 | The unique identifier of the transaction

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DisputeAPI.DisputeTransaction(context.Background(), id).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DisputeAPI.DisputeTransaction``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DisputeTransaction`: DisputeListTransactionResponse
    fmt.Fprintf(os.Stdout, "Response from `DisputeAPI.DisputeTransaction`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int32** | The unique identifier of the transaction | 

### Other Parameters

Other parameters are passed through a pointer to a apiDisputeTransactionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**DisputeListTransactionResponse**](DisputeListTransactionResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DisputeUpdate

> DisputeUpdateResponse DisputeUpdate(ctx, id).DisputeUpdate(disputeUpdate).Execute()

Update Dispute



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
    id := int32(1801929) // int32 | The unique identifier of the dispute
    disputeUpdate := *openapiclient.NewDisputeUpdate(int32(123)) // DisputeUpdate |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DisputeAPI.DisputeUpdate(context.Background(), id).DisputeUpdate(disputeUpdate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DisputeAPI.DisputeUpdate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DisputeUpdate`: DisputeUpdateResponse
    fmt.Fprintf(os.Stdout, "Response from `DisputeAPI.DisputeUpdate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int32** | The unique identifier of the dispute | 

### Other Parameters

Other parameters are passed through a pointer to a apiDisputeUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **disputeUpdate** | [**DisputeUpdate**](DisputeUpdate.md) |  | 

### Return type

[**DisputeUpdateResponse**](DisputeUpdateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DisputeUploadUrl

> DisputeUploadURLResponse DisputeUploadUrl(ctx, id).Execute()

Fetch Upload URL



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
    id := int32(4734583785) // int32 | The unique identifier of the dispute

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DisputeAPI.DisputeUploadUrl(context.Background(), id).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DisputeAPI.DisputeUploadUrl``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DisputeUploadUrl`: DisputeUploadURLResponse
    fmt.Fprintf(os.Stdout, "Response from `DisputeAPI.DisputeUploadUrl`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int32** | The unique identifier of the dispute | 

### Other Parameters

Other parameters are passed through a pointer to a apiDisputeUploadUrlRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**DisputeUploadURLResponse**](DisputeUploadURLResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

