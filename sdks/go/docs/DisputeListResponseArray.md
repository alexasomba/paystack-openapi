# DisputeListResponseArray

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**RefundAmount** | **int32** |  | 
**Currency** | **string** |  | 
**Status** | **string** |  | 
**Resolution** | **map[string]interface{}** |  | 
**Domain** | **string** |  | 
**Transaction** | [**DisputeListResponseArrayTransaction**](DisputeListResponseArrayTransaction.md) |  | 
**TransactionReference** | **map[string]interface{}** |  | 
**Category** | **string** |  | 
**Customer** | [**SubscriptionListResponseArrayCustomer**](SubscriptionListResponseArrayCustomer.md) |  | 
**Bin** | **string** |  | 
**Last4** | **string** |  | 
**DueAt** | **map[string]interface{}** |  | 
**ResolvedAt** | **map[string]interface{}** |  | 
**Evidence** | **map[string]interface{}** |  | 
**Attachments** | **map[string]interface{}** |  | 
**Note** | **map[string]interface{}** |  | 
**History** | [**[]DisputeHistoryArray**](DisputeHistoryArray.md) |  | 
**Messages** | [**[]DisputeMessagesArray**](DisputeMessagesArray.md) |  | 
**CreatedAt** | **string** |  | 
**UpdatedAt** | **string** |  | 

## Methods

### NewDisputeListResponseArray

`func NewDisputeListResponseArray(id int32, refundAmount int32, currency string, status string, resolution map[string]interface{}, domain string, transaction DisputeListResponseArrayTransaction, transactionReference map[string]interface{}, category string, customer SubscriptionListResponseArrayCustomer, bin string, last4 string, dueAt map[string]interface{}, resolvedAt map[string]interface{}, evidence map[string]interface{}, attachments map[string]interface{}, note map[string]interface{}, history []DisputeHistoryArray, messages []DisputeMessagesArray, createdAt string, updatedAt string, ) *DisputeListResponseArray`

NewDisputeListResponseArray instantiates a new DisputeListResponseArray object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDisputeListResponseArrayWithDefaults

`func NewDisputeListResponseArrayWithDefaults() *DisputeListResponseArray`

NewDisputeListResponseArrayWithDefaults instantiates a new DisputeListResponseArray object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *DisputeListResponseArray) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *DisputeListResponseArray) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *DisputeListResponseArray) SetId(v int32)`

SetId sets Id field to given value.


### GetRefundAmount

`func (o *DisputeListResponseArray) GetRefundAmount() int32`

GetRefundAmount returns the RefundAmount field if non-nil, zero value otherwise.

### GetRefundAmountOk

`func (o *DisputeListResponseArray) GetRefundAmountOk() (*int32, bool)`

GetRefundAmountOk returns a tuple with the RefundAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundAmount

`func (o *DisputeListResponseArray) SetRefundAmount(v int32)`

SetRefundAmount sets RefundAmount field to given value.


### GetCurrency

`func (o *DisputeListResponseArray) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *DisputeListResponseArray) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *DisputeListResponseArray) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetStatus

`func (o *DisputeListResponseArray) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *DisputeListResponseArray) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *DisputeListResponseArray) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetResolution

`func (o *DisputeListResponseArray) GetResolution() map[string]interface{}`

GetResolution returns the Resolution field if non-nil, zero value otherwise.

### GetResolutionOk

`func (o *DisputeListResponseArray) GetResolutionOk() (*map[string]interface{}, bool)`

GetResolutionOk returns a tuple with the Resolution field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResolution

`func (o *DisputeListResponseArray) SetResolution(v map[string]interface{})`

SetResolution sets Resolution field to given value.


### SetResolutionNil

`func (o *DisputeListResponseArray) SetResolutionNil(b bool)`

 SetResolutionNil sets the value for Resolution to be an explicit nil

### UnsetResolution
`func (o *DisputeListResponseArray) UnsetResolution()`

UnsetResolution ensures that no value is present for Resolution, not even an explicit nil
### GetDomain

`func (o *DisputeListResponseArray) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *DisputeListResponseArray) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *DisputeListResponseArray) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetTransaction

`func (o *DisputeListResponseArray) GetTransaction() DisputeListResponseArrayTransaction`

