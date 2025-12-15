# PaymentRequestFinalizeResponseData

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
**PdfUrl** | **map[string]interface{}** |  | 
**LineItems** | [**[]PaymentRequestLineItemsArray**](PaymentRequestLineItemsArray.md) |  | 
**Tax** | [**[]PaymentRequestTaxArray**](PaymentRequestTaxArray.md) |  | 
**RequestCode** | **string** |  | 
**Status** | **string** |  | 
**Paid** | **bool** |  | 
**PaidAt** | **map[string]interface{}** |  | 
**Metadata** | **map[string]interface{}** |  | 
**Notifications** | **[]map[string]interface{}** |  | 
**OfflineReference** | **string** |  | 
**Customer** | [**PaymentRequestUpdateResponseDataCustomer**](PaymentRequestUpdateResponseDataCustomer.md) |  | 
**CreatedAt** | **string** |  | 
**Discount** | [**NullablePaymentRequestFinalizeResponseDataDiscount**](PaymentRequestFinalizeResponseDataDiscount.md) |  | 
**SplitCode** | **map[string]interface{}** |  | 
**PendingAmount** | **int32** |  | 

## Methods

### NewPaymentRequestFinalizeResponseData

`func NewPaymentRequestFinalizeResponseData(id int32, integration int32, domain string, amount int32, currency string, dueDate NullableString, hasInvoice bool, invoiceNumber NullableInt32, description NullableString, pdfUrl map[string]interface{}, lineItems []PaymentRequestLineItemsArray, tax []PaymentRequestTaxArray, requestCode string, status string, paid bool, paidAt map[string]interface{}, metadata map[string]interface{}, notifications []map[string]interface{}, offlineReference string, customer PaymentRequestUpdateResponseDataCustomer, createdAt string, discount NullablePaymentRequestFinalizeResponseDataDiscount, splitCode map[string]interface{}, pendingAmount int32, ) *PaymentRequestFinalizeResponseData`

NewPaymentRequestFinalizeResponseData instantiates a new PaymentRequestFinalizeResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaymentRequestFinalizeResponseDataWithDefaults

`func NewPaymentRequestFinalizeResponseDataWithDefaults() *PaymentRequestFinalizeResponseData`

NewPaymentRequestFinalizeResponseDataWithDefaults instantiates a new PaymentRequestFinalizeResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *PaymentRequestFinalizeResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *PaymentRequestFinalizeResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *PaymentRequestFinalizeResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetIntegration

