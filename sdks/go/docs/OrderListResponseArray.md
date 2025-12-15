# OrderListResponseArray

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**OrderCode** | **string** |  | 
**Integration** | **int32** |  | 
**Domain** | **string** |  | 
**Currency** | **string** |  | 
**Amount** | **int32** |  | 
**Transaction** | **int32** |  | 
**Page** | **map[string]interface{}** |  | 
**Customer** | **int32** |  | 
**CustomerName** | **string** |  | 
**Status** | **string** |  | 
**ShippingAddress** | **map[string]interface{}** |  | 
**Metadata** | **string** |  | 
**CreatedAt** | **string** |  | 
**UpdatedAt** | **string** |  | 
**Email** | **string** |  | 
**PaidAt** | **string** |  | 
**Shipping** | **map[string]interface{}** |  | 
**ShippingFees** | **int32** |  | 
**Refunded** | **bool** |  | 
**IsViewed** | **bool** |  | 
**RefundedAmount** | **map[string]interface{}** |  | 
**DiscountAmount** | **map[string]interface{}** |  | 
**Discounts** | **map[string]interface{}** |  | 
**Items** | [**[]OrderItemsArray**](OrderItemsArray.md) |  | 
**FullyRefunded** | **bool** |  | 

## Methods

### NewOrderListResponseArray

`func NewOrderListResponseArray(id int32, orderCode string, integration int32, domain string, currency string, amount int32, transaction int32, page map[string]interface{}, customer int32, customerName string, status string, shippingAddress map[string]interface{}, metadata string, createdAt string, updatedAt string, email string, paidAt string, shipping map[string]interface{}, shippingFees int32, refunded bool, isViewed bool, refundedAmount map[string]interface{}, discountAmount map[string]interface{}, discounts map[string]interface{}, items []OrderItemsArray, fullyRefunded bool, ) *OrderListResponseArray`

NewOrderListResponseArray instantiates a new OrderListResponseArray object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrderListResponseArrayWithDefaults

`func NewOrderListResponseArrayWithDefaults() *OrderListResponseArray`

NewOrderListResponseArrayWithDefaults instantiates a new OrderListResponseArray object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *OrderListResponseArray) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *OrderListResponseArray) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *OrderListResponseArray) SetId(v int32)`

SetId sets Id field to given value.


### GetOrderCode

`func (o *OrderListResponseArray) GetOrderCode() string`

GetOrderCode returns the OrderCode field if non-nil, zero value otherwise.

### GetOrderCodeOk

`func (o *OrderListResponseArray) GetOrderCodeOk() (*string, bool)`

GetOrderCodeOk returns a tuple with the OrderCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderCode

`func (o *OrderListResponseArray) SetOrderCode(v string)`

SetOrderCode sets OrderCode field to given value.


### GetIntegration

`func (o *OrderListResponseArray) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *OrderListResponseArray) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *OrderListResponseArray) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetDomain

`func (o *OrderListResponseArray) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *OrderListResponseArray) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *OrderListResponseArray) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetCurrency

`func (o *OrderListResponseArray) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *OrderListResponseArray) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *OrderListResponseArray) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetAmount

`func (o *OrderListResponseArray) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *OrderListResponseArray) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *OrderListResponseArray) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetTransaction

`func (o *OrderListResponseArray) GetTransaction() int32`

GetTransaction returns the Transaction field if non-nil, zero value otherwise.

### GetTransactionOk

`func (o *OrderListResponseArray) GetTransactionOk() (*int32, bool)`

GetTransactionOk returns a tuple with the Transaction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransaction

`func (o *OrderListResponseArray) SetTransaction(v int32)`

SetTransaction sets Transaction field to given value.


### GetPage

`func (o *OrderListResponseArray) GetPage() map[string]interface{}`

GetPage returns the Page field if non-nil, zero value otherwise.

### GetPageOk

`func (o *OrderListResponseArray) GetPageOk() (*map[string]interface{}, bool)`

GetPageOk returns a tuple with the Page field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPage

`func (o *OrderListResponseArray) SetPage(v map[string]interface{})`

SetPage sets Page field to given value.


### SetPageNil

`func (o *OrderListResponseArray) SetPageNil(b bool)`

 SetPageNil sets the value for Page to be an explicit nil

### UnsetPage
`func (o *OrderListResponseArray) UnsetPage()`

UnsetPage ensures that no value is present for Page, not even an explicit nil
### GetCustomer

`func (o *OrderListResponseArray) GetCustomer() int32`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *OrderListResponseArray) GetCustomerOk() (*int32, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *OrderListResponseArray) SetCustomer(v int32)`

