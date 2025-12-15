# VerifyResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**Domain** | **string** |  | 
**Status** | **string** |  | 
**Reference** | **string** |  | 
**ReceiptNumber** | **NullableString** |  | 
**Amount** | **int32** |  | 
**Message** | **NullableString** |  | 
**GatewayResponse** | **string** |  | 
**Channel** | **string** |  | 
**Currency** | **string** |  | 
**IpAddress** | **string** |  | 
**Metadata** | [**VerifyResponseDataMetadata**](VerifyResponseDataMetadata.md) |  | 
**Log** | [**NullableVerifyResponseDataLog**](VerifyResponseDataLog.md) |  | 
**Fees** | **NullableInt32** |  | 
**FeesSplit** | **interface{}** |  | 
**Authorization** | [**VerifyResponseDataAuthorization**](VerifyResponseDataAuthorization.md) |  | 
**Customer** | [**VerifyResponseDataCustomer**](VerifyResponseDataCustomer.md) |  | 
**Plan** | **NullableString** |  | 
**Split** | **map[string]interface{}** |  | 
**OrderId** | **interface{}** |  | 
**PaidAt** | **NullableString** |  | 
**CreatedAt** | **string** |  | 
**RequestedAmount** | **int32** |  | 
**PosTransactionData** | **interface{}** |  | 
**Source** | **interface{}** |  | 
**FeesBreakdown** | **interface{}** |  | 
**Connect** | **interface{}** |  | 
**TransactionDate** | **string** |  | 
**PlanObject** | [**NullableVerifyResponseDataPlanObject**](VerifyResponseDataPlanObject.md) |  | 
**Subaccount** | **map[string]interface{}** |  | 

## Methods

### NewVerifyResponseData

`func NewVerifyResponseData(id int32, domain string, status string, reference string, receiptNumber NullableString, amount int32, message NullableString, gatewayResponse string, channel string, currency string, ipAddress string, metadata VerifyResponseDataMetadata, log NullableVerifyResponseDataLog, fees NullableInt32, feesSplit interface{}, authorization VerifyResponseDataAuthorization, customer VerifyResponseDataCustomer, plan NullableString, split map[string]interface{}, orderId interface{}, paidAt NullableString, createdAt string, requestedAmount int32, posTransactionData interface{}, source interface{}, feesBreakdown interface{}, connect interface{}, transactionDate string, planObject NullableVerifyResponseDataPlanObject, subaccount map[string]interface{}, ) *VerifyResponseData`

NewVerifyResponseData instantiates a new VerifyResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVerifyResponseDataWithDefaults

`func NewVerifyResponseDataWithDefaults() *VerifyResponseData`

NewVerifyResponseDataWithDefaults instantiates a new VerifyResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *VerifyResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *VerifyResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *VerifyResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetDomain

`func (o *VerifyResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *VerifyResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *VerifyResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetStatus

`func (o *VerifyResponseData) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *VerifyResponseData) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *VerifyResponseData) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetReference

`func (o *VerifyResponseData) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *VerifyResponseData) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *VerifyResponseData) SetReference(v string)`

SetReference sets Reference field to given value.


### GetReceiptNumber

`func (o *VerifyResponseData) GetReceiptNumber() string`

GetReceiptNumber returns the ReceiptNumber field if non-nil, zero value otherwise.

### GetReceiptNumberOk

`func (o *VerifyResponseData) GetReceiptNumberOk() (*string, bool)`

GetReceiptNumberOk returns a tuple with the ReceiptNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiptNumber

`func (o *VerifyResponseData) SetReceiptNumber(v string)`

SetReceiptNumber sets ReceiptNumber field to given value.


### SetReceiptNumberNil

`func (o *VerifyResponseData) SetReceiptNumberNil(b bool)`

 SetReceiptNumberNil sets the value for ReceiptNumber to be an explicit nil

### UnsetReceiptNumber
`func (o *VerifyResponseData) UnsetReceiptNumber()`

UnsetReceiptNumber ensures that no value is present for ReceiptNumber, not even an explicit nil
### GetAmount

`func (o *VerifyResponseData) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *VerifyResponseData) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *VerifyResponseData) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetMessage

`func (o *VerifyResponseData) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *VerifyResponseData) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *VerifyResponseData) SetMessage(v string)`

SetMessage sets Message field to given value.


### SetMessageNil

`func (o *VerifyResponseData) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *VerifyResponseData) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil
### GetGatewayResponse

`func (o *VerifyResponseData) GetGatewayResponse() string`

