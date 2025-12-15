# BankValidateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountName** | **string** | Customer&#39;s first and last name registered with their bank | 
**AccountNumber** | **string** | Customer&#39;s account number | 
**AccountType** | **string** | The type of the customer&#39;s account number | 
**BankCode** | **string** | The bank code of the customer’s bank. You can fetch the bank codes by using our List Banks endpoint | 
**CountryCode** | **string** | The two digit ISO code of the customer’s bank | 
**DocumentType** | **string** | Customer’s mode of identity | 
**DocumentNumber** | Pointer to **string** | Customer’s mode of identity number | [optional] 

## Methods

### NewBankValidateRequest

`func NewBankValidateRequest(accountName string, accountNumber string, accountType string, bankCode string, countryCode string, documentType string, ) *BankValidateRequest`

NewBankValidateRequest instantiates a new BankValidateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBankValidateRequestWithDefaults

`func NewBankValidateRequestWithDefaults() *BankValidateRequest`

NewBankValidateRequestWithDefaults instantiates a new BankValidateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountName

`func (o *BankValidateRequest) GetAccountName() string`

GetAccountName returns the AccountName field if non-nil, zero value otherwise.

### GetAccountNameOk

`func (o *BankValidateRequest) GetAccountNameOk() (*string, bool)`

GetAccountNameOk returns a tuple with the AccountName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountName

`func (o *BankValidateRequest) SetAccountName(v string)`

SetAccountName sets AccountName field to given value.


### GetAccountNumber

`func (o *BankValidateRequest) GetAccountNumber() string`

GetAccountNumber returns the AccountNumber field if non-nil, zero value otherwise.

### GetAccountNumberOk

`func (o *BankValidateRequest) GetAccountNumberOk() (*string, bool)`

GetAccountNumberOk returns a tuple with the AccountNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountNumber

`func (o *BankValidateRequest) SetAccountNumber(v string)`

SetAccountNumber sets AccountNumber field to given value.


### GetAccountType

`func (o *BankValidateRequest) GetAccountType() string`

GetAccountType returns the AccountType field if non-nil, zero value otherwise.

### GetAccountTypeOk

`func (o *BankValidateRequest) GetAccountTypeOk() (*string, bool)`

GetAccountTypeOk returns a tuple with the AccountType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountType

`func (o *BankValidateRequest) SetAccountType(v string)`

SetAccountType sets AccountType field to given value.


### GetBankCode

`func (o *BankValidateRequest) GetBankCode() string`

GetBankCode returns the BankCode field if non-nil, zero value otherwise.

### GetBankCodeOk

`func (o *BankValidateRequest) GetBankCodeOk() (*string, bool)`

GetBankCodeOk returns a tuple with the BankCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBankCode

`func (o *BankValidateRequest) SetBankCode(v string)`

SetBankCode sets BankCode field to given value.


### GetCountryCode

`func (o *BankValidateRequest) GetCountryCode() string`

GetCountryCode returns the CountryCode field if non-nil, zero value otherwise.

### GetCountryCodeOk

`func (o *BankValidateRequest) GetCountryCodeOk() (*string, bool)`

GetCountryCodeOk returns a tuple with the CountryCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountryCode

`func (o *BankValidateRequest) SetCountryCode(v string)`

SetCountryCode sets CountryCode field to given value.


### GetDocumentType

`func (o *BankValidateRequest) GetDocumentType() string`

GetDocumentType returns the DocumentType field if non-nil, zero value otherwise.

### GetDocumentTypeOk

`func (o *BankValidateRequest) GetDocumentTypeOk() (*string, bool)`

GetDocumentTypeOk returns a tuple with the DocumentType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDocumentType

`func (o *BankValidateRequest) SetDocumentType(v string)`

SetDocumentType sets DocumentType field to given value.


### GetDocumentNumber

`func (o *BankValidateRequest) GetDocumentNumber() string`

GetDocumentNumber returns the DocumentNumber field if non-nil, zero value otherwise.

### GetDocumentNumberOk

`func (o *BankValidateRequest) GetDocumentNumberOk() (*string, bool)`

GetDocumentNumberOk returns a tuple with the DocumentNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDocumentNumber

`func (o *BankValidateRequest) SetDocumentNumber(v string)`

SetDocumentNumber sets DocumentNumber field to given value.

### HasDocumentNumber

`func (o *BankValidateRequest) HasDocumentNumber() bool`

HasDocumentNumber returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


