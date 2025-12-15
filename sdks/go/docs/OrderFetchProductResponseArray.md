# OrderFetchProductResponseArray

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OrderId** | **int32** |  | 
**Transaction** | **int32** |  | 
**OrderCode** | **string** |  | 
**Customer** | **int32** |  | 
**FirstName** | **string** |  | 
**LastName** | **string** |  | 
**CustomerName** | **string** |  | 
**Phone** | **string** |  | 
**Email** | **string** |  | 
**ProductCode** | **string** |  | 
**ProductId** | **int32** |  | 
**ProductName** | **string** |  | 
**Price** | **int32** |  | 
**QuantitySold** | **int32** |  | 
**Currency** | **string** |  | 
**Quantity** | **int32** |  | 
**VariantId** | **map[string]interface{}** |  | 
**VariantPrice** | **map[string]interface{}** |  | 
**VariantCode** | **map[string]interface{}** |  | 
**Amount** | **int32** |  | 
**ShippingMethod** | **map[string]interface{}** |  | 
**Status** | **string** |  | 
**ShippingAddress** | **map[string]interface{}** |  | 
**Refunded** | **bool** |  | 
**Shipping** | **map[string]interface{}** |  | 
**PaidAt** | **string** |  | 
**CreatedAt** | **string** |  | 
**IsShipped** | **bool** |  | 
**IsViewed** | **int32** |  | 
**DeliveryNote** | **map[string]interface{}** |  | 
**ShippingFee** | **map[string]interface{}** |  | 
**AmountPaid** | **int32** |  | 
**StorefrontSlug** | **string** |  | 

## Methods

### NewOrderFetchProductResponseArray

`func NewOrderFetchProductResponseArray(orderId int32, transaction int32, orderCode string, customer int32, firstName string, lastName string, customerName string, phone string, email string, productCode string, productId int32, productName string, price int32, quantitySold int32, currency string, quantity int32, variantId map[string]interface{}, variantPrice map[string]interface{}, variantCode map[string]interface{}, amount int32, shippingMethod map[string]interface{}, status string, shippingAddress map[string]interface{}, refunded bool, shipping map[string]interface{}, paidAt string, createdAt string, isShipped bool, isViewed int32, deliveryNote map[string]interface{}, shippingFee map[string]interface{}, amountPaid int32, storefrontSlug string, ) *OrderFetchProductResponseArray`

NewOrderFetchProductResponseArray instantiates a new OrderFetchProductResponseArray object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrderFetchProductResponseArrayWithDefaults

`func NewOrderFetchProductResponseArrayWithDefaults() *OrderFetchProductResponseArray`

NewOrderFetchProductResponseArrayWithDefaults instantiates a new OrderFetchProductResponseArray object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOrderId

`func (o *OrderFetchProductResponseArray) GetOrderId() int32`

GetOrderId returns the OrderId field if non-nil, zero value otherwise.

### GetOrderIdOk

`func (o *OrderFetchProductResponseArray) GetOrderIdOk() (*int32, bool)`

GetOrderIdOk returns a tuple with the OrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderId

`func (o *OrderFetchProductResponseArray) SetOrderId(v int32)`

SetOrderId sets OrderId field to given value.


### GetTransaction

`func (o *OrderFetchProductResponseArray) GetTransaction() int32`

GetTransaction returns the Transaction field if non-nil, zero value otherwise.

### GetTransactionOk

`func (o *OrderFetchProductResponseArray) GetTransactionOk() (*int32, bool)`

GetTransactionOk returns a tuple with the Transaction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransaction

`func (o *OrderFetchProductResponseArray) SetTransaction(v int32)`

SetTransaction sets Transaction field to given value.


### GetOrderCode

`func (o *OrderFetchProductResponseArray) GetOrderCode() string`

GetOrderCode returns the OrderCode field if non-nil, zero value otherwise.

### GetOrderCodeOk

`func (o *OrderFetchProductResponseArray) GetOrderCodeOk() (*string, bool)`

