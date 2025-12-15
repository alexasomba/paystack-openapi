# DedicatedNubanCreateResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Bank** | [**DedicatedNubanListResponseArrayBank**](DedicatedNubanListResponseArrayBank.md) |  | 
**AccountName** | **string** |  | 
**AccountNumber** | **string** |  | 
**Assigned** | **bool** |  | 
**Currency** | **string** |  | 
**Metadata** | **interface{}** |  | 
**Active** | **bool** |  | 
**Id** | **int32** |  | 
**CreatedAt** | **string** |  | 
**UpdatedAt** | **string** |  | 
**Assignment** | [**DedicatedNubanCreateResponseDataAssignment**](DedicatedNubanCreateResponseDataAssignment.md) |  | 
**Customer** | [**DedicatedNubanCreateResponseDataCustomer**](DedicatedNubanCreateResponseDataCustomer.md) |  | 

## Methods

### NewDedicatedNubanCreateResponseData

`func NewDedicatedNubanCreateResponseData(bank DedicatedNubanListResponseArrayBank, accountName string, accountNumber string, assigned bool, currency string, metadata interface{}, active bool, id int32, createdAt string, updatedAt string, assignment DedicatedNubanCreateResponseDataAssignment, customer DedicatedNubanCreateResponseDataCustomer, ) *DedicatedNubanCreateResponseData`

NewDedicatedNubanCreateResponseData instantiates a new DedicatedNubanCreateResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDedicatedNubanCreateResponseDataWithDefaults

`func NewDedicatedNubanCreateResponseDataWithDefaults() *DedicatedNubanCreateResponseData`

NewDedicatedNubanCreateResponseDataWithDefaults instantiates a new DedicatedNubanCreateResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBank

`func (o *DedicatedNubanCreateResponseData) GetBank() DedicatedNubanListResponseArrayBank`

GetBank returns the Bank field if non-nil, zero value otherwise.

### GetBankOk

`func (o *DedicatedNubanCreateResponseData) GetBankOk() (*DedicatedNubanListResponseArrayBank, bool)`

GetBankOk returns a tuple with the Bank field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBank

`func (o *DedicatedNubanCreateResponseData) SetBank(v DedicatedNubanListResponseArrayBank)`

SetBank sets Bank field to given value.


### GetAccountName

`func (o *DedicatedNubanCreateResponseData) GetAccountName() string`

GetAccountName returns the AccountName field if non-nil, zero value otherwise.

### GetAccountNameOk

`func (o *DedicatedNubanCreateResponseData) GetAccountNameOk() (*string, bool)`

GetAccountNameOk returns a tuple with the AccountName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountName

`func (o *DedicatedNubanCreateResponseData) SetAccountName(v string)`

SetAccountName sets AccountName field to given value.


### GetAccountNumber

`func (o *DedicatedNubanCreateResponseData) GetAccountNumber() string`

GetAccountNumber returns the AccountNumber field if non-nil, zero value otherwise.

### GetAccountNumberOk

`func (o *DedicatedNubanCreateResponseData) GetAccountNumberOk() (*string, bool)`

GetAccountNumberOk returns a tuple with the AccountNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountNumber

`func (o *DedicatedNubanCreateResponseData) SetAccountNumber(v string)`

SetAccountNumber sets AccountNumber field to given value.


### GetAssigned

`func (o *DedicatedNubanCreateResponseData) GetAssigned() bool`

GetAssigned returns the Assigned field if non-nil, zero value otherwise.

### GetAssignedOk

`func (o *DedicatedNubanCreateResponseData) GetAssignedOk() (*bool, bool)`

GetAssignedOk returns a tuple with the Assigned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssigned

`func (o *DedicatedNubanCreateResponseData) SetAssigned(v bool)`

SetAssigned sets Assigned field to given value.


### GetCurrency

`func (o *DedicatedNubanCreateResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *DedicatedNubanCreateResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *DedicatedNubanCreateResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetMetadata

`func (o *DedicatedNubanCreateResponseData) GetMetadata() interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *DedicatedNubanCreateResponseData) GetMetadataOk() (*interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *DedicatedNubanCreateResponseData) SetMetadata(v interface{})`

SetMetadata sets Metadata field to given value.


### SetMetadataNil

`func (o *DedicatedNubanCreateResponseData) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *DedicatedNubanCreateResponseData) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil
### GetActive

`func (o *DedicatedNubanCreateResponseData) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *DedicatedNubanCreateResponseData) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *DedicatedNubanCreateResponseData) SetActive(v bool)`

SetActive sets Active field to given value.


### GetId

`func (o *DedicatedNubanCreateResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *DedicatedNubanCreateResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *DedicatedNubanCreateResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetCreatedAt

`func (o *DedicatedNubanCreateResponseData) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *DedicatedNubanCreateResponseData) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *DedicatedNubanCreateResponseData) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *DedicatedNubanCreateResponseData) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *DedicatedNubanCreateResponseData) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *DedicatedNubanCreateResponseData) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.


### GetAssignment

`func (o *DedicatedNubanCreateResponseData) GetAssignment() DedicatedNubanCreateResponseDataAssignment`

GetAssignment returns the Assignment field if non-nil, zero value otherwise.

### GetAssignmentOk

`func (o *DedicatedNubanCreateResponseData) GetAssignmentOk() (*DedicatedNubanCreateResponseDataAssignment, bool)`

GetAssignmentOk returns a tuple with the Assignment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssignment

`func (o *DedicatedNubanCreateResponseData) SetAssignment(v DedicatedNubanCreateResponseDataAssignment)`

SetAssignment sets Assignment field to given value.


### GetCustomer

`func (o *DedicatedNubanCreateResponseData) GetCustomer() DedicatedNubanCreateResponseDataCustomer`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *DedicatedNubanCreateResponseData) GetCustomerOk() (*DedicatedNubanCreateResponseDataCustomer, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *DedicatedNubanCreateResponseData) SetCustomer(v DedicatedNubanCreateResponseDataCustomer)`

SetCustomer sets Customer field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


