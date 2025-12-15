# TransferVerifyResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | **int32** |  | 
**CreatedAt** | **string** |  | 
**Currency** | **string** |  | 
**Domain** | **string** |  | 
**Failures** | **interface{}** |  | 
**Id** | **int32** |  | 
**Integration** | **int32** |  | 
**Reason** | **string** |  | 
**Reference** | **string** |  | 
**Source** | **string** |  | 
**SourceDetails** | **interface{}** |  | 
**Status** | **string** |  | 
**TitanCode** | **interface{}** |  | 
**TransferCode** | **string** |  | 
**TransferredAt** | **interface{}** |  | 
**UpdatedAt** | **string** |  | 
**Recipient** | [**TransferVerifyResponseDataRecipient**](TransferVerifyResponseDataRecipient.md) |  | 
**Session** | [**TransferListResponseArraySession**](TransferListResponseArraySession.md) |  | 
**GatewayResponse** | **NullableString** |  | 

## Methods

### NewTransferVerifyResponseData

`func NewTransferVerifyResponseData(amount int32, createdAt string, currency string, domain string, failures interface{}, id int32, integration int32, reason string, reference string, source string, sourceDetails interface{}, status string, titanCode interface{}, transferCode string, transferredAt interface{}, updatedAt string, recipient TransferVerifyResponseDataRecipient, session TransferListResponseArraySession, gatewayResponse NullableString, ) *TransferVerifyResponseData`

NewTransferVerifyResponseData instantiates a new TransferVerifyResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransferVerifyResponseDataWithDefaults

`func NewTransferVerifyResponseDataWithDefaults() *TransferVerifyResponseData`

NewTransferVerifyResponseDataWithDefaults instantiates a new TransferVerifyResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *TransferVerifyResponseData) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *TransferVerifyResponseData) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *TransferVerifyResponseData) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetCreatedAt

`func (o *TransferVerifyResponseData) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *TransferVerifyResponseData) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *TransferVerifyResponseData) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetCurrency

`func (o *TransferVerifyResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *TransferVerifyResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *TransferVerifyResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetDomain

`func (o *TransferVerifyResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *TransferVerifyResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *TransferVerifyResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetFailures

`func (o *TransferVerifyResponseData) GetFailures() interface{}`

GetFailures returns the Failures field if non-nil, zero value otherwise.

### GetFailuresOk

`func (o *TransferVerifyResponseData) GetFailuresOk() (*interface{}, bool)`

GetFailuresOk returns a tuple with the Failures field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFailures

`func (o *TransferVerifyResponseData) SetFailures(v interface{})`

SetFailures sets Failures field to given value.


### SetFailuresNil

`func (o *TransferVerifyResponseData) SetFailuresNil(b bool)`

 SetFailuresNil sets the value for Failures to be an explicit nil

### UnsetFailures
`func (o *TransferVerifyResponseData) UnsetFailures()`

UnsetFailures ensures that no value is present for Failures, not even an explicit nil
### GetId

`func (o *TransferVerifyResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *TransferVerifyResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *TransferVerifyResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetIntegration

`func (o *TransferVerifyResponseData) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *TransferVerifyResponseData) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *TransferVerifyResponseData) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetReason

`func (o *TransferVerifyResponseData) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *TransferVerifyResponseData) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *TransferVerifyResponseData) SetReason(v string)`

SetReason sets Reason field to given value.


### GetReference

`func (o *TransferVerifyResponseData) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *TransferVerifyResponseData) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *TransferVerifyResponseData) SetReference(v string)`

SetReference sets Reference field to given value.


### GetSource

`func (o *TransferVerifyResponseData) GetSource() string`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *TransferVerifyResponseData) GetSourceOk() (*string, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *TransferVerifyResponseData) SetSource(v string)`

SetSource sets Source field to given value.


### GetSourceDetails

`func (o *TransferVerifyResponseData) GetSourceDetails() interface{}`

GetSourceDetails returns the SourceDetails field if non-nil, zero value otherwise.

### GetSourceDetailsOk

`func (o *TransferVerifyResponseData) GetSourceDetailsOk() (*interface{}, bool)`

GetSourceDetailsOk returns a tuple with the SourceDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceDetails

`func (o *TransferVerifyResponseData) SetSourceDetails(v interface{})`

SetSourceDetails sets SourceDetails field to given value.


### SetSourceDetailsNil

`func (o *TransferVerifyResponseData) SetSourceDetailsNil(b bool)`

 SetSourceDetailsNil sets the value for SourceDetails to be an explicit nil

### UnsetSourceDetails
`func (o *TransferVerifyResponseData) UnsetSourceDetails()`

