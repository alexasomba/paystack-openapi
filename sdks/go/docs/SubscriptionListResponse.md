# SubscriptionListResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**[]SubscriptionListResponseArray**](SubscriptionListResponseArray.md) |  | 
**Meta** | [**SubaccountListResponseMeta**](SubaccountListResponseMeta.md) |  | 

## Methods

### NewSubscriptionListResponse

`func NewSubscriptionListResponse(status bool, message string, data []SubscriptionListResponseArray, meta SubaccountListResponseMeta, ) *SubscriptionListResponse`

NewSubscriptionListResponse instantiates a new SubscriptionListResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubscriptionListResponseWithDefaults

`func NewSubscriptionListResponseWithDefaults() *SubscriptionListResponse`

NewSubscriptionListResponseWithDefaults instantiates a new SubscriptionListResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *SubscriptionListResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *SubscriptionListResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *SubscriptionListResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *SubscriptionListResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *SubscriptionListResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *SubscriptionListResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *SubscriptionListResponse) GetData() []SubscriptionListResponseArray`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *SubscriptionListResponse) GetDataOk() (*[]SubscriptionListResponseArray, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *SubscriptionListResponse) SetData(v []SubscriptionListResponseArray)`

SetData sets Data field to given value.


### GetMeta

`func (o *SubscriptionListResponse) GetMeta() SubaccountListResponseMeta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *SubscriptionListResponse) GetMetaOk() (*SubaccountListResponseMeta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *SubscriptionListResponse) SetMeta(v SubaccountListResponseMeta)`

SetMeta sets Meta field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


