# DisputeListTransactionResponseDataTransaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**Domain** | **string** |  | 
**Status** | **string** |  | 
**Reference** | **string** |  | 
**ReceiptNumber** | Pointer to **NullableInt32** |  | [optional] 
**Amount** | **int32** |  | 
**Message** | **map[string]interface{}** |  | 
**GatewayResponse** | **string** |  | 
**PaidAt** | Pointer to **NullableString** |  | [optional] 
**CreatedAt** | Pointer to **string** |  | [optional] 
**Channel** | **string** |  | 
**Currency** | **string** |  | 
**IpAddress** | **string** |  | 
**Metadata** | [**ChargeCreateResponseDataMetadata**](ChargeCreateResponseDataMetadata.md) |  | 
**Log** | [**NullableChargeAuthorizationResponseDataLog**](ChargeAuthorizationResponseDataLog.md) |  | 
**Fees** | **int32** |  | 
**FeesSplit** | **NullableInt32** |  | 
**Authorization** | [**DisputeFetchResponseDataTransactionAuthorization**](DisputeFetchResponseDataTransactionAuthorization.md) |  | 
**Customer** | [**DisputeFetchResponseDataTransactionCustomer**](DisputeFetchResponseDataTransactionCustomer.md) |  | 
**Plan** | **map[string]interface{}** |  | 
**Subaccount** | **map[string]interface{}** |  | 
**Split** | **map[string]interface{}** |  | 
**OrderId** | **map[string]interface{}** |  | 
**RequestedAmount** | **int32** |  | 
**PosTransactionData** | **map[string]interface{}** |  | 
**Source** | **map[string]interface{}** |  | 
**FeesBreakdown** | **map[string]interface{}** |  | 
**Connect** | **map[string]interface{}** |  | 

## Methods

### NewDisputeListTransactionResponseDataTransaction

`func NewDisputeListTransactionResponseDataTransaction(id int32, domain string, status string, reference string, amount int32, message map[string]interface{}, gatewayResponse string, channel string, currency string, ipAddress string, metadata ChargeCreateResponseDataMetadata, log NullableChargeAuthorizationResponseDataLog, fees int32, feesSplit NullableInt32, authorization DisputeFetchResponseDataTransactionAuthorization, customer DisputeFetchResponseDataTransactionCustomer, plan map[string]interface{}, subaccount map[string]interface{}, split map[string]interface{}, orderId map[string]interface{}, requestedAmount int32, posTransactionData map[string]interface{}, source map[string]interface{}, feesBreakdown map[string]interface{}, connect map[string]interface{}, ) *DisputeListTransactionResponseDataTransaction`

NewDisputeListTransactionResponseDataTransaction instantiates a new DisputeListTransactionResponseDataTransaction object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDisputeListTransactionResponseDataTransactionWithDefaults

`func NewDisputeListTransactionResponseDataTransactionWithDefaults() *DisputeListTransactionResponseDataTransaction`

NewDisputeListTransactionResponseDataTransactionWithDefaults instantiates a new DisputeListTransactionResponseDataTransaction object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *DisputeListTransactionResponseDataTransaction) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *DisputeListTransactionResponseDataTransaction) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *DisputeListTransactionResponseDataTransaction) SetId(v int32)`

SetId sets Id field to given value.


### GetDomain

`func (o *DisputeListTransactionResponseDataTransaction) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *DisputeListTransactionResponseDataTransaction) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *DisputeListTransactionResponseDataTransaction) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetStatus

