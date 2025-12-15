# \TransferRecipientAPI

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**TransferrecipientBulk**](TransferRecipientAPI.md#TransferrecipientBulk) | **Post** /transferrecipient/bulk | Bulk Create Transfer Recipient
[**TransferrecipientCreate**](TransferRecipientAPI.md#TransferrecipientCreate) | **Post** /transferrecipient | Create Transfer Recipient
[**TransferrecipientDelete**](TransferRecipientAPI.md#TransferrecipientDelete) | **Delete** /transferrecipient/{code} | Delete Transfer Recipient
[**TransferrecipientFetch**](TransferRecipientAPI.md#TransferrecipientFetch) | **Get** /transferrecipient/{code} | Fetch Transfer recipient
[**TransferrecipientList**](TransferRecipientAPI.md#TransferrecipientList) | **Get** /transferrecipient | List Transfer Recipients
[**TransferrecipientUpdate**](TransferRecipientAPI.md#TransferrecipientUpdate) | **Put** /transferrecipient/{code} | Update Transfer Recipient



## TransferrecipientBulk

> TransferRecipientBulkCreateResponse TransferrecipientBulk(ctx).TransferRecipientBulk(transferRecipientBulk).Execute()

Bulk Create Transfer Recipient



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
    transferRecipientBulk := *openapiclient.NewTransferRecipientBulk([]openapiclient.TransferRecipientCreate{*openapiclient.NewTransferRecipientCreate("Type_example", "Name_example", "AccountNumber_example", "BankCode_example")}) // TransferRecipientBulk |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TransferRecipientAPI.TransferrecipientBulk(context.Background()).TransferRecipientBulk(transferRecipientBulk).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TransferRecipientAPI.TransferrecipientBulk``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TransferrecipientBulk`: TransferRecipientBulkCreateResponse
    fmt.Fprintf(os.Stdout, "Response from `TransferRecipientAPI.TransferrecipientBulk`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTransferrecipientBulkRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferRecipientBulk** | [**TransferRecipientBulk**](TransferRecipientBulk.md) |  | 

### Return type

[**TransferRecipientBulkCreateResponse**](TransferRecipientBulkCreateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TransferrecipientCreate

> TransferRecipientCreateResponse TransferrecipientCreate(ctx).TransferRecipientCreate(transferRecipientCreate).Execute()

Create Transfer Recipient



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
    transferRecipientCreate := *openapiclient.NewTransferRecipientCreate("Type_example", "Name_example", "AccountNumber_example", "BankCode_example") // TransferRecipientCreate |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TransferRecipientAPI.TransferrecipientCreate(context.Background()).TransferRecipientCreate(transferRecipientCreate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TransferRecipientAPI.TransferrecipientCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TransferrecipientCreate`: TransferRecipientCreateResponse
    fmt.Fprintf(os.Stdout, "Response from `TransferRecipientAPI.TransferrecipientCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTransferrecipientCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferRecipientCreate** | [**TransferRecipientCreate**](TransferRecipientCreate.md) |  | 

### Return type

[**TransferRecipientCreateResponse**](TransferRecipientCreateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TransferrecipientDelete

> TransferRecipientDeleteResponse TransferrecipientDelete(ctx, code).Execute()

Delete Transfer Recipient



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
    code := "RCP_5ap8rcimmcj8lbi" // string | Transfer recipient code

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TransferRecipientAPI.TransferrecipientDelete(context.Background(), code).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TransferRecipientAPI.TransferrecipientDelete``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TransferrecipientDelete`: TransferRecipientDeleteResponse
    fmt.Fprintf(os.Stdout, "Response from `TransferRecipientAPI.TransferrecipientDelete`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**code** | **string** | Transfer recipient code | 

### Other Parameters

Other parameters are passed through a pointer to a apiTransferrecipientDeleteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**TransferRecipientDeleteResponse**](TransferRecipientDeleteResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TransferrecipientFetch

> TransferRecipientFetchResponse TransferrecipientFetch(ctx, code).Execute()

Fetch Transfer recipient



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
    code := "RCP_5ap8rcimmcj8lbi" // string | Transfer recipient code

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TransferRecipientAPI.TransferrecipientFetch(context.Background(), code).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TransferRecipientAPI.TransferrecipientFetch``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TransferrecipientFetch`: TransferRecipientFetchResponse
    fmt.Fprintf(os.Stdout, "Response from `TransferRecipientAPI.TransferrecipientFetch`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**code** | **string** | Transfer recipient code | 

### Other Parameters

Other parameters are passed through a pointer to a apiTransferrecipientFetchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**TransferRecipientFetchResponse**](TransferRecipientFetchResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TransferrecipientList

> TransferRecipientListResponse TransferrecipientList(ctx).UseCursor(useCursor).Next(next).Previous(previous).PerPage(perPage).Page(page).Execute()

List Transfer Recipients



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
    useCursor := true // bool | A flag to indicate if cursor based pagination should be used (optional)
    next := "next_example" // string | An alphanumeric value returned for every cursor based retrieval, used to retrieve the next set of data  (optional)
    previous := "previous_example" // string | An alphanumeric value returned for every cursor based retrieval, used to retrieve the previous set of data  (optional)
    perPage := int32(56) // int32 | The number of records to fetch per request (optional)
    page := int32(56) // int32 | The offset to retrieve data from (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TransferRecipientAPI.TransferrecipientList(context.Background()).UseCursor(useCursor).Next(next).Previous(previous).PerPage(perPage).Page(page).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TransferRecipientAPI.TransferrecipientList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TransferrecipientList`: TransferRecipientListResponse
    fmt.Fprintf(os.Stdout, "Response from `TransferRecipientAPI.TransferrecipientList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTransferrecipientListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **useCursor** | **bool** | A flag to indicate if cursor based pagination should be used | 
 **next** | **string** | An alphanumeric value returned for every cursor based retrieval, used to retrieve the next set of data  | 
 **previous** | **string** | An alphanumeric value returned for every cursor based retrieval, used to retrieve the previous set of data  | 
 **perPage** | **int32** | The number of records to fetch per request | 
 **page** | **int32** | The offset to retrieve data from | 

### Return type

[**TransferRecipientListResponse**](TransferRecipientListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TransferrecipientUpdate

> TransferRecipientUpdateResponse TransferrecipientUpdate(ctx, code).TransferRecipientUpdate(transferRecipientUpdate).Execute()

Update Transfer Recipient



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
    code := "RCP_5ap8rcimmcj8lbi" // string | Transfer recipient code
    transferRecipientUpdate := *openapiclient.NewTransferRecipientUpdate() // TransferRecipientUpdate |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TransferRecipientAPI.TransferrecipientUpdate(context.Background(), code).TransferRecipientUpdate(transferRecipientUpdate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TransferRecipientAPI.TransferrecipientUpdate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TransferrecipientUpdate`: TransferRecipientUpdateResponse
    fmt.Fprintf(os.Stdout, "Response from `TransferRecipientAPI.TransferrecipientUpdate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**code** | **string** | Transfer recipient code | 

### Other Parameters

Other parameters are passed through a pointer to a apiTransferrecipientUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **transferRecipientUpdate** | [**TransferRecipientUpdate**](TransferRecipientUpdate.md) |  | 

### Return type

[**TransferRecipientUpdateResponse**](TransferRecipientUpdateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

