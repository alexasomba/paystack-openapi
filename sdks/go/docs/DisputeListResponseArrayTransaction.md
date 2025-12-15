# DisputeListResponseArrayTransaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**Domain** | **string** |  | 
**Status** | **string** |  | 
**Reference** | **string** |  | 
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
**Authorization** | **map[string]interface{}** |  | 
**Customer** | **map[string]interface{}** |  | 
**Plan** | **map[string]interface{}** |  | 
**Subaccount** | **map[string]interface{}** |  | 
**Split** | **map[string]interface{}** |  | 
**OrderId** | **map[string]interface{}** |  | 
**PosTransactionData** | **map[string]interface{}** |  | 
**Source** | **map[string]interface{}** |  | 
**FeesBreakdown** | **map[string]interface{}** |  | 
**Connect** | **map[string]interface{}** |  | 

## Methods

### NewDisputeListResponseArrayTransaction

`func NewDisputeListResponseArrayTransaction(id int32, domain string, status string, reference string, amount int32, message map[string]interface{}, gatewayResponse string, channel string, currency string, ipAddress string, metadata ChargeCreateResponseDataMetadata, log NullableChargeAuthorizationResponseDataLog, fees int32, feesSplit NullableInt32, authorization map[string]interface{}, customer map[string]interface{}, plan map[string]interface{}, subaccount map[string]interface{}, split map[string]interface{}, orderId map[string]interface{}, posTransactionData map[string]interface{}, source map[string]interface{}, feesBreakdown map[string]interface{}, connect map[string]interface{}, ) *DisputeListResponseArrayTransaction`

NewDisputeListResponseArrayTransaction instantiates a new DisputeListResponseArrayTransaction object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDisputeListResponseArrayTransactionWithDefaults

`func NewDisputeListResponseArrayTransactionWithDefaults() *DisputeListResponseArrayTransaction`

NewDisputeListResponseArrayTransactionWithDefaults instantiates a new DisputeListResponseArrayTransaction object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *DisputeListResponseArrayTransaction) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *DisputeListResponseArrayTransaction) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *DisputeListResponseArrayTransaction) SetId(v int32)`

SetId sets Id field to given value.


### GetDomain

`func (o *DisputeListResponseArrayTransaction) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *DisputeListResponseArrayTransaction) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *DisputeListResponseArrayTransaction) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetStatus

`func (o *DisputeListResponseArrayTransaction) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *DisputeListResponseArrayTransaction) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *DisputeListResponseArrayTransaction) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetReference

`func (o *DisputeListResponseArrayTransaction) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *DisputeListResponseArrayTransaction) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *DisputeListResponseArrayTransaction) SetReference(v string)`

SetReference sets Reference field to given value.


### GetAmount

`func (o *DisputeListResponseArrayTransaction) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *DisputeListResponseArrayTransaction) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *DisputeListResponseArrayTransaction) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetMessage

`func (o *DisputeListResponseArrayTransaction) GetMessage() map[string]interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *DisputeListResponseArrayTransaction) GetMessageOk() (*map[string]interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *DisputeListResponseArrayTransaction) SetMessage(v map[string]interface{})`

SetMessage sets Message field to given value.


### SetMessageNil