`func (o *DisputeListTransactionResponseDataTransaction) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *DisputeListTransactionResponseDataTransaction) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *DisputeListTransactionResponseDataTransaction) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetReference

`func (o *DisputeListTransactionResponseDataTransaction) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *DisputeListTransactionResponseDataTransaction) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *DisputeListTransactionResponseDataTransaction) SetReference(v string)`

SetReference sets Reference field to given value.


### GetReceiptNumber

`func (o *DisputeListTransactionResponseDataTransaction) GetReceiptNumber() int32`

GetReceiptNumber returns the ReceiptNumber field if non-nil, zero value otherwise.

### GetReceiptNumberOk

`func (o *DisputeListTransactionResponseDataTransaction) GetReceiptNumberOk() (*int32, bool)`

GetReceiptNumberOk returns a tuple with the ReceiptNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiptNumber

`func (o *DisputeListTransactionResponseDataTransaction) SetReceiptNumber(v int32)`

SetReceiptNumber sets ReceiptNumber field to given value.

### HasReceiptNumber

`func (o *DisputeListTransactionResponseDataTransaction) HasReceiptNumber() bool`

HasReceiptNumber returns a boolean if a field has been set.

### SetReceiptNumberNil

`func (o *DisputeListTransactionResponseDataTransaction) SetReceiptNumberNil(b bool)`

 SetReceiptNumberNil sets the value for ReceiptNumber to be an explicit nil

### UnsetReceiptNumber
`func (o *DisputeListTransactionResponseDataTransaction) UnsetReceiptNumber()`

UnsetReceiptNumber ensures that no value is present for ReceiptNumber, not even an explicit nil
### GetAmount

`func (o *DisputeListTransactionResponseDataTransaction) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *DisputeListTransactionResponseDataTransaction) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *DisputeListTransactionResponseDataTransaction) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetMessage

`func (o *DisputeListTransactionResponseDataTransaction) GetMessage() map[string]interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *DisputeListTransactionResponseDataTransaction) GetMessageOk() (*map[string]interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *DisputeListTransactionResponseDataTransaction) SetMessage(v map[string]interface{})`

SetMessage sets Message field to given value.


### SetMessageNil

`func (o *DisputeListTransactionResponseDataTransaction) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *DisputeListTransactionResponseDataTransaction) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil
### GetGatewayResponse

`func (o *DisputeListTransactionResponseDataTransaction) GetGatewayResponse() string`

GetGatewayResponse returns the GatewayResponse field if non-nil, zero value otherwise.

### GetGatewayResponseOk

`func (o *DisputeListTransactionResponseDataTransaction) GetGatewayResponseOk() (*string, bool)`

GetGatewayResponseOk returns a tuple with the GatewayResponse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGatewayResponse

`func (o *DisputeListTransactionResponseDataTransaction) SetGatewayResponse(v string)`

SetGatewayResponse sets GatewayResponse field to given value.


### GetPaidAt

`func (o *DisputeListTransactionResponseDataTransaction) GetPaidAt() string`

GetPaidAt returns the PaidAt field if non-nil, zero value otherwise.

### GetPaidAtOk

`func (o *DisputeListTransactionResponseDataTransaction) GetPaidAtOk() (*string, bool)`

GetPaidAtOk returns a tuple with the PaidAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaidAt

`func (o *DisputeListTransactionResponseDataTransaction) SetPaidAt(v string)`

SetPaidAt sets PaidAt field to given value.

### HasPaidAt

`func (o *DisputeListTransactionResponseDataTransaction) HasPaidAt() bool`

HasPaidAt returns a boolean if a field has been set.

### SetPaidAtNil

`func (o *DisputeListTransactionResponseDataTransaction) SetPaidAtNil(b bool)`

 SetPaidAtNil sets the value for PaidAt to be an explicit nil

### UnsetPaidAt
`func (o *DisputeListTransactionResponseDataTransaction) UnsetPaidAt()`

UnsetPaidAt ensures that no value is present for PaidAt, not even an explicit nil
### GetCreatedAt

`func (o *DisputeListTransactionResponseDataTransaction) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *DisputeListTransactionResponseDataTransaction) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *DisputeListTransactionResponseDataTransaction) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *DisputeListTransactionResponseDataTransaction) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetChannel

`func (o *DisputeListTransactionResponseDataTransaction) GetChannel() string`

GetChannel returns the Channel field if non-nil, zero value otherwise.

### GetChannelOk

