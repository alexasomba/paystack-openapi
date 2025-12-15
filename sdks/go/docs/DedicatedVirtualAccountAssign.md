# DedicatedVirtualAccountAssign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Email** | **string** | Customer&#39;s email address | 
**FirstName** | **string** | Customer&#39;s first name | 
**LastName** | **string** | Customer&#39;s last name | 
**Phone** | **string** | Customer&#39;s phone name | 
**PreferredBank** | **string** | The bank slug for preferred bank. To get a list of available banks,  use the List Banks endpoint, passing &#x60;pay_with_bank_transfer&#x3D;true&#x60; query parameter  | 
**Country** | **string** | The two letter code country | 
**AccountNumber** | Pointer to **string** | Customer&#39;s account number | [optional] 
**Bvn** | Pointer to **string** | Customer&#39;s Bank Verification Number | [optional] 
**BankCode** | Pointer to **string** | Customer&#39;s bank code | [optional] 
**Subaccount** | Pointer to **string** | Subaccount code of the account you want to split the transaction with | [optional] 
**SplitCode** | Pointer to **string** | Split code consisting of the lists of accounts you want to split the transaction with | [optional] 

## Methods

### NewDedicatedVirtualAccountAssign

`func NewDedicatedVirtualAccountAssign(email string, firstName string, lastName string, phone string, preferredBank string, country string, ) *DedicatedVirtualAccountAssign`

NewDedicatedVirtualAccountAssign instantiates a new DedicatedVirtualAccountAssign object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDedicatedVirtualAccountAssignWithDefaults

`func NewDedicatedVirtualAccountAssignWithDefaults() *DedicatedVirtualAccountAssign`

NewDedicatedVirtualAccountAssignWithDefaults instantiates a new DedicatedVirtualAccountAssign object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmail

`func (o *DedicatedVirtualAccountAssign) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *DedicatedVirtualAccountAssign) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *DedicatedVirtualAccountAssign) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetFirstName

`func (o *DedicatedVirtualAccountAssign) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *DedicatedVirtualAccountAssign) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *DedicatedVirtualAccountAssign) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.


### GetLastName

`func (o *DedicatedVirtualAccountAssign) GetLastName() string`

GetLastName returns the LastName field if non-nil, zero value otherwise.

### GetLastNameOk

`func (o *DedicatedVirtualAccountAssign) GetLastNameOk() (*string, bool)`

GetLastNameOk returns a tuple with the LastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName

`func (o *DedicatedVirtualAccountAssign) SetLastName(v string)`

SetLastName sets LastName field to given value.


### GetPhone

`func (o *DedicatedVirtualAccountAssign) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *DedicatedVirtualAccountAssign) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *DedicatedVirtualAccountAssign) SetPhone(v string)`

SetPhone sets Phone field to given value.


### GetPreferredBank

`func (o *DedicatedVirtualAccountAssign) GetPreferredBank() string`

GetPreferredBank returns the PreferredBank field if non-nil, zero value otherwise.

### GetPreferredBankOk

`func (o *DedicatedVirtualAccountAssign) GetPreferredBankOk() (*string, bool)`

GetPreferredBankOk returns a tuple with the PreferredBank field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferredBank

`func (o *DedicatedVirtualAccountAssign) SetPreferredBank(v string)`

SetPreferredBank sets PreferredBank field to given value.


### GetCountry

`func (o *DedicatedVirtualAccountAssign) GetCountry() string`

GetCountry returns the Country field if non-nil, zero value otherwise.

### GetCountryOk

`func (o *DedicatedVirtualAccountAssign) GetCountryOk() (*string, bool)`

GetCountryOk returns a tuple with the Country field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountry

`func (o *DedicatedVirtualAccountAssign) SetCountry(v string)`

SetCountry sets Country field to given value.


### GetAccountNumber

`func (o *DedicatedVirtualAccountAssign) GetAccountNumber() string`

GetAccountNumber returns the AccountNumber field if non-nil, zero value otherwise.

### GetAccountNumberOk

`func (o *DedicatedVirtualAccountAssign) GetAccountNumberOk() (*string, bool)`

GetAccountNumberOk returns a tuple with the AccountNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountNumber

`func (o *DedicatedVirtualAccountAssign) SetAccountNumber(v string)`

SetAccountNumber sets AccountNumber field to given value.

### HasAccountNumber

`func (o *DedicatedVirtualAccountAssign) HasAccountNumber() bool`

HasAccountNumber returns a boolean if a field has been set.

### GetBvn

`func (o *DedicatedVirtualAccountAssign) GetBvn() string`

GetBvn returns the Bvn field if non-nil, zero value otherwise.

### GetBvnOk

`func (o *DedicatedVirtualAccountAssign) GetBvnOk() (*string, bool)`

GetBvnOk returns a tuple with the Bvn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBvn

`func (o *DedicatedVirtualAccountAssign) SetBvn(v string)`

SetBvn sets Bvn field to given value.

### HasBvn

`func (o *DedicatedVirtualAccountAssign) HasBvn() bool`

HasBvn returns a boolean if a field has been set.

### GetBankCode

`func (o *DedicatedVirtualAccountAssign) GetBankCode() string`

GetBankCode returns the BankCode field if non-nil, zero value otherwise.

### GetBankCodeOk

`func (o *DedicatedVirtualAccountAssign) GetBankCodeOk() (*string, bool)`

GetBankCodeOk returns a tuple with the BankCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBankCode

`func (o *DedicatedVirtualAccountAssign) SetBankCode(v string)`

SetBankCode sets BankCode field to given value.

### HasBankCode

`func (o *DedicatedVirtualAccountAssign) HasBankCode() bool`

HasBankCode returns a boolean if a field has been set.

### GetSubaccount

`func (o *DedicatedVirtualAccountAssign) GetSubaccount() string`

GetSubaccount returns the Subaccount field if non-nil, zero value otherwise.

### GetSubaccountOk

`func (o *DedicatedVirtualAccountAssign) GetSubaccountOk() (*string, bool)`

GetSubaccountOk returns a tuple with the Subaccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubaccount

`func (o *DedicatedVirtualAccountAssign) SetSubaccount(v string)`

SetSubaccount sets Subaccount field to given value.

### HasSubaccount

`func (o *DedicatedVirtualAccountAssign) HasSubaccount() bool`

HasSubaccount returns a boolean if a field has been set.

### GetSplitCode

`func (o *DedicatedVirtualAccountAssign) GetSplitCode() string`

GetSplitCode returns the SplitCode field if non-nil, zero value otherwise.

### GetSplitCodeOk

`func (o *DedicatedVirtualAccountAssign) GetSplitCodeOk() (*string, bool)`

GetSplitCodeOk returns a tuple with the SplitCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplitCode

`func (o *DedicatedVirtualAccountAssign) SetSplitCode(v string)`

SetSplitCode sets SplitCode field to given value.

### HasSplitCode

`func (o *DedicatedVirtualAccountAssign) HasSplitCode() bool`

HasSplitCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


