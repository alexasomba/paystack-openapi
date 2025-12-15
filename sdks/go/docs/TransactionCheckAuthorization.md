# TransactionCheckAuthorization

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Email** | **string** | Customer&#39;s email address | 
**Amount** | **int32** | Amount should be in kobo if currency is NGN, pesewas if currency is GHS, and cents if currency is ZAR | 
**AuthorizationCode** | Pointer to **string** | Valid authorization code to charge | [optional] 
**Currency** | Pointer to **string** | The transaction currency | [optional] 

## Methods

### NewTransactionCheckAuthorization

`func NewTransactionCheckAuthorization(email string, amount int32, ) *TransactionCheckAuthorization`

NewTransactionCheckAuthorization instantiates a new TransactionCheckAuthorization object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionCheckAuthorizationWithDefaults

`func NewTransactionCheckAuthorizationWithDefaults() *TransactionCheckAuthorization`

NewTransactionCheckAuthorizationWithDefaults instantiates a new TransactionCheckAuthorization object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmail

`func (o *TransactionCheckAuthorization) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *TransactionCheckAuthorization) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *TransactionCheckAuthorization) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetAmount

`func (o *TransactionCheckAuthorization) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *TransactionCheckAuthorization) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *TransactionCheckAuthorization) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetAuthorizationCode

`func (o *TransactionCheckAuthorization) GetAuthorizationCode() string`

GetAuthorizationCode returns the AuthorizationCode field if non-nil, zero value otherwise.

### GetAuthorizationCodeOk

`func (o *TransactionCheckAuthorization) GetAuthorizationCodeOk() (*string, bool)`

GetAuthorizationCodeOk returns a tuple with the AuthorizationCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizationCode

`func (o *TransactionCheckAuthorization) SetAuthorizationCode(v string)`

SetAuthorizationCode sets AuthorizationCode field to given value.

### HasAuthorizationCode

`func (o *TransactionCheckAuthorization) HasAuthorizationCode() bool`

HasAuthorizationCode returns a boolean if a field has been set.

### GetCurrency

`func (o *TransactionCheckAuthorization) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *TransactionCheckAuthorization) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *TransactionCheckAuthorization) SetCurrency(v string)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *TransactionCheckAuthorization) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


