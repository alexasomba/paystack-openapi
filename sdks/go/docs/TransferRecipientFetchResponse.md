# TransferRecipientFetchResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**TransferRecipientFetchResponseData**](TransferRecipientFetchResponseData.md) |  | 

## Methods

### NewTransferRecipientFetchResponse

`func NewTransferRecipientFetchResponse(status bool, message string, data TransferRecipientFetchResponseData, ) *TransferRecipientFetchResponse`

NewTransferRecipientFetchResponse instantiates a new TransferRecipientFetchResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransferRecipientFetchResponseWithDefaults

`func NewTransferRecipientFetchResponseWithDefaults() *TransferRecipientFetchResponse`

NewTransferRecipientFetchResponseWithDefaults instantiates a new TransferRecipientFetchResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *TransferRecipientFetchResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *TransferRecipientFetchResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *TransferRecipientFetchResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *TransferRecipientFetchResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *TransferRecipientFetchResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *TransferRecipientFetchResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *TransferRecipientFetchResponse) GetData() TransferRecipientFetchResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *TransferRecipientFetchResponse) GetDataOk() (*TransferRecipientFetchResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *TransferRecipientFetchResponse) SetData(v TransferRecipientFetchResponseData)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


