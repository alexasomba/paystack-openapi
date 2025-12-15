# SubscriptionListResponseArray

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**Domain** | **string** |  | 
**Status** | **string** |  | 
**Start** | **int32** |  | 
**Quantity** | **int32** |  | 
**SubscriptionCode** | **string** |  | 
**EmailToken** | **string** |  | 
**Amount** | **int32** |  | 
**CronExpression** | **NullableString** |  | 
**NextPaymentDate** | **NullableString** |  | 
**OpenInvoice** | **map[string]interface{}** |  | 
**CreatedAt** | **string** |  | 
**Integration** | **int32** |  | 
**Plan** | [**SubscriptionListResponseArrayPlan**](SubscriptionListResponseArrayPlan.md) |  | 
**Authorization** | [**SubscriptionListResponseArrayAuthorization**](SubscriptionListResponseArrayAuthorization.md) |  | 
**Customer** | [**SubscriptionListResponseArrayCustomer**](SubscriptionListResponseArrayCustomer.md) |  | 
**InvoiceLimit** | **int32** |  | 
**SplitCode** | **map[string]interface{}** |  | 
**PaymentsCount** | **int32** |  | 
**MostRecentInvoice** | **map[string]interface{}** |  | 
**Metadata** | **map[string]interface{}** |  | 

## Methods

### NewSubscriptionListResponseArray

`func NewSubscriptionListResponseArray(id int32, domain string, status string, start int32, quantity int32, subscriptionCode string, emailToken string, amount int32, cronExpression NullableString, nextPaymentDate NullableString, openInvoice map[string]interface{}, createdAt string, integration int32, plan SubscriptionListResponseArrayPlan, authorization SubscriptionListResponseArrayAuthorization, customer SubscriptionListResponseArrayCustomer, invoiceLimit int32, splitCode map[string]interface{}, paymentsCount int32, mostRecentInvoice map[string]interface{}, metadata map[string]interface{}, ) *SubscriptionListResponseArray`

NewSubscriptionListResponseArray instantiates a new SubscriptionListResponseArray object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubscriptionListResponseArrayWithDefaults

`func NewSubscriptionListResponseArrayWithDefaults() *SubscriptionListResponseArray`

NewSubscriptionListResponseArrayWithDefaults instantiates a new SubscriptionListResponseArray object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SubscriptionListResponseArray) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SubscriptionListResponseArray) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SubscriptionListResponseArray) SetId(v int32)`

SetId sets Id field to given value.


### GetDomain

`func (o *SubscriptionListResponseArray) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *SubscriptionListResponseArray) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *SubscriptionListResponseArray) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetStatus

`func (o *SubscriptionListResponseArray) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *SubscriptionListResponseArray) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *SubscriptionListResponseArray) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetStart

`func (o *SubscriptionListResponseArray) GetStart() int32`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *SubscriptionListResponseArray) GetStartOk() (*int32, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *SubscriptionListResponseArray) SetStart(v int32)`

SetStart sets Start field to given value.


### GetQuantity

`func (o *SubscriptionListResponseArray) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *SubscriptionListResponseArray) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *SubscriptionListResponseArray) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.


### GetSubscriptionCode

`func (o *SubscriptionListResponseArray) GetSubscriptionCode() string`

GetSubscriptionCode returns the SubscriptionCode field if non-nil, zero value otherwise.

### GetSubscriptionCodeOk

`func (o *SubscriptionListResponseArray) GetSubscriptionCodeOk() (*string, bool)`

GetSubscriptionCodeOk returns a tuple with the SubscriptionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubscriptionCode

`func (o *SubscriptionListResponseArray) SetSubscriptionCode(v string)`

SetSubscriptionCode sets SubscriptionCode field to given value.


### GetEmailToken

`func (o *SubscriptionListResponseArray) GetEmailToken() string`

GetEmailToken returns the EmailToken field if non-nil, zero value otherwise.

### GetEmailTokenOk

`func (o *SubscriptionListResponseArray) GetEmailTokenOk() (*string, bool)`

GetEmailTokenOk returns a tuple with the EmailToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailToken

`func (o *SubscriptionListResponseArray) SetEmailToken(v string)`

SetEmailToken sets EmailToken field to given value.


### GetAmount

`func (o *SubscriptionListResponseArray) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *SubscriptionListResponseArray) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *SubscriptionListResponseArray) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetCronExpression

`func (o *SubscriptionListResponseArray) GetCronExpression() string`

GetCronExpression returns the CronExpression field if non-nil, zero value otherwise.

### GetCronExpressionOk

`func (o *SubscriptionListResponseArray) GetCronExpressionOk() (*string, bool)`

GetCronExpressionOk returns a tuple with the CronExpression field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCronExpression

`func (o *SubscriptionListResponseArray) SetCronExpression(v string)`

SetCronExpression sets CronExpression field to given value.


### SetCronExpressionNil

`func (o *SubscriptionListResponseArray) SetCronExpressionNil(b bool)`

 SetCronExpressionNil sets the value for CronExpression to be an explicit nil

### UnsetCronExpression
`func (o *SubscriptionListResponseArray) UnsetCronExpression()`

UnsetCronExpression ensures that no value is present for CronExpression, not even an explicit nil
### GetNextPaymentDate

`func (o *SubscriptionListResponseArray) GetNextPaymentDate() string`

GetNextPaymentDate returns the NextPaymentDate field if non-nil, zero value otherwise.

### GetNextPaymentDateOk

`func (o *SubscriptionListResponseArray) GetNextPaymentDateOk() (*string, bool)`

GetNextPaymentDateOk returns a tuple with the NextPaymentDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextPaymentDate

`func (o *SubscriptionListResponseArray) SetNextPaymentDate(v string)`

SetNextPaymentDate sets NextPaymentDate field to given value.


### SetNextPaymentDateNil

`func (o *SubscriptionListResponseArray) SetNextPaymentDateNil(b bool)`

 SetNextPaymentDateNil sets the value for NextPaymentDate to be an explicit nil

### UnsetNextPaymentDate
`func (o *SubscriptionListResponseArray) UnsetNextPaymentDate()`

UnsetNextPaymentDate ensures that no value is present for NextPaymentDate, not even an explicit nil
### GetOpenInvoice

`func (o *SubscriptionListResponseArray) GetOpenInvoice() map[string]interface{}`

GetOpenInvoice returns the OpenInvoice field if non-nil, zero value otherwise.

### GetOpenInvoiceOk

`func (o *SubscriptionListResponseArray) GetOpenInvoiceOk() (*map[string]interface{}, bool)`

GetOpenInvoiceOk returns a tuple with the OpenInvoice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOpenInvoice

`func (o *SubscriptionListResponseArray) SetOpenInvoice(v map[string]interface{})`

SetOpenInvoice sets OpenInvoice field to given value.


### SetOpenInvoiceNil

`func (o *SubscriptionListResponseArray) SetOpenInvoiceNil(b bool)`

 SetOpenInvoiceNil sets the value for OpenInvoice to be an explicit nil

### UnsetOpenInvoice
`func (o *SubscriptionListResponseArray) UnsetOpenInvoice()`

UnsetOpenInvoice ensures that no value is present for OpenInvoice, not even an explicit nil
### GetCreatedAt

`func (o *SubscriptionListResponseArray) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *SubscriptionListResponseArray) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *SubscriptionListResponseArray) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetIntegration

`func (o *SubscriptionListResponseArray) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *SubscriptionListResponseArray) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *SubscriptionListResponseArray) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetPlan

`func (o *SubscriptionListResponseArray) GetPlan() SubscriptionListResponseArrayPlan`

GetPlan returns the Plan field if non-nil, zero value otherwise.

### GetPlanOk

`func (o *SubscriptionListResponseArray) GetPlanOk() (*SubscriptionListResponseArrayPlan, bool)`

GetPlanOk returns a tuple with the Plan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlan

`func (o *SubscriptionListResponseArray) SetPlan(v SubscriptionListResponseArrayPlan)`

SetPlan sets Plan field to given value.


### GetAuthorization

`func (o *SubscriptionListResponseArray) GetAuthorization() SubscriptionListResponseArrayAuthorization`

GetAuthorization returns the Authorization field if non-nil, zero value otherwise.

### GetAuthorizationOk

