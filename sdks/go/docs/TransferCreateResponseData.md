# TransferCreateResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Transfersessionid** | **[]interface{}** |  | 
**Transfertrials** | **[]interface{}** |  | 
**Domain** | **string** |  | 
**Amount** | **int32** |  | 
**Currency** | **string** |  | 
**Reference** | **string** |  | 
**Source** | **string** |  | 
**SourceDetails** | **interface{}** |  | 
**Reason** | **string** |  | 
**Status** | **string** |  | 
**Failures** | **interface{}** |  | 
**TransferCode** | **string** |  | 
**TitanCode** | **interface{}** |  | 
**TransferredAt** | **interface{}** |  | 
**Id** | **int32** |  | 
**Integration** | **int32** |  | 
**Request** | **int32** |  | 
**Recipient** | **int32** |  | 
**CreatedAt** | **string** |  | 
**UpdatedAt** | **string** |  | 

## Methods

### NewTransferCreateResponseData

`func NewTransferCreateResponseData(transfersessionid []interface{}, transfertrials []interface{}, domain string, amount int32, currency string, reference string, source string, sourceDetails interface{}, reason string, status string, failures interface{}, transferCode string, titanCode interface{}, transferredAt interface{}, id int32, integration int32, request int32, recipient int32, createdAt string, updatedAt string, ) *TransferCreateResponseData`

NewTransferCreateResponseData instantiates a new TransferCreateResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransferCreateResponseDataWithDefaults

`func NewTransferCreateResponseDataWithDefaults() *TransferCreateResponseData`

NewTransferCreateResponseDataWithDefaults instantiates a new TransferCreateResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransfersessionid

`func (o *TransferCreateResponseData) GetTransfersessionid() []interface{}`

GetTransfersessionid returns the Transfersessionid field if non-nil, zero value otherwise.

### GetTransfersessionidOk

`func (o *TransferCreateResponseData) GetTransfersessionidOk() (*[]interface{}, bool)`

GetTransfersessionidOk returns a tuple with the Transfersessionid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransfersessionid

`func (o *TransferCreateResponseData) SetTransfersessionid(v []interface{})`

SetTransfersessionid sets Transfersessionid field to given value.


### GetTransfertrials

`func (o *TransferCreateResponseData) GetTransfertrials() []interface{}`

GetTransfertrials returns the Transfertrials field if non-nil, zero value otherwise.

### GetTransfertrialsOk

`func (o *TransferCreateResponseData) GetTransfertrialsOk() (*[]interface{}, bool)`

GetTransfertrialsOk returns a tuple with the Transfertrials field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransfertrials

`func (o *TransferCreateResponseData) SetTransfertrials(v []interface{})`

SetTransfertrials sets Transfertrials field to given value.


### GetDomain

`func (o *TransferCreateResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *TransferCreateResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *TransferCreateResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetAmount

`func (o *TransferCreateResponseData) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *TransferCreateResponseData) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *TransferCreateResponseData) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetCurrency

`func (o *TransferCreateResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *TransferCreateResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *TransferCreateResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetReference

`func (o *TransferCreateResponseData) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *TransferCreateResponseData) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *TransferCreateResponseData) SetReference(v string)`

SetReference sets Reference field to given value.


### GetSource

`func (o *TransferCreateResponseData) GetSource() string`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *TransferCreateResponseData) GetSourceOk() (*string, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *TransferCreateResponseData) SetSource(v string)`

SetSource sets Source field to given value.


### GetSourceDetails

`func (o *TransferCreateResponseData) GetSourceDetails() interface{}`

GetSourceDetails returns the SourceDetails field if non-nil, zero value otherwise.

### GetSourceDetailsOk

`func (o *TransferCreateResponseData) GetSourceDetailsOk() (*interface{}, bool)`

GetSourceDetailsOk returns a tuple with the SourceDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceDetails

`func (o *TransferCreateResponseData) SetSourceDetails(v interface{})`

SetSourceDetails sets SourceDetails field to given value.


### SetSourceDetailsNil

`func (o *TransferCreateResponseData) SetSourceDetailsNil(b bool)`

 SetSourceDetailsNil sets the value for SourceDetails to be an explicit nil

### UnsetSourceDetails
`func (o *TransferCreateResponseData) UnsetSourceDetails()`

UnsetSourceDetails ensures that no value is present for SourceDetails, not even an explicit nil
### GetReason

`func (o *TransferCreateResponseData) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *TransferCreateResponseData) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *TransferCreateResponseData) SetReason(v string)`

