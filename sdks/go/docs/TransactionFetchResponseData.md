# TransactionFetchResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**Domain** | **string** |  | 
**Status** | **string** |  | 
**Reference** | **string** |  | 
**ReceiptNumber** | **interface{}** |  | 
**Amount** | **int32** |  | 
**Message** | **interface{}** |  | 
**GatewayResponse** | **string** |  | 
**HelpdeskLink** | **interface{}** |  | 
**PaidAt** | **string** |  | 
**CreatedAt** | **string** |  | 
**Channel** | **string** |  | 
**Currency** | **string** |  | 
**IpAddress** | **string** |  | 
**Metadata** | [**TransactionFetchResponseDataMetadata**](TransactionFetchResponseDataMetadata.md) |  | 
**Log** | [**NullableChargeAuthorizationResponseDataLog**](ChargeAuthorizationResponseDataLog.md) |  | 
**Fees** | **int32** |  | 
**FeesSplit** | **NullableInt32** |  | 
**Authorization** | [**TransactionFetchResponseDataAuthorization**](TransactionFetchResponseDataAuthorization.md) |  | 
**Customer** | [**TransactionFetchResponseDataCustomer**](TransactionFetchResponseDataCustomer.md) |  | 
**Plan** | **map[string]interface{}** |  | 
**Subaccount** | **map[string]interface{}** |  | 
**Split** | **map[string]interface{}** |  | 
**OrderId** | **interface{}** |  | 
**RequestedAmount** | **int32** |  | 
**PosTransactionData** | **interface{}** |  | 
**Source** | [**TransactionFetchResponseDataSource**](TransactionFetchResponseDataSource.md) |  | 
**FeesBreakdown** | **interface{}** |  | 
**Connect** | **interface{}** |  | 

## Methods

### NewTransactionFetchResponseData

`func NewTransactionFetchResponseData(id int32, domain string, status string, reference string, receiptNumber interface{}, amount int32, message interface{}, gatewayResponse string, helpdeskLink interface{}, paidAt string, createdAt string, channel string, currency string, ipAddress string, metadata TransactionFetchResponseDataMetadata, log NullableChargeAuthorizationResponseDataLog, fees int32, feesSplit NullableInt32, authorization TransactionFetchResponseDataAuthorization, customer TransactionFetchResponseDataCustomer, plan map[string]interface{}, subaccount map[string]interface{}, split map[string]interface{}, orderId interface{}, requestedAmount int32, posTransactionData interface{}, source TransactionFetchResponseDataSource, feesBreakdown interface{}, connect interface{}, ) *TransactionFetchResponseData`

NewTransactionFetchResponseData instantiates a new TransactionFetchResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionFetchResponseDataWithDefaults

`func NewTransactionFetchResponseDataWithDefaults() *TransactionFetchResponseData`

NewTransactionFetchResponseDataWithDefaults instantiates a new TransactionFetchResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *TransactionFetchResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *TransactionFetchResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *TransactionFetchResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetDomain

`func (o *TransactionFetchResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *TransactionFetchResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *TransactionFetchResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetStatus

`func (o *TransactionFetchResponseData) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *TransactionFetchResponseData) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *TransactionFetchResponseData) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetReference

`func (o *TransactionFetchResponseData) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *TransactionFetchResponseData) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *TransactionFetchResponseData) SetReference(v string)`

SetReference sets Reference field to given value.


### GetReceiptNumber

`func (o *TransactionFetchResponseData) GetReceiptNumber() interface{}`

GetReceiptNumber returns the ReceiptNumber field if non-nil, zero value otherwise.

### GetReceiptNumberOk

`func (o *TransactionFetchResponseData) GetReceiptNumberOk() (*interface{}, bool)`

GetReceiptNumberOk returns a tuple with the ReceiptNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiptNumber

`func (o *TransactionFetchResponseData) SetReceiptNumber(v interface{})`

SetReceiptNumber sets ReceiptNumber field to given value.


### SetReceiptNumberNil

`func (o *TransactionFetchResponseData) SetReceiptNumberNil(b bool)`

 SetReceiptNumberNil sets the value for ReceiptNumber to be an explicit nil

### UnsetReceiptNumber
`func (o *TransactionFetchResponseData) UnsetReceiptNumber()`

UnsetReceiptNumber ensures that no value is present for ReceiptNumber, not even an explicit nil
### GetAmount

