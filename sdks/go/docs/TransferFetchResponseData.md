# TransferFetchResponseData

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
**Request** | **int32** |  | 
**TransferredAt** | **interface{}** |  | 
**UpdatedAt** | **string** |  | 
**Recipient** | [**TransferListResponseArrayRecipient**](TransferListResponseArrayRecipient.md) |  | 
**Session** | [**TransferListResponseArraySession**](TransferListResponseArraySession.md) |  | 
**FeeCharged** | **int32** |  | 
**FeesBreakdown** | [**[]TransferFeesBreakdownArray**](TransferFeesBreakdownArray.md) |  | 
**GatewayResponse** | **NullableString** |  | 

## Methods

### NewTransferFetchResponseData

`func NewTransferFetchResponseData(amount int32, createdAt string, currency string, domain string, failures interface{}, id int32, integration int32, reason string, reference string, source string, sourceDetails interface{}, status string, titanCode interface{}, transferCode string, request int32, transferredAt interface{}, updatedAt string, recipient TransferListResponseArrayRecipient, session TransferListResponseArraySession, feeCharged int32, feesBreakdown []TransferFeesBreakdownArray, gatewayResponse NullableString, ) *TransferFetchResponseData`

NewTransferFetchResponseData instantiates a new TransferFetchResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransferFetchResponseDataWithDefaults

`func NewTransferFetchResponseDataWithDefaults() *TransferFetchResponseData`

NewTransferFetchResponseDataWithDefaults instantiates a new TransferFetchResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *TransferFetchResponseData) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *TransferFetchResponseData) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *TransferFetchResponseData) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetCreatedAt

`func (o *TransferFetchResponseData) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *TransferFetchResponseData) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *TransferFetchResponseData) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetCurrency

`func (o *TransferFetchResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *TransferFetchResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *TransferFetchResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetDomain

`func (o *TransferFetchResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *TransferFetchResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *TransferFetchResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetFailures

`func (o *TransferFetchResponseData) GetFailures() interface{}`

GetFailures returns the Failures field if non-nil, zero value otherwise.

### GetFailuresOk

`func (o *TransferFetchResponseData) GetFailuresOk() (*interface{}, bool)`

GetFailuresOk returns a tuple with the Failures field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFailures

`func (o *TransferFetchResponseData) SetFailures(v interface{})`

SetFailures sets Failures field to given value.


### SetFailuresNil

`func (o *TransferFetchResponseData) SetFailuresNil(b bool)`

 SetFailuresNil sets the value for Failures to be an explicit nil

### UnsetFailures
`func (o *TransferFetchResponseData) UnsetFailures()`

UnsetFailures ensures that no value is present for Failures, not even an explicit nil
### GetId

`func (o *TransferFetchResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *TransferFetchResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *TransferFetchResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetIntegration

`func (o *TransferFetchResponseData) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *TransferFetchResponseData) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *TransferFetchResponseData) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetReason

`func (o *TransferFetchResponseData) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *TransferFetchResponseData) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *TransferFetchResponseData) SetReason(v string)`

SetReason sets Reason field to given value.


### GetReference

`func (o *TransferFetchResponseData) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *TransferFetchResponseData) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *TransferFetchResponseData) SetReference(v string)`

SetReference sets Reference field to given value.


### GetSource

`func (o *TransferFetchResponseData) GetSource() string`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *TransferFetchResponseData) GetSourceOk() (*string, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *TransferFetchResponseData) SetSource(v string)`

SetSource sets Source field to given value.


### GetSourceDetails

`func (o *TransferFetchResponseData) GetSourceDetails() interface{}`

GetSourceDetails returns the SourceDetails field if non-nil, zero value otherwise.

### GetSourceDetailsOk

`func (o *TransferFetchResponseData) GetSourceDetailsOk() (*interface{}, bool)`

GetSourceDetailsOk returns a tuple with the SourceDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceDetails

`func (o *TransferFetchResponseData) SetSourceDetails(v interface{})`

SetSourceDetails sets SourceDetails field to given value.


### SetSourceDetailsNil

`func (o *TransferFetchResponseData) SetSourceDetailsNil(b bool)`

 SetSourceDetailsNil sets the value for SourceDetails to be an explicit nil

### UnsetSourceDetails
`func (o *TransferFetchResponseData) UnsetSourceDetails()`

UnsetSourceDetails ensures that no value is present for SourceDetails, not even an explicit nil
### GetStatus