`func (o *DisputeListTransactionResponseDataTransaction) GetChannelOk() (*string, bool)`

GetChannelOk returns a tuple with the Channel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannel

`func (o *DisputeListTransactionResponseDataTransaction) SetChannel(v string)`

SetChannel sets Channel field to given value.


### GetCurrency

`func (o *DisputeListTransactionResponseDataTransaction) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *DisputeListTransactionResponseDataTransaction) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *DisputeListTransactionResponseDataTransaction) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetIpAddress

`func (o *DisputeListTransactionResponseDataTransaction) GetIpAddress() string`

GetIpAddress returns the IpAddress field if non-nil, zero value otherwise.

### GetIpAddressOk

`func (o *DisputeListTransactionResponseDataTransaction) GetIpAddressOk() (*string, bool)`

GetIpAddressOk returns a tuple with the IpAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIpAddress

`func (o *DisputeListTransactionResponseDataTransaction) SetIpAddress(v string)`

SetIpAddress sets IpAddress field to given value.


### GetMetadata

`func (o *DisputeListTransactionResponseDataTransaction) GetMetadata() ChargeCreateResponseDataMetadata`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *DisputeListTransactionResponseDataTransaction) GetMetadataOk() (*ChargeCreateResponseDataMetadata, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *DisputeListTransactionResponseDataTransaction) SetMetadata(v ChargeCreateResponseDataMetadata)`

SetMetadata sets Metadata field to given value.


### GetLog

`func (o *DisputeListTransactionResponseDataTransaction) GetLog() ChargeAuthorizationResponseDataLog`

GetLog returns the Log field if non-nil, zero value otherwise.

### GetLogOk

`func (o *DisputeListTransactionResponseDataTransaction) GetLogOk() (*ChargeAuthorizationResponseDataLog, bool)`

GetLogOk returns a tuple with the Log field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLog

`func (o *DisputeListTransactionResponseDataTransaction) SetLog(v ChargeAuthorizationResponseDataLog)`

SetLog sets Log field to given value.


### SetLogNil

`func (o *DisputeListTransactionResponseDataTransaction) SetLogNil(b bool)`

 SetLogNil sets the value for Log to be an explicit nil

### UnsetLog
`func (o *DisputeListTransactionResponseDataTransaction) UnsetLog()`

UnsetLog ensures that no value is present for Log, not even an explicit nil
### GetFees

`func (o *DisputeListTransactionResponseDataTransaction) GetFees() int32`

GetFees returns the Fees field if non-nil, zero value otherwise.

### GetFeesOk

`func (o *DisputeListTransactionResponseDataTransaction) GetFeesOk() (*int32, bool)`

GetFeesOk returns a tuple with the Fees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFees

`func (o *DisputeListTransactionResponseDataTransaction) SetFees(v int32)`

SetFees sets Fees field to given value.


### GetFeesSplit

`func (o *DisputeListTransactionResponseDataTransaction) GetFeesSplit() int32`

GetFeesSplit returns the FeesSplit field if non-nil, zero value otherwise.

### GetFeesSplitOk

`func (o *DisputeListTransactionResponseDataTransaction) GetFeesSplitOk() (*int32, bool)`

GetFeesSplitOk returns a tuple with the FeesSplit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeesSplit

`func (o *DisputeListTransactionResponseDataTransaction) SetFeesSplit(v int32)`

SetFeesSplit sets FeesSplit field to given value.


### SetFeesSplitNil

`func (o *DisputeListTransactionResponseDataTransaction) SetFeesSplitNil(b bool)`

 SetFeesSplitNil sets the value for FeesSplit to be an explicit nil

### UnsetFeesSplit
`func (o *DisputeListTransactionResponseDataTransaction) UnsetFeesSplit()`

UnsetFeesSplit ensures that no value is present for FeesSplit, not even an explicit nil
### GetAuthorization

`func (o *DisputeListTransactionResponseDataTransaction) GetAuthorization() DisputeFetchResponseDataTransactionAuthorization`

