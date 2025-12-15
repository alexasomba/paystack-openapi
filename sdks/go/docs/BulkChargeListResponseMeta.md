# BulkChargeListResponseMeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Total** | **int32** |  | 
**Skipped** | **int32** |  | 
**PerPage** | [**BulkChargeListResponseMetaPerPage**](BulkChargeListResponseMetaPerPage.md) |  | 
**Page** | **int32** |  | 
**PageCount** | **int32** |  | 

## Methods

### NewBulkChargeListResponseMeta

`func NewBulkChargeListResponseMeta(total int32, skipped int32, perPage BulkChargeListResponseMetaPerPage, page int32, pageCount int32, ) *BulkChargeListResponseMeta`

NewBulkChargeListResponseMeta instantiates a new BulkChargeListResponseMeta object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkChargeListResponseMetaWithDefaults

`func NewBulkChargeListResponseMetaWithDefaults() *BulkChargeListResponseMeta`

NewBulkChargeListResponseMetaWithDefaults instantiates a new BulkChargeListResponseMeta object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTotal

`func (o *BulkChargeListResponseMeta) GetTotal() int32`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *BulkChargeListResponseMeta) GetTotalOk() (*int32, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *BulkChargeListResponseMeta) SetTotal(v int32)`

SetTotal sets Total field to given value.


### GetSkipped

`func (o *BulkChargeListResponseMeta) GetSkipped() int32`

GetSkipped returns the Skipped field if non-nil, zero value otherwise.

### GetSkippedOk

`func (o *BulkChargeListResponseMeta) GetSkippedOk() (*int32, bool)`

GetSkippedOk returns a tuple with the Skipped field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSkipped

`func (o *BulkChargeListResponseMeta) SetSkipped(v int32)`

SetSkipped sets Skipped field to given value.


### GetPerPage

`func (o *BulkChargeListResponseMeta) GetPerPage() BulkChargeListResponseMetaPerPage`

GetPerPage returns the PerPage field if non-nil, zero value otherwise.

### GetPerPageOk

`func (o *BulkChargeListResponseMeta) GetPerPageOk() (*BulkChargeListResponseMetaPerPage, bool)`

GetPerPageOk returns a tuple with the PerPage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPerPage

`func (o *BulkChargeListResponseMeta) SetPerPage(v BulkChargeListResponseMetaPerPage)`

SetPerPage sets PerPage field to given value.


### GetPage

`func (o *BulkChargeListResponseMeta) GetPage() int32`

GetPage returns the Page field if non-nil, zero value otherwise.

### GetPageOk

`func (o *BulkChargeListResponseMeta) GetPageOk() (*int32, bool)`

GetPageOk returns a tuple with the Page field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPage

`func (o *BulkChargeListResponseMeta) SetPage(v int32)`

SetPage sets Page field to given value.


### GetPageCount

`func (o *BulkChargeListResponseMeta) GetPageCount() int32`

GetPageCount returns the PageCount field if non-nil, zero value otherwise.

### GetPageCountOk

`func (o *BulkChargeListResponseMeta) GetPageCountOk() (*int32, bool)`

GetPageCountOk returns a tuple with the PageCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageCount

`func (o *BulkChargeListResponseMeta) SetPageCount(v int32)`

SetPageCount sets PageCount field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