`func (o *TransactionFetchResponseData) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *TransactionFetchResponseData) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *TransactionFetchResponseData) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetMessage

`func (o *TransactionFetchResponseData) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *TransactionFetchResponseData) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *TransactionFetchResponseData) SetMessage(v interface{})`

SetMessage sets Message field to given value.


### SetMessageNil

`func (o *TransactionFetchResponseData) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *TransactionFetchResponseData) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil
### GetGatewayResponse

`func (o *TransactionFetchResponseData) GetGatewayResponse() string`

GetGatewayResponse returns the GatewayResponse field if non-nil, zero value otherwise.

### GetGatewayResponseOk

`func (o *TransactionFetchResponseData) GetGatewayResponseOk() (*string, bool)`

GetGatewayResponseOk returns a tuple with the GatewayResponse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGatewayResponse

`func (o *TransactionFetchResponseData) SetGatewayResponse(v string)`

SetGatewayResponse sets GatewayResponse field to given value.


### GetHelpdeskLink

`func (o *TransactionFetchResponseData) GetHelpdeskLink() interface{}`

GetHelpdeskLink returns the HelpdeskLink field if non-nil, zero value otherwise.

### GetHelpdeskLinkOk

`func (o *TransactionFetchResponseData) GetHelpdeskLinkOk() (*interface{}, bool)`

GetHelpdeskLinkOk returns a tuple with the HelpdeskLink field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHelpdeskLink

`func (o *TransactionFetchResponseData) SetHelpdeskLink(v interface{})`

SetHelpdeskLink sets HelpdeskLink field to given value.


### SetHelpdeskLinkNil

`func (o *TransactionFetchResponseData) SetHelpdeskLinkNil(b bool)`

 SetHelpdeskLinkNil sets the value for HelpdeskLink to be an explicit nil

### UnsetHelpdeskLink
`func (o *TransactionFetchResponseData) UnsetHelpdeskLink()`

UnsetHelpdeskLink ensures that no value is present for HelpdeskLink, not even an explicit nil
### GetPaidAt

`func (o *TransactionFetchResponseData) GetPaidAt() string`

GetPaidAt returns the PaidAt field if non-nil, zero value otherwise.

### GetPaidAtOk

`func (o *TransactionFetchResponseData) GetPaidAtOk() (*string, bool)`

GetPaidAtOk returns a tuple with the PaidAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaidAt

`func (o *TransactionFetchResponseData) SetPaidAt(v string)`

SetPaidAt sets PaidAt field to given value.


### GetCreatedAt

