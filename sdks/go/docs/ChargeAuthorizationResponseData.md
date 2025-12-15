# ChargeAuthorizationResponseData

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
**Message** | **NullableString** |  | 
**Channel** | **string** |  | 
**IpAddress** | **map[string]interface{}** |  | 
**Log** | [**NullableChargeAuthorizationResponseDataLog**](ChargeAuthorizationResponseDataLog.md) |  | 
**Fees** | **NullableInt32** |  | 
**Authorization** | [**ChargeAuthorizationResponseDataAuthorization**](ChargeAuthorizationResponseDataAuthorization.md) |  | 
**Customer** | [**ChargeAuthorizationResponseDataCustomer**](ChargeAuthorizationResponseDataCustomer.md) |  | 
**Plan** | **map[string]interface{}** |  | 
**Id** | **int32** |  | 

## Methods

### NewChargeAuthorizationResponseData

`func NewChargeAuthorizationResponseData(amount int32, currency string, transactionDate string, status string, reference string, domain string, metadata string, gatewayResponse string, message NullableString, channel string, ipAddress map[string]interface{}, log NullableChargeAuthorizationResponseDataLog, fees NullableInt32, authorization ChargeAuthorizationResponseDataAuthorization, customer ChargeAuthorizationResponseDataCustomer, plan map[string]interface{}, id int32, ) *ChargeAuthorizationResponseData`

NewChargeAuthorizationResponseData instantiates a new ChargeAuthorizationResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChargeAuthorizationResponseDataWithDefaults

`func NewChargeAuthorizationResponseDataWithDefaults() *ChargeAuthorizationResponseData`

NewChargeAuthorizationResponseDataWithDefaults instantiates a new ChargeAuthorizationResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *ChargeAuthorizationResponseData) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *ChargeAuthorizationResponseData) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *ChargeAuthorizationResponseData) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetCurrency

`func (o *ChargeAuthorizationResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *ChargeAuthorizationResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *ChargeAuthorizationResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetTransactionDate

`func (o *ChargeAuthorizationResponseData) GetTransactionDate() string`

GetTransactionDate returns the TransactionDate field if non-nil, zero value otherwise.

### GetTransactionDateOk

`func (o *ChargeAuthorizationResponseData) GetTransactionDateOk() (*string, bool)`

GetTransactionDateOk returns a tuple with the TransactionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDate

`func (o *ChargeAuthorizationResponseData) SetTransactionDate(v string)`

SetTransactionDate sets TransactionDate field to given value.


### GetStatus

`func (o *ChargeAuthorizationResponseData) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ChargeAuthorizationResponseData) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ChargeAuthorizationResponseData) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetReference

`func (o *ChargeAuthorizationResponseData) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *ChargeAuthorizationResponseData) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *ChargeAuthorizationResponseData) SetReference(v string)`

SetReference sets Reference field to given value.


### GetDomain

`func (o *ChargeAuthorizationResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *ChargeAuthorizationResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *ChargeAuthorizationResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetMetadata

`func (o *ChargeAuthorizationResponseData) GetMetadata() string`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *ChargeAuthorizationResponseData) GetMetadataOk() (*string, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *ChargeAuthorizationResponseData) SetMetadata(v string)`

SetMetadata sets Metadata field to given value.


### GetGatewayResponse

`func (o *ChargeAuthorizationResponseData) GetGatewayResponse() string`

GetGatewayResponse returns the GatewayResponse field if non-nil, zero value otherwise.

### GetGatewayResponseOk

`func (o *ChargeAuthorizationResponseData) GetGatewayResponseOk() (*string, bool)`

GetGatewayResponseOk returns a tuple with the GatewayResponse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGatewayResponse

`func (o *ChargeAuthorizationResponseData) SetGatewayResponse(v string)`

SetGatewayResponse sets GatewayResponse field to given value.


### GetMessage

`func (o *ChargeAuthorizationResponseData) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ChargeAuthorizationResponseData) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ChargeAuthorizationResponseData) SetMessage(v string)`

SetMessage sets Message field to given value.


### SetMessageNil

