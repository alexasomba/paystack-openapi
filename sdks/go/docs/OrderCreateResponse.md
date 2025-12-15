# OrderCreateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**OrderCreateResponseData**](OrderCreateResponseData.md) |  | 

## Methods

### NewOrderCreateResponse

`func NewOrderCreateResponse(status bool, message string, data OrderCreateResponseData, ) *OrderCreateResponse`

NewOrderCreateResponse instantiates a new OrderCreateResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrderCreateResponseWithDefaults

`func NewOrderCreateResponseWithDefaults() *OrderCreateResponse`

NewOrderCreateResponseWithDefaults instantiates a new OrderCreateResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *OrderCreateResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *OrderCreateResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *OrderCreateResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *OrderCreateResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *OrderCreateResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *OrderCreateResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *OrderCreateResponse) GetData() OrderCreateResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *OrderCreateResponse) GetDataOk() (*OrderCreateResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *OrderCreateResponse) SetData(v OrderCreateResponseData)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


