# DedicatedVirtualAccountCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Customer** | **string** | The code for the previously created customer | 
**PreferredBank** | Pointer to **string** | The bank slug for preferred bank. To get a list of available banks, use the List Providers endpoint | [optional] 
**Subaccount** | Pointer to **string** | Subaccount code of the account you want to split the transaction with | [optional] 
**SplitCode** | Pointer to **string** | Split code consisting of the lists of accounts you want to split the transaction with | [optional] 

## Methods

### NewDedicatedVirtualAccountCreate

`func NewDedicatedVirtualAccountCreate(customer string, ) *DedicatedVirtualAccountCreate`

NewDedicatedVirtualAccountCreate instantiates a new DedicatedVirtualAccountCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDedicatedVirtualAccountCreateWithDefaults

`func NewDedicatedVirtualAccountCreateWithDefaults() *DedicatedVirtualAccountCreate`

NewDedicatedVirtualAccountCreateWithDefaults instantiates a new DedicatedVirtualAccountCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomer

`func (o *DedicatedVirtualAccountCreate) GetCustomer() string`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *DedicatedVirtualAccountCreate) GetCustomerOk() (*string, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *DedicatedVirtualAccountCreate) SetCustomer(v string)`

SetCustomer sets Customer field to given value.


### GetPreferredBank

`func (o *DedicatedVirtualAccountCreate) GetPreferredBank() string`

GetPreferredBank returns the PreferredBank field if non-nil, zero value otherwise.

### GetPreferredBankOk

`func (o *DedicatedVirtualAccountCreate) GetPreferredBankOk() (*string, bool)`

GetPreferredBankOk returns a tuple with the PreferredBank field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferredBank

`func (o *DedicatedVirtualAccountCreate) SetPreferredBank(v string)`

SetPreferredBank sets PreferredBank field to given value.

### HasPreferredBank

`func (o *DedicatedVirtualAccountCreate) HasPreferredBank() bool`

HasPreferredBank returns a boolean if a field has been set.

### GetSubaccount

`func (o *DedicatedVirtualAccountCreate) GetSubaccount() string`

GetSubaccount returns the Subaccount field if non-nil, zero value otherwise.

### GetSubaccountOk

`func (o *DedicatedVirtualAccountCreate) GetSubaccountOk() (*string, bool)`

GetSubaccountOk returns a tuple with the Subaccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubaccount

`func (o *DedicatedVirtualAccountCreate) SetSubaccount(v string)`

SetSubaccount sets Subaccount field to given value.

### HasSubaccount

`func (o *DedicatedVirtualAccountCreate) HasSubaccount() bool`

HasSubaccount returns a boolean if a field has been set.

### GetSplitCode

`func (o *DedicatedVirtualAccountCreate) GetSplitCode() string`

GetSplitCode returns the SplitCode field if non-nil, zero value otherwise.

### GetSplitCodeOk

`func (o *DedicatedVirtualAccountCreate) GetSplitCodeOk() (*string, bool)`

GetSplitCodeOk returns a tuple with the SplitCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplitCode

`func (o *DedicatedVirtualAccountCreate) SetSplitCode(v string)`

SetSplitCode sets SplitCode field to given value.

### HasSplitCode

`func (o *DedicatedVirtualAccountCreate) HasSplitCode() bool`

HasSplitCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


