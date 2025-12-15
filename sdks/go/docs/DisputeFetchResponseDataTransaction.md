# DisputeFetchResponseDataTransaction

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
**PaidAt** | **string** |  | 
**CreatedAt** | **string** |  | 
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

### NewDisputeFetchResponseDataTransaction

`func NewDisputeFetchResponseDataTransaction(id int32, domain string, status string, reference string, amount int32, message map[string]interface{}, gatewayResponse string, paidAt string, createdAt string, channel string, currency string, ipAddress string, metadata ChargeCreateResponseDataMetadata, log NullableChargeAuthorizationResponseDataLog, fees int32, feesSplit NullableInt32, authorization DisputeFetchResponseDataTransactionAuthorization, customer DisputeFetchResponseDataTransactionCustomer, plan map[string]interface{}, subaccount map[string]interface{}, split map[string]interface{}, orderId map[string]interface{}, requestedAmount int32, posTransactionData map[string]interface{}, source map[string]interface{}, feesBreakdown map[string]interface{}, connect map[string]interface{}, ) *DisputeFetchResponseDataTransaction`

NewDisputeFetchResponseDataTransaction instantiates a new DisputeFetchResponseDataTransaction object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDisputeFetchResponseDataTransactionWithDefaults

`func NewDisputeFetchResponseDataTransactionWithDefaults() *DisputeFetchResponseDataTransaction`

NewDisputeFetchResponseDataTransactionWithDefaults instantiates a new DisputeFetchResponseDataTransaction object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *DisputeFetchResponseDataTransaction) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *DisputeFetchResponseDataTransaction) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *DisputeFetchResponseDataTransaction) SetId(v int32)`

SetId sets Id field to given value.


### GetDomain

`func (o *DisputeFetchResponseDataTransaction) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *DisputeFetchResponseDataTransaction) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *DisputeFetchResponseDataTransaction) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetStatus

`func (o *DisputeFetchResponseDataTransaction) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *DisputeFetchResponseDataTransaction) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *DisputeFetchResponseDataTransaction) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetReference

`func (o *DisputeFetchResponseDataTransaction) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *DisputeFetchResponseDataTransaction) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *DisputeFetchResponseDataTransaction) SetReference(v string)`

SetReference sets Reference field to given value.


### GetReceiptNumber

`func (o *DisputeFetchResponseDataTransaction) GetReceiptNumber() int32`

GetReceiptNumber returns the ReceiptNumber field if non-nil, zero value otherwise.

### GetReceiptNumberOk

`func (o *DisputeFetchResponseDataTransaction) GetReceiptNumberOk() (*int32, bool)`

GetReceiptNumberOk returns a tuple with the ReceiptNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiptNumber

`func (o *DisputeFetchResponseDataTransaction) SetReceiptNumber(v int32)`

SetReceiptNumber sets ReceiptNumber field to given value.

### HasReceiptNumber

`func (o *DisputeFetchResponseDataTransaction) HasReceiptNumber() bool`

HasReceiptNumber returns a boolean if a field has been set.

### SetReceiptNumberNil

`func (o *DisputeFetchResponseDataTransaction) SetReceiptNumberNil(b bool)`

 SetReceiptNumberNil sets the value for ReceiptNumber to be an explicit nil

### UnsetReceiptNumber
`func (o *DisputeFetchResponseDataTransaction) UnsetReceiptNumber()`

UnsetReceiptNumber ensures that no value is present for ReceiptNumber, not even an explicit nil
### GetAmount

`func (o *DisputeFetchResponseDataTransaction) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *DisputeFetchResponseDataTransaction) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *DisputeFetchResponseDataTransaction) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetMessage

`func (o *DisputeFetchResponseDataTransaction) GetMessage() map[string]interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *DisputeFetchResponseDataTransaction) GetMessageOk() (*map[string]interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *DisputeFetchResponseDataTransaction) SetMessage(v map[string]interface{})`

SetMessage sets Message field to given value.


### SetMessageNil

