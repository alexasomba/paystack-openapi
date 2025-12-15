# PaymentRequestUpdateResponseData

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
**Description** | **map[string]interface{}** |  | 
**PdfUrl** | **NullableString** |  | 
**LineItems** | **[]map[string]interface{}** |  | 
**Tax** | **[]map[string]interface{}** |  | 
**RequestCode** | **string** |  | 
**Status** | **string** |  | 
**Paid** | **bool** |  | 
**PaidAt** | **map[string]interface{}** |  | 
**Metadata** | **map[string]interface{}** |  | 
**Notifications** | [**[]PaymentRequestNotificationsArray**](PaymentRequestNotificationsArray.md) |  | 
**OfflineReference** | **string** |  | 
**Customer** | [**PaymentRequestUpdateResponseDataCustomer**](PaymentRequestUpdateResponseDataCustomer.md) |  | 
**CreatedAt** | **string** |  | 
**Discount** | **map[string]interface{}** |  | 
**SplitCode** | **map[string]interface{}** |  | 

## Methods

### NewPaymentRequestUpdateResponseData

`func NewPaymentRequestUpdateResponseData(id int32, integration int32, domain string, amount int32, currency string, dueDate NullableString, hasInvoice bool, invoiceNumber NullableInt32, description map[string]interface{}, pdfUrl NullableString, lineItems []map[string]interface{}, tax []map[string]interface{}, requestCode string, status string, paid bool, paidAt map[string]interface{}, metadata map[string]interface{}, notifications []PaymentRequestNotificationsArray, offlineReference string, customer PaymentRequestUpdateResponseDataCustomer, createdAt string, discount map[string]interface{}, splitCode map[string]interface{}, ) *PaymentRequestUpdateResponseData`

NewPaymentRequestUpdateResponseData instantiates a new PaymentRequestUpdateResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaymentRequestUpdateResponseDataWithDefaults

`func NewPaymentRequestUpdateResponseDataWithDefaults() *PaymentRequestUpdateResponseData`

NewPaymentRequestUpdateResponseDataWithDefaults instantiates a new PaymentRequestUpdateResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *PaymentRequestUpdateResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *PaymentRequestUpdateResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *PaymentRequestUpdateResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetIntegration

`func (o *PaymentRequestUpdateResponseData) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *PaymentRequestUpdateResponseData) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *PaymentRequestUpdateResponseData) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetDomain

`func (o *PaymentRequestUpdateResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *PaymentRequestUpdateResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *PaymentRequestUpdateResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetAmount

`func (o *PaymentRequestUpdateResponseData) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *PaymentRequestUpdateResponseData) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *PaymentRequestUpdateResponseData) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetCurrency

`func (o *PaymentRequestUpdateResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *PaymentRequestUpdateResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *PaymentRequestUpdateResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetDueDate

`func (o *PaymentRequestUpdateResponseData) GetDueDate() string`

GetDueDate returns the DueDate field if non-nil, zero value otherwise.

### GetDueDateOk

`func (o *PaymentRequestUpdateResponseData) GetDueDateOk() (*string, bool)`

GetDueDateOk returns a tuple with the DueDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDueDate

`func (o *PaymentRequestUpdateResponseData) SetDueDate(v string)`

SetDueDate sets DueDate field to given value.


### SetDueDateNil

`func (o *PaymentRequestUpdateResponseData) SetDueDateNil(b bool)`

 SetDueDateNil sets the value for DueDate to be an explicit nil

### UnsetDueDate
`func (o *PaymentRequestUpdateResponseData) UnsetDueDate()`

UnsetDueDate ensures that no value is present for DueDate, not even an explicit nil
### GetHasInvoice

`func (o *PaymentRequestUpdateResponseData) GetHasInvoice() bool`

GetHasInvoice returns the HasInvoice field if non-nil, zero value otherwise.

### GetHasInvoiceOk

`func (o *PaymentRequestUpdateResponseData) GetHasInvoiceOk() (*bool, bool)`

GetHasInvoiceOk returns a tuple with the HasInvoice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasInvoice

`func (o *PaymentRequestUpdateResponseData) SetHasInvoice(v bool)`

SetHasInvoice sets HasInvoice field to given value.


### GetInvoiceNumber

`func (o *PaymentRequestUpdateResponseData) GetInvoiceNumber() int32`

GetInvoiceNumber returns the InvoiceNumber field if non-nil, zero value otherwise.

### GetInvoiceNumberOk

`func (o *PaymentRequestUpdateResponseData) GetInvoiceNumberOk() (*int32, bool)`

GetInvoiceNumberOk returns a tuple with the InvoiceNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceNumber

`func (o *PaymentRequestUpdateResponseData) SetInvoiceNumber(v int32)`

SetInvoiceNumber sets InvoiceNumber field to given value.


### SetInvoiceNumberNil

`func (o *PaymentRequestUpdateResponseData) SetInvoiceNumberNil(b bool)`

 SetInvoiceNumberNil sets the value for InvoiceNumber to be an explicit nil

### UnsetInvoiceNumber
`func (o *PaymentRequestUpdateResponseData) UnsetInvoiceNumber()`

UnsetInvoiceNumber ensures that no value is present for InvoiceNumber, not even an explicit nil
### GetDescription

`func (o *PaymentRequestUpdateResponseData) GetDescription() map[string]interface{}`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *PaymentRequestUpdateResponseData) GetDescriptionOk() (*map[string]interface{}, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *PaymentRequestUpdateResponseData) SetDescription(v map[string]interface{})`

SetDescription sets Description field to given value.


### SetDescriptionNil

`func (o *PaymentRequestUpdateResponseData) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *PaymentRequestUpdateResponseData) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetPdfUrl

