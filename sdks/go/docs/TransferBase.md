# TransferBase

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | **int32** | Amount to transfer in kobo if currency is NGN and pesewas if currency is GHS. | 
**Recipient** | **string** | The transfer recipient&#39;s code | 
**Reference** | **string** | To ensure idempotency, you need to provide e a unique identifier for the request.  The identifier should be a lowercase alphanumeric string with only -,_  symbols allowed.  | 
**Reason** | Pointer to **string** | The reason or narration for the transfer. | [optional] 

## Methods

### NewTransferBase

`func NewTransferBase(amount int32, recipient string, reference string, ) *TransferBase`

NewTransferBase instantiates a new TransferBase object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransferBaseWithDefaults

`func NewTransferBaseWithDefaults() *TransferBase`

NewTransferBaseWithDefaults instantiates a new TransferBase object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *TransferBase) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *TransferBase) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *TransferBase) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetRecipient

`func (o *TransferBase) GetRecipient() string`

GetRecipient returns the Recipient field if non-nil, zero value otherwise.

### GetRecipientOk

`func (o *TransferBase) GetRecipientOk() (*string, bool)`

GetRecipientOk returns a tuple with the Recipient field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipient

`func (o *TransferBase) SetRecipient(v string)`

SetRecipient sets Recipient field to given value.


### GetReference

`func (o *TransferBase) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *TransferBase) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *TransferBase) SetReference(v string)`

SetReference sets Reference field to given value.


### GetReason

`func (o *TransferBase) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *TransferBase) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *TransferBase) SetReason(v string)`

SetReason sets Reason field to given value.

### HasReason

`func (o *TransferBase) HasReason() bool`

HasReason returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


