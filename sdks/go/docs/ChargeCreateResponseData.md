# ChargeCreateResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**Domain** | **string** |  | 
**Status** | **string** |  | 
**Reference** | **string** |  | 
**ReceiptNumber** | **map[string]interface{}** |  | 
**Amount** | **int32** |  | 
**Message** | **NullableString** |  | 
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
**Authorization** | [**ChargeCreateResponseDataAuthorization**](ChargeCreateResponseDataAuthorization.md) |  | 
**Customer** | [**ChargeCreateResponseDataCustomer**](ChargeCreateResponseDataCustomer.md) |  | 
**Plan** | **map[string]interface{}** |  | 
**Split** | **map[string]interface{}** |  | 
**OrderId** | **map[string]interface{}** |  | 
**RequestedAmount** | **int32** |  | 
**PosTransactionData** | **map[string]interface{}** |  | 
**Source** | **map[string]interface{}** |  | 
**FeesBreakdown** | **map[string]interface{}** |  | 
**Connect** | **map[string]interface{}** |  | 
**TransactionDate** | **string** |  | 
**PlanObject** | **map[string]interface{}** |  | 
**Subaccount** | **map[string]interface{}** |  | 

## Methods

### NewChargeCreateResponseData

`func NewChargeCreateResponseData(id int32, domain string, status string, reference string, receiptNumber map[string]interface{}, amount int32, message NullableString, gatewayResponse string, paidAt string, createdAt string, channel string, currency string, ipAddress string, metadata ChargeCreateResponseDataMetadata, log NullableChargeAuthorizationResponseDataLog, fees int32, feesSplit NullableInt32, authorization ChargeCreateResponseDataAuthorization, customer ChargeCreateResponseDataCustomer, plan map[string]interface{}, split map[string]interface{}, orderId map[string]interface{}, requestedAmount int32, posTransactionData map[string]interface{}, source map[string]interface{}, feesBreakdown map[string]interface{}, connect map[string]interface{}, transactionDate string, planObject map[string]interface{}, subaccount map[string]interface{}, ) *ChargeCreateResponseData`

NewChargeCreateResponseData instantiates a new ChargeCreateResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChargeCreateResponseDataWithDefaults

`func NewChargeCreateResponseDataWithDefaults() *ChargeCreateResponseData`

NewChargeCreateResponseDataWithDefaults instantiates a new ChargeCreateResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ChargeCreateResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ChargeCreateResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ChargeCreateResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetDomain

`func (o *ChargeCreateResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *ChargeCreateResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *ChargeCreateResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetStatus

`func (o *ChargeCreateResponseData) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ChargeCreateResponseData) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ChargeCreateResponseData) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetReference

`func (o *ChargeCreateResponseData) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *ChargeCreateResponseData) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *ChargeCreateResponseData) SetReference(v string)`

SetReference sets Reference field to given value.


### GetReceiptNumber

`func (o *ChargeCreateResponseData) GetReceiptNumber() map[string]interface{}`

GetReceiptNumber returns the ReceiptNumber field if non-nil, zero value otherwise.

### GetReceiptNumberOk

`func (o *ChargeCreateResponseData) GetReceiptNumberOk() (*map[string]interface{}, bool)`

GetReceiptNumberOk returns a tuple with the ReceiptNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiptNumber

`func (o *ChargeCreateResponseData) SetReceiptNumber(v map[string]interface{})`

SetReceiptNumber sets ReceiptNumber field to given value.


### SetReceiptNumberNil

`func (o *ChargeCreateResponseData) SetReceiptNumberNil(b bool)`

 SetReceiptNumberNil sets the value for ReceiptNumber to be an explicit nil

### UnsetReceiptNumber
`func (o *ChargeCreateResponseData) UnsetReceiptNumber()`

UnsetReceiptNumber ensures that no value is present for ReceiptNumber, not even an explicit nil
### GetAmount

`func (o *ChargeCreateResponseData) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *ChargeCreateResponseData) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *ChargeCreateResponseData) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetMessage

`func (o *ChargeCreateResponseData) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ChargeCreateResponseData) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ChargeCreateResponseData) SetMessage(v string)`

SetMessage sets Message field to given value.


### SetMessageNil

`func (o *ChargeCreateResponseData) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *ChargeCreateResponseData) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil
### GetGatewayResponse

`func (o *ChargeCreateResponseData) GetGatewayResponse() string`

