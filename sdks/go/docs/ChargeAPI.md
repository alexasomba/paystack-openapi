# \ChargeAPI

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ChargeCheck**](ChargeAPI.md#ChargeCheck) | **Get** /charge/{reference} | Check pending charge
[**ChargeCreate**](ChargeAPI.md#ChargeCreate) | **Post** /charge | Create Charge
[**ChargeSubmitAddress**](ChargeAPI.md#ChargeSubmitAddress) | **Post** /charge/submit_address | Submit Address
[**ChargeSubmitBirthday**](ChargeAPI.md#ChargeSubmitBirthday) | **Post** /charge/submit_birthday | Submit Birthday
[**ChargeSubmitOtp**](ChargeAPI.md#ChargeSubmitOtp) | **Post** /charge/submit_otp | Submit OTP
[**ChargeSubmitPhone**](ChargeAPI.md#ChargeSubmitPhone) | **Post** /charge/submit_phone | Submit Phone
[**ChargeSubmitPin**](ChargeAPI.md#ChargeSubmitPin) | **Post** /charge/submit_pin | Submit PIN



## ChargeCheck

> ChargeCheckPendingResponse ChargeCheck(ctx, reference).Execute()

Check pending charge



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
    reference := "5bwib5v6anhe9xa" // string | The reference of the ongoing transaction

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChargeAPI.ChargeCheck(context.Background(), reference).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChargeAPI.ChargeCheck``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChargeCheck`: ChargeCheckPendingResponse
    fmt.Fprintf(os.Stdout, "Response from `ChargeAPI.ChargeCheck`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reference** | **string** | The reference of the ongoing transaction | 

### Other Parameters

Other parameters are passed through a pointer to a apiChargeCheckRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ChargeCheckPendingResponse**](ChargeCheckPendingResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChargeCreate

> ChargeCreateResponse ChargeCreate(ctx).ChargeCreateRequest(chargeCreateRequest).Execute()

Create Charge



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
    chargeCreateRequest := *openapiclient.NewChargeCreateRequest("Email_example", int32(123)) // ChargeCreateRequest |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChargeAPI.ChargeCreate(context.Background()).ChargeCreateRequest(chargeCreateRequest).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChargeAPI.ChargeCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChargeCreate`: ChargeCreateResponse
    fmt.Fprintf(os.Stdout, "Response from `ChargeAPI.ChargeCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiChargeCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chargeCreateRequest** | [**ChargeCreateRequest**](ChargeCreateRequest.md) |  | 

### Return type

[**ChargeCreateResponse**](ChargeCreateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChargeSubmitAddress

> Response ChargeSubmitAddress(ctx).ChargeSubmitAddress(chargeSubmitAddress).Execute()

Submit Address



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
    chargeSubmitAddress := *openapiclient.NewChargeSubmitAddress("Address_example", "City_example", "State_example", "ZipCode_example", "Reference_example") // ChargeSubmitAddress |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChargeAPI.ChargeSubmitAddress(context.Background()).ChargeSubmitAddress(chargeSubmitAddress).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChargeAPI.ChargeSubmitAddress``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChargeSubmitAddress`: Response
    fmt.Fprintf(os.Stdout, "Response from `ChargeAPI.ChargeSubmitAddress`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiChargeSubmitAddressRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chargeSubmitAddress** | [**ChargeSubmitAddress**](ChargeSubmitAddress.md) |  | 

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


## ChargeSubmitBirthday

> ChargeSubmitBirthdayResponse ChargeSubmitBirthday(ctx).ChargeSubmitBirthday(chargeSubmitBirthday).Execute()

Submit Birthday



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
    chargeSubmitBirthday := *openapiclient.NewChargeSubmitBirthday(time.Now(), "Reference_example") // ChargeSubmitBirthday |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChargeAPI.ChargeSubmitBirthday(context.Background()).ChargeSubmitBirthday(chargeSubmitBirthday).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChargeAPI.ChargeSubmitBirthday``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChargeSubmitBirthday`: ChargeSubmitBirthdayResponse
    fmt.Fprintf(os.Stdout, "Response from `ChargeAPI.ChargeSubmitBirthday`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiChargeSubmitBirthdayRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chargeSubmitBirthday** | [**ChargeSubmitBirthday**](ChargeSubmitBirthday.md) |  | 

### Return type

[**ChargeSubmitBirthdayResponse**](ChargeSubmitBirthdayResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChargeSubmitOtp

> ChargeSubmitOtpResponse ChargeSubmitOtp(ctx).ChargeSubmitOTP(chargeSubmitOTP).Execute()

Submit OTP



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
    chargeSubmitOTP := *openapiclient.NewChargeSubmitOTP("Otp_example", "Reference_example") // ChargeSubmitOTP |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChargeAPI.ChargeSubmitOtp(context.Background()).ChargeSubmitOTP(chargeSubmitOTP).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChargeAPI.ChargeSubmitOtp``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChargeSubmitOtp`: ChargeSubmitOtpResponse
    fmt.Fprintf(os.Stdout, "Response from `ChargeAPI.ChargeSubmitOtp`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiChargeSubmitOtpRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chargeSubmitOTP** | [**ChargeSubmitOTP**](ChargeSubmitOTP.md) |  | 

### Return type

[**ChargeSubmitOtpResponse**](ChargeSubmitOtpResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChargeSubmitPhone

> ChargeSubmitPhoneResponse ChargeSubmitPhone(ctx).ChargeSubmitPhone(chargeSubmitPhone).Execute()

Submit Phone



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
    chargeSubmitPhone := *openapiclient.NewChargeSubmitPhone("Phone_example", "Reference_example") // ChargeSubmitPhone |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChargeAPI.ChargeSubmitPhone(context.Background()).ChargeSubmitPhone(chargeSubmitPhone).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChargeAPI.ChargeSubmitPhone``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChargeSubmitPhone`: ChargeSubmitPhoneResponse
    fmt.Fprintf(os.Stdout, "Response from `ChargeAPI.ChargeSubmitPhone`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiChargeSubmitPhoneRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chargeSubmitPhone** | [**ChargeSubmitPhone**](ChargeSubmitPhone.md) |  | 

### Return type

[**ChargeSubmitPhoneResponse**](ChargeSubmitPhoneResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChargeSubmitPin

> ChargeSubmitPinResponse ChargeSubmitPin(ctx).ChargeSubmitPin(chargeSubmitPin).Execute()

Submit PIN



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
    chargeSubmitPin := *openapiclient.NewChargeSubmitPin("Pin_example", "Reference_example") // ChargeSubmitPin |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChargeAPI.ChargeSubmitPin(context.Background()).ChargeSubmitPin(chargeSubmitPin).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChargeAPI.ChargeSubmitPin``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChargeSubmitPin`: ChargeSubmitPinResponse
    fmt.Fprintf(os.Stdout, "Response from `ChargeAPI.ChargeSubmitPin`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiChargeSubmitPinRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chargeSubmitPin** | [**ChargeSubmitPin**](ChargeSubmitPin.md) |  | 

### Return type

[**ChargeSubmitPinResponse**](ChargeSubmitPinResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

