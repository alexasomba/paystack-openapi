# ChargeAuthorizationResponseDataCustomer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**FirstName** | **NullableString** |  | 
**LastName** | **NullableString** |  | 
**Email** | **string** |  | 
**CustomerCode** | **string** |  | 
**Phone** | **NullableString** |  | 
**Metadata** | [**NullableChargeAuthorizationResponseDataCustomerMetadata**](ChargeAuthorizationResponseDataCustomerMetadata.md) |  | 
**RiskAction** | **string** |  | 
**InternationalFormatPhone** | **NullableString** |  | 

## Methods

### NewChargeAuthorizationResponseDataCustomer

`func NewChargeAuthorizationResponseDataCustomer(id int32, firstName NullableString, lastName NullableString, email string, customerCode string, phone NullableString, metadata NullableChargeAuthorizationResponseDataCustomerMetadata, riskAction string, internationalFormatPhone NullableString, ) *ChargeAuthorizationResponseDataCustomer`

NewChargeAuthorizationResponseDataCustomer instantiates a new ChargeAuthorizationResponseDataCustomer object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChargeAuthorizationResponseDataCustomerWithDefaults

`func NewChargeAuthorizationResponseDataCustomerWithDefaults() *ChargeAuthorizationResponseDataCustomer`

NewChargeAuthorizationResponseDataCustomerWithDefaults instantiates a new ChargeAuthorizationResponseDataCustomer object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ChargeAuthorizationResponseDataCustomer) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ChargeAuthorizationResponseDataCustomer) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ChargeAuthorizationResponseDataCustomer) SetId(v int32)`

SetId sets Id field to given value.


### GetFirstName

`func (o *ChargeAuthorizationResponseDataCustomer) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *ChargeAuthorizationResponseDataCustomer) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *ChargeAuthorizationResponseDataCustomer) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.


### SetFirstNameNil

`func (o *ChargeAuthorizationResponseDataCustomer) SetFirstNameNil(b bool)`

 SetFirstNameNil sets the value for FirstName to be an explicit nil

### UnsetFirstName
`func (o *ChargeAuthorizationResponseDataCustomer) UnsetFirstName()`

UnsetFirstName ensures that no value is present for FirstName, not even an explicit nil
### GetLastName

`func (o *ChargeAuthorizationResponseDataCustomer) GetLastName() string`

GetLastName returns the LastName field if non-nil, zero value otherwise.

### GetLastNameOk

`func (o *ChargeAuthorizationResponseDataCustomer) GetLastNameOk() (*string, bool)`

GetLastNameOk returns a tuple with the LastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName

`func (o *ChargeAuthorizationResponseDataCustomer) SetLastName(v string)`

SetLastName sets LastName field to given value.


### SetLastNameNil

`func (o *ChargeAuthorizationResponseDataCustomer) SetLastNameNil(b bool)`

 SetLastNameNil sets the value for LastName to be an explicit nil

### UnsetLastName
`func (o *ChargeAuthorizationResponseDataCustomer) UnsetLastName()`

UnsetLastName ensures that no value is present for LastName, not even an explicit nil
### GetEmail

`func (o *ChargeAuthorizationResponseDataCustomer) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *ChargeAuthorizationResponseDataCustomer) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *ChargeAuthorizationResponseDataCustomer) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetCustomerCode

`func (o *ChargeAuthorizationResponseDataCustomer) GetCustomerCode() string`

GetCustomerCode returns the CustomerCode field if non-nil, zero value otherwise.

### GetCustomerCodeOk

`func (o *ChargeAuthorizationResponseDataCustomer) GetCustomerCodeOk() (*string, bool)`

GetCustomerCodeOk returns a tuple with the CustomerCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerCode

`func (o *ChargeAuthorizationResponseDataCustomer) SetCustomerCode(v string)`

SetCustomerCode sets CustomerCode field to given value.


### GetPhone

`func (o *ChargeAuthorizationResponseDataCustomer) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *ChargeAuthorizationResponseDataCustomer) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *ChargeAuthorizationResponseDataCustomer) SetPhone(v string)`

SetPhone sets Phone field to given value.


### SetPhoneNil

`func (o *ChargeAuthorizationResponseDataCustomer) SetPhoneNil(b bool)`

 SetPhoneNil sets the value for Phone to be an explicit nil

### UnsetPhone
`func (o *ChargeAuthorizationResponseDataCustomer) UnsetPhone()`

UnsetPhone ensures that no value is present for Phone, not even an explicit nil
### GetMetadata

`func (o *ChargeAuthorizationResponseDataCustomer) GetMetadata() ChargeAuthorizationResponseDataCustomerMetadata`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *ChargeAuthorizationResponseDataCustomer) GetMetadataOk() (*ChargeAuthorizationResponseDataCustomerMetadata, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *ChargeAuthorizationResponseDataCustomer) SetMetadata(v ChargeAuthorizationResponseDataCustomerMetadata)`

SetMetadata sets Metadata field to given value.


### SetMetadataNil

`func (o *ChargeAuthorizationResponseDataCustomer) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *ChargeAuthorizationResponseDataCustomer) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil
### GetRiskAction

`func (o *ChargeAuthorizationResponseDataCustomer) GetRiskAction() string`

GetRiskAction returns the RiskAction field if non-nil, zero value otherwise.

### GetRiskActionOk

`func (o *ChargeAuthorizationResponseDataCustomer) GetRiskActionOk() (*string, bool)`

GetRiskActionOk returns a tuple with the RiskAction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRiskAction

`func (o *ChargeAuthorizationResponseDataCustomer) SetRiskAction(v string)`

SetRiskAction sets RiskAction field to given value.


### GetInternationalFormatPhone

`func (o *ChargeAuthorizationResponseDataCustomer) GetInternationalFormatPhone() string`

GetInternationalFormatPhone returns the InternationalFormatPhone field if non-nil, zero value otherwise.

### GetInternationalFormatPhoneOk

`func (o *ChargeAuthorizationResponseDataCustomer) GetInternationalFormatPhoneOk() (*string, bool)`

GetInternationalFormatPhoneOk returns a tuple with the InternationalFormatPhone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternationalFormatPhone

`func (o *ChargeAuthorizationResponseDataCustomer) SetInternationalFormatPhone(v string)`

SetInternationalFormatPhone sets InternationalFormatPhone field to given value.


### SetInternationalFormatPhoneNil

`func (o *ChargeAuthorizationResponseDataCustomer) SetInternationalFormatPhoneNil(b bool)`

 SetInternationalFormatPhoneNil sets the value for InternationalFormatPhone to be an explicit nil

### UnsetInternationalFormatPhone
`func (o *ChargeAuthorizationResponseDataCustomer) UnsetInternationalFormatPhone()`

UnsetInternationalFormatPhone ensures that no value is present for InternationalFormatPhone, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


