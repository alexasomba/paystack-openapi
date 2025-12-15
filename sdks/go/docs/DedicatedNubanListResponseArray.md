# DedicatedNubanListResponseArray

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Customer** | [**DedicatedNubanListResponseArrayCustomer**](DedicatedNubanListResponseArrayCustomer.md) |  | 
**Bank** | [**DedicatedNubanCreateResponseDataBank**](DedicatedNubanCreateResponseDataBank.md) |  | 
**Id** | **int32** |  | 
**AccountName** | **string** |  | 
**AccountNumber** | **string** |  | 
**CreatedAt** | **string** |  | 
**UpdatedAt** | **string** |  | 
**Currency** | **string** |  | 
**SplitConfig** | [**NullableDedicatedNubanListResponseArraySplitConfig**](DedicatedNubanListResponseArraySplitConfig.md) |  | 
**Active** | **bool** |  | 
**Assigned** | **bool** |  | 

## Methods

### NewDedicatedNubanListResponseArray

`func NewDedicatedNubanListResponseArray(customer DedicatedNubanListResponseArrayCustomer, bank DedicatedNubanCreateResponseDataBank, id int32, accountName string, accountNumber string, createdAt string, updatedAt string, currency string, splitConfig NullableDedicatedNubanListResponseArraySplitConfig, active bool, assigned bool, ) *DedicatedNubanListResponseArray`

NewDedicatedNubanListResponseArray instantiates a new DedicatedNubanListResponseArray object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDedicatedNubanListResponseArrayWithDefaults

`func NewDedicatedNubanListResponseArrayWithDefaults() *DedicatedNubanListResponseArray`

NewDedicatedNubanListResponseArrayWithDefaults instantiates a new DedicatedNubanListResponseArray object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomer

`func (o *DedicatedNubanListResponseArray) GetCustomer() DedicatedNubanListResponseArrayCustomer`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *DedicatedNubanListResponseArray) GetCustomerOk() (*DedicatedNubanListResponseArrayCustomer, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *DedicatedNubanListResponseArray) SetCustomer(v DedicatedNubanListResponseArrayCustomer)`

SetCustomer sets Customer field to given value.


### GetBank

`func (o *DedicatedNubanListResponseArray) GetBank() DedicatedNubanCreateResponseDataBank`

GetBank returns the Bank field if non-nil, zero value otherwise.

### GetBankOk

`func (o *DedicatedNubanListResponseArray) GetBankOk() (*DedicatedNubanCreateResponseDataBank, bool)`

GetBankOk returns a tuple with the Bank field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBank

`func (o *DedicatedNubanListResponseArray) SetBank(v DedicatedNubanCreateResponseDataBank)`

SetBank sets Bank field to given value.


### GetId

`func (o *DedicatedNubanListResponseArray) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *DedicatedNubanListResponseArray) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *DedicatedNubanListResponseArray) SetId(v int32)`

SetId sets Id field to given value.


### GetAccountName

`func (o *DedicatedNubanListResponseArray) GetAccountName() string`

GetAccountName returns the AccountName field if non-nil, zero value otherwise.

### GetAccountNameOk

`func (o *DedicatedNubanListResponseArray) GetAccountNameOk() (*string, bool)`

GetAccountNameOk returns a tuple with the AccountName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountName

`func (o *DedicatedNubanListResponseArray) SetAccountName(v string)`

SetAccountName sets AccountName field to given value.


### GetAccountNumber

`func (o *DedicatedNubanListResponseArray) GetAccountNumber() string`

GetAccountNumber returns the AccountNumber field if non-nil, zero value otherwise.

### GetAccountNumberOk

`func (o *DedicatedNubanListResponseArray) GetAccountNumberOk() (*string, bool)`

GetAccountNumberOk returns a tuple with the AccountNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountNumber

`func (o *DedicatedNubanListResponseArray) SetAccountNumber(v string)`

SetAccountNumber sets AccountNumber field to given value.


### GetCreatedAt

`func (o *DedicatedNubanListResponseArray) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *DedicatedNubanListResponseArray) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *DedicatedNubanListResponseArray) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *DedicatedNubanListResponseArray) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *DedicatedNubanListResponseArray) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *DedicatedNubanListResponseArray) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.


### GetCurrency

`func (o *DedicatedNubanListResponseArray) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *DedicatedNubanListResponseArray) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *DedicatedNubanListResponseArray) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetSplitConfig

`func (o *DedicatedNubanListResponseArray) GetSplitConfig() DedicatedNubanListResponseArraySplitConfig`

GetSplitConfig returns the SplitConfig field if non-nil, zero value otherwise.

### GetSplitConfigOk

`func (o *DedicatedNubanListResponseArray) GetSplitConfigOk() (*DedicatedNubanListResponseArraySplitConfig, bool)`

GetSplitConfigOk returns a tuple with the SplitConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplitConfig

`func (o *DedicatedNubanListResponseArray) SetSplitConfig(v DedicatedNubanListResponseArraySplitConfig)`

SetSplitConfig sets SplitConfig field to given value.


### SetSplitConfigNil

`func (o *DedicatedNubanListResponseArray) SetSplitConfigNil(b bool)`

 SetSplitConfigNil sets the value for SplitConfig to be an explicit nil

### UnsetSplitConfig
`func (o *DedicatedNubanListResponseArray) UnsetSplitConfig()`

UnsetSplitConfig ensures that no value is present for SplitConfig, not even an explicit nil
### GetActive

`func (o *DedicatedNubanListResponseArray) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *DedicatedNubanListResponseArray) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *DedicatedNubanListResponseArray) SetActive(v bool)`

SetActive sets Active field to given value.


### GetAssigned

`func (o *DedicatedNubanListResponseArray) GetAssigned() bool`

GetAssigned returns the Assigned field if non-nil, zero value otherwise.

### GetAssignedOk

`func (o *DedicatedNubanListResponseArray) GetAssignedOk() (*bool, bool)`

GetAssignedOk returns a tuple with the Assigned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssigned

`func (o *DedicatedNubanListResponseArray) SetAssigned(v bool)`

SetAssigned sets Assigned field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