`func (o *TransactionFetchResponseData) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *TransactionFetchResponseData) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *TransactionFetchResponseData) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetChannel

`func (o *TransactionFetchResponseData) GetChannel() string`

GetChannel returns the Channel field if non-nil, zero value otherwise.

### GetChannelOk

`func (o *TransactionFetchResponseData) GetChannelOk() (*string, bool)`

GetChannelOk returns a tuple with the Channel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannel

`func (o *TransactionFetchResponseData) SetChannel(v string)`

SetChannel sets Channel field to given value.


### GetCurrency

`func (o *TransactionFetchResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *TransactionFetchResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *TransactionFetchResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetIpAddress

`func (o *TransactionFetchResponseData) GetIpAddress() string`

GetIpAddress returns the IpAddress field if non-nil, zero value otherwise.

### GetIpAddressOk

`func (o *TransactionFetchResponseData) GetIpAddressOk() (*string, bool)`

GetIpAddressOk returns a tuple with the IpAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIpAddress

`func (o *TransactionFetchResponseData) SetIpAddress(v string)`

SetIpAddress sets IpAddress field to given value.


### GetMetadata

`func (o *TransactionFetchResponseData) GetMetadata() TransactionFetchResponseDataMetadata`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *TransactionFetchResponseData) GetMetadataOk() (*TransactionFetchResponseDataMetadata, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *TransactionFetchResponseData) SetMetadata(v TransactionFetchResponseDataMetadata)`

SetMetadata sets Metadata field to given value.


### GetLog

`func (o *TransactionFetchResponseData) GetLog() ChargeAuthorizationResponseDataLog`

GetLog returns the Log field if non-nil, zero value otherwise.

### GetLogOk

`func (o *TransactionFetchResponseData) GetLogOk() (*ChargeAuthorizationResponseDataLog, bool)`

GetLogOk returns a tuple with the Log field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLog

`func (o *TransactionFetchResponseData) SetLog(v ChargeAuthorizationResponseDataLog)`

SetLog sets Log field to given value.


### SetLogNil

`func (o *TransactionFetchResponseData) SetLogNil(b bool)`

 SetLogNil sets the value for Log to be an explicit nil

### UnsetLog
`func (o *TransactionFetchResponseData) UnsetLog()`

UnsetLog ensures that no value is present for Log, not even an explicit nil
### GetFees

`func (o *TransactionFetchResponseData) GetFees() int32`

GetFees returns the Fees field if non-nil, zero value otherwise.

### GetFeesOk

`func (o *TransactionFetchResponseData) GetFeesOk() (*int32, bool)`

GetFeesOk returns a tuple with the Fees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFees

`func (o *TransactionFetchResponseData) SetFees(v int32)`

SetFees sets Fees field to given value.


### GetFeesSplit

`func (o *TransactionFetchResponseData) GetFeesSplit() int32`

GetFeesSplit returns the FeesSplit field if non-nil, zero value otherwise.

### GetFeesSplitOk

`func (o *TransactionFetchResponseData) GetFeesSplitOk() (*int32, bool)`

GetFeesSplitOk returns a tuple with the FeesSplit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeesSplit

`func (o *TransactionFetchResponseData) SetFeesSplit(v int32)`

SetFeesSplit sets FeesSplit field to given value.


### SetFeesSplitNil

`func (o *TransactionFetchResponseData) SetFeesSplitNil(b bool)`

 SetFeesSplitNil sets the value for FeesSplit to be an explicit nil

### UnsetFeesSplit
`func (o *TransactionFetchResponseData) UnsetFeesSplit()`

UnsetFeesSplit ensures that no value is present for FeesSplit, not even an explicit nil
### GetAuthorization

`func (o *TransactionFetchResponseData) GetAuthorization() TransactionFetchResponseDataAuthorization`

GetAuthorization returns the Authorization field if non-nil, zero value otherwise.

### GetAuthorizationOk

`func (o *TransactionFetchResponseData) GetAuthorizationOk() (*TransactionFetchResponseDataAuthorization, bool)`

GetAuthorizationOk returns a tuple with the Authorization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorization

`func (o *TransactionFetchResponseData) SetAuthorization(v TransactionFetchResponseDataAuthorization)`

SetAuthorization sets Authorization field to given value.


### GetCustomer

`func (o *TransactionFetchResponseData) GetCustomer() TransactionFetchResponseDataCustomer`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *TransactionFetchResponseData) GetCustomerOk() (*TransactionFetchResponseDataCustomer, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *TransactionFetchResponseData) SetCustomer(v TransactionFetchResponseDataCustomer)`

SetCustomer sets Customer field to given value.


### GetPlan

`func (o *TransactionFetchResponseData) GetPlan() map[string]interface{}`

GetPlan returns the Plan field if non-nil, zero value otherwise.

### GetPlanOk

`func (o *TransactionFetchResponseData) GetPlanOk() (*map[string]interface{}, bool)`

GetPlanOk returns a tuple with the Plan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlan

`func (o *TransactionFetchResponseData) SetPlan(v map[string]interface{})`

SetPlan sets Plan field to given value.


### GetSubaccount

`func (o *TransactionFetchResponseData) GetSubaccount() map[string]interface{}`

GetSubaccount returns the Subaccount field if non-nil, zero value otherwise.

### GetSubaccountOk

`func (o *TransactionFetchResponseData) GetSubaccountOk() (*map[string]interface{}, bool)`

GetSubaccountOk returns a tuple with the Subaccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubaccount

`func (o *TransactionFetchResponseData) SetSubaccount(v map[string]interface{})`

SetSubaccount sets Subaccount field to given value.


### GetSplit

`func (o *TransactionFetchResponseData) GetSplit() map[string]interface{}`

GetSplit returns the Split field if non-nil, zero value otherwise.

### GetSplitOk

`func (o *TransactionFetchResponseData) GetSplitOk() (*map[string]interface{}, bool)`

GetSplitOk returns a tuple with the Split field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplit

`func (o *TransactionFetchResponseData) SetSplit(v map[string]interface{})`

SetSplit sets Split field to given value.


### GetOrderId

`func (o *TransactionFetchResponseData) GetOrderId() interface{}`