`func (o *SubscriptionListResponseArray) GetAuthorizationOk() (*SubscriptionListResponseArrayAuthorization, bool)`

GetAuthorizationOk returns a tuple with the Authorization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorization

`func (o *SubscriptionListResponseArray) SetAuthorization(v SubscriptionListResponseArrayAuthorization)`

SetAuthorization sets Authorization field to given value.


### GetCustomer

`func (o *SubscriptionListResponseArray) GetCustomer() SubscriptionListResponseArrayCustomer`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *SubscriptionListResponseArray) GetCustomerOk() (*SubscriptionListResponseArrayCustomer, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *SubscriptionListResponseArray) SetCustomer(v SubscriptionListResponseArrayCustomer)`

SetCustomer sets Customer field to given value.


### GetInvoiceLimit

`func (o *SubscriptionListResponseArray) GetInvoiceLimit() int32`

GetInvoiceLimit returns the InvoiceLimit field if non-nil, zero value otherwise.

### GetInvoiceLimitOk

`func (o *SubscriptionListResponseArray) GetInvoiceLimitOk() (*int32, bool)`

GetInvoiceLimitOk returns a tuple with the InvoiceLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceLimit

`func (o *SubscriptionListResponseArray) SetInvoiceLimit(v int32)`

SetInvoiceLimit sets InvoiceLimit field to given value.


### GetSplitCode

`func (o *SubscriptionListResponseArray) GetSplitCode() map[string]interface{}`

GetSplitCode returns the SplitCode field if non-nil, zero value otherwise.

### GetSplitCodeOk

`func (o *SubscriptionListResponseArray) GetSplitCodeOk() (*map[string]interface{}, bool)`

GetSplitCodeOk returns a tuple with the SplitCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplitCode

`func (o *SubscriptionListResponseArray) SetSplitCode(v map[string]interface{})`

SetSplitCode sets SplitCode field to given value.


### SetSplitCodeNil

`func (o *SubscriptionListResponseArray) SetSplitCodeNil(b bool)`

 SetSplitCodeNil sets the value for SplitCode to be an explicit nil

### UnsetSplitCode
`func (o *SubscriptionListResponseArray) UnsetSplitCode()`

UnsetSplitCode ensures that no value is present for SplitCode, not even an explicit nil
### GetPaymentsCount

`func (o *SubscriptionListResponseArray) GetPaymentsCount() int32`

GetPaymentsCount returns the PaymentsCount field if non-nil, zero value otherwise.

### GetPaymentsCountOk

`func (o *SubscriptionListResponseArray) GetPaymentsCountOk() (*int32, bool)`

GetPaymentsCountOk returns a tuple with the PaymentsCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentsCount

`func (o *SubscriptionListResponseArray) SetPaymentsCount(v int32)`

SetPaymentsCount sets PaymentsCount field to given value.


### GetMostRecentInvoice

`func (o *SubscriptionListResponseArray) GetMostRecentInvoice() map[string]interface{}`

GetMostRecentInvoice returns the MostRecentInvoice field if non-nil, zero value otherwise.

### GetMostRecentInvoiceOk

`func (o *SubscriptionListResponseArray) GetMostRecentInvoiceOk() (*map[string]interface{}, bool)`

GetMostRecentInvoiceOk returns a tuple with the MostRecentInvoice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMostRecentInvoice

`func (o *SubscriptionListResponseArray) SetMostRecentInvoice(v map[string]interface{})`

SetMostRecentInvoice sets MostRecentInvoice field to given value.


### SetMostRecentInvoiceNil

`func (o *SubscriptionListResponseArray) SetMostRecentInvoiceNil(b bool)`

 SetMostRecentInvoiceNil sets the value for MostRecentInvoice to be an explicit nil

### UnsetMostRecentInvoice
`func (o *SubscriptionListResponseArray) UnsetMostRecentInvoice()`

UnsetMostRecentInvoice ensures that no value is present for MostRecentInvoice, not even an explicit nil
### GetMetadata

`func (o *SubscriptionListResponseArray) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *SubscriptionListResponseArray) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *SubscriptionListResponseArray) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.


### SetMetadataNil

`func (o *SubscriptionListResponseArray) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *SubscriptionListResponseArray) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


