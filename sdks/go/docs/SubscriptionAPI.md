# \SubscriptionAPI

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**SubscriptionCreate**](SubscriptionAPI.md#SubscriptionCreate) | **Post** /subscription | Create Subscription
[**SubscriptionDisable**](SubscriptionAPI.md#SubscriptionDisable) | **Post** /subscription/disable | Disable Subscription
[**SubscriptionEnable**](SubscriptionAPI.md#SubscriptionEnable) | **Post** /subscription/enable | Enable Subscription
[**SubscriptionFetch**](SubscriptionAPI.md#SubscriptionFetch) | **Get** /subscription/{code} | Fetch Subscription
[**SubscriptionList**](SubscriptionAPI.md#SubscriptionList) | **Get** /subscription | List Subscriptions
[**SubscriptionManageEmail**](SubscriptionAPI.md#SubscriptionManageEmail) | **Post** /subscription/{code}/manage/email | Send Update Subscription Link
[**SubscriptionManageLink**](SubscriptionAPI.md#SubscriptionManageLink) | **Get** /subscription/{code}/manage/link | Generate Update Subscription Link



## SubscriptionCreate

> SubscriptionCreateResponse SubscriptionCreate(ctx).SubscriptionCreate(subscriptionCreate).Execute()

Create Subscription



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
    subscriptionCreate := *openapiclient.NewSubscriptionCreate("Customer_example", "Plan_example") // SubscriptionCreate |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SubscriptionAPI.SubscriptionCreate(context.Background()).SubscriptionCreate(subscriptionCreate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SubscriptionAPI.SubscriptionCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SubscriptionCreate`: SubscriptionCreateResponse
    fmt.Fprintf(os.Stdout, "Response from `SubscriptionAPI.SubscriptionCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSubscriptionCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionCreate** | [**SubscriptionCreate**](SubscriptionCreate.md) |  | 

### Return type

[**SubscriptionCreateResponse**](SubscriptionCreateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SubscriptionDisable

> SubscriptionDisableResponse SubscriptionDisable(ctx).SubscriptionToggle(subscriptionToggle).Execute()

Disable Subscription



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
    subscriptionToggle := *openapiclient.NewSubscriptionToggle("Code_example", "Token_example") // SubscriptionToggle |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SubscriptionAPI.SubscriptionDisable(context.Background()).SubscriptionToggle(subscriptionToggle).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SubscriptionAPI.SubscriptionDisable``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SubscriptionDisable`: SubscriptionDisableResponse
    fmt.Fprintf(os.Stdout, "Response from `SubscriptionAPI.SubscriptionDisable`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSubscriptionDisableRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionToggle** | [**SubscriptionToggle**](SubscriptionToggle.md) |  | 

### Return type

[**SubscriptionDisableResponse**](SubscriptionDisableResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SubscriptionEnable

> Response SubscriptionEnable(ctx).SubscriptionToggle(subscriptionToggle).Execute()

Enable Subscription



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
    subscriptionToggle := *openapiclient.NewSubscriptionToggle("Code_example", "Token_example") // SubscriptionToggle |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SubscriptionAPI.SubscriptionEnable(context.Background()).SubscriptionToggle(subscriptionToggle).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SubscriptionAPI.SubscriptionEnable``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SubscriptionEnable`: Response
    fmt.Fprintf(os.Stdout, "Response from `SubscriptionAPI.SubscriptionEnable`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSubscriptionEnableRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionToggle** | [**SubscriptionToggle**](SubscriptionToggle.md) |  | 

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


## SubscriptionFetch

> SubscriptionFetchResponse SubscriptionFetch(ctx, code).Execute()

Fetch Subscription



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
    code := "SUB_5co81xgmwg78x3d" // string | The subscription code for the subscription you want to fetch

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SubscriptionAPI.SubscriptionFetch(context.Background(), code).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SubscriptionAPI.SubscriptionFetch``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SubscriptionFetch`: SubscriptionFetchResponse
    fmt.Fprintf(os.Stdout, "Response from `SubscriptionAPI.SubscriptionFetch`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**code** | **string** | The subscription code for the subscription you want to fetch | 

### Other Parameters

Other parameters are passed through a pointer to a apiSubscriptionFetchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**SubscriptionFetchResponse**](SubscriptionFetchResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SubscriptionList

> SubscriptionListResponse SubscriptionList(ctx).PerPage(perPage).Page(page).Plan(plan).Customer(customer).From(from).To(to).Execute()

List Subscriptions



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
    plan := int32(2697466) // int32 | Plan ID (optional)
    customer := "customer_example" // string | Customer ID (optional)
    from := time.Now() // time.Time | The start date (optional)
    to := time.Now() // time.Time | The end date (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SubscriptionAPI.SubscriptionList(context.Background()).PerPage(perPage).Page(page).Plan(plan).Customer(customer).From(from).To(to).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SubscriptionAPI.SubscriptionList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SubscriptionList`: SubscriptionListResponse
    fmt.Fprintf(os.Stdout, "Response from `SubscriptionAPI.SubscriptionList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSubscriptionListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **perPage** | **int32** | Number of records to fetch per page | 
 **page** | **int32** | The section to retrieve | 
 **plan** | **int32** | Plan ID | 
 **customer** | **string** | Customer ID | 
 **from** | **time.Time** | The start date | 
 **to** | **time.Time** | The end date | 

### Return type

[**SubscriptionListResponse**](SubscriptionListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SubscriptionManageEmail

> Response SubscriptionManageEmail(ctx, code).Execute()

Send Update Subscription Link



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
    code := "qlgwhpyq1ts9nsw" // string | Subscription code

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SubscriptionAPI.SubscriptionManageEmail(context.Background(), code).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SubscriptionAPI.SubscriptionManageEmail``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SubscriptionManageEmail`: Response
    fmt.Fprintf(os.Stdout, "Response from `SubscriptionAPI.SubscriptionManageEmail`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**code** | **string** | Subscription code | 

### Other Parameters

Other parameters are passed through a pointer to a apiSubscriptionManageEmailRequest struct via the builder pattern


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


## SubscriptionManageLink

> Response SubscriptionManageLink(ctx, code).Execute()

Generate Update Subscription Link



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
    code := "qlgwhpyq1ts9nsw" // string | Subscription code

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SubscriptionAPI.SubscriptionManageLink(context.Background(), code).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SubscriptionAPI.SubscriptionManageLink``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SubscriptionManageLink`: Response
    fmt.Fprintf(os.Stdout, "Response from `SubscriptionAPI.SubscriptionManageLink`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**code** | **string** | Subscription code | 

### Other Parameters

Other parameters are passed through a pointer to a apiSubscriptionManageLinkRequest struct via the builder pattern


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

