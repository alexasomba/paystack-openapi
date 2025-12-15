# TransactionPartialDebitResponseDataCustomer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**FirstName** | **NullableString** |  | 
**LastName** | **NullableString** |  | 
**Email** | **string** |  | 
**CustomerCode** | **string** |  | 
**Phone** | **NullableString** |  | 
**Metadata** | **map[string]interface{}** |  | 
**RiskAction** | **string** |  | 
**InternationalFormatPhone** | **NullableString** |  | 

## Methods

### NewTransactionPartialDebitResponseDataCustomer

`func NewTransactionPartialDebitResponseDataCustomer(id int32, firstName NullableString, lastName NullableString, email string, customerCode string, phone NullableString, metadata map[string]interface{}, riskAction string, internationalFormatPhone NullableString, ) *TransactionPartialDebitResponseDataCustomer`

NewTransactionPartialDebitResponseDataCustomer instantiates a new TransactionPartialDebitResponseDataCustomer object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionPartialDebitResponseDataCustomerWithDefaults

`func NewTransactionPartialDebitResponseDataCustomerWithDefaults() *TransactionPartialDebitResponseDataCustomer`

NewTransactionPartialDebitResponseDataCustomerWithDefaults instantiates a new TransactionPartialDebitResponseDataCustomer object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *TransactionPartialDebitResponseDataCustomer) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *TransactionPartialDebitResponseDataCustomer) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *TransactionPartialDebitResponseDataCustomer) SetId(v int32)`

SetId sets Id field to given value.


### GetFirstName

`func (o *TransactionPartialDebitResponseDataCustomer) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *TransactionPartialDebitResponseDataCustomer) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *TransactionPartialDebitResponseDataCustomer) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.


### SetFirstNameNil

`func (o *TransactionPartialDebitResponseDataCustomer) SetFirstNameNil(b bool)`

 SetFirstNameNil sets the value for FirstName to be an explicit nil

### UnsetFirstName
`func (o *TransactionPartialDebitResponseDataCustomer) UnsetFirstName()`

UnsetFirstName ensures that no value is present for FirstName, not even an explicit nil
### GetLastName

`func (o *TransactionPartialDebitResponseDataCustomer) GetLastName() string`

GetLastName returns the LastName field if non-nil, zero value otherwise.

### GetLastNameOk

`func (o *TransactionPartialDebitResponseDataCustomer) GetLastNameOk() (*string, bool)`

GetLastNameOk returns a tuple with the LastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName

`func (o *TransactionPartialDebitResponseDataCustomer) SetLastName(v string)`

SetLastName sets LastName field to given value.


### SetLastNameNil

`func (o *TransactionPartialDebitResponseDataCustomer) SetLastNameNil(b bool)`

 SetLastNameNil sets the value for LastName to be an explicit nil

### UnsetLastName
`func (o *TransactionPartialDebitResponseDataCustomer) UnsetLastName()`

UnsetLastName ensures that no value is present for LastName, not even an explicit nil
### GetEmail

`func (o *TransactionPartialDebitResponseDataCustomer) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *TransactionPartialDebitResponseDataCustomer) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *TransactionPartialDebitResponseDataCustomer) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetCustomerCode

`func (o *TransactionPartialDebitResponseDataCustomer) GetCustomerCode() string`

GetCustomerCode returns the CustomerCode field if non-nil, zero value otherwise.

### GetCustomerCodeOk

`func (o *TransactionPartialDebitResponseDataCustomer) GetCustomerCodeOk() (*string, bool)`

GetCustomerCodeOk returns a tuple with the CustomerCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerCode

`func (o *TransactionPartialDebitResponseDataCustomer) SetCustomerCode(v string)`

SetCustomerCode sets CustomerCode field to given value.


### GetPhone

`func (o *TransactionPartialDebitResponseDataCustomer) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *TransactionPartialDebitResponseDataCustomer) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *TransactionPartialDebitResponseDataCustomer) SetPhone(v string)`

SetPhone sets Phone field to given value.


### SetPhoneNil

`func (o *TransactionPartialDebitResponseDataCustomer) SetPhoneNil(b bool)`

 SetPhoneNil sets the value for Phone to be an explicit nil

### UnsetPhone
`func (o *TransactionPartialDebitResponseDataCustomer) UnsetPhone()`

UnsetPhone ensures that no value is present for Phone, not even an explicit nil
### GetMetadata

`func (o *TransactionPartialDebitResponseDataCustomer) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *TransactionPartialDebitResponseDataCustomer) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *TransactionPartialDebitResponseDataCustomer) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.


### SetMetadataNil

`func (o *TransactionPartialDebitResponseDataCustomer) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *TransactionPartialDebitResponseDataCustomer) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil
### GetRiskAction

`func (o *TransactionPartialDebitResponseDataCustomer) GetRiskAction() string`

GetRiskAction returns the RiskAction field if non-nil, zero value otherwise.

### GetRiskActionOk

`func (o *TransactionPartialDebitResponseDataCustomer) GetRiskActionOk() (*string, bool)`

GetRiskActionOk returns a tuple with the RiskAction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRiskAction

`func (o *TransactionPartialDebitResponseDataCustomer) SetRiskAction(v string)`

SetRiskAction sets RiskAction field to given value.


### GetInternationalFormatPhone

`func (o *TransactionPartialDebitResponseDataCustomer) GetInternationalFormatPhone() string`

GetInternationalFormatPhone returns the InternationalFormatPhone field if non-nil, zero value otherwise.

### GetInternationalFormatPhoneOk

`func (o *TransactionPartialDebitResponseDataCustomer) GetInternationalFormatPhoneOk() (*string, bool)`

GetInternationalFormatPhoneOk returns a tuple with the InternationalFormatPhone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternationalFormatPhone

`func (o *TransactionPartialDebitResponseDataCustomer) SetInternationalFormatPhone(v string)`

SetInternationalFormatPhone sets InternationalFormatPhone field to given value.


### SetInternationalFormatPhoneNil

`func (o *TransactionPartialDebitResponseDataCustomer) SetInternationalFormatPhoneNil(b bool)`

 SetInternationalFormatPhoneNil sets the value for InternationalFormatPhone to be an explicit nil

### UnsetInternationalFormatPhone
`func (o *TransactionPartialDebitResponseDataCustomer) UnsetInternationalFormatPhone()`

UnsetInternationalFormatPhone ensures that no value is present for InternationalFormatPhone, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


