# \OrderAPI

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**OrderCreate**](OrderAPI.md#OrderCreate) | **Post** /order | Create Order
[**OrderFetch**](OrderAPI.md#OrderFetch) | **Get** /order/{id} | Fetch Order
[**OrderList**](OrderAPI.md#OrderList) | **Get** /order | List Orders
[**OrderProduct**](OrderAPI.md#OrderProduct) | **Get** /order/product/{id} | Fetch Product Orders
[**OrderValidate**](OrderAPI.md#OrderValidate) | **Get** /order/{code}/validate | Validate Order



## OrderCreate

> OrderCreateResponse OrderCreate(ctx).OrderCreate(orderCreate).Execute()

Create Order



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
    orderCreate := *openapiclient.NewOrderCreate("Email_example", "FirstName_example", "LastName_example", "Phone_example", "Currency_example", []openapiclient.OrderItems{*openapiclient.NewOrderItems(int32(123), "Type_example", int32(123), int32(123))}, *openapiclient.NewOrderShipping("StreetLine_example", "City_example", "State_example", "Country_example", int32(123))) // OrderCreate |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OrderAPI.OrderCreate(context.Background()).OrderCreate(orderCreate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OrderAPI.OrderCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `OrderCreate`: OrderCreateResponse
    fmt.Fprintf(os.Stdout, "Response from `OrderAPI.OrderCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiOrderCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderCreate** | [**OrderCreate**](OrderCreate.md) |  | 

### Return type

[**OrderCreateResponse**](OrderCreateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## OrderFetch

> OrderFetchResponse OrderFetch(ctx, id).Execute()

Fetch Order



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
    id := int32(1559046) // int32 | The unique identifier of the order

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OrderAPI.OrderFetch(context.Background(), id).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OrderAPI.OrderFetch``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `OrderFetch`: OrderFetchResponse
    fmt.Fprintf(os.Stdout, "Response from `OrderAPI.OrderFetch`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int32** | The unique identifier of the order | 

### Other Parameters

Other parameters are passed through a pointer to a apiOrderFetchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**OrderFetchResponse**](OrderFetchResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## OrderList

> OrderListResponse OrderList(ctx).PerPage(perPage).Page(page).From(from).To(to).Execute()

List Orders



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
    from := time.Now() // time.Time | The start date (optional)
    to := time.Now() // time.Time | The end date (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OrderAPI.OrderList(context.Background()).PerPage(perPage).Page(page).From(from).To(to).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OrderAPI.OrderList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `OrderList`: OrderListResponse
    fmt.Fprintf(os.Stdout, "Response from `OrderAPI.OrderList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiOrderListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **perPage** | **int32** | Number of records to fetch per page | 
 **page** | **int32** | The section to retrieve | 
 **from** | **time.Time** | The start date | 
 **to** | **time.Time** | The end date | 

### Return type

[**OrderListResponse**](OrderListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## OrderProduct

> OrderFetchProductResponse OrderProduct(ctx, id).Execute()

Fetch Product Orders



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
    id := int32(1559046) // int32 | The unique identifier of the order

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OrderAPI.OrderProduct(context.Background(), id).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OrderAPI.OrderProduct``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `OrderProduct`: OrderFetchProductResponse
    fmt.Fprintf(os.Stdout, "Response from `OrderAPI.OrderProduct`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int32** | The unique identifier of the order | 

### Other Parameters

Other parameters are passed through a pointer to a apiOrderProductRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**OrderFetchProductResponse**](OrderFetchProductResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## OrderValidate

> OrderValidateResponse OrderValidate(ctx, code).Execute()

Validate Order



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
    code := "ORD_6z0lqwpmxrm7dsp" // string | The unique code of a previously created order

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OrderAPI.OrderValidate(context.Background(), code).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OrderAPI.OrderValidate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `OrderValidate`: OrderValidateResponse
    fmt.Fprintf(os.Stdout, "Response from `OrderAPI.OrderValidate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**code** | **string** | The unique code of a previously created order | 

### Other Parameters

Other parameters are passed through a pointer to a apiOrderValidateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**OrderValidateResponse**](OrderValidateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

