# PlanCreateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**PlanCreateResponseData**](PlanCreateResponseData.md) |  | 

## Methods

### NewPlanCreateResponse

`func NewPlanCreateResponse(status bool, message string, data PlanCreateResponseData, ) *PlanCreateResponse`

NewPlanCreateResponse instantiates a new PlanCreateResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPlanCreateResponseWithDefaults

`func NewPlanCreateResponseWithDefaults() *PlanCreateResponse`

NewPlanCreateResponseWithDefaults instantiates a new PlanCreateResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *PlanCreateResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *PlanCreateResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *PlanCreateResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *PlanCreateResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *PlanCreateResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *PlanCreateResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *PlanCreateResponse) GetData() PlanCreateResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *PlanCreateResponse) GetDataOk() (*PlanCreateResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *PlanCreateResponse) SetData(v PlanCreateResponseData)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


