# Bank

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Customer&#39;s bank code | [optional] 
**AccountNumber** | Pointer to **string** | Customer&#39;s account number | [optional] 

## Methods

### NewBank

`func NewBank() *Bank`

NewBank instantiates a new Bank object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBankWithDefaults

`func NewBankWithDefaults() *Bank`

NewBankWithDefaults instantiates a new Bank object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *Bank) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *Bank) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *Bank) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *Bank) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetAccountNumber

`func (o *Bank) GetAccountNumber() string`

GetAccountNumber returns the AccountNumber field if non-nil, zero value otherwise.

### GetAccountNumberOk

`func (o *Bank) GetAccountNumberOk() (*string, bool)`

GetAccountNumberOk returns a tuple with the AccountNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountNumber

`func (o *Bank) SetAccountNumber(v string)`

SetAccountNumber sets AccountNumber field to given value.

### HasAccountNumber

`func (o *Bank) HasAccountNumber() bool`

HasAccountNumber returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