GetGatewayResponse returns the GatewayResponse field if non-nil, zero value otherwise.

### GetGatewayResponseOk

`func (o *ChargeCreateResponseData) GetGatewayResponseOk() (*string, bool)`

GetGatewayResponseOk returns a tuple with the GatewayResponse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGatewayResponse

`func (o *ChargeCreateResponseData) SetGatewayResponse(v string)`

SetGatewayResponse sets GatewayResponse field to given value.


### GetPaidAt

`func (o *ChargeCreateResponseData) GetPaidAt() string`

GetPaidAt returns the PaidAt field if non-nil, zero value otherwise.

### GetPaidAtOk

`func (o *ChargeCreateResponseData) GetPaidAtOk() (*string, bool)`

GetPaidAtOk returns a tuple with the PaidAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaidAt

`func (o *ChargeCreateResponseData) SetPaidAt(v string)`

SetPaidAt sets PaidAt field to given value.


### GetCreatedAt

`func (o *ChargeCreateResponseData) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *ChargeCreateResponseData) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *ChargeCreateResponseData) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetChannel

`func (o *ChargeCreateResponseData) GetChannel() string`

GetChannel returns the Channel field if non-nil, zero value otherwise.

### GetChannelOk

`func (o *ChargeCreateResponseData) GetChannelOk() (*string, bool)`

GetChannelOk returns a tuple with the Channel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannel

`func (o *ChargeCreateResponseData) SetChannel(v string)`

SetChannel sets Channel field to given value.


### GetCurrency

`func (o *ChargeCreateResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *ChargeCreateResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *ChargeCreateResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetIpAddress

`func (o *ChargeCreateResponseData) GetIpAddress() string`

GetIpAddress returns the IpAddress field if non-nil, zero value otherwise.

### GetIpAddressOk

`func (o *ChargeCreateResponseData) GetIpAddressOk() (*string, bool)`

GetIpAddressOk returns a tuple with the IpAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIpAddress

`func (o *ChargeCreateResponseData) SetIpAddress(v string)`

SetIpAddress sets IpAddress field to given value.


### GetMetadata

`func (o *ChargeCreateResponseData) GetMetadata() ChargeCreateResponseDataMetadata`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *ChargeCreateResponseData) GetMetadataOk() (*ChargeCreateResponseDataMetadata, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *ChargeCreateResponseData) SetMetadata(v ChargeCreateResponseDataMetadata)`

SetMetadata sets Metadata field to given value.


### GetLog

`func (o *ChargeCreateResponseData) GetLog() ChargeAuthorizationResponseDataLog`

GetLog returns the Log field if non-nil, zero value otherwise.

### GetLogOk

`func (o *ChargeCreateResponseData) GetLogOk() (*ChargeAuthorizationResponseDataLog, bool)`

GetLogOk returns a tuple with the Log field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLog

`func (o *ChargeCreateResponseData) SetLog(v ChargeAuthorizationResponseDataLog)`

SetLog sets Log field to given value.


### SetLogNil

`func (o *ChargeCreateResponseData) SetLogNil(b bool)`

 SetLogNil sets the value for Log to be an explicit nil

### UnsetLog
`func (o *ChargeCreateResponseData) UnsetLog()`

UnsetLog ensures that no value is present for Log, not even an explicit nil
### GetFees

`func (o *ChargeCreateResponseData) GetFees() int32`

GetFees returns the Fees field if non-nil, zero value otherwise.

### GetFeesOk

`func (o *ChargeCreateResponseData) GetFeesOk() (*int32, bool)`

GetFeesOk returns a tuple with the Fees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFees

`func (o *ChargeCreateResponseData) SetFees(v int32)`

SetFees sets Fees field to given value.


### GetFeesSplit

`func (o *ChargeCreateResponseData) GetFeesSplit() int32`

GetFeesSplit returns the FeesSplit field if non-nil, zero value otherwise.

### GetFeesSplitOk

`func (o *ChargeCreateResponseData) GetFeesSplitOk() (*int32, bool)`

GetFeesSplitOk returns a tuple with the FeesSplit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeesSplit

`func (o *ChargeCreateResponseData) SetFeesSplit(v int32)`

SetFeesSplit sets FeesSplit field to given value.


### SetFeesSplitNil

`func (o *ChargeCreateResponseData) SetFeesSplitNil(b bool)`

 SetFeesSplitNil sets the value for FeesSplit to be an explicit nil

### UnsetFeesSplit
`func (o *ChargeCreateResponseData) UnsetFeesSplit()`

UnsetFeesSplit ensures that no value is present for FeesSplit, not even an explicit nil
### GetAuthorization

`func (o *ChargeCreateResponseData) GetAuthorization() ChargeCreateResponseDataAuthorization`

GetAuthorization returns the Authorization field if non-nil, zero value otherwise.

### GetAuthorizationOk

`func (o *ChargeCreateResponseData) GetAuthorizationOk() (*ChargeCreateResponseDataAuthorization, bool)`

GetAuthorizationOk returns a tuple with the Authorization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorization

`func (o *ChargeCreateResponseData) SetAuthorization(v ChargeCreateResponseDataAuthorization)`

SetAuthorization sets Authorization field to given value.


### GetCustomer

`func (o *ChargeCreateResponseData) GetCustomer() ChargeCreateResponseDataCustomer`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *ChargeCreateResponseData) GetCustomerOk() (*ChargeCreateResponseDataCustomer, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *ChargeCreateResponseData) SetCustomer(v ChargeCreateResponseDataCustomer)`

