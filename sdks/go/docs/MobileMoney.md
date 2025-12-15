# MobileMoney

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Phone** | Pointer to **string** | Customer&#39;s phone number | [optional] 
**Provider** | Pointer to **string** | The telco provider of customer&#39;s phone number. This can be fetched from the List Bank endpoint | [optional] 

## Methods

### NewMobileMoney

`func NewMobileMoney() *MobileMoney`

NewMobileMoney instantiates a new MobileMoney object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMobileMoneyWithDefaults

`func NewMobileMoneyWithDefaults() *MobileMoney`

NewMobileMoneyWithDefaults instantiates a new MobileMoney object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPhone

`func (o *MobileMoney) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *MobileMoney) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *MobileMoney) SetPhone(v string)`

SetPhone sets Phone field to given value.

### HasPhone

`func (o *MobileMoney) HasPhone() bool`

HasPhone returns a boolean if a field has been set.

### GetProvider

`func (o *MobileMoney) GetProvider() string`

GetProvider returns the Provider field if non-nil, zero value otherwise.

### GetProviderOk

`func (o *MobileMoney) GetProviderOk() (*string, bool)`

GetProviderOk returns a tuple with the Provider field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvider

`func (o *MobileMoney) SetProvider(v string)`

SetProvider sets Provider field to given value.

### HasProvider

`func (o *MobileMoney) HasProvider() bool`

HasProvider returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


