# PaymentRequestUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Customer** | Pointer to **string** | Customer id or code | [optional] 
**Amount** | Pointer to **int32** | Payment request amount. Only useful if line items and tax values are ignored.  The endpoint will throw a friendly warning if neither is available. | [optional] 
**Currency** | Pointer to **string** | Specify the currency of the invoice. Allowed values are NGN, GHS, ZAR and USD. Defaults to NGN | [optional] 
**DueDate** | Pointer to **time.Time** | ISO 8601 representation of request due date | [optional] 
**Description** | Pointer to **string** | A short description of the payment request | [optional] 
**LineItems** | Pointer to **[]map[string]interface{}** | Array of line items | [optional] 
**Tax** | Pointer to **[]map[string]interface{}** | Array of taxes | [optional] 
**SendNotification** | Pointer to **bool** | Indicates whether Paystack sends an email notification to customer. Defaults to true | [optional] 
**Draft** | Pointer to **bool** | Indicate if request should be saved as draft. Defaults to false and overrides send_notification | [optional] 
**HasInvoice** | Pointer to **[]map[string]interface{}** | Set to true to create a draft invoice (adds an auto incrementing invoice number if none is provided) even if there are no line_items or tax passed | [optional] 
**InvoiceNumber** | Pointer to **int32** | Numeric value of invoice. Invoice will start from 1 and auto increment from there. This field is to help override whatever value Paystack decides.  Auto increment for subsequent invoices continue from this point. | [optional] 
**SplitCode** | Pointer to **string** | The split code of the transaction split. | [optional] 

## Methods

### NewPaymentRequestUpdate

`func NewPaymentRequestUpdate() *PaymentRequestUpdate`

NewPaymentRequestUpdate instantiates a new PaymentRequestUpdate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaymentRequestUpdateWithDefaults

`func NewPaymentRequestUpdateWithDefaults() *PaymentRequestUpdate`

NewPaymentRequestUpdateWithDefaults instantiates a new PaymentRequestUpdate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomer

`func (o *PaymentRequestUpdate) GetCustomer() string`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *PaymentRequestUpdate) GetCustomerOk() (*string, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *PaymentRequestUpdate) SetCustomer(v string)`

SetCustomer sets Customer field to given value.

### HasCustomer

`func (o *PaymentRequestUpdate) HasCustomer() bool`

HasCustomer returns a boolean if a field has been set.

### GetAmount

`func (o *PaymentRequestUpdate) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *PaymentRequestUpdate) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *PaymentRequestUpdate) SetAmount(v int32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *PaymentRequestUpdate) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetCurrency

`func (o *PaymentRequestUpdate) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *PaymentRequestUpdate) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *PaymentRequestUpdate) SetCurrency(v string)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *PaymentRequestUpdate) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### GetDueDate

`func (o *PaymentRequestUpdate) GetDueDate() time.Time`

GetDueDate returns the DueDate field if non-nil, zero value otherwise.

### GetDueDateOk

`func (o *PaymentRequestUpdate) GetDueDateOk() (*time.Time, bool)`

GetDueDateOk returns a tuple with the DueDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDueDate

`func (o *PaymentRequestUpdate) SetDueDate(v time.Time)`

SetDueDate sets DueDate field to given value.

### HasDueDate

`func (o *PaymentRequestUpdate) HasDueDate() bool`

HasDueDate returns a boolean if a field has been set.

### GetDescription

`func (o *PaymentRequestUpdate) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *PaymentRequestUpdate) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *PaymentRequestUpdate) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *PaymentRequestUpdate) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetLineItems

`func (o *PaymentRequestUpdate) GetLineItems() []map[string]interface{}`

GetLineItems returns the LineItems field if non-nil, zero value otherwise.

### GetLineItemsOk

`func (o *PaymentRequestUpdate) GetLineItemsOk() (*[]map[string]interface{}, bool)`

GetLineItemsOk returns a tuple with the LineItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLineItems

`func (o *PaymentRequestUpdate) SetLineItems(v []map[string]interface{})`

SetLineItems sets LineItems field to given value.