GetOrderId returns the OrderId field if non-nil, zero value otherwise.

### GetOrderIdOk

`func (o *TransactionFetchResponseData) GetOrderIdOk() (*interface{}, bool)`

GetOrderIdOk returns a tuple with the OrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderId

`func (o *TransactionFetchResponseData) SetOrderId(v interface{})`

SetOrderId sets OrderId field to given value.


### SetOrderIdNil

`func (o *TransactionFetchResponseData) SetOrderIdNil(b bool)`

 SetOrderIdNil sets the value for OrderId to be an explicit nil

### UnsetOrderId
`func (o *TransactionFetchResponseData) UnsetOrderId()`

UnsetOrderId ensures that no value is present for OrderId, not even an explicit nil
### GetRequestedAmount

`func (o *TransactionFetchResponseData) GetRequestedAmount() int32`

GetRequestedAmount returns the RequestedAmount field if non-nil, zero value otherwise.

### GetRequestedAmountOk

`func (o *TransactionFetchResponseData) GetRequestedAmountOk() (*int32, bool)`

GetRequestedAmountOk returns a tuple with the RequestedAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedAmount

`func (o *TransactionFetchResponseData) SetRequestedAmount(v int32)`

SetRequestedAmount sets RequestedAmount field to given value.


### GetPosTransactionData

`func (o *TransactionFetchResponseData) GetPosTransactionData() interface{}`

GetPosTransactionData returns the PosTransactionData field if non-nil, zero value otherwise.

### GetPosTransactionDataOk

`func (o *TransactionFetchResponseData) GetPosTransactionDataOk() (*interface{}, bool)`

GetPosTransactionDataOk returns a tuple with the PosTransactionData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPosTransactionData

`func (o *TransactionFetchResponseData) SetPosTransactionData(v interface{})`

SetPosTransactionData sets PosTransactionData field to given value.


### SetPosTransactionDataNil

`func (o *TransactionFetchResponseData) SetPosTransactionDataNil(b bool)`

 SetPosTransactionDataNil sets the value for PosTransactionData to be an explicit nil

### UnsetPosTransactionData
`func (o *TransactionFetchResponseData) UnsetPosTransactionData()`

UnsetPosTransactionData ensures that no value is present for PosTransactionData, not even an explicit nil
### GetSource

`func (o *TransactionFetchResponseData) GetSource() TransactionFetchResponseDataSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *TransactionFetchResponseData) GetSourceOk() (*TransactionFetchResponseDataSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *TransactionFetchResponseData) SetSource(v TransactionFetchResponseDataSource)`

SetSource sets Source field to given value.


### GetFeesBreakdown

`func (o *TransactionFetchResponseData) GetFeesBreakdown() interface{}`

GetFeesBreakdown returns the FeesBreakdown field if non-nil, zero value otherwise.

### GetFeesBreakdownOk

`func (o *TransactionFetchResponseData) GetFeesBreakdownOk() (*interface{}, bool)`

GetFeesBreakdownOk returns a tuple with the FeesBreakdown field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeesBreakdown

`func (o *TransactionFetchResponseData) SetFeesBreakdown(v interface{})`

SetFeesBreakdown sets FeesBreakdown field to given value.


### SetFeesBreakdownNil

`func (o *TransactionFetchResponseData) SetFeesBreakdownNil(b bool)`

 SetFeesBreakdownNil sets the value for FeesBreakdown to be an explicit nil

### UnsetFeesBreakdown
`func (o *TransactionFetchResponseData) UnsetFeesBreakdown()`

UnsetFeesBreakdown ensures that no value is present for FeesBreakdown, not even an explicit nil
### GetConnect

`func (o *TransactionFetchResponseData) GetConnect() interface{}`

GetConnect returns the Connect field if non-nil, zero value otherwise.

### GetConnectOk

`func (o *TransactionFetchResponseData) GetConnectOk() (*interface{}, bool)`

GetConnectOk returns a tuple with the Connect field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnect

`func (o *TransactionFetchResponseData) SetConnect(v interface{})`

SetConnect sets Connect field to given value.


### SetConnectNil

`func (o *TransactionFetchResponseData) SetConnectNil(b bool)`

 SetConnectNil sets the value for Connect to be an explicit nil

### UnsetConnect
`func (o *TransactionFetchResponseData) UnsetConnect()`

UnsetConnect ensures that no value is present for Connect, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


