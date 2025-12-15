# TransferBulk

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Source** | **string** | The source of funds for the transfer. | [default to "balance"]
**Currency** | Pointer to **string** | Specify the currency of the transfer. | [optional] [default to "NGN"]
**Transfers** | [**[]TransferBase**](TransferBase.md) | A list of transfer object | 

## Methods

### NewTransferBulk

`func NewTransferBulk(source string, transfers []TransferBase, ) *TransferBulk`

NewTransferBulk instantiates a new TransferBulk object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransferBulkWithDefaults

`func NewTransferBulkWithDefaults() *TransferBulk`

NewTransferBulkWithDefaults instantiates a new TransferBulk object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSource

`func (o *TransferBulk) GetSource() string`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *TransferBulk) GetSourceOk() (*string, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *TransferBulk) SetSource(v string)`

SetSource sets Source field to given value.


### GetCurrency

`func (o *TransferBulk) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *TransferBulk) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *TransferBulk) SetCurrency(v string)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *TransferBulk) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### GetTransfers

`func (o *TransferBulk) GetTransfers() []TransferBase`

GetTransfers returns the Transfers field if non-nil, zero value otherwise.

### GetTransfersOk

`func (o *TransferBulk) GetTransfersOk() (*[]TransferBase, bool)`

GetTransfersOk returns a tuple with the Transfers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransfers

`func (o *TransferBulk) SetTransfers(v []TransferBase)`

SetTransfers sets Transfers field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


