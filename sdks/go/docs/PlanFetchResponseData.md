# PlanFetchResponseData

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
**PagesCount** | **int32** |  | 
**SubscribersCount** | **int32** |  | 
**SubscriptionsCount** | **int32** |  | 
**ActiveSubscriptionsCount** | **NullableInt32** |  | 
**TotalRevenue** | **int32** |  | 
**Subscribers** | **[]map[string]interface{}** |  | 

## Methods

### NewPlanFetchResponseData

`func NewPlanFetchResponseData(subscriptions []map[string]interface{}, pages []map[string]interface{}, domain string, name string, planCode string, description map[string]interface{}, amount int32, interval string, invoiceLimit int32, sendInvoices bool, sendSms bool, hostedPage bool, hostedPageUrl map[string]interface{}, hostedPageSummary map[string]interface{}, currency string, migrate bool, isDeleted bool, isArchived bool, id int32, integration int32, createdAt string, updatedAt string, pagesCount int32, subscribersCount int32, subscriptionsCount int32, activeSubscriptionsCount NullableInt32, totalRevenue int32, subscribers []map[string]interface{}, ) *PlanFetchResponseData`

NewPlanFetchResponseData instantiates a new PlanFetchResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPlanFetchResponseDataWithDefaults

`func NewPlanFetchResponseDataWithDefaults() *PlanFetchResponseData`

NewPlanFetchResponseDataWithDefaults instantiates a new PlanFetchResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSubscriptions

`func (o *PlanFetchResponseData) GetSubscriptions() []map[string]interface{}`

GetSubscriptions returns the Subscriptions field if non-nil, zero value otherwise.

### GetSubscriptionsOk

`func (o *PlanFetchResponseData) GetSubscriptionsOk() (*[]map[string]interface{}, bool)`

GetSubscriptionsOk returns a tuple with the Subscriptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubscriptions

`func (o *PlanFetchResponseData) SetSubscriptions(v []map[string]interface{})`

SetSubscriptions sets Subscriptions field to given value.


### GetPages

`func (o *PlanFetchResponseData) GetPages() []map[string]interface{}`

GetPages returns the Pages field if non-nil, zero value otherwise.

### GetPagesOk

`func (o *PlanFetchResponseData) GetPagesOk() (*[]map[string]interface{}, bool)`

GetPagesOk returns a tuple with the Pages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPages

`func (o *PlanFetchResponseData) SetPages(v []map[string]interface{})`

SetPages sets Pages field to given value.


### GetDomain

`func (o *PlanFetchResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *PlanFetchResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *PlanFetchResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetName

`func (o *PlanFetchResponseData) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PlanFetchResponseData) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PlanFetchResponseData) SetName(v string)`

SetName sets Name field to given value.


### GetPlanCode

`func (o *PlanFetchResponseData) GetPlanCode() string`

GetPlanCode returns the PlanCode field if non-nil, zero value otherwise.

### GetPlanCodeOk

`func (o *PlanFetchResponseData) GetPlanCodeOk() (*string, bool)`

GetPlanCodeOk returns a tuple with the PlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlanCode

`func (o *PlanFetchResponseData) SetPlanCode(v string)`

SetPlanCode sets PlanCode field to given value.


### GetDescription

`func (o *PlanFetchResponseData) GetDescription() map[string]interface{}`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *PlanFetchResponseData) GetDescriptionOk() (*map[string]interface{}, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *PlanFetchResponseData) SetDescription(v map[string]interface{})`

SetDescription sets Description field to given value.


### SetDescriptionNil

`func (o *PlanFetchResponseData) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *PlanFetchResponseData) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetAmount

`func (o *PlanFetchResponseData) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *PlanFetchResponseData) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *PlanFetchResponseData) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetInterval

`func (o *PlanFetchResponseData) GetInterval() string`

GetInterval returns the Interval field if non-nil, zero value otherwise.

### GetIntervalOk

`func (o *PlanFetchResponseData) GetIntervalOk() (*string, bool)`

GetIntervalOk returns a tuple with the Interval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterval

`func (o *PlanFetchResponseData) SetInterval(v string)`

SetInterval sets Interval field to given value.


### GetInvoiceLimit

`func (o *PlanFetchResponseData) GetInvoiceLimit() int32`

GetInvoiceLimit returns the InvoiceLimit field if non-nil, zero value otherwise.

### GetInvoiceLimitOk

`func (o *PlanFetchResponseData) GetInvoiceLimitOk() (*int32, bool)`

GetInvoiceLimitOk returns a tuple with the InvoiceLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceLimit

`func (o *PlanFetchResponseData) SetInvoiceLimit(v int32)`

SetInvoiceLimit sets InvoiceLimit field to given value.


### GetSendInvoices

