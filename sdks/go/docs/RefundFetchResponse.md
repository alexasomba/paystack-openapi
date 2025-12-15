# RefundFetchResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**RefundFetchResponseData**](RefundFetchResponseData.md) |  | 

## Methods

### NewRefundFetchResponse

`func NewRefundFetchResponse(status bool, message string, data RefundFetchResponseData, ) *RefundFetchResponse`

NewRefundFetchResponse instantiates a new RefundFetchResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRefundFetchResponseWithDefaults

`func NewRefundFetchResponseWithDefaults() *RefundFetchResponse`

NewRefundFetchResponseWithDefaults instantiates a new RefundFetchResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *RefundFetchResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *RefundFetchResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *RefundFetchResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *RefundFetchResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *RefundFetchResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *RefundFetchResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *RefundFetchResponse) GetData() RefundFetchResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *RefundFetchResponse) GetDataOk() (*RefundFetchResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *RefundFetchResponse) SetData(v RefundFetchResponseData)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


