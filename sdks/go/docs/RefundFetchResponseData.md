# RefundFetchResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Integration** | **int32** |  | 
**Transaction** | **int32** |  | 
**Dispute** | **map[string]interface{}** |  | 
**Settlement** | **map[string]interface{}** |  | 
**Id** | **int32** |  | 
**Domain** | **string** |  | 
**Currency** | **string** |  | 
**Amount** | **int32** |  | 
**Status** | **string** |  | 
**RefundedAt** | **map[string]interface{}** |  | 
**RefundedBy** | **string** |  | 
**CustomerNote** | **string** |  | 
**MerchantNote** | **string** |  | 
**DeductedAmount** | **int32** |  | 
**FullyDeducted** | **int32** |  | 
**CreatedAt** | **string** |  | 
**BankReference** | **map[string]interface{}** |  | 
**TransactionReference** | **string** |  | 
**Reason** | **string** |  | 
**Customer** | [**RefundFetchResponseDataCustomer**](RefundFetchResponseDataCustomer.md) |  | 
**RefundType** | **string** |  | 
**TransactionAmount** | **int32** |  | 
**InitiatedBy** | **string** |  | 
**RefundChannel** | **string** |  | 
**SessionId** | **map[string]interface{}** |  | 
**CollectAccountNumber** | **bool** |  | 

## Methods

### NewRefundFetchResponseData

`func NewRefundFetchResponseData(integration int32, transaction int32, dispute map[string]interface{}, settlement map[string]interface{}, id int32, domain string, currency string, amount int32, status string, refundedAt map[string]interface{}, refundedBy string, customerNote string, merchantNote string, deductedAmount int32, fullyDeducted int32, createdAt string, bankReference map[string]interface{}, transactionReference string, reason string, customer RefundFetchResponseDataCustomer, refundType string, transactionAmount int32, initiatedBy string, refundChannel string, sessionId map[string]interface{}, collectAccountNumber bool, ) *RefundFetchResponseData`

NewRefundFetchResponseData instantiates a new RefundFetchResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRefundFetchResponseDataWithDefaults

`func NewRefundFetchResponseDataWithDefaults() *RefundFetchResponseData`

NewRefundFetchResponseDataWithDefaults instantiates a new RefundFetchResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIntegration

`func (o *RefundFetchResponseData) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *RefundFetchResponseData) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *RefundFetchResponseData) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetTransaction

`func (o *RefundFetchResponseData) GetTransaction() int32`

GetTransaction returns the Transaction field if non-nil, zero value otherwise.

### GetTransactionOk

`func (o *RefundFetchResponseData) GetTransactionOk() (*int32, bool)`

GetTransactionOk returns a tuple with the Transaction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransaction

`func (o *RefundFetchResponseData) SetTransaction(v int32)`

SetTransaction sets Transaction field to given value.


### GetDispute

`func (o *RefundFetchResponseData) GetDispute() map[string]interface{}`

GetDispute returns the Dispute field if non-nil, zero value otherwise.

### GetDisputeOk

`func (o *RefundFetchResponseData) GetDisputeOk() (*map[string]interface{}, bool)`

GetDisputeOk returns a tuple with the Dispute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDispute

`func (o *RefundFetchResponseData) SetDispute(v map[string]interface{})`

SetDispute sets Dispute field to given value.


### SetDisputeNil

`func (o *RefundFetchResponseData) SetDisputeNil(b bool)`

 SetDisputeNil sets the value for Dispute to be an explicit nil

### UnsetDispute
`func (o *RefundFetchResponseData) UnsetDispute()`

UnsetDispute ensures that no value is present for Dispute, not even an explicit nil
### GetSettlement

`func (o *RefundFetchResponseData) GetSettlement() map[string]interface{}`

GetSettlement returns the Settlement field if non-nil, zero value otherwise.

### GetSettlementOk

`func (o *RefundFetchResponseData) GetSettlementOk() (*map[string]interface{}, bool)`

GetSettlementOk returns a tuple with the Settlement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSettlement

`func (o *RefundFetchResponseData) SetSettlement(v map[string]interface{})`

SetSettlement sets Settlement field to given value.


### SetSettlementNil

`func (o *RefundFetchResponseData) SetSettlementNil(b bool)`

 SetSettlementNil sets the value for Settlement to be an explicit nil

### UnsetSettlement
`func (o *RefundFetchResponseData) UnsetSettlement()`

UnsetSettlement ensures that no value is present for Settlement, not even an explicit nil
### GetId

`func (o *RefundFetchResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RefundFetchResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RefundFetchResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetDomain

`func (o *RefundFetchResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *RefundFetchResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *RefundFetchResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetCurrency

`func (o *RefundFetchResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *RefundFetchResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *RefundFetchResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetAmount

`func (o *RefundFetchResponseData) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *RefundFetchResponseData) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *RefundFetchResponseData) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetStatus

`func (o *RefundFetchResponseData) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *RefundFetchResponseData) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *RefundFetchResponseData) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetRefundedAt

