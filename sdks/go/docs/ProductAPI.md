# \ProductAPI

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ProductCreate**](ProductAPI.md#ProductCreate) | **Post** /product | Create Product
[**ProductDelete**](ProductAPI.md#ProductDelete) | **Delete** /product/{id} | Delete Product
[**ProductFetch**](ProductAPI.md#ProductFetch) | **Get** /product/{id} | Fetch Product
[**ProductList**](ProductAPI.md#ProductList) | **Get** /product | List Products
[**ProductUpdate**](ProductAPI.md#ProductUpdate) | **Put** /product/{id} | Update product



## ProductCreate

> ProductCreateResponse ProductCreate(ctx).ProductCreate(productCreate).Execute()

Create Product



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
    productCreate := *openapiclient.NewProductCreate("Name_example", "Description_example", int32(123), "Currency_example") // ProductCreate |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProductAPI.ProductCreate(context.Background()).ProductCreate(productCreate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProductAPI.ProductCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ProductCreate`: ProductCreateResponse
    fmt.Fprintf(os.Stdout, "Response from `ProductAPI.ProductCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiProductCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productCreate** | [**ProductCreate**](ProductCreate.md) |  | 

### Return type

[**ProductCreateResponse**](ProductCreateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ProductDelete

> ProductDeleteResponse ProductDelete(ctx, id).Execute()

Delete Product



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
    id := int32(2196244) // int32 | The unique identifier of the product

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProductAPI.ProductDelete(context.Background(), id).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProductAPI.ProductDelete``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ProductDelete`: ProductDeleteResponse
    fmt.Fprintf(os.Stdout, "Response from `ProductAPI.ProductDelete`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int32** | The unique identifier of the product | 

### Other Parameters

Other parameters are passed through a pointer to a apiProductDeleteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ProductDeleteResponse**](ProductDeleteResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ProductFetch

> ProductFetchResponse ProductFetch(ctx, id).Execute()

Fetch Product



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
    id := int32(2196244) // int32 | The unique identifier of the product

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProductAPI.ProductFetch(context.Background(), id).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProductAPI.ProductFetch``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ProductFetch`: ProductFetchResponse
    fmt.Fprintf(os.Stdout, "Response from `ProductAPI.ProductFetch`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int32** | The unique identifier of the product | 

### Other Parameters

Other parameters are passed through a pointer to a apiProductFetchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ProductFetchResponse**](ProductFetchResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ProductList

> ProductListsResponse ProductList(ctx).PerPage(perPage).Page(page).Active(active).From(from).To(to).Execute()

List Products



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
    active := true // bool | The state of the product (optional)
    from := time.Now() // time.Time | The start date (optional)
    to := time.Now() // time.Time | The end date (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProductAPI.ProductList(context.Background()).PerPage(perPage).Page(page).Active(active).From(from).To(to).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProductAPI.ProductList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ProductList`: ProductListsResponse
    fmt.Fprintf(os.Stdout, "Response from `ProductAPI.ProductList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiProductListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **perPage** | **int32** | Number of records to fetch per page | 
 **page** | **int32** | The section to retrieve | 
 **active** | **bool** | The state of the product | 
 **from** | **time.Time** | The start date | 
 **to** | **time.Time** | The end date | 

### Return type

[**ProductListsResponse**](ProductListsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ProductUpdate

> ProductUpdateResponse ProductUpdate(ctx, id).ProductUpdate(productUpdate).Execute()

Update product



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
    id := int32(2196244) // int32 | The unique identifier of the product
    productUpdate := *openapiclient.NewProductUpdate() // ProductUpdate |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProductAPI.ProductUpdate(context.Background(), id).ProductUpdate(productUpdate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProductAPI.ProductUpdate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ProductUpdate`: ProductUpdateResponse
    fmt.Fprintf(os.Stdout, "Response from `ProductAPI.ProductUpdate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int32** | The unique identifier of the product | 

### Other Parameters

Other parameters are passed through a pointer to a apiProductUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **productUpdate** | [**ProductUpdate**](ProductUpdate.md) |  | 

### Return type

[**ProductUpdateResponse**](ProductUpdateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

