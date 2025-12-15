# VerifyResponseDataAuthorization

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthorizationCode** | Pointer to **string** |  | [optional] 
**Bin** | Pointer to **interface{}** |  | [optional] 
**Last4** | Pointer to **string** |  | [optional] 
**ExpMonth** | Pointer to **string** |  | [optional] 
**ExpYear** | Pointer to **string** |  | [optional] 
**Channel** | Pointer to **string** |  | [optional] 
**CardType** | Pointer to **string** |  | [optional] 
**Bank** | Pointer to **string** |  | [optional] 
**CountryCode** | Pointer to **string** |  | [optional] 
**Brand** | Pointer to **string** |  | [optional] 
**Reusable** | Pointer to **bool** |  | [optional] 
**Signature** | Pointer to **string** |  | [optional] 
**AccountName** | Pointer to **interface{}** |  | [optional] 
**ReceiverBankAccountNumber** | Pointer to **interface{}** |  | [optional] 
**ReceiverBank** | Pointer to **interface{}** |  | [optional] 

## Methods

### NewVerifyResponseDataAuthorization

`func NewVerifyResponseDataAuthorization() *VerifyResponseDataAuthorization`

NewVerifyResponseDataAuthorization instantiates a new VerifyResponseDataAuthorization object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVerifyResponseDataAuthorizationWithDefaults

`func NewVerifyResponseDataAuthorizationWithDefaults() *VerifyResponseDataAuthorization`

NewVerifyResponseDataAuthorizationWithDefaults instantiates a new VerifyResponseDataAuthorization object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthorizationCode

`func (o *VerifyResponseDataAuthorization) GetAuthorizationCode() string`

GetAuthorizationCode returns the AuthorizationCode field if non-nil, zero value otherwise.

### GetAuthorizationCodeOk

`func (o *VerifyResponseDataAuthorization) GetAuthorizationCodeOk() (*string, bool)`

GetAuthorizationCodeOk returns a tuple with the AuthorizationCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizationCode

`func (o *VerifyResponseDataAuthorization) SetAuthorizationCode(v string)`

SetAuthorizationCode sets AuthorizationCode field to given value.

### HasAuthorizationCode

`func (o *VerifyResponseDataAuthorization) HasAuthorizationCode() bool`

HasAuthorizationCode returns a boolean if a field has been set.

### GetBin

`func (o *VerifyResponseDataAuthorization) GetBin() interface{}`

GetBin returns the Bin field if non-nil, zero value otherwise.

### GetBinOk

`func (o *VerifyResponseDataAuthorization) GetBinOk() (*interface{}, bool)`

GetBinOk returns a tuple with the Bin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBin

`func (o *VerifyResponseDataAuthorization) SetBin(v interface{})`

SetBin sets Bin field to given value.

### HasBin

`func (o *VerifyResponseDataAuthorization) HasBin() bool`

HasBin returns a boolean if a field has been set.

### SetBinNil

`func (o *VerifyResponseDataAuthorization) SetBinNil(b bool)`

 SetBinNil sets the value for Bin to be an explicit nil

### UnsetBin
`func (o *VerifyResponseDataAuthorization) UnsetBin()`

UnsetBin ensures that no value is present for Bin, not even an explicit nil
### GetLast4

`func (o *VerifyResponseDataAuthorization) GetLast4() string`

GetLast4 returns the Last4 field if non-nil, zero value otherwise.

### GetLast4Ok

`func (o *VerifyResponseDataAuthorization) GetLast4Ok() (*string, bool)`

GetLast4Ok returns a tuple with the Last4 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLast4

`func (o *VerifyResponseDataAuthorization) SetLast4(v string)`

SetLast4 sets Last4 field to given value.

### HasLast4

`func (o *VerifyResponseDataAuthorization) HasLast4() bool`

HasLast4 returns a boolean if a field has been set.

### GetExpMonth

`func (o *VerifyResponseDataAuthorization) GetExpMonth() string`

GetExpMonth returns the ExpMonth field if non-nil, zero value otherwise.

### GetExpMonthOk

`func (o *VerifyResponseDataAuthorization) GetExpMonthOk() (*string, bool)`

GetExpMonthOk returns a tuple with the ExpMonth field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpMonth

`func (o *VerifyResponseDataAuthorization) SetExpMonth(v string)`

SetExpMonth sets ExpMonth field to given value.