### HasLineItems

`func (o *PaymentRequestUpdate) HasLineItems() bool`

HasLineItems returns a boolean if a field has been set.

### GetTax

`func (o *PaymentRequestUpdate) GetTax() []map[string]interface{}`

GetTax returns the Tax field if non-nil, zero value otherwise.

### GetTaxOk

`func (o *PaymentRequestUpdate) GetTaxOk() (*[]map[string]interface{}, bool)`

GetTaxOk returns a tuple with the Tax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTax

`func (o *PaymentRequestUpdate) SetTax(v []map[string]interface{})`

SetTax sets Tax field to given value.

### HasTax

`func (o *PaymentRequestUpdate) HasTax() bool`

HasTax returns a boolean if a field has been set.

### GetSendNotification

`func (o *PaymentRequestUpdate) GetSendNotification() bool`

GetSendNotification returns the SendNotification field if non-nil, zero value otherwise.

### GetSendNotificationOk

`func (o *PaymentRequestUpdate) GetSendNotificationOk() (*bool, bool)`

GetSendNotificationOk returns a tuple with the SendNotification field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSendNotification

`func (o *PaymentRequestUpdate) SetSendNotification(v bool)`

SetSendNotification sets SendNotification field to given value.

### HasSendNotification

`func (o *PaymentRequestUpdate) HasSendNotification() bool`

HasSendNotification returns a boolean if a field has been set.

### GetDraft

`func (o *PaymentRequestUpdate) GetDraft() bool`

GetDraft returns the Draft field if non-nil, zero value otherwise.

### GetDraftOk

`func (o *PaymentRequestUpdate) GetDraftOk() (*bool, bool)`

GetDraftOk returns a tuple with the Draft field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDraft

`func (o *PaymentRequestUpdate) SetDraft(v bool)`

SetDraft sets Draft field to given value.

### HasDraft

`func (o *PaymentRequestUpdate) HasDraft() bool`

HasDraft returns a boolean if a field has been set.

### GetHasInvoice

`func (o *PaymentRequestUpdate) GetHasInvoice() []map[string]interface{}`

GetHasInvoice returns the HasInvoice field if non-nil, zero value otherwise.

### GetHasInvoiceOk

`func (o *PaymentRequestUpdate) GetHasInvoiceOk() (*[]map[string]interface{}, bool)`

GetHasInvoiceOk returns a tuple with the HasInvoice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasInvoice

`func (o *PaymentRequestUpdate) SetHasInvoice(v []map[string]interface{})`

SetHasInvoice sets HasInvoice field to given value.

### HasHasInvoice

`func (o *PaymentRequestUpdate) HasHasInvoice() bool`

HasHasInvoice returns a boolean if a field has been set.

### GetInvoiceNumber

`func (o *PaymentRequestUpdate) GetInvoiceNumber() int32`

GetInvoiceNumber returns the InvoiceNumber field if non-nil, zero value otherwise.

### GetInvoiceNumberOk

`func (o *PaymentRequestUpdate) GetInvoiceNumberOk() (*int32, bool)`

GetInvoiceNumberOk returns a tuple with the InvoiceNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceNumber

`func (o *PaymentRequestUpdate) SetInvoiceNumber(v int32)`

SetInvoiceNumber sets InvoiceNumber field to given value.

### HasInvoiceNumber

`func (o *PaymentRequestUpdate) HasInvoiceNumber() bool`

HasInvoiceNumber returns a boolean if a field has been set.

### GetSplitCode

`func (o *PaymentRequestUpdate) GetSplitCode() string`

GetSplitCode returns the SplitCode field if non-nil, zero value otherwise.

### GetSplitCodeOk

`func (o *PaymentRequestUpdate) GetSplitCodeOk() (*string, bool)`

GetSplitCodeOk returns a tuple with the SplitCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplitCode

`func (o *PaymentRequestUpdate) SetSplitCode(v string)`

SetSplitCode sets SplitCode field to given value.

### HasSplitCode

`func (o *PaymentRequestUpdate) HasSplitCode() bool`

HasSplitCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