SetCustomer sets Customer field to given value.


### GetCustomerName

`func (o *OrderListResponseArray) GetCustomerName() string`

GetCustomerName returns the CustomerName field if non-nil, zero value otherwise.

### GetCustomerNameOk

`func (o *OrderListResponseArray) GetCustomerNameOk() (*string, bool)`

GetCustomerNameOk returns a tuple with the CustomerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerName

`func (o *OrderListResponseArray) SetCustomerName(v string)`

SetCustomerName sets CustomerName field to given value.


### GetStatus

`func (o *OrderListResponseArray) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *OrderListResponseArray) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *OrderListResponseArray) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetShippingAddress

`func (o *OrderListResponseArray) GetShippingAddress() map[string]interface{}`

GetShippingAddress returns the ShippingAddress field if non-nil, zero value otherwise.

### GetShippingAddressOk

`func (o *OrderListResponseArray) GetShippingAddressOk() (*map[string]interface{}, bool)`

GetShippingAddressOk returns a tuple with the ShippingAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShippingAddress

`func (o *OrderListResponseArray) SetShippingAddress(v map[string]interface{})`

SetShippingAddress sets ShippingAddress field to given value.


### SetShippingAddressNil

`func (o *OrderListResponseArray) SetShippingAddressNil(b bool)`

 SetShippingAddressNil sets the value for ShippingAddress to be an explicit nil

### UnsetShippingAddress
`func (o *OrderListResponseArray) UnsetShippingAddress()`

UnsetShippingAddress ensures that no value is present for ShippingAddress, not even an explicit nil
### GetMetadata

`func (o *OrderListResponseArray) GetMetadata() string`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *OrderListResponseArray) GetMetadataOk() (*string, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *OrderListResponseArray) SetMetadata(v string)`

SetMetadata sets Metadata field to given value.


### GetCreatedAt

`func (o *OrderListResponseArray) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *OrderListResponseArray) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *OrderListResponseArray) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *OrderListResponseArray) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *OrderListResponseArray) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *OrderListResponseArray) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.


### GetEmail

`func (o *OrderListResponseArray) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *OrderListResponseArray) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *OrderListResponseArray) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetPaidAt

`func (o *OrderListResponseArray) GetPaidAt() string`

GetPaidAt returns the PaidAt field if non-nil, zero value otherwise.

### GetPaidAtOk

`func (o *OrderListResponseArray) GetPaidAtOk() (*string, bool)`

GetPaidAtOk returns a tuple with the PaidAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaidAt

`func (o *OrderListResponseArray) SetPaidAt(v string)`

SetPaidAt sets PaidAt field to given value.


### GetShipping

`func (o *OrderListResponseArray) GetShipping() map[string]interface{}`

GetShipping returns the Shipping field if non-nil, zero value otherwise.

### GetShippingOk

`func (o *OrderListResponseArray) GetShippingOk() (*map[string]interface{}, bool)`

GetShippingOk returns a tuple with the Shipping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShipping

`func (o *OrderListResponseArray) SetShipping(v map[string]interface{})`

SetShipping sets Shipping field to given value.


### SetShippingNil

`func (o *OrderListResponseArray) SetShippingNil(b bool)`

 SetShippingNil sets the value for Shipping to be an explicit nil

### UnsetShipping
`func (o *OrderListResponseArray) UnsetShipping()`

UnsetShipping ensures that no value is present for Shipping, not even an explicit nil
### GetShippingFees

`func (o *OrderListResponseArray) GetShippingFees() int32`

GetShippingFees returns the ShippingFees field if non-nil, zero value otherwise.

### GetShippingFeesOk

`func (o *OrderListResponseArray) GetShippingFeesOk() (*int32, bool)`

GetShippingFeesOk returns a tuple with the ShippingFees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShippingFees

`func (o *OrderListResponseArray) SetShippingFees(v int32)`

SetShippingFees sets ShippingFees field to given value.


### GetRefunded

`func (o *OrderListResponseArray) GetRefunded() bool`

GetRefunded returns the Refunded field if non-nil, zero value otherwise.

### GetRefundedOk

