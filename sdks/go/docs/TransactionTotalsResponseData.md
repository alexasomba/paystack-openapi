# TransactionTotalsResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TotalTransactions** | **int32** |  | 
**TotalVolume** | **int32** |  | 
**TotalVolumeByCurrency** | [**[]TransactionTotalVolumeByCurrencyArray**](TransactionTotalVolumeByCurrencyArray.md) |  | 
**PendingTransfers** | **int32** |  | 
**PendingTransfersByCurrency** | [**[]TransactionPendingTransfersByCurrencyArray**](TransactionPendingTransfersByCurrencyArray.md) |  | 

## Methods

### NewTransactionTotalsResponseData

`func NewTransactionTotalsResponseData(totalTransactions int32, totalVolume int32, totalVolumeByCurrency []TransactionTotalVolumeByCurrencyArray, pendingTransfers int32, pendingTransfersByCurrency []TransactionPendingTransfersByCurrencyArray, ) *TransactionTotalsResponseData`

NewTransactionTotalsResponseData instantiates a new TransactionTotalsResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionTotalsResponseDataWithDefaults

`func NewTransactionTotalsResponseDataWithDefaults() *TransactionTotalsResponseData`

NewTransactionTotalsResponseDataWithDefaults instantiates a new TransactionTotalsResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTotalTransactions

`func (o *TransactionTotalsResponseData) GetTotalTransactions() int32`

GetTotalTransactions returns the TotalTransactions field if non-nil, zero value otherwise.

### GetTotalTransactionsOk

`func (o *TransactionTotalsResponseData) GetTotalTransactionsOk() (*int32, bool)`

GetTotalTransactionsOk returns a tuple with the TotalTransactions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalTransactions

`func (o *TransactionTotalsResponseData) SetTotalTransactions(v int32)`

SetTotalTransactions sets TotalTransactions field to given value.


### GetTotalVolume

`func (o *TransactionTotalsResponseData) GetTotalVolume() int32`

GetTotalVolume returns the TotalVolume field if non-nil, zero value otherwise.

### GetTotalVolumeOk

`func (o *TransactionTotalsResponseData) GetTotalVolumeOk() (*int32, bool)`

GetTotalVolumeOk returns a tuple with the TotalVolume field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalVolume

`func (o *TransactionTotalsResponseData) SetTotalVolume(v int32)`

SetTotalVolume sets TotalVolume field to given value.


### GetTotalVolumeByCurrency

`func (o *TransactionTotalsResponseData) GetTotalVolumeByCurrency() []TransactionTotalVolumeByCurrencyArray`

GetTotalVolumeByCurrency returns the TotalVolumeByCurrency field if non-nil, zero value otherwise.

### GetTotalVolumeByCurrencyOk

`func (o *TransactionTotalsResponseData) GetTotalVolumeByCurrencyOk() (*[]TransactionTotalVolumeByCurrencyArray, bool)`

GetTotalVolumeByCurrencyOk returns a tuple with the TotalVolumeByCurrency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalVolumeByCurrency

`func (o *TransactionTotalsResponseData) SetTotalVolumeByCurrency(v []TransactionTotalVolumeByCurrencyArray)`

SetTotalVolumeByCurrency sets TotalVolumeByCurrency field to given value.


### GetPendingTransfers

`func (o *TransactionTotalsResponseData) GetPendingTransfers() int32`

GetPendingTransfers returns the PendingTransfers field if non-nil, zero value otherwise.

### GetPendingTransfersOk

`func (o *TransactionTotalsResponseData) GetPendingTransfersOk() (*int32, bool)`

GetPendingTransfersOk returns a tuple with the PendingTransfers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPendingTransfers

`func (o *TransactionTotalsResponseData) SetPendingTransfers(v int32)`

SetPendingTransfers sets PendingTransfers field to given value.


### GetPendingTransfersByCurrency

`func (o *TransactionTotalsResponseData) GetPendingTransfersByCurrency() []TransactionPendingTransfersByCurrencyArray`

GetPendingTransfersByCurrency returns the PendingTransfersByCurrency field if non-nil, zero value otherwise.

### GetPendingTransfersByCurrencyOk

`func (o *TransactionTotalsResponseData) GetPendingTransfersByCurrencyOk() (*[]TransactionPendingTransfersByCurrencyArray, bool)`

GetPendingTransfersByCurrencyOk returns a tuple with the PendingTransfersByCurrency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPendingTransfersByCurrency

`func (o *TransactionTotalsResponseData) SetPendingTransfersByCurrency(v []TransactionPendingTransfersByCurrencyArray)`

SetPendingTransfersByCurrency sets PendingTransfersByCurrency field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


