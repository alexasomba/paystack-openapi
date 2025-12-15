# BulkChargeFetchBulkBatchChargesResponseArray

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Integration** | **int32** |  | 
**Bulkcharge** | **int32** |  | 
**Customer** | [**BulkChargeFetchBulkBatchChargesResponseArrayCustomer**](BulkChargeFetchBulkBatchChargesResponseArrayCustomer.md) |  | 
**Authorization** | [**TransactionPartialDebitResponseDataAuthorization**](TransactionPartialDebitResponseDataAuthorization.md) |  | 
**Domain** | **string** |  | 
**Amount** | **int32** |  | 
**AtLeast** | **int32** |  | 
**Currency** | **string** |  | 
**Reference** | **string** |  | 
**Metadata** | [**TransactionFetchResponseDataMetadata**](TransactionFetchResponseDataMetadata.md) |  | 
**Status** | **string** |  | 
**Message** | **string** |  | 
**AttemptPartialDebit** | **bool** |  | 
**Id** | **int32** |  | 
**CreatedAt** | **string** |  | 
**UpdatedAt** | **string** |  | 

## Methods

### NewBulkChargeFetchBulkBatchChargesResponseArray

`func NewBulkChargeFetchBulkBatchChargesResponseArray(integration int32, bulkcharge int32, customer BulkChargeFetchBulkBatchChargesResponseArrayCustomer, authorization TransactionPartialDebitResponseDataAuthorization, domain string, amount int32, atLeast int32, currency string, reference string, metadata TransactionFetchResponseDataMetadata, status string, message string, attemptPartialDebit bool, id int32, createdAt string, updatedAt string, ) *BulkChargeFetchBulkBatchChargesResponseArray`

NewBulkChargeFetchBulkBatchChargesResponseArray instantiates a new BulkChargeFetchBulkBatchChargesResponseArray object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkChargeFetchBulkBatchChargesResponseArrayWithDefaults

`func NewBulkChargeFetchBulkBatchChargesResponseArrayWithDefaults() *BulkChargeFetchBulkBatchChargesResponseArray`

NewBulkChargeFetchBulkBatchChargesResponseArrayWithDefaults instantiates a new BulkChargeFetchBulkBatchChargesResponseArray object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIntegration

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetBulkcharge

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) GetBulkcharge() int32`

GetBulkcharge returns the Bulkcharge field if non-nil, zero value otherwise.

### GetBulkchargeOk

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) GetBulkchargeOk() (*int32, bool)`

GetBulkchargeOk returns a tuple with the Bulkcharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBulkcharge

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) SetBulkcharge(v int32)`

SetBulkcharge sets Bulkcharge field to given value.


### GetCustomer

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) GetCustomer() BulkChargeFetchBulkBatchChargesResponseArrayCustomer`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) GetCustomerOk() (*BulkChargeFetchBulkBatchChargesResponseArrayCustomer, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) SetCustomer(v BulkChargeFetchBulkBatchChargesResponseArrayCustomer)`

SetCustomer sets Customer field to given value.


### GetAuthorization

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) GetAuthorization() TransactionPartialDebitResponseDataAuthorization`

GetAuthorization returns the Authorization field if non-nil, zero value otherwise.

### GetAuthorizationOk

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) GetAuthorizationOk() (*TransactionPartialDebitResponseDataAuthorization, bool)`

GetAuthorizationOk returns a tuple with the Authorization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorization

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) SetAuthorization(v TransactionPartialDebitResponseDataAuthorization)`

SetAuthorization sets Authorization field to given value.


### GetDomain

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetAmount

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetAtLeast

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) GetAtLeast() int32`

GetAtLeast returns the AtLeast field if non-nil, zero value otherwise.

### GetAtLeastOk

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) GetAtLeastOk() (*int32, bool)`

GetAtLeastOk returns a tuple with the AtLeast field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAtLeast

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) SetAtLeast(v int32)`

SetAtLeast sets AtLeast field to given value.


### GetCurrency

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetReference

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) SetReference(v string)`

SetReference sets Reference field to given value.


### GetMetadata

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) GetMetadata() TransactionFetchResponseDataMetadata`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) GetMetadataOk() (*TransactionFetchResponseDataMetadata, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) SetMetadata(v TransactionFetchResponseDataMetadata)`

SetMetadata sets Metadata field to given value.


### GetStatus

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetAttemptPartialDebit

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) GetAttemptPartialDebit() bool`

GetAttemptPartialDebit returns the AttemptPartialDebit field if non-nil, zero value otherwise.

### GetAttemptPartialDebitOk

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) GetAttemptPartialDebitOk() (*bool, bool)`

GetAttemptPartialDebitOk returns a tuple with the AttemptPartialDebit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttemptPartialDebit

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) SetAttemptPartialDebit(v bool)`

SetAttemptPartialDebit sets AttemptPartialDebit field to given value.


### GetId

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) SetId(v int32)`

SetId sets Id field to given value.


### GetCreatedAt

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *BulkChargeFetchBulkBatchChargesResponseArray) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


