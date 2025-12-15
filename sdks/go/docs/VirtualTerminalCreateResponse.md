# VirtualTerminalCreateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**VirtualTerminalCreateResponseData**](VirtualTerminalCreateResponseData.md) |  | 

## Methods

### NewVirtualTerminalCreateResponse

`func NewVirtualTerminalCreateResponse(status bool, message string, data VirtualTerminalCreateResponseData, ) *VirtualTerminalCreateResponse`

NewVirtualTerminalCreateResponse instantiates a new VirtualTerminalCreateResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVirtualTerminalCreateResponseWithDefaults

`func NewVirtualTerminalCreateResponseWithDefaults() *VirtualTerminalCreateResponse`

NewVirtualTerminalCreateResponseWithDefaults instantiates a new VirtualTerminalCreateResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *VirtualTerminalCreateResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *VirtualTerminalCreateResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *VirtualTerminalCreateResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *VirtualTerminalCreateResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *VirtualTerminalCreateResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *VirtualTerminalCreateResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *VirtualTerminalCreateResponse) GetData() VirtualTerminalCreateResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *VirtualTerminalCreateResponse) GetDataOk() (*VirtualTerminalCreateResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *VirtualTerminalCreateResponse) SetData(v VirtualTerminalCreateResponseData)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