UnsetSourceDetails ensures that no value is present for SourceDetails, not even an explicit nil
### GetStatus

`func (o *TransferVerifyResponseData) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *TransferVerifyResponseData) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *TransferVerifyResponseData) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetTitanCode

`func (o *TransferVerifyResponseData) GetTitanCode() interface{}`

GetTitanCode returns the TitanCode field if non-nil, zero value otherwise.

### GetTitanCodeOk

`func (o *TransferVerifyResponseData) GetTitanCodeOk() (*interface{}, bool)`

GetTitanCodeOk returns a tuple with the TitanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitanCode

`func (o *TransferVerifyResponseData) SetTitanCode(v interface{})`

SetTitanCode sets TitanCode field to given value.


### SetTitanCodeNil

`func (o *TransferVerifyResponseData) SetTitanCodeNil(b bool)`

 SetTitanCodeNil sets the value for TitanCode to be an explicit nil

### UnsetTitanCode
`func (o *TransferVerifyResponseData) UnsetTitanCode()`

UnsetTitanCode ensures that no value is present for TitanCode, not even an explicit nil
### GetTransferCode

`func (o *TransferVerifyResponseData) GetTransferCode() string`

GetTransferCode returns the TransferCode field if non-nil, zero value otherwise.

### GetTransferCodeOk

`func (o *TransferVerifyResponseData) GetTransferCodeOk() (*string, bool)`

GetTransferCodeOk returns a tuple with the TransferCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransferCode

`func (o *TransferVerifyResponseData) SetTransferCode(v string)`

SetTransferCode sets TransferCode field to given value.


### GetTransferredAt

`func (o *TransferVerifyResponseData) GetTransferredAt() interface{}`

GetTransferredAt returns the TransferredAt field if non-nil, zero value otherwise.

### GetTransferredAtOk

`func (o *TransferVerifyResponseData) GetTransferredAtOk() (*interface{}, bool)`

GetTransferredAtOk returns a tuple with the TransferredAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransferredAt

`func (o *TransferVerifyResponseData) SetTransferredAt(v interface{})`

SetTransferredAt sets TransferredAt field to given value.


### SetTransferredAtNil

`func (o *TransferVerifyResponseData) SetTransferredAtNil(b bool)`

 SetTransferredAtNil sets the value for TransferredAt to be an explicit nil

### UnsetTransferredAt
`func (o *TransferVerifyResponseData) UnsetTransferredAt()`

UnsetTransferredAt ensures that no value is present for TransferredAt, not even an explicit nil
### GetUpdatedAt

`func (o *TransferVerifyResponseData) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *TransferVerifyResponseData) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *TransferVerifyResponseData) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.


### GetRecipient

`func (o *TransferVerifyResponseData) GetRecipient() TransferVerifyResponseDataRecipient`

GetRecipient returns the Recipient field if non-nil, zero value otherwise.

### GetRecipientOk

`func (o *TransferVerifyResponseData) GetRecipientOk() (*TransferVerifyResponseDataRecipient, bool)`

GetRecipientOk returns a tuple with the Recipient field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipient

`func (o *TransferVerifyResponseData) SetRecipient(v TransferVerifyResponseDataRecipient)`

SetRecipient sets Recipient field to given value.


### GetSession

`func (o *TransferVerifyResponseData) GetSession() TransferListResponseArraySession`

GetSession returns the Session field if non-nil, zero value otherwise.

### GetSessionOk

`func (o *TransferVerifyResponseData) GetSessionOk() (*TransferListResponseArraySession, bool)`

GetSessionOk returns a tuple with the Session field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSession

`func (o *TransferVerifyResponseData) SetSession(v TransferListResponseArraySession)`

SetSession sets Session field to given value.


### GetGatewayResponse

`func (o *TransferVerifyResponseData) GetGatewayResponse() string`

GetGatewayResponse returns the GatewayResponse field if non-nil, zero value otherwise.

### GetGatewayResponseOk

`func (o *TransferVerifyResponseData) GetGatewayResponseOk() (*string, bool)`

GetGatewayResponseOk returns a tuple with the GatewayResponse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGatewayResponse

`func (o *TransferVerifyResponseData) SetGatewayResponse(v string)`

SetGatewayResponse sets GatewayResponse field to given value.


### SetGatewayResponseNil

`func (o *TransferVerifyResponseData) SetGatewayResponseNil(b bool)`

 SetGatewayResponseNil sets the value for GatewayResponse to be an explicit nil

### UnsetGatewayResponse
`func (o *TransferVerifyResponseData) UnsetGatewayResponse()`

UnsetGatewayResponse ensures that no value is present for GatewayResponse, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


