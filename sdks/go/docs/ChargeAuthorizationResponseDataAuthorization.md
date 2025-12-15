# ChargeAuthorizationResponseDataAuthorization

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthorizationCode** | **string** |  | 
**Bin** | **NullableString** |  | 
**Last4** | **string** |  | 
**ExpMonth** | **string** |  | 
**ExpYear** | **string** |  | 
**Channel** | **string** |  | 
**CardType** | **string** |  | 
**Bank** | **string** |  | 
**CountryCode** | **string** |  | 
**Brand** | **string** |  | 
**Reusable** | **bool** |  | 
**Signature** | **string** |  | 
**AccountName** | **map[string]interface{}** |  | 

## Methods

### NewChargeAuthorizationResponseDataAuthorization

`func NewChargeAuthorizationResponseDataAuthorization(authorizationCode string, bin NullableString, last4 string, expMonth string, expYear string, channel string, cardType string, bank string, countryCode string, brand string, reusable bool, signature string, accountName map[string]interface{}, ) *ChargeAuthorizationResponseDataAuthorization`

NewChargeAuthorizationResponseDataAuthorization instantiates a new ChargeAuthorizationResponseDataAuthorization object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChargeAuthorizationResponseDataAuthorizationWithDefaults

`func NewChargeAuthorizationResponseDataAuthorizationWithDefaults() *ChargeAuthorizationResponseDataAuthorization`

NewChargeAuthorizationResponseDataAuthorizationWithDefaults instantiates a new ChargeAuthorizationResponseDataAuthorization object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthorizationCode

`func (o *ChargeAuthorizationResponseDataAuthorization) GetAuthorizationCode() string`

GetAuthorizationCode returns the AuthorizationCode field if non-nil, zero value otherwise.

### GetAuthorizationCodeOk

`func (o *ChargeAuthorizationResponseDataAuthorization) GetAuthorizationCodeOk() (*string, bool)`

GetAuthorizationCodeOk returns a tuple with the AuthorizationCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizationCode

`func (o *ChargeAuthorizationResponseDataAuthorization) SetAuthorizationCode(v string)`

SetAuthorizationCode sets AuthorizationCode field to given value.


### GetBin

`func (o *ChargeAuthorizationResponseDataAuthorization) GetBin() string`

GetBin returns the Bin field if non-nil, zero value otherwise.

### GetBinOk

`func (o *ChargeAuthorizationResponseDataAuthorization) GetBinOk() (*string, bool)`

GetBinOk returns a tuple with the Bin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBin

`func (o *ChargeAuthorizationResponseDataAuthorization) SetBin(v string)`

SetBin sets Bin field to given value.


### SetBinNil

`func (o *ChargeAuthorizationResponseDataAuthorization) SetBinNil(b bool)`

 SetBinNil sets the value for Bin to be an explicit nil

### UnsetBin
`func (o *ChargeAuthorizationResponseDataAuthorization) UnsetBin()`

UnsetBin ensures that no value is present for Bin, not even an explicit nil
### GetLast4

`func (o *ChargeAuthorizationResponseDataAuthorization) GetLast4() string`

GetLast4 returns the Last4 field if non-nil, zero value otherwise.

### GetLast4Ok

`func (o *ChargeAuthorizationResponseDataAuthorization) GetLast4Ok() (*string, bool)`

GetLast4Ok returns a tuple with the Last4 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLast4

`func (o *ChargeAuthorizationResponseDataAuthorization) SetLast4(v string)`

SetLast4 sets Last4 field to given value.


### GetExpMonth

`func (o *ChargeAuthorizationResponseDataAuthorization) GetExpMonth() string`

GetExpMonth returns the ExpMonth field if non-nil, zero value otherwise.

### GetExpMonthOk

`func (o *ChargeAuthorizationResponseDataAuthorization) GetExpMonthOk() (*string, bool)`

GetExpMonthOk returns a tuple with the ExpMonth field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpMonth

`func (o *ChargeAuthorizationResponseDataAuthorization) SetExpMonth(v string)`

SetExpMonth sets ExpMonth field to given value.


### GetExpYear

`func (o *ChargeAuthorizationResponseDataAuthorization) GetExpYear() string`

GetExpYear returns the ExpYear field if non-nil, zero value otherwise.

### GetExpYearOk

`func (o *ChargeAuthorizationResponseDataAuthorization) GetExpYearOk() (*string, bool)`

GetExpYearOk returns a tuple with the ExpYear field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpYear

`func (o *ChargeAuthorizationResponseDataAuthorization) SetExpYear(v string)`

