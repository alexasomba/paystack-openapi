# TerminalGetResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**TerminalGetResponseData**](TerminalGetResponseData.md) |  | 

## Methods

### NewTerminalGetResponse

`func NewTerminalGetResponse(status bool, message string, data TerminalGetResponseData, ) *TerminalGetResponse`

NewTerminalGetResponse instantiates a new TerminalGetResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTerminalGetResponseWithDefaults

`func NewTerminalGetResponseWithDefaults() *TerminalGetResponse`

NewTerminalGetResponseWithDefaults instantiates a new TerminalGetResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *TerminalGetResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *TerminalGetResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *TerminalGetResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *TerminalGetResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *TerminalGetResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *TerminalGetResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *TerminalGetResponse) GetData() TerminalGetResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *TerminalGetResponse) GetDataOk() (*TerminalGetResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *TerminalGetResponse) SetData(v TerminalGetResponseData)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


