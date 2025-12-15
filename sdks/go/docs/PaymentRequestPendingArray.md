# PaymentRequestPendingArray

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Currency** | **string** |  | 
**Amount** | **int32** |  | 

## Methods

### NewPaymentRequestPendingArray

`func NewPaymentRequestPendingArray(currency string, amount int32, ) *PaymentRequestPendingArray`

NewPaymentRequestPendingArray instantiates a new PaymentRequestPendingArray object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaymentRequestPendingArrayWithDefaults

`func NewPaymentRequestPendingArrayWithDefaults() *PaymentRequestPendingArray`

NewPaymentRequestPendingArrayWithDefaults instantiates a new PaymentRequestPendingArray object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCurrency

`func (o *PaymentRequestPendingArray) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *PaymentRequestPendingArray) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *PaymentRequestPendingArray) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetAmount

`func (o *PaymentRequestPendingArray) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *PaymentRequestPendingArray) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *PaymentRequestPendingArray) SetAmount(v int32)`

SetAmount sets Amount field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