GetAuthorization returns the Authorization field if non-nil, zero value otherwise.

### GetAuthorizationOk

`func (o *DisputeListTransactionResponseDataTransaction) GetAuthorizationOk() (*DisputeFetchResponseDataTransactionAuthorization, bool)`

GetAuthorizationOk returns a tuple with the Authorization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorization

`func (o *DisputeListTransactionResponseDataTransaction) SetAuthorization(v DisputeFetchResponseDataTransactionAuthorization)`

SetAuthorization sets Authorization field to given value.


### GetCustomer

`func (o *DisputeListTransactionResponseDataTransaction) GetCustomer() DisputeFetchResponseDataTransactionCustomer`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *DisputeListTransactionResponseDataTransaction) GetCustomerOk() (*DisputeFetchResponseDataTransactionCustomer, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *DisputeListTransactionResponseDataTransaction) SetCustomer(v DisputeFetchResponseDataTransactionCustomer)`

SetCustomer sets Customer field to given value.


### GetPlan

`func (o *DisputeListTransactionResponseDataTransaction) GetPlan() map[string]interface{}`

GetPlan returns the Plan field if non-nil, zero value otherwise.

### GetPlanOk

`func (o *DisputeListTransactionResponseDataTransaction) GetPlanOk() (*map[string]interface{}, bool)`

GetPlanOk returns a tuple with the Plan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlan

`func (o *DisputeListTransactionResponseDataTransaction) SetPlan(v map[string]interface{})`

SetPlan sets Plan field to given value.


### GetSubaccount

`func (o *DisputeListTransactionResponseDataTransaction) GetSubaccount() map[string]interface{}`

GetSubaccount returns the Subaccount field if non-nil, zero value otherwise.

### GetSubaccountOk

`func (o *DisputeListTransactionResponseDataTransaction) GetSubaccountOk() (*map[string]interface{}, bool)`

GetSubaccountOk returns a tuple with the Subaccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubaccount

`func (o *DisputeListTransactionResponseDataTransaction) SetSubaccount(v map[string]interface{})`

SetSubaccount sets Subaccount field to given value.


### GetSplit

`func (o *DisputeListTransactionResponseDataTransaction) GetSplit() map[string]interface{}`

GetSplit returns the Split field if non-nil, zero value otherwise.

### GetSplitOk

`func (o *DisputeListTransactionResponseDataTransaction) GetSplitOk() (*map[string]interface{}, bool)`

GetSplitOk returns a tuple with the Split field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplit

`func (o *DisputeListTransactionResponseDataTransaction) SetSplit(v map[string]interface{})`

SetSplit sets Split field to given value.


### GetOrderId

`func (o *DisputeListTransactionResponseDataTransaction) GetOrderId() map[string]interface{}`

GetOrderId returns the OrderId field if non-nil, zero value otherwise.

### GetOrderIdOk

`func (o *DisputeListTransactionResponseDataTransaction) GetOrderIdOk() (*map[string]interface{}, bool)`

GetOrderIdOk returns a tuple with the OrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderId

`func (o *DisputeListTransactionResponseDataTransaction) SetOrderId(v map[string]interface{})`

SetOrderId sets OrderId field to given value.


### SetOrderIdNil

`func (o *DisputeListTransactionResponseDataTransaction) SetOrderIdNil(b bool)`

 SetOrderIdNil sets the value for OrderId to be an explicit nil

### UnsetOrderId
`func (o *DisputeListTransactionResponseDataTransaction) UnsetOrderId()`

UnsetOrderId ensures that no value is present for OrderId, not even an explicit nil
### GetRequestedAmount

`func (o *DisputeListTransactionResponseDataTransaction) GetRequestedAmount() int32`

GetRequestedAmount returns the RequestedAmount field if non-nil, zero value otherwise.

### GetRequestedAmountOk

`func (o *DisputeListTransactionResponseDataTransaction) GetRequestedAmountOk() (*int32, bool)`

GetRequestedAmountOk returns a tuple with the RequestedAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedAmount

`func (o *DisputeListTransactionResponseDataTransaction) SetRequestedAmount(v int32)`

SetRequestedAmount sets RequestedAmount field to given value.


### GetPosTransactionData

`func (o *DisputeListTransactionResponseDataTransaction) GetPosTransactionData() map[string]interface{}`

GetPosTransactionData returns the PosTransactionData field if non-nil, zero value otherwise.

### GetPosTransactionDataOk

`func (o *DisputeListTransactionResponseDataTransaction) GetPosTransactionDataOk() (*map[string]interface{}, bool)`

GetPosTransactionDataOk returns a tuple with the PosTransactionData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPosTransactionData

`func (o *DisputeListTransactionResponseDataTransaction) SetPosTransactionData(v map[string]interface{})`

SetPosTransactionData sets PosTransactionData field to given value.


### SetPosTransactionDataNil

`func (o *DisputeListTransactionResponseDataTransaction) SetPosTransactionDataNil(b bool)`

 SetPosTransactionDataNil sets the value for PosTransactionData to be an explicit nil

### UnsetPosTransactionData
`func (o *DisputeListTransactionResponseDataTransaction) UnsetPosTransactionData()`

UnsetPosTransactionData ensures that no value is present for PosTransactionData, not even an explicit nil
### GetSource

`func (o *DisputeListTransactionResponseDataTransaction) GetSource() map[string]interface{}`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *DisputeListTransactionResponseDataTransaction) GetSourceOk() (*map[string]interface{}, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *DisputeListTransactionResponseDataTransaction) SetSource(v map[string]interface{})`