SetReason sets Reason field to given value.


### GetStatus

`func (o *TransferCreateResponseData) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *TransferCreateResponseData) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *TransferCreateResponseData) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetFailures

`func (o *TransferCreateResponseData) GetFailures() interface{}`

GetFailures returns the Failures field if non-nil, zero value otherwise.

### GetFailuresOk

`func (o *TransferCreateResponseData) GetFailuresOk() (*interface{}, bool)`

GetFailuresOk returns a tuple with the Failures field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFailures

`func (o *TransferCreateResponseData) SetFailures(v interface{})`

SetFailures sets Failures field to given value.


### SetFailuresNil

`func (o *TransferCreateResponseData) SetFailuresNil(b bool)`

 SetFailuresNil sets the value for Failures to be an explicit nil

### UnsetFailures
`func (o *TransferCreateResponseData) UnsetFailures()`

UnsetFailures ensures that no value is present for Failures, not even an explicit nil
### GetTransferCode

`func (o *TransferCreateResponseData) GetTransferCode() string`

GetTransferCode returns the TransferCode field if non-nil, zero value otherwise.

### GetTransferCodeOk

`func (o *TransferCreateResponseData) GetTransferCodeOk() (*string, bool)`

GetTransferCodeOk returns a tuple with the TransferCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransferCode

`func (o *TransferCreateResponseData) SetTransferCode(v string)`

SetTransferCode sets TransferCode field to given value.


### GetTitanCode

`func (o *TransferCreateResponseData) GetTitanCode() interface{}`

GetTitanCode returns the TitanCode field if non-nil, zero value otherwise.

### GetTitanCodeOk

`func (o *TransferCreateResponseData) GetTitanCodeOk() (*interface{}, bool)`

GetTitanCodeOk returns a tuple with the TitanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitanCode

`func (o *TransferCreateResponseData) SetTitanCode(v interface{})`

SetTitanCode sets TitanCode field to given value.


### SetTitanCodeNil

`func (o *TransferCreateResponseData) SetTitanCodeNil(b bool)`

 SetTitanCodeNil sets the value for TitanCode to be an explicit nil

### UnsetTitanCode
`func (o *TransferCreateResponseData) UnsetTitanCode()`

UnsetTitanCode ensures that no value is present for TitanCode, not even an explicit nil
### GetTransferredAt

`func (o *TransferCreateResponseData) GetTransferredAt() interface{}`

GetTransferredAt returns the TransferredAt field if non-nil, zero value otherwise.

### GetTransferredAtOk

`func (o *TransferCreateResponseData) GetTransferredAtOk() (*interface{}, bool)`

GetTransferredAtOk returns a tuple with the TransferredAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransferredAt

`func (o *TransferCreateResponseData) SetTransferredAt(v interface{})`

SetTransferredAt sets TransferredAt field to given value.


### SetTransferredAtNil

`func (o *TransferCreateResponseData) SetTransferredAtNil(b bool)`

 SetTransferredAtNil sets the value for TransferredAt to be an explicit nil

### UnsetTransferredAt
`func (o *TransferCreateResponseData) UnsetTransferredAt()`

UnsetTransferredAt ensures that no value is present for TransferredAt, not even an explicit nil
### GetId

`func (o *TransferCreateResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *TransferCreateResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *TransferCreateResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetIntegration

`func (o *TransferCreateResponseData) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *TransferCreateResponseData) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *TransferCreateResponseData) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetRequest

`func (o *TransferCreateResponseData) GetRequest() int32`

GetRequest returns the Request field if non-nil, zero value otherwise.

### GetRequestOk

`func (o *TransferCreateResponseData) GetRequestOk() (*int32, bool)`

GetRequestOk returns a tuple with the Request field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequest

`func (o *TransferCreateResponseData) SetRequest(v int32)`

SetRequest sets Request field to given value.


### GetRecipient

`func (o *TransferCreateResponseData) GetRecipient() int32`

GetRecipient returns the Recipient field if non-nil, zero value otherwise.

### GetRecipientOk

`func (o *TransferCreateResponseData) GetRecipientOk() (*int32, bool)`

GetRecipientOk returns a tuple with the Recipient field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipient

`func (o *TransferCreateResponseData) SetRecipient(v int32)`

SetRecipient sets Recipient field to given value.


### GetCreatedAt

`func (o *TransferCreateResponseData) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *TransferCreateResponseData) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *TransferCreateResponseData) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *TransferCreateResponseData) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *TransferCreateResponseData) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *TransferCreateResponseData) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


