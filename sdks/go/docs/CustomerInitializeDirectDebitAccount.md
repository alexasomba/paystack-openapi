# CustomerInitializeDirectDebitAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Number** | **string** | The customer&#39;s account number | 
**BankCode** | **string** | The code representing the customer&#39;s bank | 

## Methods

### NewCustomerInitializeDirectDebitAccount

`func NewCustomerInitializeDirectDebitAccount(number string, bankCode string, ) *CustomerInitializeDirectDebitAccount`

NewCustomerInitializeDirectDebitAccount instantiates a new CustomerInitializeDirectDebitAccount object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomerInitializeDirectDebitAccountWithDefaults

`func NewCustomerInitializeDirectDebitAccountWithDefaults() *CustomerInitializeDirectDebitAccount`

NewCustomerInitializeDirectDebitAccountWithDefaults instantiates a new CustomerInitializeDirectDebitAccount object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNumber

`func (o *CustomerInitializeDirectDebitAccount) GetNumber() string`

GetNumber returns the Number field if non-nil, zero value otherwise.

### GetNumberOk

`func (o *CustomerInitializeDirectDebitAccount) GetNumberOk() (*string, bool)`

GetNumberOk returns a tuple with the Number field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumber

`func (o *CustomerInitializeDirectDebitAccount) SetNumber(v string)`

SetNumber sets Number field to given value.


### GetBankCode

`func (o *CustomerInitializeDirectDebitAccount) GetBankCode() string`

GetBankCode returns the BankCode field if non-nil, zero value otherwise.

### GetBankCodeOk

`func (o *CustomerInitializeDirectDebitAccount) GetBankCodeOk() (*string, bool)`

GetBankCodeOk returns a tuple with the BankCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBankCode

`func (o *CustomerInitializeDirectDebitAccount) SetBankCode(v string)`

SetBankCode sets BankCode field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


