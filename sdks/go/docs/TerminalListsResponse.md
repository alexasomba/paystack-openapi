# TerminalListsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**[]TerminalListsResponseArray**](TerminalListsResponseArray.md) |  | 
**Meta** | [**TerminalListsResponseMeta**](TerminalListsResponseMeta.md) |  | 

## Methods

### NewTerminalListsResponse

`func NewTerminalListsResponse(status bool, message string, data []TerminalListsResponseArray, meta TerminalListsResponseMeta, ) *TerminalListsResponse`

NewTerminalListsResponse instantiates a new TerminalListsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTerminalListsResponseWithDefaults

`func NewTerminalListsResponseWithDefaults() *TerminalListsResponse`

NewTerminalListsResponseWithDefaults instantiates a new TerminalListsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *TerminalListsResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *TerminalListsResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *TerminalListsResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *TerminalListsResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *TerminalListsResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *TerminalListsResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *TerminalListsResponse) GetData() []TerminalListsResponseArray`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *TerminalListsResponse) GetDataOk() (*[]TerminalListsResponseArray, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *TerminalListsResponse) SetData(v []TerminalListsResponseArray)`

SetData sets Data field to given value.


### GetMeta

`func (o *TerminalListsResponse) GetMeta() TerminalListsResponseMeta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *TerminalListsResponse) GetMetaOk() (*TerminalListsResponseMeta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *TerminalListsResponse) SetMeta(v TerminalListsResponseMeta)`

SetMeta sets Meta field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


