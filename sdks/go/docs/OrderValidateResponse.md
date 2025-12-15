# OrderValidateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**OrderValidateResponseData**](OrderValidateResponseData.md) |  | 

## Methods

### NewOrderValidateResponse

`func NewOrderValidateResponse(status bool, message string, data OrderValidateResponseData, ) *OrderValidateResponse`

NewOrderValidateResponse instantiates a new OrderValidateResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrderValidateResponseWithDefaults

`func NewOrderValidateResponseWithDefaults() *OrderValidateResponse`

NewOrderValidateResponseWithDefaults instantiates a new OrderValidateResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *OrderValidateResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *OrderValidateResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *OrderValidateResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *OrderValidateResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *OrderValidateResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *OrderValidateResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *OrderValidateResponse) GetData() OrderValidateResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *OrderValidateResponse) GetDataOk() (*OrderValidateResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *OrderValidateResponse) SetData(v OrderValidateResponseData)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


