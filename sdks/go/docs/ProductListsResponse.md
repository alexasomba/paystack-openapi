# ProductListsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**[]ProductListsResponseArray**](ProductListsResponseArray.md) |  | 
**Meta** | [**ProductListsResponseMeta**](ProductListsResponseMeta.md) |  | 

## Methods

### NewProductListsResponse

`func NewProductListsResponse(status bool, message string, data []ProductListsResponseArray, meta ProductListsResponseMeta, ) *ProductListsResponse`

NewProductListsResponse instantiates a new ProductListsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProductListsResponseWithDefaults

`func NewProductListsResponseWithDefaults() *ProductListsResponse`

NewProductListsResponseWithDefaults instantiates a new ProductListsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *ProductListsResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ProductListsResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ProductListsResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *ProductListsResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ProductListsResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ProductListsResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *ProductListsResponse) GetData() []ProductListsResponseArray`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *ProductListsResponse) GetDataOk() (*[]ProductListsResponseArray, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *ProductListsResponse) SetData(v []ProductListsResponseArray)`

SetData sets Data field to given value.


### GetMeta

`func (o *ProductListsResponse) GetMeta() ProductListsResponseMeta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *ProductListsResponse) GetMetaOk() (*ProductListsResponseMeta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *ProductListsResponse) SetMeta(v ProductListsResponseMeta)`

SetMeta sets Meta field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


