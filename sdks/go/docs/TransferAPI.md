# \TransferAPI

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**TransferBulk**](TransferAPI.md#TransferBulk) | **Post** /transfer/bulk | Initiate Bulk Transfer
[**TransferDisableOtp**](TransferAPI.md#TransferDisableOtp) | **Post** /transfer/disable_otp | Disable OTP for Transfers
[**TransferDisableOtpFinalize**](TransferAPI.md#TransferDisableOtpFinalize) | **Post** /transfer/disable_otp_finalize | Finalize Disabling OTP for Transfers
[**TransferEnableOtp**](TransferAPI.md#TransferEnableOtp) | **Post** /transfer/enable_otp | Enable OTP requirement for Transfers
[**TransferExportTransfer**](TransferAPI.md#TransferExportTransfer) | **Get** /transfer/export | Export Transfers
[**TransferFetch**](TransferAPI.md#TransferFetch) | **Get** /transfer/{code} | Fetch Transfer
[**TransferFinalize**](TransferAPI.md#TransferFinalize) | **Post** /transfer/finalize_transfer | Finalize Transfer
[**TransferInitiate**](TransferAPI.md#TransferInitiate) | **Post** /transfer | Initiate Transfer
[**TransferList**](TransferAPI.md#TransferList) | **Get** /transfer | List Transfers
[**TransferResendOtp**](TransferAPI.md#TransferResendOtp) | **Post** /transfer/resend_otp | Resend OTP for Transfer
[**TransferVerify**](TransferAPI.md#TransferVerify) | **Get** /transfer/verify/{reference} | Verify Transfer



## TransferBulk

> TransferBulkResponse TransferBulk(ctx).TransferBulk(transferBulk).Execute()

Initiate Bulk Transfer



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
    transferBulk := *openapiclient.NewTransferBulk("Source_example", []openapiclient.TransferBase{*openapiclient.NewTransferBase(int32(123), "Recipient_example", "Reference_example")}) // TransferBulk |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TransferAPI.TransferBulk(context.Background()).TransferBulk(transferBulk).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TransferAPI.TransferBulk``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TransferBulk`: TransferBulkResponse
    fmt.Fprintf(os.Stdout, "Response from `TransferAPI.TransferBulk`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTransferBulkRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferBulk** | [**TransferBulk**](TransferBulk.md) |  | 

### Return type

[**TransferBulkResponse**](TransferBulkResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TransferDisableOtp

> TransferDisablesOtpResponse TransferDisableOtp(ctx).Execute()

Disable OTP for Transfers



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
    resp, r, err := apiClient.TransferAPI.TransferDisableOtp(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TransferAPI.TransferDisableOtp``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TransferDisableOtp`: TransferDisablesOtpResponse
    fmt.Fprintf(os.Stdout, "Response from `TransferAPI.TransferDisableOtp`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiTransferDisableOtpRequest struct via the builder pattern


### Return type

[**TransferDisablesOtpResponse**](TransferDisablesOtpResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TransferDisableOtpFinalize

> TransferFinalizeDisablesOtpResponse TransferDisableOtpFinalize(ctx).TransferFinalizeDisableOTP(transferFinalizeDisableOTP).Execute()

Finalize Disabling OTP for Transfers



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
    transferFinalizeDisableOTP := *openapiclient.NewTransferFinalizeDisableOTP("Otp_example") // TransferFinalizeDisableOTP |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TransferAPI.TransferDisableOtpFinalize(context.Background()).TransferFinalizeDisableOTP(transferFinalizeDisableOTP).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TransferAPI.TransferDisableOtpFinalize``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TransferDisableOtpFinalize`: TransferFinalizeDisablesOtpResponse
    fmt.Fprintf(os.Stdout, "Response from `TransferAPI.TransferDisableOtpFinalize`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTransferDisableOtpFinalizeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferFinalizeDisableOTP** | [**TransferFinalizeDisableOTP**](TransferFinalizeDisableOTP.md) |  | 

### Return type

[**TransferFinalizeDisablesOtpResponse**](TransferFinalizeDisablesOtpResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TransferEnableOtp

> TransferEnablesOtpResponse TransferEnableOtp(ctx).Execute()

Enable OTP requirement for Transfers



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
    resp, r, err := apiClient.TransferAPI.TransferEnableOtp(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TransferAPI.TransferEnableOtp``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TransferEnableOtp`: TransferEnablesOtpResponse
    fmt.Fprintf(os.Stdout, "Response from `TransferAPI.TransferEnableOtp`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiTransferEnableOtpRequest struct via the builder pattern


### Return type

[**TransferEnablesOtpResponse**](TransferEnablesOtpResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TransferExportTransfer

> Response TransferExportTransfer(ctx).Recipient(recipient).Status(status).From(from).To(to).Execute()

Export Transfers



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/alexasomba/paystack-openapi/sdks/go"
)

func main() {
    recipient := "recipient_example" // string | Export transfer by the recipient code (optional)
    status := "success" // string | Export transfer by status (optional) (default to "pending")
    from := time.Now() // time.Time | The start date (optional)
    to := time.Now() // time.Time | The end date (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TransferAPI.TransferExportTransfer(context.Background()).Recipient(recipient).Status(status).From(from).To(to).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TransferAPI.TransferExportTransfer``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TransferExportTransfer`: Response
    fmt.Fprintf(os.Stdout, "Response from `TransferAPI.TransferExportTransfer`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTransferExportTransferRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipient** | **string** | Export transfer by the recipient code | 
 **status** | **string** | Export transfer by status | [default to &quot;pending&quot;]
 **from** | **time.Time** | The start date | 
 **to** | **time.Time** | The end date | 

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


## TransferFetch

> TransferCode TransferFetch(ctx, code).Execute()

Fetch Transfer



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
    code := "TRF_1ptvuv321ahaa7q" // string | Transfer code

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TransferAPI.TransferFetch(context.Background(), code).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TransferAPI.TransferFetch``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TransferFetch`: TransferCode
    fmt.Fprintf(os.Stdout, "Response from `TransferAPI.TransferFetch`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**code** | **string** | Transfer code | 

### Other Parameters

Other parameters are passed through a pointer to a apiTransferFetchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**TransferCode**](TransferCode.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TransferFinalize

> Response TransferFinalize(ctx).TransferFinalize(transferFinalize).Execute()

Finalize Transfer



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
    transferFinalize := *openapiclient.NewTransferFinalize("TransferCode_example", "Otp_example") // TransferFinalize |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TransferAPI.TransferFinalize(context.Background()).TransferFinalize(transferFinalize).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TransferAPI.TransferFinalize``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TransferFinalize`: Response
    fmt.Fprintf(os.Stdout, "Response from `TransferAPI.TransferFinalize`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTransferFinalizeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferFinalize** | [**TransferFinalize**](TransferFinalize.md) |  | 

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


## TransferInitiate

> TransferCreateResponse TransferInitiate(ctx).TransferInitiate(transferInitiate).Execute()

Initiate Transfer



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
    transferInitiate := *openapiclient.NewTransferInitiate(int32(123), "Recipient_example", "Reference_example", "Source_example") // TransferInitiate |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TransferAPI.TransferInitiate(context.Background()).TransferInitiate(transferInitiate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TransferAPI.TransferInitiate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TransferInitiate`: TransferCreateResponse
    fmt.Fprintf(os.Stdout, "Response from `TransferAPI.TransferInitiate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTransferInitiateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferInitiate** | [**TransferInitiate**](TransferInitiate.md) |  | 

### Return type

[**TransferCreateResponse**](TransferCreateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TransferList

> TransferListResponse TransferList(ctx).UseCursor(useCursor).Next(next).Previous(previous).PerPage(perPage).Page(page).From(from).To(to).Recipient(recipient).Status(status).Execute()

List Transfers



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/alexasomba/paystack-openapi/sdks/go"
)

func main() {
    useCursor := true // bool | A flag to indicate if cursor based pagination should be used (optional)
    next := "next_example" // string | An alphanumeric value returned for every cursor based retrieval, used to retrieve the next set of data  (optional)
    previous := "previous_example" // string | An alphanumeric value returned for every cursor based retrieval, used to retrieve the previous set of data  (optional)
    perPage := int32(56) // int32 | The number of records to fetch per request (optional)
    page := int32(56) // int32 | The offset to retrieve data from (optional)
    from := time.Now() // time.Time | The start date (optional)
    to := time.Now() // time.Time | The end date (optional)
    recipient := "recipient_example" // string | Filter transfer by the recipient code (optional)
    status := "status_example" // string | Filter transfer by status (optional) (default to "pending")

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TransferAPI.TransferList(context.Background()).UseCursor(useCursor).Next(next).Previous(previous).PerPage(perPage).Page(page).From(from).To(to).Recipient(recipient).Status(status).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TransferAPI.TransferList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TransferList`: TransferListResponse
    fmt.Fprintf(os.Stdout, "Response from `TransferAPI.TransferList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTransferListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **useCursor** | **bool** | A flag to indicate if cursor based pagination should be used | 
 **next** | **string** | An alphanumeric value returned for every cursor based retrieval, used to retrieve the next set of data  | 
 **previous** | **string** | An alphanumeric value returned for every cursor based retrieval, used to retrieve the previous set of data  | 
 **perPage** | **int32** | The number of records to fetch per request | 
 **page** | **int32** | The offset to retrieve data from | 
 **from** | **time.Time** | The start date | 
 **to** | **time.Time** | The end date | 
 **recipient** | **string** | Filter transfer by the recipient code | 
 **status** | **string** | Filter transfer by status | [default to &quot;pending&quot;]

### Return type

[**TransferListResponse**](TransferListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TransferResendOtp

> TransferResendsOtpResponse TransferResendOtp(ctx).TransferResendOTP(transferResendOTP).Execute()

Resend OTP for Transfer



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
    transferResendOTP := *openapiclient.NewTransferResendOTP("TransferCode_example", "Reason_example") // TransferResendOTP |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TransferAPI.TransferResendOtp(context.Background()).TransferResendOTP(transferResendOTP).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TransferAPI.TransferResendOtp``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TransferResendOtp`: TransferResendsOtpResponse
    fmt.Fprintf(os.Stdout, "Response from `TransferAPI.TransferResendOtp`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTransferResendOtpRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferResendOTP** | [**TransferResendOTP**](TransferResendOTP.md) |  | 

### Return type

[**TransferResendsOtpResponse**](TransferResendsOtpResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TransferVerify

> TransferVerifyReference TransferVerify(ctx, reference).Execute()

Verify Transfer



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
    reference := "acv_9ee55786-2323-4760-98e2-6380c9cb3f67" // string | Transfer reference

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TransferAPI.TransferVerify(context.Background(), reference).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TransferAPI.TransferVerify``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TransferVerify`: TransferVerifyReference
    fmt.Fprintf(os.Stdout, "Response from `TransferAPI.TransferVerify`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reference** | **string** | Transfer reference | 

### Other Parameters

Other parameters are passed through a pointer to a apiTransferVerifyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**TransferVerifyReference**](TransferVerifyReference.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

