# SubscriptionCreateResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Customer** | **int32** |  | 
**Plan** | **int32** |  | 
**Integration** | **int32** |  | 
**Domain** | **string** |  | 
**Start** | **int32** |  | 
**Status** | **string** |  | 
**Quantity** | **int32** |  | 
**Amount** | **int32** |  | 
**Authorization** | **int32** |  | 
**InvoiceLimit** | **int32** |  | 
**SplitCode** | **map[string]interface{}** |  | 
**SubscriptionCode** | **string** |  | 
**EmailToken** | **string** |  | 
**Id** | **int32** |  | 
**CancelledAt** | **map[string]interface{}** |  | 
**CreatedAt** | **string** |  | 
**UpdatedAt** | **string** |  | 
**CronExpression** | **string** |  | 
**NextPaymentDate** | **string** |  | 
**EasyCronId** | **NullableString** |  | 
**OpenInvoice** | **NullableString** |  | 
**Metadata** | **map[string]interface{}** |  | 

## Methods

### NewSubscriptionCreateResponseData

`func NewSubscriptionCreateResponseData(customer int32, plan int32, integration int32, domain string, start int32, status string, quantity int32, amount int32, authorization int32, invoiceLimit int32, splitCode map[string]interface{}, subscriptionCode string, emailToken string, id int32, cancelledAt map[string]interface{}, createdAt string, updatedAt string, cronExpression string, nextPaymentDate string, easyCronId NullableString, openInvoice NullableString, metadata map[string]interface{}, ) *SubscriptionCreateResponseData`

NewSubscriptionCreateResponseData instantiates a new SubscriptionCreateResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubscriptionCreateResponseDataWithDefaults

`func NewSubscriptionCreateResponseDataWithDefaults() *SubscriptionCreateResponseData`

NewSubscriptionCreateResponseDataWithDefaults instantiates a new SubscriptionCreateResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomer

`func (o *SubscriptionCreateResponseData) GetCustomer() int32`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *SubscriptionCreateResponseData) GetCustomerOk() (*int32, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *SubscriptionCreateResponseData) SetCustomer(v int32)`

SetCustomer sets Customer field to given value.


### GetPlan

`func (o *SubscriptionCreateResponseData) GetPlan() int32`

GetPlan returns the Plan field if non-nil, zero value otherwise.

### GetPlanOk

`func (o *SubscriptionCreateResponseData) GetPlanOk() (*int32, bool)`

GetPlanOk returns a tuple with the Plan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlan

`func (o *SubscriptionCreateResponseData) SetPlan(v int32)`

SetPlan sets Plan field to given value.


### GetIntegration

`func (o *SubscriptionCreateResponseData) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *SubscriptionCreateResponseData) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *SubscriptionCreateResponseData) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetDomain

`func (o *SubscriptionCreateResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *SubscriptionCreateResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *SubscriptionCreateResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetStart

`func (o *SubscriptionCreateResponseData) GetStart() int32`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *SubscriptionCreateResponseData) GetStartOk() (*int32, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *SubscriptionCreateResponseData) SetStart(v int32)`

SetStart sets Start field to given value.


### GetStatus

`func (o *SubscriptionCreateResponseData) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *SubscriptionCreateResponseData) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *SubscriptionCreateResponseData) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetQuantity

`func (o *SubscriptionCreateResponseData) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *SubscriptionCreateResponseData) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *SubscriptionCreateResponseData) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.


### GetAmount

