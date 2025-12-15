# TransactionPartialDebitResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | **int32** |  | 
**Currency** | **string** |  | 
**TransactionDate** | **string** |  | 
**Status** | **string** |  | 
**Reference** | **string** |  | 
**Domain** | **string** |  | 
**Metadata** | **string** |  | 
**GatewayResponse** | **string** |  | 
**Message** | **map[string]interface{}** |  | 
**Channel** | **string** |  | 
**IpAddress** | **map[string]interface{}** |  | 
**Log** | [**NullableChargeAuthorizationResponseDataLog**](ChargeAuthorizationResponseDataLog.md) |  | 
**Fees** | **int32** |  | 
**Authorization** | [**TransactionPartialDebitResponseDataAuthorization**](TransactionPartialDebitResponseDataAuthorization.md) |  | 
**Customer** | [**TransactionPartialDebitResponseDataCustomer**](TransactionPartialDebitResponseDataCustomer.md) |  | 
**Plan** | **int32** |  | 
**RequestedAmount** | **int32** |  | 
**Id** | **int32** |  | 

## Methods

### NewTransactionPartialDebitResponseData

`func NewTransactionPartialDebitResponseData(amount int32, currency string, transactionDate string, status string, reference string, domain string, metadata string, gatewayResponse string, message map[string]interface{}, channel string, ipAddress map[string]interface{}, log NullableChargeAuthorizationResponseDataLog, fees int32, authorization TransactionPartialDebitResponseDataAuthorization, customer TransactionPartialDebitResponseDataCustomer, plan int32, requestedAmount int32, id int32, ) *TransactionPartialDebitResponseData`

NewTransactionPartialDebitResponseData instantiates a new TransactionPartialDebitResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionPartialDebitResponseDataWithDefaults

`func NewTransactionPartialDebitResponseDataWithDefaults() *TransactionPartialDebitResponseData`

NewTransactionPartialDebitResponseDataWithDefaults instantiates a new TransactionPartialDebitResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *TransactionPartialDebitResponseData) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *TransactionPartialDebitResponseData) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *TransactionPartialDebitResponseData) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetCurrency

`func (o *TransactionPartialDebitResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *TransactionPartialDebitResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *TransactionPartialDebitResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetTransactionDate

`func (o *TransactionPartialDebitResponseData) GetTransactionDate() string`

GetTransactionDate returns the TransactionDate field if non-nil, zero value otherwise.

### GetTransactionDateOk

`func (o *TransactionPartialDebitResponseData) GetTransactionDateOk() (*string, bool)`

GetTransactionDateOk returns a tuple with the TransactionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDate

`func (o *TransactionPartialDebitResponseData) SetTransactionDate(v string)`

SetTransactionDate sets TransactionDate field to given value.


### GetStatus

`func (o *TransactionPartialDebitResponseData) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *TransactionPartialDebitResponseData) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *TransactionPartialDebitResponseData) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetReference

`func (o *TransactionPartialDebitResponseData) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *TransactionPartialDebitResponseData) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *TransactionPartialDebitResponseData) SetReference(v string)`

SetReference sets Reference field to given value.


### GetDomain

`func (o *TransactionPartialDebitResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *TransactionPartialDebitResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *TransactionPartialDebitResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetMetadata

`func (o *TransactionPartialDebitResponseData) GetMetadata() string`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *TransactionPartialDebitResponseData) GetMetadataOk() (*string, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *TransactionPartialDebitResponseData) SetMetadata(v string)`

SetMetadata sets Metadata field to given value.


### GetGatewayResponse

`func (o *TransactionPartialDebitResponseData) GetGatewayResponse() string`

GetGatewayResponse returns the GatewayResponse field if non-nil, zero value otherwise.

### GetGatewayResponseOk

`func (o *TransactionPartialDebitResponseData) GetGatewayResponseOk() (*string, bool)`

GetGatewayResponseOk returns a tuple with the GatewayResponse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGatewayResponse

`func (o *TransactionPartialDebitResponseData) SetGatewayResponse(v string)`

SetGatewayResponse sets GatewayResponse field to given value.


### GetMessage

`func (o *TransactionPartialDebitResponseData) GetMessage() map[string]interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *TransactionPartialDebitResponseData) GetMessageOk() (*map[string]interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *TransactionPartialDebitResponseData) SetMessage(v map[string]interface{})`

SetMessage sets Message field to given value.


### SetMessageNil

