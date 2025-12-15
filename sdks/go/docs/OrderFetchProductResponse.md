# OrderFetchProductResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**[]OrderFetchProductResponseArray**](OrderFetchProductResponseArray.md) |  | 
**Meta** | [**OrderFetchProductResponseMeta**](OrderFetchProductResponseMeta.md) |  | 

## Methods

### NewOrderFetchProductResponse

`func NewOrderFetchProductResponse(status bool, message string, data []OrderFetchProductResponseArray, meta OrderFetchProductResponseMeta, ) *OrderFetchProductResponse`

NewOrderFetchProductResponse instantiates a new OrderFetchProductResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrderFetchProductResponseWithDefaults

`func NewOrderFetchProductResponseWithDefaults() *OrderFetchProductResponse`

NewOrderFetchProductResponseWithDefaults instantiates a new OrderFetchProductResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *OrderFetchProductResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *OrderFetchProductResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *OrderFetchProductResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *OrderFetchProductResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *OrderFetchProductResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *OrderFetchProductResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *OrderFetchProductResponse) GetData() []OrderFetchProductResponseArray`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *OrderFetchProductResponse) GetDataOk() (*[]OrderFetchProductResponseArray, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *OrderFetchProductResponse) SetData(v []OrderFetchProductResponseArray)`

SetData sets Data field to given value.


### GetMeta

`func (o *OrderFetchProductResponse) GetMeta() OrderFetchProductResponseMeta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *OrderFetchProductResponse) GetMetaOk() (*OrderFetchProductResponseMeta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *OrderFetchProductResponse) SetMeta(v OrderFetchProductResponseMeta)`

SetMeta sets Meta field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


