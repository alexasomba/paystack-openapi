# VirtualTerminalListResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | Pointer to **bool** |  | [optional] 
**Message** | Pointer to **string** |  | [optional] 
**Data** | Pointer to [**[]VirtualTerminalListResponseArray**](VirtualTerminalListResponseArray.md) |  | [optional] 
**Meta** | Pointer to [**VirtualTerminalListResponseMeta**](VirtualTerminalListResponseMeta.md) |  | [optional] 

## Methods

### NewVirtualTerminalListResponse

`func NewVirtualTerminalListResponse() *VirtualTerminalListResponse`

NewVirtualTerminalListResponse instantiates a new VirtualTerminalListResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVirtualTerminalListResponseWithDefaults

`func NewVirtualTerminalListResponseWithDefaults() *VirtualTerminalListResponse`

NewVirtualTerminalListResponseWithDefaults instantiates a new VirtualTerminalListResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *VirtualTerminalListResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *VirtualTerminalListResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *VirtualTerminalListResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *VirtualTerminalListResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetMessage

`func (o *VirtualTerminalListResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *VirtualTerminalListResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *VirtualTerminalListResponse) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *VirtualTerminalListResponse) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetData

`func (o *VirtualTerminalListResponse) GetData() []VirtualTerminalListResponseArray`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *VirtualTerminalListResponse) GetDataOk() (*[]VirtualTerminalListResponseArray, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *VirtualTerminalListResponse) SetData(v []VirtualTerminalListResponseArray)`

SetData sets Data field to given value.

### HasData

`func (o *VirtualTerminalListResponse) HasData() bool`

HasData returns a boolean if a field has been set.

### GetMeta

`func (o *VirtualTerminalListResponse) GetMeta() VirtualTerminalListResponseMeta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *VirtualTerminalListResponse) GetMetaOk() (*VirtualTerminalListResponseMeta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *VirtualTerminalListResponse) SetMeta(v VirtualTerminalListResponseMeta)`

SetMeta sets Meta field to given value.

### HasMeta

`func (o *VirtualTerminalListResponse) HasMeta() bool`

HasMeta returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