`func (o *TransferFetchResponseData) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *TransferFetchResponseData) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *TransferFetchResponseData) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetTitanCode

`func (o *TransferFetchResponseData) GetTitanCode() interface{}`

GetTitanCode returns the TitanCode field if non-nil, zero value otherwise.

### GetTitanCodeOk

`func (o *TransferFetchResponseData) GetTitanCodeOk() (*interface{}, bool)`

GetTitanCodeOk returns a tuple with the TitanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitanCode

`func (o *TransferFetchResponseData) SetTitanCode(v interface{})`

SetTitanCode sets TitanCode field to given value.


### SetTitanCodeNil

`func (o *TransferFetchResponseData) SetTitanCodeNil(b bool)`

 SetTitanCodeNil sets the value for TitanCode to be an explicit nil

### UnsetTitanCode
`func (o *TransferFetchResponseData) UnsetTitanCode()`

UnsetTitanCode ensures that no value is present for TitanCode, not even an explicit nil
### GetTransferCode

`func (o *TransferFetchResponseData) GetTransferCode() string`

GetTransferCode returns the TransferCode field if non-nil, zero value otherwise.

### GetTransferCodeOk

`func (o *TransferFetchResponseData) GetTransferCodeOk() (*string, bool)`

GetTransferCodeOk returns a tuple with the TransferCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransferCode

`func (o *TransferFetchResponseData) SetTransferCode(v string)`

SetTransferCode sets TransferCode field to given value.


### GetRequest

`func (o *TransferFetchResponseData) GetRequest() int32`

GetRequest returns the Request field if non-nil, zero value otherwise.

### GetRequestOk

`func (o *TransferFetchResponseData) GetRequestOk() (*int32, bool)`

GetRequestOk returns a tuple with the Request field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequest

`func (o *TransferFetchResponseData) SetRequest(v int32)`

SetRequest sets Request field to given value.


### GetTransferredAt

`func (o *TransferFetchResponseData) GetTransferredAt() interface{}`

GetTransferredAt returns the TransferredAt field if non-nil, zero value otherwise.

### GetTransferredAtOk

`func (o *TransferFetchResponseData) GetTransferredAtOk() (*interface{}, bool)`

GetTransferredAtOk returns a tuple with the TransferredAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransferredAt

`func (o *TransferFetchResponseData) SetTransferredAt(v interface{})`

SetTransferredAt sets TransferredAt field to given value.


### SetTransferredAtNil

`func (o *TransferFetchResponseData) SetTransferredAtNil(b bool)`

 SetTransferredAtNil sets the value for TransferredAt to be an explicit nil

### UnsetTransferredAt
`func (o *TransferFetchResponseData) UnsetTransferredAt()`

UnsetTransferredAt ensures that no value is present for TransferredAt, not even an explicit nil
### GetUpdatedAt

`func (o *TransferFetchResponseData) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *TransferFetchResponseData) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *TransferFetchResponseData) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.


### GetRecipient

`func (o *TransferFetchResponseData) GetRecipient() TransferListResponseArrayRecipient`

GetRecipient returns the Recipient field if non-nil, zero value otherwise.

### GetRecipientOk

`func (o *TransferFetchResponseData) GetRecipientOk() (*TransferListResponseArrayRecipient, bool)`

GetRecipientOk returns a tuple with the Recipient field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipient

`func (o *TransferFetchResponseData) SetRecipient(v TransferListResponseArrayRecipient)`

SetRecipient sets Recipient field to given value.


### GetSession

`func (o *TransferFetchResponseData) GetSession() TransferListResponseArraySession`

GetSession returns the Session field if non-nil, zero value otherwise.

### GetSessionOk

`func (o *TransferFetchResponseData) GetSessionOk() (*TransferListResponseArraySession, bool)`

GetSessionOk returns a tuple with the Session field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSession

`func (o *TransferFetchResponseData) SetSession(v TransferListResponseArraySession)`

SetSession sets Session field to given value.


### GetFeeCharged

`func (o *TransferFetchResponseData) GetFeeCharged() int32`

GetFeeCharged returns the FeeCharged field if non-nil, zero value otherwise.

### GetFeeChargedOk

`func (o *TransferFetchResponseData) GetFeeChargedOk() (*int32, bool)`

GetFeeChargedOk returns a tuple with the FeeCharged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeeCharged

`func (o *TransferFetchResponseData) SetFeeCharged(v int32)`

SetFeeCharged sets FeeCharged field to given value.


### GetFeesBreakdown

`func (o *TransferFetchResponseData) GetFeesBreakdown() []TransferFeesBreakdownArray`

GetFeesBreakdown returns the FeesBreakdown field if non-nil, zero value otherwise.

### GetFeesBreakdownOk

`func (o *TransferFetchResponseData) GetFeesBreakdownOk() (*[]TransferFeesBreakdownArray, bool)`

GetFeesBreakdownOk returns a tuple with the FeesBreakdown field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeesBreakdown

`func (o *TransferFetchResponseData) SetFeesBreakdown(v []TransferFeesBreakdownArray)`

SetFeesBreakdown sets FeesBreakdown field to given value.


### SetFeesBreakdownNil

`func (o *TransferFetchResponseData) SetFeesBreakdownNil(b bool)`

 SetFeesBreakdownNil sets the value for FeesBreakdown to be an explicit nil

### UnsetFeesBreakdown
`func (o *TransferFetchResponseData) UnsetFeesBreakdown()`

UnsetFeesBreakdown ensures that no value is present for FeesBreakdown, not even an explicit nil
### GetGatewayResponse

`func (o *TransferFetchResponseData) GetGatewayResponse() string`

GetGatewayResponse returns the GatewayResponse field if non-nil, zero value otherwise.

### GetGatewayResponseOk

`func (o *TransferFetchResponseData) GetGatewayResponseOk() (*string, bool)`

GetGatewayResponseOk returns a tuple with the GatewayResponse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGatewayResponse

`func (o *TransferFetchResponseData) SetGatewayResponse(v string)`

SetGatewayResponse sets GatewayResponse field to given value.


### SetGatewayResponseNil

`func (o *TransferFetchResponseData) SetGatewayResponseNil(b bool)`

 SetGatewayResponseNil sets the value for GatewayResponse to be an explicit nil

### UnsetGatewayResponse
`func (o *TransferFetchResponseData) UnsetGatewayResponse()`

UnsetGatewayResponse ensures that no value is present for GatewayResponse, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


