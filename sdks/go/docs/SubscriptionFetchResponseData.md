# SubscriptionFetchResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**Domain** | **string** |  | 
**Status** | **string** |  | 
**SubscriptionCode** | **string** |  | 
**EmailToken** | **string** |  | 
**Amount** | **int32** |  | 
**CronExpression** | **string** |  | 
**NextPaymentDate** | **string** |  | 
**OpenInvoice** | **interface{}** |  | 
**CreatedAt** | **string** |  | 
**CancelledAt** | **interface{}** |  | 
**Integration** | **int32** |  | 
**Plan** | [**SubscriptionFetchResponseDataPlan**](SubscriptionFetchResponseDataPlan.md) |  | 
**Authorization** | [**TransactionPartialDebitResponseDataAuthorization**](TransactionPartialDebitResponseDataAuthorization.md) |  | 
**Customer** | [**TransactionFetchResponseDataCustomer**](TransactionFetchResponseDataCustomer.md) |  | 
**Invoices** | **[]interface{}** |  | 
**InvoicesHistory** | **[]interface{}** |  | 
**InvoiceLimit** | **int32** |  | 
**SplitCode** | **interface{}** |  | 
**MostRecentInvoice** | **interface{}** |  | 
**PaymentsCount** | **int32** |  | 
**Metadata** | **map[string]interface{}** |  | 

## Methods

### NewSubscriptionFetchResponseData

`func NewSubscriptionFetchResponseData(id int32, domain string, status string, subscriptionCode string, emailToken string, amount int32, cronExpression string, nextPaymentDate string, openInvoice interface{}, createdAt string, cancelledAt interface{}, integration int32, plan SubscriptionFetchResponseDataPlan, authorization TransactionPartialDebitResponseDataAuthorization, customer TransactionFetchResponseDataCustomer, invoices []interface{}, invoicesHistory []interface{}, invoiceLimit int32, splitCode interface{}, mostRecentInvoice interface{}, paymentsCount int32, metadata map[string]interface{}, ) *SubscriptionFetchResponseData`

NewSubscriptionFetchResponseData instantiates a new SubscriptionFetchResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubscriptionFetchResponseDataWithDefaults

`func NewSubscriptionFetchResponseDataWithDefaults() *SubscriptionFetchResponseData`

NewSubscriptionFetchResponseDataWithDefaults instantiates a new SubscriptionFetchResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SubscriptionFetchResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SubscriptionFetchResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SubscriptionFetchResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetDomain

`func (o *SubscriptionFetchResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *SubscriptionFetchResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *SubscriptionFetchResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetStatus

`func (o *SubscriptionFetchResponseData) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *SubscriptionFetchResponseData) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *SubscriptionFetchResponseData) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetSubscriptionCode

`func (o *SubscriptionFetchResponseData) GetSubscriptionCode() string`

GetSubscriptionCode returns the SubscriptionCode field if non-nil, zero value otherwise.

### GetSubscriptionCodeOk

`func (o *SubscriptionFetchResponseData) GetSubscriptionCodeOk() (*string, bool)`

GetSubscriptionCodeOk returns a tuple with the SubscriptionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubscriptionCode

`func (o *SubscriptionFetchResponseData) SetSubscriptionCode(v string)`

SetSubscriptionCode sets SubscriptionCode field to given value.


### GetEmailToken

`func (o *SubscriptionFetchResponseData) GetEmailToken() string`

GetEmailToken returns the EmailToken field if non-nil, zero value otherwise.

### GetEmailTokenOk

`func (o *SubscriptionFetchResponseData) GetEmailTokenOk() (*string, bool)`

GetEmailTokenOk returns a tuple with the EmailToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailToken

`func (o *SubscriptionFetchResponseData) SetEmailToken(v string)`

SetEmailToken sets EmailToken field to given value.


### GetAmount