`func (o *DisputeListResponseArrayTransaction) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *DisputeListResponseArrayTransaction) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil
### GetGatewayResponse

`func (o *DisputeListResponseArrayTransaction) GetGatewayResponse() string`

GetGatewayResponse returns the GatewayResponse field if non-nil, zero value otherwise.

### GetGatewayResponseOk

`func (o *DisputeListResponseArrayTransaction) GetGatewayResponseOk() (*string, bool)`

GetGatewayResponseOk returns a tuple with the GatewayResponse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGatewayResponse

`func (o *DisputeListResponseArrayTransaction) SetGatewayResponse(v string)`

SetGatewayResponse sets GatewayResponse field to given value.


### GetPaidAt

`func (o *DisputeListResponseArrayTransaction) GetPaidAt() string`

GetPaidAt returns the PaidAt field if non-nil, zero value otherwise.

### GetPaidAtOk

`func (o *DisputeListResponseArrayTransaction) GetPaidAtOk() (*string, bool)`

GetPaidAtOk returns a tuple with the PaidAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaidAt

`func (o *DisputeListResponseArrayTransaction) SetPaidAt(v string)`

SetPaidAt sets PaidAt field to given value.

### HasPaidAt

`func (o *DisputeListResponseArrayTransaction) HasPaidAt() bool`

HasPaidAt returns a boolean if a field has been set.

### SetPaidAtNil

`func (o *DisputeListResponseArrayTransaction) SetPaidAtNil(b bool)`

 SetPaidAtNil sets the value for PaidAt to be an explicit nil

### UnsetPaidAt
`func (o *DisputeListResponseArrayTransaction) UnsetPaidAt()`

UnsetPaidAt ensures that no value is present for PaidAt, not even an explicit nil
### GetCreatedAt

`func (o *DisputeListResponseArrayTransaction) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *DisputeListResponseArrayTransaction) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *DisputeListResponseArrayTransaction) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *DisputeListResponseArrayTransaction) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetChannel

`func (o *DisputeListResponseArrayTransaction) GetChannel() string`

GetChannel returns the Channel field if non-nil, zero value otherwise.

### GetChannelOk

`func (o *DisputeListResponseArrayTransaction) GetChannelOk() (*string, bool)`

GetChannelOk returns a tuple with the Channel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannel

`func (o *DisputeListResponseArrayTransaction) SetChannel(v string)`

SetChannel sets Channel field to given value.


### GetCurrency

`func (o *DisputeListResponseArrayTransaction) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *DisputeListResponseArrayTransaction) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *DisputeListResponseArrayTransaction) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetIpAddress

`func (o *DisputeListResponseArrayTransaction) GetIpAddress() string`

GetIpAddress returns the IpAddress field if non-nil, zero value otherwise.

### GetIpAddressOk

`func (o *DisputeListResponseArrayTransaction) GetIpAddressOk() (*string, bool)`

GetIpAddressOk returns a tuple with the IpAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIpAddress

`func (o *DisputeListResponseArrayTransaction) SetIpAddress(v string)`

SetIpAddress sets IpAddress field to given value.


### GetMetadata

`func (o *DisputeListResponseArrayTransaction) GetMetadata() ChargeCreateResponseDataMetadata`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *DisputeListResponseArrayTransaction) GetMetadataOk() (*ChargeCreateResponseDataMetadata, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *DisputeListResponseArrayTransaction) SetMetadata(v ChargeCreateResponseDataMetadata)`

SetMetadata sets Metadata field to given value.


### GetLog

`func (o *DisputeListResponseArrayTransaction) GetLog() ChargeAuthorizationResponseDataLog`

GetLog returns the Log field if non-nil, zero value otherwise.

### GetLogOk

`func (o *DisputeListResponseArrayTransaction) GetLogOk() (*ChargeAuthorizationResponseDataLog, bool)`

GetLogOk returns a tuple with the Log field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLog

`func (o *DisputeListResponseArrayTransaction) SetLog(v ChargeAuthorizationResponseDataLog)`

SetLog sets Log field to given value.


### SetLogNil

`func (o *DisputeListResponseArrayTransaction) SetLogNil(b bool)`

 SetLogNil sets the value for Log to be an explicit nil

### UnsetLog
`func (o *DisputeListResponseArrayTransaction) UnsetLog()`

UnsetLog ensures that no value is present for Log, not even an explicit nil
### GetFees

`func (o *DisputeListResponseArrayTransaction) GetFees() int32`

GetFees returns the Fees field if non-nil, zero value otherwise.

### GetFeesOk

`func (o *DisputeListResponseArrayTransaction) GetFeesOk() (*int32, bool)`

GetFeesOk returns a tuple with the Fees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFees

`func (o *DisputeListResponseArrayTransaction) SetFees(v int32)`

SetFees sets Fees field to given value.


### GetFeesSplit

`func (o *DisputeListResponseArrayTransaction) GetFeesSplit() int32`

GetFeesSplit returns the FeesSplit field if non-nil, zero value otherwise.

