# PlanUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Name of plan | [optional] 
**Amount** | Pointer to **int32** | Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR | [optional] 
**Interval** | Pointer to **string** | Payment interval | [optional] 
**Description** | Pointer to **bool** | A description for this plan | [optional] 
**SendInvoices** | Pointer to **bool** | Set to false if you don&#39;t want invoices to be sent to your customers | [optional] 
**SendSms** | Pointer to **bool** | Set to false if you don&#39;t want text messages to be sent to your customers | [optional] 
**Currency** | Pointer to **string** | Currency in which amount is set. Allowed values are NGN, GHS, ZAR or USD | [optional] 
**InvoiceLimit** | Pointer to **int32** | Number of invoices to raise during subscription to this plan.  Can be overridden by specifying an invoice_limit while subscribing. | [optional] 

## Methods

### NewPlanUpdate

`func NewPlanUpdate() *PlanUpdate`

NewPlanUpdate instantiates a new PlanUpdate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPlanUpdateWithDefaults

`func NewPlanUpdateWithDefaults() *PlanUpdate`

NewPlanUpdateWithDefaults instantiates a new PlanUpdate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *PlanUpdate) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PlanUpdate) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PlanUpdate) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PlanUpdate) HasName() bool`

HasName returns a boolean if a field has been set.

### GetAmount

`func (o *PlanUpdate) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *PlanUpdate) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *PlanUpdate) SetAmount(v int32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *PlanUpdate) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetInterval

`func (o *PlanUpdate) GetInterval() string`

GetInterval returns the Interval field if non-nil, zero value otherwise.

### GetIntervalOk

`func (o *PlanUpdate) GetIntervalOk() (*string, bool)`

GetIntervalOk returns a tuple with the Interval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterval

`func (o *PlanUpdate) SetInterval(v string)`

SetInterval sets Interval field to given value.

### HasInterval

`func (o *PlanUpdate) HasInterval() bool`

HasInterval returns a boolean if a field has been set.

### GetDescription

`func (o *PlanUpdate) GetDescription() bool`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *PlanUpdate) GetDescriptionOk() (*bool, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *PlanUpdate) SetDescription(v bool)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *PlanUpdate) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetSendInvoices

`func (o *PlanUpdate) GetSendInvoices() bool`

GetSendInvoices returns the SendInvoices field if non-nil, zero value otherwise.

### GetSendInvoicesOk

`func (o *PlanUpdate) GetSendInvoicesOk() (*bool, bool)`

GetSendInvoicesOk returns a tuple with the SendInvoices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSendInvoices

`func (o *PlanUpdate) SetSendInvoices(v bool)`

SetSendInvoices sets SendInvoices field to given value.

### HasSendInvoices

`func (o *PlanUpdate) HasSendInvoices() bool`

HasSendInvoices returns a boolean if a field has been set.

### GetSendSms

`func (o *PlanUpdate) GetSendSms() bool`

GetSendSms returns the SendSms field if non-nil, zero value otherwise.

### GetSendSmsOk

`func (o *PlanUpdate) GetSendSmsOk() (*bool, bool)`

GetSendSmsOk returns a tuple with the SendSms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSendSms

`func (o *PlanUpdate) SetSendSms(v bool)`

SetSendSms sets SendSms field to given value.

### HasSendSms

`func (o *PlanUpdate) HasSendSms() bool`

HasSendSms returns a boolean if a field has been set.

### GetCurrency

`func (o *PlanUpdate) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *PlanUpdate) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *PlanUpdate) SetCurrency(v string)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *PlanUpdate) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### GetInvoiceLimit

`func (o *PlanUpdate) GetInvoiceLimit() int32`

GetInvoiceLimit returns the InvoiceLimit field if non-nil, zero value otherwise.

### GetInvoiceLimitOk

`func (o *PlanUpdate) GetInvoiceLimitOk() (*int32, bool)`

GetInvoiceLimitOk returns a tuple with the InvoiceLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceLimit

`func (o *PlanUpdate) SetInvoiceLimit(v int32)`

SetInvoiceLimit sets InvoiceLimit field to given value.

### HasInvoiceLimit

`func (o *PlanUpdate) HasInvoiceLimit() bool`

HasInvoiceLimit returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