SetExpYear sets ExpYear field to given value.


### GetChannel

`func (o *ChargeAuthorizationResponseDataAuthorization) GetChannel() string`

GetChannel returns the Channel field if non-nil, zero value otherwise.

### GetChannelOk

`func (o *ChargeAuthorizationResponseDataAuthorization) GetChannelOk() (*string, bool)`

GetChannelOk returns a tuple with the Channel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannel

`func (o *ChargeAuthorizationResponseDataAuthorization) SetChannel(v string)`

SetChannel sets Channel field to given value.


### GetCardType

`func (o *ChargeAuthorizationResponseDataAuthorization) GetCardType() string`

GetCardType returns the CardType field if non-nil, zero value otherwise.

### GetCardTypeOk

`func (o *ChargeAuthorizationResponseDataAuthorization) GetCardTypeOk() (*string, bool)`

GetCardTypeOk returns a tuple with the CardType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardType

`func (o *ChargeAuthorizationResponseDataAuthorization) SetCardType(v string)`

SetCardType sets CardType field to given value.


### GetBank

`func (o *ChargeAuthorizationResponseDataAuthorization) GetBank() string`

GetBank returns the Bank field if non-nil, zero value otherwise.

### GetBankOk

`func (o *ChargeAuthorizationResponseDataAuthorization) GetBankOk() (*string, bool)`

GetBankOk returns a tuple with the Bank field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBank

`func (o *ChargeAuthorizationResponseDataAuthorization) SetBank(v string)`

SetBank sets Bank field to given value.


### GetCountryCode

`func (o *ChargeAuthorizationResponseDataAuthorization) GetCountryCode() string`

GetCountryCode returns the CountryCode field if non-nil, zero value otherwise.

### GetCountryCodeOk

`func (o *ChargeAuthorizationResponseDataAuthorization) GetCountryCodeOk() (*string, bool)`

GetCountryCodeOk returns a tuple with the CountryCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountryCode

`func (o *ChargeAuthorizationResponseDataAuthorization) SetCountryCode(v string)`

SetCountryCode sets CountryCode field to given value.


### GetBrand

`func (o *ChargeAuthorizationResponseDataAuthorization) GetBrand() string`

GetBrand returns the Brand field if non-nil, zero value otherwise.

### GetBrandOk

`func (o *ChargeAuthorizationResponseDataAuthorization) GetBrandOk() (*string, bool)`

GetBrandOk returns a tuple with the Brand field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBrand

`func (o *ChargeAuthorizationResponseDataAuthorization) SetBrand(v string)`

SetBrand sets Brand field to given value.


### GetReusable

`func (o *ChargeAuthorizationResponseDataAuthorization) GetReusable() bool`

GetReusable returns the Reusable field if non-nil, zero value otherwise.

### GetReusableOk

`func (o *ChargeAuthorizationResponseDataAuthorization) GetReusableOk() (*bool, bool)`

GetReusableOk returns a tuple with the Reusable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReusable

`func (o *ChargeAuthorizationResponseDataAuthorization) SetReusable(v bool)`

SetReusable sets Reusable field to given value.


### GetSignature

`func (o *ChargeAuthorizationResponseDataAuthorization) GetSignature() string`

GetSignature returns the Signature field if non-nil, zero value otherwise.

### GetSignatureOk

`func (o *ChargeAuthorizationResponseDataAuthorization) GetSignatureOk() (*string, bool)`

GetSignatureOk returns a tuple with the Signature field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignature

`func (o *ChargeAuthorizationResponseDataAuthorization) SetSignature(v string)`

SetSignature sets Signature field to given value.


### GetAccountName

`func (o *ChargeAuthorizationResponseDataAuthorization) GetAccountName() map[string]interface{}`

GetAccountName returns the AccountName field if non-nil, zero value otherwise.

### GetAccountNameOk

`func (o *ChargeAuthorizationResponseDataAuthorization) GetAccountNameOk() (*map[string]interface{}, bool)`

GetAccountNameOk returns a tuple with the AccountName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountName

`func (o *ChargeAuthorizationResponseDataAuthorization) SetAccountName(v map[string]interface{})`

SetAccountName sets AccountName field to given value.


### SetAccountNameNil

`func (o *ChargeAuthorizationResponseDataAuthorization) SetAccountNameNil(b bool)`

 SetAccountNameNil sets the value for AccountName to be an explicit nil

### UnsetAccountName
`func (o *ChargeAuthorizationResponseDataAuthorization) UnsetAccountName()`

UnsetAccountName ensures that no value is present for AccountName, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


