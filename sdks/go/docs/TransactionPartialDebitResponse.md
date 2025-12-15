# TransactionPartialDebitResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**TransactionPartialDebitResponseData**](TransactionPartialDebitResponseData.md) |  | 

## Methods

### NewTransactionPartialDebitResponse

`func NewTransactionPartialDebitResponse(status bool, message string, data TransactionPartialDebitResponseData, ) *TransactionPartialDebitResponse`

NewTransactionPartialDebitResponse instantiates a new TransactionPartialDebitResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionPartialDebitResponseWithDefaults

`func NewTransactionPartialDebitResponseWithDefaults() *TransactionPartialDebitResponse`

NewTransactionPartialDebitResponseWithDefaults instantiates a new TransactionPartialDebitResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *TransactionPartialDebitResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *TransactionPartialDebitResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *TransactionPartialDebitResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *TransactionPartialDebitResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *TransactionPartialDebitResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *TransactionPartialDebitResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *TransactionPartialDebitResponse) GetData() TransactionPartialDebitResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *TransactionPartialDebitResponse) GetDataOk() (*TransactionPartialDebitResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *TransactionPartialDebitResponse) SetData(v TransactionPartialDebitResponseData)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


