# PageAddProductsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**PageAddProductsResponseData**](PageAddProductsResponseData.md) |  | 

## Methods

### NewPageAddProductsResponse

`func NewPageAddProductsResponse(status bool, message string, data PageAddProductsResponseData, ) *PageAddProductsResponse`

NewPageAddProductsResponse instantiates a new PageAddProductsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPageAddProductsResponseWithDefaults

`func NewPageAddProductsResponseWithDefaults() *PageAddProductsResponse`

NewPageAddProductsResponseWithDefaults instantiates a new PageAddProductsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *PageAddProductsResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *PageAddProductsResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *PageAddProductsResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *PageAddProductsResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *PageAddProductsResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *PageAddProductsResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *PageAddProductsResponse) GetData() PageAddProductsResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *PageAddProductsResponse) GetDataOk() (*PageAddProductsResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *PageAddProductsResponse) SetData(v PageAddProductsResponseData)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