### HasExpMonth

`func (o *VerifyResponseDataAuthorization) HasExpMonth() bool`

HasExpMonth returns a boolean if a field has been set.

### GetExpYear

`func (o *VerifyResponseDataAuthorization) GetExpYear() string`

GetExpYear returns the ExpYear field if non-nil, zero value otherwise.

### GetExpYearOk

`func (o *VerifyResponseDataAuthorization) GetExpYearOk() (*string, bool)`

GetExpYearOk returns a tuple with the ExpYear field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpYear

`func (o *VerifyResponseDataAuthorization) SetExpYear(v string)`

SetExpYear sets ExpYear field to given value.

### HasExpYear

`func (o *VerifyResponseDataAuthorization) HasExpYear() bool`

HasExpYear returns a boolean if a field has been set.

### GetChannel

`func (o *VerifyResponseDataAuthorization) GetChannel() string`

GetChannel returns the Channel field if non-nil, zero value otherwise.

### GetChannelOk

`func (o *VerifyResponseDataAuthorization) GetChannelOk() (*string, bool)`

GetChannelOk returns a tuple with the Channel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannel

`func (o *VerifyResponseDataAuthorization) SetChannel(v string)`

SetChannel sets Channel field to given value.

### HasChannel

`func (o *VerifyResponseDataAuthorization) HasChannel() bool`

HasChannel returns a boolean if a field has been set.

### GetCardType

`func (o *VerifyResponseDataAuthorization) GetCardType() string`

GetCardType returns the CardType field if non-nil, zero value otherwise.

### GetCardTypeOk

`func (o *VerifyResponseDataAuthorization) GetCardTypeOk() (*string, bool)`

GetCardTypeOk returns a tuple with the CardType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardType

`func (o *VerifyResponseDataAuthorization) SetCardType(v string)`

SetCardType sets CardType field to given value.

### HasCardType

`func (o *VerifyResponseDataAuthorization) HasCardType() bool`

HasCardType returns a boolean if a field has been set.

### GetBank

`func (o *VerifyResponseDataAuthorization) GetBank() string`

GetBank returns the Bank field if non-nil, zero value otherwise.

### GetBankOk

`func (o *VerifyResponseDataAuthorization) GetBankOk() (*string, bool)`

GetBankOk returns a tuple with the Bank field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBank

`func (o *VerifyResponseDataAuthorization) SetBank(v string)`

SetBank sets Bank field to given value.

### HasBank

`func (o *VerifyResponseDataAuthorization) HasBank() bool`

HasBank returns a boolean if a field has been set.

### GetCountryCode

`func (o *VerifyResponseDataAuthorization) GetCountryCode() string`

GetCountryCode returns the CountryCode field if non-nil, zero value otherwise.

### GetCountryCodeOk

`func (o *VerifyResponseDataAuthorization) GetCountryCodeOk() (*string, bool)`

GetCountryCodeOk returns a tuple with the CountryCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountryCode

`func (o *VerifyResponseDataAuthorization) SetCountryCode(v string)`

SetCountryCode sets CountryCode field to given value.

### HasCountryCode

`func (o *VerifyResponseDataAuthorization) HasCountryCode() bool`

HasCountryCode returns a boolean if a field has been set.

### GetBrand

`func (o *VerifyResponseDataAuthorization) GetBrand() string`

GetBrand returns the Brand field if non-nil, zero value otherwise.

### GetBrandOk

`func (o *VerifyResponseDataAuthorization) GetBrandOk() (*string, bool)`

GetBrandOk returns a tuple with the Brand field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBrand

`func (o *VerifyResponseDataAuthorization) SetBrand(v string)`

SetBrand sets Brand field to given value.

### HasBrand

`func (o *VerifyResponseDataAuthorization) HasBrand() bool`

HasBrand returns a boolean if a field has been set.

### GetReusable

`func (o *VerifyResponseDataAuthorization) GetReusable() bool`

GetReusable returns the Reusable field if non-nil, zero value otherwise.

### GetReusableOk

`func (o *VerifyResponseDataAuthorization) GetReusableOk() (*bool, bool)`

GetReusableOk returns a tuple with the Reusable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReusable

`func (o *VerifyResponseDataAuthorization) SetReusable(v bool)`

SetReusable sets Reusable field to given value.

### HasReusable

