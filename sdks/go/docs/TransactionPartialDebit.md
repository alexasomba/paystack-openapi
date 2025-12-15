# TransactionPartialDebit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Email** | **string** | Customer&#39;s email address | 
**Amount** | **int64** | Specified in the lowest denomination of your currency | 
**AuthorizationCode** | **string** | Valid authorization code to charge | 
**Currency** | [**Currency**](Currency.md) |  | 
**AtLeast** | Pointer to **string** | Minimum amount to charge | [optional] 
**Reference** | Pointer to **string** | Unique transaction reference. Only -, ., &#x3D; and alphanumeric characters allowed. | [optional] 

## Methods

### NewTransactionPartialDebit

`func NewTransactionPartialDebit(email string, amount int64, authorizationCode string, currency Currency, ) *TransactionPartialDebit`

NewTransactionPartialDebit instantiates a new TransactionPartialDebit object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionPartialDebitWithDefaults

`func NewTransactionPartialDebitWithDefaults() *TransactionPartialDebit`

NewTransactionPartialDebitWithDefaults instantiates a new TransactionPartialDebit object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmail

`func (o *TransactionPartialDebit) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *TransactionPartialDebit) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *TransactionPartialDebit) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetAmount

`func (o *TransactionPartialDebit) GetAmount() int64`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *TransactionPartialDebit) GetAmountOk() (*int64, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *TransactionPartialDebit) SetAmount(v int64)`

SetAmount sets Amount field to given value.


### GetAuthorizationCode

`func (o *TransactionPartialDebit) GetAuthorizationCode() string`

GetAuthorizationCode returns the AuthorizationCode field if non-nil, zero value otherwise.

### GetAuthorizationCodeOk

`func (o *TransactionPartialDebit) GetAuthorizationCodeOk() (*string, bool)`

GetAuthorizationCodeOk returns a tuple with the AuthorizationCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizationCode

`func (o *TransactionPartialDebit) SetAuthorizationCode(v string)`

SetAuthorizationCode sets AuthorizationCode field to given value.


### GetCurrency

`func (o *TransactionPartialDebit) GetCurrency() Currency`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *TransactionPartialDebit) GetCurrencyOk() (*Currency, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *TransactionPartialDebit) SetCurrency(v Currency)`

SetCurrency sets Currency field to given value.


### GetAtLeast

`func (o *TransactionPartialDebit) GetAtLeast() string`

GetAtLeast returns the AtLeast field if non-nil, zero value otherwise.

### GetAtLeastOk

`func (o *TransactionPartialDebit) GetAtLeastOk() (*string, bool)`

GetAtLeastOk returns a tuple with the AtLeast field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAtLeast

`func (o *TransactionPartialDebit) SetAtLeast(v string)`

SetAtLeast sets AtLeast field to given value.

### HasAtLeast

`func (o *TransactionPartialDebit) HasAtLeast() bool`

HasAtLeast returns a boolean if a field has been set.

### GetReference

`func (o *TransactionPartialDebit) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *TransactionPartialDebit) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *TransactionPartialDebit) SetReference(v string)`

SetReference sets Reference field to given value.

### HasReference

`func (o *TransactionPartialDebit) HasReference() bool`

HasReference returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