SetCustomer sets Customer field to given value.


### GetPlan

`func (o *ChargeCreateResponseData) GetPlan() map[string]interface{}`

GetPlan returns the Plan field if non-nil, zero value otherwise.

### GetPlanOk

`func (o *ChargeCreateResponseData) GetPlanOk() (*map[string]interface{}, bool)`

GetPlanOk returns a tuple with the Plan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlan

`func (o *ChargeCreateResponseData) SetPlan(v map[string]interface{})`

SetPlan sets Plan field to given value.


### SetPlanNil

`func (o *ChargeCreateResponseData) SetPlanNil(b bool)`

 SetPlanNil sets the value for Plan to be an explicit nil

### UnsetPlan
`func (o *ChargeCreateResponseData) UnsetPlan()`

UnsetPlan ensures that no value is present for Plan, not even an explicit nil
### GetSplit

`func (o *ChargeCreateResponseData) GetSplit() map[string]interface{}`

GetSplit returns the Split field if non-nil, zero value otherwise.

### GetSplitOk

`func (o *ChargeCreateResponseData) GetSplitOk() (*map[string]interface{}, bool)`

GetSplitOk returns a tuple with the Split field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplit

`func (o *ChargeCreateResponseData) SetSplit(v map[string]interface{})`

SetSplit sets Split field to given value.


### GetOrderId

`func (o *ChargeCreateResponseData) GetOrderId() map[string]interface{}`

GetOrderId returns the OrderId field if non-nil, zero value otherwise.

### GetOrderIdOk

`func (o *ChargeCreateResponseData) GetOrderIdOk() (*map[string]interface{}, bool)`

GetOrderIdOk returns a tuple with the OrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderId

`func (o *ChargeCreateResponseData) SetOrderId(v map[string]interface{})`

SetOrderId sets OrderId field to given value.


### SetOrderIdNil

`func (o *ChargeCreateResponseData) SetOrderIdNil(b bool)`

 SetOrderIdNil sets the value for OrderId to be an explicit nil

### UnsetOrderId
`func (o *ChargeCreateResponseData) UnsetOrderId()`

UnsetOrderId ensures that no value is present for OrderId, not even an explicit nil
### GetRequestedAmount

`func (o *ChargeCreateResponseData) GetRequestedAmount() int32`

GetRequestedAmount returns the RequestedAmount field if non-nil, zero value otherwise.

### GetRequestedAmountOk

`func (o *ChargeCreateResponseData) GetRequestedAmountOk() (*int32, bool)`

GetRequestedAmountOk returns a tuple with the RequestedAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedAmount

`func (o *ChargeCreateResponseData) SetRequestedAmount(v int32)`

SetRequestedAmount sets RequestedAmount field to given value.


### GetPosTransactionData

`func (o *ChargeCreateResponseData) GetPosTransactionData() map[string]interface{}`

GetPosTransactionData returns the PosTransactionData field if non-nil, zero value otherwise.

### GetPosTransactionDataOk

`func (o *ChargeCreateResponseData) GetPosTransactionDataOk() (*map[string]interface{}, bool)`

GetPosTransactionDataOk returns a tuple with the PosTransactionData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPosTransactionData

`func (o *ChargeCreateResponseData) SetPosTransactionData(v map[string]interface{})`

SetPosTransactionData sets PosTransactionData field to given value.


