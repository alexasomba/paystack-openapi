# ChargeCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Email** | **string** | Customer&#39;s email address | 
**Amount** | **int32** | Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR | 
**AuthorizationCode** | Pointer to **string** | An authorization code to charge. | [optional] 
**Pin** | Pointer to **string** | 4-digit PIN (send with a non-reusable authorization code) | [optional] 
**Reference** | Pointer to **string** | Unique transaction reference. Only -, .&#x60;, &#x3D; and alphanumeric characters allowed. | [optional] 
**Birthday** | Pointer to **string** | The customer&#39;s birthday in the format YYYY-MM-DD e.g 2017-05-16 | [optional] 
**DeviceId** | Pointer to **string** | This is the unique identifier of the device a user uses in making payment.  Only -, .&#x60;, &#x3D; and alphanumeric characters are allowed. | [optional] 
**Metadata** | Pointer to **map[string]interface{}** | JSON object of custom data | [optional] 
**Bank** | Pointer to [**Bank**](Bank.md) |  | [optional] 
**MobileMoney** | Pointer to [**MobileMoney**](MobileMoney.md) |  | [optional] 
**Ussd** | Pointer to [**USSD**](USSD.md) |  | [optional] 
**Eft** | Pointer to [**EFT**](EFT.md) |  | [optional] 

## Methods

### NewChargeCreateRequest

`func NewChargeCreateRequest(email string, amount int32, ) *ChargeCreateRequest`

NewChargeCreateRequest instantiates a new ChargeCreateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChargeCreateRequestWithDefaults

`func NewChargeCreateRequestWithDefaults() *ChargeCreateRequest`

NewChargeCreateRequestWithDefaults instantiates a new ChargeCreateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmail

`func (o *ChargeCreateRequest) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *ChargeCreateRequest) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *ChargeCreateRequest) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetAmount

`func (o *ChargeCreateRequest) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *ChargeCreateRequest) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *ChargeCreateRequest) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetAuthorizationCode

`func (o *ChargeCreateRequest) GetAuthorizationCode() string`

GetAuthorizationCode returns the AuthorizationCode field if non-nil, zero value otherwise.

### GetAuthorizationCodeOk

`func (o *ChargeCreateRequest) GetAuthorizationCodeOk() (*string, bool)`

GetAuthorizationCodeOk returns a tuple with the AuthorizationCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizationCode

`func (o *ChargeCreateRequest) SetAuthorizationCode(v string)`

SetAuthorizationCode sets AuthorizationCode field to given value.

### HasAuthorizationCode

`func (o *ChargeCreateRequest) HasAuthorizationCode() bool`

HasAuthorizationCode returns a boolean if a field has been set.

### GetPin

`func (o *ChargeCreateRequest) GetPin() string`

GetPin returns the Pin field if non-nil, zero value otherwise.

### GetPinOk

`func (o *ChargeCreateRequest) GetPinOk() (*string, bool)`

GetPinOk returns a tuple with the Pin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPin

`func (o *ChargeCreateRequest) SetPin(v string)`

SetPin sets Pin field to given value.

### HasPin

`func (o *ChargeCreateRequest) HasPin() bool`

HasPin returns a boolean if a field has been set.

### GetReference

`func (o *ChargeCreateRequest) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *ChargeCreateRequest) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *ChargeCreateRequest) SetReference(v string)`

SetReference sets Reference field to given value.

### HasReference

`func (o *ChargeCreateRequest) HasReference() bool`

HasReference returns a boolean if a field has been set.

### GetBirthday

`func (o *ChargeCreateRequest) GetBirthday() string`

GetBirthday returns the Birthday field if non-nil, zero value otherwise.

### GetBirthdayOk

`func (o *ChargeCreateRequest) GetBirthdayOk() (*string, bool)`

GetBirthdayOk returns a tuple with the Birthday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBirthday

`func (o *ChargeCreateRequest) SetBirthday(v string)`

SetBirthday sets Birthday field to given value.

### HasBirthday

`func (o *ChargeCreateRequest) HasBirthday() bool`

HasBirthday returns a boolean if a field has been set.

### GetDeviceId

`func (o *ChargeCreateRequest) GetDeviceId() string`

GetDeviceId returns the DeviceId field if non-nil, zero value otherwise.

### GetDeviceIdOk

`func (o *ChargeCreateRequest) GetDeviceIdOk() (*string, bool)`

GetDeviceIdOk returns a tuple with the DeviceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeviceId

`func (o *ChargeCreateRequest) SetDeviceId(v string)`

SetDeviceId sets DeviceId field to given value.

### HasDeviceId

`func (o *ChargeCreateRequest) HasDeviceId() bool`

HasDeviceId returns a boolean if a field has been set.

### GetMetadata

`func (o *ChargeCreateRequest) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *ChargeCreateRequest) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *ChargeCreateRequest) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *ChargeCreateRequest) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### GetBank

`func (o *ChargeCreateRequest) GetBank() Bank`

GetBank returns the Bank field if non-nil, zero value otherwise.

### GetBankOk

`func (o *ChargeCreateRequest) GetBankOk() (*Bank, bool)`

GetBankOk returns a tuple with the Bank field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBank

`func (o *ChargeCreateRequest) SetBank(v Bank)`

SetBank sets Bank field to given value.

### HasBank

`func (o *ChargeCreateRequest) HasBank() bool`

HasBank returns a boolean if a field has been set.

### GetMobileMoney

`func (o *ChargeCreateRequest) GetMobileMoney() MobileMoney`

GetMobileMoney returns the MobileMoney field if non-nil, zero value otherwise.

### GetMobileMoneyOk

`func (o *ChargeCreateRequest) GetMobileMoneyOk() (*MobileMoney, bool)`

GetMobileMoneyOk returns a tuple with the MobileMoney field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMobileMoney

`func (o *ChargeCreateRequest) SetMobileMoney(v MobileMoney)`

SetMobileMoney sets MobileMoney field to given value.

### HasMobileMoney

`func (o *ChargeCreateRequest) HasMobileMoney() bool`

HasMobileMoney returns a boolean if a field has been set.

### GetUssd

`func (o *ChargeCreateRequest) GetUssd() USSD`

GetUssd returns the Ussd field if non-nil, zero value otherwise.

### GetUssdOk

`func (o *ChargeCreateRequest) GetUssdOk() (*USSD, bool)`

GetUssdOk returns a tuple with the Ussd field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUssd

`func (o *ChargeCreateRequest) SetUssd(v USSD)`

SetUssd sets Ussd field to given value.

### HasUssd

`func (o *ChargeCreateRequest) HasUssd() bool`

HasUssd returns a boolean if a field has been set.

### GetEft

`func (o *ChargeCreateRequest) GetEft() EFT`

GetEft returns the Eft field if non-nil, zero value otherwise.

### GetEftOk

`func (o *ChargeCreateRequest) GetEftOk() (*EFT, bool)`

GetEftOk returns a tuple with the Eft field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEft

`func (o *ChargeCreateRequest) SetEft(v EFT)`

SetEft sets Eft field to given value.

### HasEft

`func (o *ChargeCreateRequest) HasEft() bool`

HasEft returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


