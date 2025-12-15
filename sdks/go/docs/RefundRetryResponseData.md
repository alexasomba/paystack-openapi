# RefundRetryResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Integration** | **float32** |  | 
**Transaction** | **float32** |  | 
**Dispute** | **map[string]interface{}** |  | 
**Settlement** | **map[string]interface{}** |  | 
**Id** | **float32** |  | 
**Domain** | **string** |  | 
**Currency** | **string** |  | 
**Amount** | **float32** |  | 
**Status** | **string** |  | 
**RefundedAt** | **NullableString** |  | 
**ExpectedAt** | **string** |  | 
**Channel** | **string** |  | 
**RefundedBy** | **string** |  | 
**CustomerNote** | **string** |  | 
**MerchantNote** | **string** |  | 
**DeductedAmount** | **float32** |  | 
**FullyDeducted** | **bool** |  | 
**BankReference** | **NullableString** |  | 
**Reason** | **string** |  | 
**Customer** | **map[string]interface{}** |  | 
**InitiatedBy** | **string** |  | 
**ReversedAt** | **NullableString** |  | 
**SessionId** | **NullableString** |  | 

## Methods

### NewRefundRetryResponseData

`func NewRefundRetryResponseData(integration float32, transaction float32, dispute map[string]interface{}, settlement map[string]interface{}, id float32, domain string, currency string, amount float32, status string, refundedAt NullableString, expectedAt string, channel string, refundedBy string, customerNote string, merchantNote string, deductedAmount float32, fullyDeducted bool, bankReference NullableString, reason string, customer map[string]interface{}, initiatedBy string, reversedAt NullableString, sessionId NullableString, ) *RefundRetryResponseData`

NewRefundRetryResponseData instantiates a new RefundRetryResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRefundRetryResponseDataWithDefaults

`func NewRefundRetryResponseDataWithDefaults() *RefundRetryResponseData`

NewRefundRetryResponseDataWithDefaults instantiates a new RefundRetryResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIntegration

`func (o *RefundRetryResponseData) GetIntegration() float32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *RefundRetryResponseData) GetIntegrationOk() (*float32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *RefundRetryResponseData) SetIntegration(v float32)`

SetIntegration sets Integration field to given value.


### GetTransaction

`func (o *RefundRetryResponseData) GetTransaction() float32`

GetTransaction returns the Transaction field if non-nil, zero value otherwise.

### GetTransactionOk

`func (o *RefundRetryResponseData) GetTransactionOk() (*float32, bool)`

GetTransactionOk returns a tuple with the Transaction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransaction

`func (o *RefundRetryResponseData) SetTransaction(v float32)`

SetTransaction sets Transaction field to given value.


### GetDispute

`func (o *RefundRetryResponseData) GetDispute() map[string]interface{}`

GetDispute returns the Dispute field if non-nil, zero value otherwise.

### GetDisputeOk

`func (o *RefundRetryResponseData) GetDisputeOk() (*map[string]interface{}, bool)`

GetDisputeOk returns a tuple with the Dispute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDispute

`func (o *RefundRetryResponseData) SetDispute(v map[string]interface{})`

SetDispute sets Dispute field to given value.


### GetSettlement

`func (o *RefundRetryResponseData) GetSettlement() map[string]interface{}`

GetSettlement returns the Settlement field if non-nil, zero value otherwise.

### GetSettlementOk

`func (o *RefundRetryResponseData) GetSettlementOk() (*map[string]interface{}, bool)`

GetSettlementOk returns a tuple with the Settlement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSettlement

`func (o *RefundRetryResponseData) SetSettlement(v map[string]interface{})`

SetSettlement sets Settlement field to given value.


### GetId

`func (o *RefundRetryResponseData) GetId() float32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RefundRetryResponseData) GetIdOk() (*float32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RefundRetryResponseData) SetId(v float32)`

SetId sets Id field to given value.


### GetDomain

