# PaymentRequestListResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**[]PaymentRequestListResponseArray**](PaymentRequestListResponseArray.md) |  | 
**Meta** | [**BulkChargeListResponseMeta**](BulkChargeListResponseMeta.md) |  | 

## Methods

### NewPaymentRequestListResponse

`func NewPaymentRequestListResponse(status bool, message string, data []PaymentRequestListResponseArray, meta BulkChargeListResponseMeta, ) *PaymentRequestListResponse`

NewPaymentRequestListResponse instantiates a new PaymentRequestListResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaymentRequestListResponseWithDefaults

`func NewPaymentRequestListResponseWithDefaults() *PaymentRequestListResponse`

NewPaymentRequestListResponseWithDefaults instantiates a new PaymentRequestListResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *PaymentRequestListResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *PaymentRequestListResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *PaymentRequestListResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *PaymentRequestListResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *PaymentRequestListResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *PaymentRequestListResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *PaymentRequestListResponse) GetData() []PaymentRequestListResponseArray`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *PaymentRequestListResponse) GetDataOk() (*[]PaymentRequestListResponseArray, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *PaymentRequestListResponse) SetData(v []PaymentRequestListResponseArray)`

SetData sets Data field to given value.


### GetMeta

`func (o *PaymentRequestListResponse) GetMeta() BulkChargeListResponseMeta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *PaymentRequestListResponse) GetMetaOk() (*BulkChargeListResponseMeta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *PaymentRequestListResponse) SetMeta(v BulkChargeListResponseMeta)`

SetMeta sets Meta field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