### GetFeesSplitOk

`func (o *DisputeListResponseArrayTransaction) GetFeesSplitOk() (*int32, bool)`

GetFeesSplitOk returns a tuple with the FeesSplit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeesSplit

`func (o *DisputeListResponseArrayTransaction) SetFeesSplit(v int32)`

SetFeesSplit sets FeesSplit field to given value.


### SetFeesSplitNil

`func (o *DisputeListResponseArrayTransaction) SetFeesSplitNil(b bool)`

 SetFeesSplitNil sets the value for FeesSplit to be an explicit nil

### UnsetFeesSplit
`func (o *DisputeListResponseArrayTransaction) UnsetFeesSplit()`

UnsetFeesSplit ensures that no value is present for FeesSplit, not even an explicit nil
### GetAuthorization

`func (o *DisputeListResponseArrayTransaction) GetAuthorization() map[string]interface{}`

GetAuthorization returns the Authorization field if non-nil, zero value otherwise.

### GetAuthorizationOk

`func (o *DisputeListResponseArrayTransaction) GetAuthorizationOk() (*map[string]interface{}, bool)`

GetAuthorizationOk returns a tuple with the Authorization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorization

`func (o *DisputeListResponseArrayTransaction) SetAuthorization(v map[string]interface{})`

SetAuthorization sets Authorization field to given value.


### GetCustomer

`func (o *DisputeListResponseArrayTransaction) GetCustomer() map[string]interface{}`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *DisputeListResponseArrayTransaction) GetCustomerOk() (*map[string]interface{}, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *DisputeListResponseArrayTransaction) SetCustomer(v map[string]interface{})`

SetCustomer sets Customer field to given value.


### SetCustomerNil

`func (o *DisputeListResponseArrayTransaction) SetCustomerNil(b bool)`

 SetCustomerNil sets the value for Customer to be an explicit nil

### UnsetCustomer
`func (o *DisputeListResponseArrayTransaction) UnsetCustomer()`

UnsetCustomer ensures that no value is present for Customer, not even an explicit nil
### GetPlan

`func (o *DisputeListResponseArrayTransaction) GetPlan() map[string]interface{}`

GetPlan returns the Plan field if non-nil, zero value otherwise.

### GetPlanOk

`func (o *DisputeListResponseArrayTransaction) GetPlanOk() (*map[string]interface{}, bool)`

GetPlanOk returns a tuple with the Plan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlan

`func (o *DisputeListResponseArrayTransaction) SetPlan(v map[string]interface{})`

SetPlan sets Plan field to given value.


### GetSubaccount

`func (o *DisputeListResponseArrayTransaction) GetSubaccount() map[string]interface{}`

GetSubaccount returns the Subaccount field if non-nil, zero value otherwise.

### GetSubaccountOk

`func (o *DisputeListResponseArrayTransaction) GetSubaccountOk() (*map[string]interface{}, bool)`

GetSubaccountOk returns a tuple with the Subaccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubaccount

`func (o *DisputeListResponseArrayTransaction) SetSubaccount(v map[string]interface{})`

SetSubaccount sets Subaccount field to given value.


### GetSplit

`func (o *DisputeListResponseArrayTransaction) GetSplit() map[string]interface{}`

GetSplit returns the Split field if non-nil, zero value otherwise.

### GetSplitOk

`func (o *DisputeListResponseArrayTransaction) GetSplitOk() (*map[string]interface{}, bool)`

GetSplitOk returns a tuple with the Split field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplit

`func (o *DisputeListResponseArrayTransaction) SetSplit(v map[string]interface{})`

SetSplit sets Split field to given value.


### GetOrderId

`func (o *DisputeListResponseArrayTransaction) GetOrderId() map[string]interface{}`

GetOrderId returns the OrderId field if non-nil, zero value otherwise.

### GetOrderIdOk

`func (o *DisputeListResponseArrayTransaction) GetOrderIdOk() (*map[string]interface{}, bool)`

GetOrderIdOk returns a tuple with the OrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderId

`func (o *DisputeListResponseArrayTransaction) SetOrderId(v map[string]interface{})`

SetOrderId sets OrderId field to given value.


### SetOrderIdNil

`func (o *DisputeListResponseArrayTransaction) SetOrderIdNil(b bool)`

 SetOrderIdNil sets the value for OrderId to be an explicit nil

### UnsetOrderId
`func (o *DisputeListResponseArrayTransaction) UnsetOrderId()`

UnsetOrderId ensures that no value is present for OrderId, not even an explicit nil
### GetPosTransactionData

`func (o *DisputeListResponseArrayTransaction) GetPosTransactionData() map[string]interface{}`

GetPosTransactionData returns the PosTransactionData field if non-nil, zero value otherwise.

### GetPosTransactionDataOk

`func (o *DisputeListResponseArrayTransaction) GetPosTransactionDataOk() (*map[string]interface{}, bool)`

GetPosTransactionDataOk returns a tuple with the PosTransactionData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPosTransactionData

`func (o *DisputeListResponseArrayTransaction) SetPosTransactionData(v map[string]interface{})`

SetPosTransactionData sets PosTransactionData field to given value.


### SetPosTransactionDataNil

`func (o *DisputeListResponseArrayTransaction) SetPosTransactionDataNil(b bool)`

 SetPosTransactionDataNil sets the value for PosTransactionData to be an explicit nil

### UnsetPosTransactionData
`func (o *DisputeListResponseArrayTransaction) UnsetPosTransactionData()`

UnsetPosTransactionData ensures that no value is present for PosTransactionData, not even an explicit nil
### GetSource

`func (o *DisputeListResponseArrayTransaction) GetSource() map[string]interface{}`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *DisputeListResponseArrayTransaction) GetSourceOk() (*map[string]interface{}, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *DisputeListResponseArrayTransaction) SetSource(v map[string]interface{})`

