# \ApplePayAPI

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ApplePayListDomain**](ApplePayAPI.md#ApplePayListDomain) | **Get** /apple-pay/domain | List Domains
[**ApplePayRegisterDomain**](ApplePayAPI.md#ApplePayRegisterDomain) | **Post** /apple-pay/domain | Register Domain
[**ApplePayUnregisterDomain**](ApplePayAPI.md#ApplePayUnregisterDomain) | **Delete** /apple-pay/domain | Unregister Domain



## ApplePayListDomain

> Response ApplePayListDomain(ctx).UseCursor(useCursor).Next(next).Previous(previous).Execute()

List Domains



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
    useCursor := true // bool | A flag to indicate if cursor based pagination should be used (optional)
    next := "next_example" // string | An alphanumeric value returned for every cursor based retrieval, used to retrieve the next set of data  (optional)
    previous := "previous_example" // string | An alphanumeric value returned for every cursor based retrieval, used to retrieve the previous set of data  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ApplePayAPI.ApplePayListDomain(context.Background()).UseCursor(useCursor).Next(next).Previous(previous).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApplePayAPI.ApplePayListDomain``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApplePayListDomain`: Response
    fmt.Fprintf(os.Stdout, "Response from `ApplePayAPI.ApplePayListDomain`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApplePayListDomainRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **useCursor** | **bool** | A flag to indicate if cursor based pagination should be used | 
 **next** | **string** | An alphanumeric value returned for every cursor based retrieval, used to retrieve the next set of data  | 
 **previous** | **string** | An alphanumeric value returned for every cursor based retrieval, used to retrieve the previous set of data  | 

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


## ApplePayRegisterDomain

> ApplePayCreateOkModel ApplePayRegisterDomain(ctx).ApplePayParam(applePayParam).Execute()

Register Domain



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
    applePayParam := *openapiclient.NewApplePayParam("DomainName_example") // ApplePayParam |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ApplePayAPI.ApplePayRegisterDomain(context.Background()).ApplePayParam(applePayParam).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApplePayAPI.ApplePayRegisterDomain``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApplePayRegisterDomain`: ApplePayCreateOkModel
    fmt.Fprintf(os.Stdout, "Response from `ApplePayAPI.ApplePayRegisterDomain`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApplePayRegisterDomainRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applePayParam** | [**ApplePayParam**](ApplePayParam.md) |  | 

### Return type

[**ApplePayCreateOkModel**](ApplePayCreateOkModel.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApplePayUnregisterDomain

> Response ApplePayUnregisterDomain(ctx).ApplePayParam(applePayParam).Execute()

Unregister Domain



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
    applePayParam := *openapiclient.NewApplePayParam("DomainName_example") // ApplePayParam |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ApplePayAPI.ApplePayUnregisterDomain(context.Background()).ApplePayParam(applePayParam).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApplePayAPI.ApplePayUnregisterDomain``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApplePayUnregisterDomain`: Response
    fmt.Fprintf(os.Stdout, "Response from `ApplePayAPI.ApplePayUnregisterDomain`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApplePayUnregisterDomainRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applePayParam** | [**ApplePayParam**](ApplePayParam.md) |  | 

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

