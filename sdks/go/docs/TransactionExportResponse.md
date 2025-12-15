# TransactionExportResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**TransactionExportResponseData**](TransactionExportResponseData.md) |  | 

## Methods

### NewTransactionExportResponse

`func NewTransactionExportResponse(status bool, message string, data TransactionExportResponseData, ) *TransactionExportResponse`

NewTransactionExportResponse instantiates a new TransactionExportResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionExportResponseWithDefaults

`func NewTransactionExportResponseWithDefaults() *TransactionExportResponse`

NewTransactionExportResponseWithDefaults instantiates a new TransactionExportResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *TransactionExportResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *TransactionExportResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *TransactionExportResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *TransactionExportResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *TransactionExportResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *TransactionExportResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *TransactionExportResponse) GetData() TransactionExportResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *TransactionExportResponse) GetDataOk() (*TransactionExportResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *TransactionExportResponse) SetData(v TransactionExportResponseData)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


