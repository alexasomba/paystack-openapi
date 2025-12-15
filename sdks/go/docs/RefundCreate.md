# RefundCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Transaction** | **string** | The reference of a previosuly completed transaction | 
**Amount** | Pointer to **int32** | Amount to be refunded to the customer. It cannot be more than the original transaction amount | [optional] 
**Currency** | Pointer to **string** | Three-letter ISO currency | [optional] 
**CustomerNote** | Pointer to **string** | Customer reason | [optional] 
**MerchantNote** | Pointer to **string** | Merchant reason | [optional] 

## Methods

### NewRefundCreate

`func NewRefundCreate(transaction string, ) *RefundCreate`

NewRefundCreate instantiates a new RefundCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRefundCreateWithDefaults

`func NewRefundCreateWithDefaults() *RefundCreate`

NewRefundCreateWithDefaults instantiates a new RefundCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransaction

`func (o *RefundCreate) GetTransaction() string`

GetTransaction returns the Transaction field if non-nil, zero value otherwise.

### GetTransactionOk

`func (o *RefundCreate) GetTransactionOk() (*string, bool)`

GetTransactionOk returns a tuple with the Transaction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransaction

`func (o *RefundCreate) SetTransaction(v string)`

SetTransaction sets Transaction field to given value.


### GetAmount

`func (o *RefundCreate) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *RefundCreate) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *RefundCreate) SetAmount(v int32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *RefundCreate) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetCurrency

`func (o *RefundCreate) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *RefundCreate) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *RefundCreate) SetCurrency(v string)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *RefundCreate) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### GetCustomerNote

`func (o *RefundCreate) GetCustomerNote() string`

GetCustomerNote returns the CustomerNote field if non-nil, zero value otherwise.

### GetCustomerNoteOk

`func (o *RefundCreate) GetCustomerNoteOk() (*string, bool)`

GetCustomerNoteOk returns a tuple with the CustomerNote field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerNote

`func (o *RefundCreate) SetCustomerNote(v string)`

SetCustomerNote sets CustomerNote field to given value.

### HasCustomerNote

`func (o *RefundCreate) HasCustomerNote() bool`

HasCustomerNote returns a boolean if a field has been set.

### GetMerchantNote

`func (o *RefundCreate) GetMerchantNote() string`

GetMerchantNote returns the MerchantNote field if non-nil, zero value otherwise.

### GetMerchantNoteOk

`func (o *RefundCreate) GetMerchantNoteOk() (*string, bool)`

GetMerchantNoteOk returns a tuple with the MerchantNote field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMerchantNote

`func (o *RefundCreate) SetMerchantNote(v string)`

SetMerchantNote sets MerchantNote field to given value.

### HasMerchantNote

`func (o *RefundCreate) HasMerchantNote() bool`

HasMerchantNote returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


