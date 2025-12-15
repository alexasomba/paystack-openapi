# OrderFetchResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Discounts** | **[]interface{}** |  | 
**OrderCode** | **string** |  | 
**Domain** | **string** |  | 
**Currency** | **string** |  | 
**Amount** | **int32** |  | 
**Email** | **string** |  | 
**Status** | **string** |  | 
**Refunded** | **bool** |  | 
**PaidAt** | **string** |  | 
**ShippingAddress** | **interface{}** |  | 
**Metadata** | **map[string]interface{}** |  | 
**ShippingFees** | **int32** |  | 
**ShippingMethod** | **interface{}** |  | 
**IsViewed** | **bool** |  | 
**ExpirationDate** | **string** |  | 
**PayForMe** | **bool** |  | 
**Id** | **int32** |  | 
**Integration** | **int32** |  | 
**Page** | **interface{}** |  | 
**Customer** | [**TransactionFetchResponseDataCustomer**](TransactionFetchResponseDataCustomer.md) |  | 
**Shipping** | **interface{}** |  | 
**CreatedAt** | **string** |  | 
**UpdatedAt** | **string** |  | 
**Transaction** | **int32** |  | 
**IsGift** | **bool** |  | 
**Payer** | [**TransactionFetchResponseDataCustomer**](TransactionFetchResponseDataCustomer.md) |  | 
**FullyRefunded** | **bool** |  | 
**RefundedAmount** | **int32** |  | 
**Items** | [**[]OrderItemsArray**](OrderItemsArray.md) |  | 
**DiscountAmount** | **interface{}** |  | 

## Methods

### NewOrderFetchResponseData

`func NewOrderFetchResponseData(discounts []interface{}, orderCode string, domain string, currency string, amount int32, email string, status string, refunded bool, paidAt string, shippingAddress interface{}, metadata map[string]interface{}, shippingFees int32, shippingMethod interface{}, isViewed bool, expirationDate string, payForMe bool, id int32, integration int32, page interface{}, customer TransactionFetchResponseDataCustomer, shipping interface{}, createdAt string, updatedAt string, transaction int32, isGift bool, payer TransactionFetchResponseDataCustomer, fullyRefunded bool, refundedAmount int32, items []OrderItemsArray, discountAmount interface{}, ) *OrderFetchResponseData`

NewOrderFetchResponseData instantiates a new OrderFetchResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrderFetchResponseDataWithDefaults

`func NewOrderFetchResponseDataWithDefaults() *OrderFetchResponseData`

NewOrderFetchResponseDataWithDefaults instantiates a new OrderFetchResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDiscounts

`func (o *OrderFetchResponseData) GetDiscounts() []interface{}`

GetDiscounts returns the Discounts field if non-nil, zero value otherwise.

### GetDiscountsOk

`func (o *OrderFetchResponseData) GetDiscountsOk() (*[]interface{}, bool)`

GetDiscountsOk returns a tuple with the Discounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscounts

`func (o *OrderFetchResponseData) SetDiscounts(v []interface{})`

SetDiscounts sets Discounts field to given value.


### GetOrderCode

`func (o *OrderFetchResponseData) GetOrderCode() string`

GetOrderCode returns the OrderCode field if non-nil, zero value otherwise.

### GetOrderCodeOk

`func (o *OrderFetchResponseData) GetOrderCodeOk() (*string, bool)`

GetOrderCodeOk returns a tuple with the OrderCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderCode

`func (o *OrderFetchResponseData) SetOrderCode(v string)`

SetOrderCode sets OrderCode field to given value.


### GetDomain

`func (o *OrderFetchResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *OrderFetchResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *OrderFetchResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetCurrency

`func (o *OrderFetchResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *OrderFetchResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *OrderFetchResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetAmount

`func (o *OrderFetchResponseData) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *OrderFetchResponseData) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *OrderFetchResponseData) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetEmail

`func (o *OrderFetchResponseData) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *OrderFetchResponseData) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *OrderFetchResponseData) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetStatus

`func (o *OrderFetchResponseData) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *OrderFetchResponseData) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *OrderFetchResponseData) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetRefunded

`func (o *OrderFetchResponseData) GetRefunded() bool`

GetRefunded returns the Refunded field if non-nil, zero value otherwise.

### GetRefundedOk

`func (o *OrderFetchResponseData) GetRefundedOk() (*bool, bool)`

GetRefundedOk returns a tuple with the Refunded field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefunded

`func (o *OrderFetchResponseData) SetRefunded(v bool)`

SetRefunded sets Refunded field to given value.


### GetPaidAt

`func (o *OrderFetchResponseData) GetPaidAt() string`

GetPaidAt returns the PaidAt field if non-nil, zero value otherwise.

### GetPaidAtOk

`func (o *OrderFetchResponseData) GetPaidAtOk() (*string, bool)`

GetPaidAtOk returns a tuple with the PaidAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaidAt

`func (o *OrderFetchResponseData) SetPaidAt(v string)`

SetPaidAt sets PaidAt field to given value.


### GetShippingAddress

`func (o *OrderFetchResponseData) GetShippingAddress() interface{}`

GetShippingAddress returns the ShippingAddress field if non-nil, zero value otherwise.

### GetShippingAddressOk

`func (o *OrderFetchResponseData) GetShippingAddressOk() (*interface{}, bool)`

GetShippingAddressOk returns a tuple with the ShippingAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShippingAddress

`func (o *OrderFetchResponseData) SetShippingAddress(v interface{})`

SetShippingAddress sets ShippingAddress field to given value.


### SetShippingAddressNil

`func (o *OrderFetchResponseData) SetShippingAddressNil(b bool)`

 SetShippingAddressNil sets the value for ShippingAddress to be an explicit nil

### UnsetShippingAddress
`func (o *OrderFetchResponseData) UnsetShippingAddress()`

UnsetShippingAddress ensures that no value is present for ShippingAddress, not even an explicit nil
### GetMetadata

`func (o *OrderFetchResponseData) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *OrderFetchResponseData) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *OrderFetchResponseData) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.


### GetShippingFees

`func (o *OrderFetchResponseData) GetShippingFees() int32`

GetShippingFees returns the ShippingFees field if non-nil, zero value otherwise.

### GetShippingFeesOk

`func (o *OrderFetchResponseData) GetShippingFeesOk() (*int32, bool)`

GetShippingFeesOk returns a tuple with the ShippingFees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShippingFees

`func (o *OrderFetchResponseData) SetShippingFees(v int32)`

SetShippingFees sets ShippingFees field to given value.


### GetShippingMethod

`func (o *OrderFetchResponseData) GetShippingMethod() interface{}`

GetShippingMethod returns the ShippingMethod field if non-nil, zero value otherwise.

### GetShippingMethodOk

`func (o *OrderFetchResponseData) GetShippingMethodOk() (*interface{}, bool)`

GetShippingMethodOk returns a tuple with the ShippingMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShippingMethod

`func (o *OrderFetchResponseData) SetShippingMethod(v interface{})`

SetShippingMethod sets ShippingMethod field to given value.


### SetShippingMethodNil

`func (o *OrderFetchResponseData) SetShippingMethodNil(b bool)`

 SetShippingMethodNil sets the value for ShippingMethod to be an explicit nil

### UnsetShippingMethod
`func (o *OrderFetchResponseData) UnsetShippingMethod()`

UnsetShippingMethod ensures that no value is present for ShippingMethod, not even an explicit nil
### GetIsViewed

`func (o *OrderFetchResponseData) GetIsViewed() bool`

GetIsViewed returns the IsViewed field if non-nil, zero value otherwise.

### GetIsViewedOk

`func (o *OrderFetchResponseData) GetIsViewedOk() (*bool, bool)`

GetIsViewedOk returns a tuple with the IsViewed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsViewed

`func (o *OrderFetchResponseData) SetIsViewed(v bool)`

SetIsViewed sets IsViewed field to given value.


### GetExpirationDate

`func (o *OrderFetchResponseData) GetExpirationDate() string`

GetExpirationDate returns the ExpirationDate field if non-nil, zero value otherwise.

### GetExpirationDateOk

`func (o *OrderFetchResponseData) GetExpirationDateOk() (*string, bool)`

GetExpirationDateOk returns a tuple with the ExpirationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpirationDate

`func (o *OrderFetchResponseData) SetExpirationDate(v string)`

SetExpirationDate sets ExpirationDate field to given value.


### GetPayForMe

`func (o *OrderFetchResponseData) GetPayForMe() bool`

GetPayForMe returns the PayForMe field if non-nil, zero value otherwise.

### GetPayForMeOk

`func (o *OrderFetchResponseData) GetPayForMeOk() (*bool, bool)`

GetPayForMeOk returns a tuple with the PayForMe field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayForMe

`func (o *OrderFetchResponseData) SetPayForMe(v bool)`

SetPayForMe sets PayForMe field to given value.


### GetId

`func (o *OrderFetchResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *OrderFetchResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *OrderFetchResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetIntegration

`func (o *OrderFetchResponseData) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *OrderFetchResponseData) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *OrderFetchResponseData) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetPage

`func (o *OrderFetchResponseData) GetPage() interface{}`

GetPage returns the Page field if non-nil, zero value otherwise.

### GetPageOk

`func (o *OrderFetchResponseData) GetPageOk() (*interface{}, bool)`

GetPageOk returns a tuple with the Page field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPage

`func (o *OrderFetchResponseData) SetPage(v interface{})`

SetPage sets Page field to given value.


### SetPageNil

`func (o *OrderFetchResponseData) SetPageNil(b bool)`

 SetPageNil sets the value for Page to be an explicit nil

### UnsetPage
`func (o *OrderFetchResponseData) UnsetPage()`

UnsetPage ensures that no value is present for Page, not even an explicit nil
### GetCustomer

