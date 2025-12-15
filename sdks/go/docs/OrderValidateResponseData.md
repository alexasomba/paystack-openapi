# OrderValidateResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OrderCode** | **string** |  | 
**Domain** | **string** |  | 
**Currency** | **string** |  | 
**Amount** | **int32** |  | 
**Email** | **string** |  | 
**Status** | **string** |  | 
**Refunded** | **bool** |  | 
**PaidAt** | **interface{}** |  | 
**ShippingAddress** | **interface{}** |  | 
**Metadata** | **interface{}** |  | 
**ShippingFees** | **int32** |  | 
**ShippingMethod** | **interface{}** |  | 
**IsViewed** | **bool** |  | 
**ExpirationDate** | **string** |  | 
**PayForMe** | **bool** |  | 
**Id** | **int32** |  | 
**Integration** | [**OrderValidateResponseDataIntegration**](OrderValidateResponseDataIntegration.md) |  | 
**Transaction** | **interface{}** |  | 
**Page** | **interface{}** |  | 
**Customer** | [**TransactionFetchResponseDataCustomer**](TransactionFetchResponseDataCustomer.md) |  | 
**Shipping** | **interface{}** |  | 
**CreatedAt** | **string** |  | 
**UpdatedAt** | **string** |  | 
**Payer** | **interface{}** |  | 

## Methods

### NewOrderValidateResponseData

`func NewOrderValidateResponseData(orderCode string, domain string, currency string, amount int32, email string, status string, refunded bool, paidAt interface{}, shippingAddress interface{}, metadata interface{}, shippingFees int32, shippingMethod interface{}, isViewed bool, expirationDate string, payForMe bool, id int32, integration OrderValidateResponseDataIntegration, transaction interface{}, page interface{}, customer TransactionFetchResponseDataCustomer, shipping interface{}, createdAt string, updatedAt string, payer interface{}, ) *OrderValidateResponseData`

NewOrderValidateResponseData instantiates a new OrderValidateResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrderValidateResponseDataWithDefaults

`func NewOrderValidateResponseDataWithDefaults() *OrderValidateResponseData`

NewOrderValidateResponseDataWithDefaults instantiates a new OrderValidateResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOrderCode

`func (o *OrderValidateResponseData) GetOrderCode() string`

GetOrderCode returns the OrderCode field if non-nil, zero value otherwise.

### GetOrderCodeOk

`func (o *OrderValidateResponseData) GetOrderCodeOk() (*string, bool)`

GetOrderCodeOk returns a tuple with the OrderCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderCode

`func (o *OrderValidateResponseData) SetOrderCode(v string)`

SetOrderCode sets OrderCode field to given value.


### GetDomain

`func (o *OrderValidateResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *OrderValidateResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *OrderValidateResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetCurrency

`func (o *OrderValidateResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *OrderValidateResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *OrderValidateResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetAmount

`func (o *OrderValidateResponseData) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *OrderValidateResponseData) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *OrderValidateResponseData) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetEmail

`func (o *OrderValidateResponseData) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *OrderValidateResponseData) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *OrderValidateResponseData) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetStatus

`func (o *OrderValidateResponseData) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *OrderValidateResponseData) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *OrderValidateResponseData) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetRefunded

`func (o *OrderValidateResponseData) GetRefunded() bool`

GetRefunded returns the Refunded field if non-nil, zero value otherwise.

### GetRefundedOk

`func (o *OrderValidateResponseData) GetRefundedOk() (*bool, bool)`

GetRefundedOk returns a tuple with the Refunded field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefunded

`func (o *OrderValidateResponseData) SetRefunded(v bool)`

SetRefunded sets Refunded field to given value.


### GetPaidAt

`func (o *OrderValidateResponseData) GetPaidAt() interface{}`

GetPaidAt returns the PaidAt field if non-nil, zero value otherwise.

### GetPaidAtOk

`func (o *OrderValidateResponseData) GetPaidAtOk() (*interface{}, bool)`

GetPaidAtOk returns a tuple with the PaidAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaidAt

`func (o *OrderValidateResponseData) SetPaidAt(v interface{})`

SetPaidAt sets PaidAt field to given value.


### SetPaidAtNil

`func (o *OrderValidateResponseData) SetPaidAtNil(b bool)`

 SetPaidAtNil sets the value for PaidAt to be an explicit nil

### UnsetPaidAt
`func (o *OrderValidateResponseData) UnsetPaidAt()`

UnsetPaidAt ensures that no value is present for PaidAt, not even an explicit nil
### GetShippingAddress

`func (o *OrderValidateResponseData) GetShippingAddress() interface{}`

GetShippingAddress returns the ShippingAddress field if non-nil, zero value otherwise.

### GetShippingAddressOk

`func (o *OrderValidateResponseData) GetShippingAddressOk() (*interface{}, bool)`

GetShippingAddressOk returns a tuple with the ShippingAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShippingAddress

`func (o *OrderValidateResponseData) SetShippingAddress(v interface{})`

SetShippingAddress sets ShippingAddress field to given value.


### SetShippingAddressNil

`func (o *OrderValidateResponseData) SetShippingAddressNil(b bool)`

 SetShippingAddressNil sets the value for ShippingAddress to be an explicit nil

### UnsetShippingAddress
`func (o *OrderValidateResponseData) UnsetShippingAddress()`

UnsetShippingAddress ensures that no value is present for ShippingAddress, not even an explicit nil
### GetMetadata

`func (o *OrderValidateResponseData) GetMetadata() interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *OrderValidateResponseData) GetMetadataOk() (*interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *OrderValidateResponseData) SetMetadata(v interface{})`

SetMetadata sets Metadata field to given value.


### SetMetadataNil

`func (o *OrderValidateResponseData) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *OrderValidateResponseData) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil
### GetShippingFees

`func (o *OrderValidateResponseData) GetShippingFees() int32`

GetShippingFees returns the ShippingFees field if non-nil, zero value otherwise.

### GetShippingFeesOk

`func (o *OrderValidateResponseData) GetShippingFeesOk() (*int32, bool)`

GetShippingFeesOk returns a tuple with the ShippingFees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShippingFees

`func (o *OrderValidateResponseData) SetShippingFees(v int32)`

SetShippingFees sets ShippingFees field to given value.


### GetShippingMethod

`func (o *OrderValidateResponseData) GetShippingMethod() interface{}`

GetShippingMethod returns the ShippingMethod field if non-nil, zero value otherwise.

### GetShippingMethodOk

`func (o *OrderValidateResponseData) GetShippingMethodOk() (*interface{}, bool)`

GetShippingMethodOk returns a tuple with the ShippingMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShippingMethod

`func (o *OrderValidateResponseData) SetShippingMethod(v interface{})`

SetShippingMethod sets ShippingMethod field to given value.


### SetShippingMethodNil

`func (o *OrderValidateResponseData) SetShippingMethodNil(b bool)`

 SetShippingMethodNil sets the value for ShippingMethod to be an explicit nil

### UnsetShippingMethod
`func (o *OrderValidateResponseData) UnsetShippingMethod()`

UnsetShippingMethod ensures that no value is present for ShippingMethod, not even an explicit nil
### GetIsViewed

`func (o *OrderValidateResponseData) GetIsViewed() bool`

GetIsViewed returns the IsViewed field if non-nil, zero value otherwise.

### GetIsViewedOk

`func (o *OrderValidateResponseData) GetIsViewedOk() (*bool, bool)`

GetIsViewedOk returns a tuple with the IsViewed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsViewed

`func (o *OrderValidateResponseData) SetIsViewed(v bool)`

SetIsViewed sets IsViewed field to given value.


### GetExpirationDate

`func (o *OrderValidateResponseData) GetExpirationDate() string`

GetExpirationDate returns the ExpirationDate field if non-nil, zero value otherwise.

### GetExpirationDateOk

`func (o *OrderValidateResponseData) GetExpirationDateOk() (*string, bool)`

GetExpirationDateOk returns a tuple with the ExpirationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpirationDate

`func (o *OrderValidateResponseData) SetExpirationDate(v string)`

SetExpirationDate sets ExpirationDate field to given value.


### GetPayForMe

`func (o *OrderValidateResponseData) GetPayForMe() bool`

GetPayForMe returns the PayForMe field if non-nil, zero value otherwise.

### GetPayForMeOk

`func (o *OrderValidateResponseData) GetPayForMeOk() (*bool, bool)`

