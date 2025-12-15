# \DirectDebitAPI

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DirectdebitListMandateAuthorizations**](DirectDebitAPI.md#DirectdebitListMandateAuthorizations) | **Get** /directdebit/mandate-authorizations | List Mandate Authorizations
[**DirectdebitTriggerActivationCharge**](DirectDebitAPI.md#DirectdebitTriggerActivationCharge) | **Put** /directdebit/activation-charge | Trigger Activation Charge



## DirectdebitListMandateAuthorizations

> CustomerFetchMandateAuthorizationsResponse DirectdebitListMandateAuthorizations(ctx).Cursor(cursor).Status(status).PerPage(perPage).Execute()

List Mandate Authorizations



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
    cursor := "cursor_example" // string | The cursor value of the next set of authorizations to fetch. You can get this from the meta object of the response (optional)
    status := "status_example" // string | Filter by the authorization status (optional)
    perPage := int32(56) // int32 | The number of authorizations to fetch per request (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DirectDebitAPI.DirectdebitListMandateAuthorizations(context.Background()).Cursor(cursor).Status(status).PerPage(perPage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DirectDebitAPI.DirectdebitListMandateAuthorizations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DirectdebitListMandateAuthorizations`: CustomerFetchMandateAuthorizationsResponse
    fmt.Fprintf(os.Stdout, "Response from `DirectDebitAPI.DirectdebitListMandateAuthorizations`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDirectdebitListMandateAuthorizationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **string** | The cursor value of the next set of authorizations to fetch. You can get this from the meta object of the response | 
 **status** | **string** | Filter by the authorization status | 
 **perPage** | **int32** | The number of authorizations to fetch per request | 

### Return type

[**CustomerFetchMandateAuthorizationsResponse**](CustomerFetchMandateAuthorizationsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DirectdebitTriggerActivationCharge

> DirectDebitActivationChargeResponse DirectdebitTriggerActivationCharge(ctx).DirectDebitActivationChargeRequest(directDebitActivationChargeRequest).Execute()

Trigger Activation Charge



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
    directDebitActivationChargeRequest := *openapiclient.NewDirectDebitActivationChargeRequest([]int32{int32(123)}) // DirectDebitActivationChargeRequest | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DirectDebitAPI.DirectdebitTriggerActivationCharge(context.Background()).DirectDebitActivationChargeRequest(directDebitActivationChargeRequest).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DirectDebitAPI.DirectdebitTriggerActivationCharge``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DirectdebitTriggerActivationCharge`: DirectDebitActivationChargeResponse
    fmt.Fprintf(os.Stdout, "Response from `DirectDebitAPI.DirectdebitTriggerActivationCharge`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDirectdebitTriggerActivationChargeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directDebitActivationChargeRequest** | [**DirectDebitActivationChargeRequest**](DirectDebitActivationChargeRequest.md) |  | 

### Return type

[**DirectDebitActivationChargeResponse**](DirectDebitActivationChargeResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

