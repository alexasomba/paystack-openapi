# PlanListResponseArray

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Subscriptions** | **[]map[string]interface{}** |  | 
**Pages** | **[]map[string]interface{}** |  | 
**Domain** | **string** |  | 
**Name** | **string** |  | 
**PlanCode** | **string** |  | 
**Description** | **map[string]interface{}** |  | 
**Amount** | **int32** |  | 
**Interval** | **string** |  | 
**InvoiceLimit** | **int32** |  | 
**SendInvoices** | **bool** |  | 
**SendSms** | **bool** |  | 
**HostedPage** | **bool** |  | 
**HostedPageUrl** | **map[string]interface{}** |  | 
**HostedPageSummary** | **map[string]interface{}** |  | 
**Currency** | **string** |  | 
**Migrate** | **bool** |  | 
**IsDeleted** | **bool** |  | 
**IsArchived** | **bool** |  | 
**Id** | **int32** |  | 
**Integration** | **int32** |  | 
**CreatedAt** | **string** |  | 
**UpdatedAt** | **string** |  | 
**TotalSubscriptions** | **int32** |  | 
**ActiveSubscriptions** | **int32** |  | 
**TotalSubscriptionsRevenue** | **int32** |  | 

## Methods

### NewPlanListResponseArray

`func NewPlanListResponseArray(subscriptions []map[string]interface{}, pages []map[string]interface{}, domain string, name string, planCode string, description map[string]interface{}, amount int32, interval string, invoiceLimit int32, sendInvoices bool, sendSms bool, hostedPage bool, hostedPageUrl map[string]interface{}, hostedPageSummary map[string]interface{}, currency string, migrate bool, isDeleted bool, isArchived bool, id int32, integration int32, createdAt string, updatedAt string, totalSubscriptions int32, activeSubscriptions int32, totalSubscriptionsRevenue int32, ) *PlanListResponseArray`

NewPlanListResponseArray instantiates a new PlanListResponseArray object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPlanListResponseArrayWithDefaults

`func NewPlanListResponseArrayWithDefaults() *PlanListResponseArray`

NewPlanListResponseArrayWithDefaults instantiates a new PlanListResponseArray object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSubscriptions

`func (o *PlanListResponseArray) GetSubscriptions() []map[string]interface{}`

GetSubscriptions returns the Subscriptions field if non-nil, zero value otherwise.

### GetSubscriptionsOk

`func (o *PlanListResponseArray) GetSubscriptionsOk() (*[]map[string]interface{}, bool)`

GetSubscriptionsOk returns a tuple with the Subscriptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubscriptions

`func (o *PlanListResponseArray) SetSubscriptions(v []map[string]interface{})`

SetSubscriptions sets Subscriptions field to given value.


### GetPages

`func (o *PlanListResponseArray) GetPages() []map[string]interface{}`

GetPages returns the Pages field if non-nil, zero value otherwise.

### GetPagesOk

`func (o *PlanListResponseArray) GetPagesOk() (*[]map[string]interface{}, bool)`

GetPagesOk returns a tuple with the Pages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPages

`func (o *PlanListResponseArray) SetPages(v []map[string]interface{})`

SetPages sets Pages field to given value.


### GetDomain

`func (o *PlanListResponseArray) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *PlanListResponseArray) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *PlanListResponseArray) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetName

`func (o *PlanListResponseArray) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PlanListResponseArray) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PlanListResponseArray) SetName(v string)`

SetName sets Name field to given value.


### GetPlanCode

`func (o *PlanListResponseArray) GetPlanCode() string`

GetPlanCode returns the PlanCode field if non-nil, zero value otherwise.

### GetPlanCodeOk

`func (o *PlanListResponseArray) GetPlanCodeOk() (*string, bool)`

GetPlanCodeOk returns a tuple with the PlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlanCode

`func (o *PlanListResponseArray) SetPlanCode(v string)`

SetPlanCode sets PlanCode field to given value.


### GetDescription

`func (o *PlanListResponseArray) GetDescription() map[string]interface{}`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *PlanListResponseArray) GetDescriptionOk() (*map[string]interface{}, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *PlanListResponseArray) SetDescription(v map[string]interface{})`

SetDescription sets Description field to given value.


### SetDescriptionNil

