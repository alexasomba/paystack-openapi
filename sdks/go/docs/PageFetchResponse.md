# PageFetchResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**PageFetchResponseData**](PageFetchResponseData.md) |  | 

## Methods

### NewPageFetchResponse

`func NewPageFetchResponse(status bool, message string, data PageFetchResponseData, ) *PageFetchResponse`

NewPageFetchResponse instantiates a new PageFetchResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPageFetchResponseWithDefaults

`func NewPageFetchResponseWithDefaults() *PageFetchResponse`

NewPageFetchResponseWithDefaults instantiates a new PageFetchResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *PageFetchResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *PageFetchResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *PageFetchResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *PageFetchResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *PageFetchResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *PageFetchResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *PageFetchResponse) GetData() PageFetchResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *PageFetchResponse) GetDataOk() (*PageFetchResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *PageFetchResponse) SetData(v PageFetchResponseData)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


