# TransferRecipientBulkCreateResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Success** | **[]map[string]interface{}** |  | 
**Errors** | [**[]TransferRecipientErrorsArray**](TransferRecipientErrorsArray.md) |  | 

## Methods

### NewTransferRecipientBulkCreateResponseData

`func NewTransferRecipientBulkCreateResponseData(success []map[string]interface{}, errors []TransferRecipientErrorsArray, ) *TransferRecipientBulkCreateResponseData`

NewTransferRecipientBulkCreateResponseData instantiates a new TransferRecipientBulkCreateResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransferRecipientBulkCreateResponseDataWithDefaults

`func NewTransferRecipientBulkCreateResponseDataWithDefaults() *TransferRecipientBulkCreateResponseData`

NewTransferRecipientBulkCreateResponseDataWithDefaults instantiates a new TransferRecipientBulkCreateResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSuccess

`func (o *TransferRecipientBulkCreateResponseData) GetSuccess() []map[string]interface{}`

GetSuccess returns the Success field if non-nil, zero value otherwise.

### GetSuccessOk

`func (o *TransferRecipientBulkCreateResponseData) GetSuccessOk() (*[]map[string]interface{}, bool)`

GetSuccessOk returns a tuple with the Success field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccess

`func (o *TransferRecipientBulkCreateResponseData) SetSuccess(v []map[string]interface{})`

SetSuccess sets Success field to given value.


### GetErrors

`func (o *TransferRecipientBulkCreateResponseData) GetErrors() []TransferRecipientErrorsArray`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *TransferRecipientBulkCreateResponseData) GetErrorsOk() (*[]TransferRecipientErrorsArray, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *TransferRecipientBulkCreateResponseData) SetErrors(v []TransferRecipientErrorsArray)`

SetErrors sets Errors field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