`func (o *PlanFetchResponseData) GetSendInvoices() bool`

GetSendInvoices returns the SendInvoices field if non-nil, zero value otherwise.

### GetSendInvoicesOk

`func (o *PlanFetchResponseData) GetSendInvoicesOk() (*bool, bool)`

GetSendInvoicesOk returns a tuple with the SendInvoices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSendInvoices

`func (o *PlanFetchResponseData) SetSendInvoices(v bool)`

SetSendInvoices sets SendInvoices field to given value.


### GetSendSms

`func (o *PlanFetchResponseData) GetSendSms() bool`

GetSendSms returns the SendSms field if non-nil, zero value otherwise.

### GetSendSmsOk

`func (o *PlanFetchResponseData) GetSendSmsOk() (*bool, bool)`

GetSendSmsOk returns a tuple with the SendSms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSendSms

`func (o *PlanFetchResponseData) SetSendSms(v bool)`

SetSendSms sets SendSms field to given value.


### GetHostedPage

`func (o *PlanFetchResponseData) GetHostedPage() bool`

GetHostedPage returns the HostedPage field if non-nil, zero value otherwise.

### GetHostedPageOk

`func (o *PlanFetchResponseData) GetHostedPageOk() (*bool, bool)`

GetHostedPageOk returns a tuple with the HostedPage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHostedPage

`func (o *PlanFetchResponseData) SetHostedPage(v bool)`

SetHostedPage sets HostedPage field to given value.


### GetHostedPageUrl

`func (o *PlanFetchResponseData) GetHostedPageUrl() map[string]interface{}`

GetHostedPageUrl returns the HostedPageUrl field if non-nil, zero value otherwise.

### GetHostedPageUrlOk

`func (o *PlanFetchResponseData) GetHostedPageUrlOk() (*map[string]interface{}, bool)`

GetHostedPageUrlOk returns a tuple with the HostedPageUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHostedPageUrl

`func (o *PlanFetchResponseData) SetHostedPageUrl(v map[string]interface{})`

SetHostedPageUrl sets HostedPageUrl field to given value.


### SetHostedPageUrlNil

`func (o *PlanFetchResponseData) SetHostedPageUrlNil(b bool)`

 SetHostedPageUrlNil sets the value for HostedPageUrl to be an explicit nil

### UnsetHostedPageUrl
`func (o *PlanFetchResponseData) UnsetHostedPageUrl()`

UnsetHostedPageUrl ensures that no value is present for HostedPageUrl, not even an explicit nil
### GetHostedPageSummary

`func (o *PlanFetchResponseData) GetHostedPageSummary() map[string]interface{}`

GetHostedPageSummary returns the HostedPageSummary field if non-nil, zero value otherwise.

### GetHostedPageSummaryOk

`func (o *PlanFetchResponseData) GetHostedPageSummaryOk() (*map[string]interface{}, bool)`

GetHostedPageSummaryOk returns a tuple with the HostedPageSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHostedPageSummary

`func (o *PlanFetchResponseData) SetHostedPageSummary(v map[string]interface{})`

SetHostedPageSummary sets HostedPageSummary field to given value.


### SetHostedPageSummaryNil

`func (o *PlanFetchResponseData) SetHostedPageSummaryNil(b bool)`

 SetHostedPageSummaryNil sets the value for HostedPageSummary to be an explicit nil

### UnsetHostedPageSummary
`func (o *PlanFetchResponseData) UnsetHostedPageSummary()`

UnsetHostedPageSummary ensures that no value is present for HostedPageSummary, not even an explicit nil
### GetCurrency

`func (o *PlanFetchResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *PlanFetchResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *PlanFetchResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetMigrate

`func (o *PlanFetchResponseData) GetMigrate() bool`

GetMigrate returns the Migrate field if non-nil, zero value otherwise.

### GetMigrateOk

`func (o *PlanFetchResponseData) GetMigrateOk() (*bool, bool)`

GetMigrateOk returns a tuple with the Migrate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMigrate

`func (o *PlanFetchResponseData) SetMigrate(v bool)`

SetMigrate sets Migrate field to given value.


### GetIsDeleted

`func (o *PlanFetchResponseData) GetIsDeleted() bool`

GetIsDeleted returns the IsDeleted field if non-nil, zero value otherwise.

### GetIsDeletedOk

`func (o *PlanFetchResponseData) GetIsDeletedOk() (*bool, bool)`

GetIsDeletedOk returns a tuple with the IsDeleted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsDeleted

`func (o *PlanFetchResponseData) SetIsDeleted(v bool)`

SetIsDeleted sets IsDeleted field to given value.


### GetIsArchived

`func (o *PlanFetchResponseData) GetIsArchived() bool`

GetIsArchived returns the IsArchived field if non-nil, zero value otherwise.

### GetIsArchivedOk

`func (o *PlanFetchResponseData) GetIsArchivedOk() (*bool, bool)`

GetIsArchivedOk returns a tuple with the IsArchived field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsArchived

`func (o *PlanFetchResponseData) SetIsArchived(v bool)`

SetIsArchived sets IsArchived field to given value.


### GetId

`func (o *PlanFetchResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *PlanFetchResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *PlanFetchResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetIntegration

`func (o *PlanFetchResponseData) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *PlanFetchResponseData) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *PlanFetchResponseData) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetCreatedAt

`func (o *PlanFetchResponseData) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *PlanFetchResponseData) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *PlanFetchResponseData) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *PlanFetchResponseData) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *PlanFetchResponseData) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *PlanFetchResponseData) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.


