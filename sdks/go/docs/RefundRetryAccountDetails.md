# RefundRetryAccountDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Currency** | **string** | The currency of the customer&#39;s bank account. It should be the same as the currency the payment was made | 
**AccountNumber** | **string** | The customer&#39;s account number | 
**BankId** | **string** | The ID representing the customer&#39;s bank. You can get the list of bank IDs by calling the List Banks endpoint. | 

## Methods

### NewRefundRetryAccountDetails

`func NewRefundRetryAccountDetails(currency string, accountNumber string, bankId string, ) *RefundRetryAccountDetails`

NewRefundRetryAccountDetails instantiates a new RefundRetryAccountDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRefundRetryAccountDetailsWithDefaults

`func NewRefundRetryAccountDetailsWithDefaults() *RefundRetryAccountDetails`

NewRefundRetryAccountDetailsWithDefaults instantiates a new RefundRetryAccountDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCurrency

`func (o *RefundRetryAccountDetails) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *RefundRetryAccountDetails) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *RefundRetryAccountDetails) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetAccountNumber

`func (o *RefundRetryAccountDetails) GetAccountNumber() string`

GetAccountNumber returns the AccountNumber field if non-nil, zero value otherwise.

### GetAccountNumberOk

`func (o *RefundRetryAccountDetails) GetAccountNumberOk() (*string, bool)`

GetAccountNumberOk returns a tuple with the AccountNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountNumber

`func (o *RefundRetryAccountDetails) SetAccountNumber(v string)`

SetAccountNumber sets AccountNumber field to given value.


### GetBankId

`func (o *RefundRetryAccountDetails) GetBankId() string`

GetBankId returns the BankId field if non-nil, zero value otherwise.

### GetBankIdOk

`func (o *RefundRetryAccountDetails) GetBankIdOk() (*string, bool)`

GetBankIdOk returns a tuple with the BankId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBankId

`func (o *RefundRetryAccountDetails) SetBankId(v string)`

SetBankId sets BankId field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