SetSource sets Source field to given value.


### SetSourceNil

`func (o *DisputeListTransactionResponseDataTransaction) SetSourceNil(b bool)`

 SetSourceNil sets the value for Source to be an explicit nil

### UnsetSource
`func (o *DisputeListTransactionResponseDataTransaction) UnsetSource()`

UnsetSource ensures that no value is present for Source, not even an explicit nil
### GetFeesBreakdown

`func (o *DisputeListTransactionResponseDataTransaction) GetFeesBreakdown() map[string]interface{}`

GetFeesBreakdown returns the FeesBreakdown field if non-nil, zero value otherwise.

### GetFeesBreakdownOk

`func (o *DisputeListTransactionResponseDataTransaction) GetFeesBreakdownOk() (*map[string]interface{}, bool)`

GetFeesBreakdownOk returns a tuple with the FeesBreakdown field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeesBreakdown

`func (o *DisputeListTransactionResponseDataTransaction) SetFeesBreakdown(v map[string]interface{})`

SetFeesBreakdown sets FeesBreakdown field to given value.


### SetFeesBreakdownNil

`func (o *DisputeListTransactionResponseDataTransaction) SetFeesBreakdownNil(b bool)`

 SetFeesBreakdownNil sets the value for FeesBreakdown to be an explicit nil

### UnsetFeesBreakdown
`func (o *DisputeListTransactionResponseDataTransaction) UnsetFeesBreakdown()`

UnsetFeesBreakdown ensures that no value is present for FeesBreakdown, not even an explicit nil
### GetConnect

`func (o *DisputeListTransactionResponseDataTransaction) GetConnect() map[string]interface{}`

GetConnect returns the Connect field if non-nil, zero value otherwise.

### GetConnectOk

`func (o *DisputeListTransactionResponseDataTransaction) GetConnectOk() (*map[string]interface{}, bool)`

GetConnectOk returns a tuple with the Connect field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnect

`func (o *DisputeListTransactionResponseDataTransaction) SetConnect(v map[string]interface{})`

SetConnect sets Connect field to given value.


### SetConnectNil

`func (o *DisputeListTransactionResponseDataTransaction) SetConnectNil(b bool)`

 SetConnectNil sets the value for Connect to be an explicit nil

### UnsetConnect
`func (o *DisputeListTransactionResponseDataTransaction) UnsetConnect()`

UnsetConnect ensures that no value is present for Connect, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