GetTransaction returns the Transaction field if non-nil, zero value otherwise.

### GetTransactionOk

`func (o *DisputeListResponseArray) GetTransactionOk() (*DisputeListResponseArrayTransaction, bool)`

GetTransactionOk returns a tuple with the Transaction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransaction

`func (o *DisputeListResponseArray) SetTransaction(v DisputeListResponseArrayTransaction)`

SetTransaction sets Transaction field to given value.


### GetTransactionReference

`func (o *DisputeListResponseArray) GetTransactionReference() map[string]interface{}`

GetTransactionReference returns the TransactionReference field if non-nil, zero value otherwise.

### GetTransactionReferenceOk

`func (o *DisputeListResponseArray) GetTransactionReferenceOk() (*map[string]interface{}, bool)`

GetTransactionReferenceOk returns a tuple with the TransactionReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionReference

`func (o *DisputeListResponseArray) SetTransactionReference(v map[string]interface{})`

SetTransactionReference sets TransactionReference field to given value.


### SetTransactionReferenceNil

`func (o *DisputeListResponseArray) SetTransactionReferenceNil(b bool)`

 SetTransactionReferenceNil sets the value for TransactionReference to be an explicit nil

### UnsetTransactionReference
`func (o *DisputeListResponseArray) UnsetTransactionReference()`

UnsetTransactionReference ensures that no value is present for TransactionReference, not even an explicit nil
### GetCategory

`func (o *DisputeListResponseArray) GetCategory() string`

GetCategory returns the Category field if non-nil, zero value otherwise.

### GetCategoryOk

`func (o *DisputeListResponseArray) GetCategoryOk() (*string, bool)`

GetCategoryOk returns a tuple with the Category field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategory

`func (o *DisputeListResponseArray) SetCategory(v string)`

SetCategory sets Category field to given value.


### GetCustomer

