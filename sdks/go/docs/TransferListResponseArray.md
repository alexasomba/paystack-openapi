# TransferListResponseArray

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | **int32** |  | 
**CreatedAt** | **string** |  | 
**Currency** | **string** |  | 
**Domain** | **string** |  | 
**Failures** | **map[string]interface{}** |  | 
**Id** | **int32** |  | 
**Integration** | **int32** |  | 
**Reason** | **string** |  | 
**Reference** | **string** |  | 
**Source** | **string** |  | 
**SourceDetails** | **map[string]interface{}** |  | 
**Status** | **string** |  | 
**TitanCode** | **map[string]interface{}** |  | 
**TransferCode** | **string** |  | 
**Request** | **int32** |  | 
**TransferredAt** | **map[string]interface{}** |  | 
**UpdatedAt** | **string** |  | 
**Recipient** | [**TransferListResponseArrayRecipient**](TransferListResponseArrayRecipient.md) |  | 
**Session** | [**TransferListResponseArraySession**](TransferListResponseArraySession.md) |  | 
**FeeCharged** | **int32** |  | 
**FeesBreakdown** | **NullableInt32** |  | 

## Methods

### NewTransferListResponseArray

`func NewTransferListResponseArray(amount int32, createdAt string, currency string, domain string, failures map[string]interface{}, id int32, integration int32, reason string, reference string, source string, sourceDetails map[string]interface{}, status string, titanCode map[string]interface{}, transferCode string, request int32, transferredAt map[string]interface{}, updatedAt string, recipient TransferListResponseArrayRecipient, session TransferListResponseArraySession, feeCharged int32, feesBreakdown NullableInt32, ) *TransferListResponseArray`

NewTransferListResponseArray instantiates a new TransferListResponseArray object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransferListResponseArrayWithDefaults

`func NewTransferListResponseArrayWithDefaults() *TransferListResponseArray`

NewTransferListResponseArrayWithDefaults instantiates a new TransferListResponseArray object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *TransferListResponseArray) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *TransferListResponseArray) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *TransferListResponseArray) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetCreatedAt

`func (o *TransferListResponseArray) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *TransferListResponseArray) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *TransferListResponseArray) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetCurrency

`func (o *TransferListResponseArray) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *TransferListResponseArray) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *TransferListResponseArray) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetDomain

`func (o *TransferListResponseArray) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *TransferListResponseArray) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *TransferListResponseArray) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetFailures

`func (o *TransferListResponseArray) GetFailures() map[string]interface{}`

GetFailures returns the Failures field if non-nil, zero value otherwise.

### GetFailuresOk

`func (o *TransferListResponseArray) GetFailuresOk() (*map[string]interface{}, bool)`

GetFailuresOk returns a tuple with the Failures field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFailures

`func (o *TransferListResponseArray) SetFailures(v map[string]interface{})`

SetFailures sets Failures field to given value.


### SetFailuresNil

`func (o *TransferListResponseArray) SetFailuresNil(b bool)`

 SetFailuresNil sets the value for Failures to be an explicit nil

### UnsetFailures
`func (o *TransferListResponseArray) UnsetFailures()`

UnsetFailures ensures that no value is present for Failures, not even an explicit nil
### GetId

`func (o *TransferListResponseArray) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *TransferListResponseArray) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *TransferListResponseArray) SetId(v int32)`

SetId sets Id field to given value.


### GetIntegration

`func (o *TransferListResponseArray) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *TransferListResponseArray) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *TransferListResponseArray) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetReason

`func (o *TransferListResponseArray) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *TransferListResponseArray) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *TransferListResponseArray) SetReason(v string)`

SetReason sets Reason field to given value.


### GetReference

`func (o *TransferListResponseArray) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *TransferListResponseArray) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *TransferListResponseArray) SetReference(v string)`

SetReference sets Reference field to given value.


### GetSource

`func (o *TransferListResponseArray) GetSource() string`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *TransferListResponseArray) GetSourceOk() (*string, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *TransferListResponseArray) SetSource(v string)`

SetSource sets Source field to given value.


### GetSourceDetails

`func (o *TransferListResponseArray) GetSourceDetails() map[string]interface{}`

GetSourceDetails returns the SourceDetails field if non-nil, zero value otherwise.

### GetSourceDetailsOk

`func (o *TransferListResponseArray) GetSourceDetailsOk() (*map[string]interface{}, bool)`

GetSourceDetailsOk returns a tuple with the SourceDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceDetails

`func (o *TransferListResponseArray) SetSourceDetails(v map[string]interface{})`

SetSourceDetails sets SourceDetails field to given value.


### SetSourceDetailsNil

`func (o *TransferListResponseArray) SetSourceDetailsNil(b bool)`

 SetSourceDetailsNil sets the value for SourceDetails to be an explicit nil

### UnsetSourceDetails
`func (o *TransferListResponseArray) UnsetSourceDetails()`

UnsetSourceDetails ensures that no value is present for SourceDetails, not even an explicit nil
### GetStatus

`func (o *TransferListResponseArray) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *TransferListResponseArray) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *TransferListResponseArray) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetTitanCode

`func (o *TransferListResponseArray) GetTitanCode() map[string]interface{}`