`func (o *RefundRetryResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *RefundRetryResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *RefundRetryResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetCurrency

`func (o *RefundRetryResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *RefundRetryResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *RefundRetryResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetAmount

`func (o *RefundRetryResponseData) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *RefundRetryResponseData) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *RefundRetryResponseData) SetAmount(v float32)`

SetAmount sets Amount field to given value.


### GetStatus

`func (o *RefundRetryResponseData) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *RefundRetryResponseData) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *RefundRetryResponseData) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetRefundedAt

`func (o *RefundRetryResponseData) GetRefundedAt() string`

GetRefundedAt returns the RefundedAt field if non-nil, zero value otherwise.

### GetRefundedAtOk

`func (o *RefundRetryResponseData) GetRefundedAtOk() (*string, bool)`

GetRefundedAtOk returns a tuple with the RefundedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundedAt

`func (o *RefundRetryResponseData) SetRefundedAt(v string)`

SetRefundedAt sets RefundedAt field to given value.


### SetRefundedAtNil

`func (o *RefundRetryResponseData) SetRefundedAtNil(b bool)`

 SetRefundedAtNil sets the value for RefundedAt to be an explicit nil

### UnsetRefundedAt
`func (o *RefundRetryResponseData) UnsetRefundedAt()`

UnsetRefundedAt ensures that no value is present for RefundedAt, not even an explicit nil
### GetExpectedAt

`func (o *RefundRetryResponseData) GetExpectedAt() string`

GetExpectedAt returns the ExpectedAt field if non-nil, zero value otherwise.

### GetExpectedAtOk

`func (o *RefundRetryResponseData) GetExpectedAtOk() (*string, bool)`

GetExpectedAtOk returns a tuple with the ExpectedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpectedAt

`func (o *RefundRetryResponseData) SetExpectedAt(v string)`

SetExpectedAt sets ExpectedAt field to given value.


### GetChannel

`func (o *RefundRetryResponseData) GetChannel() string`

GetChannel returns the Channel field if non-nil, zero value otherwise.

### GetChannelOk

`func (o *RefundRetryResponseData) GetChannelOk() (*string, bool)`

GetChannelOk returns a tuple with the Channel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannel

`func (o *RefundRetryResponseData) SetChannel(v string)`

SetChannel sets Channel field to given value.


### GetRefundedBy

`func (o *RefundRetryResponseData) GetRefundedBy() string`

GetRefundedBy returns the RefundedBy field if non-nil, zero value otherwise.

### GetRefundedByOk

`func (o *RefundRetryResponseData) GetRefundedByOk() (*string, bool)`

GetRefundedByOk returns a tuple with the RefundedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundedBy

`func (o *RefundRetryResponseData) SetRefundedBy(v string)`

SetRefundedBy sets RefundedBy field to given value.


### GetCustomerNote

`func (o *RefundRetryResponseData) GetCustomerNote() string`

GetCustomerNote returns the CustomerNote field if non-nil, zero value otherwise.

### GetCustomerNoteOk

`func (o *RefundRetryResponseData) GetCustomerNoteOk() (*string, bool)`

GetCustomerNoteOk returns a tuple with the CustomerNote field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerNote

`func (o *RefundRetryResponseData) SetCustomerNote(v string)`

SetCustomerNote sets CustomerNote field to given value.


### GetMerchantNote

`func (o *RefundRetryResponseData) GetMerchantNote() string`

GetMerchantNote returns the MerchantNote field if non-nil, zero value otherwise.

### GetMerchantNoteOk

`func (o *RefundRetryResponseData) GetMerchantNoteOk() (*string, bool)`

GetMerchantNoteOk returns a tuple with the MerchantNote field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMerchantNote

`func (o *RefundRetryResponseData) SetMerchantNote(v string)`

SetMerchantNote sets MerchantNote field to given value.


### GetDeductedAmount

`func (o *RefundRetryResponseData) GetDeductedAmount() float32`

GetDeductedAmount returns the DeductedAmount field if non-nil, zero value otherwise.

### GetDeductedAmountOk

`func (o *RefundRetryResponseData) GetDeductedAmountOk() (*float32, bool)`

GetDeductedAmountOk returns a tuple with the DeductedAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeductedAmount

`func (o *RefundRetryResponseData) SetDeductedAmount(v float32)`

SetDeductedAmount sets DeductedAmount field to given value.


### GetFullyDeducted

`func (o *RefundRetryResponseData) GetFullyDeducted() bool`

GetFullyDeducted returns the FullyDeducted field if non-nil, zero value otherwise.

### GetFullyDeductedOk

`func (o *RefundRetryResponseData) GetFullyDeductedOk() (*bool, bool)`

GetFullyDeductedOk returns a tuple with the FullyDeducted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullyDeducted

`func (o *RefundRetryResponseData) SetFullyDeducted(v bool)`

SetFullyDeducted sets FullyDeducted field to given value.


### GetBankReference

`func (o *RefundRetryResponseData) GetBankReference() string`

GetBankReference returns the BankReference field if non-nil, zero value otherwise.

### GetBankReferenceOk

`func (o *RefundRetryResponseData) GetBankReferenceOk() (*string, bool)`

GetBankReferenceOk returns a tuple with the BankReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBankReference

`func (o *RefundRetryResponseData) SetBankReference(v string)`

SetBankReference sets BankReference field to given value.


### SetBankReferenceNil

`func (o *RefundRetryResponseData) SetBankReferenceNil(b bool)`

 SetBankReferenceNil sets the value for BankReference to be an explicit nil

### UnsetBankReference
`func (o *RefundRetryResponseData) UnsetBankReference()`

UnsetBankReference ensures that no value is present for BankReference, not even an explicit nil
### GetReason

`func (o *RefundRetryResponseData) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *RefundRetryResponseData) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *RefundRetryResponseData) SetReason(v string)`

SetReason sets Reason field to given value.


### GetCustomer

`func (o *RefundRetryResponseData) GetCustomer() map[string]interface{}`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *RefundRetryResponseData) GetCustomerOk() (*map[string]interface{}, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *RefundRetryResponseData) SetCustomer(v map[string]interface{})`

