# TransactionListResponseArray

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
**PaidAt** | **NullableString** |  | 
**CreatedAt** | **string** |  | 
**Channel** | **string** |  | 
**Currency** | **string** |  | 
**IpAddress** | **NullableString** |  | 
**Metadata** | **map[string]interface{}** |  | 
**Log** | [**NullableChargeAuthorizationResponseDataLog**](ChargeAuthorizationResponseDataLog.md) |  | 
**Fees** | **NullableInt32** |  | 
**FeesSplit** | **NullableInt32** |  | 
**Customer** | [**TransactionListResponseArrayCustomer**](TransactionListResponseArrayCustomer.md) |  | 
**Authorization** | [**TransactionListResponseArrayAuthorization**](TransactionListResponseArrayAuthorization.md) |  | 
**Plan** | **map[string]interface{}** |  | 
**Split** | **map[string]interface{}** |  | 
**Subaccount** | **map[string]interface{}** |  | 
**OrderId** | **map[string]interface{}** |  | 
**RequestedAmount** | **int32** |  | 
**Source** | [**NullableTransactionListResponseArraySource**](TransactionListResponseArraySource.md) |  | 
**Connect** | **map[string]interface{}** |  | 
**PosTransactionData** | **map[string]interface{}** |  | 

## Methods

### NewTransactionListResponseArray

`func NewTransactionListResponseArray(id int32, domain string, status string, reference string, amount int32, message map[string]interface{}, gatewayResponse string, paidAt NullableString, createdAt string, channel string, currency string, ipAddress NullableString, metadata map[string]interface{}, log NullableChargeAuthorizationResponseDataLog, fees NullableInt32, feesSplit NullableInt32, customer TransactionListResponseArrayCustomer, authorization TransactionListResponseArrayAuthorization, plan map[string]interface{}, split map[string]interface{}, subaccount map[string]interface{}, orderId map[string]interface{}, requestedAmount int32, source NullableTransactionListResponseArraySource, connect map[string]interface{}, posTransactionData map[string]interface{}, ) *TransactionListResponseArray`

NewTransactionListResponseArray instantiates a new TransactionListResponseArray object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionListResponseArrayWithDefaults

`func NewTransactionListResponseArrayWithDefaults() *TransactionListResponseArray`

NewTransactionListResponseArrayWithDefaults instantiates a new TransactionListResponseArray object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *TransactionListResponseArray) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *TransactionListResponseArray) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *TransactionListResponseArray) SetId(v int32)`

SetId sets Id field to given value.


### GetDomain

`func (o *TransactionListResponseArray) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *TransactionListResponseArray) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *TransactionListResponseArray) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetStatus

`func (o *TransactionListResponseArray) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *TransactionListResponseArray) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *TransactionListResponseArray) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetReference

`func (o *TransactionListResponseArray) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *TransactionListResponseArray) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *TransactionListResponseArray) SetReference(v string)`

SetReference sets Reference field to given value.


### GetAmount

`func (o *TransactionListResponseArray) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *TransactionListResponseArray) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *TransactionListResponseArray) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetMessage

`func (o *TransactionListResponseArray) GetMessage() map[string]interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *TransactionListResponseArray) GetMessageOk() (*map[string]interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *TransactionListResponseArray) SetMessage(v map[string]interface{})`

SetMessage sets Message field to given value.


### SetMessageNil

`func (o *TransactionListResponseArray) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *TransactionListResponseArray) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil
### GetGatewayResponse

`func (o *TransactionListResponseArray) GetGatewayResponse() string`

GetGatewayResponse returns the GatewayResponse field if non-nil, zero value otherwise.

### GetGatewayResponseOk

`func (o *TransactionListResponseArray) GetGatewayResponseOk() (*string, bool)`

GetGatewayResponseOk returns a tuple with the GatewayResponse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGatewayResponse

`func (o *TransactionListResponseArray) SetGatewayResponse(v string)`

SetGatewayResponse sets GatewayResponse field to given value.


### GetPaidAt

`func (o *TransactionListResponseArray) GetPaidAt() string`

GetPaidAt returns the PaidAt field if non-nil, zero value otherwise.

### GetPaidAtOk

`func (o *TransactionListResponseArray) GetPaidAtOk() (*string, bool)`

GetPaidAtOk returns a tuple with the PaidAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaidAt

`func (o *TransactionListResponseArray) SetPaidAt(v string)`

SetPaidAt sets PaidAt field to given value.


### SetPaidAtNil

`func (o *TransactionListResponseArray) SetPaidAtNil(b bool)`

 SetPaidAtNil sets the value for PaidAt to be an explicit nil

### UnsetPaidAt
`func (o *TransactionListResponseArray) UnsetPaidAt()`

UnsetPaidAt ensures that no value is present for PaidAt, not even an explicit nil
### GetCreatedAt

`func (o *TransactionListResponseArray) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *TransactionListResponseArray) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *TransactionListResponseArray) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetChannel

`func (o *TransactionListResponseArray) GetChannel() string`

GetChannel returns the Channel field if non-nil, zero value otherwise.

