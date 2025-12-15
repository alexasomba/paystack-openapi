# OrderListResponseMeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Total** | **int32** |  | 
**Revenue** | **map[string]interface{}** |  | 
**Skipped** | **int32** |  | 
**PerPage** | **int32** |  | 
**Page** | **int32** |  | 
**PageCount** | **int32** |  | 

## Methods

### NewOrderListResponseMeta

`func NewOrderListResponseMeta(total int32, revenue map[string]interface{}, skipped int32, perPage int32, page int32, pageCount int32, ) *OrderListResponseMeta`

NewOrderListResponseMeta instantiates a new OrderListResponseMeta object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrderListResponseMetaWithDefaults

`func NewOrderListResponseMetaWithDefaults() *OrderListResponseMeta`

NewOrderListResponseMetaWithDefaults instantiates a new OrderListResponseMeta object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTotal

`func (o *OrderListResponseMeta) GetTotal() int32`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *OrderListResponseMeta) GetTotalOk() (*int32, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *OrderListResponseMeta) SetTotal(v int32)`

SetTotal sets Total field to given value.


### GetRevenue

`func (o *OrderListResponseMeta) GetRevenue() map[string]interface{}`

GetRevenue returns the Revenue field if non-nil, zero value otherwise.

### GetRevenueOk

`func (o *OrderListResponseMeta) GetRevenueOk() (*map[string]interface{}, bool)`

GetRevenueOk returns a tuple with the Revenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenue

`func (o *OrderListResponseMeta) SetRevenue(v map[string]interface{})`

SetRevenue sets Revenue field to given value.


### GetSkipped

`func (o *OrderListResponseMeta) GetSkipped() int32`

GetSkipped returns the Skipped field if non-nil, zero value otherwise.

### GetSkippedOk

`func (o *OrderListResponseMeta) GetSkippedOk() (*int32, bool)`

GetSkippedOk returns a tuple with the Skipped field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSkipped

`func (o *OrderListResponseMeta) SetSkipped(v int32)`

SetSkipped sets Skipped field to given value.


### GetPerPage

`func (o *OrderListResponseMeta) GetPerPage() int32`

GetPerPage returns the PerPage field if non-nil, zero value otherwise.

### GetPerPageOk

`func (o *OrderListResponseMeta) GetPerPageOk() (*int32, bool)`

GetPerPageOk returns a tuple with the PerPage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPerPage

`func (o *OrderListResponseMeta) SetPerPage(v int32)`

SetPerPage sets PerPage field to given value.


### GetPage

`func (o *OrderListResponseMeta) GetPage() int32`

GetPage returns the Page field if non-nil, zero value otherwise.

### GetPageOk

`func (o *OrderListResponseMeta) GetPageOk() (*int32, bool)`

GetPageOk returns a tuple with the Page field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPage

`func (o *OrderListResponseMeta) SetPage(v int32)`

SetPage sets Page field to given value.


### GetPageCount

`func (o *OrderListResponseMeta) GetPageCount() int32`

GetPageCount returns the PageCount field if non-nil, zero value otherwise.

### GetPageCountOk

`func (o *OrderListResponseMeta) GetPageCountOk() (*int32, bool)`

GetPageCountOk returns a tuple with the PageCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageCount

`func (o *OrderListResponseMeta) SetPageCount(v int32)`

SetPageCount sets PageCount field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