`func (o *PaymentRequestFinalizeResponseData) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *PaymentRequestFinalizeResponseData) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *PaymentRequestFinalizeResponseData) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetDomain

`func (o *PaymentRequestFinalizeResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *PaymentRequestFinalizeResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *PaymentRequestFinalizeResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetAmount

`func (o *PaymentRequestFinalizeResponseData) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *PaymentRequestFinalizeResponseData) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *PaymentRequestFinalizeResponseData) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetCurrency

`func (o *PaymentRequestFinalizeResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *PaymentRequestFinalizeResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *PaymentRequestFinalizeResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetDueDate

`func (o *PaymentRequestFinalizeResponseData) GetDueDate() string`

GetDueDate returns the DueDate field if non-nil, zero value otherwise.

### GetDueDateOk

`func (o *PaymentRequestFinalizeResponseData) GetDueDateOk() (*string, bool)`

GetDueDateOk returns a tuple with the DueDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDueDate

`func (o *PaymentRequestFinalizeResponseData) SetDueDate(v string)`

SetDueDate sets DueDate field to given value.


### SetDueDateNil

`func (o *PaymentRequestFinalizeResponseData) SetDueDateNil(b bool)`

 SetDueDateNil sets the value for DueDate to be an explicit nil

### UnsetDueDate
`func (o *PaymentRequestFinalizeResponseData) UnsetDueDate()`

UnsetDueDate ensures that no value is present for DueDate, not even an explicit nil
### GetHasInvoice

`func (o *PaymentRequestFinalizeResponseData) GetHasInvoice() bool`

GetHasInvoice returns the HasInvoice field if non-nil, zero value otherwise.

### GetHasInvoiceOk

`func (o *PaymentRequestFinalizeResponseData) GetHasInvoiceOk() (*bool, bool)`

GetHasInvoiceOk returns a tuple with the HasInvoice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasInvoice

`func (o *PaymentRequestFinalizeResponseData) SetHasInvoice(v bool)`

SetHasInvoice sets HasInvoice field to given value.


### GetInvoiceNumber

`func (o *PaymentRequestFinalizeResponseData) GetInvoiceNumber() int32`

GetInvoiceNumber returns the InvoiceNumber field if non-nil, zero value otherwise.

### GetInvoiceNumberOk

`func (o *PaymentRequestFinalizeResponseData) GetInvoiceNumberOk() (*int32, bool)`

GetInvoiceNumberOk returns a tuple with the InvoiceNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceNumber

`func (o *PaymentRequestFinalizeResponseData) SetInvoiceNumber(v int32)`

SetInvoiceNumber sets InvoiceNumber field to given value.


### SetInvoiceNumberNil

`func (o *PaymentRequestFinalizeResponseData) SetInvoiceNumberNil(b bool)`

 SetInvoiceNumberNil sets the value for InvoiceNumber to be an explicit nil

### UnsetInvoiceNumber
`func (o *PaymentRequestFinalizeResponseData) UnsetInvoiceNumber()`

UnsetInvoiceNumber ensures that no value is present for InvoiceNumber, not even an explicit nil
### GetDescription

`func (o *PaymentRequestFinalizeResponseData) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *PaymentRequestFinalizeResponseData) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *PaymentRequestFinalizeResponseData) SetDescription(v string)`

SetDescription sets Description field to given value.


### SetDescriptionNil

`func (o *PaymentRequestFinalizeResponseData) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *PaymentRequestFinalizeResponseData) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetPdfUrl

`func (o *PaymentRequestFinalizeResponseData) GetPdfUrl() map[string]interface{}`

GetPdfUrl returns the PdfUrl field if non-nil, zero value otherwise.

### GetPdfUrlOk

`func (o *PaymentRequestFinalizeResponseData) GetPdfUrlOk() (*map[string]interface{}, bool)`

GetPdfUrlOk returns a tuple with the PdfUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPdfUrl

`func (o *PaymentRequestFinalizeResponseData) SetPdfUrl(v map[string]interface{})`

SetPdfUrl sets PdfUrl field to given value.


### SetPdfUrlNil

`func (o *PaymentRequestFinalizeResponseData) SetPdfUrlNil(b bool)`

 SetPdfUrlNil sets the value for PdfUrl to be an explicit nil

### UnsetPdfUrl
`func (o *PaymentRequestFinalizeResponseData) UnsetPdfUrl()`

UnsetPdfUrl ensures that no value is present for PdfUrl, not even an explicit nil
### GetLineItems

`func (o *PaymentRequestFinalizeResponseData) GetLineItems() []PaymentRequestLineItemsArray`

GetLineItems returns the LineItems field if non-nil, zero value otherwise.

### GetLineItemsOk

`func (o *PaymentRequestFinalizeResponseData) GetLineItemsOk() (*[]PaymentRequestLineItemsArray, bool)`

GetLineItemsOk returns a tuple with the LineItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLineItems

`func (o *PaymentRequestFinalizeResponseData) SetLineItems(v []PaymentRequestLineItemsArray)`

SetLineItems sets LineItems field to given value.


### GetTax

`func (o *PaymentRequestFinalizeResponseData) GetTax() []PaymentRequestTaxArray`

GetTax returns the Tax field if non-nil, zero value otherwise.

### GetTaxOk

`func (o *PaymentRequestFinalizeResponseData) GetTaxOk() (*[]PaymentRequestTaxArray, bool)`

GetTaxOk returns a tuple with the Tax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTax

`func (o *PaymentRequestFinalizeResponseData) SetTax(v []PaymentRequestTaxArray)`

SetTax sets Tax field to given value.


### GetRequestCode

`func (o *PaymentRequestFinalizeResponseData) GetRequestCode() string`

GetRequestCode returns the RequestCode field if non-nil, zero value otherwise.

### GetRequestCodeOk

`func (o *PaymentRequestFinalizeResponseData) GetRequestCodeOk() (*string, bool)`

GetRequestCodeOk returns a tuple with the RequestCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestCode

`func (o *PaymentRequestFinalizeResponseData) SetRequestCode(v string)`

SetRequestCode sets RequestCode field to given value.


### GetStatus

`func (o *PaymentRequestFinalizeResponseData) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *PaymentRequestFinalizeResponseData) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *PaymentRequestFinalizeResponseData) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetPaid

`func (o *PaymentRequestFinalizeResponseData) GetPaid() bool`

GetPaid returns the Paid field if non-nil, zero value otherwise.

### GetPaidOk

`func (o *PaymentRequestFinalizeResponseData) GetPaidOk() (*bool, bool)`

GetPaidOk returns a tuple with the Paid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaid

`func (o *PaymentRequestFinalizeResponseData) SetPaid(v bool)`

SetPaid sets Paid field to given value.


### GetPaidAt

`func (o *PaymentRequestFinalizeResponseData) GetPaidAt() map[string]interface{}`

GetPaidAt returns the PaidAt field if non-nil, zero value otherwise.

### GetPaidAtOk

`func (o *PaymentRequestFinalizeResponseData) GetPaidAtOk() (*map[string]interface{}, bool)`

GetPaidAtOk returns a tuple with the PaidAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaidAt

`func (o *PaymentRequestFinalizeResponseData) SetPaidAt(v map[string]interface{})`

SetPaidAt sets PaidAt field to given value.


### SetPaidAtNil

