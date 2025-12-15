# SubscriptionFetchResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**SubscriptionFetchResponseData**](SubscriptionFetchResponseData.md) |  | 

## Methods

### NewSubscriptionFetchResponse

`func NewSubscriptionFetchResponse(status bool, message string, data SubscriptionFetchResponseData, ) *SubscriptionFetchResponse`

NewSubscriptionFetchResponse instantiates a new SubscriptionFetchResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubscriptionFetchResponseWithDefaults

`func NewSubscriptionFetchResponseWithDefaults() *SubscriptionFetchResponse`

NewSubscriptionFetchResponseWithDefaults instantiates a new SubscriptionFetchResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *SubscriptionFetchResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *SubscriptionFetchResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *SubscriptionFetchResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *SubscriptionFetchResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *SubscriptionFetchResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *SubscriptionFetchResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *SubscriptionFetchResponse) GetData() SubscriptionFetchResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *SubscriptionFetchResponse) GetDataOk() (*SubscriptionFetchResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *SubscriptionFetchResponse) SetData(v SubscriptionFetchResponseData)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


