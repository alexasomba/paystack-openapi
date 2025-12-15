# \MiscellaneousAPI

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**MiscellaneousAvs**](MiscellaneousAPI.md#MiscellaneousAvs) | **Get** /address_verification/states | List States (AVS)
[**MiscellaneousListCountries**](MiscellaneousAPI.md#MiscellaneousListCountries) | **Get** /country | List Countries
[**MiscellaneousResolveCardBin**](MiscellaneousAPI.md#MiscellaneousResolveCardBin) | **Get** /decision/bin/{bin} | Resolve Card BIN



## MiscellaneousAvs

> MiscellaneousListStatesResponse MiscellaneousAvs(ctx).Country(country).Execute()

List States (AVS)



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
    country := "CA" // string | The country code of the states to list. It is gotten after the charge request (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.MiscellaneousAPI.MiscellaneousAvs(context.Background()).Country(country).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `MiscellaneousAPI.MiscellaneousAvs``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `MiscellaneousAvs`: MiscellaneousListStatesResponse
    fmt.Fprintf(os.Stdout, "Response from `MiscellaneousAPI.MiscellaneousAvs`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiMiscellaneousAvsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **string** | The country code of the states to list. It is gotten after the charge request | 

### Return type

[**MiscellaneousListStatesResponse**](MiscellaneousListStatesResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## MiscellaneousListCountries

> MiscellaneousListCountriesResponse MiscellaneousListCountries(ctx).Execute()

List Countries



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

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.MiscellaneousAPI.MiscellaneousListCountries(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `MiscellaneousAPI.MiscellaneousListCountries``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `MiscellaneousListCountries`: MiscellaneousListCountriesResponse
    fmt.Fprintf(os.Stdout, "Response from `MiscellaneousAPI.MiscellaneousListCountries`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiMiscellaneousListCountriesRequest struct via the builder pattern


### Return type

[**MiscellaneousListCountriesResponse**](MiscellaneousListCountriesResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## MiscellaneousResolveCardBin

> VerificationResolveCardBINResponse MiscellaneousResolveCardBin(ctx, bin).Execute()

Resolve Card BIN



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
    bin := int32(539983) // int32 | The card bank identification number

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.MiscellaneousAPI.MiscellaneousResolveCardBin(context.Background(), bin).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `MiscellaneousAPI.MiscellaneousResolveCardBin``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `MiscellaneousResolveCardBin`: VerificationResolveCardBINResponse
    fmt.Fprintf(os.Stdout, "Response from `MiscellaneousAPI.MiscellaneousResolveCardBin`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**bin** | **int32** | The card bank identification number | 

### Other Parameters

Other parameters are passed through a pointer to a apiMiscellaneousResolveCardBinRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**VerificationResolveCardBINResponse**](VerificationResolveCardBINResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

