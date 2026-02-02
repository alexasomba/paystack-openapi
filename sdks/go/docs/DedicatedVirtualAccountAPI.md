# \DedicatedVirtualAccountAPI

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DedicatedAccountAddSplit**](DedicatedVirtualAccountAPI.md#DedicatedAccountAddSplit) | **Post** /dedicated_account/split | Split Dedicated Account Transaction
[**DedicatedAccountAssign**](DedicatedVirtualAccountAPI.md#DedicatedAccountAssign) | **Post** /dedicated_account/assign | Assign Dedicated Account
[**DedicatedAccountAvailableProviders**](DedicatedVirtualAccountAPI.md#DedicatedAccountAvailableProviders) | **Get** /dedicated_account/available_providers | Fetch Bank Providers
[**DedicatedAccountCreate**](DedicatedVirtualAccountAPI.md#DedicatedAccountCreate) | **Post** /dedicated_account | Create Dedicated Account
[**DedicatedAccountDeactivate**](DedicatedVirtualAccountAPI.md#DedicatedAccountDeactivate) | **Delete** /dedicated_account/{id} | Deactivate Dedicated Account
[**DedicatedAccountFetch**](DedicatedVirtualAccountAPI.md#DedicatedAccountFetch) | **Get** /dedicated_account/{id} | Fetch Dedicated Account
[**DedicatedAccountList**](DedicatedVirtualAccountAPI.md#DedicatedAccountList) | **Get** /dedicated_account | List Dedicated Accounts
[**DedicatedAccountRemoveSplit**](DedicatedVirtualAccountAPI.md#DedicatedAccountRemoveSplit) | **Delete** /dedicated_account/split | Remove Split from Dedicated Account
[**DedicatedAccountRequery**](DedicatedVirtualAccountAPI.md#DedicatedAccountRequery) | **Get** /dedicated_account/requery | Requery Dedicated Account



## DedicatedAccountAddSplit

> Response DedicatedAccountAddSplit(ctx).DedicatedVirtualAccountSplit(dedicatedVirtualAccountSplit).Execute()

Split Dedicated Account Transaction



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
    dedicatedVirtualAccountSplit := *openapiclient.NewDedicatedVirtualAccountSplit("AccountNumber_example") // DedicatedVirtualAccountSplit |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DedicatedVirtualAccountAPI.DedicatedAccountAddSplit(context.Background()).DedicatedVirtualAccountSplit(dedicatedVirtualAccountSplit).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DedicatedVirtualAccountAPI.DedicatedAccountAddSplit``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DedicatedAccountAddSplit`: Response
    fmt.Fprintf(os.Stdout, "Response from `DedicatedVirtualAccountAPI.DedicatedAccountAddSplit`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDedicatedAccountAddSplitRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dedicatedVirtualAccountSplit** | [**DedicatedVirtualAccountSplit**](DedicatedVirtualAccountSplit.md) |  | 

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


## DedicatedAccountAssign

> Response DedicatedAccountAssign(ctx).DedicatedVirtualAccountAssign(dedicatedVirtualAccountAssign).Execute()

Assign Dedicated Account



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
    dedicatedVirtualAccountAssign := *openapiclient.NewDedicatedVirtualAccountAssign("Email_example", "FirstName_example", "LastName_example", "Phone_example", "PreferredBank_example", "Country_example") // DedicatedVirtualAccountAssign |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DedicatedVirtualAccountAPI.DedicatedAccountAssign(context.Background()).DedicatedVirtualAccountAssign(dedicatedVirtualAccountAssign).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DedicatedVirtualAccountAPI.DedicatedAccountAssign``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DedicatedAccountAssign`: Response
    fmt.Fprintf(os.Stdout, "Response from `DedicatedVirtualAccountAPI.DedicatedAccountAssign`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDedicatedAccountAssignRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dedicatedVirtualAccountAssign** | [**DedicatedVirtualAccountAssign**](DedicatedVirtualAccountAssign.md) |  | 

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


## DedicatedAccountAvailableProviders

> Response DedicatedAccountAvailableProviders(ctx).Execute()

Fetch Bank Providers



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

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DedicatedVirtualAccountAPI.DedicatedAccountAvailableProviders(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DedicatedVirtualAccountAPI.DedicatedAccountAvailableProviders``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DedicatedAccountAvailableProviders`: Response
    fmt.Fprintf(os.Stdout, "Response from `DedicatedVirtualAccountAPI.DedicatedAccountAvailableProviders`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiDedicatedAccountAvailableProvidersRequest struct via the builder pattern


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


## DedicatedAccountCreate

> DedicatedNubanCreateResponse DedicatedAccountCreate(ctx).DedicatedVirtualAccountCreate(dedicatedVirtualAccountCreate).Execute()

Create Dedicated Account



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
    dedicatedVirtualAccountCreate := *openapiclient.NewDedicatedVirtualAccountCreate("Customer_example") // DedicatedVirtualAccountCreate |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DedicatedVirtualAccountAPI.DedicatedAccountCreate(context.Background()).DedicatedVirtualAccountCreate(dedicatedVirtualAccountCreate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DedicatedVirtualAccountAPI.DedicatedAccountCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DedicatedAccountCreate`: DedicatedNubanCreateResponse
    fmt.Fprintf(os.Stdout, "Response from `DedicatedVirtualAccountAPI.DedicatedAccountCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDedicatedAccountCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dedicatedVirtualAccountCreate** | [**DedicatedVirtualAccountCreate**](DedicatedVirtualAccountCreate.md) |  | 

### Return type

[**DedicatedNubanCreateResponse**](DedicatedNubanCreateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DedicatedAccountDeactivate

> DedicatedNubanDeactivateResponse DedicatedAccountDeactivate(ctx, id).Execute()

Deactivate Dedicated Account



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
    id := "id_example" // string | ID of dedicated virtual account

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DedicatedVirtualAccountAPI.DedicatedAccountDeactivate(context.Background(), id).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DedicatedVirtualAccountAPI.DedicatedAccountDeactivate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DedicatedAccountDeactivate`: DedicatedNubanDeactivateResponse
    fmt.Fprintf(os.Stdout, "Response from `DedicatedVirtualAccountAPI.DedicatedAccountDeactivate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of dedicated virtual account | 

### Other Parameters

Other parameters are passed through a pointer to a apiDedicatedAccountDeactivateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**DedicatedNubanDeactivateResponse**](DedicatedNubanDeactivateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DedicatedAccountFetch

> DedicatedNubanFetchResponse DedicatedAccountFetch(ctx, id).Execute()

Fetch Dedicated Account



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
    id := "id_example" // string | ID of dedicated virtual account

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DedicatedVirtualAccountAPI.DedicatedAccountFetch(context.Background(), id).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DedicatedVirtualAccountAPI.DedicatedAccountFetch``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DedicatedAccountFetch`: DedicatedNubanFetchResponse
    fmt.Fprintf(os.Stdout, "Response from `DedicatedVirtualAccountAPI.DedicatedAccountFetch`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of dedicated virtual account | 

### Other Parameters

Other parameters are passed through a pointer to a apiDedicatedAccountFetchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**DedicatedNubanFetchResponse**](DedicatedNubanFetchResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DedicatedAccountList

> DedicatedNubanListResponse DedicatedAccountList(ctx).Active(active).Customer(customer).Currency(currency).ProviderSlug(providerSlug).BankId(bankId).PerPage(perPage).Page(page).Execute()

List Dedicated Accounts



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
    active := true // bool | Status of the dedicated virtual account (optional)
    customer := int32(297346561) // int32 | The customer's ID (optional)
    currency := "currency_example" // string | The currency of the dedicated virtual account (optional)
    providerSlug := "titan-paystack" // string | The bank's slug in lowercase, without spaces (optional)
    bankId := "035" // string | The bank's ID (optional)
    perPage := int32(56) // int32 | The number of records to fetch per request (optional) (default to 50)
    page := int32(56) // int32 | The offset to retrieve data from (optional) (default to 1)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DedicatedVirtualAccountAPI.DedicatedAccountList(context.Background()).Active(active).Customer(customer).Currency(currency).ProviderSlug(providerSlug).BankId(bankId).PerPage(perPage).Page(page).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DedicatedVirtualAccountAPI.DedicatedAccountList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DedicatedAccountList`: DedicatedNubanListResponse
    fmt.Fprintf(os.Stdout, "Response from `DedicatedVirtualAccountAPI.DedicatedAccountList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDedicatedAccountListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | **bool** | Status of the dedicated virtual account | 
 **customer** | **int32** | The customer&#39;s ID | 
 **currency** | **string** | The currency of the dedicated virtual account | 
 **providerSlug** | **string** | The bank&#39;s slug in lowercase, without spaces | 
 **bankId** | **string** | The bank&#39;s ID | 
 **perPage** | **int32** | The number of records to fetch per request | [default to 50]
 **page** | **int32** | The offset to retrieve data from | [default to 1]

### Return type

[**DedicatedNubanListResponse**](DedicatedNubanListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DedicatedAccountRemoveSplit

> Response DedicatedAccountRemoveSplit(ctx).DedicatedVirtualAccountRemoveSplit(dedicatedVirtualAccountRemoveSplit).Execute()

Remove Split from Dedicated Account



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
    dedicatedVirtualAccountRemoveSplit := *openapiclient.NewDedicatedVirtualAccountRemoveSplit("AccountNumber_example") // DedicatedVirtualAccountRemoveSplit |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DedicatedVirtualAccountAPI.DedicatedAccountRemoveSplit(context.Background()).DedicatedVirtualAccountRemoveSplit(dedicatedVirtualAccountRemoveSplit).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DedicatedVirtualAccountAPI.DedicatedAccountRemoveSplit``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DedicatedAccountRemoveSplit`: Response
    fmt.Fprintf(os.Stdout, "Response from `DedicatedVirtualAccountAPI.DedicatedAccountRemoveSplit`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDedicatedAccountRemoveSplitRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dedicatedVirtualAccountRemoveSplit** | [**DedicatedVirtualAccountRemoveSplit**](DedicatedVirtualAccountRemoveSplit.md) |  | 

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


## DedicatedAccountRequery

> Response DedicatedAccountRequery(ctx).AccountNumber(accountNumber).ProviderSlug(providerSlug).Date(date).Execute()

Requery Dedicated Account



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
    accountNumber := "0033322211" // string | Virtual account number to requery (optional)
    providerSlug := "titan-paystack" // string | The bank's slug in lowercase, without spaces. (optional)
    date := time.Now() // time.Time | The day the transfer was made (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DedicatedVirtualAccountAPI.DedicatedAccountRequery(context.Background()).AccountNumber(accountNumber).ProviderSlug(providerSlug).Date(date).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DedicatedVirtualAccountAPI.DedicatedAccountRequery``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DedicatedAccountRequery`: Response
    fmt.Fprintf(os.Stdout, "Response from `DedicatedVirtualAccountAPI.DedicatedAccountRequery`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDedicatedAccountRequeryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountNumber** | **string** | Virtual account number to requery | 
 **providerSlug** | **string** | The bank&#39;s slug in lowercase, without spaces. | 
 **date** | **time.Time** | The day the transfer was made | 

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

