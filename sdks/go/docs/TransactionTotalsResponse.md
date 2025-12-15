# TransactionTotalsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**TransactionTotalsResponseData**](TransactionTotalsResponseData.md) |  | 

## Methods

### NewTransactionTotalsResponse

`func NewTransactionTotalsResponse(status bool, message string, data TransactionTotalsResponseData, ) *TransactionTotalsResponse`

NewTransactionTotalsResponse instantiates a new TransactionTotalsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionTotalsResponseWithDefaults

`func NewTransactionTotalsResponseWithDefaults() *TransactionTotalsResponse`

NewTransactionTotalsResponseWithDefaults instantiates a new TransactionTotalsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *TransactionTotalsResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *TransactionTotalsResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *TransactionTotalsResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *TransactionTotalsResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *TransactionTotalsResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *TransactionTotalsResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *TransactionTotalsResponse) GetData() TransactionTotalsResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *TransactionTotalsResponse) GetDataOk() (*TransactionTotalsResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *TransactionTotalsResponse) SetData(v TransactionTotalsResponseData)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