GetOrderCodeOk returns a tuple with the OrderCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderCode

`func (o *OrderFetchProductResponseArray) SetOrderCode(v string)`

SetOrderCode sets OrderCode field to given value.


### GetCustomer

`func (o *OrderFetchProductResponseArray) GetCustomer() int32`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *OrderFetchProductResponseArray) GetCustomerOk() (*int32, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *OrderFetchProductResponseArray) SetCustomer(v int32)`

SetCustomer sets Customer field to given value.


### GetFirstName

`func (o *OrderFetchProductResponseArray) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *OrderFetchProductResponseArray) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *OrderFetchProductResponseArray) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.


### GetLastName

`func (o *OrderFetchProductResponseArray) GetLastName() string`

GetLastName returns the LastName field if non-nil, zero value otherwise.

### GetLastNameOk

`func (o *OrderFetchProductResponseArray) GetLastNameOk() (*string, bool)`

GetLastNameOk returns a tuple with the LastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName

`func (o *OrderFetchProductResponseArray) SetLastName(v string)`

SetLastName sets LastName field to given value.


### GetCustomerName

`func (o *OrderFetchProductResponseArray) GetCustomerName() string`

GetCustomerName returns the CustomerName field if non-nil, zero value otherwise.

### GetCustomerNameOk

`func (o *OrderFetchProductResponseArray) GetCustomerNameOk() (*string, bool)`

GetCustomerNameOk returns a tuple with the CustomerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerName

`func (o *OrderFetchProductResponseArray) SetCustomerName(v string)`

SetCustomerName sets CustomerName field to given value.


### GetPhone

`func (o *OrderFetchProductResponseArray) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *OrderFetchProductResponseArray) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *OrderFetchProductResponseArray) SetPhone(v string)`

SetPhone sets Phone field to given value.


### GetEmail

`func (o *OrderFetchProductResponseArray) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *OrderFetchProductResponseArray) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *OrderFetchProductResponseArray) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetProductCode

`func (o *OrderFetchProductResponseArray) GetProductCode() string`

GetProductCode returns the ProductCode field if non-nil, zero value otherwise.

### GetProductCodeOk

`func (o *OrderFetchProductResponseArray) GetProductCodeOk() (*string, bool)`

GetProductCodeOk returns a tuple with the ProductCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductCode

`func (o *OrderFetchProductResponseArray) SetProductCode(v string)`

SetProductCode sets ProductCode field to given value.


### GetProductId

`func (o *OrderFetchProductResponseArray) GetProductId() int32`

GetProductId returns the ProductId field if non-nil, zero value otherwise.

### GetProductIdOk

`func (o *OrderFetchProductResponseArray) GetProductIdOk() (*int32, bool)`

GetProductIdOk returns a tuple with the ProductId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductId

`func (o *OrderFetchProductResponseArray) SetProductId(v int32)`

SetProductId sets ProductId field to given value.


### GetProductName

`func (o *OrderFetchProductResponseArray) GetProductName() string`

GetProductName returns the ProductName field if non-nil, zero value otherwise.

### GetProductNameOk

`func (o *OrderFetchProductResponseArray) GetProductNameOk() (*string, bool)`

GetProductNameOk returns a tuple with the ProductName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductName

`func (o *OrderFetchProductResponseArray) SetProductName(v string)`

SetProductName sets ProductName field to given value.


### GetPrice

`func (o *OrderFetchProductResponseArray) GetPrice() int32`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *OrderFetchProductResponseArray) GetPriceOk() (*int32, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *OrderFetchProductResponseArray) SetPrice(v int32)`

SetPrice sets Price field to given value.


### GetQuantitySold

`func (o *OrderFetchProductResponseArray) GetQuantitySold() int32`

GetQuantitySold returns the QuantitySold field if non-nil, zero value otherwise.

### GetQuantitySoldOk