GetTitanCode returns the TitanCode field if non-nil, zero value otherwise.

### GetTitanCodeOk

`func (o *TransferListResponseArray) GetTitanCodeOk() (*map[string]interface{}, bool)`

GetTitanCodeOk returns a tuple with the TitanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitanCode

`func (o *TransferListResponseArray) SetTitanCode(v map[string]interface{})`

SetTitanCode sets TitanCode field to given value.


### SetTitanCodeNil

`func (o *TransferListResponseArray) SetTitanCodeNil(b bool)`

 SetTitanCodeNil sets the value for TitanCode to be an explicit nil

### UnsetTitanCode
`func (o *TransferListResponseArray) UnsetTitanCode()`

UnsetTitanCode ensures that no value is present for TitanCode, not even an explicit nil
### GetTransferCode

`func (o *TransferListResponseArray) GetTransferCode() string`

GetTransferCode returns the TransferCode field if non-nil, zero value otherwise.

### GetTransferCodeOk

`func (o *TransferListResponseArray) GetTransferCodeOk() (*string, bool)`

GetTransferCodeOk returns a tuple with the TransferCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransferCode

`func (o *TransferListResponseArray) SetTransferCode(v string)`

SetTransferCode sets TransferCode field to given value.


### GetRequest

`func (o *TransferListResponseArray) GetRequest() int32`

GetRequest returns the Request field if non-nil, zero value otherwise.

### GetRequestOk

`func (o *TransferListResponseArray) GetRequestOk() (*int32, bool)`

GetRequestOk returns a tuple with the Request field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequest

`func (o *TransferListResponseArray) SetRequest(v int32)`

SetRequest sets Request field to given value.


### GetTransferredAt

`func (o *TransferListResponseArray) GetTransferredAt() map[string]interface{}`

GetTransferredAt returns the TransferredAt field if non-nil, zero value otherwise.

### GetTransferredAtOk

`func (o *TransferListResponseArray) GetTransferredAtOk() (*map[string]interface{}, bool)`

GetTransferredAtOk returns a tuple with the TransferredAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransferredAt

`func (o *TransferListResponseArray) SetTransferredAt(v map[string]interface{})`

SetTransferredAt sets TransferredAt field to given value.


### SetTransferredAtNil

`func (o *TransferListResponseArray) SetTransferredAtNil(b bool)`

 SetTransferredAtNil sets the value for TransferredAt to be an explicit nil

### UnsetTransferredAt
`func (o *TransferListResponseArray) UnsetTransferredAt()`

UnsetTransferredAt ensures that no value is present for TransferredAt, not even an explicit nil
### GetUpdatedAt

`func (o *TransferListResponseArray) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *TransferListResponseArray) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *TransferListResponseArray) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.


### GetRecipient

`func (o *TransferListResponseArray) GetRecipient() TransferListResponseArrayRecipient`

GetRecipient returns the Recipient field if non-nil, zero value otherwise.

### GetRecipientOk

`func (o *TransferListResponseArray) GetRecipientOk() (*TransferListResponseArrayRecipient, bool)`

GetRecipientOk returns a tuple with the Recipient field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipient

`func (o *TransferListResponseArray) SetRecipient(v TransferListResponseArrayRecipient)`

SetRecipient sets Recipient field to given value.


### GetSession

`func (o *TransferListResponseArray) GetSession() TransferListResponseArraySession`

GetSession returns the Session field if non-nil, zero value otherwise.

### GetSessionOk

`func (o *TransferListResponseArray) GetSessionOk() (*TransferListResponseArraySession, bool)`

GetSessionOk returns a tuple with the Session field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSession

`func (o *TransferListResponseArray) SetSession(v TransferListResponseArraySession)`

SetSession sets Session field to given value.


### GetFeeCharged

`func (o *TransferListResponseArray) GetFeeCharged() int32`

GetFeeCharged returns the FeeCharged field if non-nil, zero value otherwise.

### GetFeeChargedOk

`func (o *TransferListResponseArray) GetFeeChargedOk() (*int32, bool)`

GetFeeChargedOk returns a tuple with the FeeCharged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeeCharged

`func (o *TransferListResponseArray) SetFeeCharged(v int32)`

SetFeeCharged sets FeeCharged field to given value.


### GetFeesBreakdown

`func (o *TransferListResponseArray) GetFeesBreakdown() int32`

GetFeesBreakdown returns the FeesBreakdown field if non-nil, zero value otherwise.

### GetFeesBreakdownOk

`func (o *TransferListResponseArray) GetFeesBreakdownOk() (*int32, bool)`

GetFeesBreakdownOk returns a tuple with the FeesBreakdown field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeesBreakdown

`func (o *TransferListResponseArray) SetFeesBreakdown(v int32)`

SetFeesBreakdown sets FeesBreakdown field to given value.


### SetFeesBreakdownNil

`func (o *TransferListResponseArray) SetFeesBreakdownNil(b bool)`

 SetFeesBreakdownNil sets the value for FeesBreakdown to be an explicit nil

### UnsetFeesBreakdown
`func (o *TransferListResponseArray) UnsetFeesBreakdown()`

UnsetFeesBreakdown ensures that no value is present for FeesBreakdown, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


