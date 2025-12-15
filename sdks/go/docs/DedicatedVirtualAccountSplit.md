# DedicatedVirtualAccountSplit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountNumber** | **string** | Valid Dedicated virtual account | 
**Subaccount** | Pointer to **string** | Subaccount code of the account you want to split the transaction with | [optional] 
**SplitCode** | Pointer to **string** | Split code consisting of the lists of accounts you want to split the transaction with | [optional] 

## Methods

### NewDedicatedVirtualAccountSplit

`func NewDedicatedVirtualAccountSplit(accountNumber string, ) *DedicatedVirtualAccountSplit`

NewDedicatedVirtualAccountSplit instantiates a new DedicatedVirtualAccountSplit object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDedicatedVirtualAccountSplitWithDefaults

`func NewDedicatedVirtualAccountSplitWithDefaults() *DedicatedVirtualAccountSplit`

NewDedicatedVirtualAccountSplitWithDefaults instantiates a new DedicatedVirtualAccountSplit object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountNumber

`func (o *DedicatedVirtualAccountSplit) GetAccountNumber() string`

GetAccountNumber returns the AccountNumber field if non-nil, zero value otherwise.

### GetAccountNumberOk

`func (o *DedicatedVirtualAccountSplit) GetAccountNumberOk() (*string, bool)`

GetAccountNumberOk returns a tuple with the AccountNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountNumber

`func (o *DedicatedVirtualAccountSplit) SetAccountNumber(v string)`

SetAccountNumber sets AccountNumber field to given value.


### GetSubaccount

`func (o *DedicatedVirtualAccountSplit) GetSubaccount() string`

GetSubaccount returns the Subaccount field if non-nil, zero value otherwise.

### GetSubaccountOk

`func (o *DedicatedVirtualAccountSplit) GetSubaccountOk() (*string, bool)`

GetSubaccountOk returns a tuple with the Subaccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubaccount

`func (o *DedicatedVirtualAccountSplit) SetSubaccount(v string)`

SetSubaccount sets Subaccount field to given value.

### HasSubaccount

`func (o *DedicatedVirtualAccountSplit) HasSubaccount() bool`

HasSubaccount returns a boolean if a field has been set.

### GetSplitCode

`func (o *DedicatedVirtualAccountSplit) GetSplitCode() string`

GetSplitCode returns the SplitCode field if non-nil, zero value otherwise.

### GetSplitCodeOk

`func (o *DedicatedVirtualAccountSplit) GetSplitCodeOk() (*string, bool)`

GetSplitCodeOk returns a tuple with the SplitCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplitCode

`func (o *DedicatedVirtualAccountSplit) SetSplitCode(v string)`

SetSplitCode sets SplitCode field to given value.

### HasSplitCode

`func (o *DedicatedVirtualAccountSplit) HasSplitCode() bool`

HasSplitCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