`func (o *VerifyResponseDataAuthorization) HasReusable() bool`

HasReusable returns a boolean if a field has been set.

### GetSignature

`func (o *VerifyResponseDataAuthorization) GetSignature() string`

GetSignature returns the Signature field if non-nil, zero value otherwise.

### GetSignatureOk

`func (o *VerifyResponseDataAuthorization) GetSignatureOk() (*string, bool)`

GetSignatureOk returns a tuple with the Signature field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignature

`func (o *VerifyResponseDataAuthorization) SetSignature(v string)`

SetSignature sets Signature field to given value.

### HasSignature

`func (o *VerifyResponseDataAuthorization) HasSignature() bool`

HasSignature returns a boolean if a field has been set.

### GetAccountName

`func (o *VerifyResponseDataAuthorization) GetAccountName() interface{}`

GetAccountName returns the AccountName field if non-nil, zero value otherwise.

### GetAccountNameOk

`func (o *VerifyResponseDataAuthorization) GetAccountNameOk() (*interface{}, bool)`

GetAccountNameOk returns a tuple with the AccountName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountName

`func (o *VerifyResponseDataAuthorization) SetAccountName(v interface{})`

SetAccountName sets AccountName field to given value.

### HasAccountName

`func (o *VerifyResponseDataAuthorization) HasAccountName() bool`

HasAccountName returns a boolean if a field has been set.

### SetAccountNameNil

`func (o *VerifyResponseDataAuthorization) SetAccountNameNil(b bool)`

 SetAccountNameNil sets the value for AccountName to be an explicit nil

### UnsetAccountName
`func (o *VerifyResponseDataAuthorization) UnsetAccountName()`

UnsetAccountName ensures that no value is present for AccountName, not even an explicit nil
### GetReceiverBankAccountNumber

`func (o *VerifyResponseDataAuthorization) GetReceiverBankAccountNumber() interface{}`

GetReceiverBankAccountNumber returns the ReceiverBankAccountNumber field if non-nil, zero value otherwise.

### GetReceiverBankAccountNumberOk

`func (o *VerifyResponseDataAuthorization) GetReceiverBankAccountNumberOk() (*interface{}, bool)`

GetReceiverBankAccountNumberOk returns a tuple with the ReceiverBankAccountNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiverBankAccountNumber

`func (o *VerifyResponseDataAuthorization) SetReceiverBankAccountNumber(v interface{})`

SetReceiverBankAccountNumber sets ReceiverBankAccountNumber field to given value.

### HasReceiverBankAccountNumber

`func (o *VerifyResponseDataAuthorization) HasReceiverBankAccountNumber() bool`

HasReceiverBankAccountNumber returns a boolean if a field has been set.

### SetReceiverBankAccountNumberNil

`func (o *VerifyResponseDataAuthorization) SetReceiverBankAccountNumberNil(b bool)`

 SetReceiverBankAccountNumberNil sets the value for ReceiverBankAccountNumber to be an explicit nil

### UnsetReceiverBankAccountNumber
`func (o *VerifyResponseDataAuthorization) UnsetReceiverBankAccountNumber()`

UnsetReceiverBankAccountNumber ensures that no value is present for ReceiverBankAccountNumber, not even an explicit nil
### GetReceiverBank

`func (o *VerifyResponseDataAuthorization) GetReceiverBank() interface{}`

GetReceiverBank returns the ReceiverBank field if non-nil, zero value otherwise.

### GetReceiverBankOk

`func (o *VerifyResponseDataAuthorization) GetReceiverBankOk() (*interface{}, bool)`

GetReceiverBankOk returns a tuple with the ReceiverBank field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiverBank

`func (o *VerifyResponseDataAuthorization) SetReceiverBank(v interface{})`

SetReceiverBank sets ReceiverBank field to given value.

### HasReceiverBank

`func (o *VerifyResponseDataAuthorization) HasReceiverBank() bool`

HasReceiverBank returns a boolean if a field has been set.

### SetReceiverBankNil

`func (o *VerifyResponseDataAuthorization) SetReceiverBankNil(b bool)`

 SetReceiverBankNil sets the value for ReceiverBank to be an explicit nil

### UnsetReceiverBank
`func (o *VerifyResponseDataAuthorization) UnsetReceiverBank()`

UnsetReceiverBank ensures that no value is present for ReceiverBank, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