`func (o *SubscriptionFetchResponseData) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *SubscriptionFetchResponseData) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *SubscriptionFetchResponseData) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetCronExpression

`func (o *SubscriptionFetchResponseData) GetCronExpression() string`

GetCronExpression returns the CronExpression field if non-nil, zero value otherwise.

### GetCronExpressionOk

`func (o *SubscriptionFetchResponseData) GetCronExpressionOk() (*string, bool)`

GetCronExpressionOk returns a tuple with the CronExpression field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCronExpression

`func (o *SubscriptionFetchResponseData) SetCronExpression(v string)`

SetCronExpression sets CronExpression field to given value.


### GetNextPaymentDate

`func (o *SubscriptionFetchResponseData) GetNextPaymentDate() string`

GetNextPaymentDate returns the NextPaymentDate field if non-nil, zero value otherwise.

### GetNextPaymentDateOk

`func (o *SubscriptionFetchResponseData) GetNextPaymentDateOk() (*string, bool)`

GetNextPaymentDateOk returns a tuple with the NextPaymentDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextPaymentDate

`func (o *SubscriptionFetchResponseData) SetNextPaymentDate(v string)`

SetNextPaymentDate sets NextPaymentDate field to given value.


### GetOpenInvoice

`func (o *SubscriptionFetchResponseData) GetOpenInvoice() interface{}`

GetOpenInvoice returns the OpenInvoice field if non-nil, zero value otherwise.

### GetOpenInvoiceOk

`func (o *SubscriptionFetchResponseData) GetOpenInvoiceOk() (*interface{}, bool)`

GetOpenInvoiceOk returns a tuple with the OpenInvoice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOpenInvoice

`func (o *SubscriptionFetchResponseData) SetOpenInvoice(v interface{})`

SetOpenInvoice sets OpenInvoice field to given value.


### SetOpenInvoiceNil

`func (o *SubscriptionFetchResponseData) SetOpenInvoiceNil(b bool)`

 SetOpenInvoiceNil sets the value for OpenInvoice to be an explicit nil

### UnsetOpenInvoice
`func (o *SubscriptionFetchResponseData) UnsetOpenInvoice()`

UnsetOpenInvoice ensures that no value is present for OpenInvoice, not even an explicit nil
### GetCreatedAt

`func (o *SubscriptionFetchResponseData) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *SubscriptionFetchResponseData) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *SubscriptionFetchResponseData) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetCancelledAt

`func (o *SubscriptionFetchResponseData) GetCancelledAt() interface{}`

GetCancelledAt returns the CancelledAt field if non-nil, zero value otherwise.

### GetCancelledAtOk

`func (o *SubscriptionFetchResponseData) GetCancelledAtOk() (*interface{}, bool)`

GetCancelledAtOk returns a tuple with the CancelledAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelledAt

`func (o *SubscriptionFetchResponseData) SetCancelledAt(v interface{})`

SetCancelledAt sets CancelledAt field to given value.


### SetCancelledAtNil

`func (o *SubscriptionFetchResponseData) SetCancelledAtNil(b bool)`

 SetCancelledAtNil sets the value for CancelledAt to be an explicit nil

### UnsetCancelledAt
`func (o *SubscriptionFetchResponseData) UnsetCancelledAt()`

UnsetCancelledAt ensures that no value is present for CancelledAt, not even an explicit nil
### GetIntegration

`func (o *SubscriptionFetchResponseData) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *SubscriptionFetchResponseData) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *SubscriptionFetchResponseData) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetPlan

`func (o *SubscriptionFetchResponseData) GetPlan() SubscriptionFetchResponseDataPlan`

GetPlan returns the Plan field if non-nil, zero value otherwise.

### GetPlanOk

`func (o *SubscriptionFetchResponseData) GetPlanOk() (*SubscriptionFetchResponseDataPlan, bool)`

GetPlanOk returns a tuple with the Plan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlan

`func (o *SubscriptionFetchResponseData) SetPlan(v SubscriptionFetchResponseDataPlan)`

SetPlan sets Plan field to given value.


### GetAuthorization

`func (o *SubscriptionFetchResponseData) GetAuthorization() TransactionPartialDebitResponseDataAuthorization`

GetAuthorization returns the Authorization field if non-nil, zero value otherwise.

### GetAuthorizationOk

`func (o *SubscriptionFetchResponseData) GetAuthorizationOk() (*TransactionPartialDebitResponseDataAuthorization, bool)`

GetAuthorizationOk returns a tuple with the Authorization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorization

`func (o *SubscriptionFetchResponseData) SetAuthorization(v TransactionPartialDebitResponseDataAuthorization)`

SetAuthorization sets Authorization field to given value.


### GetCustomer

`func (o *SubscriptionFetchResponseData) GetCustomer() TransactionFetchResponseDataCustomer`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *SubscriptionFetchResponseData) GetCustomerOk() (*TransactionFetchResponseDataCustomer, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *SubscriptionFetchResponseData) SetCustomer(v TransactionFetchResponseDataCustomer)`

SetCustomer sets Customer field to given value.


### GetInvoices

`func (o *SubscriptionFetchResponseData) GetInvoices() []interface{}`

