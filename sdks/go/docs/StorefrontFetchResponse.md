# StorefrontFetchResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**StorefrontCreateResponseData**](StorefrontCreateResponseData.md) |  | 
**Meta** | [**StorefrontFetchResponseMeta**](StorefrontFetchResponseMeta.md) |  | 

## Methods

### NewStorefrontFetchResponse

`func NewStorefrontFetchResponse(status bool, message string, data StorefrontCreateResponseData, meta StorefrontFetchResponseMeta, ) *StorefrontFetchResponse`

NewStorefrontFetchResponse instantiates a new StorefrontFetchResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStorefrontFetchResponseWithDefaults

`func NewStorefrontFetchResponseWithDefaults() *StorefrontFetchResponse`

NewStorefrontFetchResponseWithDefaults instantiates a new StorefrontFetchResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *StorefrontFetchResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *StorefrontFetchResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *StorefrontFetchResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *StorefrontFetchResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *StorefrontFetchResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *StorefrontFetchResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *StorefrontFetchResponse) GetData() StorefrontCreateResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *StorefrontFetchResponse) GetDataOk() (*StorefrontCreateResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *StorefrontFetchResponse) SetData(v StorefrontCreateResponseData)`

SetData sets Data field to given value.


### GetMeta

`func (o *StorefrontFetchResponse) GetMeta() StorefrontFetchResponseMeta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *StorefrontFetchResponse) GetMetaOk() (*StorefrontFetchResponseMeta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *StorefrontFetchResponse) SetMeta(v StorefrontFetchResponseMeta)`

SetMeta sets Meta field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