### GetChannelOk

`func (o *TransactionListResponseArray) GetChannelOk() (*string, bool)`

GetChannelOk returns a tuple with the Channel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannel

`func (o *TransactionListResponseArray) SetChannel(v string)`

SetChannel sets Channel field to given value.


### GetCurrency

`func (o *TransactionListResponseArray) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *TransactionListResponseArray) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *TransactionListResponseArray) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetIpAddress

`func (o *TransactionListResponseArray) GetIpAddress() string`

GetIpAddress returns the IpAddress field if non-nil, zero value otherwise.

### GetIpAddressOk

`func (o *TransactionListResponseArray) GetIpAddressOk() (*string, bool)`

GetIpAddressOk returns a tuple with the IpAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIpAddress

`func (o *TransactionListResponseArray) SetIpAddress(v string)`

SetIpAddress sets IpAddress field to given value.


### SetIpAddressNil

`func (o *TransactionListResponseArray) SetIpAddressNil(b bool)`

 SetIpAddressNil sets the value for IpAddress to be an explicit nil

### UnsetIpAddress
`func (o *TransactionListResponseArray) UnsetIpAddress()`

UnsetIpAddress ensures that no value is present for IpAddress, not even an explicit nil
### GetMetadata

`func (o *TransactionListResponseArray) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *TransactionListResponseArray) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *TransactionListResponseArray) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.


### SetMetadataNil

`func (o *TransactionListResponseArray) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *TransactionListResponseArray) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil
### GetLog

`func (o *TransactionListResponseArray) GetLog() ChargeAuthorizationResponseDataLog`

GetLog returns the Log field if non-nil, zero value otherwise.

### GetLogOk

`func (o *TransactionListResponseArray) GetLogOk() (*ChargeAuthorizationResponseDataLog, bool)`

GetLogOk returns a tuple with the Log field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLog

`func (o *TransactionListResponseArray) SetLog(v ChargeAuthorizationResponseDataLog)`

SetLog sets Log field to given value.


### SetLogNil

`func (o *TransactionListResponseArray) SetLogNil(b bool)`

 SetLogNil sets the value for Log to be an explicit nil

### UnsetLog
`func (o *TransactionListResponseArray) UnsetLog()`

UnsetLog ensures that no value is present for Log, not even an explicit nil
### GetFees

`func (o *TransactionListResponseArray) GetFees() int32`

GetFees returns the Fees field if non-nil, zero value otherwise.

### GetFeesOk

`func (o *TransactionListResponseArray) GetFeesOk() (*int32, bool)`

GetFeesOk returns a tuple with the Fees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFees

`func (o *TransactionListResponseArray) SetFees(v int32)`

SetFees sets Fees field to given value.


### SetFeesNil

`func (o *TransactionListResponseArray) SetFeesNil(b bool)`

 SetFeesNil sets the value for Fees to be an explicit nil

### UnsetFees
`func (o *TransactionListResponseArray) UnsetFees()`

UnsetFees ensures that no value is present for Fees, not even an explicit nil
### GetFeesSplit

`func (o *TransactionListResponseArray) GetFeesSplit() int32`

GetFeesSplit returns the FeesSplit field if non-nil, zero value otherwise.

### GetFeesSplitOk

`func (o *TransactionListResponseArray) GetFeesSplitOk() (*int32, bool)`

GetFeesSplitOk returns a tuple with the FeesSplit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeesSplit

`func (o *TransactionListResponseArray) SetFeesSplit(v int32)`

SetFeesSplit sets FeesSplit field to given value.


### SetFeesSplitNil

`func (o *TransactionListResponseArray) SetFeesSplitNil(b bool)`

 SetFeesSplitNil sets the value for FeesSplit to be an explicit nil

### UnsetFeesSplit
`func (o *TransactionListResponseArray) UnsetFeesSplit()`

UnsetFeesSplit ensures that no value is present for FeesSplit, not even an explicit nil
### GetCustomer

`func (o *TransactionListResponseArray) GetCustomer() TransactionListResponseArrayCustomer`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *TransactionListResponseArray) GetCustomerOk() (*TransactionListResponseArrayCustomer, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *TransactionListResponseArray) SetCustomer(v TransactionListResponseArrayCustomer)`

SetCustomer sets Customer field to given value.


### GetAuthorization

`func (o *TransactionListResponseArray) GetAuthorization() TransactionListResponseArrayAuthorization`

GetAuthorization returns the Authorization field if non-nil, zero value otherwise.

### GetAuthorizationOk

`func (o *TransactionListResponseArray) GetAuthorizationOk() (*TransactionListResponseArrayAuthorization, bool)`

GetAuthorizationOk returns a tuple with the Authorization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorization

`func (o *TransactionListResponseArray) SetAuthorization(v TransactionListResponseArrayAuthorization)`

SetAuthorization sets Authorization field to given value.


### GetPlan

`func (o *TransactionListResponseArray) GetPlan() map[string]interface{}`

GetPlan returns the Plan field if non-nil, zero value otherwise.

### GetPlanOk

