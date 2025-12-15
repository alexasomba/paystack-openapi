# OrderCreateResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Discounts** | **[]map[string]interface{}** |  | 
**Currency** | **string** |  | 
**ShippingAddress** | **map[string]interface{}** |  | 
**Integration** | **int32** |  | 
**Domain** | **string** |  | 
**Email** | **string** |  | 
**Customer** | **int32** |  | 
**Amount** | **int32** |  | 
**PayForMe** | **bool** |  | 
**Shipping** | [**NullableOrderCreateResponseDataShipping**](OrderCreateResponseDataShipping.md) |  | 
**ShippingFees** | **int32** |  | 
**ShippingMethod** | Pointer to [**OrderCreateResponseDataShippingMethod**](OrderCreateResponseDataShippingMethod.md) |  | [optional] 
**Metadata** | **map[string]interface{}** |  | 
**OrderCode** | **string** |  | 
**Status** | **string** |  | 
**Refunded** | **bool** |  | 
**IsViewed** | **bool** |  | 
**ExpirationDate** | **map[string]interface{}** |  | 
**Id** | **int32** |  | 
**CreatedAt** | **string** |  | 
**UpdatedAt** | **string** |  | 
**Items** | **[]map[string]interface{}** |  | 
**PayForMeCode** | **string** |  | 
**DiscountAmount** | **int32** |  | 

## Methods

### NewOrderCreateResponseData

`func NewOrderCreateResponseData(discounts []map[string]interface{}, currency string, shippingAddress map[string]interface{}, integration int32, domain string, email string, customer int32, amount int32, payForMe bool, shipping NullableOrderCreateResponseDataShipping, shippingFees int32, metadata map[string]interface{}, orderCode string, status string, refunded bool, isViewed bool, expirationDate map[string]interface{}, id int32, createdAt string, updatedAt string, items []map[string]interface{}, payForMeCode string, discountAmount int32, ) *OrderCreateResponseData`

NewOrderCreateResponseData instantiates a new OrderCreateResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrderCreateResponseDataWithDefaults

`func NewOrderCreateResponseDataWithDefaults() *OrderCreateResponseData`

NewOrderCreateResponseDataWithDefaults instantiates a new OrderCreateResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDiscounts

`func (o *OrderCreateResponseData) GetDiscounts() []map[string]interface{}`

GetDiscounts returns the Discounts field if non-nil, zero value otherwise.

### GetDiscountsOk

`func (o *OrderCreateResponseData) GetDiscountsOk() (*[]map[string]interface{}, bool)`

GetDiscountsOk returns a tuple with the Discounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscounts

`func (o *OrderCreateResponseData) SetDiscounts(v []map[string]interface{})`

SetDiscounts sets Discounts field to given value.


### GetCurrency

`func (o *OrderCreateResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *OrderCreateResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *OrderCreateResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetShippingAddress

`func (o *OrderCreateResponseData) GetShippingAddress() map[string]interface{}`

GetShippingAddress returns the ShippingAddress field if non-nil, zero value otherwise.

### GetShippingAddressOk

`func (o *OrderCreateResponseData) GetShippingAddressOk() (*map[string]interface{}, bool)`

GetShippingAddressOk returns a tuple with the ShippingAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShippingAddress

`func (o *OrderCreateResponseData) SetShippingAddress(v map[string]interface{})`

SetShippingAddress sets ShippingAddress field to given value.


### SetShippingAddressNil

`func (o *OrderCreateResponseData) SetShippingAddressNil(b bool)`

 SetShippingAddressNil sets the value for ShippingAddress to be an explicit nil

### UnsetShippingAddress
`func (o *OrderCreateResponseData) UnsetShippingAddress()`

UnsetShippingAddress ensures that no value is present for ShippingAddress, not even an explicit nil
### GetIntegration

`func (o *OrderCreateResponseData) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *OrderCreateResponseData) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *OrderCreateResponseData) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetDomain

`func (o *OrderCreateResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *OrderCreateResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *OrderCreateResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetEmail

`func (o *OrderCreateResponseData) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *OrderCreateResponseData) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *OrderCreateResponseData) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetCustomer

`func (o *OrderCreateResponseData) GetCustomer() int32`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *OrderCreateResponseData) GetCustomerOk() (*int32, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *OrderCreateResponseData) SetCustomer(v int32)`

SetCustomer sets Customer field to given value.


### GetAmount

`func (o *OrderCreateResponseData) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *OrderCreateResponseData) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *OrderCreateResponseData) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetPayForMe

`func (o *OrderCreateResponseData) GetPayForMe() bool`

GetPayForMe returns the PayForMe field if non-nil, zero value otherwise.

### GetPayForMeOk

`func (o *OrderCreateResponseData) GetPayForMeOk() (*bool, bool)`

GetPayForMeOk returns a tuple with the PayForMe field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayForMe

`func (o *OrderCreateResponseData) SetPayForMe(v bool)`

SetPayForMe sets PayForMe field to given value.


### GetShipping

`func (o *OrderCreateResponseData) GetShipping() OrderCreateResponseDataShipping`

GetShipping returns the Shipping field if non-nil, zero value otherwise.

### GetShippingOk

`func (o *OrderCreateResponseData) GetShippingOk() (*OrderCreateResponseDataShipping, bool)`

GetShippingOk returns a tuple with the Shipping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShipping

`func (o *OrderCreateResponseData) SetShipping(v OrderCreateResponseDataShipping)`

SetShipping sets Shipping field to given value.


### SetShippingNil

`func (o *OrderCreateResponseData) SetShippingNil(b bool)`

 SetShippingNil sets the value for Shipping to be an explicit nil

