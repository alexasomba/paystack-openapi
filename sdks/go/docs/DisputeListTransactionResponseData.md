# DisputeListTransactionResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**History** | [**[]DisputeHistoryArray**](DisputeHistoryArray.md) |  | 
**Messages** | [**[]DisputeMessagesArray**](DisputeMessagesArray.md) |  | 
**Currency** | **string** |  | 
**Last4** | **string** |  | 
**Bin** | **string** |  | 
**TransactionReference** | **map[string]interface{}** |  | 
**MerchantTransactionReference** | **string** |  | 
**RefundAmount** | **int32** |  | 
**Status** | **string** |  | 
**Domain** | **string** |  | 
**Resolution** | **map[string]interface{}** |  | 
**Category** | **string** |  | 
**Note** | **map[string]interface{}** |  | 
**Attachments** | **map[string]interface{}** |  | 
**Id** | **int32** |  | 
**Integration** | **int32** |  | 
**Transaction** | [**DisputeListTransactionResponseDataTransaction**](DisputeListTransactionResponseDataTransaction.md) |  | 
**CreatedBy** | **int32** |  | 
**Evidence** | **map[string]interface{}** |  | 
**ResolvedAt** | **map[string]interface{}** |  | 
**CreatedAt** | **string** |  | 
**UpdatedAt** | **string** |  | 
**DueAt** | **map[string]interface{}** |  | 

## Methods

### NewDisputeListTransactionResponseData

`func NewDisputeListTransactionResponseData(history []DisputeHistoryArray, messages []DisputeMessagesArray, currency string, last4 string, bin string, transactionReference map[string]interface{}, merchantTransactionReference string, refundAmount int32, status string, domain string, resolution map[string]interface{}, category string, note map[string]interface{}, attachments map[string]interface{}, id int32, integration int32, transaction DisputeListTransactionResponseDataTransaction, createdBy int32, evidence map[string]interface{}, resolvedAt map[string]interface{}, createdAt string, updatedAt string, dueAt map[string]interface{}, ) *DisputeListTransactionResponseData`

NewDisputeListTransactionResponseData instantiates a new DisputeListTransactionResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDisputeListTransactionResponseDataWithDefaults

`func NewDisputeListTransactionResponseDataWithDefaults() *DisputeListTransactionResponseData`

NewDisputeListTransactionResponseDataWithDefaults instantiates a new DisputeListTransactionResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHistory

`func (o *DisputeListTransactionResponseData) GetHistory() []DisputeHistoryArray`

GetHistory returns the History field if non-nil, zero value otherwise.

### GetHistoryOk

`func (o *DisputeListTransactionResponseData) GetHistoryOk() (*[]DisputeHistoryArray, bool)`

GetHistoryOk returns a tuple with the History field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHistory

`func (o *DisputeListTransactionResponseData) SetHistory(v []DisputeHistoryArray)`

SetHistory sets History field to given value.


### GetMessages

`func (o *DisputeListTransactionResponseData) GetMessages() []DisputeMessagesArray`

GetMessages returns the Messages field if non-nil, zero value otherwise.

### GetMessagesOk

`func (o *DisputeListTransactionResponseData) GetMessagesOk() (*[]DisputeMessagesArray, bool)`

GetMessagesOk returns a tuple with the Messages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessages

`func (o *DisputeListTransactionResponseData) SetMessages(v []DisputeMessagesArray)`

SetMessages sets Messages field to given value.


### GetCurrency