`func (o *TransactionPartialDebitResponseData) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *TransactionPartialDebitResponseData) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil
### GetChannel

`func (o *TransactionPartialDebitResponseData) GetChannel() string`

GetChannel returns the Channel field if non-nil, zero value otherwise.

### GetChannelOk

`func (o *TransactionPartialDebitResponseData) GetChannelOk() (*string, bool)`

GetChannelOk returns a tuple with the Channel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannel

`func (o *TransactionPartialDebitResponseData) SetChannel(v string)`

SetChannel sets Channel field to given value.


### GetIpAddress

`func (o *TransactionPartialDebitResponseData) GetIpAddress() map[string]interface{}`

GetIpAddress returns the IpAddress field if non-nil, zero value otherwise.

### GetIpAddressOk

`func (o *TransactionPartialDebitResponseData) GetIpAddressOk() (*map[string]interface{}, bool)`

GetIpAddressOk returns a tuple with the IpAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIpAddress

`func (o *TransactionPartialDebitResponseData) SetIpAddress(v map[string]interface{})`

SetIpAddress sets IpAddress field to given value.


### SetIpAddressNil

`func (o *TransactionPartialDebitResponseData) SetIpAddressNil(b bool)`

 SetIpAddressNil sets the value for IpAddress to be an explicit nil

### UnsetIpAddress
`func (o *TransactionPartialDebitResponseData) UnsetIpAddress()`

UnsetIpAddress ensures that no value is present for IpAddress, not even an explicit nil
### GetLog

`func (o *TransactionPartialDebitResponseData) GetLog() ChargeAuthorizationResponseDataLog`

GetLog returns the Log field if non-nil, zero value otherwise.

### GetLogOk

`func (o *TransactionPartialDebitResponseData) GetLogOk() (*ChargeAuthorizationResponseDataLog, bool)`

GetLogOk returns a tuple with the Log field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLog

`func (o *TransactionPartialDebitResponseData) SetLog(v ChargeAuthorizationResponseDataLog)`

SetLog sets Log field to given value.


### SetLogNil

`func (o *TransactionPartialDebitResponseData) SetLogNil(b bool)`

 SetLogNil sets the value for Log to be an explicit nil

### UnsetLog
`func (o *TransactionPartialDebitResponseData) UnsetLog()`

UnsetLog ensures that no value is present for Log, not even an explicit nil
### GetFees

`func (o *TransactionPartialDebitResponseData) GetFees() int32`

GetFees returns the Fees field if non-nil, zero value otherwise.

### GetFeesOk

`func (o *TransactionPartialDebitResponseData) GetFeesOk() (*int32, bool)`

GetFeesOk returns a tuple with the Fees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFees

`func (o *TransactionPartialDebitResponseData) SetFees(v int32)`

SetFees sets Fees field to given value.


### GetAuthorization

`func (o *TransactionPartialDebitResponseData) GetAuthorization() TransactionPartialDebitResponseDataAuthorization`

GetAuthorization returns the Authorization field if non-nil, zero value otherwise.

### GetAuthorizationOk

`func (o *TransactionPartialDebitResponseData) GetAuthorizationOk() (*TransactionPartialDebitResponseDataAuthorization, bool)`

GetAuthorizationOk returns a tuple with the Authorization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorization

`func (o *TransactionPartialDebitResponseData) SetAuthorization(v TransactionPartialDebitResponseDataAuthorization)`

SetAuthorization sets Authorization field to given value.


### GetCustomer

`func (o *TransactionPartialDebitResponseData) GetCustomer() TransactionPartialDebitResponseDataCustomer`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *TransactionPartialDebitResponseData) GetCustomerOk() (*TransactionPartialDebitResponseDataCustomer, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *TransactionPartialDebitResponseData) SetCustomer(v TransactionPartialDebitResponseDataCustomer)`

SetCustomer sets Customer field to given value.


### GetPlan

`func (o *TransactionPartialDebitResponseData) GetPlan() int32`

GetPlan returns the Plan field if non-nil, zero value otherwise.

### GetPlanOk

`func (o *TransactionPartialDebitResponseData) GetPlanOk() (*int32, bool)`

GetPlanOk returns a tuple with the Plan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlan

`func (o *TransactionPartialDebitResponseData) SetPlan(v int32)`

SetPlan sets Plan field to given value.


### GetRequestedAmount

`func (o *TransactionPartialDebitResponseData) GetRequestedAmount() int32`

GetRequestedAmount returns the RequestedAmount field if non-nil, zero value otherwise.

### GetRequestedAmountOk

`func (o *TransactionPartialDebitResponseData) GetRequestedAmountOk() (*int32, bool)`

GetRequestedAmountOk returns a tuple with the RequestedAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedAmount

`func (o *TransactionPartialDebitResponseData) SetRequestedAmount(v int32)`

SetRequestedAmount sets RequestedAmount field to given value.


### GetId

`func (o *TransactionPartialDebitResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *TransactionPartialDebitResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *TransactionPartialDebitResponseData) SetId(v int32)`

SetId sets Id field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


