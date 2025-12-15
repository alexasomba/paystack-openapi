# \PageAPI

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**PageAddProducts**](PageAPI.md#PageAddProducts) | **Post** /page/{id}/product | Add Products
[**PageCheckSlugAvailability**](PageAPI.md#PageCheckSlugAvailability) | **Get** /page/check_slug_availability/{slug} | Check Slug Availability
[**PageCreate**](PageAPI.md#PageCreate) | **Post** /page | Create Page
[**PageFetch**](PageAPI.md#PageFetch) | **Get** /page/{id} | Fetch Page
[**PageList**](PageAPI.md#PageList) | **Get** /page | List Pages
[**PageUpdate**](PageAPI.md#PageUpdate) | **Put** /page/{id} | Update Page



## PageAddProducts

> PageAddProductsResponse PageAddProducts(ctx, id).PageProduct(pageProduct).Execute()

Add Products



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
    id := "id_example" // string | 
    pageProduct := *openapiclient.NewPageProduct([]int32{int32(123)}) // PageProduct |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.PageAPI.PageAddProducts(context.Background(), id).PageProduct(pageProduct).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `PageAPI.PageAddProducts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PageAddProducts`: PageAddProductsResponse
    fmt.Fprintf(os.Stdout, "Response from `PageAPI.PageAddProducts`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPageAddProductsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **pageProduct** | [**PageProduct**](PageProduct.md) |  | 

### Return type

[**PageAddProductsResponse**](PageAddProductsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PageCheckSlugAvailability

> PageCheckSlugAvailabilityResponse PageCheckSlugAvailability(ctx, slug).Execute()

Check Slug Availability



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
    slug := "risky-burger" // string | The custom slug to check

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.PageAPI.PageCheckSlugAvailability(context.Background(), slug).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `PageAPI.PageCheckSlugAvailability``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PageCheckSlugAvailability`: PageCheckSlugAvailabilityResponse
    fmt.Fprintf(os.Stdout, "Response from `PageAPI.PageCheckSlugAvailability`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**slug** | **string** | The custom slug to check | 

### Other Parameters

Other parameters are passed through a pointer to a apiPageCheckSlugAvailabilityRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**PageCheckSlugAvailabilityResponse**](PageCheckSlugAvailabilityResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PageCreate

> PageCreateResponse PageCreate(ctx).PageCreate(pageCreate).Execute()

Create Page



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
    pageCreate := *openapiclient.NewPageCreate("Name_example") // PageCreate |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.PageAPI.PageCreate(context.Background()).PageCreate(pageCreate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `PageAPI.PageCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PageCreate`: PageCreateResponse
    fmt.Fprintf(os.Stdout, "Response from `PageAPI.PageCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPageCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageCreate** | [**PageCreate**](PageCreate.md) |  | 

### Return type

[**PageCreateResponse**](PageCreateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PageFetch

> PageFetchResponse PageFetch(ctx, id).Execute()

Fetch Page



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
    id := int32(1891222) // int32 | The unique identifier of a payment page

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.PageAPI.PageFetch(context.Background(), id).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `PageAPI.PageFetch``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PageFetch`: PageFetchResponse
    fmt.Fprintf(os.Stdout, "Response from `PageAPI.PageFetch`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int32** | The unique identifier of a payment page | 

### Other Parameters

Other parameters are passed through a pointer to a apiPageFetchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**PageFetchResponse**](PageFetchResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PageList

> PageListResponse PageList(ctx).PerPage(perPage).Page(page).From(from).To(to).Execute()

List Pages



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
    resp, r, err := apiClient.PageAPI.PageList(context.Background()).PerPage(perPage).Page(page).From(from).To(to).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `PageAPI.PageList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PageList`: PageListResponse
    fmt.Fprintf(os.Stdout, "Response from `PageAPI.PageList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPageListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **perPage** | **int32** | Number of records to fetch per page | [default to 50]
 **page** | **int32** | The section to retrieve | 
 **from** | **time.Time** | The start date | 
 **to** | **time.Time** | The end date | 

### Return type

[**PageListResponse**](PageListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PageUpdate

> PageUpdateResponse PageUpdate(ctx, id).PageUpdate(pageUpdate).Execute()

Update Page



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
    id := int32(1891222) // int32 | The unique identifier of a payment page
    pageUpdate := *openapiclient.NewPageUpdate() // PageUpdate |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.PageAPI.PageUpdate(context.Background(), id).PageUpdate(pageUpdate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `PageAPI.PageUpdate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PageUpdate`: PageUpdateResponse
    fmt.Fprintf(os.Stdout, "Response from `PageAPI.PageUpdate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int32** | The unique identifier of a payment page | 

### Other Parameters

Other parameters are passed through a pointer to a apiPageUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **pageUpdate** | [**PageUpdate**](PageUpdate.md) |  | 

### Return type

[**PageUpdateResponse**](PageUpdateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