GetGatewayResponse returns the GatewayResponse field if non-nil, zero value otherwise.

### GetGatewayResponseOk

`func (o *VerifyResponseData) GetGatewayResponseOk() (*string, bool)`

GetGatewayResponseOk returns a tuple with the GatewayResponse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGatewayResponse

`func (o *VerifyResponseData) SetGatewayResponse(v string)`

SetGatewayResponse sets GatewayResponse field to given value.


### GetChannel

`func (o *VerifyResponseData) GetChannel() string`

GetChannel returns the Channel field if non-nil, zero value otherwise.

### GetChannelOk

`func (o *VerifyResponseData) GetChannelOk() (*string, bool)`

GetChannelOk returns a tuple with the Channel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannel

`func (o *VerifyResponseData) SetChannel(v string)`

SetChannel sets Channel field to given value.


### GetCurrency

`func (o *VerifyResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *VerifyResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *VerifyResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetIpAddress

`func (o *VerifyResponseData) GetIpAddress() string`

GetIpAddress returns the IpAddress field if non-nil, zero value otherwise.

### GetIpAddressOk

`func (o *VerifyResponseData) GetIpAddressOk() (*string, bool)`

GetIpAddressOk returns a tuple with the IpAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIpAddress

`func (o *VerifyResponseData) SetIpAddress(v string)`

SetIpAddress sets IpAddress field to given value.


### GetMetadata

`func (o *VerifyResponseData) GetMetadata() VerifyResponseDataMetadata`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *VerifyResponseData) GetMetadataOk() (*VerifyResponseDataMetadata, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *VerifyResponseData) SetMetadata(v VerifyResponseDataMetadata)`

SetMetadata sets Metadata field to given value.


### GetLog

`func (o *VerifyResponseData) GetLog() VerifyResponseDataLog`

GetLog returns the Log field if non-nil, zero value otherwise.

### GetLogOk

`func (o *VerifyResponseData) GetLogOk() (*VerifyResponseDataLog, bool)`

GetLogOk returns a tuple with the Log field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLog

`func (o *VerifyResponseData) SetLog(v VerifyResponseDataLog)`

SetLog sets Log field to given value.


### SetLogNil

`func (o *VerifyResponseData) SetLogNil(b bool)`

 SetLogNil sets the value for Log to be an explicit nil

### UnsetLog
`func (o *VerifyResponseData) UnsetLog()`

UnsetLog ensures that no value is present for Log, not even an explicit nil
### GetFees

`func (o *VerifyResponseData) GetFees() int32`

GetFees returns the Fees field if non-nil, zero value otherwise.

### GetFeesOk

`func (o *VerifyResponseData) GetFeesOk() (*int32, bool)`

GetFeesOk returns a tuple with the Fees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFees

`func (o *VerifyResponseData) SetFees(v int32)`

SetFees sets Fees field to given value.


### SetFeesNil

`func (o *VerifyResponseData) SetFeesNil(b bool)`

 SetFeesNil sets the value for Fees to be an explicit nil

### UnsetFees
`func (o *VerifyResponseData) UnsetFees()`

UnsetFees ensures that no value is present for Fees, not even an explicit nil
### GetFeesSplit

`func (o *VerifyResponseData) GetFeesSplit() interface{}`

GetFeesSplit returns the FeesSplit field if non-nil, zero value otherwise.

### GetFeesSplitOk

`func (o *VerifyResponseData) GetFeesSplitOk() (*interface{}, bool)`

GetFeesSplitOk returns a tuple with the FeesSplit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeesSplit

`func (o *VerifyResponseData) SetFeesSplit(v interface{})`

SetFeesSplit sets FeesSplit field to given value.


### SetFeesSplitNil

`func (o *VerifyResponseData) SetFeesSplitNil(b bool)`

 SetFeesSplitNil sets the value for FeesSplit to be an explicit nil

### UnsetFeesSplit
`func (o *VerifyResponseData) UnsetFeesSplit()`

UnsetFeesSplit ensures that no value is present for FeesSplit, not even an explicit nil
### GetAuthorization

`func (o *VerifyResponseData) GetAuthorization() VerifyResponseDataAuthorization`

GetAuthorization returns the Authorization field if non-nil, zero value otherwise.

### GetAuthorizationOk

`func (o *VerifyResponseData) GetAuthorizationOk() (*VerifyResponseDataAuthorization, bool)`

GetAuthorizationOk returns a tuple with the Authorization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorization

`func (o *VerifyResponseData) SetAuthorization(v VerifyResponseDataAuthorization)`

SetAuthorization sets Authorization field to given value.


### GetCustomer

`func (o *VerifyResponseData) GetCustomer() VerifyResponseDataCustomer`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *VerifyResponseData) GetCustomerOk() (*VerifyResponseDataCustomer, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *VerifyResponseData) SetCustomer(v VerifyResponseDataCustomer)`

SetCustomer sets Customer field to given value.


### GetPlan

`func (o *VerifyResponseData) GetPlan() string`

GetPlan returns the Plan field if non-nil, zero value otherwise.

### GetPlanOk

`func (o *VerifyResponseData) GetPlanOk() (*string, bool)`

GetPlanOk returns a tuple with the Plan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlan

`func (o *VerifyResponseData) SetPlan(v string)`

SetPlan sets Plan field to given value.


### SetPlanNil

`func (o *VerifyResponseData) SetPlanNil(b bool)`

 SetPlanNil sets the value for Plan to be an explicit nil

### UnsetPlan
`func (o *VerifyResponseData) UnsetPlan()`

UnsetPlan ensures that no value is present for Plan, not even an explicit nil
### GetSplit

`func (o *VerifyResponseData) GetSplit() map[string]interface{}`

GetSplit returns the Split field if non-nil, zero value otherwise.

### GetSplitOk

`func (o *VerifyResponseData) GetSplitOk() (*map[string]interface{}, bool)`

GetSplitOk returns a tuple with the Split field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplit

`func (o *VerifyResponseData) SetSplit(v map[string]interface{})`

SetSplit sets Split field to given value.


### GetOrderId

`func (o *VerifyResponseData) GetOrderId() interface{}`

GetOrderId returns the OrderId field if non-nil, zero value otherwise.

### GetOrderIdOk

`func (o *VerifyResponseData) GetOrderIdOk() (*interface{}, bool)`

GetOrderIdOk returns a tuple with the OrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderId

`func (o *VerifyResponseData) SetOrderId(v interface{})`

SetOrderId sets OrderId field to given value.


### SetOrderIdNil

`func (o *VerifyResponseData) SetOrderIdNil(b bool)`

 SetOrderIdNil sets the value for OrderId to be an explicit nil

### UnsetOrderId
`func (o *VerifyResponseData) UnsetOrderId()`

UnsetOrderId ensures that no value is present for OrderId, not even an explicit nil
### GetPaidAt

`func (o *VerifyResponseData) GetPaidAt() string`

GetPaidAt returns the PaidAt field if non-nil, zero value otherwise.

### GetPaidAtOk

`func (o *VerifyResponseData) GetPaidAtOk() (*string, bool)`

GetPaidAtOk returns a tuple with the PaidAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaidAt

`func (o *VerifyResponseData) SetPaidAt(v string)`

SetPaidAt sets PaidAt field to given value.


### SetPaidAtNil

`func (o *VerifyResponseData) SetPaidAtNil(b bool)`

 SetPaidAtNil sets the value for PaidAt to be an explicit nil

### UnsetPaidAt
`func (o *VerifyResponseData) UnsetPaidAt()`

UnsetPaidAt ensures that no value is present for PaidAt, not even an explicit nil
### GetCreatedAt

`func (o *VerifyResponseData) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *VerifyResponseData) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *VerifyResponseData) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetRequestedAmount

`func (o *VerifyResponseData) GetRequestedAmount() int32`

GetRequestedAmount returns the RequestedAmount field if non-nil, zero value otherwise.

### GetRequestedAmountOk

`func (o *VerifyResponseData) GetRequestedAmountOk() (*int32, bool)`

GetRequestedAmountOk returns a tuple with the RequestedAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedAmount

`func (o *VerifyResponseData) SetRequestedAmount(v int32)`

SetRequestedAmount sets RequestedAmount field to given value.


### GetPosTransactionData

`func (o *VerifyResponseData) GetPosTransactionData() interface{}`

GetPosTransactionData returns the PosTransactionData field if non-nil, zero value otherwise.

### GetPosTransactionDataOk

`func (o *VerifyResponseData) GetPosTransactionDataOk() (*interface{}, bool)`

GetPosTransactionDataOk returns a tuple with the PosTransactionData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPosTransactionData

`func (o *VerifyResponseData) SetPosTransactionData(v interface{})`

SetPosTransactionData sets PosTransactionData field to given value.


### SetPosTransactionDataNil

