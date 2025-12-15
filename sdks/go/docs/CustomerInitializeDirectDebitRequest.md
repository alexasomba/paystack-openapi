# CustomerInitializeDirectDebitRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Account** | [**CustomerInitializeDirectDebitAccount**](CustomerInitializeDirectDebitAccount.md) |  | 
**Address** | [**CustomerInitializeDirectDebitAddress**](CustomerInitializeDirectDebitAddress.md) |  | 

## Methods

### NewCustomerInitializeDirectDebitRequest

`func NewCustomerInitializeDirectDebitRequest(account CustomerInitializeDirectDebitAccount, address CustomerInitializeDirectDebitAddress, ) *CustomerInitializeDirectDebitRequest`

NewCustomerInitializeDirectDebitRequest instantiates a new CustomerInitializeDirectDebitRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomerInitializeDirectDebitRequestWithDefaults

`func NewCustomerInitializeDirectDebitRequestWithDefaults() *CustomerInitializeDirectDebitRequest`

NewCustomerInitializeDirectDebitRequestWithDefaults instantiates a new CustomerInitializeDirectDebitRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccount

`func (o *CustomerInitializeDirectDebitRequest) GetAccount() CustomerInitializeDirectDebitAccount`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *CustomerInitializeDirectDebitRequest) GetAccountOk() (*CustomerInitializeDirectDebitAccount, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *CustomerInitializeDirectDebitRequest) SetAccount(v CustomerInitializeDirectDebitAccount)`

SetAccount sets Account field to given value.


### GetAddress

`func (o *CustomerInitializeDirectDebitRequest) GetAddress() CustomerInitializeDirectDebitAddress`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *CustomerInitializeDirectDebitRequest) GetAddressOk() (*CustomerInitializeDirectDebitAddress, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *CustomerInitializeDirectDebitRequest) SetAddress(v CustomerInitializeDirectDebitAddress)`

SetAddress sets Address field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


