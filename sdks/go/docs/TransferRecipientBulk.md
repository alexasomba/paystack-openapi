# TransferRecipientBulk

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Batch** | [**[]TransferRecipientCreate**](TransferRecipientCreate.md) | A list of transfer recipient object. | 

## Methods

### NewTransferRecipientBulk

`func NewTransferRecipientBulk(batch []TransferRecipientCreate, ) *TransferRecipientBulk`

NewTransferRecipientBulk instantiates a new TransferRecipientBulk object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransferRecipientBulkWithDefaults

`func NewTransferRecipientBulkWithDefaults() *TransferRecipientBulk`

NewTransferRecipientBulkWithDefaults instantiates a new TransferRecipientBulk object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBatch

`func (o *TransferRecipientBulk) GetBatch() []TransferRecipientCreate`

GetBatch returns the Batch field if non-nil, zero value otherwise.

### GetBatchOk

`func (o *TransferRecipientBulk) GetBatchOk() (*[]TransferRecipientCreate, bool)`

GetBatchOk returns a tuple with the Batch field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatch

`func (o *TransferRecipientBulk) SetBatch(v []TransferRecipientCreate)`

SetBatch sets Batch field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