`func (o *OrderFetchProductResponseArray) GetQuantitySoldOk() (*int32, bool)`

GetQuantitySoldOk returns a tuple with the QuantitySold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantitySold

`func (o *OrderFetchProductResponseArray) SetQuantitySold(v int32)`

SetQuantitySold sets QuantitySold field to given value.


### GetCurrency

`func (o *OrderFetchProductResponseArray) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *OrderFetchProductResponseArray) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *OrderFetchProductResponseArray) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetQuantity

`func (o *OrderFetchProductResponseArray) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *OrderFetchProductResponseArray) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *OrderFetchProductResponseArray) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.


### GetVariantId

`func (o *OrderFetchProductResponseArray) GetVariantId() map[string]interface{}`

GetVariantId returns the VariantId field if non-nil, zero value otherwise.

### GetVariantIdOk

`func (o *OrderFetchProductResponseArray) GetVariantIdOk() (*map[string]interface{}, bool)`

GetVariantIdOk returns a tuple with the VariantId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVariantId

`func (o *OrderFetchProductResponseArray) SetVariantId(v map[string]interface{})`

SetVariantId sets VariantId field to given value.


### SetVariantIdNil

`func (o *OrderFetchProductResponseArray) SetVariantIdNil(b bool)`

 SetVariantIdNil sets the value for VariantId to be an explicit nil

### UnsetVariantId
`func (o *OrderFetchProductResponseArray) UnsetVariantId()`

UnsetVariantId ensures that no value is present for VariantId, not even an explicit nil
### GetVariantPrice

`func (o *OrderFetchProductResponseArray) GetVariantPrice() map[string]interface{}`

GetVariantPrice returns the VariantPrice field if non-nil, zero value otherwise.

### GetVariantPriceOk

`func (o *OrderFetchProductResponseArray) GetVariantPriceOk() (*map[string]interface{}, bool)`

GetVariantPriceOk returns a tuple with the VariantPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVariantPrice

`func (o *OrderFetchProductResponseArray) SetVariantPrice(v map[string]interface{})`

SetVariantPrice sets VariantPrice field to given value.


### SetVariantPriceNil

`func (o *OrderFetchProductResponseArray) SetVariantPriceNil(b bool)`

 SetVariantPriceNil sets the value for VariantPrice to be an explicit nil

### UnsetVariantPrice
`func (o *OrderFetchProductResponseArray) UnsetVariantPrice()`

UnsetVariantPrice ensures that no value is present for VariantPrice, not even an explicit nil
### GetVariantCode

`func (o *OrderFetchProductResponseArray) GetVariantCode() map[string]interface{}`

GetVariantCode returns the VariantCode field if non-nil, zero value otherwise.

### GetVariantCodeOk

`func (o *OrderFetchProductResponseArray) GetVariantCodeOk() (*map[string]interface{}, bool)`

GetVariantCodeOk returns a tuple with the VariantCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVariantCode

`func (o *OrderFetchProductResponseArray) SetVariantCode(v map[string]interface{})`

SetVariantCode sets VariantCode field to given value.


### SetVariantCodeNil

`func (o *OrderFetchProductResponseArray) SetVariantCodeNil(b bool)`

 SetVariantCodeNil sets the value for VariantCode to be an explicit nil

### UnsetVariantCode
`func (o *OrderFetchProductResponseArray) UnsetVariantCode()`

UnsetVariantCode ensures that no value is present for VariantCode, not even an explicit nil
### GetAmount

