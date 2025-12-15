# PlanCreateResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Currency** | **string** |  | 
**Name** | **string** |  | 
**Amount** | **int32** |  | 
**Interval** | **string** |  | 
**Integration** | **int32** |  | 
**Domain** | **string** |  | 
**PlanCode** | **string** |  | 
**InvoiceLimit** | **int32** |  | 
**SendInvoices** | **bool** |  | 
**SendSms** | **bool** |  | 
**HostedPage** | **bool** |  | 
**Migrate** | **bool** |  | 
**IsArchived** | **bool** |  | 
**Id** | **int32** |  | 
**CreatedAt** | **string** |  | 
**UpdatedAt** | **string** |  | 

## Methods

### NewPlanCreateResponseData

`func NewPlanCreateResponseData(currency string, name string, amount int32, interval string, integration int32, domain string, planCode string, invoiceLimit int32, sendInvoices bool, sendSms bool, hostedPage bool, migrate bool, isArchived bool, id int32, createdAt string, updatedAt string, ) *PlanCreateResponseData`

NewPlanCreateResponseData instantiates a new PlanCreateResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPlanCreateResponseDataWithDefaults

`func NewPlanCreateResponseDataWithDefaults() *PlanCreateResponseData`

NewPlanCreateResponseDataWithDefaults instantiates a new PlanCreateResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCurrency

`func (o *PlanCreateResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *PlanCreateResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *PlanCreateResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetName

`func (o *PlanCreateResponseData) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PlanCreateResponseData) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PlanCreateResponseData) SetName(v string)`

SetName sets Name field to given value.


### GetAmount

`func (o *PlanCreateResponseData) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *PlanCreateResponseData) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *PlanCreateResponseData) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetInterval

`func (o *PlanCreateResponseData) GetInterval() string`

GetInterval returns the Interval field if non-nil, zero value otherwise.

### GetIntervalOk

`func (o *PlanCreateResponseData) GetIntervalOk() (*string, bool)`

GetIntervalOk returns a tuple with the Interval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterval

`func (o *PlanCreateResponseData) SetInterval(v string)`

SetInterval sets Interval field to given value.


### GetIntegration

`func (o *PlanCreateResponseData) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *PlanCreateResponseData) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *PlanCreateResponseData) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetDomain

`func (o *PlanCreateResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *PlanCreateResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *PlanCreateResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetPlanCode

`func (o *PlanCreateResponseData) GetPlanCode() string`

GetPlanCode returns the PlanCode field if non-nil, zero value otherwise.

### GetPlanCodeOk

`func (o *PlanCreateResponseData) GetPlanCodeOk() (*string, bool)`

GetPlanCodeOk returns a tuple with the PlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlanCode

`func (o *PlanCreateResponseData) SetPlanCode(v string)`

SetPlanCode sets PlanCode field to given value.


### GetInvoiceLimit

`func (o *PlanCreateResponseData) GetInvoiceLimit() int32`

GetInvoiceLimit returns the InvoiceLimit field if non-nil, zero value otherwise.

### GetInvoiceLimitOk

`func (o *PlanCreateResponseData) GetInvoiceLimitOk() (*int32, bool)`

GetInvoiceLimitOk returns a tuple with the InvoiceLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceLimit

`func (o *PlanCreateResponseData) SetInvoiceLimit(v int32)`

SetInvoiceLimit sets InvoiceLimit field to given value.


### GetSendInvoices

`func (o *PlanCreateResponseData) GetSendInvoices() bool`

GetSendInvoices returns the SendInvoices field if non-nil, zero value otherwise.

### GetSendInvoicesOk

`func (o *PlanCreateResponseData) GetSendInvoicesOk() (*bool, bool)`

GetSendInvoicesOk returns a tuple with the SendInvoices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSendInvoices

`func (o *PlanCreateResponseData) SetSendInvoices(v bool)`

SetSendInvoices sets SendInvoices field to given value.


### GetSendSms

`func (o *PlanCreateResponseData) GetSendSms() bool`

GetSendSms returns the SendSms field if non-nil, zero value otherwise.

### GetSendSmsOk

`func (o *PlanCreateResponseData) GetSendSmsOk() (*bool, bool)`

GetSendSmsOk returns a tuple with the SendSms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSendSms

`func (o *PlanCreateResponseData) SetSendSms(v bool)`

SetSendSms sets SendSms field to given value.


### GetHostedPage

`func (o *PlanCreateResponseData) GetHostedPage() bool`

GetHostedPage returns the HostedPage field if non-nil, zero value otherwise.

### GetHostedPageOk

`func (o *PlanCreateResponseData) GetHostedPageOk() (*bool, bool)`

GetHostedPageOk returns a tuple with the HostedPage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHostedPage

`func (o *PlanCreateResponseData) SetHostedPage(v bool)`

SetHostedPage sets HostedPage field to given value.


### GetMigrate

`func (o *PlanCreateResponseData) GetMigrate() bool`

GetMigrate returns the Migrate field if non-nil, zero value otherwise.

### GetMigrateOk

`func (o *PlanCreateResponseData) GetMigrateOk() (*bool, bool)`

GetMigrateOk returns a tuple with the Migrate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMigrate

`func (o *PlanCreateResponseData) SetMigrate(v bool)`

SetMigrate sets Migrate field to given value.


### GetIsArchived

`func (o *PlanCreateResponseData) GetIsArchived() bool`

GetIsArchived returns the IsArchived field if non-nil, zero value otherwise.

### GetIsArchivedOk

`func (o *PlanCreateResponseData) GetIsArchivedOk() (*bool, bool)`

GetIsArchivedOk returns a tuple with the IsArchived field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsArchived

`func (o *PlanCreateResponseData) SetIsArchived(v bool)`

SetIsArchived sets IsArchived field to given value.


### GetId

`func (o *PlanCreateResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *PlanCreateResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *PlanCreateResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetCreatedAt

`func (o *PlanCreateResponseData) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *PlanCreateResponseData) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *PlanCreateResponseData) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *PlanCreateResponseData) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *PlanCreateResponseData) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *PlanCreateResponseData) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


