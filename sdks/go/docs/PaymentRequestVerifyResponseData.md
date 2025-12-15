# PaymentRequestVerifyResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**Integration** | [**PaymentRequestVerifyResponseDataIntegration**](PaymentRequestVerifyResponseDataIntegration.md) |  | 
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
**PendingAmount** | **int32** |  | 

## Methods

### NewPaymentRequestVerifyResponseData

`func NewPaymentRequestVerifyResponseData(id int32, integration PaymentRequestVerifyResponseDataIntegration, domain string, amount int32, currency string, dueDate NullableString, hasInvoice bool, invoiceNumber NullableInt32, description map[string]interface{}, pdfUrl NullableString, lineItems []map[string]interface{}, tax []map[string]interface{}, requestCode string, status string, paid bool, paidAt map[string]interface{}, metadata map[string]interface{}, notifications []PaymentRequestNotificationsArray, offlineReference string, customer PaymentRequestUpdateResponseDataCustomer, createdAt string, discount map[string]interface{}, splitCode map[string]interface{}, pendingAmount int32, ) *PaymentRequestVerifyResponseData`

NewPaymentRequestVerifyResponseData instantiates a new PaymentRequestVerifyResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaymentRequestVerifyResponseDataWithDefaults

`func NewPaymentRequestVerifyResponseDataWithDefaults() *PaymentRequestVerifyResponseData`

NewPaymentRequestVerifyResponseDataWithDefaults instantiates a new PaymentRequestVerifyResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *PaymentRequestVerifyResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *PaymentRequestVerifyResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *PaymentRequestVerifyResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetIntegration

`func (o *PaymentRequestVerifyResponseData) GetIntegration() PaymentRequestVerifyResponseDataIntegration`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *PaymentRequestVerifyResponseData) GetIntegrationOk() (*PaymentRequestVerifyResponseDataIntegration, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *PaymentRequestVerifyResponseData) SetIntegration(v PaymentRequestVerifyResponseDataIntegration)`

SetIntegration sets Integration field to given value.


### GetDomain

`func (o *PaymentRequestVerifyResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *PaymentRequestVerifyResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *PaymentRequestVerifyResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetAmount

`func (o *PaymentRequestVerifyResponseData) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *PaymentRequestVerifyResponseData) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *PaymentRequestVerifyResponseData) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetCurrency

`func (o *PaymentRequestVerifyResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *PaymentRequestVerifyResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *PaymentRequestVerifyResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetDueDate

`func (o *PaymentRequestVerifyResponseData) GetDueDate() string`

GetDueDate returns the DueDate field if non-nil, zero value otherwise.

### GetDueDateOk

`func (o *PaymentRequestVerifyResponseData) GetDueDateOk() (*string, bool)`

GetDueDateOk returns a tuple with the DueDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDueDate

`func (o *PaymentRequestVerifyResponseData) SetDueDate(v string)`

SetDueDate sets DueDate field to given value.


### SetDueDateNil

`func (o *PaymentRequestVerifyResponseData) SetDueDateNil(b bool)`

 SetDueDateNil sets the value for DueDate to be an explicit nil

### UnsetDueDate
`func (o *PaymentRequestVerifyResponseData) UnsetDueDate()`

UnsetDueDate ensures that no value is present for DueDate, not even an explicit nil
### GetHasInvoice

`func (o *PaymentRequestVerifyResponseData) GetHasInvoice() bool`

GetHasInvoice returns the HasInvoice field if non-nil, zero value otherwise.

### GetHasInvoiceOk

`func (o *PaymentRequestVerifyResponseData) GetHasInvoiceOk() (*bool, bool)`

GetHasInvoiceOk returns a tuple with the HasInvoice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasInvoice

`func (o *PaymentRequestVerifyResponseData) SetHasInvoice(v bool)`

SetHasInvoice sets HasInvoice field to given value.


### GetInvoiceNumber

`func (o *PaymentRequestVerifyResponseData) GetInvoiceNumber() int32`

GetInvoiceNumber returns the InvoiceNumber field if non-nil, zero value otherwise.

### GetInvoiceNumberOk

`func (o *PaymentRequestVerifyResponseData) GetInvoiceNumberOk() (*int32, bool)`

GetInvoiceNumberOk returns a tuple with the InvoiceNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceNumber

`func (o *PaymentRequestVerifyResponseData) SetInvoiceNumber(v int32)`

SetInvoiceNumber sets InvoiceNumber field to given value.


### SetInvoiceNumberNil

`func (o *PaymentRequestVerifyResponseData) SetInvoiceNumberNil(b bool)`

 SetInvoiceNumberNil sets the value for InvoiceNumber to be an explicit nil

### UnsetInvoiceNumber
`func (o *PaymentRequestVerifyResponseData) UnsetInvoiceNumber()`

UnsetInvoiceNumber ensures that no value is present for InvoiceNumber, not even an explicit nil
### GetDescription

`func (o *PaymentRequestVerifyResponseData) GetDescription() map[string]interface{}`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *PaymentRequestVerifyResponseData) GetDescriptionOk() (*map[string]interface{}, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *PaymentRequestVerifyResponseData) SetDescription(v map[string]interface{})`

SetDescription sets Description field to given value.


### SetDescriptionNil

`func (o *PaymentRequestVerifyResponseData) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *PaymentRequestVerifyResponseData) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetPdfUrl

