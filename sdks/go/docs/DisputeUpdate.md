# DisputeUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RefundAmount** | **int32** | The amount to refund, in the subunit of your currency | 
**UploadedFilename** | Pointer to **string** | Filename of attachment returned via response from the Dispute upload URL | [optional] 

## Methods

### NewDisputeUpdate

`func NewDisputeUpdate(refundAmount int32, ) *DisputeUpdate`

NewDisputeUpdate instantiates a new DisputeUpdate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDisputeUpdateWithDefaults

`func NewDisputeUpdateWithDefaults() *DisputeUpdate`

NewDisputeUpdateWithDefaults instantiates a new DisputeUpdate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRefundAmount

`func (o *DisputeUpdate) GetRefundAmount() int32`

GetRefundAmount returns the RefundAmount field if non-nil, zero value otherwise.

### GetRefundAmountOk

`func (o *DisputeUpdate) GetRefundAmountOk() (*int32, bool)`

GetRefundAmountOk returns a tuple with the RefundAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundAmount

`func (o *DisputeUpdate) SetRefundAmount(v int32)`

SetRefundAmount sets RefundAmount field to given value.


### GetUploadedFilename

`func (o *DisputeUpdate) GetUploadedFilename() string`

GetUploadedFilename returns the UploadedFilename field if non-nil, zero value otherwise.

### GetUploadedFilenameOk

`func (o *DisputeUpdate) GetUploadedFilenameOk() (*string, bool)`

GetUploadedFilenameOk returns a tuple with the UploadedFilename field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUploadedFilename

`func (o *DisputeUpdate) SetUploadedFilename(v string)`

SetUploadedFilename sets UploadedFilename field to given value.

### HasUploadedFilename

`func (o *DisputeUpdate) HasUploadedFilename() bool`

HasUploadedFilename returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


