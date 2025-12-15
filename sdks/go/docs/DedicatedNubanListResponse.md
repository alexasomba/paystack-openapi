# DedicatedNubanListResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**[]DedicatedNubanListResponseArray**](DedicatedNubanListResponseArray.md) |  | 
**Meta** | [**SubaccountListResponseMeta**](SubaccountListResponseMeta.md) |  | 

## Methods

### NewDedicatedNubanListResponse

`func NewDedicatedNubanListResponse(status bool, message string, data []DedicatedNubanListResponseArray, meta SubaccountListResponseMeta, ) *DedicatedNubanListResponse`

NewDedicatedNubanListResponse instantiates a new DedicatedNubanListResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDedicatedNubanListResponseWithDefaults

`func NewDedicatedNubanListResponseWithDefaults() *DedicatedNubanListResponse`

NewDedicatedNubanListResponseWithDefaults instantiates a new DedicatedNubanListResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *DedicatedNubanListResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *DedicatedNubanListResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *DedicatedNubanListResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *DedicatedNubanListResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *DedicatedNubanListResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *DedicatedNubanListResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *DedicatedNubanListResponse) GetData() []DedicatedNubanListResponseArray`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *DedicatedNubanListResponse) GetDataOk() (*[]DedicatedNubanListResponseArray, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *DedicatedNubanListResponse) SetData(v []DedicatedNubanListResponseArray)`

SetData sets Data field to given value.


### GetMeta

`func (o *DedicatedNubanListResponse) GetMeta() SubaccountListResponseMeta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *DedicatedNubanListResponse) GetMetaOk() (*SubaccountListResponseMeta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *DedicatedNubanListResponse) SetMeta(v SubaccountListResponseMeta)`

SetMeta sets Meta field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