`func (o *VerifyResponseData) SetPosTransactionDataNil(b bool)`

 SetPosTransactionDataNil sets the value for PosTransactionData to be an explicit nil

### UnsetPosTransactionData
`func (o *VerifyResponseData) UnsetPosTransactionData()`

UnsetPosTransactionData ensures that no value is present for PosTransactionData, not even an explicit nil
### GetSource

`func (o *VerifyResponseData) GetSource() interface{}`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *VerifyResponseData) GetSourceOk() (*interface{}, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *VerifyResponseData) SetSource(v interface{})`

SetSource sets Source field to given value.


### SetSourceNil

`func (o *VerifyResponseData) SetSourceNil(b bool)`

 SetSourceNil sets the value for Source to be an explicit nil

### UnsetSource
`func (o *VerifyResponseData) UnsetSource()`

UnsetSource ensures that no value is present for Source, not even an explicit nil
### GetFeesBreakdown

`func (o *VerifyResponseData) GetFeesBreakdown() interface{}`

GetFeesBreakdown returns the FeesBreakdown field if non-nil, zero value otherwise.

### GetFeesBreakdownOk

`func (o *VerifyResponseData) GetFeesBreakdownOk() (*interface{}, bool)`

GetFeesBreakdownOk returns a tuple with the FeesBreakdown field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeesBreakdown

`func (o *VerifyResponseData) SetFeesBreakdown(v interface{})`

SetFeesBreakdown sets FeesBreakdown field to given value.


### SetFeesBreakdownNil

`func (o *VerifyResponseData) SetFeesBreakdownNil(b bool)`

 SetFeesBreakdownNil sets the value for FeesBreakdown to be an explicit nil

### UnsetFeesBreakdown
`func (o *VerifyResponseData) UnsetFeesBreakdown()`

UnsetFeesBreakdown ensures that no value is present for FeesBreakdown, not even an explicit nil
### GetConnect

`func (o *VerifyResponseData) GetConnect() interface{}`

GetConnect returns the Connect field if non-nil, zero value otherwise.

### GetConnectOk

`func (o *VerifyResponseData) GetConnectOk() (*interface{}, bool)`

GetConnectOk returns a tuple with the Connect field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnect

`func (o *VerifyResponseData) SetConnect(v interface{})`

SetConnect sets Connect field to given value.


### SetConnectNil

`func (o *VerifyResponseData) SetConnectNil(b bool)`

 SetConnectNil sets the value for Connect to be an explicit nil

### UnsetConnect
`func (o *VerifyResponseData) UnsetConnect()`

UnsetConnect ensures that no value is present for Connect, not even an explicit nil
### GetTransactionDate

`func (o *VerifyResponseData) GetTransactionDate() string`

GetTransactionDate returns the TransactionDate field if non-nil, zero value otherwise.

### GetTransactionDateOk

`func (o *VerifyResponseData) GetTransactionDateOk() (*string, bool)`

GetTransactionDateOk returns a tuple with the TransactionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDate

`func (o *VerifyResponseData) SetTransactionDate(v string)`

SetTransactionDate sets TransactionDate field to given value.


### GetPlanObject

`func (o *VerifyResponseData) GetPlanObject() VerifyResponseDataPlanObject`

GetPlanObject returns the PlanObject field if non-nil, zero value otherwise.

### GetPlanObjectOk

`func (o *VerifyResponseData) GetPlanObjectOk() (*VerifyResponseDataPlanObject, bool)`

GetPlanObjectOk returns a tuple with the PlanObject field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlanObject

`func (o *VerifyResponseData) SetPlanObject(v VerifyResponseDataPlanObject)`

SetPlanObject sets PlanObject field to given value.


### SetPlanObjectNil

`func (o *VerifyResponseData) SetPlanObjectNil(b bool)`

 SetPlanObjectNil sets the value for PlanObject to be an explicit nil

### UnsetPlanObject
`func (o *VerifyResponseData) UnsetPlanObject()`

UnsetPlanObject ensures that no value is present for PlanObject, not even an explicit nil
### GetSubaccount

`func (o *VerifyResponseData) GetSubaccount() map[string]interface{}`

GetSubaccount returns the Subaccount field if non-nil, zero value otherwise.

### GetSubaccountOk

`func (o *VerifyResponseData) GetSubaccountOk() (*map[string]interface{}, bool)`

GetSubaccountOk returns a tuple with the Subaccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubaccount

`func (o *VerifyResponseData) SetSubaccount(v map[string]interface{})`

SetSubaccount sets Subaccount field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