`func (o *ChargeAuthorizationResponseData) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *ChargeAuthorizationResponseData) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil
### GetChannel

`func (o *ChargeAuthorizationResponseData) GetChannel() string`

GetChannel returns the Channel field if non-nil, zero value otherwise.

### GetChannelOk

`func (o *ChargeAuthorizationResponseData) GetChannelOk() (*string, bool)`

GetChannelOk returns a tuple with the Channel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannel

`func (o *ChargeAuthorizationResponseData) SetChannel(v string)`

SetChannel sets Channel field to given value.


### GetIpAddress

`func (o *ChargeAuthorizationResponseData) GetIpAddress() map[string]interface{}`

GetIpAddress returns the IpAddress field if non-nil, zero value otherwise.

### GetIpAddressOk

`func (o *ChargeAuthorizationResponseData) GetIpAddressOk() (*map[string]interface{}, bool)`

GetIpAddressOk returns a tuple with the IpAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIpAddress

`func (o *ChargeAuthorizationResponseData) SetIpAddress(v map[string]interface{})`

SetIpAddress sets IpAddress field to given value.


### SetIpAddressNil

`func (o *ChargeAuthorizationResponseData) SetIpAddressNil(b bool)`

 SetIpAddressNil sets the value for IpAddress to be an explicit nil

### UnsetIpAddress
`func (o *ChargeAuthorizationResponseData) UnsetIpAddress()`

UnsetIpAddress ensures that no value is present for IpAddress, not even an explicit nil
### GetLog

`func (o *ChargeAuthorizationResponseData) GetLog() ChargeAuthorizationResponseDataLog`

GetLog returns the Log field if non-nil, zero value otherwise.

### GetLogOk

`func (o *ChargeAuthorizationResponseData) GetLogOk() (*ChargeAuthorizationResponseDataLog, bool)`

GetLogOk returns a tuple with the Log field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLog

`func (o *ChargeAuthorizationResponseData) SetLog(v ChargeAuthorizationResponseDataLog)`

SetLog sets Log field to given value.


### SetLogNil

`func (o *ChargeAuthorizationResponseData) SetLogNil(b bool)`

 SetLogNil sets the value for Log to be an explicit nil

### UnsetLog
`func (o *ChargeAuthorizationResponseData) UnsetLog()`

UnsetLog ensures that no value is present for Log, not even an explicit nil
### GetFees

`func (o *ChargeAuthorizationResponseData) GetFees() int32`

GetFees returns the Fees field if non-nil, zero value otherwise.

### GetFeesOk

`func (o *ChargeAuthorizationResponseData) GetFeesOk() (*int32, bool)`

GetFeesOk returns a tuple with the Fees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFees

`func (o *ChargeAuthorizationResponseData) SetFees(v int32)`

SetFees sets Fees field to given value.


### SetFeesNil

`func (o *ChargeAuthorizationResponseData) SetFeesNil(b bool)`

 SetFeesNil sets the value for Fees to be an explicit nil

### UnsetFees
`func (o *ChargeAuthorizationResponseData) UnsetFees()`

UnsetFees ensures that no value is present for Fees, not even an explicit nil
### GetAuthorization

`func (o *ChargeAuthorizationResponseData) GetAuthorization() ChargeAuthorizationResponseDataAuthorization`

GetAuthorization returns the Authorization field if non-nil, zero value otherwise.

### GetAuthorizationOk

`func (o *ChargeAuthorizationResponseData) GetAuthorizationOk() (*ChargeAuthorizationResponseDataAuthorization, bool)`

GetAuthorizationOk returns a tuple with the Authorization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorization

`func (o *ChargeAuthorizationResponseData) SetAuthorization(v ChargeAuthorizationResponseDataAuthorization)`

SetAuthorization sets Authorization field to given value.


### GetCustomer

`func (o *ChargeAuthorizationResponseData) GetCustomer() ChargeAuthorizationResponseDataCustomer`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *ChargeAuthorizationResponseData) GetCustomerOk() (*ChargeAuthorizationResponseDataCustomer, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *ChargeAuthorizationResponseData) SetCustomer(v ChargeAuthorizationResponseDataCustomer)`

SetCustomer sets Customer field to given value.


### GetPlan

`func (o *ChargeAuthorizationResponseData) GetPlan() map[string]interface{}`

GetPlan returns the Plan field if non-nil, zero value otherwise.

### GetPlanOk

`func (o *ChargeAuthorizationResponseData) GetPlanOk() (*map[string]interface{}, bool)`

GetPlanOk returns a tuple with the Plan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlan

`func (o *ChargeAuthorizationResponseData) SetPlan(v map[string]interface{})`

SetPlan sets Plan field to given value.


### SetPlanNil

`func (o *ChargeAuthorizationResponseData) SetPlanNil(b bool)`

 SetPlanNil sets the value for Plan to be an explicit nil

### UnsetPlan
`func (o *ChargeAuthorizationResponseData) UnsetPlan()`

UnsetPlan ensures that no value is present for Plan, not even an explicit nil
### GetId

`func (o *ChargeAuthorizationResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ChargeAuthorizationResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ChargeAuthorizationResponseData) SetId(v int32)`

SetId sets Id field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


