# TransferInitiate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | **int32** | Amount to transfer in kobo if currency is NGN and pesewas if currency is GHS. | 
**Recipient** | **string** | The transfer recipient&#39;s code | 
**Reference** | **string** | To ensure idempotency, you need to provide e a unique identifier for the request.  The identifier should be a lowercase alphanumeric string with only -,_  symbols allowed.  | 
**Reason** | Pointer to **string** | The reason or narration for the transfer. | [optional] 
**Source** | **string** | The source of funds to send from | [default to "balance"]
**Currency** | Pointer to **string** | Specify the currency of the transfer. | [optional] [default to "NGN"]

## Methods

### NewTransferInitiate

`func NewTransferInitiate(amount int32, recipient string, reference string, source string, ) *TransferInitiate`

NewTransferInitiate instantiates a new TransferInitiate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransferInitiateWithDefaults

`func NewTransferInitiateWithDefaults() *TransferInitiate`

NewTransferInitiateWithDefaults instantiates a new TransferInitiate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *TransferInitiate) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *TransferInitiate) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *TransferInitiate) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetRecipient

`func (o *TransferInitiate) GetRecipient() string`

GetRecipient returns the Recipient field if non-nil, zero value otherwise.

### GetRecipientOk

`func (o *TransferInitiate) GetRecipientOk() (*string, bool)`

GetRecipientOk returns a tuple with the Recipient field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipient

`func (o *TransferInitiate) SetRecipient(v string)`

SetRecipient sets Recipient field to given value.


### GetReference

`func (o *TransferInitiate) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *TransferInitiate) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *TransferInitiate) SetReference(v string)`

SetReference sets Reference field to given value.


### GetReason

`func (o *TransferInitiate) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *TransferInitiate) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *TransferInitiate) SetReason(v string)`

SetReason sets Reason field to given value.

### HasReason

`func (o *TransferInitiate) HasReason() bool`

HasReason returns a boolean if a field has been set.

### GetSource

`func (o *TransferInitiate) GetSource() string`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *TransferInitiate) GetSourceOk() (*string, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *TransferInitiate) SetSource(v string)`

SetSource sets Source field to given value.


### GetCurrency

`func (o *TransferInitiate) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *TransferInitiate) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *TransferInitiate) SetCurrency(v string)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *TransferInitiate) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


