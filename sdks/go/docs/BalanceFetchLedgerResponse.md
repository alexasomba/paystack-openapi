# BalanceFetchLedgerResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**[]BalanceFetchLedgerResponseArray**](BalanceFetchLedgerResponseArray.md) |  | 
**Meta** | [**SubaccountListResponseMeta**](SubaccountListResponseMeta.md) |  | 

## Methods

### NewBalanceFetchLedgerResponse

`func NewBalanceFetchLedgerResponse(status bool, message string, data []BalanceFetchLedgerResponseArray, meta SubaccountListResponseMeta, ) *BalanceFetchLedgerResponse`

NewBalanceFetchLedgerResponse instantiates a new BalanceFetchLedgerResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBalanceFetchLedgerResponseWithDefaults

`func NewBalanceFetchLedgerResponseWithDefaults() *BalanceFetchLedgerResponse`

NewBalanceFetchLedgerResponseWithDefaults instantiates a new BalanceFetchLedgerResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *BalanceFetchLedgerResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *BalanceFetchLedgerResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *BalanceFetchLedgerResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *BalanceFetchLedgerResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *BalanceFetchLedgerResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *BalanceFetchLedgerResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *BalanceFetchLedgerResponse) GetData() []BalanceFetchLedgerResponseArray`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *BalanceFetchLedgerResponse) GetDataOk() (*[]BalanceFetchLedgerResponseArray, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *BalanceFetchLedgerResponse) SetData(v []BalanceFetchLedgerResponseArray)`

SetData sets Data field to given value.


### GetMeta

`func (o *BalanceFetchLedgerResponse) GetMeta() SubaccountListResponseMeta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *BalanceFetchLedgerResponse) GetMetaOk() (*SubaccountListResponseMeta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *BalanceFetchLedgerResponse) SetMeta(v SubaccountListResponseMeta)`

SetMeta sets Meta field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


