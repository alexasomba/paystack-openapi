# DisputeResolveResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Currency** | **string** |  | 
**Last4** | **string** |  | 
**Bin** | **string** |  | 
**TransactionReference** | **interface{}** |  | 
**MerchantTransactionReference** | **string** |  | 
**RefundAmount** | **int32** |  | 
**Status** | **string** |  | 
**Domain** | **string** |  | 
**Resolution** | **string** |  | 
**Category** | **string** |  | 
**Note** | **interface{}** |  | 
**Attachments** | **string** |  | 
**Id** | **int32** |  | 
**Integration** | **int32** |  | 
**Transaction** | **int32** |  | 
**CreatedBy** | **int32** |  | 
**Evidence** | **int32** |  | 
**ResolvedAt** | **string** |  | 
**CreatedAt** | **string** |  | 
**UpdatedAt** | **string** |  | 
**DueAt** | **interface{}** |  | 
**Message** | [**DisputeResolveResponseDataMessage**](DisputeResolveResponseDataMessage.md) |  | 

## Methods

### NewDisputeResolveResponseData

`func NewDisputeResolveResponseData(currency string, last4 string, bin string, transactionReference interface{}, merchantTransactionReference string, refundAmount int32, status string, domain string, resolution string, category string, note interface{}, attachments string, id int32, integration int32, transaction int32, createdBy int32, evidence int32, resolvedAt string, createdAt string, updatedAt string, dueAt interface{}, message DisputeResolveResponseDataMessage, ) *DisputeResolveResponseData`

NewDisputeResolveResponseData instantiates a new DisputeResolveResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDisputeResolveResponseDataWithDefaults

`func NewDisputeResolveResponseDataWithDefaults() *DisputeResolveResponseData`

NewDisputeResolveResponseDataWithDefaults instantiates a new DisputeResolveResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCurrency

`func (o *DisputeResolveResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *DisputeResolveResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *DisputeResolveResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetLast4

`func (o *DisputeResolveResponseData) GetLast4() string`

GetLast4 returns the Last4 field if non-nil, zero value otherwise.

### GetLast4Ok

`func (o *DisputeResolveResponseData) GetLast4Ok() (*string, bool)`

GetLast4Ok returns a tuple with the Last4 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLast4

`func (o *DisputeResolveResponseData) SetLast4(v string)`

SetLast4 sets Last4 field to given value.


### GetBin

`func (o *DisputeResolveResponseData) GetBin() string`

GetBin returns the Bin field if non-nil, zero value otherwise.

### GetBinOk

`func (o *DisputeResolveResponseData) GetBinOk() (*string, bool)`

GetBinOk returns a tuple with the Bin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBin

`func (o *DisputeResolveResponseData) SetBin(v string)`

SetBin sets Bin field to given value.


### GetTransactionReference

`func (o *DisputeResolveResponseData) GetTransactionReference() interface{}`

GetTransactionReference returns the TransactionReference field if non-nil, zero value otherwise.

### GetTransactionReferenceOk

`func (o *DisputeResolveResponseData) GetTransactionReferenceOk() (*interface{}, bool)`

GetTransactionReferenceOk returns a tuple with the TransactionReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionReference

`func (o *DisputeResolveResponseData) SetTransactionReference(v interface{})`

SetTransactionReference sets TransactionReference field to given value.


### SetTransactionReferenceNil

`func (o *DisputeResolveResponseData) SetTransactionReferenceNil(b bool)`

 SetTransactionReferenceNil sets the value for TransactionReference to be an explicit nil

### UnsetTransactionReference
`func (o *DisputeResolveResponseData) UnsetTransactionReference()`

UnsetTransactionReference ensures that no value is present for TransactionReference, not even an explicit nil
### GetMerchantTransactionReference

`func (o *DisputeResolveResponseData) GetMerchantTransactionReference() string`

GetMerchantTransactionReference returns the MerchantTransactionReference field if non-nil, zero value otherwise.

### GetMerchantTransactionReferenceOk

`func (o *DisputeResolveResponseData) GetMerchantTransactionReferenceOk() (*string, bool)`

GetMerchantTransactionReferenceOk returns a tuple with the MerchantTransactionReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMerchantTransactionReference

`func (o *DisputeResolveResponseData) SetMerchantTransactionReference(v string)`

SetMerchantTransactionReference sets MerchantTransactionReference field to given value.


### GetRefundAmount

`func (o *DisputeResolveResponseData) GetRefundAmount() int32`

GetRefundAmount returns the RefundAmount field if non-nil, zero value otherwise.

### GetRefundAmountOk

`func (o *DisputeResolveResponseData) GetRefundAmountOk() (*int32, bool)`

GetRefundAmountOk returns a tuple with the RefundAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundAmount

`func (o *DisputeResolveResponseData) SetRefundAmount(v int32)`

SetRefundAmount sets RefundAmount field to given value.


### GetStatus

`func (o *DisputeResolveResponseData) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *DisputeResolveResponseData) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *DisputeResolveResponseData) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetDomain

