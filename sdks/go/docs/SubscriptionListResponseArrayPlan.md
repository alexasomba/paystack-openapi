# SubscriptionListResponseArrayPlan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**Domain** | **string** |  | 
**Name** | **string** |  | 
**PlanCode** | **string** |  | 
**Description** | **map[string]interface{}** |  | 
**Amount** | **int32** |  | 
**Interval** | **string** |  | 
**SendInvoices** | **bool** |  | 
**SendSms** | **bool** |  | 
**Currency** | **string** |  | 
**Integration** | **int32** |  | 
**CreatedAt** | **string** |  | 
**UpdatedAt** | **string** |  | 

## Methods

### NewSubscriptionListResponseArrayPlan

`func NewSubscriptionListResponseArrayPlan(id int32, domain string, name string, planCode string, description map[string]interface{}, amount int32, interval string, sendInvoices bool, sendSms bool, currency string, integration int32, createdAt string, updatedAt string, ) *SubscriptionListResponseArrayPlan`

NewSubscriptionListResponseArrayPlan instantiates a new SubscriptionListResponseArrayPlan object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubscriptionListResponseArrayPlanWithDefaults

`func NewSubscriptionListResponseArrayPlanWithDefaults() *SubscriptionListResponseArrayPlan`

NewSubscriptionListResponseArrayPlanWithDefaults instantiates a new SubscriptionListResponseArrayPlan object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SubscriptionListResponseArrayPlan) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SubscriptionListResponseArrayPlan) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SubscriptionListResponseArrayPlan) SetId(v int32)`

SetId sets Id field to given value.


### GetDomain

`func (o *SubscriptionListResponseArrayPlan) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *SubscriptionListResponseArrayPlan) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *SubscriptionListResponseArrayPlan) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetName

`func (o *SubscriptionListResponseArrayPlan) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SubscriptionListResponseArrayPlan) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SubscriptionListResponseArrayPlan) SetName(v string)`

SetName sets Name field to given value.


### GetPlanCode

`func (o *SubscriptionListResponseArrayPlan) GetPlanCode() string`

GetPlanCode returns the PlanCode field if non-nil, zero value otherwise.

### GetPlanCodeOk

`func (o *SubscriptionListResponseArrayPlan) GetPlanCodeOk() (*string, bool)`

GetPlanCodeOk returns a tuple with the PlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlanCode

`func (o *SubscriptionListResponseArrayPlan) SetPlanCode(v string)`

SetPlanCode sets PlanCode field to given value.


### GetDescription

`func (o *SubscriptionListResponseArrayPlan) GetDescription() map[string]interface{}`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *SubscriptionListResponseArrayPlan) GetDescriptionOk() (*map[string]interface{}, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *SubscriptionListResponseArrayPlan) SetDescription(v map[string]interface{})`

SetDescription sets Description field to given value.


### SetDescriptionNil

`func (o *SubscriptionListResponseArrayPlan) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *SubscriptionListResponseArrayPlan) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetAmount

`func (o *SubscriptionListResponseArrayPlan) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *SubscriptionListResponseArrayPlan) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *SubscriptionListResponseArrayPlan) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetInterval

`func (o *SubscriptionListResponseArrayPlan) GetInterval() string`

GetInterval returns the Interval field if non-nil, zero value otherwise.

### GetIntervalOk

`func (o *SubscriptionListResponseArrayPlan) GetIntervalOk() (*string, bool)`

GetIntervalOk returns a tuple with the Interval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterval

`func (o *SubscriptionListResponseArrayPlan) SetInterval(v string)`

SetInterval sets Interval field to given value.


### GetSendInvoices

`func (o *SubscriptionListResponseArrayPlan) GetSendInvoices() bool`

GetSendInvoices returns the SendInvoices field if non-nil, zero value otherwise.

### GetSendInvoicesOk

`func (o *SubscriptionListResponseArrayPlan) GetSendInvoicesOk() (*bool, bool)`

GetSendInvoicesOk returns a tuple with the SendInvoices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSendInvoices

`func (o *SubscriptionListResponseArrayPlan) SetSendInvoices(v bool)`

SetSendInvoices sets SendInvoices field to given value.


### GetSendSms

`func (o *SubscriptionListResponseArrayPlan) GetSendSms() bool`

GetSendSms returns the SendSms field if non-nil, zero value otherwise.

### GetSendSmsOk

`func (o *SubscriptionListResponseArrayPlan) GetSendSmsOk() (*bool, bool)`

GetSendSmsOk returns a tuple with the SendSms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSendSms

`func (o *SubscriptionListResponseArrayPlan) SetSendSms(v bool)`

SetSendSms sets SendSms field to given value.


### GetCurrency

`func (o *SubscriptionListResponseArrayPlan) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *SubscriptionListResponseArrayPlan) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *SubscriptionListResponseArrayPlan) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetIntegration

`func (o *SubscriptionListResponseArrayPlan) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *SubscriptionListResponseArrayPlan) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *SubscriptionListResponseArrayPlan) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetCreatedAt

`func (o *SubscriptionListResponseArrayPlan) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *SubscriptionListResponseArrayPlan) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *SubscriptionListResponseArrayPlan) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *SubscriptionListResponseArrayPlan) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *SubscriptionListResponseArrayPlan) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *SubscriptionListResponseArrayPlan) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