`func (o *PlanListResponseArray) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *PlanListResponseArray) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetAmount

`func (o *PlanListResponseArray) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *PlanListResponseArray) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *PlanListResponseArray) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetInterval

`func (o *PlanListResponseArray) GetInterval() string`

GetInterval returns the Interval field if non-nil, zero value otherwise.

### GetIntervalOk

`func (o *PlanListResponseArray) GetIntervalOk() (*string, bool)`

GetIntervalOk returns a tuple with the Interval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterval

`func (o *PlanListResponseArray) SetInterval(v string)`

SetInterval sets Interval field to given value.


### GetInvoiceLimit

`func (o *PlanListResponseArray) GetInvoiceLimit() int32`

GetInvoiceLimit returns the InvoiceLimit field if non-nil, zero value otherwise.

### GetInvoiceLimitOk

`func (o *PlanListResponseArray) GetInvoiceLimitOk() (*int32, bool)`

GetInvoiceLimitOk returns a tuple with the InvoiceLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceLimit

`func (o *PlanListResponseArray) SetInvoiceLimit(v int32)`

SetInvoiceLimit sets InvoiceLimit field to given value.


### GetSendInvoices

`func (o *PlanListResponseArray) GetSendInvoices() bool`

GetSendInvoices returns the SendInvoices field if non-nil, zero value otherwise.

### GetSendInvoicesOk

`func (o *PlanListResponseArray) GetSendInvoicesOk() (*bool, bool)`

GetSendInvoicesOk returns a tuple with the SendInvoices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSendInvoices

`func (o *PlanListResponseArray) SetSendInvoices(v bool)`

SetSendInvoices sets SendInvoices field to given value.


### GetSendSms

`func (o *PlanListResponseArray) GetSendSms() bool`

GetSendSms returns the SendSms field if non-nil, zero value otherwise.

### GetSendSmsOk

`func (o *PlanListResponseArray) GetSendSmsOk() (*bool, bool)`

GetSendSmsOk returns a tuple with the SendSms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSendSms

`func (o *PlanListResponseArray) SetSendSms(v bool)`

SetSendSms sets SendSms field to given value.


### GetHostedPage

`func (o *PlanListResponseArray) GetHostedPage() bool`

GetHostedPage returns the HostedPage field if non-nil, zero value otherwise.

### GetHostedPageOk

`func (o *PlanListResponseArray) GetHostedPageOk() (*bool, bool)`

GetHostedPageOk returns a tuple with the HostedPage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHostedPage

`func (o *PlanListResponseArray) SetHostedPage(v bool)`

SetHostedPage sets HostedPage field to given value.


### GetHostedPageUrl

`func (o *PlanListResponseArray) GetHostedPageUrl() map[string]interface{}`

GetHostedPageUrl returns the HostedPageUrl field if non-nil, zero value otherwise.

### GetHostedPageUrlOk

`func (o *PlanListResponseArray) GetHostedPageUrlOk() (*map[string]interface{}, bool)`

GetHostedPageUrlOk returns a tuple with the HostedPageUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHostedPageUrl

`func (o *PlanListResponseArray) SetHostedPageUrl(v map[string]interface{})`

SetHostedPageUrl sets HostedPageUrl field to given value.


### SetHostedPageUrlNil

`func (o *PlanListResponseArray) SetHostedPageUrlNil(b bool)`

 SetHostedPageUrlNil sets the value for HostedPageUrl to be an explicit nil

### UnsetHostedPageUrl
`func (o *PlanListResponseArray) UnsetHostedPageUrl()`

UnsetHostedPageUrl ensures that no value is present for HostedPageUrl, not even an explicit nil
### GetHostedPageSummary

`func (o *PlanListResponseArray) GetHostedPageSummary() map[string]interface{}`

GetHostedPageSummary returns the HostedPageSummary field if non-nil, zero value otherwise.

### GetHostedPageSummaryOk

`func (o *PlanListResponseArray) GetHostedPageSummaryOk() (*map[string]interface{}, bool)`

GetHostedPageSummaryOk returns a tuple with the HostedPageSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHostedPageSummary

`func (o *PlanListResponseArray) SetHostedPageSummary(v map[string]interface{})`

SetHostedPageSummary sets HostedPageSummary field to given value.


### SetHostedPageSummaryNil

