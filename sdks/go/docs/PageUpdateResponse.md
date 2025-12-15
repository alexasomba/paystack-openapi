# PageUpdateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**PageUpdateResponseData**](PageUpdateResponseData.md) |  | 

## Methods

### NewPageUpdateResponse

`func NewPageUpdateResponse(status bool, message string, data PageUpdateResponseData, ) *PageUpdateResponse`

NewPageUpdateResponse instantiates a new PageUpdateResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPageUpdateResponseWithDefaults

`func NewPageUpdateResponseWithDefaults() *PageUpdateResponse`

NewPageUpdateResponseWithDefaults instantiates a new PageUpdateResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *PageUpdateResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *PageUpdateResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *PageUpdateResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *PageUpdateResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *PageUpdateResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *PageUpdateResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *PageUpdateResponse) GetData() PageUpdateResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *PageUpdateResponse) GetDataOk() (*PageUpdateResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *PageUpdateResponse) SetData(v PageUpdateResponseData)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