`func (o *DisputeFetchResponseDataTransaction) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *DisputeFetchResponseDataTransaction) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil
### GetGatewayResponse

`func (o *DisputeFetchResponseDataTransaction) GetGatewayResponse() string`

GetGatewayResponse returns the GatewayResponse field if non-nil, zero value otherwise.

### GetGatewayResponseOk

`func (o *DisputeFetchResponseDataTransaction) GetGatewayResponseOk() (*string, bool)`

GetGatewayResponseOk returns a tuple with the GatewayResponse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGatewayResponse

`func (o *DisputeFetchResponseDataTransaction) SetGatewayResponse(v string)`

SetGatewayResponse sets GatewayResponse field to given value.


### GetPaidAt

`func (o *DisputeFetchResponseDataTransaction) GetPaidAt() string`

GetPaidAt returns the PaidAt field if non-nil, zero value otherwise.

### GetPaidAtOk

`func (o *DisputeFetchResponseDataTransaction) GetPaidAtOk() (*string, bool)`

GetPaidAtOk returns a tuple with the PaidAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaidAt

`func (o *DisputeFetchResponseDataTransaction) SetPaidAt(v string)`

SetPaidAt sets PaidAt field to given value.


### GetCreatedAt

`func (o *DisputeFetchResponseDataTransaction) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *DisputeFetchResponseDataTransaction) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *DisputeFetchResponseDataTransaction) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetChannel

`func (o *DisputeFetchResponseDataTransaction) GetChannel() string`

GetChannel returns the Channel field if non-nil, zero value otherwise.

### GetChannelOk

`func (o *DisputeFetchResponseDataTransaction) GetChannelOk() (*string, bool)`

GetChannelOk returns a tuple with the Channel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannel

`func (o *DisputeFetchResponseDataTransaction) SetChannel(v string)`

SetChannel sets Channel field to given value.


### GetCurrency

`func (o *DisputeFetchResponseDataTransaction) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *DisputeFetchResponseDataTransaction) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *DisputeFetchResponseDataTransaction) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetIpAddress

`func (o *DisputeFetchResponseDataTransaction) GetIpAddress() string`

GetIpAddress returns the IpAddress field if non-nil, zero value otherwise.

### GetIpAddressOk

`func (o *DisputeFetchResponseDataTransaction) GetIpAddressOk() (*string, bool)`

GetIpAddressOk returns a tuple with the IpAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIpAddress

`func (o *DisputeFetchResponseDataTransaction) SetIpAddress(v string)`

SetIpAddress sets IpAddress field to given value.


### GetMetadata

`func (o *DisputeFetchResponseDataTransaction) GetMetadata() ChargeCreateResponseDataMetadata`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *DisputeFetchResponseDataTransaction) GetMetadataOk() (*ChargeCreateResponseDataMetadata, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *DisputeFetchResponseDataTransaction) SetMetadata(v ChargeCreateResponseDataMetadata)`

SetMetadata sets Metadata field to given value.


### GetLog

`func (o *DisputeFetchResponseDataTransaction) GetLog() ChargeAuthorizationResponseDataLog`

GetLog returns the Log field if non-nil, zero value otherwise.

### GetLogOk

`func (o *DisputeFetchResponseDataTransaction) GetLogOk() (*ChargeAuthorizationResponseDataLog, bool)`

GetLogOk returns a tuple with the Log field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLog

`func (o *DisputeFetchResponseDataTransaction) SetLog(v ChargeAuthorizationResponseDataLog)`

SetLog sets Log field to given value.


### SetLogNil

`func (o *DisputeFetchResponseDataTransaction) SetLogNil(b bool)`

 SetLogNil sets the value for Log to be an explicit nil

### UnsetLog
`func (o *DisputeFetchResponseDataTransaction) UnsetLog()`

UnsetLog ensures that no value is present for Log, not even an explicit nil
### GetFees

`func (o *DisputeFetchResponseDataTransaction) GetFees() int32`

GetFees returns the Fees field if non-nil, zero value otherwise.

### GetFeesOk

`func (o *DisputeFetchResponseDataTransaction) GetFeesOk() (*int32, bool)`

GetFeesOk returns a tuple with the Fees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFees

`func (o *DisputeFetchResponseDataTransaction) SetFees(v int32)`

SetFees sets Fees field to given value.


### GetFeesSplit

`func (o *DisputeFetchResponseDataTransaction) GetFeesSplit() int32`

GetFeesSplit returns the FeesSplit field if non-nil, zero value otherwise.

### GetFeesSplitOk

`func (o *DisputeFetchResponseDataTransaction) GetFeesSplitOk() (*int32, bool)`

