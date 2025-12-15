# ChargeSubmitPinResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **string** |  | 
**Amount** | **int32** |  | 
**Currency** | **string** |  | 
**TransactionDate** | **string** |  | 
**Reference** | **string** |  | 
**Domain** | **string** |  | 
**RedirectUrl** | **NullableString** |  | 
**Metadata** | **map[string]interface{}** |  | 
**GatewayResponse** | **string** |  | 
**Message** | **NullableString** |  | 
**Channel** | **string** |  | 
**Fees** | **NullableInt32** |  | 
**Authorization** | [**ChargeSubmitPinResponseDataAuthorization**](ChargeSubmitPinResponseDataAuthorization.md) |  | 
**Customer** | [**ChargeSubmitPinResponseDataCustomer**](ChargeSubmitPinResponseDataCustomer.md) |  | 

## Methods

### NewChargeSubmitPinResponseData

`func NewChargeSubmitPinResponseData(status string, amount int32, currency string, transactionDate string, reference string, domain string, redirectUrl NullableString, metadata map[string]interface{}, gatewayResponse string, message NullableString, channel string, fees NullableInt32, authorization ChargeSubmitPinResponseDataAuthorization, customer ChargeSubmitPinResponseDataCustomer, ) *ChargeSubmitPinResponseData`

NewChargeSubmitPinResponseData instantiates a new ChargeSubmitPinResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChargeSubmitPinResponseDataWithDefaults

`func NewChargeSubmitPinResponseDataWithDefaults() *ChargeSubmitPinResponseData`

NewChargeSubmitPinResponseDataWithDefaults instantiates a new ChargeSubmitPinResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *ChargeSubmitPinResponseData) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ChargeSubmitPinResponseData) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ChargeSubmitPinResponseData) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetAmount

`func (o *ChargeSubmitPinResponseData) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *ChargeSubmitPinResponseData) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *ChargeSubmitPinResponseData) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetCurrency

`func (o *ChargeSubmitPinResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *ChargeSubmitPinResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *ChargeSubmitPinResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetTransactionDate

`func (o *ChargeSubmitPinResponseData) GetTransactionDate() string`

GetTransactionDate returns the TransactionDate field if non-nil, zero value otherwise.

### GetTransactionDateOk

`func (o *ChargeSubmitPinResponseData) GetTransactionDateOk() (*string, bool)`

GetTransactionDateOk returns a tuple with the TransactionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDate

`func (o *ChargeSubmitPinResponseData) SetTransactionDate(v string)`

SetTransactionDate sets TransactionDate field to given value.


### GetReference

`func (o *ChargeSubmitPinResponseData) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *ChargeSubmitPinResponseData) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *ChargeSubmitPinResponseData) SetReference(v string)`

SetReference sets Reference field to given value.


### GetDomain

`func (o *ChargeSubmitPinResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *ChargeSubmitPinResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *ChargeSubmitPinResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetRedirectUrl

`func (o *ChargeSubmitPinResponseData) GetRedirectUrl() string`

GetRedirectUrl returns the RedirectUrl field if non-nil, zero value otherwise.

### GetRedirectUrlOk

`func (o *ChargeSubmitPinResponseData) GetRedirectUrlOk() (*string, bool)`

GetRedirectUrlOk returns a tuple with the RedirectUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRedirectUrl

`func (o *ChargeSubmitPinResponseData) SetRedirectUrl(v string)`

SetRedirectUrl sets RedirectUrl field to given value.


### SetRedirectUrlNil

`func (o *ChargeSubmitPinResponseData) SetRedirectUrlNil(b bool)`

 SetRedirectUrlNil sets the value for RedirectUrl to be an explicit nil

### UnsetRedirectUrl
`func (o *ChargeSubmitPinResponseData) UnsetRedirectUrl()`

UnsetRedirectUrl ensures that no value is present for RedirectUrl, not even an explicit nil
### GetMetadata

`func (o *ChargeSubmitPinResponseData) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *ChargeSubmitPinResponseData) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *ChargeSubmitPinResponseData) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.


### GetGatewayResponse

`func (o *ChargeSubmitPinResponseData) GetGatewayResponse() string`

GetGatewayResponse returns the GatewayResponse field if non-nil, zero value otherwise.

### GetGatewayResponseOk

`func (o *ChargeSubmitPinResponseData) GetGatewayResponseOk() (*string, bool)`

GetGatewayResponseOk returns a tuple with the GatewayResponse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGatewayResponse

`func (o *ChargeSubmitPinResponseData) SetGatewayResponse(v string)`

SetGatewayResponse sets GatewayResponse field to given value.


### GetMessage

`func (o *ChargeSubmitPinResponseData) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ChargeSubmitPinResponseData) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ChargeSubmitPinResponseData) SetMessage(v string)`

SetMessage sets Message field to given value.


### SetMessageNil

`func (o *ChargeSubmitPinResponseData) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *ChargeSubmitPinResponseData) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil
### GetChannel

`func (o *ChargeSubmitPinResponseData) GetChannel() string`

GetChannel returns the Channel field if non-nil, zero value otherwise.

### GetChannelOk

`func (o *ChargeSubmitPinResponseData) GetChannelOk() (*string, bool)`

GetChannelOk returns a tuple with the Channel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannel

`func (o *ChargeSubmitPinResponseData) SetChannel(v string)`

SetChannel sets Channel field to given value.


### GetFees

`func (o *ChargeSubmitPinResponseData) GetFees() int32`

GetFees returns the Fees field if non-nil, zero value otherwise.

### GetFeesOk

`func (o *ChargeSubmitPinResponseData) GetFeesOk() (*int32, bool)`

GetFeesOk returns a tuple with the Fees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFees

`func (o *ChargeSubmitPinResponseData) SetFees(v int32)`

SetFees sets Fees field to given value.


### SetFeesNil

`func (o *ChargeSubmitPinResponseData) SetFeesNil(b bool)`

 SetFeesNil sets the value for Fees to be an explicit nil

### UnsetFees
`func (o *ChargeSubmitPinResponseData) UnsetFees()`

UnsetFees ensures that no value is present for Fees, not even an explicit nil
### GetAuthorization

`func (o *ChargeSubmitPinResponseData) GetAuthorization() ChargeSubmitPinResponseDataAuthorization`

GetAuthorization returns the Authorization field if non-nil, zero value otherwise.

### GetAuthorizationOk

`func (o *ChargeSubmitPinResponseData) GetAuthorizationOk() (*ChargeSubmitPinResponseDataAuthorization, bool)`

GetAuthorizationOk returns a tuple with the Authorization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorization

`func (o *ChargeSubmitPinResponseData) SetAuthorization(v ChargeSubmitPinResponseDataAuthorization)`

SetAuthorization sets Authorization field to given value.


### GetCustomer

`func (o *ChargeSubmitPinResponseData) GetCustomer() ChargeSubmitPinResponseDataCustomer`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *ChargeSubmitPinResponseData) GetCustomerOk() (*ChargeSubmitPinResponseDataCustomer, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *ChargeSubmitPinResponseData) SetCustomer(v ChargeSubmitPinResponseDataCustomer)`

SetCustomer sets Customer field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


