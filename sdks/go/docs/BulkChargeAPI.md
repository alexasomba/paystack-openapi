# \BulkChargeAPI

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**BulkChargeCharges**](BulkChargeAPI.md#BulkChargeCharges) | **Get** /bulkcharge/{code}/charges | List Charges in a Batch
[**BulkChargeFetch**](BulkChargeAPI.md#BulkChargeFetch) | **Get** /bulkcharge/{code} | Fetch Bulk Charge Batch
[**BulkChargeInitiate**](BulkChargeAPI.md#BulkChargeInitiate) | **Post** /bulkcharge | Initiate Bulk Charge
[**BulkChargeList**](BulkChargeAPI.md#BulkChargeList) | **Get** /bulkcharge | List Bulk Charge Batches
[**BulkChargePause**](BulkChargeAPI.md#BulkChargePause) | **Get** /bulkcharge/pause/{code} | Pause Bulk Charge Batch
[**BulkChargeResume**](BulkChargeAPI.md#BulkChargeResume) | **Get** /bulkcharge/resume/{code} | Resume Bulk Charge Batch



## BulkChargeCharges

> BulkchargeCodeCharges BulkChargeCharges(ctx, code).PerPage(perPage).Page(page).Status(status).Execute()

List Charges in a Batch



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
    code := "BCH_180tl7oq7cayggh" // string | An code for the batch whose charges you want to retrieve
    perPage := int32(56) // int32 | Number of records to fetch per page (optional)
    page := int32(56) // int32 | The offset to retrieve data from (optional)
    status := "status_example" // string | Filter by the status of the charges (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BulkChargeAPI.BulkChargeCharges(context.Background(), code).PerPage(perPage).Page(page).Status(status).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BulkChargeAPI.BulkChargeCharges``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `BulkChargeCharges`: BulkchargeCodeCharges
    fmt.Fprintf(os.Stdout, "Response from `BulkChargeAPI.BulkChargeCharges`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**code** | **string** | An code for the batch whose charges you want to retrieve | 

### Other Parameters

Other parameters are passed through a pointer to a apiBulkChargeChargesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **perPage** | **int32** | Number of records to fetch per page | 
 **page** | **int32** | The offset to retrieve data from | 
 **status** | **string** | Filter by the status of the charges | 

### Return type

[**BulkchargeCodeCharges**](BulkchargeCodeCharges.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## BulkChargeFetch

> BulkchargeCode BulkChargeFetch(ctx, code).Execute()

Fetch Bulk Charge Batch



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
    code := "BCH_180tl7oq7cayggh" // string | The code for the charge whose batches you want to retrieve

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BulkChargeAPI.BulkChargeFetch(context.Background(), code).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BulkChargeAPI.BulkChargeFetch``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `BulkChargeFetch`: BulkchargeCode
    fmt.Fprintf(os.Stdout, "Response from `BulkChargeAPI.BulkChargeFetch`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**code** | **string** | The code for the charge whose batches you want to retrieve | 

### Other Parameters

Other parameters are passed through a pointer to a apiBulkChargeFetchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**BulkchargeCode**](BulkchargeCode.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## BulkChargeInitiate

> BulkChargeInitiateResponse BulkChargeInitiate(ctx).BulkChargeInitiate(bulkChargeInitiate).Execute()

Initiate Bulk Charge



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
    bulkChargeInitiate := []openapiclient.BulkChargeInitiate{*openapiclient.NewBulkChargeInitiate("Authorization_example", int32(123))} // []BulkChargeInitiate |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BulkChargeAPI.BulkChargeInitiate(context.Background()).BulkChargeInitiate(bulkChargeInitiate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BulkChargeAPI.BulkChargeInitiate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `BulkChargeInitiate`: BulkChargeInitiateResponse
    fmt.Fprintf(os.Stdout, "Response from `BulkChargeAPI.BulkChargeInitiate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiBulkChargeInitiateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkChargeInitiate** | [**[]BulkChargeInitiate**](BulkChargeInitiate.md) |  | 

### Return type

[**BulkChargeInitiateResponse**](BulkChargeInitiateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## BulkChargeList

> BulkChargeListResponse BulkChargeList(ctx).PerPage(perPage).Page(page).Status(status).Execute()

List Bulk Charge Batches



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
    perPage := int32(56) // int32 | Number of records to fetch per page (optional)
    page := int32(56) // int32 | The offset to retrieve data from (optional)
    status := "status_example" // string | Filter by the status of the charges (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BulkChargeAPI.BulkChargeList(context.Background()).PerPage(perPage).Page(page).Status(status).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BulkChargeAPI.BulkChargeList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `BulkChargeList`: BulkChargeListResponse
    fmt.Fprintf(os.Stdout, "Response from `BulkChargeAPI.BulkChargeList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiBulkChargeListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **perPage** | **int32** | Number of records to fetch per page | 
 **page** | **int32** | The offset to retrieve data from | 
 **status** | **string** | Filter by the status of the charges | 

### Return type

[**BulkChargeListResponse**](BulkChargeListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## BulkChargePause

> BulkchargePauseCode BulkChargePause(ctx, code).Execute()

Pause Bulk Charge Batch



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
    code := "BCH_180tl7oq7cayggh" // string | The batch code for the bulk charge you want to pause

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BulkChargeAPI.BulkChargePause(context.Background(), code).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BulkChargeAPI.BulkChargePause``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `BulkChargePause`: BulkchargePauseCode
    fmt.Fprintf(os.Stdout, "Response from `BulkChargeAPI.BulkChargePause`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**code** | **string** | The batch code for the bulk charge you want to pause | 

### Other Parameters

Other parameters are passed through a pointer to a apiBulkChargePauseRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**BulkchargePauseCode**](BulkchargePauseCode.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## BulkChargeResume

> BulkchargeResumeCode BulkChargeResume(ctx, code).Execute()

Resume Bulk Charge Batch



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
    code := "BCH_180tl7oq7cayggh" // string | The batch code for the bulk charge you want to pause

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BulkChargeAPI.BulkChargeResume(context.Background(), code).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BulkChargeAPI.BulkChargeResume``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `BulkChargeResume`: BulkchargeResumeCode
    fmt.Fprintf(os.Stdout, "Response from `BulkChargeAPI.BulkChargeResume`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**code** | **string** | The batch code for the bulk charge you want to pause | 

### Other Parameters

Other parameters are passed through a pointer to a apiBulkChargeResumeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**BulkchargeResumeCode**](BulkchargeResumeCode.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

