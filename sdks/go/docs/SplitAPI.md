# \SplitAPI

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**SplitAddSubaccount**](SplitAPI.md#SplitAddSubaccount) | **Post** /split/{id}/subaccount/add | Add Subaccount to Split
[**SplitCreate**](SplitAPI.md#SplitCreate) | **Post** /split | Create Split
[**SplitFetch**](SplitAPI.md#SplitFetch) | **Get** /split/{id} | Fetch Split
[**SplitList**](SplitAPI.md#SplitList) | **Get** /split | List Splits
[**SplitRemoveSubaccount**](SplitAPI.md#SplitRemoveSubaccount) | **Post** /split/{id}/subaccount/remove | Remove Subaccount from split
[**SplitUpdate**](SplitAPI.md#SplitUpdate) | **Put** /split/{id} | Update Split



## SplitAddSubaccount

> SplitAddUpdateSubaccountResponse SplitAddSubaccount(ctx, id).SplitSubaccounts(splitSubaccounts).Execute()

Add Subaccount to Split



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
    id := int32(4896895) // int32 | The ID of the split configuration to fetch
    splitSubaccounts := *openapiclient.NewSplitSubaccounts() // SplitSubaccounts |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SplitAPI.SplitAddSubaccount(context.Background(), id).SplitSubaccounts(splitSubaccounts).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SplitAPI.SplitAddSubaccount``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SplitAddSubaccount`: SplitAddUpdateSubaccountResponse
    fmt.Fprintf(os.Stdout, "Response from `SplitAPI.SplitAddSubaccount`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int32** | The ID of the split configuration to fetch | 

### Other Parameters

Other parameters are passed through a pointer to a apiSplitAddSubaccountRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **splitSubaccounts** | [**SplitSubaccounts**](SplitSubaccounts.md) |  | 

### Return type

[**SplitAddUpdateSubaccountResponse**](SplitAddUpdateSubaccountResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SplitCreate

> SplitCreateResponse SplitCreate(ctx).SplitCreate(splitCreate).Execute()

Create Split



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
    splitCreate := *openapiclient.NewSplitCreate("Name_example", "Type_example", []openapiclient.SplitSubaccounts{*openapiclient.NewSplitSubaccounts()}, "Currency_example") // SplitCreate |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SplitAPI.SplitCreate(context.Background()).SplitCreate(splitCreate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SplitAPI.SplitCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SplitCreate`: SplitCreateResponse
    fmt.Fprintf(os.Stdout, "Response from `SplitAPI.SplitCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSplitCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **splitCreate** | [**SplitCreate**](SplitCreate.md) |  | 

### Return type

[**SplitCreateResponse**](SplitCreateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SplitFetch

> SplitFetchResponse SplitFetch(ctx, id).Execute()

Fetch Split



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
    id := int32(4896895) // int32 | The ID of the split configuration to fetch

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SplitAPI.SplitFetch(context.Background(), id).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SplitAPI.SplitFetch``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SplitFetch`: SplitFetchResponse
    fmt.Fprintf(os.Stdout, "Response from `SplitAPI.SplitFetch`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int32** | The ID of the split configuration to fetch | 

### Other Parameters

Other parameters are passed through a pointer to a apiSplitFetchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**SplitFetchResponse**](SplitFetchResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SplitList

> SplitListResponse SplitList(ctx).SubaccountCode(subaccountCode).Name(name).Active(active).PerPage(perPage).Page(page).From(from).To(to).Execute()

List Splits



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
    subaccountCode := "ACCT_dskvlw3y3dMukmt" // string | Filter by subaccount code (optional)
    name := "name_example" // string | The name of the split (optional)
    active := true // bool | The status of the split (optional)
    perPage := int32(56) // int32 | The number of records to fetch per request (optional)
    page := int32(56) // int32 | The offset to retrieve data from (optional)
    from := time.Now() // time.Time | The start date (optional)
    to := time.Now() // time.Time | The end date (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SplitAPI.SplitList(context.Background()).SubaccountCode(subaccountCode).Name(name).Active(active).PerPage(perPage).Page(page).From(from).To(to).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SplitAPI.SplitList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SplitList`: SplitListResponse
    fmt.Fprintf(os.Stdout, "Response from `SplitAPI.SplitList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSplitListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subaccountCode** | **string** | Filter by subaccount code | 
 **name** | **string** | The name of the split | 
 **active** | **bool** | The status of the split | 
 **perPage** | **int32** | The number of records to fetch per request | 
 **page** | **int32** | The offset to retrieve data from | 
 **from** | **time.Time** | The start date | 
 **to** | **time.Time** | The end date | 

### Return type

[**SplitListResponse**](SplitListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SplitRemoveSubaccount

> SplitRemoveSubaccountResponse SplitRemoveSubaccount(ctx, id).SplitSubaccounts(splitSubaccounts).Execute()

Remove Subaccount from split



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
    id := int32(4896895) // int32 | The ID of the split configuration to fetch
    splitSubaccounts := *openapiclient.NewSplitSubaccounts() // SplitSubaccounts |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SplitAPI.SplitRemoveSubaccount(context.Background(), id).SplitSubaccounts(splitSubaccounts).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SplitAPI.SplitRemoveSubaccount``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SplitRemoveSubaccount`: SplitRemoveSubaccountResponse
    fmt.Fprintf(os.Stdout, "Response from `SplitAPI.SplitRemoveSubaccount`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int32** | The ID of the split configuration to fetch | 

### Other Parameters

Other parameters are passed through a pointer to a apiSplitRemoveSubaccountRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **splitSubaccounts** | [**SplitSubaccounts**](SplitSubaccounts.md) |  | 

### Return type

[**SplitRemoveSubaccountResponse**](SplitRemoveSubaccountResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SplitUpdate

> SplitUpdateResponse SplitUpdate(ctx, id).SplitUpdate(splitUpdate).Execute()

Update Split



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
    id := "id_example" // string | 
    splitUpdate := *openapiclient.NewSplitUpdate() // SplitUpdate |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SplitAPI.SplitUpdate(context.Background(), id).SplitUpdate(splitUpdate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SplitAPI.SplitUpdate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SplitUpdate`: SplitUpdateResponse
    fmt.Fprintf(os.Stdout, "Response from `SplitAPI.SplitUpdate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiSplitUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **splitUpdate** | [**SplitUpdate**](SplitUpdate.md) |  | 

### Return type

[**SplitUpdateResponse**](SplitUpdateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

