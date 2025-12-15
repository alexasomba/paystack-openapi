# TransferRecipientListResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**[]TransferRecipientListResponseArray**](TransferRecipientListResponseArray.md) |  | 
**Meta** | [**SubaccountListResponseMeta**](SubaccountListResponseMeta.md) |  | 

## Methods

### NewTransferRecipientListResponse

`func NewTransferRecipientListResponse(status bool, message string, data []TransferRecipientListResponseArray, meta SubaccountListResponseMeta, ) *TransferRecipientListResponse`

NewTransferRecipientListResponse instantiates a new TransferRecipientListResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransferRecipientListResponseWithDefaults

`func NewTransferRecipientListResponseWithDefaults() *TransferRecipientListResponse`

NewTransferRecipientListResponseWithDefaults instantiates a new TransferRecipientListResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *TransferRecipientListResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *TransferRecipientListResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *TransferRecipientListResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *TransferRecipientListResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *TransferRecipientListResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *TransferRecipientListResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *TransferRecipientListResponse) GetData() []TransferRecipientListResponseArray`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *TransferRecipientListResponse) GetDataOk() (*[]TransferRecipientListResponseArray, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *TransferRecipientListResponse) SetData(v []TransferRecipientListResponseArray)`

SetData sets Data field to given value.


### GetMeta

`func (o *TransferRecipientListResponse) GetMeta() SubaccountListResponseMeta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *TransferRecipientListResponse) GetMetaOk() (*SubaccountListResponseMeta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *TransferRecipientListResponse) SetMeta(v SubaccountListResponseMeta)`

SetMeta sets Meta field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