SetSource sets Source field to given value.


### SetSourceNil

`func (o *DisputeListResponseArrayTransaction) SetSourceNil(b bool)`

 SetSourceNil sets the value for Source to be an explicit nil

### UnsetSource
`func (o *DisputeListResponseArrayTransaction) UnsetSource()`

UnsetSource ensures that no value is present for Source, not even an explicit nil
### GetFeesBreakdown

`func (o *DisputeListResponseArrayTransaction) GetFeesBreakdown() map[string]interface{}`

GetFeesBreakdown returns the FeesBreakdown field if non-nil, zero value otherwise.

### GetFeesBreakdownOk

`func (o *DisputeListResponseArrayTransaction) GetFeesBreakdownOk() (*map[string]interface{}, bool)`

GetFeesBreakdownOk returns a tuple with the FeesBreakdown field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeesBreakdown

`func (o *DisputeListResponseArrayTransaction) SetFeesBreakdown(v map[string]interface{})`

SetFeesBreakdown sets FeesBreakdown field to given value.


### SetFeesBreakdownNil

`func (o *DisputeListResponseArrayTransaction) SetFeesBreakdownNil(b bool)`

 SetFeesBreakdownNil sets the value for FeesBreakdown to be an explicit nil

### UnsetFeesBreakdown
`func (o *DisputeListResponseArrayTransaction) UnsetFeesBreakdown()`

UnsetFeesBreakdown ensures that no value is present for FeesBreakdown, not even an explicit nil
### GetConnect

`func (o *DisputeListResponseArrayTransaction) GetConnect() map[string]interface{}`

GetConnect returns the Connect field if non-nil, zero value otherwise.

### GetConnectOk

`func (o *DisputeListResponseArrayTransaction) GetConnectOk() (*map[string]interface{}, bool)`

GetConnectOk returns a tuple with the Connect field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnect

`func (o *DisputeListResponseArrayTransaction) SetConnect(v map[string]interface{})`

SetConnect sets Connect field to given value.


### SetConnectNil

`func (o *DisputeListResponseArrayTransaction) SetConnectNil(b bool)`

 SetConnectNil sets the value for Connect to be an explicit nil

### UnsetConnect
`func (o *DisputeListResponseArrayTransaction) UnsetConnect()`

UnsetConnect ensures that no value is present for Connect, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