`func (o *TransactionListResponseArray) GetPlanOk() (*map[string]interface{}, bool)`

GetPlanOk returns a tuple with the Plan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlan

`func (o *TransactionListResponseArray) SetPlan(v map[string]interface{})`

SetPlan sets Plan field to given value.


### GetSplit

`func (o *TransactionListResponseArray) GetSplit() map[string]interface{}`

GetSplit returns the Split field if non-nil, zero value otherwise.

### GetSplitOk

`func (o *TransactionListResponseArray) GetSplitOk() (*map[string]interface{}, bool)`

GetSplitOk returns a tuple with the Split field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplit

`func (o *TransactionListResponseArray) SetSplit(v map[string]interface{})`

SetSplit sets Split field to given value.


### GetSubaccount

`func (o *TransactionListResponseArray) GetSubaccount() map[string]interface{}`

GetSubaccount returns the Subaccount field if non-nil, zero value otherwise.

### GetSubaccountOk

`func (o *TransactionListResponseArray) GetSubaccountOk() (*map[string]interface{}, bool)`

GetSubaccountOk returns a tuple with the Subaccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubaccount

`func (o *TransactionListResponseArray) SetSubaccount(v map[string]interface{})`

SetSubaccount sets Subaccount field to given value.


### GetOrderId

`func (o *TransactionListResponseArray) GetOrderId() map[string]interface{}`

GetOrderId returns the OrderId field if non-nil, zero value otherwise.

### GetOrderIdOk

`func (o *TransactionListResponseArray) GetOrderIdOk() (*map[string]interface{}, bool)`

GetOrderIdOk returns a tuple with the OrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderId

`func (o *TransactionListResponseArray) SetOrderId(v map[string]interface{})`

SetOrderId sets OrderId field to given value.


### SetOrderIdNil

`func (o *TransactionListResponseArray) SetOrderIdNil(b bool)`

 SetOrderIdNil sets the value for OrderId to be an explicit nil

### UnsetOrderId
`func (o *TransactionListResponseArray) UnsetOrderId()`

UnsetOrderId ensures that no value is present for OrderId, not even an explicit nil
### GetRequestedAmount

`func (o *TransactionListResponseArray) GetRequestedAmount() int32`

GetRequestedAmount returns the RequestedAmount field if non-nil, zero value otherwise.

### GetRequestedAmountOk

`func (o *TransactionListResponseArray) GetRequestedAmountOk() (*int32, bool)`

GetRequestedAmountOk returns a tuple with the RequestedAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedAmount

`func (o *TransactionListResponseArray) SetRequestedAmount(v int32)`

SetRequestedAmount sets RequestedAmount field to given value.


### GetSource

`func (o *TransactionListResponseArray) GetSource() TransactionListResponseArraySource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *TransactionListResponseArray) GetSourceOk() (*TransactionListResponseArraySource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *TransactionListResponseArray) SetSource(v TransactionListResponseArraySource)`

SetSource sets Source field to given value.


### SetSourceNil

`func (o *TransactionListResponseArray) SetSourceNil(b bool)`

 SetSourceNil sets the value for Source to be an explicit nil

### UnsetSource
`func (o *TransactionListResponseArray) UnsetSource()`

UnsetSource ensures that no value is present for Source, not even an explicit nil
### GetConnect

`func (o *TransactionListResponseArray) GetConnect() map[string]interface{}`

GetConnect returns the Connect field if non-nil, zero value otherwise.

### GetConnectOk

`func (o *TransactionListResponseArray) GetConnectOk() (*map[string]interface{}, bool)`

GetConnectOk returns a tuple with the Connect field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnect

`func (o *TransactionListResponseArray) SetConnect(v map[string]interface{})`

SetConnect sets Connect field to given value.


### SetConnectNil

`func (o *TransactionListResponseArray) SetConnectNil(b bool)`

 SetConnectNil sets the value for Connect to be an explicit nil

### UnsetConnect
`func (o *TransactionListResponseArray) UnsetConnect()`

UnsetConnect ensures that no value is present for Connect, not even an explicit nil
### GetPosTransactionData

`func (o *TransactionListResponseArray) GetPosTransactionData() map[string]interface{}`

GetPosTransactionData returns the PosTransactionData field if non-nil, zero value otherwise.

### GetPosTransactionDataOk

`func (o *TransactionListResponseArray) GetPosTransactionDataOk() (*map[string]interface{}, bool)`

GetPosTransactionDataOk returns a tuple with the PosTransactionData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPosTransactionData

`func (o *TransactionListResponseArray) SetPosTransactionData(v map[string]interface{})`

SetPosTransactionData sets PosTransactionData field to given value.


### SetPosTransactionDataNil

`func (o *TransactionListResponseArray) SetPosTransactionDataNil(b bool)`

 SetPosTransactionDataNil sets the value for PosTransactionData to be an explicit nil

### UnsetPosTransactionData
`func (o *TransactionListResponseArray) UnsetPosTransactionData()`

UnsetPosTransactionData ensures that no value is present for PosTransactionData, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


