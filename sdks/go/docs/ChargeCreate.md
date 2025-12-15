# ChargeCreate

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

## Methods

### NewChargeCreate

`func NewChargeCreate(email string, amount int32, ) *ChargeCreate`

NewChargeCreate instantiates a new ChargeCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChargeCreateWithDefaults

`func NewChargeCreateWithDefaults() *ChargeCreate`

NewChargeCreateWithDefaults instantiates a new ChargeCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmail

`func (o *ChargeCreate) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *ChargeCreate) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *ChargeCreate) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetAmount

`func (o *ChargeCreate) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *ChargeCreate) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *ChargeCreate) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetAuthorizationCode

`func (o *ChargeCreate) GetAuthorizationCode() string`

GetAuthorizationCode returns the AuthorizationCode field if non-nil, zero value otherwise.

### GetAuthorizationCodeOk

`func (o *ChargeCreate) GetAuthorizationCodeOk() (*string, bool)`

GetAuthorizationCodeOk returns a tuple with the AuthorizationCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizationCode

`func (o *ChargeCreate) SetAuthorizationCode(v string)`

SetAuthorizationCode sets AuthorizationCode field to given value.

### HasAuthorizationCode

`func (o *ChargeCreate) HasAuthorizationCode() bool`

HasAuthorizationCode returns a boolean if a field has been set.

### GetPin

`func (o *ChargeCreate) GetPin() string`

GetPin returns the Pin field if non-nil, zero value otherwise.

### GetPinOk

`func (o *ChargeCreate) GetPinOk() (*string, bool)`

GetPinOk returns a tuple with the Pin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPin

`func (o *ChargeCreate) SetPin(v string)`

SetPin sets Pin field to given value.

### HasPin

`func (o *ChargeCreate) HasPin() bool`

HasPin returns a boolean if a field has been set.

### GetReference

`func (o *ChargeCreate) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *ChargeCreate) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *ChargeCreate) SetReference(v string)`

SetReference sets Reference field to given value.

### HasReference

`func (o *ChargeCreate) HasReference() bool`

HasReference returns a boolean if a field has been set.

### GetBirthday

`func (o *ChargeCreate) GetBirthday() string`

GetBirthday returns the Birthday field if non-nil, zero value otherwise.

### GetBirthdayOk

`func (o *ChargeCreate) GetBirthdayOk() (*string, bool)`

GetBirthdayOk returns a tuple with the Birthday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBirthday

`func (o *ChargeCreate) SetBirthday(v string)`

SetBirthday sets Birthday field to given value.

### HasBirthday

`func (o *ChargeCreate) HasBirthday() bool`

HasBirthday returns a boolean if a field has been set.

### GetDeviceId

`func (o *ChargeCreate) GetDeviceId() string`

GetDeviceId returns the DeviceId field if non-nil, zero value otherwise.

### GetDeviceIdOk

`func (o *ChargeCreate) GetDeviceIdOk() (*string, bool)`

GetDeviceIdOk returns a tuple with the DeviceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeviceId

`func (o *ChargeCreate) SetDeviceId(v string)`

SetDeviceId sets DeviceId field to given value.

### HasDeviceId

`func (o *ChargeCreate) HasDeviceId() bool`

HasDeviceId returns a boolean if a field has been set.

### GetMetadata

`func (o *ChargeCreate) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *ChargeCreate) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *ChargeCreate) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *ChargeCreate) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