SetCustomer sets Customer field to given value.


### GetInitiatedBy

`func (o *RefundRetryResponseData) GetInitiatedBy() string`

GetInitiatedBy returns the InitiatedBy field if non-nil, zero value otherwise.

### GetInitiatedByOk

`func (o *RefundRetryResponseData) GetInitiatedByOk() (*string, bool)`

GetInitiatedByOk returns a tuple with the InitiatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInitiatedBy

`func (o *RefundRetryResponseData) SetInitiatedBy(v string)`

SetInitiatedBy sets InitiatedBy field to given value.


### GetReversedAt

`func (o *RefundRetryResponseData) GetReversedAt() string`

GetReversedAt returns the ReversedAt field if non-nil, zero value otherwise.

### GetReversedAtOk

`func (o *RefundRetryResponseData) GetReversedAtOk() (*string, bool)`

GetReversedAtOk returns a tuple with the ReversedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReversedAt

`func (o *RefundRetryResponseData) SetReversedAt(v string)`

SetReversedAt sets ReversedAt field to given value.


### SetReversedAtNil

`func (o *RefundRetryResponseData) SetReversedAtNil(b bool)`

 SetReversedAtNil sets the value for ReversedAt to be an explicit nil

### UnsetReversedAt
`func (o *RefundRetryResponseData) UnsetReversedAt()`

UnsetReversedAt ensures that no value is present for ReversedAt, not even an explicit nil
### GetSessionId

`func (o *RefundRetryResponseData) GetSessionId() string`

GetSessionId returns the SessionId field if non-nil, zero value otherwise.

### GetSessionIdOk

`func (o *RefundRetryResponseData) GetSessionIdOk() (*string, bool)`

GetSessionIdOk returns a tuple with the SessionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSessionId

`func (o *RefundRetryResponseData) SetSessionId(v string)`

SetSessionId sets SessionId field to given value.


### SetSessionIdNil

`func (o *RefundRetryResponseData) SetSessionIdNil(b bool)`

 SetSessionIdNil sets the value for SessionId to be an explicit nil

### UnsetSessionId
`func (o *RefundRetryResponseData) UnsetSessionId()`

UnsetSessionId ensures that no value is present for SessionId, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


