# TransactionListResponseMeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Total** | **int32** |  | 
**TotalVolume** | **float32** |  | 
**Skipped** | **int32** |  | 
**PerPage** | [**TransactionListResponseMetaPerPage**](TransactionListResponseMetaPerPage.md) |  | 
**Page** | **int32** |  | 
**PageCount** | **int32** |  | 

## Methods

### NewTransactionListResponseMeta

`func NewTransactionListResponseMeta(total int32, totalVolume float32, skipped int32, perPage TransactionListResponseMetaPerPage, page int32, pageCount int32, ) *TransactionListResponseMeta`

NewTransactionListResponseMeta instantiates a new TransactionListResponseMeta object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionListResponseMetaWithDefaults

`func NewTransactionListResponseMetaWithDefaults() *TransactionListResponseMeta`

NewTransactionListResponseMetaWithDefaults instantiates a new TransactionListResponseMeta object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTotal

`func (o *TransactionListResponseMeta) GetTotal() int32`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *TransactionListResponseMeta) GetTotalOk() (*int32, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *TransactionListResponseMeta) SetTotal(v int32)`

SetTotal sets Total field to given value.


### GetTotalVolume

`func (o *TransactionListResponseMeta) GetTotalVolume() float32`

GetTotalVolume returns the TotalVolume field if non-nil, zero value otherwise.

### GetTotalVolumeOk

`func (o *TransactionListResponseMeta) GetTotalVolumeOk() (*float32, bool)`

GetTotalVolumeOk returns a tuple with the TotalVolume field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalVolume

`func (o *TransactionListResponseMeta) SetTotalVolume(v float32)`

SetTotalVolume sets TotalVolume field to given value.


### GetSkipped

`func (o *TransactionListResponseMeta) GetSkipped() int32`

GetSkipped returns the Skipped field if non-nil, zero value otherwise.

### GetSkippedOk

`func (o *TransactionListResponseMeta) GetSkippedOk() (*int32, bool)`

GetSkippedOk returns a tuple with the Skipped field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSkipped

`func (o *TransactionListResponseMeta) SetSkipped(v int32)`

SetSkipped sets Skipped field to given value.


### GetPerPage

`func (o *TransactionListResponseMeta) GetPerPage() TransactionListResponseMetaPerPage`

GetPerPage returns the PerPage field if non-nil, zero value otherwise.

### GetPerPageOk

`func (o *TransactionListResponseMeta) GetPerPageOk() (*TransactionListResponseMetaPerPage, bool)`

GetPerPageOk returns a tuple with the PerPage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPerPage

`func (o *TransactionListResponseMeta) SetPerPage(v TransactionListResponseMetaPerPage)`

SetPerPage sets PerPage field to given value.


### GetPage

`func (o *TransactionListResponseMeta) GetPage() int32`

GetPage returns the Page field if non-nil, zero value otherwise.

### GetPageOk

`func (o *TransactionListResponseMeta) GetPageOk() (*int32, bool)`

GetPageOk returns a tuple with the Page field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPage

`func (o *TransactionListResponseMeta) SetPage(v int32)`

SetPage sets Page field to given value.


### GetPageCount

`func (o *TransactionListResponseMeta) GetPageCount() int32`

GetPageCount returns the PageCount field if non-nil, zero value otherwise.

### GetPageCountOk

`func (o *TransactionListResponseMeta) GetPageCountOk() (*int32, bool)`

GetPageCountOk returns a tuple with the PageCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageCount

`func (o *TransactionListResponseMeta) SetPageCount(v int32)`

SetPageCount sets PageCount field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