`func (o *RefundFetchResponseData) GetRefundedAt() map[string]interface{}`

GetRefundedAt returns the RefundedAt field if non-nil, zero value otherwise.

### GetRefundedAtOk

`func (o *RefundFetchResponseData) GetRefundedAtOk() (*map[string]interface{}, bool)`

GetRefundedAtOk returns a tuple with the RefundedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundedAt

`func (o *RefundFetchResponseData) SetRefundedAt(v map[string]interface{})`

SetRefundedAt sets RefundedAt field to given value.


### SetRefundedAtNil

`func (o *RefundFetchResponseData) SetRefundedAtNil(b bool)`

 SetRefundedAtNil sets the value for RefundedAt to be an explicit nil

### UnsetRefundedAt
`func (o *RefundFetchResponseData) UnsetRefundedAt()`

UnsetRefundedAt ensures that no value is present for RefundedAt, not even an explicit nil
### GetRefundedBy

`func (o *RefundFetchResponseData) GetRefundedBy() string`

GetRefundedBy returns the RefundedBy field if non-nil, zero value otherwise.

### GetRefundedByOk

`func (o *RefundFetchResponseData) GetRefundedByOk() (*string, bool)`

GetRefundedByOk returns a tuple with the RefundedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundedBy

`func (o *RefundFetchResponseData) SetRefundedBy(v string)`

SetRefundedBy sets RefundedBy field to given value.


### GetCustomerNote

`func (o *RefundFetchResponseData) GetCustomerNote() string`

GetCustomerNote returns the CustomerNote field if non-nil, zero value otherwise.

### GetCustomerNoteOk

`func (o *RefundFetchResponseData) GetCustomerNoteOk() (*string, bool)`

GetCustomerNoteOk returns a tuple with the CustomerNote field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerNote

`func (o *RefundFetchResponseData) SetCustomerNote(v string)`

SetCustomerNote sets CustomerNote field to given value.


### GetMerchantNote

`func (o *RefundFetchResponseData) GetMerchantNote() string`

GetMerchantNote returns the MerchantNote field if non-nil, zero value otherwise.

### GetMerchantNoteOk

`func (o *RefundFetchResponseData) GetMerchantNoteOk() (*string, bool)`

GetMerchantNoteOk returns a tuple with the MerchantNote field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMerchantNote

`func (o *RefundFetchResponseData) SetMerchantNote(v string)`

SetMerchantNote sets MerchantNote field to given value.


### GetDeductedAmount

`func (o *RefundFetchResponseData) GetDeductedAmount() int32`

GetDeductedAmount returns the DeductedAmount field if non-nil, zero value otherwise.

### GetDeductedAmountOk

`func (o *RefundFetchResponseData) GetDeductedAmountOk() (*int32, bool)`

GetDeductedAmountOk returns a tuple with the DeductedAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeductedAmount

`func (o *RefundFetchResponseData) SetDeductedAmount(v int32)`

SetDeductedAmount sets DeductedAmount field to given value.


### GetFullyDeducted

`func (o *RefundFetchResponseData) GetFullyDeducted() int32`

GetFullyDeducted returns the FullyDeducted field if non-nil, zero value otherwise.

### GetFullyDeductedOk

`func (o *RefundFetchResponseData) GetFullyDeductedOk() (*int32, bool)`

GetFullyDeductedOk returns a tuple with the FullyDeducted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullyDeducted

`func (o *RefundFetchResponseData) SetFullyDeducted(v int32)`

SetFullyDeducted sets FullyDeducted field to given value.


### GetCreatedAt

