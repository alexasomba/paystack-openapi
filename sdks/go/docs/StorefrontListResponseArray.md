# StorefrontListResponseArray

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**Name** | **string** |  | 
**Slug** | **string** |  | 
**OrdersCount** | **int32** |  | 
**Status** | **string** |  | 
**Revenue** | **map[string]interface{}** |  | 
**Currency** | **string** |  | 
**Products** | **[]map[string]interface{}** |  | 
**Contacts** | **[]map[string]interface{}** |  | 
**SocialMedia** | **[]map[string]interface{}** |  | 
**ShippingFees** | **[]map[string]interface{}** |  | 

## Methods

### NewStorefrontListResponseArray

`func NewStorefrontListResponseArray(id int32, name string, slug string, ordersCount int32, status string, revenue map[string]interface{}, currency string, products []map[string]interface{}, contacts []map[string]interface{}, socialMedia []map[string]interface{}, shippingFees []map[string]interface{}, ) *StorefrontListResponseArray`

NewStorefrontListResponseArray instantiates a new StorefrontListResponseArray object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStorefrontListResponseArrayWithDefaults

`func NewStorefrontListResponseArrayWithDefaults() *StorefrontListResponseArray`

NewStorefrontListResponseArrayWithDefaults instantiates a new StorefrontListResponseArray object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *StorefrontListResponseArray) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *StorefrontListResponseArray) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *StorefrontListResponseArray) SetId(v int32)`

SetId sets Id field to given value.


### GetName

`func (o *StorefrontListResponseArray) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *StorefrontListResponseArray) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *StorefrontListResponseArray) SetName(v string)`

SetName sets Name field to given value.


### GetSlug

`func (o *StorefrontListResponseArray) GetSlug() string`

GetSlug returns the Slug field if non-nil, zero value otherwise.

### GetSlugOk

`func (o *StorefrontListResponseArray) GetSlugOk() (*string, bool)`

GetSlugOk returns a tuple with the Slug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlug

`func (o *StorefrontListResponseArray) SetSlug(v string)`

SetSlug sets Slug field to given value.


### GetOrdersCount

`func (o *StorefrontListResponseArray) GetOrdersCount() int32`

GetOrdersCount returns the OrdersCount field if non-nil, zero value otherwise.

### GetOrdersCountOk

`func (o *StorefrontListResponseArray) GetOrdersCountOk() (*int32, bool)`

GetOrdersCountOk returns a tuple with the OrdersCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrdersCount

`func (o *StorefrontListResponseArray) SetOrdersCount(v int32)`

SetOrdersCount sets OrdersCount field to given value.


### GetStatus

`func (o *StorefrontListResponseArray) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *StorefrontListResponseArray) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *StorefrontListResponseArray) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetRevenue

`func (o *StorefrontListResponseArray) GetRevenue() map[string]interface{}`

GetRevenue returns the Revenue field if non-nil, zero value otherwise.

### GetRevenueOk

`func (o *StorefrontListResponseArray) GetRevenueOk() (*map[string]interface{}, bool)`

GetRevenueOk returns a tuple with the Revenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenue

`func (o *StorefrontListResponseArray) SetRevenue(v map[string]interface{})`

SetRevenue sets Revenue field to given value.


### SetRevenueNil

`func (o *StorefrontListResponseArray) SetRevenueNil(b bool)`

 SetRevenueNil sets the value for Revenue to be an explicit nil

### UnsetRevenue
`func (o *StorefrontListResponseArray) UnsetRevenue()`

UnsetRevenue ensures that no value is present for Revenue, not even an explicit nil
### GetCurrency

`func (o *StorefrontListResponseArray) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *StorefrontListResponseArray) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *StorefrontListResponseArray) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetProducts

`func (o *StorefrontListResponseArray) GetProducts() []map[string]interface{}`

GetProducts returns the Products field if non-nil, zero value otherwise.

### GetProductsOk

`func (o *StorefrontListResponseArray) GetProductsOk() (*[]map[string]interface{}, bool)`

GetProductsOk returns a tuple with the Products field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProducts

`func (o *StorefrontListResponseArray) SetProducts(v []map[string]interface{})`

SetProducts sets Products field to given value.


### GetContacts

`func (o *StorefrontListResponseArray) GetContacts() []map[string]interface{}`

GetContacts returns the Contacts field if non-nil, zero value otherwise.

### GetContactsOk

`func (o *StorefrontListResponseArray) GetContactsOk() (*[]map[string]interface{}, bool)`

GetContactsOk returns a tuple with the Contacts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContacts

`func (o *StorefrontListResponseArray) SetContacts(v []map[string]interface{})`

SetContacts sets Contacts field to given value.


### GetSocialMedia

`func (o *StorefrontListResponseArray) GetSocialMedia() []map[string]interface{}`

GetSocialMedia returns the SocialMedia field if non-nil, zero value otherwise.

### GetSocialMediaOk

`func (o *StorefrontListResponseArray) GetSocialMediaOk() (*[]map[string]interface{}, bool)`

GetSocialMediaOk returns a tuple with the SocialMedia field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSocialMedia

`func (o *StorefrontListResponseArray) SetSocialMedia(v []map[string]interface{})`

SetSocialMedia sets SocialMedia field to given value.


### GetShippingFees

`func (o *StorefrontListResponseArray) GetShippingFees() []map[string]interface{}`

GetShippingFees returns the ShippingFees field if non-nil, zero value otherwise.

### GetShippingFeesOk

`func (o *StorefrontListResponseArray) GetShippingFeesOk() (*[]map[string]interface{}, bool)`

GetShippingFeesOk returns a tuple with the ShippingFees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShippingFees

`func (o *StorefrontListResponseArray) SetShippingFees(v []map[string]interface{})`

SetShippingFees sets ShippingFees field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