`func (o *PlanListResponseArray) SetHostedPageSummaryNil(b bool)`

 SetHostedPageSummaryNil sets the value for HostedPageSummary to be an explicit nil

### UnsetHostedPageSummary
`func (o *PlanListResponseArray) UnsetHostedPageSummary()`

UnsetHostedPageSummary ensures that no value is present for HostedPageSummary, not even an explicit nil
### GetCurrency

`func (o *PlanListResponseArray) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *PlanListResponseArray) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *PlanListResponseArray) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetMigrate

`func (o *PlanListResponseArray) GetMigrate() bool`

GetMigrate returns the Migrate field if non-nil, zero value otherwise.

### GetMigrateOk

`func (o *PlanListResponseArray) GetMigrateOk() (*bool, bool)`

GetMigrateOk returns a tuple with the Migrate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMigrate

`func (o *PlanListResponseArray) SetMigrate(v bool)`

SetMigrate sets Migrate field to given value.


### GetIsDeleted

`func (o *PlanListResponseArray) GetIsDeleted() bool`

GetIsDeleted returns the IsDeleted field if non-nil, zero value otherwise.

### GetIsDeletedOk

`func (o *PlanListResponseArray) GetIsDeletedOk() (*bool, bool)`

GetIsDeletedOk returns a tuple with the IsDeleted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsDeleted

`func (o *PlanListResponseArray) SetIsDeleted(v bool)`

SetIsDeleted sets IsDeleted field to given value.


### GetIsArchived

`func (o *PlanListResponseArray) GetIsArchived() bool`

GetIsArchived returns the IsArchived field if non-nil, zero value otherwise.

### GetIsArchivedOk

`func (o *PlanListResponseArray) GetIsArchivedOk() (*bool, bool)`

GetIsArchivedOk returns a tuple with the IsArchived field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsArchived

`func (o *PlanListResponseArray) SetIsArchived(v bool)`

SetIsArchived sets IsArchived field to given value.


### GetId

`func (o *PlanListResponseArray) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *PlanListResponseArray) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *PlanListResponseArray) SetId(v int32)`

SetId sets Id field to given value.


### GetIntegration

`func (o *PlanListResponseArray) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *PlanListResponseArray) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *PlanListResponseArray) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetCreatedAt

`func (o *PlanListResponseArray) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *PlanListResponseArray) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *PlanListResponseArray) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *PlanListResponseArray) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *PlanListResponseArray) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *PlanListResponseArray) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.


### GetTotalSubscriptions

`func (o *PlanListResponseArray) GetTotalSubscriptions() int32`

GetTotalSubscriptions returns the TotalSubscriptions field if non-nil, zero value otherwise.

### GetTotalSubscriptionsOk

`func (o *PlanListResponseArray) GetTotalSubscriptionsOk() (*int32, bool)`

GetTotalSubscriptionsOk returns a tuple with the TotalSubscriptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalSubscriptions

`func (o *PlanListResponseArray) SetTotalSubscriptions(v int32)`

SetTotalSubscriptions sets TotalSubscriptions field to given value.


### GetActiveSubscriptions

`func (o *PlanListResponseArray) GetActiveSubscriptions() int32`

GetActiveSubscriptions returns the ActiveSubscriptions field if non-nil, zero value otherwise.

### GetActiveSubscriptionsOk

`func (o *PlanListResponseArray) GetActiveSubscriptionsOk() (*int32, bool)`

GetActiveSubscriptionsOk returns a tuple with the ActiveSubscriptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActiveSubscriptions

`func (o *PlanListResponseArray) SetActiveSubscriptions(v int32)`

SetActiveSubscriptions sets ActiveSubscriptions field to given value.


### GetTotalSubscriptionsRevenue

`func (o *PlanListResponseArray) GetTotalSubscriptionsRevenue() int32`

GetTotalSubscriptionsRevenue returns the TotalSubscriptionsRevenue field if non-nil, zero value otherwise.

### GetTotalSubscriptionsRevenueOk

`func (o *PlanListResponseArray) GetTotalSubscriptionsRevenueOk() (*int32, bool)`

GetTotalSubscriptionsRevenueOk returns a tuple with the TotalSubscriptionsRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalSubscriptionsRevenue

`func (o *PlanListResponseArray) SetTotalSubscriptionsRevenue(v int32)`

SetTotalSubscriptionsRevenue sets TotalSubscriptionsRevenue field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


