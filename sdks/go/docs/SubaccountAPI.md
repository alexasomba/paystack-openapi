# \SubaccountAPI

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**SubaccountCreate**](SubaccountAPI.md#SubaccountCreate) | **Post** /subaccount | Create Subaccount
[**SubaccountFetch**](SubaccountAPI.md#SubaccountFetch) | **Get** /subaccount/{code} | Fetch Subaccount
[**SubaccountList**](SubaccountAPI.md#SubaccountList) | **Get** /subaccount | List Subaccounts
[**SubaccountUpdate**](SubaccountAPI.md#SubaccountUpdate) | **Put** /subaccount/{code} | Update Subaccount



## SubaccountCreate

> SubaccountCreateResponse SubaccountCreate(ctx).SubaccountCreate(subaccountCreate).Execute()

Create Subaccount



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
    subaccountCreate := *openapiclient.NewSubaccountCreate("BusinessName_example", "SettlementBank_example", "AccountNumber_example", float32(123)) // SubaccountCreate |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SubaccountAPI.SubaccountCreate(context.Background()).SubaccountCreate(subaccountCreate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SubaccountAPI.SubaccountCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SubaccountCreate`: SubaccountCreateResponse
    fmt.Fprintf(os.Stdout, "Response from `SubaccountAPI.SubaccountCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSubaccountCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subaccountCreate** | [**SubaccountCreate**](SubaccountCreate.md) |  | 

### Return type

[**SubaccountCreateResponse**](SubaccountCreateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SubaccountFetch

> SubaccountFetchResponse SubaccountFetch(ctx, code).Execute()

Fetch Subaccount



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
    code := "ACCT_6uujpqtzmnufzkw" // string | The subaccount code you want to fetch

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SubaccountAPI.SubaccountFetch(context.Background(), code).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SubaccountAPI.SubaccountFetch``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SubaccountFetch`: SubaccountFetchResponse
    fmt.Fprintf(os.Stdout, "Response from `SubaccountAPI.SubaccountFetch`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**code** | **string** | The subaccount code you want to fetch | 

### Other Parameters

Other parameters are passed through a pointer to a apiSubaccountFetchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**SubaccountFetchResponse**](SubaccountFetchResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SubaccountList

> SubaccountListResponse SubaccountList(ctx).PerPage(perPage).Page(page).Active(active).Execute()

List Subaccounts



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
    active := true // bool | Filter by the state of the subaccounts (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SubaccountAPI.SubaccountList(context.Background()).PerPage(perPage).Page(page).Active(active).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SubaccountAPI.SubaccountList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SubaccountList`: SubaccountListResponse
    fmt.Fprintf(os.Stdout, "Response from `SubaccountAPI.SubaccountList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSubaccountListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **perPage** | **int32** | Number of records to fetch per request | [default to 50]
 **page** | **int32** | The offset to retrieve data from | [default to 1]
 **active** | **bool** | Filter by the state of the subaccounts | 

### Return type

[**SubaccountListResponse**](SubaccountListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SubaccountUpdate

> SubaccountUpdateResponse SubaccountUpdate(ctx, code).SubaccountUpdate(subaccountUpdate).Execute()

Update Subaccount



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
    code := "ACCT_6uujpqtzmnufzkw" // string | The subaccount code you want to fetch
    subaccountUpdate := *openapiclient.NewSubaccountUpdate() // SubaccountUpdate |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SubaccountAPI.SubaccountUpdate(context.Background(), code).SubaccountUpdate(subaccountUpdate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SubaccountAPI.SubaccountUpdate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SubaccountUpdate`: SubaccountUpdateResponse
    fmt.Fprintf(os.Stdout, "Response from `SubaccountAPI.SubaccountUpdate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**code** | **string** | The subaccount code you want to fetch | 

### Other Parameters

Other parameters are passed through a pointer to a apiSubaccountUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **subaccountUpdate** | [**SubaccountUpdate**](SubaccountUpdate.md) |  | 

### Return type

[**SubaccountUpdateResponse**](SubaccountUpdateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