`func (o *PaymentRequestVerifyResponseData) GetPdfUrl() string`

GetPdfUrl returns the PdfUrl field if non-nil, zero value otherwise.

### GetPdfUrlOk

`func (o *PaymentRequestVerifyResponseData) GetPdfUrlOk() (*string, bool)`

GetPdfUrlOk returns a tuple with the PdfUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPdfUrl

`func (o *PaymentRequestVerifyResponseData) SetPdfUrl(v string)`

SetPdfUrl sets PdfUrl field to given value.


### SetPdfUrlNil

`func (o *PaymentRequestVerifyResponseData) SetPdfUrlNil(b bool)`

 SetPdfUrlNil sets the value for PdfUrl to be an explicit nil

### UnsetPdfUrl
`func (o *PaymentRequestVerifyResponseData) UnsetPdfUrl()`

UnsetPdfUrl ensures that no value is present for PdfUrl, not even an explicit nil
### GetLineItems

`func (o *PaymentRequestVerifyResponseData) GetLineItems() []map[string]interface{}`

GetLineItems returns the LineItems field if non-nil, zero value otherwise.

### GetLineItemsOk

`func (o *PaymentRequestVerifyResponseData) GetLineItemsOk() (*[]map[string]interface{}, bool)`

GetLineItemsOk returns a tuple with the LineItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLineItems

`func (o *PaymentRequestVerifyResponseData) SetLineItems(v []map[string]interface{})`

SetLineItems sets LineItems field to given value.


### GetTax

`func (o *PaymentRequestVerifyResponseData) GetTax() []map[string]interface{}`

GetTax returns the Tax field if non-nil, zero value otherwise.

### GetTaxOk

`func (o *PaymentRequestVerifyResponseData) GetTaxOk() (*[]map[string]interface{}, bool)`

GetTaxOk returns a tuple with the Tax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTax

`func (o *PaymentRequestVerifyResponseData) SetTax(v []map[string]interface{})`

SetTax sets Tax field to given value.


### GetRequestCode

`func (o *PaymentRequestVerifyResponseData) GetRequestCode() string`

GetRequestCode returns the RequestCode field if non-nil, zero value otherwise.

### GetRequestCodeOk

`func (o *PaymentRequestVerifyResponseData) GetRequestCodeOk() (*string, bool)`

GetRequestCodeOk returns a tuple with the RequestCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestCode

`func (o *PaymentRequestVerifyResponseData) SetRequestCode(v string)`

SetRequestCode sets RequestCode field to given value.


### GetStatus

`func (o *PaymentRequestVerifyResponseData) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *PaymentRequestVerifyResponseData) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *PaymentRequestVerifyResponseData) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetPaid

`func (o *PaymentRequestVerifyResponseData) GetPaid() bool`

GetPaid returns the Paid field if non-nil, zero value otherwise.

### GetPaidOk

`func (o *PaymentRequestVerifyResponseData) GetPaidOk() (*bool, bool)`

GetPaidOk returns a tuple with the Paid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaid

`func (o *PaymentRequestVerifyResponseData) SetPaid(v bool)`

SetPaid sets Paid field to given value.


### GetPaidAt

`func (o *PaymentRequestVerifyResponseData) GetPaidAt() map[string]interface{}`

GetPaidAt returns the PaidAt field if non-nil, zero value otherwise.

### GetPaidAtOk

`func (o *PaymentRequestVerifyResponseData) GetPaidAtOk() (*map[string]interface{}, bool)`

GetPaidAtOk returns a tuple with the PaidAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaidAt

`func (o *PaymentRequestVerifyResponseData) SetPaidAt(v map[string]interface{})`

SetPaidAt sets PaidAt field to given value.


### SetPaidAtNil

`func (o *PaymentRequestVerifyResponseData) SetPaidAtNil(b bool)`

 SetPaidAtNil sets the value for PaidAt to be an explicit nil

### UnsetPaidAt
`func (o *PaymentRequestVerifyResponseData) UnsetPaidAt()`

UnsetPaidAt ensures that no value is present for PaidAt, not even an explicit nil
### GetMetadata

`func (o *PaymentRequestVerifyResponseData) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *PaymentRequestVerifyResponseData) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *PaymentRequestVerifyResponseData) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.


