# \StorefrontAPI

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**StorefrontAddProducts**](StorefrontAPI.md#StorefrontAddProducts) | **Post** /storefront/{id}/product | Add Products to Storefront
[**StorefrontCreate**](StorefrontAPI.md#StorefrontCreate) | **Post** /storefront | Create Storefront
[**StorefrontDelete**](StorefrontAPI.md#StorefrontDelete) | **Delete** /storefront/{id} | Delete Storefront
[**StorefrontDuplicate**](StorefrontAPI.md#StorefrontDuplicate) | **Post** /storefront/{id}/duplicate | Duplicate Storefront
[**StorefrontFetch**](StorefrontAPI.md#StorefrontFetch) | **Get** /storefront/{id} | Fetch Storefront
[**StorefrontFetchOrders**](StorefrontAPI.md#StorefrontFetchOrders) | **Get** /storefront/{id}/order | Fetch Storefront Orders
[**StorefrontList**](StorefrontAPI.md#StorefrontList) | **Get** /storefront | List Storefronts
[**StorefrontListProducts**](StorefrontAPI.md#StorefrontListProducts) | **Get** /storefront/{id}/product | List Storefront Products
[**StorefrontPublish**](StorefrontAPI.md#StorefrontPublish) | **Post** /storefront/{id}/publish | Publish Storefront
[**StorefrontUpdate**](StorefrontAPI.md#StorefrontUpdate) | **Put** /storefront/{id} | Update Storefront
[**StorefrontVerifySlug**](StorefrontAPI.md#StorefrontVerifySlug) | **Get** /storefront/verify/{slug} | Verify Storefront Slug



## StorefrontAddProducts

> Response StorefrontAddProducts(ctx, id).StorefrontAddProducts(storefrontAddProducts).Execute()

Add Products to Storefront



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
    id := int32(1559046) // int32 | The unique identifier of the Storefront
    storefrontAddProducts := *openapiclient.NewStorefrontAddProducts([]int32{int32(123)}) // StorefrontAddProducts |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.StorefrontAPI.StorefrontAddProducts(context.Background(), id).StorefrontAddProducts(storefrontAddProducts).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `StorefrontAPI.StorefrontAddProducts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StorefrontAddProducts`: Response
    fmt.Fprintf(os.Stdout, "Response from `StorefrontAPI.StorefrontAddProducts`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int32** | The unique identifier of the Storefront | 

### Other Parameters

Other parameters are passed through a pointer to a apiStorefrontAddProductsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **storefrontAddProducts** | [**StorefrontAddProducts**](StorefrontAddProducts.md) |  | 

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


## StorefrontCreate

> StorefrontCreateResponse StorefrontCreate(ctx).StorefrontCreate(storefrontCreate).Execute()

Create Storefront



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
    storefrontCreate := *openapiclient.NewStorefrontCreate("Name_example", "Slug_example", "Currency_example") // StorefrontCreate |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.StorefrontAPI.StorefrontCreate(context.Background()).StorefrontCreate(storefrontCreate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `StorefrontAPI.StorefrontCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StorefrontCreate`: StorefrontCreateResponse
    fmt.Fprintf(os.Stdout, "Response from `StorefrontAPI.StorefrontCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiStorefrontCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefrontCreate** | [**StorefrontCreate**](StorefrontCreate.md) |  | 

### Return type

[**StorefrontCreateResponse**](StorefrontCreateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## StorefrontDelete

> StorefrontDeleteResponse StorefrontDelete(ctx, id).Execute()

Delete Storefront



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
    id := int32(1559046) // int32 | The unique identifier of the Storefront

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.StorefrontAPI.StorefrontDelete(context.Background(), id).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `StorefrontAPI.StorefrontDelete``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StorefrontDelete`: StorefrontDeleteResponse
    fmt.Fprintf(os.Stdout, "Response from `StorefrontAPI.StorefrontDelete`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int32** | The unique identifier of the Storefront | 

### Other Parameters

Other parameters are passed through a pointer to a apiStorefrontDeleteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**StorefrontDeleteResponse**](StorefrontDeleteResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## StorefrontDuplicate

> Response StorefrontDuplicate(ctx, id).Execute()

Duplicate Storefront



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
    id := int32(1559046) // int32 | The unique identifier of the Storefront

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.StorefrontAPI.StorefrontDuplicate(context.Background(), id).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `StorefrontAPI.StorefrontDuplicate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StorefrontDuplicate`: Response
    fmt.Fprintf(os.Stdout, "Response from `StorefrontAPI.StorefrontDuplicate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int32** | The unique identifier of the Storefront | 

### Other Parameters

Other parameters are passed through a pointer to a apiStorefrontDuplicateRequest struct via the builder pattern


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


## StorefrontFetch

> StorefrontFetchResponse StorefrontFetch(ctx, id).Execute()

Fetch Storefront



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
    id := int32(1559046) // int32 | The unique identifier of the Storefront

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.StorefrontAPI.StorefrontFetch(context.Background(), id).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `StorefrontAPI.StorefrontFetch``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StorefrontFetch`: StorefrontFetchResponse
    fmt.Fprintf(os.Stdout, "Response from `StorefrontAPI.StorefrontFetch`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int32** | The unique identifier of the Storefront | 

### Other Parameters

Other parameters are passed through a pointer to a apiStorefrontFetchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**StorefrontFetchResponse**](StorefrontFetchResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## StorefrontFetchOrders

> Response StorefrontFetchOrders(ctx, id).Execute()

Fetch Storefront Orders



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
    id := int32(1559046) // int32 | The unique identifier of the Storefront

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.StorefrontAPI.StorefrontFetchOrders(context.Background(), id).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `StorefrontAPI.StorefrontFetchOrders``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StorefrontFetchOrders`: Response
    fmt.Fprintf(os.Stdout, "Response from `StorefrontAPI.StorefrontFetchOrders`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int32** | The unique identifier of the Storefront | 

### Other Parameters

Other parameters are passed through a pointer to a apiStorefrontFetchOrdersRequest struct via the builder pattern


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


## StorefrontList

> StorefrontListResponse StorefrontList(ctx).PerPage(perPage).Page(page).Status(status).Execute()

List Storefronts



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
    perPage := int32(56) // int32 | Number of records to fetch per request (optional) (default to 50)
    page := int32(56) // int32 | The offset to retrieve data from (optional) (default to 1)
    status := "active" // string |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.StorefrontAPI.StorefrontList(context.Background()).PerPage(perPage).Page(page).Status(status).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `StorefrontAPI.StorefrontList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StorefrontList`: StorefrontListResponse
    fmt.Fprintf(os.Stdout, "Response from `StorefrontAPI.StorefrontList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiStorefrontListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **perPage** | **int32** | Number of records to fetch per request | [default to 50]
 **page** | **int32** | The offset to retrieve data from | [default to 1]
 **status** | **string** |  | 

### Return type

[**StorefrontListResponse**](StorefrontListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## StorefrontListProducts

> Response StorefrontListProducts(ctx, id).Execute()

List Storefront Products



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
    id := int32(1559046) // int32 | The unique identifier of the Storefront

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.StorefrontAPI.StorefrontListProducts(context.Background(), id).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `StorefrontAPI.StorefrontListProducts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StorefrontListProducts`: Response
    fmt.Fprintf(os.Stdout, "Response from `StorefrontAPI.StorefrontListProducts`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int32** | The unique identifier of the Storefront | 

### Other Parameters

Other parameters are passed through a pointer to a apiStorefrontListProductsRequest struct via the builder pattern


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


## StorefrontPublish

> Response StorefrontPublish(ctx, id).Execute()

Publish Storefront



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
    id := int32(1559046) // int32 | The unique identifier of the Storefront

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.StorefrontAPI.StorefrontPublish(context.Background(), id).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `StorefrontAPI.StorefrontPublish``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StorefrontPublish`: Response
    fmt.Fprintf(os.Stdout, "Response from `StorefrontAPI.StorefrontPublish`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int32** | The unique identifier of the Storefront | 

### Other Parameters

Other parameters are passed through a pointer to a apiStorefrontPublishRequest struct via the builder pattern


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


## StorefrontUpdate

> StorefrontUpdateResponse StorefrontUpdate(ctx, id).StorefrontUpdate(storefrontUpdate).Execute()

Update Storefront



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
    id := int32(1559046) // int32 | The unique identifier of the Storefront
    storefrontUpdate := *openapiclient.NewStorefrontUpdate() // StorefrontUpdate |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.StorefrontAPI.StorefrontUpdate(context.Background(), id).StorefrontUpdate(storefrontUpdate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `StorefrontAPI.StorefrontUpdate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StorefrontUpdate`: StorefrontUpdateResponse
    fmt.Fprintf(os.Stdout, "Response from `StorefrontAPI.StorefrontUpdate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int32** | The unique identifier of the Storefront | 

### Other Parameters

Other parameters are passed through a pointer to a apiStorefrontUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **storefrontUpdate** | [**StorefrontUpdate**](StorefrontUpdate.md) |  | 

### Return type

[**StorefrontUpdateResponse**](StorefrontUpdateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## StorefrontVerifySlug

> Response StorefrontVerifySlug(ctx, slug).Execute()

Verify Storefront Slug



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
    slug := "struct_and_faces" // string | The custom slug to check

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.StorefrontAPI.StorefrontVerifySlug(context.Background(), slug).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `StorefrontAPI.StorefrontVerifySlug``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StorefrontVerifySlug`: Response
    fmt.Fprintf(os.Stdout, "Response from `StorefrontAPI.StorefrontVerifySlug`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**slug** | **string** | The custom slug to check | 

### Other Parameters

Other parameters are passed through a pointer to a apiStorefrontVerifySlugRequest struct via the builder pattern


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

