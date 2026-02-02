# \CustomerAPI

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CustomerCreate**](CustomerAPI.md#CustomerCreate) | **Post** /customer | Create Customer
[**CustomerDeactivateAuthorization**](CustomerAPI.md#CustomerDeactivateAuthorization) | **Post** /customer/authorization/deactivate | Deactivate Authorization
[**CustomerDirectDebitActivationCharge**](CustomerAPI.md#CustomerDirectDebitActivationCharge) | **Put** /customer/{id}/directdebit-activation-charge | Direct Debit Activation Charge
[**CustomerFetch**](CustomerAPI.md#CustomerFetch) | **Get** /customer/{code} | Fetch Customer
[**CustomerFetchMandateAuthorizations**](CustomerAPI.md#CustomerFetchMandateAuthorizations) | **Get** /customer/{id}/directdebit-mandate-authorizations | Fetch Mandate Authorizations
[**CustomerInitializeAuthorization**](CustomerAPI.md#CustomerInitializeAuthorization) | **Post** /customer/authorization/initialize | Initialize Authorization
[**CustomerInitializeDirectDebit**](CustomerAPI.md#CustomerInitializeDirectDebit) | **Post** /customer/{id}/initialize-direct-debit | Initialize Direct Debit
[**CustomerList**](CustomerAPI.md#CustomerList) | **Get** /customer | List Customers
[**CustomerRiskAction**](CustomerAPI.md#CustomerRiskAction) | **Post** /customer/set_risk_action | Set Risk Action
[**CustomerUpdate**](CustomerAPI.md#CustomerUpdate) | **Put** /customer/{code} | Update Customer
[**CustomerValidate**](CustomerAPI.md#CustomerValidate) | **Post** /customer/{code}/identification | Validate Customer
[**CustomerVerifyAuthorization**](CustomerAPI.md#CustomerVerifyAuthorization) | **Get** /customer/authorization/verify/{reference} | Verify Authorization



## CustomerCreate

> CustomerCreateResponse CustomerCreate(ctx).CustomerCreate(customerCreate).Execute()

Create Customer



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
    customerCreate := *openapiclient.NewCustomerCreate("Email_example") // CustomerCreate |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomerAPI.CustomerCreate(context.Background()).CustomerCreate(customerCreate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CustomerAPI.CustomerCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CustomerCreate`: CustomerCreateResponse
    fmt.Fprintf(os.Stdout, "Response from `CustomerAPI.CustomerCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCustomerCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerCreate** | [**CustomerCreate**](CustomerCreate.md) |  | 

### Return type

[**CustomerCreateResponse**](CustomerCreateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CustomerDeactivateAuthorization

> CustomerDeactivateAuthorizationResponse CustomerDeactivateAuthorization(ctx).CustomerDeactivateAuthorization(customerDeactivateAuthorization).Execute()

Deactivate Authorization



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
    customerDeactivateAuthorization := *openapiclient.NewCustomerDeactivateAuthorization("AuthorizationCode_example") // CustomerDeactivateAuthorization |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomerAPI.CustomerDeactivateAuthorization(context.Background()).CustomerDeactivateAuthorization(customerDeactivateAuthorization).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CustomerAPI.CustomerDeactivateAuthorization``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CustomerDeactivateAuthorization`: CustomerDeactivateAuthorizationResponse
    fmt.Fprintf(os.Stdout, "Response from `CustomerAPI.CustomerDeactivateAuthorization`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCustomerDeactivateAuthorizationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerDeactivateAuthorization** | [**CustomerDeactivateAuthorization**](CustomerDeactivateAuthorization.md) |  | 

### Return type

[**CustomerDeactivateAuthorizationResponse**](CustomerDeactivateAuthorizationResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CustomerDirectDebitActivationCharge

> CustomerDirectDebitActivationChargeResponse CustomerDirectDebitActivationCharge(ctx, id).CustomerDirectDebitActivationChargeRequest(customerDirectDebitActivationChargeRequest).Execute()

Direct Debit Activation Charge



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
    id := int32(297346561) // int32 | The customer ID attached to the authorization
    customerDirectDebitActivationChargeRequest := *openapiclient.NewCustomerDirectDebitActivationChargeRequest(int32(1069309917)) // CustomerDirectDebitActivationChargeRequest |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomerAPI.CustomerDirectDebitActivationCharge(context.Background(), id).CustomerDirectDebitActivationChargeRequest(customerDirectDebitActivationChargeRequest).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CustomerAPI.CustomerDirectDebitActivationCharge``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CustomerDirectDebitActivationCharge`: CustomerDirectDebitActivationChargeResponse
    fmt.Fprintf(os.Stdout, "Response from `CustomerAPI.CustomerDirectDebitActivationCharge`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int32** | The customer ID attached to the authorization | 

### Other Parameters

Other parameters are passed through a pointer to a apiCustomerDirectDebitActivationChargeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **customerDirectDebitActivationChargeRequest** | [**CustomerDirectDebitActivationChargeRequest**](CustomerDirectDebitActivationChargeRequest.md) |  | 

### Return type

[**CustomerDirectDebitActivationChargeResponse**](CustomerDirectDebitActivationChargeResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CustomerFetch

> CustomerFetchResponse CustomerFetch(ctx, code).Execute()

Fetch Customer



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
    code := "CUS_c6wqvwmvwopw4ms" // string | The code for the customer gotten from the response of the customer creation

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomerAPI.CustomerFetch(context.Background(), code).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CustomerAPI.CustomerFetch``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CustomerFetch`: CustomerFetchResponse
    fmt.Fprintf(os.Stdout, "Response from `CustomerAPI.CustomerFetch`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**code** | **string** | The code for the customer gotten from the response of the customer creation | 

### Other Parameters

Other parameters are passed through a pointer to a apiCustomerFetchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**CustomerFetchResponse**](CustomerFetchResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CustomerFetchMandateAuthorizations

> CustomerFetchMandateAuthorizationsResponse CustomerFetchMandateAuthorizations(ctx, id).Execute()

Fetch Mandate Authorizations



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
    id := int32(297346561) // int32 | The customer ID for the authorizations to fetch

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomerAPI.CustomerFetchMandateAuthorizations(context.Background(), id).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CustomerAPI.CustomerFetchMandateAuthorizations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CustomerFetchMandateAuthorizations`: CustomerFetchMandateAuthorizationsResponse
    fmt.Fprintf(os.Stdout, "Response from `CustomerAPI.CustomerFetchMandateAuthorizations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int32** | The customer ID for the authorizations to fetch | 

### Other Parameters

Other parameters are passed through a pointer to a apiCustomerFetchMandateAuthorizationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


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


## CustomerInitializeAuthorization

> CustomerAuthorizationInitializeResponse CustomerInitializeAuthorization(ctx).CustomerAuthorizationInitializeRequest(customerAuthorizationInitializeRequest).Execute()

Initialize Authorization



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
    customerAuthorizationInitializeRequest := *openapiclient.NewCustomerAuthorizationInitializeRequest("ravi@demo.com", "direct_debit") // CustomerAuthorizationInitializeRequest | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomerAPI.CustomerInitializeAuthorization(context.Background()).CustomerAuthorizationInitializeRequest(customerAuthorizationInitializeRequest).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CustomerAPI.CustomerInitializeAuthorization``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CustomerInitializeAuthorization`: CustomerAuthorizationInitializeResponse
    fmt.Fprintf(os.Stdout, "Response from `CustomerAPI.CustomerInitializeAuthorization`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCustomerInitializeAuthorizationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerAuthorizationInitializeRequest** | [**CustomerAuthorizationInitializeRequest**](CustomerAuthorizationInitializeRequest.md) |  | 

### Return type

[**CustomerAuthorizationInitializeResponse**](CustomerAuthorizationInitializeResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CustomerInitializeDirectDebit

> CustomerInitializeDirectDebitResponse CustomerInitializeDirectDebit(ctx, id).CustomerInitializeDirectDebitRequest(customerInitializeDirectDebitRequest).Execute()

Initialize Direct Debit



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
    id := int32(297346561) // int32 | The ID of the customer to initialize the direct debit for
    customerInitializeDirectDebitRequest := *openapiclient.NewCustomerInitializeDirectDebitRequest(*openapiclient.NewCustomerInitializeDirectDebitAccount("0123456789", "058"), *openapiclient.NewCustomerInitializeDirectDebitAddress("Some Where", "Ikeja", "Lagos")) // CustomerInitializeDirectDebitRequest |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomerAPI.CustomerInitializeDirectDebit(context.Background(), id).CustomerInitializeDirectDebitRequest(customerInitializeDirectDebitRequest).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CustomerAPI.CustomerInitializeDirectDebit``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CustomerInitializeDirectDebit`: CustomerInitializeDirectDebitResponse
    fmt.Fprintf(os.Stdout, "Response from `CustomerAPI.CustomerInitializeDirectDebit`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int32** | The ID of the customer to initialize the direct debit for | 

### Other Parameters

Other parameters are passed through a pointer to a apiCustomerInitializeDirectDebitRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **customerInitializeDirectDebitRequest** | [**CustomerInitializeDirectDebitRequest**](CustomerInitializeDirectDebitRequest.md) |  | 

### Return type

[**CustomerInitializeDirectDebitResponse**](CustomerInitializeDirectDebitResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CustomerList

> CustomerListResponse CustomerList(ctx).UseCursor(useCursor).Next(next).Previous(previous).From(from).To(to).PerPage(perPage).Page(page).Execute()

List Customers



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
    useCursor := true // bool | A flag to indicate if cursor based pagination should be used (optional)
    next := "next_example" // string | An alphanumeric value returned for every cursor based retrieval, used to retrieve the next set of data  (optional)
    previous := "previous_example" // string | An alphanumeric value returned for every cursor based retrieval, used to retrieve the previous set of data  (optional)
    from := time.Now() // time.Time | The start date (optional)
    to := time.Now() // time.Time | The end date (optional)
    perPage := "perPage_example" // string | The number of records to fetch per request (optional)
    page := "page_example" // string | The offset to retrieve data from (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomerAPI.CustomerList(context.Background()).UseCursor(useCursor).Next(next).Previous(previous).From(from).To(to).PerPage(perPage).Page(page).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CustomerAPI.CustomerList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CustomerList`: CustomerListResponse
    fmt.Fprintf(os.Stdout, "Response from `CustomerAPI.CustomerList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCustomerListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **useCursor** | **bool** | A flag to indicate if cursor based pagination should be used | 
 **next** | **string** | An alphanumeric value returned for every cursor based retrieval, used to retrieve the next set of data  | 
 **previous** | **string** | An alphanumeric value returned for every cursor based retrieval, used to retrieve the previous set of data  | 
 **from** | **time.Time** | The start date | 
 **to** | **time.Time** | The end date | 
 **perPage** | **string** | The number of records to fetch per request | 
 **page** | **string** | The offset to retrieve data from | 

### Return type

[**CustomerListResponse**](CustomerListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CustomerRiskAction

> CustomerWhitelistBlacklistResponse CustomerRiskAction(ctx).CustomerRiskAction(customerRiskAction).Execute()

Set Risk Action



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
    customerRiskAction := *openapiclient.NewCustomerRiskAction("Customer_example") // CustomerRiskAction |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomerAPI.CustomerRiskAction(context.Background()).CustomerRiskAction(customerRiskAction).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CustomerAPI.CustomerRiskAction``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CustomerRiskAction`: CustomerWhitelistBlacklistResponse
    fmt.Fprintf(os.Stdout, "Response from `CustomerAPI.CustomerRiskAction`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCustomerRiskActionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerRiskAction** | [**CustomerRiskAction**](CustomerRiskAction.md) |  | 

### Return type

[**CustomerWhitelistBlacklistResponse**](CustomerWhitelistBlacklistResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CustomerUpdate

> CustomerUpdateResponse CustomerUpdate(ctx, code).CustomerUpdate(customerUpdate).Execute()

Update Customer



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
    code := "CUS_c6wqvwmvwopw4ms" // string | The code for the customer gotten from the response of the customer creation
    customerUpdate := *openapiclient.NewCustomerUpdate() // CustomerUpdate |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomerAPI.CustomerUpdate(context.Background(), code).CustomerUpdate(customerUpdate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CustomerAPI.CustomerUpdate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CustomerUpdate`: CustomerUpdateResponse
    fmt.Fprintf(os.Stdout, "Response from `CustomerAPI.CustomerUpdate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**code** | **string** | The code for the customer gotten from the response of the customer creation | 

### Other Parameters

Other parameters are passed through a pointer to a apiCustomerUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **customerUpdate** | [**CustomerUpdate**](CustomerUpdate.md) |  | 

### Return type

[**CustomerUpdateResponse**](CustomerUpdateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CustomerValidate

> CustomerValidateResponse CustomerValidate(ctx, code).CustomerValidate(customerValidate).Execute()

Validate Customer



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
    code := "CUS_c6wqvwmvwopw4ms" // string | The code for the customer gotten from the response of the customer creation
    customerValidate := *openapiclient.NewCustomerValidate("FirstName_example", "LastName_example", "Type_example", "Country_example", "Bvn_example", "BankCode_example", "AccountNumber_example") // CustomerValidate |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomerAPI.CustomerValidate(context.Background(), code).CustomerValidate(customerValidate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CustomerAPI.CustomerValidate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CustomerValidate`: CustomerValidateResponse
    fmt.Fprintf(os.Stdout, "Response from `CustomerAPI.CustomerValidate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**code** | **string** | The code for the customer gotten from the response of the customer creation | 

### Other Parameters

Other parameters are passed through a pointer to a apiCustomerValidateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **customerValidate** | [**CustomerValidate**](CustomerValidate.md) |  | 

### Return type

[**CustomerValidateResponse**](CustomerValidateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CustomerVerifyAuthorization

> CustomerAuthorizationVerifyResponse CustomerVerifyAuthorization(ctx, reference).Execute()

Verify Authorization



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
    reference := "dfbzfotsrbv4n5s82t4mp5b5mfn51h" // string | The reference returned in the initialization response

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomerAPI.CustomerVerifyAuthorization(context.Background(), reference).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CustomerAPI.CustomerVerifyAuthorization``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CustomerVerifyAuthorization`: CustomerAuthorizationVerifyResponse
    fmt.Fprintf(os.Stdout, "Response from `CustomerAPI.CustomerVerifyAuthorization`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reference** | **string** | The reference returned in the initialization response | 

### Other Parameters

Other parameters are passed through a pointer to a apiCustomerVerifyAuthorizationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**CustomerAuthorizationVerifyResponse**](CustomerAuthorizationVerifyResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