`func (o *PaymentRequestUpdateResponseData) GetPdfUrl() string`

GetPdfUrl returns the PdfUrl field if non-nil, zero value otherwise.

### GetPdfUrlOk

`func (o *PaymentRequestUpdateResponseData) GetPdfUrlOk() (*string, bool)`

GetPdfUrlOk returns a tuple with the PdfUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPdfUrl

`func (o *PaymentRequestUpdateResponseData) SetPdfUrl(v string)`

SetPdfUrl sets PdfUrl field to given value.


### SetPdfUrlNil

`func (o *PaymentRequestUpdateResponseData) SetPdfUrlNil(b bool)`

 SetPdfUrlNil sets the value for PdfUrl to be an explicit nil

### UnsetPdfUrl
`func (o *PaymentRequestUpdateResponseData) UnsetPdfUrl()`

UnsetPdfUrl ensures that no value is present for PdfUrl, not even an explicit nil
### GetLineItems

`func (o *PaymentRequestUpdateResponseData) GetLineItems() []map[string]interface{}`

GetLineItems returns the LineItems field if non-nil, zero value otherwise.

### GetLineItemsOk

`func (o *PaymentRequestUpdateResponseData) GetLineItemsOk() (*[]map[string]interface{}, bool)`

GetLineItemsOk returns a tuple with the LineItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLineItems

`func (o *PaymentRequestUpdateResponseData) SetLineItems(v []map[string]interface{})`

SetLineItems sets LineItems field to given value.


### GetTax

`func (o *PaymentRequestUpdateResponseData) GetTax() []map[string]interface{}`

GetTax returns the Tax field if non-nil, zero value otherwise.

### GetTaxOk

`func (o *PaymentRequestUpdateResponseData) GetTaxOk() (*[]map[string]interface{}, bool)`

GetTaxOk returns a tuple with the Tax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTax

`func (o *PaymentRequestUpdateResponseData) SetTax(v []map[string]interface{})`

SetTax sets Tax field to given value.


### GetRequestCode

`func (o *PaymentRequestUpdateResponseData) GetRequestCode() string`

GetRequestCode returns the RequestCode field if non-nil, zero value otherwise.

### GetRequestCodeOk

`func (o *PaymentRequestUpdateResponseData) GetRequestCodeOk() (*string, bool)`

GetRequestCodeOk returns a tuple with the RequestCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestCode

`func (o *PaymentRequestUpdateResponseData) SetRequestCode(v string)`

SetRequestCode sets RequestCode field to given value.


### GetStatus

`func (o *PaymentRequestUpdateResponseData) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *PaymentRequestUpdateResponseData) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *PaymentRequestUpdateResponseData) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetPaid

`func (o *PaymentRequestUpdateResponseData) GetPaid() bool`

GetPaid returns the Paid field if non-nil, zero value otherwise.

### GetPaidOk

`func (o *PaymentRequestUpdateResponseData) GetPaidOk() (*bool, bool)`

GetPaidOk returns a tuple with the Paid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaid

`func (o *PaymentRequestUpdateResponseData) SetPaid(v bool)`

SetPaid sets Paid field to given value.


### GetPaidAt

`func (o *PaymentRequestUpdateResponseData) GetPaidAt() map[string]interface{}`

GetPaidAt returns the PaidAt field if non-nil, zero value otherwise.

### GetPaidAtOk

`func (o *PaymentRequestUpdateResponseData) GetPaidAtOk() (*map[string]interface{}, bool)`

GetPaidAtOk returns a tuple with the PaidAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaidAt

`func (o *PaymentRequestUpdateResponseData) SetPaidAt(v map[string]interface{})`

SetPaidAt sets PaidAt field to given value.


### SetPaidAtNil

`func (o *PaymentRequestUpdateResponseData) SetPaidAtNil(b bool)`

 SetPaidAtNil sets the value for PaidAt to be an explicit nil

### UnsetPaidAt
`func (o *PaymentRequestUpdateResponseData) UnsetPaidAt()`

UnsetPaidAt ensures that no value is present for PaidAt, not even an explicit nil
### GetMetadata

`func (o *PaymentRequestUpdateResponseData) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *PaymentRequestUpdateResponseData) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *PaymentRequestUpdateResponseData) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.