### GetPagesCount

`func (o *PlanFetchResponseData) GetPagesCount() int32`

GetPagesCount returns the PagesCount field if non-nil, zero value otherwise.

### GetPagesCountOk

`func (o *PlanFetchResponseData) GetPagesCountOk() (*int32, bool)`

GetPagesCountOk returns a tuple with the PagesCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagesCount

`func (o *PlanFetchResponseData) SetPagesCount(v int32)`

SetPagesCount sets PagesCount field to given value.


### GetSubscribersCount

`func (o *PlanFetchResponseData) GetSubscribersCount() int32`

GetSubscribersCount returns the SubscribersCount field if non-nil, zero value otherwise.

### GetSubscribersCountOk

`func (o *PlanFetchResponseData) GetSubscribersCountOk() (*int32, bool)`

GetSubscribersCountOk returns a tuple with the SubscribersCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubscribersCount

`func (o *PlanFetchResponseData) SetSubscribersCount(v int32)`

SetSubscribersCount sets SubscribersCount field to given value.


### GetSubscriptionsCount

`func (o *PlanFetchResponseData) GetSubscriptionsCount() int32`

GetSubscriptionsCount returns the SubscriptionsCount field if non-nil, zero value otherwise.

### GetSubscriptionsCountOk

`func (o *PlanFetchResponseData) GetSubscriptionsCountOk() (*int32, bool)`

GetSubscriptionsCountOk returns a tuple with the SubscriptionsCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubscriptionsCount

`func (o *PlanFetchResponseData) SetSubscriptionsCount(v int32)`

SetSubscriptionsCount sets SubscriptionsCount field to given value.


### GetActiveSubscriptionsCount

`func (o *PlanFetchResponseData) GetActiveSubscriptionsCount() int32`

GetActiveSubscriptionsCount returns the ActiveSubscriptionsCount field if non-nil, zero value otherwise.

### GetActiveSubscriptionsCountOk

`func (o *PlanFetchResponseData) GetActiveSubscriptionsCountOk() (*int32, bool)`

GetActiveSubscriptionsCountOk returns a tuple with the ActiveSubscriptionsCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActiveSubscriptionsCount

`func (o *PlanFetchResponseData) SetActiveSubscriptionsCount(v int32)`

SetActiveSubscriptionsCount sets ActiveSubscriptionsCount field to given value.


### SetActiveSubscriptionsCountNil

`func (o *PlanFetchResponseData) SetActiveSubscriptionsCountNil(b bool)`

 SetActiveSubscriptionsCountNil sets the value for ActiveSubscriptionsCount to be an explicit nil

### UnsetActiveSubscriptionsCount
`func (o *PlanFetchResponseData) UnsetActiveSubscriptionsCount()`

UnsetActiveSubscriptionsCount ensures that no value is present for ActiveSubscriptionsCount, not even an explicit nil
### GetTotalRevenue

`func (o *PlanFetchResponseData) GetTotalRevenue() int32`

GetTotalRevenue returns the TotalRevenue field if non-nil, zero value otherwise.

### GetTotalRevenueOk

`func (o *PlanFetchResponseData) GetTotalRevenueOk() (*int32, bool)`

GetTotalRevenueOk returns a tuple with the TotalRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRevenue

`func (o *PlanFetchResponseData) SetTotalRevenue(v int32)`

SetTotalRevenue sets TotalRevenue field to given value.


### GetSubscribers

`func (o *PlanFetchResponseData) GetSubscribers() []map[string]interface{}`

GetSubscribers returns the Subscribers field if non-nil, zero value otherwise.

### GetSubscribersOk

`func (o *PlanFetchResponseData) GetSubscribersOk() (*[]map[string]interface{}, bool)`

GetSubscribersOk returns a tuple with the Subscribers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubscribers

`func (o *PlanFetchResponseData) SetSubscribers(v []map[string]interface{})`

SetSubscribers sets Subscribers field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


