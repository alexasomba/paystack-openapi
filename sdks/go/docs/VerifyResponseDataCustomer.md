# VerifyResponseDataCustomer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**FirstName** | **NullableString** |  | 
**LastName** | **NullableString** |  | 
**Email** | **string** |  | 
**CustomerCode** | **string** |  | 
**Phone** | **NullableString** |  | 
**Metadata** | **interface{}** |  | 
**RiskAction** | **string** |  | 
**InternationalFormatPhone** | **NullableString** |  | 

## Methods

### NewVerifyResponseDataCustomer

`func NewVerifyResponseDataCustomer(id int32, firstName NullableString, lastName NullableString, email string, customerCode string, phone NullableString, metadata interface{}, riskAction string, internationalFormatPhone NullableString, ) *VerifyResponseDataCustomer`

NewVerifyResponseDataCustomer instantiates a new VerifyResponseDataCustomer object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVerifyResponseDataCustomerWithDefaults

`func NewVerifyResponseDataCustomerWithDefaults() *VerifyResponseDataCustomer`

NewVerifyResponseDataCustomerWithDefaults instantiates a new VerifyResponseDataCustomer object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *VerifyResponseDataCustomer) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *VerifyResponseDataCustomer) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *VerifyResponseDataCustomer) SetId(v int32)`

SetId sets Id field to given value.


### GetFirstName

`func (o *VerifyResponseDataCustomer) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *VerifyResponseDataCustomer) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *VerifyResponseDataCustomer) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.


### SetFirstNameNil

`func (o *VerifyResponseDataCustomer) SetFirstNameNil(b bool)`

 SetFirstNameNil sets the value for FirstName to be an explicit nil

### UnsetFirstName
`func (o *VerifyResponseDataCustomer) UnsetFirstName()`

UnsetFirstName ensures that no value is present for FirstName, not even an explicit nil
### GetLastName

`func (o *VerifyResponseDataCustomer) GetLastName() string`

GetLastName returns the LastName field if non-nil, zero value otherwise.

### GetLastNameOk

`func (o *VerifyResponseDataCustomer) GetLastNameOk() (*string, bool)`

GetLastNameOk returns a tuple with the LastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName

`func (o *VerifyResponseDataCustomer) SetLastName(v string)`

SetLastName sets LastName field to given value.


### SetLastNameNil

`func (o *VerifyResponseDataCustomer) SetLastNameNil(b bool)`

 SetLastNameNil sets the value for LastName to be an explicit nil

### UnsetLastName
`func (o *VerifyResponseDataCustomer) UnsetLastName()`

UnsetLastName ensures that no value is present for LastName, not even an explicit nil
### GetEmail

`func (o *VerifyResponseDataCustomer) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *VerifyResponseDataCustomer) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *VerifyResponseDataCustomer) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetCustomerCode

`func (o *VerifyResponseDataCustomer) GetCustomerCode() string`

GetCustomerCode returns the CustomerCode field if non-nil, zero value otherwise.

### GetCustomerCodeOk

`func (o *VerifyResponseDataCustomer) GetCustomerCodeOk() (*string, bool)`

GetCustomerCodeOk returns a tuple with the CustomerCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerCode

`func (o *VerifyResponseDataCustomer) SetCustomerCode(v string)`

SetCustomerCode sets CustomerCode field to given value.


### GetPhone

`func (o *VerifyResponseDataCustomer) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *VerifyResponseDataCustomer) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *VerifyResponseDataCustomer) SetPhone(v string)`

SetPhone sets Phone field to given value.


### SetPhoneNil

`func (o *VerifyResponseDataCustomer) SetPhoneNil(b bool)`

 SetPhoneNil sets the value for Phone to be an explicit nil

### UnsetPhone
`func (o *VerifyResponseDataCustomer) UnsetPhone()`

UnsetPhone ensures that no value is present for Phone, not even an explicit nil
### GetMetadata

`func (o *VerifyResponseDataCustomer) GetMetadata() interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *VerifyResponseDataCustomer) GetMetadataOk() (*interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *VerifyResponseDataCustomer) SetMetadata(v interface{})`

SetMetadata sets Metadata field to given value.


### SetMetadataNil

`func (o *VerifyResponseDataCustomer) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *VerifyResponseDataCustomer) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil
### GetRiskAction

`func (o *VerifyResponseDataCustomer) GetRiskAction() string`

GetRiskAction returns the RiskAction field if non-nil, zero value otherwise.

### GetRiskActionOk

`func (o *VerifyResponseDataCustomer) GetRiskActionOk() (*string, bool)`

GetRiskActionOk returns a tuple with the RiskAction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRiskAction

`func (o *VerifyResponseDataCustomer) SetRiskAction(v string)`

SetRiskAction sets RiskAction field to given value.


### GetInternationalFormatPhone

`func (o *VerifyResponseDataCustomer) GetInternationalFormatPhone() string`

GetInternationalFormatPhone returns the InternationalFormatPhone field if non-nil, zero value otherwise.

### GetInternationalFormatPhoneOk

`func (o *VerifyResponseDataCustomer) GetInternationalFormatPhoneOk() (*string, bool)`

GetInternationalFormatPhoneOk returns a tuple with the InternationalFormatPhone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternationalFormatPhone

`func (o *VerifyResponseDataCustomer) SetInternationalFormatPhone(v string)`

SetInternationalFormatPhone sets InternationalFormatPhone field to given value.


### SetInternationalFormatPhoneNil

`func (o *VerifyResponseDataCustomer) SetInternationalFormatPhoneNil(b bool)`

 SetInternationalFormatPhoneNil sets the value for InternationalFormatPhone to be an explicit nil

### UnsetInternationalFormatPhone
`func (o *VerifyResponseDataCustomer) UnsetInternationalFormatPhone()`

UnsetInternationalFormatPhone ensures that no value is present for InternationalFormatPhone, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


