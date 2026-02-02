# \BankAPI

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**BankList**](BankAPI.md#BankList) | **Get** /bank | List Banks
[**BankResolveAccountNumber**](BankAPI.md#BankResolveAccountNumber) | **Get** /bank/resolve | Resolve Account Number
[**BankValidateAccountNumber**](BankAPI.md#BankValidateAccountNumber) | **Post** /bank/validate | Validate Bank Account



## BankList

> MiscellaneousListBanksResponse BankList(ctx).Country(country).Currency(currency).UseCursor(useCursor).PerPage(perPage).Page(page).Next(next).Previous(previous).PayWithBankTransfer(payWithBankTransfer).PayWithBank(payWithBank).EnabledForVerification(enabledForVerification).Gateway(gateway).Type_(type_).IncludeNipSortCode(includeNipSortCode).Execute()

List Banks



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
    country := "nigeria" // string | The country from which to obtain the list of supported banks (optional)
    currency := "NGN" // string | The country from which to obtain the list of supported banks (optional)
    useCursor := true // bool | A flag to indicate if cursor based pagination should be used (optional)
    perPage := int32(56) // int32 | The number of records to fetch per request (optional)
    page := int32(56) // int32 | The offset to retrieve data from (optional)
    next := "next_example" // string | An alphanumeric value returned for every cursor based retrieval, used to retrieve the next set of data  (optional)
    previous := "previous_example" // string | An alphanumeric value returned for every cursor based retrieval, used to retrieve the previous set of data  (optional)
    payWithBankTransfer := true // bool | A flag to filter for available banks a customer can make a transfer to complete a payment (optional)
    payWithBank := true // bool | A flag to filter for banks a customer can pay directly from (optional)
    enabledForVerification := true // bool | A flag to filter the banks that are supported for account verification in South Africa. You need to combine this with either the `currency` or `country` filter.  (optional)
    gateway := "gateway_example" // string | The type of gateway for a Nigerian bank (optional)
    type_ := "type__example" // string | Type of financial channel (optional)
    includeNipSortCode := true // bool | A flag that returns Nigerian banks with their NIP institution code.  The returned value can be used in identifying institutions on NIP.  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BankAPI.BankList(context.Background()).Country(country).Currency(currency).UseCursor(useCursor).PerPage(perPage).Page(page).Next(next).Previous(previous).PayWithBankTransfer(payWithBankTransfer).PayWithBank(payWithBank).EnabledForVerification(enabledForVerification).Gateway(gateway).Type_(type_).IncludeNipSortCode(includeNipSortCode).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BankAPI.BankList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `BankList`: MiscellaneousListBanksResponse
    fmt.Fprintf(os.Stdout, "Response from `BankAPI.BankList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiBankListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **string** | The country from which to obtain the list of supported banks | 
 **currency** | **string** | The country from which to obtain the list of supported banks | 
 **useCursor** | **bool** | A flag to indicate if cursor based pagination should be used | 
 **perPage** | **int32** | The number of records to fetch per request | 
 **page** | **int32** | The offset to retrieve data from | 
 **next** | **string** | An alphanumeric value returned for every cursor based retrieval, used to retrieve the next set of data  | 
 **previous** | **string** | An alphanumeric value returned for every cursor based retrieval, used to retrieve the previous set of data  | 
 **payWithBankTransfer** | **bool** | A flag to filter for available banks a customer can make a transfer to complete a payment | 
 **payWithBank** | **bool** | A flag to filter for banks a customer can pay directly from | 
 **enabledForVerification** | **bool** | A flag to filter the banks that are supported for account verification in South Africa. You need to combine this with either the &#x60;currency&#x60; or &#x60;country&#x60; filter.  | 
 **gateway** | **string** | The type of gateway for a Nigerian bank | 
 **type_** | **string** | Type of financial channel | 
 **includeNipSortCode** | **bool** | A flag that returns Nigerian banks with their NIP institution code.  The returned value can be used in identifying institutions on NIP.  | 

### Return type

[**MiscellaneousListBanksResponse**](MiscellaneousListBanksResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## BankResolveAccountNumber

> VerificationResolveAccountNumberResponse BankResolveAccountNumber(ctx).AccountNumber(accountNumber).BankCode(bankCode).Execute()

Resolve Account Number



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
    accountNumber := int32(22728151) // int32 | The account number of interest (optional)
    bankCode := int32(63) // int32 | The bank code associated with the account number (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BankAPI.BankResolveAccountNumber(context.Background()).AccountNumber(accountNumber).BankCode(bankCode).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BankAPI.BankResolveAccountNumber``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `BankResolveAccountNumber`: VerificationResolveAccountNumberResponse
    fmt.Fprintf(os.Stdout, "Response from `BankAPI.BankResolveAccountNumber`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiBankResolveAccountNumberRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountNumber** | **int32** | The account number of interest | 
 **bankCode** | **int32** | The bank code associated with the account number | 

### Return type

[**VerificationResolveAccountNumberResponse**](VerificationResolveAccountNumberResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## BankValidateAccountNumber

> VerificationValidateAccountResponse BankValidateAccountNumber(ctx).BankValidateRequest(bankValidateRequest).Execute()

Validate Bank Account



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
    bankValidateRequest := *openapiclient.NewBankValidateRequest("AccountName_example", "AccountNumber_example", "AccountType_example", "BankCode_example", "CountryCode_example", "DocumentType_example") // BankValidateRequest |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BankAPI.BankValidateAccountNumber(context.Background()).BankValidateRequest(bankValidateRequest).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BankAPI.BankValidateAccountNumber``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `BankValidateAccountNumber`: VerificationValidateAccountResponse
    fmt.Fprintf(os.Stdout, "Response from `BankAPI.BankValidateAccountNumber`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiBankValidateAccountNumberRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bankValidateRequest** | [**BankValidateRequest**](BankValidateRequest.md) |  | 

### Return type

[**VerificationValidateAccountResponse**](VerificationValidateAccountResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