`func (o *PaymentRequestFinalizeResponseData) SetPaidAtNil(b bool)`

 SetPaidAtNil sets the value for PaidAt to be an explicit nil

### UnsetPaidAt
`func (o *PaymentRequestFinalizeResponseData) UnsetPaidAt()`

UnsetPaidAt ensures that no value is present for PaidAt, not even an explicit nil
### GetMetadata

`func (o *PaymentRequestFinalizeResponseData) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *PaymentRequestFinalizeResponseData) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *PaymentRequestFinalizeResponseData) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.


### SetMetadataNil

`func (o *PaymentRequestFinalizeResponseData) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *PaymentRequestFinalizeResponseData) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil
### GetNotifications

`func (o *PaymentRequestFinalizeResponseData) GetNotifications() []map[string]interface{}`

GetNotifications returns the Notifications field if non-nil, zero value otherwise.

### GetNotificationsOk

`func (o *PaymentRequestFinalizeResponseData) GetNotificationsOk() (*[]map[string]interface{}, bool)`

GetNotificationsOk returns a tuple with the Notifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotifications

`func (o *PaymentRequestFinalizeResponseData) SetNotifications(v []map[string]interface{})`

SetNotifications sets Notifications field to given value.


### GetOfflineReference

`func (o *PaymentRequestFinalizeResponseData) GetOfflineReference() string`

GetOfflineReference returns the OfflineReference field if non-nil, zero value otherwise.

### GetOfflineReferenceOk

`func (o *PaymentRequestFinalizeResponseData) GetOfflineReferenceOk() (*string, bool)`

GetOfflineReferenceOk returns a tuple with the OfflineReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOfflineReference

`func (o *PaymentRequestFinalizeResponseData) SetOfflineReference(v string)`

SetOfflineReference sets OfflineReference field to given value.


### GetCustomer

`func (o *PaymentRequestFinalizeResponseData) GetCustomer() PaymentRequestUpdateResponseDataCustomer`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *PaymentRequestFinalizeResponseData) GetCustomerOk() (*PaymentRequestUpdateResponseDataCustomer, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *PaymentRequestFinalizeResponseData) SetCustomer(v PaymentRequestUpdateResponseDataCustomer)`

SetCustomer sets Customer field to given value.


### GetCreatedAt

`func (o *PaymentRequestFinalizeResponseData) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *PaymentRequestFinalizeResponseData) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *PaymentRequestFinalizeResponseData) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetDiscount

`func (o *PaymentRequestFinalizeResponseData) GetDiscount() PaymentRequestFinalizeResponseDataDiscount`

GetDiscount returns the Discount field if non-nil, zero value otherwise.

### GetDiscountOk

`func (o *PaymentRequestFinalizeResponseData) GetDiscountOk() (*PaymentRequestFinalizeResponseDataDiscount, bool)`

GetDiscountOk returns a tuple with the Discount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscount

`func (o *PaymentRequestFinalizeResponseData) SetDiscount(v PaymentRequestFinalizeResponseDataDiscount)`

SetDiscount sets Discount field to given value.


### SetDiscountNil

`func (o *PaymentRequestFinalizeResponseData) SetDiscountNil(b bool)`

 SetDiscountNil sets the value for Discount to be an explicit nil

### UnsetDiscount
`func (o *PaymentRequestFinalizeResponseData) UnsetDiscount()`

UnsetDiscount ensures that no value is present for Discount, not even an explicit nil
### GetSplitCode

`func (o *PaymentRequestFinalizeResponseData) GetSplitCode() map[string]interface{}`

GetSplitCode returns the SplitCode field if non-nil, zero value otherwise.

### GetSplitCodeOk

`func (o *PaymentRequestFinalizeResponseData) GetSplitCodeOk() (*map[string]interface{}, bool)`

GetSplitCodeOk returns a tuple with the SplitCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplitCode

`func (o *PaymentRequestFinalizeResponseData) SetSplitCode(v map[string]interface{})`

SetSplitCode sets SplitCode field to given value.


### SetSplitCodeNil

`func (o *PaymentRequestFinalizeResponseData) SetSplitCodeNil(b bool)`

 SetSplitCodeNil sets the value for SplitCode to be an explicit nil

### UnsetSplitCode
`func (o *PaymentRequestFinalizeResponseData) UnsetSplitCode()`

UnsetSplitCode ensures that no value is present for SplitCode, not even an explicit nil
### GetPendingAmount

`func (o *PaymentRequestFinalizeResponseData) GetPendingAmount() int32`

GetPendingAmount returns the PendingAmount field if non-nil, zero value otherwise.

### GetPendingAmountOk

`func (o *PaymentRequestFinalizeResponseData) GetPendingAmountOk() (*int32, bool)`

GetPendingAmountOk returns a tuple with the PendingAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPendingAmount

`func (o *PaymentRequestFinalizeResponseData) SetPendingAmount(v int32)`

SetPendingAmount sets PendingAmount field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


