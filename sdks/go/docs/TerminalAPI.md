# \TerminalAPI

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**TerminalCommission**](TerminalAPI.md#TerminalCommission) | **Post** /terminal/commission_device | Commission Terminal
[**TerminalDecommission**](TerminalAPI.md#TerminalDecommission) | **Post** /terminal/decommission_device | Decommission Terminal
[**TerminalFetch**](TerminalAPI.md#TerminalFetch) | **Get** /terminal/{terminal_id} | Fetch Terminal
[**TerminalFetchEventStatus**](TerminalAPI.md#TerminalFetchEventStatus) | **Get** /terminal/{terminal_id}/event/{event_id} | Fetch Event Status
[**TerminalFetchTerminalStatus**](TerminalAPI.md#TerminalFetchTerminalStatus) | **Get** /terminal/{terminal_id}/presence | Fetch Terminal Status
[**TerminalList**](TerminalAPI.md#TerminalList) | **Get** /terminal | List Terminals
[**TerminalSendEvent**](TerminalAPI.md#TerminalSendEvent) | **Post** /terminal/{id}/event | Send Event
[**TerminalUpdate**](TerminalAPI.md#TerminalUpdate) | **Put** /terminal/{terminal_id} | Update Terminal



## TerminalCommission

> TerminalCommissionDeviceResponse TerminalCommission(ctx).TerminalActivationToggle(terminalActivationToggle).Execute()

Commission Terminal



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
    terminalActivationToggle := *openapiclient.NewTerminalActivationToggle("SerialNumber_example") // TerminalActivationToggle |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TerminalAPI.TerminalCommission(context.Background()).TerminalActivationToggle(terminalActivationToggle).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TerminalAPI.TerminalCommission``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TerminalCommission`: TerminalCommissionDeviceResponse
    fmt.Fprintf(os.Stdout, "Response from `TerminalAPI.TerminalCommission`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTerminalCommissionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **terminalActivationToggle** | [**TerminalActivationToggle**](TerminalActivationToggle.md) |  | 

### Return type

[**TerminalCommissionDeviceResponse**](TerminalCommissionDeviceResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TerminalDecommission

> TerminalDecommissionDeviceResponse TerminalDecommission(ctx).TerminalActivationToggle(terminalActivationToggle).Execute()

Decommission Terminal



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
    terminalActivationToggle := *openapiclient.NewTerminalActivationToggle("SerialNumber_example") // TerminalActivationToggle |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TerminalAPI.TerminalDecommission(context.Background()).TerminalActivationToggle(terminalActivationToggle).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TerminalAPI.TerminalDecommission``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TerminalDecommission`: TerminalDecommissionDeviceResponse
    fmt.Fprintf(os.Stdout, "Response from `TerminalAPI.TerminalDecommission`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTerminalDecommissionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **terminalActivationToggle** | [**TerminalActivationToggle**](TerminalActivationToggle.md) |  | 

### Return type

[**TerminalDecommissionDeviceResponse**](TerminalDecommissionDeviceResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TerminalFetch

> TerminalGetResponse TerminalFetch(ctx, terminalId).Execute()

Fetch Terminal



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
    terminalId := "Z0R4orOU" // string | The ID of the Terminal the event should be sent to.

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TerminalAPI.TerminalFetch(context.Background(), terminalId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TerminalAPI.TerminalFetch``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TerminalFetch`: TerminalGetResponse
    fmt.Fprintf(os.Stdout, "Response from `TerminalAPI.TerminalFetch`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminalId** | **string** | The ID of the Terminal the event should be sent to. | 

### Other Parameters

Other parameters are passed through a pointer to a apiTerminalFetchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**TerminalGetResponse**](TerminalGetResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TerminalFetchEventStatus

> Response TerminalFetchEventStatus(ctx, terminalId, eventId).Execute()

Fetch Event Status



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
    terminalId := "Z0R4orOU" // string | The ID of the Terminal the event should be sent to.
    eventId := "616d721e8c5cd40a0cdd54a6" // string | The ID of the event that was sent to the Terminal

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TerminalAPI.TerminalFetchEventStatus(context.Background(), terminalId, eventId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TerminalAPI.TerminalFetchEventStatus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TerminalFetchEventStatus`: Response
    fmt.Fprintf(os.Stdout, "Response from `TerminalAPI.TerminalFetchEventStatus`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminalId** | **string** | The ID of the Terminal the event should be sent to. | 
**eventId** | **string** | The ID of the event that was sent to the Terminal | 

### Other Parameters

Other parameters are passed through a pointer to a apiTerminalFetchEventStatusRequest struct via the builder pattern


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


## TerminalFetchTerminalStatus

> TerminalGetStatusResponse TerminalFetchTerminalStatus(ctx, terminalId).Execute()

Fetch Terminal Status



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
    terminalId := "Z0R4orOU" // string | The ID of the Terminal the event should be sent to.

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TerminalAPI.TerminalFetchTerminalStatus(context.Background(), terminalId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TerminalAPI.TerminalFetchTerminalStatus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TerminalFetchTerminalStatus`: TerminalGetStatusResponse
    fmt.Fprintf(os.Stdout, "Response from `TerminalAPI.TerminalFetchTerminalStatus`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminalId** | **string** | The ID of the Terminal the event should be sent to. | 

### Other Parameters

Other parameters are passed through a pointer to a apiTerminalFetchTerminalStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**TerminalGetStatusResponse**](TerminalGetStatusResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TerminalList

> TerminalListsResponse TerminalList(ctx).Next(next).Previous(previous).PerPage(perPage).Execute()

List Terminals



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
    next := "next_example" // string | A cursor that indicates your place in the list. It can be used to fetch the next page of the list (optional)
    previous := "previous_example" // string | A cursor that indicates your place in the list. It should be used to fetch the previous page of the list after an intial next request (optional)
    perPage := int32(56) // int32 | Specify how many records you want to retrieve per page (optional) (default to 50)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TerminalAPI.TerminalList(context.Background()).Next(next).Previous(previous).PerPage(perPage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TerminalAPI.TerminalList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TerminalList`: TerminalListsResponse
    fmt.Fprintf(os.Stdout, "Response from `TerminalAPI.TerminalList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTerminalListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **next** | **string** | A cursor that indicates your place in the list. It can be used to fetch the next page of the list | 
 **previous** | **string** | A cursor that indicates your place in the list. It should be used to fetch the previous page of the list after an intial next request | 
 **perPage** | **int32** | Specify how many records you want to retrieve per page | [default to 50]

### Return type

[**TerminalListsResponse**](TerminalListsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TerminalSendEvent

> Response TerminalSendEvent(ctx, id).TerminalSendEvent(terminalSendEvent).Execute()

Send Event



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
    id := "Z0R4orOU" // string | The ID of the Terminal the event should be sent to.
    terminalSendEvent := *openapiclient.NewTerminalSendEvent() // TerminalSendEvent |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TerminalAPI.TerminalSendEvent(context.Background(), id).TerminalSendEvent(terminalSendEvent).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TerminalAPI.TerminalSendEvent``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TerminalSendEvent`: Response
    fmt.Fprintf(os.Stdout, "Response from `TerminalAPI.TerminalSendEvent`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the Terminal the event should be sent to. | 

### Other Parameters

Other parameters are passed through a pointer to a apiTerminalSendEventRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **terminalSendEvent** | [**TerminalSendEvent**](TerminalSendEvent.md) |  | 

### Return type

[**Response**](Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TerminalUpdate

> TerminalUpdateResponse TerminalUpdate(ctx, terminalId).TerminalUpate(terminalUpate).Execute()

Update Terminal



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
    terminalId := "Z0R4orOU" // string | The ID of the Terminal the event should be sent to.
    terminalUpate := *openapiclient.NewTerminalUpate() // TerminalUpate |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TerminalAPI.TerminalUpdate(context.Background(), terminalId).TerminalUpate(terminalUpate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TerminalAPI.TerminalUpdate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TerminalUpdate`: TerminalUpdateResponse
    fmt.Fprintf(os.Stdout, "Response from `TerminalAPI.TerminalUpdate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminalId** | **string** | The ID of the Terminal the event should be sent to. | 

### Other Parameters

Other parameters are passed through a pointer to a apiTerminalUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **terminalUpate** | [**TerminalUpate**](TerminalUpate.md) |  | 

### Return type

[**TerminalUpdateResponse**](TerminalUpdateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

