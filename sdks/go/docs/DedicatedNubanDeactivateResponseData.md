# DedicatedNubanDeactivateResponseData

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
**Assignment** | [**DedicatedNubanDeactivateResponseDataAssignment**](DedicatedNubanDeactivateResponseDataAssignment.md) |  | 

## Methods

### NewDedicatedNubanDeactivateResponseData

`func NewDedicatedNubanDeactivateResponseData(bank DedicatedNubanListResponseArrayBank, accountName string, accountNumber string, assigned bool, currency string, metadata interface{}, active bool, id int32, createdAt string, updatedAt string, assignment DedicatedNubanDeactivateResponseDataAssignment, ) *DedicatedNubanDeactivateResponseData`

NewDedicatedNubanDeactivateResponseData instantiates a new DedicatedNubanDeactivateResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDedicatedNubanDeactivateResponseDataWithDefaults

`func NewDedicatedNubanDeactivateResponseDataWithDefaults() *DedicatedNubanDeactivateResponseData`

NewDedicatedNubanDeactivateResponseDataWithDefaults instantiates a new DedicatedNubanDeactivateResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBank

`func (o *DedicatedNubanDeactivateResponseData) GetBank() DedicatedNubanListResponseArrayBank`

GetBank returns the Bank field if non-nil, zero value otherwise.

### GetBankOk

`func (o *DedicatedNubanDeactivateResponseData) GetBankOk() (*DedicatedNubanListResponseArrayBank, bool)`

GetBankOk returns a tuple with the Bank field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBank

`func (o *DedicatedNubanDeactivateResponseData) SetBank(v DedicatedNubanListResponseArrayBank)`

SetBank sets Bank field to given value.


### GetAccountName

`func (o *DedicatedNubanDeactivateResponseData) GetAccountName() string`

GetAccountName returns the AccountName field if non-nil, zero value otherwise.

### GetAccountNameOk

`func (o *DedicatedNubanDeactivateResponseData) GetAccountNameOk() (*string, bool)`

GetAccountNameOk returns a tuple with the AccountName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountName

`func (o *DedicatedNubanDeactivateResponseData) SetAccountName(v string)`

SetAccountName sets AccountName field to given value.


### GetAccountNumber

`func (o *DedicatedNubanDeactivateResponseData) GetAccountNumber() string`

GetAccountNumber returns the AccountNumber field if non-nil, zero value otherwise.

### GetAccountNumberOk

`func (o *DedicatedNubanDeactivateResponseData) GetAccountNumberOk() (*string, bool)`

GetAccountNumberOk returns a tuple with the AccountNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountNumber

`func (o *DedicatedNubanDeactivateResponseData) SetAccountNumber(v string)`

SetAccountNumber sets AccountNumber field to given value.


### GetAssigned

`func (o *DedicatedNubanDeactivateResponseData) GetAssigned() bool`

GetAssigned returns the Assigned field if non-nil, zero value otherwise.

### GetAssignedOk

`func (o *DedicatedNubanDeactivateResponseData) GetAssignedOk() (*bool, bool)`

GetAssignedOk returns a tuple with the Assigned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssigned

`func (o *DedicatedNubanDeactivateResponseData) SetAssigned(v bool)`

SetAssigned sets Assigned field to given value.


### GetCurrency

`func (o *DedicatedNubanDeactivateResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *DedicatedNubanDeactivateResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *DedicatedNubanDeactivateResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetMetadata

`func (o *DedicatedNubanDeactivateResponseData) GetMetadata() interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *DedicatedNubanDeactivateResponseData) GetMetadataOk() (*interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *DedicatedNubanDeactivateResponseData) SetMetadata(v interface{})`

SetMetadata sets Metadata field to given value.


### SetMetadataNil

`func (o *DedicatedNubanDeactivateResponseData) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *DedicatedNubanDeactivateResponseData) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil
### GetActive

`func (o *DedicatedNubanDeactivateResponseData) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *DedicatedNubanDeactivateResponseData) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *DedicatedNubanDeactivateResponseData) SetActive(v bool)`

SetActive sets Active field to given value.


### GetId

`func (o *DedicatedNubanDeactivateResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *DedicatedNubanDeactivateResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *DedicatedNubanDeactivateResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetCreatedAt

`func (o *DedicatedNubanDeactivateResponseData) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *DedicatedNubanDeactivateResponseData) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *DedicatedNubanDeactivateResponseData) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *DedicatedNubanDeactivateResponseData) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *DedicatedNubanDeactivateResponseData) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *DedicatedNubanDeactivateResponseData) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.


### GetAssignment

`func (o *DedicatedNubanDeactivateResponseData) GetAssignment() DedicatedNubanDeactivateResponseDataAssignment`

GetAssignment returns the Assignment field if non-nil, zero value otherwise.

### GetAssignmentOk

`func (o *DedicatedNubanDeactivateResponseData) GetAssignmentOk() (*DedicatedNubanDeactivateResponseDataAssignment, bool)`

GetAssignmentOk returns a tuple with the Assignment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssignment

`func (o *DedicatedNubanDeactivateResponseData) SetAssignment(v DedicatedNubanDeactivateResponseDataAssignment)`

SetAssignment sets Assignment field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