### SetMetadataNil

`func (o *PaymentRequestUpdateResponseData) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *PaymentRequestUpdateResponseData) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil
### GetNotifications

`func (o *PaymentRequestUpdateResponseData) GetNotifications() []PaymentRequestNotificationsArray`

GetNotifications returns the Notifications field if non-nil, zero value otherwise.

### GetNotificationsOk

`func (o *PaymentRequestUpdateResponseData) GetNotificationsOk() (*[]PaymentRequestNotificationsArray, bool)`

GetNotificationsOk returns a tuple with the Notifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotifications

`func (o *PaymentRequestUpdateResponseData) SetNotifications(v []PaymentRequestNotificationsArray)`

SetNotifications sets Notifications field to given value.


### GetOfflineReference

`func (o *PaymentRequestUpdateResponseData) GetOfflineReference() string`

GetOfflineReference returns the OfflineReference field if non-nil, zero value otherwise.

### GetOfflineReferenceOk

`func (o *PaymentRequestUpdateResponseData) GetOfflineReferenceOk() (*string, bool)`

GetOfflineReferenceOk returns a tuple with the OfflineReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOfflineReference

`func (o *PaymentRequestUpdateResponseData) SetOfflineReference(v string)`

SetOfflineReference sets OfflineReference field to given value.


### GetCustomer

`func (o *PaymentRequestUpdateResponseData) GetCustomer() PaymentRequestUpdateResponseDataCustomer`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *PaymentRequestUpdateResponseData) GetCustomerOk() (*PaymentRequestUpdateResponseDataCustomer, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *PaymentRequestUpdateResponseData) SetCustomer(v PaymentRequestUpdateResponseDataCustomer)`

SetCustomer sets Customer field to given value.


### GetCreatedAt

`func (o *PaymentRequestUpdateResponseData) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *PaymentRequestUpdateResponseData) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *PaymentRequestUpdateResponseData) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetDiscount

`func (o *PaymentRequestUpdateResponseData) GetDiscount() map[string]interface{}`

GetDiscount returns the Discount field if non-nil, zero value otherwise.

### GetDiscountOk

`func (o *PaymentRequestUpdateResponseData) GetDiscountOk() (*map[string]interface{}, bool)`

GetDiscountOk returns a tuple with the Discount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscount

`func (o *PaymentRequestUpdateResponseData) SetDiscount(v map[string]interface{})`

SetDiscount sets Discount field to given value.


### SetDiscountNil

`func (o *PaymentRequestUpdateResponseData) SetDiscountNil(b bool)`

 SetDiscountNil sets the value for Discount to be an explicit nil

### UnsetDiscount
`func (o *PaymentRequestUpdateResponseData) UnsetDiscount()`

UnsetDiscount ensures that no value is present for Discount, not even an explicit nil
### GetSplitCode

`func (o *PaymentRequestUpdateResponseData) GetSplitCode() map[string]interface{}`

GetSplitCode returns the SplitCode field if non-nil, zero value otherwise.

### GetSplitCodeOk

`func (o *PaymentRequestUpdateResponseData) GetSplitCodeOk() (*map[string]interface{}, bool)`

GetSplitCodeOk returns a tuple with the SplitCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplitCode

`func (o *PaymentRequestUpdateResponseData) SetSplitCode(v map[string]interface{})`

SetSplitCode sets SplitCode field to given value.


### SetSplitCodeNil

`func (o *PaymentRequestUpdateResponseData) SetSplitCodeNil(b bool)`

 SetSplitCodeNil sets the value for SplitCode to be an explicit nil

### UnsetSplitCode
`func (o *PaymentRequestUpdateResponseData) UnsetSplitCode()`

UnsetSplitCode ensures that no value is present for SplitCode, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


