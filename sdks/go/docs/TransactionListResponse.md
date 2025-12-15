# TransactionListResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**[]TransactionListResponseArray**](TransactionListResponseArray.md) |  | 
**Meta** | [**TransactionListResponseMeta**](TransactionListResponseMeta.md) |  | 

## Methods

### NewTransactionListResponse

`func NewTransactionListResponse(status bool, message string, data []TransactionListResponseArray, meta TransactionListResponseMeta, ) *TransactionListResponse`

NewTransactionListResponse instantiates a new TransactionListResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionListResponseWithDefaults

`func NewTransactionListResponseWithDefaults() *TransactionListResponse`

NewTransactionListResponseWithDefaults instantiates a new TransactionListResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *TransactionListResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *TransactionListResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *TransactionListResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *TransactionListResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *TransactionListResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *TransactionListResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *TransactionListResponse) GetData() []TransactionListResponseArray`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *TransactionListResponse) GetDataOk() (*[]TransactionListResponseArray, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *TransactionListResponse) SetData(v []TransactionListResponseArray)`

SetData sets Data field to given value.


### GetMeta

`func (o *TransactionListResponse) GetMeta() TransactionListResponseMeta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *TransactionListResponse) GetMetaOk() (*TransactionListResponseMeta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *TransactionListResponse) SetMeta(v TransactionListResponseMeta)`

SetMeta sets Meta field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


