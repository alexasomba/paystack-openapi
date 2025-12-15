# RefundListResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**[]RefundListResponseArray**](RefundListResponseArray.md) |  | 
**Meta** | [**RefundListResponseMeta**](RefundListResponseMeta.md) |  | 

## Methods

### NewRefundListResponse

`func NewRefundListResponse(status bool, message string, data []RefundListResponseArray, meta RefundListResponseMeta, ) *RefundListResponse`

NewRefundListResponse instantiates a new RefundListResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRefundListResponseWithDefaults

`func NewRefundListResponseWithDefaults() *RefundListResponse`

NewRefundListResponseWithDefaults instantiates a new RefundListResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *RefundListResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *RefundListResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *RefundListResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *RefundListResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *RefundListResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *RefundListResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *RefundListResponse) GetData() []RefundListResponseArray`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *RefundListResponse) GetDataOk() (*[]RefundListResponseArray, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *RefundListResponse) SetData(v []RefundListResponseArray)`

SetData sets Data field to given value.


### GetMeta

`func (o *RefundListResponse) GetMeta() RefundListResponseMeta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *RefundListResponse) GetMetaOk() (*RefundListResponseMeta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *RefundListResponse) SetMeta(v RefundListResponseMeta)`

SetMeta sets Meta field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


