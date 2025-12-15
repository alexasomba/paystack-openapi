# PlanCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of plan | 
**Amount** | **int32** | Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR | 
**Interval** | **string** | Payment interval | 
**Description** | Pointer to **string** | A description for this plan | [optional] 
**SendInvoices** | Pointer to **bool** | Set to false if you don&#39;t want invoices to be sent to your customers | [optional] 
**SendSms** | Pointer to **bool** | Set to false if you don&#39;t want text messages to be sent to your customers | [optional] 
**Currency** | Pointer to **string** | Currency in which amount is set. Allowed values are NGN, GHS, ZAR or USD | [optional] 
**InvoiceLimit** | Pointer to **int32** | Number of invoices to raise during subscription to this plan.  Can be overridden by specifying an invoice_limit while subscribing. | [optional] 

## Methods

### NewPlanCreate

`func NewPlanCreate(name string, amount int32, interval string, ) *PlanCreate`

NewPlanCreate instantiates a new PlanCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPlanCreateWithDefaults

`func NewPlanCreateWithDefaults() *PlanCreate`

NewPlanCreateWithDefaults instantiates a new PlanCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *PlanCreate) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PlanCreate) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PlanCreate) SetName(v string)`

SetName sets Name field to given value.


### GetAmount

`func (o *PlanCreate) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *PlanCreate) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *PlanCreate) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetInterval

`func (o *PlanCreate) GetInterval() string`

GetInterval returns the Interval field if non-nil, zero value otherwise.

### GetIntervalOk

`func (o *PlanCreate) GetIntervalOk() (*string, bool)`

GetIntervalOk returns a tuple with the Interval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterval

`func (o *PlanCreate) SetInterval(v string)`

SetInterval sets Interval field to given value.


### GetDescription

`func (o *PlanCreate) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *PlanCreate) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *PlanCreate) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *PlanCreate) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetSendInvoices

`func (o *PlanCreate) GetSendInvoices() bool`

GetSendInvoices returns the SendInvoices field if non-nil, zero value otherwise.

### GetSendInvoicesOk

`func (o *PlanCreate) GetSendInvoicesOk() (*bool, bool)`

GetSendInvoicesOk returns a tuple with the SendInvoices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSendInvoices

`func (o *PlanCreate) SetSendInvoices(v bool)`

SetSendInvoices sets SendInvoices field to given value.

### HasSendInvoices

`func (o *PlanCreate) HasSendInvoices() bool`

HasSendInvoices returns a boolean if a field has been set.

### GetSendSms

`func (o *PlanCreate) GetSendSms() bool`

GetSendSms returns the SendSms field if non-nil, zero value otherwise.

### GetSendSmsOk

`func (o *PlanCreate) GetSendSmsOk() (*bool, bool)`

GetSendSmsOk returns a tuple with the SendSms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSendSms

`func (o *PlanCreate) SetSendSms(v bool)`

SetSendSms sets SendSms field to given value.

### HasSendSms

`func (o *PlanCreate) HasSendSms() bool`

HasSendSms returns a boolean if a field has been set.

### GetCurrency

`func (o *PlanCreate) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *PlanCreate) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *PlanCreate) SetCurrency(v string)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *PlanCreate) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### GetInvoiceLimit

`func (o *PlanCreate) GetInvoiceLimit() int32`

GetInvoiceLimit returns the InvoiceLimit field if non-nil, zero value otherwise.

### GetInvoiceLimitOk

`func (o *PlanCreate) GetInvoiceLimitOk() (*int32, bool)`

GetInvoiceLimitOk returns a tuple with the InvoiceLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceLimit

`func (o *PlanCreate) SetInvoiceLimit(v int32)`

SetInvoiceLimit sets InvoiceLimit field to given value.

### HasInvoiceLimit

`func (o *PlanCreate) HasInvoiceLimit() bool`

HasInvoiceLimit returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


