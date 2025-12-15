# \PlanAPI

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**PlanCreate**](PlanAPI.md#PlanCreate) | **Post** /plan | Create Plan
[**PlanFetch**](PlanAPI.md#PlanFetch) | **Get** /plan/{code} | Fetch Plan
[**PlanList**](PlanAPI.md#PlanList) | **Get** /plan | List Plans
[**PlanUpdate**](PlanAPI.md#PlanUpdate) | **Put** /plan/{code} | Update Plan



## PlanCreate

> PlanCreateResponse PlanCreate(ctx).PlanCreate(planCreate).Execute()

Create Plan



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
    planCreate := *openapiclient.NewPlanCreate("Name_example", int32(123), "Interval_example") // PlanCreate |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.PlanAPI.PlanCreate(context.Background()).PlanCreate(planCreate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `PlanAPI.PlanCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PlanCreate`: PlanCreateResponse
    fmt.Fprintf(os.Stdout, "Response from `PlanAPI.PlanCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPlanCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **planCreate** | [**PlanCreate**](PlanCreate.md) |  | 

### Return type

[**PlanCreateResponse**](PlanCreateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PlanFetch

> PlanFetchResponse PlanFetch(ctx, code).Execute()

Fetch Plan



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
    code := "PLN_gx2wn530m0i3w3m" // string | The plan code you want to fetch

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.PlanAPI.PlanFetch(context.Background(), code).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `PlanAPI.PlanFetch``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PlanFetch`: PlanFetchResponse
    fmt.Fprintf(os.Stdout, "Response from `PlanAPI.PlanFetch`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**code** | **string** | The plan code you want to fetch | 

### Other Parameters

Other parameters are passed through a pointer to a apiPlanFetchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**PlanFetchResponse**](PlanFetchResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PlanList

> PlanListResponse PlanList(ctx).PerPage(perPage).Page(page).Interval(interval).Amount(amount).From(from).To(to).Execute()

List Plans



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
    interval := "interval_example" // string | Specify interval of the plan (optional)
    amount := int32(56) // int32 | The amount on the plans to retrieve (optional)
    from := time.Now() // time.Time | The start date (optional)
    to := time.Now() // time.Time | The end date (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.PlanAPI.PlanList(context.Background()).PerPage(perPage).Page(page).Interval(interval).Amount(amount).From(from).To(to).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `PlanAPI.PlanList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PlanList`: PlanListResponse
    fmt.Fprintf(os.Stdout, "Response from `PlanAPI.PlanList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPlanListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **perPage** | **int32** | Number of records to fetch per page | 
 **page** | **int32** | The section to retrieve | 
 **interval** | **string** | Specify interval of the plan | 
 **amount** | **int32** | The amount on the plans to retrieve | 
 **from** | **time.Time** | The start date | 
 **to** | **time.Time** | The end date | 

### Return type

[**PlanListResponse**](PlanListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PlanUpdate

> PlanUpdateResponse PlanUpdate(ctx, code).Body(body).Execute()

Update Plan



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
    code := "PLN_gx2wn530m0i3w3m" // string | The plan code you want to fetch
    body := PlanCode(987) // PlanCode |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.PlanAPI.PlanUpdate(context.Background(), code).Body(body).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `PlanAPI.PlanUpdate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PlanUpdate`: PlanUpdateResponse
    fmt.Fprintf(os.Stdout, "Response from `PlanAPI.PlanUpdate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**code** | **string** | The plan code you want to fetch | 

### Other Parameters

Other parameters are passed through a pointer to a apiPlanUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **body** | **PlanCode** |  | 

### Return type

[**PlanUpdateResponse**](PlanUpdateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

