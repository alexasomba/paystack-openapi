# \VirtualTerminalAPI

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**VirtualTerminalAddSplitCode**](VirtualTerminalAPI.md#VirtualTerminalAddSplitCode) | **Put** /virtual_terminal/{code}/split_code | Add Split Code to Virtual Terminal
[**VirtualTerminalCreate**](VirtualTerminalAPI.md#VirtualTerminalCreate) | **Post** /virtual_terminal | Create Virtual Terminal
[**VirtualTerminalDeactivate**](VirtualTerminalAPI.md#VirtualTerminalDeactivate) | **Put** /virtual_terminal/{code}/deactivate | Deactivate Virtual Terminal
[**VirtualTerminalDeleteSplitCode**](VirtualTerminalAPI.md#VirtualTerminalDeleteSplitCode) | **Delete** /virtual_terminal/{code}/split_code | Remove Split Code from Virtual Terminal
[**VirtualTerminalDestinationAssign**](VirtualTerminalAPI.md#VirtualTerminalDestinationAssign) | **Post** /virtual_terminal/{code}/destination/assign | Assign Destination to Virtual Terminal
[**VirtualTerminalDestinationUnassign**](VirtualTerminalAPI.md#VirtualTerminalDestinationUnassign) | **Post** /virtual_terminal/{code}/destination/unassign | Unassign Destination from Virtual Terminal
[**VirtualTerminalFetch**](VirtualTerminalAPI.md#VirtualTerminalFetch) | **Get** /virtual_terminal/{code} | Fetch Virtual Terminal
[**VirtualTerminalList**](VirtualTerminalAPI.md#VirtualTerminalList) | **Get** /virtual_terminal | List Virtual Terminals
[**VirtualTerminalUpdate**](VirtualTerminalAPI.md#VirtualTerminalUpdate) | **Put** /virtual_terminal/{code} | Update Virtual Terminal



## VirtualTerminalAddSplitCode

> VirtualTerminalAddSplitCodeResponse VirtualTerminalAddSplitCode(ctx, code).VirtualTerminalAddSplitCode(virtualTerminalAddSplitCode).Execute()

Add Split Code to Virtual Terminal



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
    code := "VT_MCK5292Z" // string | Code of the Virtual Terminal
    virtualTerminalAddSplitCode := *openapiclient.NewVirtualTerminalAddSplitCode("SplitCode_example") // VirtualTerminalAddSplitCode |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.VirtualTerminalAPI.VirtualTerminalAddSplitCode(context.Background(), code).VirtualTerminalAddSplitCode(virtualTerminalAddSplitCode).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `VirtualTerminalAPI.VirtualTerminalAddSplitCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `VirtualTerminalAddSplitCode`: VirtualTerminalAddSplitCodeResponse
    fmt.Fprintf(os.Stdout, "Response from `VirtualTerminalAPI.VirtualTerminalAddSplitCode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**code** | **string** | Code of the Virtual Terminal | 

### Other Parameters

Other parameters are passed through a pointer to a apiVirtualTerminalAddSplitCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **virtualTerminalAddSplitCode** | [**VirtualTerminalAddSplitCode**](VirtualTerminalAddSplitCode.md) |  | 

### Return type

[**VirtualTerminalAddSplitCodeResponse**](VirtualTerminalAddSplitCodeResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## VirtualTerminalCreate

> VirtualTerminalCreateResponse VirtualTerminalCreate(ctx).VirtualTerminalCreate(virtualTerminalCreate).Execute()

Create Virtual Terminal



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
    virtualTerminalCreate := *openapiclient.NewVirtualTerminalCreate("Name_example", []openapiclient.VirtualTerminalCreateDestinationsInner{*openapiclient.NewVirtualTerminalCreateDestinationsInner()}) // VirtualTerminalCreate |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.VirtualTerminalAPI.VirtualTerminalCreate(context.Background()).VirtualTerminalCreate(virtualTerminalCreate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `VirtualTerminalAPI.VirtualTerminalCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `VirtualTerminalCreate`: VirtualTerminalCreateResponse
    fmt.Fprintf(os.Stdout, "Response from `VirtualTerminalAPI.VirtualTerminalCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiVirtualTerminalCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **virtualTerminalCreate** | [**VirtualTerminalCreate**](VirtualTerminalCreate.md) |  | 

### Return type

[**VirtualTerminalCreateResponse**](VirtualTerminalCreateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## VirtualTerminalDeactivate

> VirtualTerminalDeactivateResponse VirtualTerminalDeactivate(ctx, code).Execute()

Deactivate Virtual Terminal



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
    code := "VT_MCK5292Z" // string | Code of the Virtual Terminal

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.VirtualTerminalAPI.VirtualTerminalDeactivate(context.Background(), code).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `VirtualTerminalAPI.VirtualTerminalDeactivate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `VirtualTerminalDeactivate`: VirtualTerminalDeactivateResponse
    fmt.Fprintf(os.Stdout, "Response from `VirtualTerminalAPI.VirtualTerminalDeactivate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**code** | **string** | Code of the Virtual Terminal | 

### Other Parameters

Other parameters are passed through a pointer to a apiVirtualTerminalDeactivateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**VirtualTerminalDeactivateResponse**](VirtualTerminalDeactivateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## VirtualTerminalDeleteSplitCode

> VirtualTerminalDeleteSplitCodeResponse VirtualTerminalDeleteSplitCode(ctx, code).VirtualTerminalDeleteSplitCode(virtualTerminalDeleteSplitCode).Execute()

Remove Split Code from Virtual Terminal



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
    code := "VT_MCK5292Z" // string | Code of the Virtual Terminal
    virtualTerminalDeleteSplitCode := *openapiclient.NewVirtualTerminalDeleteSplitCode("SplitCode_example") // VirtualTerminalDeleteSplitCode |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.VirtualTerminalAPI.VirtualTerminalDeleteSplitCode(context.Background(), code).VirtualTerminalDeleteSplitCode(virtualTerminalDeleteSplitCode).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `VirtualTerminalAPI.VirtualTerminalDeleteSplitCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `VirtualTerminalDeleteSplitCode`: VirtualTerminalDeleteSplitCodeResponse
    fmt.Fprintf(os.Stdout, "Response from `VirtualTerminalAPI.VirtualTerminalDeleteSplitCode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**code** | **string** | Code of the Virtual Terminal | 

### Other Parameters

Other parameters are passed through a pointer to a apiVirtualTerminalDeleteSplitCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **virtualTerminalDeleteSplitCode** | [**VirtualTerminalDeleteSplitCode**](VirtualTerminalDeleteSplitCode.md) |  | 

### Return type

[**VirtualTerminalDeleteSplitCodeResponse**](VirtualTerminalDeleteSplitCodeResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## VirtualTerminalDestinationAssign

> VirtualTerminalDestinationAssignResponse VirtualTerminalDestinationAssign(ctx, code).VirtualTerminalDestinationAssign(virtualTerminalDestinationAssign).Execute()

Assign Destination to Virtual Terminal



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
    code := "VT_MCK5292Z" // string | Code of the Virtual Terminal
    virtualTerminalDestinationAssign := *openapiclient.NewVirtualTerminalDestinationAssign([]openapiclient.VirtualTerminalCreateDestinationsInner{*openapiclient.NewVirtualTerminalCreateDestinationsInner()}) // VirtualTerminalDestinationAssign |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.VirtualTerminalAPI.VirtualTerminalDestinationAssign(context.Background(), code).VirtualTerminalDestinationAssign(virtualTerminalDestinationAssign).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `VirtualTerminalAPI.VirtualTerminalDestinationAssign``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `VirtualTerminalDestinationAssign`: VirtualTerminalDestinationAssignResponse
    fmt.Fprintf(os.Stdout, "Response from `VirtualTerminalAPI.VirtualTerminalDestinationAssign`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**code** | **string** | Code of the Virtual Terminal | 

### Other Parameters

Other parameters are passed through a pointer to a apiVirtualTerminalDestinationAssignRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **virtualTerminalDestinationAssign** | [**VirtualTerminalDestinationAssign**](VirtualTerminalDestinationAssign.md) |  | 

### Return type

[**VirtualTerminalDestinationAssignResponse**](VirtualTerminalDestinationAssignResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## VirtualTerminalDestinationUnassign

> VirtualTerminalDestinationUnassignResponse VirtualTerminalDestinationUnassign(ctx, code).VirtualTerminalDestinationUnassign(virtualTerminalDestinationUnassign).Execute()

Unassign Destination from Virtual Terminal



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
    code := "VT_MCK5292Z" // string | Code of the Virtual Terminal
    virtualTerminalDestinationUnassign := *openapiclient.NewVirtualTerminalDestinationUnassign([]string{"Targets_example"}) // VirtualTerminalDestinationUnassign |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.VirtualTerminalAPI.VirtualTerminalDestinationUnassign(context.Background(), code).VirtualTerminalDestinationUnassign(virtualTerminalDestinationUnassign).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `VirtualTerminalAPI.VirtualTerminalDestinationUnassign``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `VirtualTerminalDestinationUnassign`: VirtualTerminalDestinationUnassignResponse
    fmt.Fprintf(os.Stdout, "Response from `VirtualTerminalAPI.VirtualTerminalDestinationUnassign`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**code** | **string** | Code of the Virtual Terminal | 

### Other Parameters

Other parameters are passed through a pointer to a apiVirtualTerminalDestinationUnassignRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **virtualTerminalDestinationUnassign** | [**VirtualTerminalDestinationUnassign**](VirtualTerminalDestinationUnassign.md) |  | 

### Return type

[**VirtualTerminalDestinationUnassignResponse**](VirtualTerminalDestinationUnassignResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## VirtualTerminalFetch

> VirtualTerminalFetchResponse VirtualTerminalFetch(ctx, code).Execute()

Fetch Virtual Terminal



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
    code := "VT_MCK5292Z" // string | Code of the Virtual Terminal

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.VirtualTerminalAPI.VirtualTerminalFetch(context.Background(), code).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `VirtualTerminalAPI.VirtualTerminalFetch``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `VirtualTerminalFetch`: VirtualTerminalFetchResponse
    fmt.Fprintf(os.Stdout, "Response from `VirtualTerminalAPI.VirtualTerminalFetch`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**code** | **string** | Code of the Virtual Terminal | 

### Other Parameters

Other parameters are passed through a pointer to a apiVirtualTerminalFetchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**VirtualTerminalFetchResponse**](VirtualTerminalFetchResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## VirtualTerminalList

> VirtualTerminalListResponse VirtualTerminalList(ctx).PerPage(perPage).Page(page).Execute()

List Virtual Terminals



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
    perPage := int32(75) // int32 | The number of records to fetch per request (optional)
    page := int32(56) // int32 | The offset to retrieve data from (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.VirtualTerminalAPI.VirtualTerminalList(context.Background()).PerPage(perPage).Page(page).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `VirtualTerminalAPI.VirtualTerminalList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `VirtualTerminalList`: VirtualTerminalListResponse
    fmt.Fprintf(os.Stdout, "Response from `VirtualTerminalAPI.VirtualTerminalList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiVirtualTerminalListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **perPage** | **int32** | The number of records to fetch per request | 
 **page** | **int32** | The offset to retrieve data from | 

### Return type

[**VirtualTerminalListResponse**](VirtualTerminalListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## VirtualTerminalUpdate

> VirtualTerminalUpdateResponse VirtualTerminalUpdate(ctx, code).VirtualTerminalUpdate(virtualTerminalUpdate).Execute()

Update Virtual Terminal



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
    code := "VT_MCK5292Z" // string | Code of the Virtual Terminal
    virtualTerminalUpdate := *openapiclient.NewVirtualTerminalUpdate("Name_example") // VirtualTerminalUpdate |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.VirtualTerminalAPI.VirtualTerminalUpdate(context.Background(), code).VirtualTerminalUpdate(virtualTerminalUpdate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `VirtualTerminalAPI.VirtualTerminalUpdate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `VirtualTerminalUpdate`: VirtualTerminalUpdateResponse
    fmt.Fprintf(os.Stdout, "Response from `VirtualTerminalAPI.VirtualTerminalUpdate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**code** | **string** | Code of the Virtual Terminal | 

### Other Parameters

Other parameters are passed through a pointer to a apiVirtualTerminalUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **virtualTerminalUpdate** | [**VirtualTerminalUpdate**](VirtualTerminalUpdate.md) |  | 

### Return type

[**VirtualTerminalUpdateResponse**](VirtualTerminalUpdateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

