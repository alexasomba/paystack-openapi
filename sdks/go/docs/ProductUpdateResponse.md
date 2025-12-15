# ProductUpdateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**ProductUpdateResponseData**](ProductUpdateResponseData.md) |  | 

## Methods

### NewProductUpdateResponse

`func NewProductUpdateResponse(status bool, message string, data ProductUpdateResponseData, ) *ProductUpdateResponse`

NewProductUpdateResponse instantiates a new ProductUpdateResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProductUpdateResponseWithDefaults

`func NewProductUpdateResponseWithDefaults() *ProductUpdateResponse`

NewProductUpdateResponseWithDefaults instantiates a new ProductUpdateResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *ProductUpdateResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ProductUpdateResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ProductUpdateResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *ProductUpdateResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ProductUpdateResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ProductUpdateResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *ProductUpdateResponse) GetData() ProductUpdateResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *ProductUpdateResponse) GetDataOk() (*ProductUpdateResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *ProductUpdateResponse) SetData(v ProductUpdateResponseData)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