`func (o *OrderFetchResponseData) GetCustomer() TransactionFetchResponseDataCustomer`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *OrderFetchResponseData) GetCustomerOk() (*TransactionFetchResponseDataCustomer, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *OrderFetchResponseData) SetCustomer(v TransactionFetchResponseDataCustomer)`

SetCustomer sets Customer field to given value.


### GetShipping

`func (o *OrderFetchResponseData) GetShipping() interface{}`

GetShipping returns the Shipping field if non-nil, zero value otherwise.

### GetShippingOk

`func (o *OrderFetchResponseData) GetShippingOk() (*interface{}, bool)`

GetShippingOk returns a tuple with the Shipping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShipping

`func (o *OrderFetchResponseData) SetShipping(v interface{})`

SetShipping sets Shipping field to given value.


### SetShippingNil

`func (o *OrderFetchResponseData) SetShippingNil(b bool)`

 SetShippingNil sets the value for Shipping to be an explicit nil

### UnsetShipping
`func (o *OrderFetchResponseData) UnsetShipping()`

UnsetShipping ensures that no value is present for Shipping, not even an explicit nil
### GetCreatedAt

`func (o *OrderFetchResponseData) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *OrderFetchResponseData) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *OrderFetchResponseData) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *OrderFetchResponseData) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *OrderFetchResponseData) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *OrderFetchResponseData) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.


### GetTransaction

`func (o *OrderFetchResponseData) GetTransaction() int32`

GetTransaction returns the Transaction field if non-nil, zero value otherwise.

### GetTransactionOk

`func (o *OrderFetchResponseData) GetTransactionOk() (*int32, bool)`

GetTransactionOk returns a tuple with the Transaction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransaction

`func (o *OrderFetchResponseData) SetTransaction(v int32)`

SetTransaction sets Transaction field to given value.


### GetIsGift

`func (o *OrderFetchResponseData) GetIsGift() bool`

GetIsGift returns the IsGift field if non-nil, zero value otherwise.

### GetIsGiftOk

`func (o *OrderFetchResponseData) GetIsGiftOk() (*bool, bool)`

GetIsGiftOk returns a tuple with the IsGift field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsGift

`func (o *OrderFetchResponseData) SetIsGift(v bool)`

SetIsGift sets IsGift field to given value.


### GetPayer

`func (o *OrderFetchResponseData) GetPayer() TransactionFetchResponseDataCustomer`

GetPayer returns the Payer field if non-nil, zero value otherwise.

### GetPayerOk

`func (o *OrderFetchResponseData) GetPayerOk() (*TransactionFetchResponseDataCustomer, bool)`

GetPayerOk returns a tuple with the Payer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayer

`func (o *OrderFetchResponseData) SetPayer(v TransactionFetchResponseDataCustomer)`

SetPayer sets Payer field to given value.


### GetFullyRefunded

`func (o *OrderFetchResponseData) GetFullyRefunded() bool`

GetFullyRefunded returns the FullyRefunded field if non-nil, zero value otherwise.

### GetFullyRefundedOk

`func (o *OrderFetchResponseData) GetFullyRefundedOk() (*bool, bool)`

GetFullyRefundedOk returns a tuple with the FullyRefunded field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullyRefunded

`func (o *OrderFetchResponseData) SetFullyRefunded(v bool)`

SetFullyRefunded sets FullyRefunded field to given value.


### GetRefundedAmount

`func (o *OrderFetchResponseData) GetRefundedAmount() int32`

GetRefundedAmount returns the RefundedAmount field if non-nil, zero value otherwise.

### GetRefundedAmountOk

`func (o *OrderFetchResponseData) GetRefundedAmountOk() (*int32, bool)`

GetRefundedAmountOk returns a tuple with the RefundedAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundedAmount

`func (o *OrderFetchResponseData) SetRefundedAmount(v int32)`

SetRefundedAmount sets RefundedAmount field to given value.


### GetItems

`func (o *OrderFetchResponseData) GetItems() []OrderItemsArray`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *OrderFetchResponseData) GetItemsOk() (*[]OrderItemsArray, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *OrderFetchResponseData) SetItems(v []OrderItemsArray)`

SetItems sets Items field to given value.


### GetDiscountAmount

`func (o *OrderFetchResponseData) GetDiscountAmount() interface{}`

GetDiscountAmount returns the DiscountAmount field if non-nil, zero value otherwise.

### GetDiscountAmountOk

`func (o *OrderFetchResponseData) GetDiscountAmountOk() (*interface{}, bool)`

GetDiscountAmountOk returns a tuple with the DiscountAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscountAmount

`func (o *OrderFetchResponseData) SetDiscountAmount(v interface{})`

SetDiscountAmount sets DiscountAmount field to given value.


### SetDiscountAmountNil

`func (o *OrderFetchResponseData) SetDiscountAmountNil(b bool)`

 SetDiscountAmountNil sets the value for DiscountAmount to be an explicit nil

### UnsetDiscountAmount
`func (o *OrderFetchResponseData) UnsetDiscountAmount()`

UnsetDiscountAmount ensures that no value is present for DiscountAmount, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


