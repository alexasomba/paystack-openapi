# PaymentRequestCreateResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**Integration** | **int32** |  | 
**Domain** | **string** |  | 
**Amount** | **int32** |  | 
**Currency** | **string** |  | 
**DueDate** | **NullableString** |  | 
**HasInvoice** | **bool** |  | 
**InvoiceNumber** | **NullableInt32** |  | 
**Description** | **NullableString** |  | 
**LineItems** | **[]interface{}** |  | 
**Tax** | **[]interface{}** |  | 
**RequestCode** | **string** |  | 
**Status** | **string** |  | 
**Paid** | **bool** |  | 
**Metadata** | **map[string]interface{}** |  | 
**Notifications** | **[]interface{}** |  | 
**OfflineReference** | **string** |  | 
**Customer** | **int32** |  | 
**CreatedAt** | **string** |  | 
**Discount** | **interface{}** |  | 
**SplitCode** | **NullableString** |  | 

## Methods

### NewPaymentRequestCreateResponseData

`func NewPaymentRequestCreateResponseData(id int32, integration int32, domain string, amount int32, currency string, dueDate NullableString, hasInvoice bool, invoiceNumber NullableInt32, description NullableString, lineItems []interface{}, tax []interface{}, requestCode string, status string, paid bool, metadata map[string]interface{}, notifications []interface{}, offlineReference string, customer int32, createdAt string, discount interface{}, splitCode NullableString, ) *PaymentRequestCreateResponseData`

NewPaymentRequestCreateResponseData instantiates a new PaymentRequestCreateResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaymentRequestCreateResponseDataWithDefaults

`func NewPaymentRequestCreateResponseDataWithDefaults() *PaymentRequestCreateResponseData`

NewPaymentRequestCreateResponseDataWithDefaults instantiates a new PaymentRequestCreateResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *PaymentRequestCreateResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *PaymentRequestCreateResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *PaymentRequestCreateResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetIntegration

`func (o *PaymentRequestCreateResponseData) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *PaymentRequestCreateResponseData) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *PaymentRequestCreateResponseData) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetDomain

`func (o *PaymentRequestCreateResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *PaymentRequestCreateResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *PaymentRequestCreateResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetAmount

`func (o *PaymentRequestCreateResponseData) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *PaymentRequestCreateResponseData) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *PaymentRequestCreateResponseData) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetCurrency

`func (o *PaymentRequestCreateResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *PaymentRequestCreateResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *PaymentRequestCreateResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetDueDate

`func (o *PaymentRequestCreateResponseData) GetDueDate() string`

GetDueDate returns the DueDate field if non-nil, zero value otherwise.

### GetDueDateOk

`func (o *PaymentRequestCreateResponseData) GetDueDateOk() (*string, bool)`

GetDueDateOk returns a tuple with the DueDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDueDate

`func (o *PaymentRequestCreateResponseData) SetDueDate(v string)`

SetDueDate sets DueDate field to given value.


### SetDueDateNil

`func (o *PaymentRequestCreateResponseData) SetDueDateNil(b bool)`

 SetDueDateNil sets the value for DueDate to be an explicit nil

### UnsetDueDate
`func (o *PaymentRequestCreateResponseData) UnsetDueDate()`

UnsetDueDate ensures that no value is present for DueDate, not even an explicit nil
### GetHasInvoice

`func (o *PaymentRequestCreateResponseData) GetHasInvoice() bool`

GetHasInvoice returns the HasInvoice field if non-nil, zero value otherwise.

### GetHasInvoiceOk

`func (o *PaymentRequestCreateResponseData) GetHasInvoiceOk() (*bool, bool)`

GetHasInvoiceOk returns a tuple with the HasInvoice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasInvoice

`func (o *PaymentRequestCreateResponseData) SetHasInvoice(v bool)`

SetHasInvoice sets HasInvoice field to given value.


### GetInvoiceNumber

`func (o *PaymentRequestCreateResponseData) GetInvoiceNumber() int32`

GetInvoiceNumber returns the InvoiceNumber field if non-nil, zero value otherwise.

### GetInvoiceNumberOk

`func (o *PaymentRequestCreateResponseData) GetInvoiceNumberOk() (*int32, bool)`

GetInvoiceNumberOk returns a tuple with the InvoiceNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceNumber

`func (o *PaymentRequestCreateResponseData) SetInvoiceNumber(v int32)`

SetInvoiceNumber sets InvoiceNumber field to given value.


### SetInvoiceNumberNil

`func (o *PaymentRequestCreateResponseData) SetInvoiceNumberNil(b bool)`

 SetInvoiceNumberNil sets the value for InvoiceNumber to be an explicit nil

### UnsetInvoiceNumber
`func (o *PaymentRequestCreateResponseData) UnsetInvoiceNumber()`

UnsetInvoiceNumber ensures that no value is present for InvoiceNumber, not even an explicit nil
### GetDescription

`func (o *PaymentRequestCreateResponseData) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *PaymentRequestCreateResponseData) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *PaymentRequestCreateResponseData) SetDescription(v string)`

SetDescription sets Description field to given value.


### SetDescriptionNil

`func (o *PaymentRequestCreateResponseData) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *PaymentRequestCreateResponseData) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetLineItems

`func (o *PaymentRequestCreateResponseData) GetLineItems() []interface{}`

GetLineItems returns the LineItems field if non-nil, zero value otherwise.

### GetLineItemsOk

`func (o *PaymentRequestCreateResponseData) GetLineItemsOk() (*[]interface{}, bool)`

GetLineItemsOk returns a tuple with the LineItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLineItems

`func (o *PaymentRequestCreateResponseData) SetLineItems(v []interface{})`

SetLineItems sets LineItems field to given value.


### GetTax

`func (o *PaymentRequestCreateResponseData) GetTax() []interface{}`

GetTax returns the Tax field if non-nil, zero value otherwise.

### GetTaxOk

`func (o *PaymentRequestCreateResponseData) GetTaxOk() (*[]interface{}, bool)`

GetTaxOk returns a tuple with the Tax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTax

`func (o *PaymentRequestCreateResponseData) SetTax(v []interface{})`

SetTax sets Tax field to given value.


### GetRequestCode

`func (o *PaymentRequestCreateResponseData) GetRequestCode() string`

GetRequestCode returns the RequestCode field if non-nil, zero value otherwise.

### GetRequestCodeOk

`func (o *PaymentRequestCreateResponseData) GetRequestCodeOk() (*string, bool)`

GetRequestCodeOk returns a tuple with the RequestCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestCode

`func (o *PaymentRequestCreateResponseData) SetRequestCode(v string)`

SetRequestCode sets RequestCode field to given value.


### GetStatus

`func (o *PaymentRequestCreateResponseData) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *PaymentRequestCreateResponseData) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *PaymentRequestCreateResponseData) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetPaid

`func (o *PaymentRequestCreateResponseData) GetPaid() bool`

GetPaid returns the Paid field if non-nil, zero value otherwise.

### GetPaidOk

`func (o *PaymentRequestCreateResponseData) GetPaidOk() (*bool, bool)`

GetPaidOk returns a tuple with the Paid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaid

`func (o *PaymentRequestCreateResponseData) SetPaid(v bool)`

SetPaid sets Paid field to given value.


### GetMetadata

`func (o *PaymentRequestCreateResponseData) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *PaymentRequestCreateResponseData) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *PaymentRequestCreateResponseData) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.


### SetMetadataNil

`func (o *PaymentRequestCreateResponseData) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *PaymentRequestCreateResponseData) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil
### GetNotifications

`func (o *PaymentRequestCreateResponseData) GetNotifications() []interface{}`

GetNotifications returns the Notifications field if non-nil, zero value otherwise.

### GetNotificationsOk

`func (o *PaymentRequestCreateResponseData) GetNotificationsOk() (*[]interface{}, bool)`

GetNotificationsOk returns a tuple with the Notifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotifications

`func (o *PaymentRequestCreateResponseData) SetNotifications(v []interface{})`

SetNotifications sets Notifications field to given value.


### GetOfflineReference

`func (o *PaymentRequestCreateResponseData) GetOfflineReference() string`

GetOfflineReference returns the OfflineReference field if non-nil, zero value otherwise.

### GetOfflineReferenceOk

`func (o *PaymentRequestCreateResponseData) GetOfflineReferenceOk() (*string, bool)`

GetOfflineReferenceOk returns a tuple with the OfflineReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOfflineReference

`func (o *PaymentRequestCreateResponseData) SetOfflineReference(v string)`

SetOfflineReference sets OfflineReference field to given value.


### GetCustomer

`func (o *PaymentRequestCreateResponseData) GetCustomer() int32`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *PaymentRequestCreateResponseData) GetCustomerOk() (*int32, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *PaymentRequestCreateResponseData) SetCustomer(v int32)`

SetCustomer sets Customer field to given value.


### GetCreatedAt

`func (o *PaymentRequestCreateResponseData) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *PaymentRequestCreateResponseData) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *PaymentRequestCreateResponseData) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetDiscount

`func (o *PaymentRequestCreateResponseData) GetDiscount() interface{}`

GetDiscount returns the Discount field if non-nil, zero value otherwise.

### GetDiscountOk

`func (o *PaymentRequestCreateResponseData) GetDiscountOk() (*interface{}, bool)`

GetDiscountOk returns a tuple with the Discount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscount

`func (o *PaymentRequestCreateResponseData) SetDiscount(v interface{})`

SetDiscount sets Discount field to given value.


### SetDiscountNil

`func (o *PaymentRequestCreateResponseData) SetDiscountNil(b bool)`

 SetDiscountNil sets the value for Discount to be an explicit nil

### UnsetDiscount
`func (o *PaymentRequestCreateResponseData) UnsetDiscount()`

UnsetDiscount ensures that no value is present for Discount, not even an explicit nil
### GetSplitCode

`func (o *PaymentRequestCreateResponseData) GetSplitCode() string`

GetSplitCode returns the SplitCode field if non-nil, zero value otherwise.

### GetSplitCodeOk

`func (o *PaymentRequestCreateResponseData) GetSplitCodeOk() (*string, bool)`

GetSplitCodeOk returns a tuple with the SplitCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplitCode

`func (o *PaymentRequestCreateResponseData) SetSplitCode(v string)`

SetSplitCode sets SplitCode field to given value.


### SetSplitCodeNil

`func (o *PaymentRequestCreateResponseData) SetSplitCodeNil(b bool)`

 SetSplitCodeNil sets the value for SplitCode to be an explicit nil

### UnsetSplitCode
`func (o *PaymentRequestCreateResponseData) UnsetSplitCode()`

UnsetSplitCode ensures that no value is present for SplitCode, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