GetPayForMeOk returns a tuple with the PayForMe field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayForMe

`func (o *OrderValidateResponseData) SetPayForMe(v bool)`

SetPayForMe sets PayForMe field to given value.


### GetId

`func (o *OrderValidateResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *OrderValidateResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *OrderValidateResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetIntegration

`func (o *OrderValidateResponseData) GetIntegration() OrderValidateResponseDataIntegration`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *OrderValidateResponseData) GetIntegrationOk() (*OrderValidateResponseDataIntegration, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *OrderValidateResponseData) SetIntegration(v OrderValidateResponseDataIntegration)`

SetIntegration sets Integration field to given value.


### GetTransaction

`func (o *OrderValidateResponseData) GetTransaction() interface{}`

GetTransaction returns the Transaction field if non-nil, zero value otherwise.

### GetTransactionOk

`func (o *OrderValidateResponseData) GetTransactionOk() (*interface{}, bool)`

GetTransactionOk returns a tuple with the Transaction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransaction

`func (o *OrderValidateResponseData) SetTransaction(v interface{})`

SetTransaction sets Transaction field to given value.


### SetTransactionNil

`func (o *OrderValidateResponseData) SetTransactionNil(b bool)`

 SetTransactionNil sets the value for Transaction to be an explicit nil

### UnsetTransaction
`func (o *OrderValidateResponseData) UnsetTransaction()`

UnsetTransaction ensures that no value is present for Transaction, not even an explicit nil
### GetPage

`func (o *OrderValidateResponseData) GetPage() interface{}`

GetPage returns the Page field if non-nil, zero value otherwise.

### GetPageOk

`func (o *OrderValidateResponseData) GetPageOk() (*interface{}, bool)`

GetPageOk returns a tuple with the Page field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPage

`func (o *OrderValidateResponseData) SetPage(v interface{})`

SetPage sets Page field to given value.


### SetPageNil

`func (o *OrderValidateResponseData) SetPageNil(b bool)`

 SetPageNil sets the value for Page to be an explicit nil

### UnsetPage
`func (o *OrderValidateResponseData) UnsetPage()`

UnsetPage ensures that no value is present for Page, not even an explicit nil
### GetCustomer

`func (o *OrderValidateResponseData) GetCustomer() TransactionFetchResponseDataCustomer`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *OrderValidateResponseData) GetCustomerOk() (*TransactionFetchResponseDataCustomer, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *OrderValidateResponseData) SetCustomer(v TransactionFetchResponseDataCustomer)`

SetCustomer sets Customer field to given value.


### GetShipping

`func (o *OrderValidateResponseData) GetShipping() interface{}`

GetShipping returns the Shipping field if non-nil, zero value otherwise.

### GetShippingOk

`func (o *OrderValidateResponseData) GetShippingOk() (*interface{}, bool)`

GetShippingOk returns a tuple with the Shipping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShipping

`func (o *OrderValidateResponseData) SetShipping(v interface{})`

SetShipping sets Shipping field to given value.


### SetShippingNil

`func (o *OrderValidateResponseData) SetShippingNil(b bool)`

 SetShippingNil sets the value for Shipping to be an explicit nil

### UnsetShipping
`func (o *OrderValidateResponseData) UnsetShipping()`

UnsetShipping ensures that no value is present for Shipping, not even an explicit nil
### GetCreatedAt

`func (o *OrderValidateResponseData) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *OrderValidateResponseData) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *OrderValidateResponseData) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *OrderValidateResponseData) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *OrderValidateResponseData) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *OrderValidateResponseData) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.


### GetPayer

`func (o *OrderValidateResponseData) GetPayer() interface{}`

GetPayer returns the Payer field if non-nil, zero value otherwise.

### GetPayerOk

`func (o *OrderValidateResponseData) GetPayerOk() (*interface{}, bool)`

GetPayerOk returns a tuple with the Payer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayer

`func (o *OrderValidateResponseData) SetPayer(v interface{})`

SetPayer sets Payer field to given value.


### SetPayerNil

`func (o *OrderValidateResponseData) SetPayerNil(b bool)`

 SetPayerNil sets the value for Payer to be an explicit nil

### UnsetPayer
`func (o *OrderValidateResponseData) UnsetPayer()`

UnsetPayer ensures that no value is present for Payer, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


