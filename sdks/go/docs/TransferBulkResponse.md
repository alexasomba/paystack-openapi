# TransferBulkResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**[]TransferBulkResponseArray**](TransferBulkResponseArray.md) |  | 

## Methods

### NewTransferBulkResponse

`func NewTransferBulkResponse(status bool, message string, data []TransferBulkResponseArray, ) *TransferBulkResponse`

NewTransferBulkResponse instantiates a new TransferBulkResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransferBulkResponseWithDefaults

`func NewTransferBulkResponseWithDefaults() *TransferBulkResponse`

NewTransferBulkResponseWithDefaults instantiates a new TransferBulkResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *TransferBulkResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *TransferBulkResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *TransferBulkResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *TransferBulkResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *TransferBulkResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *TransferBulkResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *TransferBulkResponse) GetData() []TransferBulkResponseArray`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *TransferBulkResponse) GetDataOk() (*[]TransferBulkResponseArray, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *TransferBulkResponse) SetData(v []TransferBulkResponseArray)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


