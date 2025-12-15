# TransferRecipientErrorsArray

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | **string** |  | 
**Records** | [**[]ErrorRecordsArray**](ErrorRecordsArray.md) |  | 

## Methods

### NewTransferRecipientErrorsArray

`func NewTransferRecipientErrorsArray(message string, records []ErrorRecordsArray, ) *TransferRecipientErrorsArray`

NewTransferRecipientErrorsArray instantiates a new TransferRecipientErrorsArray object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransferRecipientErrorsArrayWithDefaults

`func NewTransferRecipientErrorsArrayWithDefaults() *TransferRecipientErrorsArray`

NewTransferRecipientErrorsArrayWithDefaults instantiates a new TransferRecipientErrorsArray object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *TransferRecipientErrorsArray) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *TransferRecipientErrorsArray) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *TransferRecipientErrorsArray) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetRecords

`func (o *TransferRecipientErrorsArray) GetRecords() []ErrorRecordsArray`

GetRecords returns the Records field if non-nil, zero value otherwise.

### GetRecordsOk

`func (o *TransferRecipientErrorsArray) GetRecordsOk() (*[]ErrorRecordsArray, bool)`

GetRecordsOk returns a tuple with the Records field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecords

`func (o *TransferRecipientErrorsArray) SetRecords(v []ErrorRecordsArray)`

SetRecords sets Records field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


