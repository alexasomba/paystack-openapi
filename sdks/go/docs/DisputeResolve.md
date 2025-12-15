# DisputeResolve

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Resolution** | **string** | Dispute resolution. Accepted values, merchant-accepted, declined | 
**Message** | **string** | Reason for resolving | 
**RefundAmount** | **int32** | The amount to refund, in the subunit of your integration currency | 
**UploadedFilename** | **string** | Filename of attachment returned via response from the Dispute upload URL | 
**Evidence** | Pointer to **int32** | Evidence Id for fraud claims | [optional] 

## Methods

### NewDisputeResolve

`func NewDisputeResolve(resolution string, message string, refundAmount int32, uploadedFilename string, ) *DisputeResolve`

NewDisputeResolve instantiates a new DisputeResolve object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDisputeResolveWithDefaults

`func NewDisputeResolveWithDefaults() *DisputeResolve`

NewDisputeResolveWithDefaults instantiates a new DisputeResolve object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetResolution

`func (o *DisputeResolve) GetResolution() string`

GetResolution returns the Resolution field if non-nil, zero value otherwise.

### GetResolutionOk

`func (o *DisputeResolve) GetResolutionOk() (*string, bool)`

GetResolutionOk returns a tuple with the Resolution field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResolution

`func (o *DisputeResolve) SetResolution(v string)`

SetResolution sets Resolution field to given value.


### GetMessage

`func (o *DisputeResolve) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *DisputeResolve) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *DisputeResolve) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetRefundAmount

`func (o *DisputeResolve) GetRefundAmount() int32`

GetRefundAmount returns the RefundAmount field if non-nil, zero value otherwise.

### GetRefundAmountOk

`func (o *DisputeResolve) GetRefundAmountOk() (*int32, bool)`

GetRefundAmountOk returns a tuple with the RefundAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundAmount

`func (o *DisputeResolve) SetRefundAmount(v int32)`

SetRefundAmount sets RefundAmount field to given value.


### GetUploadedFilename

`func (o *DisputeResolve) GetUploadedFilename() string`

GetUploadedFilename returns the UploadedFilename field if non-nil, zero value otherwise.

### GetUploadedFilenameOk

`func (o *DisputeResolve) GetUploadedFilenameOk() (*string, bool)`

GetUploadedFilenameOk returns a tuple with the UploadedFilename field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUploadedFilename

`func (o *DisputeResolve) SetUploadedFilename(v string)`

SetUploadedFilename sets UploadedFilename field to given value.


### GetEvidence

`func (o *DisputeResolve) GetEvidence() int32`

GetEvidence returns the Evidence field if non-nil, zero value otherwise.

### GetEvidenceOk

`func (o *DisputeResolve) GetEvidenceOk() (*int32, bool)`

GetEvidenceOk returns a tuple with the Evidence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEvidence

`func (o *DisputeResolve) SetEvidence(v int32)`

SetEvidence sets Evidence field to given value.

### HasEvidence

`func (o *DisputeResolve) HasEvidence() bool`

HasEvidence returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