`func (o *OrderListResponseArray) GetRefundedOk() (*bool, bool)`

GetRefundedOk returns a tuple with the Refunded field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefunded

`func (o *OrderListResponseArray) SetRefunded(v bool)`

SetRefunded sets Refunded field to given value.


### GetIsViewed

`func (o *OrderListResponseArray) GetIsViewed() bool`

GetIsViewed returns the IsViewed field if non-nil, zero value otherwise.

### GetIsViewedOk

`func (o *OrderListResponseArray) GetIsViewedOk() (*bool, bool)`

GetIsViewedOk returns a tuple with the IsViewed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsViewed

`func (o *OrderListResponseArray) SetIsViewed(v bool)`

SetIsViewed sets IsViewed field to given value.


### GetRefundedAmount

`func (o *OrderListResponseArray) GetRefundedAmount() map[string]interface{}`

GetRefundedAmount returns the RefundedAmount field if non-nil, zero value otherwise.

### GetRefundedAmountOk

`func (o *OrderListResponseArray) GetRefundedAmountOk() (*map[string]interface{}, bool)`

GetRefundedAmountOk returns a tuple with the RefundedAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundedAmount

`func (o *OrderListResponseArray) SetRefundedAmount(v map[string]interface{})`

SetRefundedAmount sets RefundedAmount field to given value.


### SetRefundedAmountNil

`func (o *OrderListResponseArray) SetRefundedAmountNil(b bool)`

 SetRefundedAmountNil sets the value for RefundedAmount to be an explicit nil

### UnsetRefundedAmount
`func (o *OrderListResponseArray) UnsetRefundedAmount()`

UnsetRefundedAmount ensures that no value is present for RefundedAmount, not even an explicit nil
### GetDiscountAmount

`func (o *OrderListResponseArray) GetDiscountAmount() map[string]interface{}`

GetDiscountAmount returns the DiscountAmount field if non-nil, zero value otherwise.

### GetDiscountAmountOk

`func (o *OrderListResponseArray) GetDiscountAmountOk() (*map[string]interface{}, bool)`

GetDiscountAmountOk returns a tuple with the DiscountAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscountAmount

`func (o *OrderListResponseArray) SetDiscountAmount(v map[string]interface{})`

SetDiscountAmount sets DiscountAmount field to given value.


### SetDiscountAmountNil

`func (o *OrderListResponseArray) SetDiscountAmountNil(b bool)`

 SetDiscountAmountNil sets the value for DiscountAmount to be an explicit nil

### UnsetDiscountAmount
`func (o *OrderListResponseArray) UnsetDiscountAmount()`

UnsetDiscountAmount ensures that no value is present for DiscountAmount, not even an explicit nil
### GetDiscounts

`func (o *OrderListResponseArray) GetDiscounts() map[string]interface{}`

GetDiscounts returns the Discounts field if non-nil, zero value otherwise.

### GetDiscountsOk

`func (o *OrderListResponseArray) GetDiscountsOk() (*map[string]interface{}, bool)`

GetDiscountsOk returns a tuple with the Discounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscounts

`func (o *OrderListResponseArray) SetDiscounts(v map[string]interface{})`

SetDiscounts sets Discounts field to given value.


### SetDiscountsNil

`func (o *OrderListResponseArray) SetDiscountsNil(b bool)`

 SetDiscountsNil sets the value for Discounts to be an explicit nil

### UnsetDiscounts
`func (o *OrderListResponseArray) UnsetDiscounts()`

UnsetDiscounts ensures that no value is present for Discounts, not even an explicit nil
### GetItems

`func (o *OrderListResponseArray) GetItems() []OrderItemsArray`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *OrderListResponseArray) GetItemsOk() (*[]OrderItemsArray, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *OrderListResponseArray) SetItems(v []OrderItemsArray)`

SetItems sets Items field to given value.


### GetFullyRefunded

`func (o *OrderListResponseArray) GetFullyRefunded() bool`

GetFullyRefunded returns the FullyRefunded field if non-nil, zero value otherwise.

### GetFullyRefundedOk

`func (o *OrderListResponseArray) GetFullyRefundedOk() (*bool, bool)`

GetFullyRefundedOk returns a tuple with the FullyRefunded field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullyRefunded

`func (o *OrderListResponseArray) SetFullyRefunded(v bool)`

SetFullyRefunded sets FullyRefunded field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