### SetPosTransactionDataNil

`func (o *ChargeCreateResponseData) SetPosTransactionDataNil(b bool)`

 SetPosTransactionDataNil sets the value for PosTransactionData to be an explicit nil

### UnsetPosTransactionData
`func (o *ChargeCreateResponseData) UnsetPosTransactionData()`

UnsetPosTransactionData ensures that no value is present for PosTransactionData, not even an explicit nil
### GetSource

`func (o *ChargeCreateResponseData) GetSource() map[string]interface{}`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *ChargeCreateResponseData) GetSourceOk() (*map[string]interface{}, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *ChargeCreateResponseData) SetSource(v map[string]interface{})`

SetSource sets Source field to given value.


### SetSourceNil

`func (o *ChargeCreateResponseData) SetSourceNil(b bool)`

 SetSourceNil sets the value for Source to be an explicit nil

### UnsetSource
`func (o *ChargeCreateResponseData) UnsetSource()`

UnsetSource ensures that no value is present for Source, not even an explicit nil
### GetFeesBreakdown

`func (o *ChargeCreateResponseData) GetFeesBreakdown() map[string]interface{}`

GetFeesBreakdown returns the FeesBreakdown field if non-nil, zero value otherwise.

### GetFeesBreakdownOk

`func (o *ChargeCreateResponseData) GetFeesBreakdownOk() (*map[string]interface{}, bool)`

GetFeesBreakdownOk returns a tuple with the FeesBreakdown field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeesBreakdown

`func (o *ChargeCreateResponseData) SetFeesBreakdown(v map[string]interface{})`

SetFeesBreakdown sets FeesBreakdown field to given value.


### SetFeesBreakdownNil

`func (o *ChargeCreateResponseData) SetFeesBreakdownNil(b bool)`

 SetFeesBreakdownNil sets the value for FeesBreakdown to be an explicit nil

### UnsetFeesBreakdown
`func (o *ChargeCreateResponseData) UnsetFeesBreakdown()`

UnsetFeesBreakdown ensures that no value is present for FeesBreakdown, not even an explicit nil
### GetConnect

`func (o *ChargeCreateResponseData) GetConnect() map[string]interface{}`

GetConnect returns the Connect field if non-nil, zero value otherwise.

### GetConnectOk

`func (o *ChargeCreateResponseData) GetConnectOk() (*map[string]interface{}, bool)`

GetConnectOk returns a tuple with the Connect field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnect

`func (o *ChargeCreateResponseData) SetConnect(v map[string]interface{})`

SetConnect sets Connect field to given value.


### SetConnectNil

`func (o *ChargeCreateResponseData) SetConnectNil(b bool)`

 SetConnectNil sets the value for Connect to be an explicit nil

### UnsetConnect
`func (o *ChargeCreateResponseData) UnsetConnect()`

UnsetConnect ensures that no value is present for Connect, not even an explicit nil
### GetTransactionDate

`func (o *ChargeCreateResponseData) GetTransactionDate() string`

GetTransactionDate returns the TransactionDate field if non-nil, zero value otherwise.

### GetTransactionDateOk

`func (o *ChargeCreateResponseData) GetTransactionDateOk() (*string, bool)`

GetTransactionDateOk returns a tuple with the TransactionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDate

`func (o *ChargeCreateResponseData) SetTransactionDate(v string)`

SetTransactionDate sets TransactionDate field to given value.


### GetPlanObject

`func (o *ChargeCreateResponseData) GetPlanObject() map[string]interface{}`

GetPlanObject returns the PlanObject field if non-nil, zero value otherwise.

### GetPlanObjectOk

`func (o *ChargeCreateResponseData) GetPlanObjectOk() (*map[string]interface{}, bool)`

GetPlanObjectOk returns a tuple with the PlanObject field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlanObject

`func (o *ChargeCreateResponseData) SetPlanObject(v map[string]interface{})`

SetPlanObject sets PlanObject field to given value.


### GetSubaccount

`func (o *ChargeCreateResponseData) GetSubaccount() map[string]interface{}`

GetSubaccount returns the Subaccount field if non-nil, zero value otherwise.

### GetSubaccountOk

`func (o *ChargeCreateResponseData) GetSubaccountOk() (*map[string]interface{}, bool)`

GetSubaccountOk returns a tuple with the Subaccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubaccount

`func (o *ChargeCreateResponseData) SetSubaccount(v map[string]interface{})`

SetSubaccount sets Subaccount field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


