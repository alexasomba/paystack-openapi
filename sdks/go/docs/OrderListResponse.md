# OrderListResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**[]OrderListResponseArray**](OrderListResponseArray.md) |  | 
**Meta** | [**OrderListResponseMeta**](OrderListResponseMeta.md) |  | 

## Methods

### NewOrderListResponse

`func NewOrderListResponse(status bool, message string, data []OrderListResponseArray, meta OrderListResponseMeta, ) *OrderListResponse`

NewOrderListResponse instantiates a new OrderListResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrderListResponseWithDefaults

`func NewOrderListResponseWithDefaults() *OrderListResponse`

NewOrderListResponseWithDefaults instantiates a new OrderListResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *OrderListResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *OrderListResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *OrderListResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *OrderListResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *OrderListResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *OrderListResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *OrderListResponse) GetData() []OrderListResponseArray`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *OrderListResponse) GetDataOk() (*[]OrderListResponseArray, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *OrderListResponse) SetData(v []OrderListResponseArray)`

SetData sets Data field to given value.


### GetMeta

`func (o *OrderListResponse) GetMeta() OrderListResponseMeta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *OrderListResponse) GetMetaOk() (*OrderListResponseMeta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *OrderListResponse) SetMeta(v OrderListResponseMeta)`

SetMeta sets Meta field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


