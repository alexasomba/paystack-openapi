# CustomerValidate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FirstName** | **string** | Customer&#39;s first name | 
**MiddleName** | Pointer to **string** | Customer&#39;s middle name | [optional] 
**LastName** | **string** | Customer&#39;s last name | 
**Type** | **string** | Predefined types of identification. | [default to "bank_account"]
**Value** | Pointer to **string** | Customer&#39;s identification number. | [optional] 
**Country** | **string** | Two-letter country code of identification issuer | 
**Bvn** | **string** | Customer&#39;s Bank Verification Number | 
**BankCode** | **string** | You can get the list of bank codes by calling the List Banks endpoint (https://api.paystack.co/bank). | 
**AccountNumber** | **string** | Customer&#39;s bank account number. | 

## Methods

### NewCustomerValidate

`func NewCustomerValidate(firstName string, lastName string, type_ string, country string, bvn string, bankCode string, accountNumber string, ) *CustomerValidate`

NewCustomerValidate instantiates a new CustomerValidate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomerValidateWithDefaults

`func NewCustomerValidateWithDefaults() *CustomerValidate`

NewCustomerValidateWithDefaults instantiates a new CustomerValidate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFirstName

`func (o *CustomerValidate) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *CustomerValidate) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *CustomerValidate) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.


### GetMiddleName

`func (o *CustomerValidate) GetMiddleName() string`

GetMiddleName returns the MiddleName field if non-nil, zero value otherwise.

### GetMiddleNameOk

`func (o *CustomerValidate) GetMiddleNameOk() (*string, bool)`

GetMiddleNameOk returns a tuple with the MiddleName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMiddleName

`func (o *CustomerValidate) SetMiddleName(v string)`

SetMiddleName sets MiddleName field to given value.

### HasMiddleName

`func (o *CustomerValidate) HasMiddleName() bool`

HasMiddleName returns a boolean if a field has been set.

### GetLastName

`func (o *CustomerValidate) GetLastName() string`

GetLastName returns the LastName field if non-nil, zero value otherwise.

### GetLastNameOk

`func (o *CustomerValidate) GetLastNameOk() (*string, bool)`

GetLastNameOk returns a tuple with the LastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName

`func (o *CustomerValidate) SetLastName(v string)`

SetLastName sets LastName field to given value.


### GetType

`func (o *CustomerValidate) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CustomerValidate) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CustomerValidate) SetType(v string)`

SetType sets Type field to given value.


### GetValue

`func (o *CustomerValidate) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *CustomerValidate) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *CustomerValidate) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *CustomerValidate) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetCountry

`func (o *CustomerValidate) GetCountry() string`

GetCountry returns the Country field if non-nil, zero value otherwise.

### GetCountryOk

`func (o *CustomerValidate) GetCountryOk() (*string, bool)`

GetCountryOk returns a tuple with the Country field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountry

`func (o *CustomerValidate) SetCountry(v string)`

SetCountry sets Country field to given value.


### GetBvn

`func (o *CustomerValidate) GetBvn() string`

GetBvn returns the Bvn field if non-nil, zero value otherwise.

### GetBvnOk

`func (o *CustomerValidate) GetBvnOk() (*string, bool)`

GetBvnOk returns a tuple with the Bvn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBvn

`func (o *CustomerValidate) SetBvn(v string)`

SetBvn sets Bvn field to given value.


### GetBankCode

`func (o *CustomerValidate) GetBankCode() string`

GetBankCode returns the BankCode field if non-nil, zero value otherwise.

### GetBankCodeOk

`func (o *CustomerValidate) GetBankCodeOk() (*string, bool)`

GetBankCodeOk returns a tuple with the BankCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBankCode

`func (o *CustomerValidate) SetBankCode(v string)`

SetBankCode sets BankCode field to given value.


### GetAccountNumber

`func (o *CustomerValidate) GetAccountNumber() string`

GetAccountNumber returns the AccountNumber field if non-nil, zero value otherwise.

### GetAccountNumberOk

`func (o *CustomerValidate) GetAccountNumberOk() (*string, bool)`

GetAccountNumberOk returns a tuple with the AccountNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountNumber

`func (o *CustomerValidate) SetAccountNumber(v string)`

SetAccountNumber sets AccountNumber field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


