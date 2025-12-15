# DisputeResolveResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**DisputeResolveResponseData**](DisputeResolveResponseData.md) |  | 

## Methods

### NewDisputeResolveResponse

`func NewDisputeResolveResponse(status bool, message string, data DisputeResolveResponseData, ) *DisputeResolveResponse`

NewDisputeResolveResponse instantiates a new DisputeResolveResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDisputeResolveResponseWithDefaults

`func NewDisputeResolveResponseWithDefaults() *DisputeResolveResponse`

NewDisputeResolveResponseWithDefaults instantiates a new DisputeResolveResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *DisputeResolveResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *DisputeResolveResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *DisputeResolveResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *DisputeResolveResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *DisputeResolveResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *DisputeResolveResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *DisputeResolveResponse) GetData() DisputeResolveResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *DisputeResolveResponse) GetDataOk() (*DisputeResolveResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *DisputeResolveResponse) SetData(v DisputeResolveResponseData)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