### SetMetadataNil

`func (o *PaymentRequestVerifyResponseData) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *PaymentRequestVerifyResponseData) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil
### GetNotifications

`func (o *PaymentRequestVerifyResponseData) GetNotifications() []PaymentRequestNotificationsArray`

GetNotifications returns the Notifications field if non-nil, zero value otherwise.

### GetNotificationsOk

`func (o *PaymentRequestVerifyResponseData) GetNotificationsOk() (*[]PaymentRequestNotificationsArray, bool)`

GetNotificationsOk returns a tuple with the Notifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotifications

`func (o *PaymentRequestVerifyResponseData) SetNotifications(v []PaymentRequestNotificationsArray)`

SetNotifications sets Notifications field to given value.


### GetOfflineReference

`func (o *PaymentRequestVerifyResponseData) GetOfflineReference() string`

GetOfflineReference returns the OfflineReference field if non-nil, zero value otherwise.

### GetOfflineReferenceOk

`func (o *PaymentRequestVerifyResponseData) GetOfflineReferenceOk() (*string, bool)`

GetOfflineReferenceOk returns a tuple with the OfflineReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOfflineReference

`func (o *PaymentRequestVerifyResponseData) SetOfflineReference(v string)`

SetOfflineReference sets OfflineReference field to given value.


### GetCustomer

`func (o *PaymentRequestVerifyResponseData) GetCustomer() PaymentRequestUpdateResponseDataCustomer`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *PaymentRequestVerifyResponseData) GetCustomerOk() (*PaymentRequestUpdateResponseDataCustomer, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *PaymentRequestVerifyResponseData) SetCustomer(v PaymentRequestUpdateResponseDataCustomer)`

SetCustomer sets Customer field to given value.


### GetCreatedAt

`func (o *PaymentRequestVerifyResponseData) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *PaymentRequestVerifyResponseData) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *PaymentRequestVerifyResponseData) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetDiscount

`func (o *PaymentRequestVerifyResponseData) GetDiscount() map[string]interface{}`

GetDiscount returns the Discount field if non-nil, zero value otherwise.

### GetDiscountOk

`func (o *PaymentRequestVerifyResponseData) GetDiscountOk() (*map[string]interface{}, bool)`

GetDiscountOk returns a tuple with the Discount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscount

`func (o *PaymentRequestVerifyResponseData) SetDiscount(v map[string]interface{})`

SetDiscount sets Discount field to given value.


### SetDiscountNil

`func (o *PaymentRequestVerifyResponseData) SetDiscountNil(b bool)`

 SetDiscountNil sets the value for Discount to be an explicit nil

### UnsetDiscount
`func (o *PaymentRequestVerifyResponseData) UnsetDiscount()`

UnsetDiscount ensures that no value is present for Discount, not even an explicit nil
### GetSplitCode

`func (o *PaymentRequestVerifyResponseData) GetSplitCode() map[string]interface{}`

GetSplitCode returns the SplitCode field if non-nil, zero value otherwise.

### GetSplitCodeOk

`func (o *PaymentRequestVerifyResponseData) GetSplitCodeOk() (*map[string]interface{}, bool)`

GetSplitCodeOk returns a tuple with the SplitCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplitCode

`func (o *PaymentRequestVerifyResponseData) SetSplitCode(v map[string]interface{})`

SetSplitCode sets SplitCode field to given value.


### SetSplitCodeNil

`func (o *PaymentRequestVerifyResponseData) SetSplitCodeNil(b bool)`

 SetSplitCodeNil sets the value for SplitCode to be an explicit nil

### UnsetSplitCode
`func (o *PaymentRequestVerifyResponseData) UnsetSplitCode()`

UnsetSplitCode ensures that no value is present for SplitCode, not even an explicit nil
### GetPendingAmount

`func (o *PaymentRequestVerifyResponseData) GetPendingAmount() int32`

GetPendingAmount returns the PendingAmount field if non-nil, zero value otherwise.

### GetPendingAmountOk

`func (o *PaymentRequestVerifyResponseData) GetPendingAmountOk() (*int32, bool)`

GetPendingAmountOk returns a tuple with the PendingAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPendingAmount

`func (o *PaymentRequestVerifyResponseData) SetPendingAmount(v int32)`

SetPendingAmount sets PendingAmount field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


