# TransferVerifyResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**TransferVerifyResponseData**](TransferVerifyResponseData.md) |  | 

## Methods

### NewTransferVerifyResponse

`func NewTransferVerifyResponse(status bool, message string, data TransferVerifyResponseData, ) *TransferVerifyResponse`

NewTransferVerifyResponse instantiates a new TransferVerifyResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransferVerifyResponseWithDefaults

`func NewTransferVerifyResponseWithDefaults() *TransferVerifyResponse`

NewTransferVerifyResponseWithDefaults instantiates a new TransferVerifyResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *TransferVerifyResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *TransferVerifyResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *TransferVerifyResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *TransferVerifyResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *TransferVerifyResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *TransferVerifyResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *TransferVerifyResponse) GetData() TransferVerifyResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *TransferVerifyResponse) GetDataOk() (*TransferVerifyResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *TransferVerifyResponse) SetData(v TransferVerifyResponseData)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