`func (o *OrderFetchProductResponseArray) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *OrderFetchProductResponseArray) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *OrderFetchProductResponseArray) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetShippingMethod

`func (o *OrderFetchProductResponseArray) GetShippingMethod() map[string]interface{}`

GetShippingMethod returns the ShippingMethod field if non-nil, zero value otherwise.

### GetShippingMethodOk

`func (o *OrderFetchProductResponseArray) GetShippingMethodOk() (*map[string]interface{}, bool)`

GetShippingMethodOk returns a tuple with the ShippingMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShippingMethod

`func (o *OrderFetchProductResponseArray) SetShippingMethod(v map[string]interface{})`

SetShippingMethod sets ShippingMethod field to given value.


### SetShippingMethodNil

`func (o *OrderFetchProductResponseArray) SetShippingMethodNil(b bool)`

 SetShippingMethodNil sets the value for ShippingMethod to be an explicit nil

### UnsetShippingMethod
`func (o *OrderFetchProductResponseArray) UnsetShippingMethod()`

UnsetShippingMethod ensures that no value is present for ShippingMethod, not even an explicit nil
### GetStatus

`func (o *OrderFetchProductResponseArray) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *OrderFetchProductResponseArray) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *OrderFetchProductResponseArray) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetShippingAddress

`func (o *OrderFetchProductResponseArray) GetShippingAddress() map[string]interface{}`

GetShippingAddress returns the ShippingAddress field if non-nil, zero value otherwise.

### GetShippingAddressOk

`func (o *OrderFetchProductResponseArray) GetShippingAddressOk() (*map[string]interface{}, bool)`

GetShippingAddressOk returns a tuple with the ShippingAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShippingAddress

`func (o *OrderFetchProductResponseArray) SetShippingAddress(v map[string]interface{})`

SetShippingAddress sets ShippingAddress field to given value.


### SetShippingAddressNil

`func (o *OrderFetchProductResponseArray) SetShippingAddressNil(b bool)`

 SetShippingAddressNil sets the value for ShippingAddress to be an explicit nil

### UnsetShippingAddress
`func (o *OrderFetchProductResponseArray) UnsetShippingAddress()`

UnsetShippingAddress ensures that no value is present for ShippingAddress, not even an explicit nil
### GetRefunded

`func (o *OrderFetchProductResponseArray) GetRefunded() bool`

GetRefunded returns the Refunded field if non-nil, zero value otherwise.

### GetRefundedOk

`func (o *OrderFetchProductResponseArray) GetRefundedOk() (*bool, bool)`

GetRefundedOk returns a tuple with the Refunded field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefunded

`func (o *OrderFetchProductResponseArray) SetRefunded(v bool)`

SetRefunded sets Refunded field to given value.


### GetShipping

`func (o *OrderFetchProductResponseArray) GetShipping() map[string]interface{}`

GetShipping returns the Shipping field if non-nil, zero value otherwise.

### GetShippingOk

`func (o *OrderFetchProductResponseArray) GetShippingOk() (*map[string]interface{}, bool)`

GetShippingOk returns a tuple with the Shipping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShipping

`func (o *OrderFetchProductResponseArray) SetShipping(v map[string]interface{})`

SetShipping sets Shipping field to given value.


### SetShippingNil

`func (o *OrderFetchProductResponseArray) SetShippingNil(b bool)`

 SetShippingNil sets the value for Shipping to be an explicit nil

### UnsetShipping
`func (o *OrderFetchProductResponseArray) UnsetShipping()`

UnsetShipping ensures that no value is present for Shipping, not even an explicit nil
### GetPaidAt

`func (o *OrderFetchProductResponseArray) GetPaidAt() string`

GetPaidAt returns the PaidAt field if non-nil, zero value otherwise.

### GetPaidAtOk

`func (o *OrderFetchProductResponseArray) GetPaidAtOk() (*string, bool)`

GetPaidAtOk returns a tuple with the PaidAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaidAt

`func (o *OrderFetchProductResponseArray) SetPaidAt(v string)`

SetPaidAt sets PaidAt field to given value.


### GetCreatedAt