`func (o *DisputeListTransactionResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *DisputeListTransactionResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *DisputeListTransactionResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetLast4

`func (o *DisputeListTransactionResponseData) GetLast4() string`

GetLast4 returns the Last4 field if non-nil, zero value otherwise.

### GetLast4Ok

`func (o *DisputeListTransactionResponseData) GetLast4Ok() (*string, bool)`

GetLast4Ok returns a tuple with the Last4 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLast4

`func (o *DisputeListTransactionResponseData) SetLast4(v string)`

SetLast4 sets Last4 field to given value.


### GetBin

`func (o *DisputeListTransactionResponseData) GetBin() string`

GetBin returns the Bin field if non-nil, zero value otherwise.

### GetBinOk

`func (o *DisputeListTransactionResponseData) GetBinOk() (*string, bool)`

GetBinOk returns a tuple with the Bin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBin

`func (o *DisputeListTransactionResponseData) SetBin(v string)`

SetBin sets Bin field to given value.


### GetTransactionReference

`func (o *DisputeListTransactionResponseData) GetTransactionReference() map[string]interface{}`

GetTransactionReference returns the TransactionReference field if non-nil, zero value otherwise.

### GetTransactionReferenceOk

`func (o *DisputeListTransactionResponseData) GetTransactionReferenceOk() (*map[string]interface{}, bool)`

GetTransactionReferenceOk returns a tuple with the TransactionReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionReference

`func (o *DisputeListTransactionResponseData) SetTransactionReference(v map[string]interface{})`

SetTransactionReference sets TransactionReference field to given value.


### SetTransactionReferenceNil

`func (o *DisputeListTransactionResponseData) SetTransactionReferenceNil(b bool)`

 SetTransactionReferenceNil sets the value for TransactionReference to be an explicit nil

### UnsetTransactionReference
`func (o *DisputeListTransactionResponseData) UnsetTransactionReference()`

UnsetTransactionReference ensures that no value is present for TransactionReference, not even an explicit nil
### GetMerchantTransactionReference

`func (o *DisputeListTransactionResponseData) GetMerchantTransactionReference() string`

GetMerchantTransactionReference returns the MerchantTransactionReference field if non-nil, zero value otherwise.

### GetMerchantTransactionReferenceOk

`func (o *DisputeListTransactionResponseData) GetMerchantTransactionReferenceOk() (*string, bool)`

GetMerchantTransactionReferenceOk returns a tuple with the MerchantTransactionReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMerchantTransactionReference

`func (o *DisputeListTransactionResponseData) SetMerchantTransactionReference(v string)`

SetMerchantTransactionReference sets MerchantTransactionReference field to given value.


### GetRefundAmount

`func (o *DisputeListTransactionResponseData) GetRefundAmount() int32`

GetRefundAmount returns the RefundAmount field if non-nil, zero value otherwise.

### GetRefundAmountOk

`func (o *DisputeListTransactionResponseData) GetRefundAmountOk() (*int32, bool)`

GetRefundAmountOk returns a tuple with the RefundAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundAmount

`func (o *DisputeListTransactionResponseData) SetRefundAmount(v int32)`

SetRefundAmount sets RefundAmount field to given value.


### GetStatus

`func (o *DisputeListTransactionResponseData) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *DisputeListTransactionResponseData) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *DisputeListTransactionResponseData) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetDomain

`func (o *DisputeListTransactionResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *DisputeListTransactionResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *DisputeListTransactionResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetResolution

`func (o *DisputeListTransactionResponseData) GetResolution() map[string]interface{}`

GetResolution returns the Resolution field if non-nil, zero value otherwise.

### GetResolutionOk

`func (o *DisputeListTransactionResponseData) GetResolutionOk() (*map[string]interface{}, bool)`

GetResolutionOk returns a tuple with the Resolution field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResolution

`func (o *DisputeListTransactionResponseData) SetResolution(v map[string]interface{})`

SetResolution sets Resolution field to given value.


### SetResolutionNil

`func (o *DisputeListTransactionResponseData) SetResolutionNil(b bool)`

 SetResolutionNil sets the value for Resolution to be an explicit nil

### UnsetResolution
`func (o *DisputeListTransactionResponseData) UnsetResolution()`

UnsetResolution ensures that no value is present for Resolution, not even an explicit nil
### GetCategory

`func (o *DisputeListTransactionResponseData) GetCategory() string`

GetCategory returns the Category field if non-nil, zero value otherwise.

### GetCategoryOk

`func (o *DisputeListTransactionResponseData) GetCategoryOk() (*string, bool)`

GetCategoryOk returns a tuple with the Category field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategory

`func (o *DisputeListTransactionResponseData) SetCategory(v string)`

SetCategory sets Category field to given value.


### GetNote

`func (o *DisputeListTransactionResponseData) GetNote() map[string]interface{}`

GetNote returns the Note field if non-nil, zero value otherwise.

### GetNoteOk

`func (o *DisputeListTransactionResponseData) GetNoteOk() (*map[string]interface{}, bool)`

GetNoteOk returns a tuple with the Note field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNote

`func (o *DisputeListTransactionResponseData) SetNote(v map[string]interface{})`

SetNote sets Note field to given value.


### SetNoteNil

`func (o *DisputeListTransactionResponseData) SetNoteNil(b bool)`

 SetNoteNil sets the value for Note to be an explicit nil

### UnsetNote
`func (o *DisputeListTransactionResponseData) UnsetNote()`

UnsetNote ensures that no value is present for Note, not even an explicit nil
### GetAttachments

`func (o *DisputeListTransactionResponseData) GetAttachments() map[string]interface{}`

GetAttachments returns the Attachments field if non-nil, zero value otherwise.

### GetAttachmentsOk

`func (o *DisputeListTransactionResponseData) GetAttachmentsOk() (*map[string]interface{}, bool)`

GetAttachmentsOk returns a tuple with the Attachments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttachments

`func (o *DisputeListTransactionResponseData) SetAttachments(v map[string]interface{})`

SetAttachments sets Attachments field to given value.


### SetAttachmentsNil

`func (o *DisputeListTransactionResponseData) SetAttachmentsNil(b bool)`

 SetAttachmentsNil sets the value for Attachments to be an explicit nil

### UnsetAttachments
`func (o *DisputeListTransactionResponseData) UnsetAttachments()`

UnsetAttachments ensures that no value is present for Attachments, not even an explicit nil
### GetId

`func (o *DisputeListTransactionResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *DisputeListTransactionResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *DisputeListTransactionResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetIntegration

`func (o *DisputeListTransactionResponseData) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *DisputeListTransactionResponseData) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *DisputeListTransactionResponseData) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetTransaction

`func (o *DisputeListTransactionResponseData) GetTransaction() DisputeListTransactionResponseDataTransaction`

GetTransaction returns the Transaction field if non-nil, zero value otherwise.

### GetTransactionOk

`func (o *DisputeListTransactionResponseData) GetTransactionOk() (*DisputeListTransactionResponseDataTransaction, bool)`

GetTransactionOk returns a tuple with the Transaction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransaction

`func (o *DisputeListTransactionResponseData) SetTransaction(v DisputeListTransactionResponseDataTransaction)`

SetTransaction sets Transaction field to given value.


### GetCreatedBy

`func (o *DisputeListTransactionResponseData) GetCreatedBy() int32`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *DisputeListTransactionResponseData) GetCreatedByOk() (*int32, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *DisputeListTransactionResponseData) SetCreatedBy(v int32)`

SetCreatedBy sets CreatedBy field to given value.


### GetEvidence

`func (o *DisputeListTransactionResponseData) GetEvidence() map[string]interface{}`

GetEvidence returns the Evidence field if non-nil, zero value otherwise.

### GetEvidenceOk

`func (o *DisputeListTransactionResponseData) GetEvidenceOk() (*map[string]interface{}, bool)`

GetEvidenceOk returns a tuple with the Evidence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEvidence

`func (o *DisputeListTransactionResponseData) SetEvidence(v map[string]interface{})`

SetEvidence sets Evidence field to given value.


### SetEvidenceNil

`func (o *DisputeListTransactionResponseData) SetEvidenceNil(b bool)`

 SetEvidenceNil sets the value for Evidence to be an explicit nil

### UnsetEvidence
`func (o *DisputeListTransactionResponseData) UnsetEvidence()`

UnsetEvidence ensures that no value is present for Evidence, not even an explicit nil
### GetResolvedAt

`func (o *DisputeListTransactionResponseData) GetResolvedAt() map[string]interface{}`

GetResolvedAt returns the ResolvedAt field if non-nil, zero value otherwise.

### GetResolvedAtOk

`func (o *DisputeListTransactionResponseData) GetResolvedAtOk() (*map[string]interface{}, bool)`

GetResolvedAtOk returns a tuple with the ResolvedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResolvedAt

`func (o *DisputeListTransactionResponseData) SetResolvedAt(v map[string]interface{})`

SetResolvedAt sets ResolvedAt field to given value.


### SetResolvedAtNil

`func (o *DisputeListTransactionResponseData) SetResolvedAtNil(b bool)`

 SetResolvedAtNil sets the value for ResolvedAt to be an explicit nil

### UnsetResolvedAt
`func (o *DisputeListTransactionResponseData) UnsetResolvedAt()`

UnsetResolvedAt ensures that no value is present for ResolvedAt, not even an explicit nil
### GetCreatedAt

`func (o *DisputeListTransactionResponseData) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *DisputeListTransactionResponseData) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *DisputeListTransactionResponseData) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *DisputeListTransactionResponseData) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *DisputeListTransactionResponseData) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *DisputeListTransactionResponseData) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.


### GetDueAt

`func (o *DisputeListTransactionResponseData) GetDueAt() map[string]interface{}`

GetDueAt returns the DueAt field if non-nil, zero value otherwise.

### GetDueAtOk

`func (o *DisputeListTransactionResponseData) GetDueAtOk() (*map[string]interface{}, bool)`

GetDueAtOk returns a tuple with the DueAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDueAt

`func (o *DisputeListTransactionResponseData) SetDueAt(v map[string]interface{})`

SetDueAt sets DueAt field to given value.


### SetDueAtNil

`func (o *DisputeListTransactionResponseData) SetDueAtNil(b bool)`

 SetDueAtNil sets the value for DueAt to be an explicit nil

### UnsetDueAt
`func (o *DisputeListTransactionResponseData) UnsetDueAt()`

UnsetDueAt ensures that no value is present for DueAt, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