GetFeesSplitOk returns a tuple with the FeesSplit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeesSplit

`func (o *DisputeFetchResponseDataTransaction) SetFeesSplit(v int32)`

SetFeesSplit sets FeesSplit field to given value.


### SetFeesSplitNil

`func (o *DisputeFetchResponseDataTransaction) SetFeesSplitNil(b bool)`

 SetFeesSplitNil sets the value for FeesSplit to be an explicit nil

### UnsetFeesSplit
`func (o *DisputeFetchResponseDataTransaction) UnsetFeesSplit()`

UnsetFeesSplit ensures that no value is present for FeesSplit, not even an explicit nil
### GetAuthorization

`func (o *DisputeFetchResponseDataTransaction) GetAuthorization() DisputeFetchResponseDataTransactionAuthorization`

GetAuthorization returns the Authorization field if non-nil, zero value otherwise.

### GetAuthorizationOk

`func (o *DisputeFetchResponseDataTransaction) GetAuthorizationOk() (*DisputeFetchResponseDataTransactionAuthorization, bool)`

GetAuthorizationOk returns a tuple with the Authorization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorization

`func (o *DisputeFetchResponseDataTransaction) SetAuthorization(v DisputeFetchResponseDataTransactionAuthorization)`

SetAuthorization sets Authorization field to given value.


### GetCustomer

`func (o *DisputeFetchResponseDataTransaction) GetCustomer() DisputeFetchResponseDataTransactionCustomer`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *DisputeFetchResponseDataTransaction) GetCustomerOk() (*DisputeFetchResponseDataTransactionCustomer, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *DisputeFetchResponseDataTransaction) SetCustomer(v DisputeFetchResponseDataTransactionCustomer)`

SetCustomer sets Customer field to given value.


### GetPlan

`func (o *DisputeFetchResponseDataTransaction) GetPlan() map[string]interface{}`

GetPlan returns the Plan field if non-nil, zero value otherwise.

### GetPlanOk

`func (o *DisputeFetchResponseDataTransaction) GetPlanOk() (*map[string]interface{}, bool)`

GetPlanOk returns a tuple with the Plan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlan

`func (o *DisputeFetchResponseDataTransaction) SetPlan(v map[string]interface{})`

SetPlan sets Plan field to given value.


### GetSubaccount

`func (o *DisputeFetchResponseDataTransaction) GetSubaccount() map[string]interface{}`

GetSubaccount returns the Subaccount field if non-nil, zero value otherwise.

### GetSubaccountOk

`func (o *DisputeFetchResponseDataTransaction) GetSubaccountOk() (*map[string]interface{}, bool)`

GetSubaccountOk returns a tuple with the Subaccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubaccount

`func (o *DisputeFetchResponseDataTransaction) SetSubaccount(v map[string]interface{})`

SetSubaccount sets Subaccount field to given value.


### GetSplit

`func (o *DisputeFetchResponseDataTransaction) GetSplit() map[string]interface{}`

GetSplit returns the Split field if non-nil, zero value otherwise.

### GetSplitOk

`func (o *DisputeFetchResponseDataTransaction) GetSplitOk() (*map[string]interface{}, bool)`

GetSplitOk returns a tuple with the Split field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplit

`func (o *DisputeFetchResponseDataTransaction) SetSplit(v map[string]interface{})`

SetSplit sets Split field to given value.


### GetOrderId

`func (o *DisputeFetchResponseDataTransaction) GetOrderId() map[string]interface{}`

GetOrderId returns the OrderId field if non-nil, zero value otherwise.

### GetOrderIdOk

`func (o *DisputeFetchResponseDataTransaction) GetOrderIdOk() (*map[string]interface{}, bool)`

GetOrderIdOk returns a tuple with the OrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderId

`func (o *DisputeFetchResponseDataTransaction) SetOrderId(v map[string]interface{})`

SetOrderId sets OrderId field to given value.


### SetOrderIdNil

`func (o *DisputeFetchResponseDataTransaction) SetOrderIdNil(b bool)`

 SetOrderIdNil sets the value for OrderId to be an explicit nil

### UnsetOrderId
`func (o *DisputeFetchResponseDataTransaction) UnsetOrderId()`

UnsetOrderId ensures that no value is present for OrderId, not even an explicit nil
### GetRequestedAmount

`func (o *DisputeFetchResponseDataTransaction) GetRequestedAmount() int32`

GetRequestedAmount returns the RequestedAmount field if non-nil, zero value otherwise.

### GetRequestedAmountOk

`func (o *DisputeFetchResponseDataTransaction) GetRequestedAmountOk() (*int32, bool)`

GetRequestedAmountOk returns a tuple with the RequestedAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedAmount

`func (o *DisputeFetchResponseDataTransaction) SetRequestedAmount(v int32)`

SetRequestedAmount sets RequestedAmount field to given value.


### GetPosTransactionData

`func (o *DisputeFetchResponseDataTransaction) GetPosTransactionData() map[string]interface{}`

GetPosTransactionData returns the PosTransactionData field if non-nil, zero value otherwise.

### GetPosTransactionDataOk

`func (o *DisputeFetchResponseDataTransaction) GetPosTransactionDataOk() (*map[string]interface{}, bool)`

GetPosTransactionDataOk returns a tuple with the PosTransactionData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPosTransactionData

`func (o *DisputeFetchResponseDataTransaction) SetPosTransactionData(v map[string]interface{})`

SetPosTransactionData sets PosTransactionData field to given value.


### SetPosTransactionDataNil

`func (o *DisputeFetchResponseDataTransaction) SetPosTransactionDataNil(b bool)`

 SetPosTransactionDataNil sets the value for PosTransactionData to be an explicit nil

### UnsetPosTransactionData
`func (o *DisputeFetchResponseDataTransaction) UnsetPosTransactionData()`

UnsetPosTransactionData ensures that no value is present for PosTransactionData, not even an explicit nil
### GetSource

`func (o *DisputeFetchResponseDataTransaction) GetSource() map[string]interface{}`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *DisputeFetchResponseDataTransaction) GetSourceOk() (*map[string]interface{}, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *DisputeFetchResponseDataTransaction) SetSource(v map[string]interface{})`