### UnsetShipping
`func (o *OrderCreateResponseData) UnsetShipping()`

UnsetShipping ensures that no value is present for Shipping, not even an explicit nil
### GetShippingFees

`func (o *OrderCreateResponseData) GetShippingFees() int32`

GetShippingFees returns the ShippingFees field if non-nil, zero value otherwise.

### GetShippingFeesOk

`func (o *OrderCreateResponseData) GetShippingFeesOk() (*int32, bool)`

GetShippingFeesOk returns a tuple with the ShippingFees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShippingFees

`func (o *OrderCreateResponseData) SetShippingFees(v int32)`

SetShippingFees sets ShippingFees field to given value.


### GetShippingMethod

`func (o *OrderCreateResponseData) GetShippingMethod() OrderCreateResponseDataShippingMethod`

GetShippingMethod returns the ShippingMethod field if non-nil, zero value otherwise.

### GetShippingMethodOk

`func (o *OrderCreateResponseData) GetShippingMethodOk() (*OrderCreateResponseDataShippingMethod, bool)`

GetShippingMethodOk returns a tuple with the ShippingMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShippingMethod

`func (o *OrderCreateResponseData) SetShippingMethod(v OrderCreateResponseDataShippingMethod)`

SetShippingMethod sets ShippingMethod field to given value.

### HasShippingMethod

`func (o *OrderCreateResponseData) HasShippingMethod() bool`

HasShippingMethod returns a boolean if a field has been set.

### GetMetadata

`func (o *OrderCreateResponseData) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *OrderCreateResponseData) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *OrderCreateResponseData) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.


### GetOrderCode

`func (o *OrderCreateResponseData) GetOrderCode() string`

GetOrderCode returns the OrderCode field if non-nil, zero value otherwise.

### GetOrderCodeOk

`func (o *OrderCreateResponseData) GetOrderCodeOk() (*string, bool)`

GetOrderCodeOk returns a tuple with the OrderCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderCode

`func (o *OrderCreateResponseData) SetOrderCode(v string)`

SetOrderCode sets OrderCode field to given value.


### GetStatus

`func (o *OrderCreateResponseData) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *OrderCreateResponseData) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *OrderCreateResponseData) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetRefunded

`func (o *OrderCreateResponseData) GetRefunded() bool`

GetRefunded returns the Refunded field if non-nil, zero value otherwise.

### GetRefundedOk

`func (o *OrderCreateResponseData) GetRefundedOk() (*bool, bool)`

GetRefundedOk returns a tuple with the Refunded field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefunded

`func (o *OrderCreateResponseData) SetRefunded(v bool)`

SetRefunded sets Refunded field to given value.


### GetIsViewed

`func (o *OrderCreateResponseData) GetIsViewed() bool`

GetIsViewed returns the IsViewed field if non-nil, zero value otherwise.

### GetIsViewedOk

`func (o *OrderCreateResponseData) GetIsViewedOk() (*bool, bool)`

GetIsViewedOk returns a tuple with the IsViewed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsViewed

`func (o *OrderCreateResponseData) SetIsViewed(v bool)`

SetIsViewed sets IsViewed field to given value.


### GetExpirationDate

`func (o *OrderCreateResponseData) GetExpirationDate() map[string]interface{}`

GetExpirationDate returns the ExpirationDate field if non-nil, zero value otherwise.

### GetExpirationDateOk

`func (o *OrderCreateResponseData) GetExpirationDateOk() (*map[string]interface{}, bool)`

GetExpirationDateOk returns a tuple with the ExpirationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpirationDate

`func (o *OrderCreateResponseData) SetExpirationDate(v map[string]interface{})`

SetExpirationDate sets ExpirationDate field to given value.


### SetExpirationDateNil

`func (o *OrderCreateResponseData) SetExpirationDateNil(b bool)`

 SetExpirationDateNil sets the value for ExpirationDate to be an explicit nil

### UnsetExpirationDate
`func (o *OrderCreateResponseData) UnsetExpirationDate()`

UnsetExpirationDate ensures that no value is present for ExpirationDate, not even an explicit nil
### GetId

`func (o *OrderCreateResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *OrderCreateResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *OrderCreateResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetCreatedAt

`func (o *OrderCreateResponseData) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *OrderCreateResponseData) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *OrderCreateResponseData) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *OrderCreateResponseData) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *OrderCreateResponseData) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *OrderCreateResponseData) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.


### GetItems

`func (o *OrderCreateResponseData) GetItems() []map[string]interface{}`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *OrderCreateResponseData) GetItemsOk() (*[]map[string]interface{}, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *OrderCreateResponseData) SetItems(v []map[string]interface{})`

SetItems sets Items field to given value.


### GetPayForMeCode

`func (o *OrderCreateResponseData) GetPayForMeCode() string`

GetPayForMeCode returns the PayForMeCode field if non-nil, zero value otherwise.

### GetPayForMeCodeOk

`func (o *OrderCreateResponseData) GetPayForMeCodeOk() (*string, bool)`

GetPayForMeCodeOk returns a tuple with the PayForMeCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayForMeCode

`func (o *OrderCreateResponseData) SetPayForMeCode(v string)`

SetPayForMeCode sets PayForMeCode field to given value.


### GetDiscountAmount

`func (o *OrderCreateResponseData) GetDiscountAmount() int32`

GetDiscountAmount returns the DiscountAmount field if non-nil, zero value otherwise.

### GetDiscountAmountOk

`func (o *OrderCreateResponseData) GetDiscountAmountOk() (*int32, bool)`

GetDiscountAmountOk returns a tuple with the DiscountAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscountAmount

`func (o *OrderCreateResponseData) SetDiscountAmount(v int32)`

SetDiscountAmount sets DiscountAmount field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


