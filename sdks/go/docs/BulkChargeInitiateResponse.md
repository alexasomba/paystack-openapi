# BulkChargeInitiateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**BulkChargeInitiateResponseData**](BulkChargeInitiateResponseData.md) |  | 

## Methods

### NewBulkChargeInitiateResponse

`func NewBulkChargeInitiateResponse(status bool, message string, data BulkChargeInitiateResponseData, ) *BulkChargeInitiateResponse`

NewBulkChargeInitiateResponse instantiates a new BulkChargeInitiateResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkChargeInitiateResponseWithDefaults

`func NewBulkChargeInitiateResponseWithDefaults() *BulkChargeInitiateResponse`

NewBulkChargeInitiateResponseWithDefaults instantiates a new BulkChargeInitiateResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *BulkChargeInitiateResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *BulkChargeInitiateResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *BulkChargeInitiateResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *BulkChargeInitiateResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *BulkChargeInitiateResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *BulkChargeInitiateResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *BulkChargeInitiateResponse) GetData() BulkChargeInitiateResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *BulkChargeInitiateResponse) GetDataOk() (*BulkChargeInitiateResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *BulkChargeInitiateResponse) SetData(v BulkChargeInitiateResponseData)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