SetSource sets Source field to given value.


### SetSourceNil

`func (o *DisputeFetchResponseDataTransaction) SetSourceNil(b bool)`

 SetSourceNil sets the value for Source to be an explicit nil

### UnsetSource
`func (o *DisputeFetchResponseDataTransaction) UnsetSource()`

UnsetSource ensures that no value is present for Source, not even an explicit nil
### GetFeesBreakdown

`func (o *DisputeFetchResponseDataTransaction) GetFeesBreakdown() map[string]interface{}`

GetFeesBreakdown returns the FeesBreakdown field if non-nil, zero value otherwise.

### GetFeesBreakdownOk

`func (o *DisputeFetchResponseDataTransaction) GetFeesBreakdownOk() (*map[string]interface{}, bool)`

GetFeesBreakdownOk returns a tuple with the FeesBreakdown field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeesBreakdown

`func (o *DisputeFetchResponseDataTransaction) SetFeesBreakdown(v map[string]interface{})`

SetFeesBreakdown sets FeesBreakdown field to given value.


### SetFeesBreakdownNil

`func (o *DisputeFetchResponseDataTransaction) SetFeesBreakdownNil(b bool)`

 SetFeesBreakdownNil sets the value for FeesBreakdown to be an explicit nil

### UnsetFeesBreakdown
`func (o *DisputeFetchResponseDataTransaction) UnsetFeesBreakdown()`

UnsetFeesBreakdown ensures that no value is present for FeesBreakdown, not even an explicit nil
### GetConnect

`func (o *DisputeFetchResponseDataTransaction) GetConnect() map[string]interface{}`

GetConnect returns the Connect field if non-nil, zero value otherwise.

### GetConnectOk

`func (o *DisputeFetchResponseDataTransaction) GetConnectOk() (*map[string]interface{}, bool)`

GetConnectOk returns a tuple with the Connect field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnect

`func (o *DisputeFetchResponseDataTransaction) SetConnect(v map[string]interface{})`

SetConnect sets Connect field to given value.


### SetConnectNil

`func (o *DisputeFetchResponseDataTransaction) SetConnectNil(b bool)`

 SetConnectNil sets the value for Connect to be an explicit nil

### UnsetConnect
`func (o *DisputeFetchResponseDataTransaction) UnsetConnect()`

UnsetConnect ensures that no value is present for Connect, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