`func (o *RefundFetchResponseData) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *RefundFetchResponseData) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *RefundFetchResponseData) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetBankReference

`func (o *RefundFetchResponseData) GetBankReference() map[string]interface{}`

GetBankReference returns the BankReference field if non-nil, zero value otherwise.

### GetBankReferenceOk

`func (o *RefundFetchResponseData) GetBankReferenceOk() (*map[string]interface{}, bool)`

GetBankReferenceOk returns a tuple with the BankReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBankReference

`func (o *RefundFetchResponseData) SetBankReference(v map[string]interface{})`

SetBankReference sets BankReference field to given value.


### SetBankReferenceNil

`func (o *RefundFetchResponseData) SetBankReferenceNil(b bool)`

 SetBankReferenceNil sets the value for BankReference to be an explicit nil

### UnsetBankReference
`func (o *RefundFetchResponseData) UnsetBankReference()`

UnsetBankReference ensures that no value is present for BankReference, not even an explicit nil
### GetTransactionReference

`func (o *RefundFetchResponseData) GetTransactionReference() string`

GetTransactionReference returns the TransactionReference field if non-nil, zero value otherwise.

### GetTransactionReferenceOk

`func (o *RefundFetchResponseData) GetTransactionReferenceOk() (*string, bool)`

GetTransactionReferenceOk returns a tuple with the TransactionReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionReference

`func (o *RefundFetchResponseData) SetTransactionReference(v string)`

SetTransactionReference sets TransactionReference field to given value.


### GetReason

`func (o *RefundFetchResponseData) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *RefundFetchResponseData) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *RefundFetchResponseData) SetReason(v string)`

SetReason sets Reason field to given value.


### GetCustomer

`func (o *RefundFetchResponseData) GetCustomer() RefundFetchResponseDataCustomer`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *RefundFetchResponseData) GetCustomerOk() (*RefundFetchResponseDataCustomer, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *RefundFetchResponseData) SetCustomer(v RefundFetchResponseDataCustomer)`

SetCustomer sets Customer field to given value.


### GetRefundType

`func (o *RefundFetchResponseData) GetRefundType() string`

GetRefundType returns the RefundType field if non-nil, zero value otherwise.

### GetRefundTypeOk

`func (o *RefundFetchResponseData) GetRefundTypeOk() (*string, bool)`

GetRefundTypeOk returns a tuple with the RefundType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundType

`func (o *RefundFetchResponseData) SetRefundType(v string)`

SetRefundType sets RefundType field to given value.


### GetTransactionAmount

`func (o *RefundFetchResponseData) GetTransactionAmount() int32`

GetTransactionAmount returns the TransactionAmount field if non-nil, zero value otherwise.

### GetTransactionAmountOk

`func (o *RefundFetchResponseData) GetTransactionAmountOk() (*int32, bool)`

GetTransactionAmountOk returns a tuple with the TransactionAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionAmount

`func (o *RefundFetchResponseData) SetTransactionAmount(v int32)`

SetTransactionAmount sets TransactionAmount field to given value.


### GetInitiatedBy

`func (o *RefundFetchResponseData) GetInitiatedBy() string`

GetInitiatedBy returns the InitiatedBy field if non-nil, zero value otherwise.

### GetInitiatedByOk

`func (o *RefundFetchResponseData) GetInitiatedByOk() (*string, bool)`

GetInitiatedByOk returns a tuple with the InitiatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInitiatedBy

`func (o *RefundFetchResponseData) SetInitiatedBy(v string)`

SetInitiatedBy sets InitiatedBy field to given value.


### GetRefundChannel

`func (o *RefundFetchResponseData) GetRefundChannel() string`

GetRefundChannel returns the RefundChannel field if non-nil, zero value otherwise.

### GetRefundChannelOk

`func (o *RefundFetchResponseData) GetRefundChannelOk() (*string, bool)`

GetRefundChannelOk returns a tuple with the RefundChannel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundChannel

`func (o *RefundFetchResponseData) SetRefundChannel(v string)`

SetRefundChannel sets RefundChannel field to given value.


### GetSessionId

`func (o *RefundFetchResponseData) GetSessionId() map[string]interface{}`

GetSessionId returns the SessionId field if non-nil, zero value otherwise.

### GetSessionIdOk

`func (o *RefundFetchResponseData) GetSessionIdOk() (*map[string]interface{}, bool)`

GetSessionIdOk returns a tuple with the SessionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSessionId

`func (o *RefundFetchResponseData) SetSessionId(v map[string]interface{})`

SetSessionId sets SessionId field to given value.


### SetSessionIdNil

`func (o *RefundFetchResponseData) SetSessionIdNil(b bool)`

 SetSessionIdNil sets the value for SessionId to be an explicit nil

### UnsetSessionId
`func (o *RefundFetchResponseData) UnsetSessionId()`

UnsetSessionId ensures that no value is present for SessionId, not even an explicit nil
### GetCollectAccountNumber

`func (o *RefundFetchResponseData) GetCollectAccountNumber() bool`

GetCollectAccountNumber returns the CollectAccountNumber field if non-nil, zero value otherwise.

### GetCollectAccountNumberOk

`func (o *RefundFetchResponseData) GetCollectAccountNumberOk() (*bool, bool)`

GetCollectAccountNumberOk returns a tuple with the CollectAccountNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCollectAccountNumber

`func (o *RefundFetchResponseData) SetCollectAccountNumber(v bool)`

SetCollectAccountNumber sets CollectAccountNumber field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


