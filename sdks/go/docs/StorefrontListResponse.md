# StorefrontListResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**[]StorefrontListResponseArray**](StorefrontListResponseArray.md) |  | 
**Meta** | [**SubaccountListResponseMeta**](SubaccountListResponseMeta.md) |  | 

## Methods

### NewStorefrontListResponse

`func NewStorefrontListResponse(status bool, message string, data []StorefrontListResponseArray, meta SubaccountListResponseMeta, ) *StorefrontListResponse`

NewStorefrontListResponse instantiates a new StorefrontListResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStorefrontListResponseWithDefaults

`func NewStorefrontListResponseWithDefaults() *StorefrontListResponse`

NewStorefrontListResponseWithDefaults instantiates a new StorefrontListResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *StorefrontListResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *StorefrontListResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *StorefrontListResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *StorefrontListResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *StorefrontListResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *StorefrontListResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *StorefrontListResponse) GetData() []StorefrontListResponseArray`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *StorefrontListResponse) GetDataOk() (*[]StorefrontListResponseArray, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *StorefrontListResponse) SetData(v []StorefrontListResponseArray)`

SetData sets Data field to given value.


### GetMeta

`func (o *StorefrontListResponse) GetMeta() SubaccountListResponseMeta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *StorefrontListResponse) GetMetaOk() (*SubaccountListResponseMeta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *StorefrontListResponse) SetMeta(v SubaccountListResponseMeta)`

SetMeta sets Meta field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


