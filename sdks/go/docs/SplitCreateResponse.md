# SplitCreateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**SplitCreateResponseData**](SplitCreateResponseData.md) |  | 

## Methods

### NewSplitCreateResponse

`func NewSplitCreateResponse(status bool, message string, data SplitCreateResponseData, ) *SplitCreateResponse`

NewSplitCreateResponse instantiates a new SplitCreateResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSplitCreateResponseWithDefaults

`func NewSplitCreateResponseWithDefaults() *SplitCreateResponse`

NewSplitCreateResponseWithDefaults instantiates a new SplitCreateResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *SplitCreateResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *SplitCreateResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *SplitCreateResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *SplitCreateResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *SplitCreateResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *SplitCreateResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *SplitCreateResponse) GetData() SplitCreateResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *SplitCreateResponse) GetDataOk() (*SplitCreateResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *SplitCreateResponse) SetData(v SplitCreateResponseData)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


