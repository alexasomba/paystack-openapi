# DedicatedNubanFetchResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Customer** | [**DedicatedNubanCreateResponseDataCustomer**](DedicatedNubanCreateResponseDataCustomer.md) |  | 
**Bank** | [**DedicatedNubanListResponseArrayBank**](DedicatedNubanListResponseArrayBank.md) |  | 
**Id** | **int32** |  | 
**AccountName** | **string** |  | 
**AccountNumber** | **string** |  | 
**CreatedAt** | **string** |  | 
**UpdatedAt** | **string** |  | 
**Currency** | **string** |  | 
**SplitConfig** | **interface{}** |  | 
**Active** | **bool** |  | 
**Assigned** | **bool** |  | 

## Methods

### NewDedicatedNubanFetchResponseData

`func NewDedicatedNubanFetchResponseData(customer DedicatedNubanCreateResponseDataCustomer, bank DedicatedNubanListResponseArrayBank, id int32, accountName string, accountNumber string, createdAt string, updatedAt string, currency string, splitConfig interface{}, active bool, assigned bool, ) *DedicatedNubanFetchResponseData`

NewDedicatedNubanFetchResponseData instantiates a new DedicatedNubanFetchResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDedicatedNubanFetchResponseDataWithDefaults

`func NewDedicatedNubanFetchResponseDataWithDefaults() *DedicatedNubanFetchResponseData`

NewDedicatedNubanFetchResponseDataWithDefaults instantiates a new DedicatedNubanFetchResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomer

`func (o *DedicatedNubanFetchResponseData) GetCustomer() DedicatedNubanCreateResponseDataCustomer`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *DedicatedNubanFetchResponseData) GetCustomerOk() (*DedicatedNubanCreateResponseDataCustomer, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *DedicatedNubanFetchResponseData) SetCustomer(v DedicatedNubanCreateResponseDataCustomer)`

SetCustomer sets Customer field to given value.


### GetBank

`func (o *DedicatedNubanFetchResponseData) GetBank() DedicatedNubanListResponseArrayBank`

GetBank returns the Bank field if non-nil, zero value otherwise.

### GetBankOk

`func (o *DedicatedNubanFetchResponseData) GetBankOk() (*DedicatedNubanListResponseArrayBank, bool)`

GetBankOk returns a tuple with the Bank field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBank

`func (o *DedicatedNubanFetchResponseData) SetBank(v DedicatedNubanListResponseArrayBank)`

SetBank sets Bank field to given value.


### GetId

`func (o *DedicatedNubanFetchResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *DedicatedNubanFetchResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *DedicatedNubanFetchResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetAccountName

`func (o *DedicatedNubanFetchResponseData) GetAccountName() string`

GetAccountName returns the AccountName field if non-nil, zero value otherwise.

### GetAccountNameOk

`func (o *DedicatedNubanFetchResponseData) GetAccountNameOk() (*string, bool)`

GetAccountNameOk returns a tuple with the AccountName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountName

`func (o *DedicatedNubanFetchResponseData) SetAccountName(v string)`

SetAccountName sets AccountName field to given value.


### GetAccountNumber

`func (o *DedicatedNubanFetchResponseData) GetAccountNumber() string`

GetAccountNumber returns the AccountNumber field if non-nil, zero value otherwise.

### GetAccountNumberOk

`func (o *DedicatedNubanFetchResponseData) GetAccountNumberOk() (*string, bool)`

GetAccountNumberOk returns a tuple with the AccountNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountNumber

`func (o *DedicatedNubanFetchResponseData) SetAccountNumber(v string)`

SetAccountNumber sets AccountNumber field to given value.


### GetCreatedAt

`func (o *DedicatedNubanFetchResponseData) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *DedicatedNubanFetchResponseData) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *DedicatedNubanFetchResponseData) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *DedicatedNubanFetchResponseData) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *DedicatedNubanFetchResponseData) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *DedicatedNubanFetchResponseData) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.


### GetCurrency

`func (o *DedicatedNubanFetchResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *DedicatedNubanFetchResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *DedicatedNubanFetchResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetSplitConfig

`func (o *DedicatedNubanFetchResponseData) GetSplitConfig() interface{}`

GetSplitConfig returns the SplitConfig field if non-nil, zero value otherwise.

### GetSplitConfigOk

`func (o *DedicatedNubanFetchResponseData) GetSplitConfigOk() (*interface{}, bool)`

GetSplitConfigOk returns a tuple with the SplitConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplitConfig

`func (o *DedicatedNubanFetchResponseData) SetSplitConfig(v interface{})`

SetSplitConfig sets SplitConfig field to given value.


### SetSplitConfigNil

`func (o *DedicatedNubanFetchResponseData) SetSplitConfigNil(b bool)`

 SetSplitConfigNil sets the value for SplitConfig to be an explicit nil

### UnsetSplitConfig
`func (o *DedicatedNubanFetchResponseData) UnsetSplitConfig()`

UnsetSplitConfig ensures that no value is present for SplitConfig, not even an explicit nil
### GetActive

`func (o *DedicatedNubanFetchResponseData) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *DedicatedNubanFetchResponseData) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *DedicatedNubanFetchResponseData) SetActive(v bool)`

SetActive sets Active field to given value.


### GetAssigned

`func (o *DedicatedNubanFetchResponseData) GetAssigned() bool`

GetAssigned returns the Assigned field if non-nil, zero value otherwise.

### GetAssignedOk

`func (o *DedicatedNubanFetchResponseData) GetAssignedOk() (*bool, bool)`

GetAssignedOk returns a tuple with the Assigned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssigned

`func (o *DedicatedNubanFetchResponseData) SetAssigned(v bool)`

SetAssigned sets Assigned field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


