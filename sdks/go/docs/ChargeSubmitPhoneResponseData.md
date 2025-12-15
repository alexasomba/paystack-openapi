# ChargeSubmitPhoneResponseData

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
**DisplayText** | **string** |  | 

## Methods

### NewChargeSubmitPhoneResponseData

`func NewChargeSubmitPhoneResponseData(status string, amount int32, currency string, transactionDate string, reference string, domain string, redirectUrl NullableString, metadata map[string]interface{}, gatewayResponse string, message NullableString, channel string, fees NullableInt32, authorization ChargeSubmitPinResponseDataAuthorization, customer ChargeSubmitPinResponseDataCustomer, displayText string, ) *ChargeSubmitPhoneResponseData`

NewChargeSubmitPhoneResponseData instantiates a new ChargeSubmitPhoneResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChargeSubmitPhoneResponseDataWithDefaults

`func NewChargeSubmitPhoneResponseDataWithDefaults() *ChargeSubmitPhoneResponseData`

NewChargeSubmitPhoneResponseDataWithDefaults instantiates a new ChargeSubmitPhoneResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *ChargeSubmitPhoneResponseData) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ChargeSubmitPhoneResponseData) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ChargeSubmitPhoneResponseData) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetAmount

`func (o *ChargeSubmitPhoneResponseData) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *ChargeSubmitPhoneResponseData) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *ChargeSubmitPhoneResponseData) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetCurrency

`func (o *ChargeSubmitPhoneResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *ChargeSubmitPhoneResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *ChargeSubmitPhoneResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetTransactionDate

`func (o *ChargeSubmitPhoneResponseData) GetTransactionDate() string`

GetTransactionDate returns the TransactionDate field if non-nil, zero value otherwise.

### GetTransactionDateOk

`func (o *ChargeSubmitPhoneResponseData) GetTransactionDateOk() (*string, bool)`

GetTransactionDateOk returns a tuple with the TransactionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDate

`func (o *ChargeSubmitPhoneResponseData) SetTransactionDate(v string)`

SetTransactionDate sets TransactionDate field to given value.


### GetReference

`func (o *ChargeSubmitPhoneResponseData) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *ChargeSubmitPhoneResponseData) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *ChargeSubmitPhoneResponseData) SetReference(v string)`

SetReference sets Reference field to given value.


### GetDomain

`func (o *ChargeSubmitPhoneResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *ChargeSubmitPhoneResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *ChargeSubmitPhoneResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetRedirectUrl

`func (o *ChargeSubmitPhoneResponseData) GetRedirectUrl() string`

GetRedirectUrl returns the RedirectUrl field if non-nil, zero value otherwise.

### GetRedirectUrlOk

`func (o *ChargeSubmitPhoneResponseData) GetRedirectUrlOk() (*string, bool)`

GetRedirectUrlOk returns a tuple with the RedirectUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRedirectUrl

`func (o *ChargeSubmitPhoneResponseData) SetRedirectUrl(v string)`

SetRedirectUrl sets RedirectUrl field to given value.


### SetRedirectUrlNil

`func (o *ChargeSubmitPhoneResponseData) SetRedirectUrlNil(b bool)`

 SetRedirectUrlNil sets the value for RedirectUrl to be an explicit nil

### UnsetRedirectUrl
`func (o *ChargeSubmitPhoneResponseData) UnsetRedirectUrl()`

UnsetRedirectUrl ensures that no value is present for RedirectUrl, not even an explicit nil
### GetMetadata

`func (o *ChargeSubmitPhoneResponseData) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *ChargeSubmitPhoneResponseData) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *ChargeSubmitPhoneResponseData) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.


### GetGatewayResponse

`func (o *ChargeSubmitPhoneResponseData) GetGatewayResponse() string`

GetGatewayResponse returns the GatewayResponse field if non-nil, zero value otherwise.

### GetGatewayResponseOk

`func (o *ChargeSubmitPhoneResponseData) GetGatewayResponseOk() (*string, bool)`

GetGatewayResponseOk returns a tuple with the GatewayResponse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGatewayResponse

`func (o *ChargeSubmitPhoneResponseData) SetGatewayResponse(v string)`

SetGatewayResponse sets GatewayResponse field to given value.


### GetMessage

`func (o *ChargeSubmitPhoneResponseData) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ChargeSubmitPhoneResponseData) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ChargeSubmitPhoneResponseData) SetMessage(v string)`

SetMessage sets Message field to given value.


### SetMessageNil

`func (o *ChargeSubmitPhoneResponseData) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *ChargeSubmitPhoneResponseData) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil
### GetChannel

`func (o *ChargeSubmitPhoneResponseData) GetChannel() string`

GetChannel returns the Channel field if non-nil, zero value otherwise.

### GetChannelOk

`func (o *ChargeSubmitPhoneResponseData) GetChannelOk() (*string, bool)`

GetChannelOk returns a tuple with the Channel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannel

`func (o *ChargeSubmitPhoneResponseData) SetChannel(v string)`

SetChannel sets Channel field to given value.


### GetFees

`func (o *ChargeSubmitPhoneResponseData) GetFees() int32`

GetFees returns the Fees field if non-nil, zero value otherwise.

### GetFeesOk

`func (o *ChargeSubmitPhoneResponseData) GetFeesOk() (*int32, bool)`

GetFeesOk returns a tuple with the Fees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFees

`func (o *ChargeSubmitPhoneResponseData) SetFees(v int32)`

SetFees sets Fees field to given value.


### SetFeesNil

`func (o *ChargeSubmitPhoneResponseData) SetFeesNil(b bool)`

 SetFeesNil sets the value for Fees to be an explicit nil

### UnsetFees
`func (o *ChargeSubmitPhoneResponseData) UnsetFees()`

UnsetFees ensures that no value is present for Fees, not even an explicit nil
### GetAuthorization

`func (o *ChargeSubmitPhoneResponseData) GetAuthorization() ChargeSubmitPinResponseDataAuthorization`

GetAuthorization returns the Authorization field if non-nil, zero value otherwise.

### GetAuthorizationOk

`func (o *ChargeSubmitPhoneResponseData) GetAuthorizationOk() (*ChargeSubmitPinResponseDataAuthorization, bool)`

GetAuthorizationOk returns a tuple with the Authorization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorization

`func (o *ChargeSubmitPhoneResponseData) SetAuthorization(v ChargeSubmitPinResponseDataAuthorization)`

SetAuthorization sets Authorization field to given value.


### GetCustomer

`func (o *ChargeSubmitPhoneResponseData) GetCustomer() ChargeSubmitPinResponseDataCustomer`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *ChargeSubmitPhoneResponseData) GetCustomerOk() (*ChargeSubmitPinResponseDataCustomer, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *ChargeSubmitPhoneResponseData) SetCustomer(v ChargeSubmitPinResponseDataCustomer)`

SetCustomer sets Customer field to given value.


### GetDisplayText

`func (o *ChargeSubmitPhoneResponseData) GetDisplayText() string`

GetDisplayText returns the DisplayText field if non-nil, zero value otherwise.

### GetDisplayTextOk

`func (o *ChargeSubmitPhoneResponseData) GetDisplayTextOk() (*string, bool)`

GetDisplayTextOk returns a tuple with the DisplayText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayText

`func (o *ChargeSubmitPhoneResponseData) SetDisplayText(v string)`

SetDisplayText sets DisplayText field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


