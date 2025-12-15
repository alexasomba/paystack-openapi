# BulkChargeListResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**[]BulkChargeListResponseArray**](BulkChargeListResponseArray.md) |  | 
**Meta** | [**BulkChargeListResponseMeta**](BulkChargeListResponseMeta.md) |  | 

## Methods

### NewBulkChargeListResponse

`func NewBulkChargeListResponse(status bool, message string, data []BulkChargeListResponseArray, meta BulkChargeListResponseMeta, ) *BulkChargeListResponse`

NewBulkChargeListResponse instantiates a new BulkChargeListResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkChargeListResponseWithDefaults

`func NewBulkChargeListResponseWithDefaults() *BulkChargeListResponse`

NewBulkChargeListResponseWithDefaults instantiates a new BulkChargeListResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *BulkChargeListResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *BulkChargeListResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *BulkChargeListResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *BulkChargeListResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *BulkChargeListResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *BulkChargeListResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *BulkChargeListResponse) GetData() []BulkChargeListResponseArray`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *BulkChargeListResponse) GetDataOk() (*[]BulkChargeListResponseArray, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *BulkChargeListResponse) SetData(v []BulkChargeListResponseArray)`

SetData sets Data field to given value.


### GetMeta

`func (o *BulkChargeListResponse) GetMeta() BulkChargeListResponseMeta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *BulkChargeListResponse) GetMetaOk() (*BulkChargeListResponseMeta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *BulkChargeListResponse) SetMeta(v BulkChargeListResponseMeta)`

SetMeta sets Meta field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