`func (o *OrderFetchProductResponseArray) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *OrderFetchProductResponseArray) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *OrderFetchProductResponseArray) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetIsShipped

`func (o *OrderFetchProductResponseArray) GetIsShipped() bool`

GetIsShipped returns the IsShipped field if non-nil, zero value otherwise.

### GetIsShippedOk

`func (o *OrderFetchProductResponseArray) GetIsShippedOk() (*bool, bool)`

GetIsShippedOk returns a tuple with the IsShipped field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsShipped

`func (o *OrderFetchProductResponseArray) SetIsShipped(v bool)`

SetIsShipped sets IsShipped field to given value.


### GetIsViewed

`func (o *OrderFetchProductResponseArray) GetIsViewed() int32`

GetIsViewed returns the IsViewed field if non-nil, zero value otherwise.

### GetIsViewedOk

`func (o *OrderFetchProductResponseArray) GetIsViewedOk() (*int32, bool)`

GetIsViewedOk returns a tuple with the IsViewed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsViewed

`func (o *OrderFetchProductResponseArray) SetIsViewed(v int32)`

SetIsViewed sets IsViewed field to given value.


### GetDeliveryNote

`func (o *OrderFetchProductResponseArray) GetDeliveryNote() map[string]interface{}`

GetDeliveryNote returns the DeliveryNote field if non-nil, zero value otherwise.

### GetDeliveryNoteOk

`func (o *OrderFetchProductResponseArray) GetDeliveryNoteOk() (*map[string]interface{}, bool)`

GetDeliveryNoteOk returns a tuple with the DeliveryNote field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveryNote

`func (o *OrderFetchProductResponseArray) SetDeliveryNote(v map[string]interface{})`

SetDeliveryNote sets DeliveryNote field to given value.


### SetDeliveryNoteNil

`func (o *OrderFetchProductResponseArray) SetDeliveryNoteNil(b bool)`

 SetDeliveryNoteNil sets the value for DeliveryNote to be an explicit nil

### UnsetDeliveryNote
`func (o *OrderFetchProductResponseArray) UnsetDeliveryNote()`

UnsetDeliveryNote ensures that no value is present for DeliveryNote, not even an explicit nil
### GetShippingFee

`func (o *OrderFetchProductResponseArray) GetShippingFee() map[string]interface{}`

GetShippingFee returns the ShippingFee field if non-nil, zero value otherwise.

### GetShippingFeeOk

`func (o *OrderFetchProductResponseArray) GetShippingFeeOk() (*map[string]interface{}, bool)`

GetShippingFeeOk returns a tuple with the ShippingFee field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShippingFee

`func (o *OrderFetchProductResponseArray) SetShippingFee(v map[string]interface{})`

SetShippingFee sets ShippingFee field to given value.


### SetShippingFeeNil

`func (o *OrderFetchProductResponseArray) SetShippingFeeNil(b bool)`

 SetShippingFeeNil sets the value for ShippingFee to be an explicit nil

### UnsetShippingFee
`func (o *OrderFetchProductResponseArray) UnsetShippingFee()`

UnsetShippingFee ensures that no value is present for ShippingFee, not even an explicit nil
### GetAmountPaid

`func (o *OrderFetchProductResponseArray) GetAmountPaid() int32`

GetAmountPaid returns the AmountPaid field if non-nil, zero value otherwise.

### GetAmountPaidOk

`func (o *OrderFetchProductResponseArray) GetAmountPaidOk() (*int32, bool)`

GetAmountPaidOk returns a tuple with the AmountPaid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountPaid

`func (o *OrderFetchProductResponseArray) SetAmountPaid(v int32)`

SetAmountPaid sets AmountPaid field to given value.


### GetStorefrontSlug

`func (o *OrderFetchProductResponseArray) GetStorefrontSlug() string`

GetStorefrontSlug returns the StorefrontSlug field if non-nil, zero value otherwise.

### GetStorefrontSlugOk

`func (o *OrderFetchProductResponseArray) GetStorefrontSlugOk() (*string, bool)`

GetStorefrontSlugOk returns a tuple with the StorefrontSlug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStorefrontSlug

`func (o *OrderFetchProductResponseArray) SetStorefrontSlug(v string)`

SetStorefrontSlug sets StorefrontSlug field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