`func (o *DisputeResolveResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *DisputeResolveResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *DisputeResolveResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetResolution

`func (o *DisputeResolveResponseData) GetResolution() string`

GetResolution returns the Resolution field if non-nil, zero value otherwise.

### GetResolutionOk

`func (o *DisputeResolveResponseData) GetResolutionOk() (*string, bool)`

GetResolutionOk returns a tuple with the Resolution field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResolution

`func (o *DisputeResolveResponseData) SetResolution(v string)`

SetResolution sets Resolution field to given value.


### GetCategory

`func (o *DisputeResolveResponseData) GetCategory() string`

GetCategory returns the Category field if non-nil, zero value otherwise.

### GetCategoryOk

`func (o *DisputeResolveResponseData) GetCategoryOk() (*string, bool)`

GetCategoryOk returns a tuple with the Category field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategory

`func (o *DisputeResolveResponseData) SetCategory(v string)`

SetCategory sets Category field to given value.


### GetNote

`func (o *DisputeResolveResponseData) GetNote() interface{}`

GetNote returns the Note field if non-nil, zero value otherwise.

### GetNoteOk

`func (o *DisputeResolveResponseData) GetNoteOk() (*interface{}, bool)`

GetNoteOk returns a tuple with the Note field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNote

`func (o *DisputeResolveResponseData) SetNote(v interface{})`

SetNote sets Note field to given value.


### SetNoteNil

`func (o *DisputeResolveResponseData) SetNoteNil(b bool)`

 SetNoteNil sets the value for Note to be an explicit nil

### UnsetNote
`func (o *DisputeResolveResponseData) UnsetNote()`

UnsetNote ensures that no value is present for Note, not even an explicit nil
### GetAttachments

`func (o *DisputeResolveResponseData) GetAttachments() string`

GetAttachments returns the Attachments field if non-nil, zero value otherwise.

### GetAttachmentsOk

`func (o *DisputeResolveResponseData) GetAttachmentsOk() (*string, bool)`

GetAttachmentsOk returns a tuple with the Attachments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttachments

`func (o *DisputeResolveResponseData) SetAttachments(v string)`

SetAttachments sets Attachments field to given value.


### GetId

`func (o *DisputeResolveResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *DisputeResolveResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *DisputeResolveResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetIntegration

`func (o *DisputeResolveResponseData) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *DisputeResolveResponseData) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *DisputeResolveResponseData) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetTransaction

`func (o *DisputeResolveResponseData) GetTransaction() int32`

GetTransaction returns the Transaction field if non-nil, zero value otherwise.

### GetTransactionOk

`func (o *DisputeResolveResponseData) GetTransactionOk() (*int32, bool)`

GetTransactionOk returns a tuple with the Transaction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransaction

`func (o *DisputeResolveResponseData) SetTransaction(v int32)`

SetTransaction sets Transaction field to given value.


### GetCreatedBy

`func (o *DisputeResolveResponseData) GetCreatedBy() int32`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *DisputeResolveResponseData) GetCreatedByOk() (*int32, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *DisputeResolveResponseData) SetCreatedBy(v int32)`

SetCreatedBy sets CreatedBy field to given value.


### GetEvidence

`func (o *DisputeResolveResponseData) GetEvidence() int32`

GetEvidence returns the Evidence field if non-nil, zero value otherwise.

### GetEvidenceOk

`func (o *DisputeResolveResponseData) GetEvidenceOk() (*int32, bool)`

GetEvidenceOk returns a tuple with the Evidence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEvidence

`func (o *DisputeResolveResponseData) SetEvidence(v int32)`

SetEvidence sets Evidence field to given value.


### GetResolvedAt

`func (o *DisputeResolveResponseData) GetResolvedAt() string`

GetResolvedAt returns the ResolvedAt field if non-nil, zero value otherwise.

### GetResolvedAtOk

`func (o *DisputeResolveResponseData) GetResolvedAtOk() (*string, bool)`

GetResolvedAtOk returns a tuple with the ResolvedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResolvedAt

`func (o *DisputeResolveResponseData) SetResolvedAt(v string)`

SetResolvedAt sets ResolvedAt field to given value.


### GetCreatedAt

`func (o *DisputeResolveResponseData) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *DisputeResolveResponseData) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *DisputeResolveResponseData) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *DisputeResolveResponseData) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *DisputeResolveResponseData) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *DisputeResolveResponseData) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.


### GetDueAt

`func (o *DisputeResolveResponseData) GetDueAt() interface{}`

GetDueAt returns the DueAt field if non-nil, zero value otherwise.

### GetDueAtOk

`func (o *DisputeResolveResponseData) GetDueAtOk() (*interface{}, bool)`

GetDueAtOk returns a tuple with the DueAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDueAt

`func (o *DisputeResolveResponseData) SetDueAt(v interface{})`

SetDueAt sets DueAt field to given value.


### SetDueAtNil

`func (o *DisputeResolveResponseData) SetDueAtNil(b bool)`

 SetDueAtNil sets the value for DueAt to be an explicit nil

### UnsetDueAt
`func (o *DisputeResolveResponseData) UnsetDueAt()`

UnsetDueAt ensures that no value is present for DueAt, not even an explicit nil
### GetMessage

`func (o *DisputeResolveResponseData) GetMessage() DisputeResolveResponseDataMessage`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *DisputeResolveResponseData) GetMessageOk() (*DisputeResolveResponseDataMessage, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *DisputeResolveResponseData) SetMessage(v DisputeResolveResponseDataMessage)`

SetMessage sets Message field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