GetInvoices returns the Invoices field if non-nil, zero value otherwise.

### GetInvoicesOk

`func (o *SubscriptionFetchResponseData) GetInvoicesOk() (*[]interface{}, bool)`

GetInvoicesOk returns a tuple with the Invoices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoices

`func (o *SubscriptionFetchResponseData) SetInvoices(v []interface{})`

SetInvoices sets Invoices field to given value.


### GetInvoicesHistory

`func (o *SubscriptionFetchResponseData) GetInvoicesHistory() []interface{}`

GetInvoicesHistory returns the InvoicesHistory field if non-nil, zero value otherwise.

### GetInvoicesHistoryOk

`func (o *SubscriptionFetchResponseData) GetInvoicesHistoryOk() (*[]interface{}, bool)`

GetInvoicesHistoryOk returns a tuple with the InvoicesHistory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoicesHistory

`func (o *SubscriptionFetchResponseData) SetInvoicesHistory(v []interface{})`

SetInvoicesHistory sets InvoicesHistory field to given value.


### GetInvoiceLimit

`func (o *SubscriptionFetchResponseData) GetInvoiceLimit() int32`

GetInvoiceLimit returns the InvoiceLimit field if non-nil, zero value otherwise.

### GetInvoiceLimitOk

`func (o *SubscriptionFetchResponseData) GetInvoiceLimitOk() (*int32, bool)`

GetInvoiceLimitOk returns a tuple with the InvoiceLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceLimit

`func (o *SubscriptionFetchResponseData) SetInvoiceLimit(v int32)`

SetInvoiceLimit sets InvoiceLimit field to given value.


### GetSplitCode

`func (o *SubscriptionFetchResponseData) GetSplitCode() interface{}`

GetSplitCode returns the SplitCode field if non-nil, zero value otherwise.

### GetSplitCodeOk

`func (o *SubscriptionFetchResponseData) GetSplitCodeOk() (*interface{}, bool)`

GetSplitCodeOk returns a tuple with the SplitCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplitCode

`func (o *SubscriptionFetchResponseData) SetSplitCode(v interface{})`

SetSplitCode sets SplitCode field to given value.


### SetSplitCodeNil

`func (o *SubscriptionFetchResponseData) SetSplitCodeNil(b bool)`

 SetSplitCodeNil sets the value for SplitCode to be an explicit nil

### UnsetSplitCode
`func (o *SubscriptionFetchResponseData) UnsetSplitCode()`

UnsetSplitCode ensures that no value is present for SplitCode, not even an explicit nil
### GetMostRecentInvoice

`func (o *SubscriptionFetchResponseData) GetMostRecentInvoice() interface{}`

GetMostRecentInvoice returns the MostRecentInvoice field if non-nil, zero value otherwise.

### GetMostRecentInvoiceOk

`func (o *SubscriptionFetchResponseData) GetMostRecentInvoiceOk() (*interface{}, bool)`

GetMostRecentInvoiceOk returns a tuple with the MostRecentInvoice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMostRecentInvoice

`func (o *SubscriptionFetchResponseData) SetMostRecentInvoice(v interface{})`

SetMostRecentInvoice sets MostRecentInvoice field to given value.


### SetMostRecentInvoiceNil

`func (o *SubscriptionFetchResponseData) SetMostRecentInvoiceNil(b bool)`

 SetMostRecentInvoiceNil sets the value for MostRecentInvoice to be an explicit nil

### UnsetMostRecentInvoice
`func (o *SubscriptionFetchResponseData) UnsetMostRecentInvoice()`

UnsetMostRecentInvoice ensures that no value is present for MostRecentInvoice, not even an explicit nil
### GetPaymentsCount

`func (o *SubscriptionFetchResponseData) GetPaymentsCount() int32`

GetPaymentsCount returns the PaymentsCount field if non-nil, zero value otherwise.

### GetPaymentsCountOk

`func (o *SubscriptionFetchResponseData) GetPaymentsCountOk() (*int32, bool)`

GetPaymentsCountOk returns a tuple with the PaymentsCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentsCount

`func (o *SubscriptionFetchResponseData) SetPaymentsCount(v int32)`

SetPaymentsCount sets PaymentsCount field to given value.


### GetMetadata

`func (o *SubscriptionFetchResponseData) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *SubscriptionFetchResponseData) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *SubscriptionFetchResponseData) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.


### SetMetadataNil

`func (o *SubscriptionFetchResponseData) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *SubscriptionFetchResponseData) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