`func (o *SubscriptionCreateResponseData) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *SubscriptionCreateResponseData) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *SubscriptionCreateResponseData) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetAuthorization

`func (o *SubscriptionCreateResponseData) GetAuthorization() int32`

GetAuthorization returns the Authorization field if non-nil, zero value otherwise.

### GetAuthorizationOk

`func (o *SubscriptionCreateResponseData) GetAuthorizationOk() (*int32, bool)`

GetAuthorizationOk returns a tuple with the Authorization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorization

`func (o *SubscriptionCreateResponseData) SetAuthorization(v int32)`

SetAuthorization sets Authorization field to given value.


### GetInvoiceLimit

`func (o *SubscriptionCreateResponseData) GetInvoiceLimit() int32`

GetInvoiceLimit returns the InvoiceLimit field if non-nil, zero value otherwise.

### GetInvoiceLimitOk

`func (o *SubscriptionCreateResponseData) GetInvoiceLimitOk() (*int32, bool)`

GetInvoiceLimitOk returns a tuple with the InvoiceLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceLimit

`func (o *SubscriptionCreateResponseData) SetInvoiceLimit(v int32)`

SetInvoiceLimit sets InvoiceLimit field to given value.


### GetSplitCode

`func (o *SubscriptionCreateResponseData) GetSplitCode() map[string]interface{}`

GetSplitCode returns the SplitCode field if non-nil, zero value otherwise.

### GetSplitCodeOk

`func (o *SubscriptionCreateResponseData) GetSplitCodeOk() (*map[string]interface{}, bool)`

GetSplitCodeOk returns a tuple with the SplitCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplitCode

`func (o *SubscriptionCreateResponseData) SetSplitCode(v map[string]interface{})`

SetSplitCode sets SplitCode field to given value.


### SetSplitCodeNil

`func (o *SubscriptionCreateResponseData) SetSplitCodeNil(b bool)`

 SetSplitCodeNil sets the value for SplitCode to be an explicit nil

### UnsetSplitCode
`func (o *SubscriptionCreateResponseData) UnsetSplitCode()`

UnsetSplitCode ensures that no value is present for SplitCode, not even an explicit nil
### GetSubscriptionCode

`func (o *SubscriptionCreateResponseData) GetSubscriptionCode() string`

GetSubscriptionCode returns the SubscriptionCode field if non-nil, zero value otherwise.

### GetSubscriptionCodeOk

`func (o *SubscriptionCreateResponseData) GetSubscriptionCodeOk() (*string, bool)`

GetSubscriptionCodeOk returns a tuple with the SubscriptionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubscriptionCode

`func (o *SubscriptionCreateResponseData) SetSubscriptionCode(v string)`

SetSubscriptionCode sets SubscriptionCode field to given value.


### GetEmailToken

`func (o *SubscriptionCreateResponseData) GetEmailToken() string`

GetEmailToken returns the EmailToken field if non-nil, zero value otherwise.

### GetEmailTokenOk

`func (o *SubscriptionCreateResponseData) GetEmailTokenOk() (*string, bool)`

GetEmailTokenOk returns a tuple with the EmailToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailToken

`func (o *SubscriptionCreateResponseData) SetEmailToken(v string)`

SetEmailToken sets EmailToken field to given value.


### GetId

`func (o *SubscriptionCreateResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SubscriptionCreateResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SubscriptionCreateResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetCancelledAt

`func (o *SubscriptionCreateResponseData) GetCancelledAt() map[string]interface{}`

GetCancelledAt returns the CancelledAt field if non-nil, zero value otherwise.

### GetCancelledAtOk

`func (o *SubscriptionCreateResponseData) GetCancelledAtOk() (*map[string]interface{}, bool)`

GetCancelledAtOk returns a tuple with the CancelledAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelledAt

`func (o *SubscriptionCreateResponseData) SetCancelledAt(v map[string]interface{})`

SetCancelledAt sets CancelledAt field to given value.


### SetCancelledAtNil

`func (o *SubscriptionCreateResponseData) SetCancelledAtNil(b bool)`

 SetCancelledAtNil sets the value for CancelledAt to be an explicit nil

### UnsetCancelledAt
`func (o *SubscriptionCreateResponseData) UnsetCancelledAt()`

UnsetCancelledAt ensures that no value is present for CancelledAt, not even an explicit nil
### GetCreatedAt

`func (o *SubscriptionCreateResponseData) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *SubscriptionCreateResponseData) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *SubscriptionCreateResponseData) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *SubscriptionCreateResponseData) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *SubscriptionCreateResponseData) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *SubscriptionCreateResponseData) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.


### GetCronExpression

`func (o *SubscriptionCreateResponseData) GetCronExpression() string`

GetCronExpression returns the CronExpression field if non-nil, zero value otherwise.

### GetCronExpressionOk

`func (o *SubscriptionCreateResponseData) GetCronExpressionOk() (*string, bool)`

GetCronExpressionOk returns a tuple with the CronExpression field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCronExpression

`func (o *SubscriptionCreateResponseData) SetCronExpression(v string)`

SetCronExpression sets CronExpression field to given value.


### GetNextPaymentDate

`func (o *SubscriptionCreateResponseData) GetNextPaymentDate() string`

GetNextPaymentDate returns the NextPaymentDate field if non-nil, zero value otherwise.

### GetNextPaymentDateOk

`func (o *SubscriptionCreateResponseData) GetNextPaymentDateOk() (*string, bool)`

GetNextPaymentDateOk returns a tuple with the NextPaymentDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextPaymentDate

`func (o *SubscriptionCreateResponseData) SetNextPaymentDate(v string)`

SetNextPaymentDate sets NextPaymentDate field to given value.


### GetEasyCronId

`func (o *SubscriptionCreateResponseData) GetEasyCronId() string`

GetEasyCronId returns the EasyCronId field if non-nil, zero value otherwise.

### GetEasyCronIdOk

`func (o *SubscriptionCreateResponseData) GetEasyCronIdOk() (*string, bool)`

GetEasyCronIdOk returns a tuple with the EasyCronId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEasyCronId

`func (o *SubscriptionCreateResponseData) SetEasyCronId(v string)`

SetEasyCronId sets EasyCronId field to given value.


### SetEasyCronIdNil

`func (o *SubscriptionCreateResponseData) SetEasyCronIdNil(b bool)`

 SetEasyCronIdNil sets the value for EasyCronId to be an explicit nil

### UnsetEasyCronId
`func (o *SubscriptionCreateResponseData) UnsetEasyCronId()`

UnsetEasyCronId ensures that no value is present for EasyCronId, not even an explicit nil
### GetOpenInvoice

`func (o *SubscriptionCreateResponseData) GetOpenInvoice() string`

GetOpenInvoice returns the OpenInvoice field if non-nil, zero value otherwise.

### GetOpenInvoiceOk

`func (o *SubscriptionCreateResponseData) GetOpenInvoiceOk() (*string, bool)`

GetOpenInvoiceOk returns a tuple with the OpenInvoice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOpenInvoice

`func (o *SubscriptionCreateResponseData) SetOpenInvoice(v string)`

SetOpenInvoice sets OpenInvoice field to given value.


### SetOpenInvoiceNil

`func (o *SubscriptionCreateResponseData) SetOpenInvoiceNil(b bool)`

 SetOpenInvoiceNil sets the value for OpenInvoice to be an explicit nil

### UnsetOpenInvoice
`func (o *SubscriptionCreateResponseData) UnsetOpenInvoice()`

UnsetOpenInvoice ensures that no value is present for OpenInvoice, not even an explicit nil
### GetMetadata

`func (o *SubscriptionCreateResponseData) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *SubscriptionCreateResponseData) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *SubscriptionCreateResponseData) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.


### SetMetadataNil

`func (o *SubscriptionCreateResponseData) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *SubscriptionCreateResponseData) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


