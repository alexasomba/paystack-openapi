# BulkChargeFetchBulkBatchChargesResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**[]BulkChargeFetchBulkBatchChargesResponseArray**](BulkChargeFetchBulkBatchChargesResponseArray.md) |  | 
**Meta** | [**BulkChargeFetchBulkBatchChargesResponseMeta**](BulkChargeFetchBulkBatchChargesResponseMeta.md) |  | 

## Methods

### NewBulkChargeFetchBulkBatchChargesResponse

`func NewBulkChargeFetchBulkBatchChargesResponse(status bool, message string, data []BulkChargeFetchBulkBatchChargesResponseArray, meta BulkChargeFetchBulkBatchChargesResponseMeta, ) *BulkChargeFetchBulkBatchChargesResponse`

NewBulkChargeFetchBulkBatchChargesResponse instantiates a new BulkChargeFetchBulkBatchChargesResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkChargeFetchBulkBatchChargesResponseWithDefaults

`func NewBulkChargeFetchBulkBatchChargesResponseWithDefaults() *BulkChargeFetchBulkBatchChargesResponse`

NewBulkChargeFetchBulkBatchChargesResponseWithDefaults instantiates a new BulkChargeFetchBulkBatchChargesResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *BulkChargeFetchBulkBatchChargesResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *BulkChargeFetchBulkBatchChargesResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *BulkChargeFetchBulkBatchChargesResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *BulkChargeFetchBulkBatchChargesResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *BulkChargeFetchBulkBatchChargesResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *BulkChargeFetchBulkBatchChargesResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *BulkChargeFetchBulkBatchChargesResponse) GetData() []BulkChargeFetchBulkBatchChargesResponseArray`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *BulkChargeFetchBulkBatchChargesResponse) GetDataOk() (*[]BulkChargeFetchBulkBatchChargesResponseArray, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *BulkChargeFetchBulkBatchChargesResponse) SetData(v []BulkChargeFetchBulkBatchChargesResponseArray)`

SetData sets Data field to given value.


### GetMeta

`func (o *BulkChargeFetchBulkBatchChargesResponse) GetMeta() BulkChargeFetchBulkBatchChargesResponseMeta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *BulkChargeFetchBulkBatchChargesResponse) GetMetaOk() (*BulkChargeFetchBulkBatchChargesResponseMeta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *BulkChargeFetchBulkBatchChargesResponse) SetMeta(v BulkChargeFetchBulkBatchChargesResponseMeta)`

SetMeta sets Meta field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