`func (o *DisputeListResponseArray) GetCustomer() SubscriptionListResponseArrayCustomer`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *DisputeListResponseArray) GetCustomerOk() (*SubscriptionListResponseArrayCustomer, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *DisputeListResponseArray) SetCustomer(v SubscriptionListResponseArrayCustomer)`

SetCustomer sets Customer field to given value.


### GetBin

`func (o *DisputeListResponseArray) GetBin() string`

GetBin returns the Bin field if non-nil, zero value otherwise.

### GetBinOk

`func (o *DisputeListResponseArray) GetBinOk() (*string, bool)`

GetBinOk returns a tuple with the Bin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBin

`func (o *DisputeListResponseArray) SetBin(v string)`

SetBin sets Bin field to given value.


### GetLast4

`func (o *DisputeListResponseArray) GetLast4() string`

GetLast4 returns the Last4 field if non-nil, zero value otherwise.

### GetLast4Ok

`func (o *DisputeListResponseArray) GetLast4Ok() (*string, bool)`

GetLast4Ok returns a tuple with the Last4 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLast4

`func (o *DisputeListResponseArray) SetLast4(v string)`

SetLast4 sets Last4 field to given value.


### GetDueAt

`func (o *DisputeListResponseArray) GetDueAt() map[string]interface{}`

GetDueAt returns the DueAt field if non-nil, zero value otherwise.

### GetDueAtOk

`func (o *DisputeListResponseArray) GetDueAtOk() (*map[string]interface{}, bool)`

GetDueAtOk returns a tuple with the DueAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDueAt

`func (o *DisputeListResponseArray) SetDueAt(v map[string]interface{})`

SetDueAt sets DueAt field to given value.


### SetDueAtNil

`func (o *DisputeListResponseArray) SetDueAtNil(b bool)`

 SetDueAtNil sets the value for DueAt to be an explicit nil

### UnsetDueAt
`func (o *DisputeListResponseArray) UnsetDueAt()`

UnsetDueAt ensures that no value is present for DueAt, not even an explicit nil
### GetResolvedAt

`func (o *DisputeListResponseArray) GetResolvedAt() map[string]interface{}`

GetResolvedAt returns the ResolvedAt field if non-nil, zero value otherwise.

### GetResolvedAtOk

`func (o *DisputeListResponseArray) GetResolvedAtOk() (*map[string]interface{}, bool)`

GetResolvedAtOk returns a tuple with the ResolvedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResolvedAt

`func (o *DisputeListResponseArray) SetResolvedAt(v map[string]interface{})`

SetResolvedAt sets ResolvedAt field to given value.


### SetResolvedAtNil

`func (o *DisputeListResponseArray) SetResolvedAtNil(b bool)`

 SetResolvedAtNil sets the value for ResolvedAt to be an explicit nil

### UnsetResolvedAt
`func (o *DisputeListResponseArray) UnsetResolvedAt()`

UnsetResolvedAt ensures that no value is present for ResolvedAt, not even an explicit nil
### GetEvidence

`func (o *DisputeListResponseArray) GetEvidence() map[string]interface{}`

GetEvidence returns the Evidence field if non-nil, zero value otherwise.

### GetEvidenceOk

`func (o *DisputeListResponseArray) GetEvidenceOk() (*map[string]interface{}, bool)`

GetEvidenceOk returns a tuple with the Evidence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEvidence

`func (o *DisputeListResponseArray) SetEvidence(v map[string]interface{})`

SetEvidence sets Evidence field to given value.


### SetEvidenceNil

`func (o *DisputeListResponseArray) SetEvidenceNil(b bool)`

 SetEvidenceNil sets the value for Evidence to be an explicit nil

### UnsetEvidence
`func (o *DisputeListResponseArray) UnsetEvidence()`

UnsetEvidence ensures that no value is present for Evidence, not even an explicit nil
### GetAttachments

`func (o *DisputeListResponseArray) GetAttachments() map[string]interface{}`

GetAttachments returns the Attachments field if non-nil, zero value otherwise.

### GetAttachmentsOk

`func (o *DisputeListResponseArray) GetAttachmentsOk() (*map[string]interface{}, bool)`

GetAttachmentsOk returns a tuple with the Attachments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttachments

`func (o *DisputeListResponseArray) SetAttachments(v map[string]interface{})`

SetAttachments sets Attachments field to given value.


### SetAttachmentsNil

`func (o *DisputeListResponseArray) SetAttachmentsNil(b bool)`

 SetAttachmentsNil sets the value for Attachments to be an explicit nil

### UnsetAttachments
`func (o *DisputeListResponseArray) UnsetAttachments()`

UnsetAttachments ensures that no value is present for Attachments, not even an explicit nil
### GetNote

`func (o *DisputeListResponseArray) GetNote() map[string]interface{}`

GetNote returns the Note field if non-nil, zero value otherwise.

### GetNoteOk

`func (o *DisputeListResponseArray) GetNoteOk() (*map[string]interface{}, bool)`

GetNoteOk returns a tuple with the Note field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNote

`func (o *DisputeListResponseArray) SetNote(v map[string]interface{})`

SetNote sets Note field to given value.


### SetNoteNil

`func (o *DisputeListResponseArray) SetNoteNil(b bool)`

 SetNoteNil sets the value for Note to be an explicit nil

### UnsetNote
`func (o *DisputeListResponseArray) UnsetNote()`

UnsetNote ensures that no value is present for Note, not even an explicit nil
### GetHistory

`func (o *DisputeListResponseArray) GetHistory() []DisputeHistoryArray`

GetHistory returns the History field if non-nil, zero value otherwise.

### GetHistoryOk

`func (o *DisputeListResponseArray) GetHistoryOk() (*[]DisputeHistoryArray, bool)`

GetHistoryOk returns a tuple with the History field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHistory

`func (o *DisputeListResponseArray) SetHistory(v []DisputeHistoryArray)`

SetHistory sets History field to given value.


### GetMessages

`func (o *DisputeListResponseArray) GetMessages() []DisputeMessagesArray`

GetMessages returns the Messages field if non-nil, zero value otherwise.

### GetMessagesOk

`func (o *DisputeListResponseArray) GetMessagesOk() (*[]DisputeMessagesArray, bool)`

GetMessagesOk returns a tuple with the Messages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessages

`func (o *DisputeListResponseArray) SetMessages(v []DisputeMessagesArray)`

SetMessages sets Messages field to given value.


### GetCreatedAt

`func (o *DisputeListResponseArray) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *DisputeListResponseArray) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *DisputeListResponseArray) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *DisputeListResponseArray) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *DisputeListResponseArray) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *DisputeListResponseArray) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


