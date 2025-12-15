# TransferRecipientCreateResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Active** | **bool** |  | 
**CreatedAt** | **string** |  | 
**Currency** | **string** |  | 
**Description** | **string** |  | 
**Domain** | **string** |  | 
**Email** | **string** |  | 
**Id** | **int32** |  | 
**Integration** | **int32** |  | 
**Metadata** | Pointer to **map[string]interface{}** |  | [optional] 
**Name** | **string** |  | 
**RecipientCode** | **string** |  | 
**Type** | **string** |  | 
**UpdatedAt** | **string** |  | 
**IsDeleted** | **bool** |  | 
**Details** | [**TransferRecipientListResponseArrayDetails**](TransferRecipientListResponseArrayDetails.md) |  | 

## Methods

### NewTransferRecipientCreateResponseData

`func NewTransferRecipientCreateResponseData(active bool, createdAt string, currency string, description string, domain string, email string, id int32, integration int32, name string, recipientCode string, type_ string, updatedAt string, isDeleted bool, details TransferRecipientListResponseArrayDetails, ) *TransferRecipientCreateResponseData`

NewTransferRecipientCreateResponseData instantiates a new TransferRecipientCreateResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransferRecipientCreateResponseDataWithDefaults

`func NewTransferRecipientCreateResponseDataWithDefaults() *TransferRecipientCreateResponseData`

NewTransferRecipientCreateResponseDataWithDefaults instantiates a new TransferRecipientCreateResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActive

`func (o *TransferRecipientCreateResponseData) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *TransferRecipientCreateResponseData) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *TransferRecipientCreateResponseData) SetActive(v bool)`

SetActive sets Active field to given value.


### GetCreatedAt

`func (o *TransferRecipientCreateResponseData) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *TransferRecipientCreateResponseData) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *TransferRecipientCreateResponseData) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetCurrency

`func (o *TransferRecipientCreateResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *TransferRecipientCreateResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *TransferRecipientCreateResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetDescription

`func (o *TransferRecipientCreateResponseData) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TransferRecipientCreateResponseData) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TransferRecipientCreateResponseData) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetDomain

`func (o *TransferRecipientCreateResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *TransferRecipientCreateResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *TransferRecipientCreateResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetEmail

`func (o *TransferRecipientCreateResponseData) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *TransferRecipientCreateResponseData) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *TransferRecipientCreateResponseData) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetId

`func (o *TransferRecipientCreateResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *TransferRecipientCreateResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *TransferRecipientCreateResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetIntegration

`func (o *TransferRecipientCreateResponseData) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *TransferRecipientCreateResponseData) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *TransferRecipientCreateResponseData) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetMetadata

`func (o *TransferRecipientCreateResponseData) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *TransferRecipientCreateResponseData) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *TransferRecipientCreateResponseData) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *TransferRecipientCreateResponseData) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### SetMetadataNil

`func (o *TransferRecipientCreateResponseData) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *TransferRecipientCreateResponseData) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil
### GetName

`func (o *TransferRecipientCreateResponseData) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *TransferRecipientCreateResponseData) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *TransferRecipientCreateResponseData) SetName(v string)`

SetName sets Name field to given value.


### GetRecipientCode

`func (o *TransferRecipientCreateResponseData) GetRecipientCode() string`

GetRecipientCode returns the RecipientCode field if non-nil, zero value otherwise.

### GetRecipientCodeOk

`func (o *TransferRecipientCreateResponseData) GetRecipientCodeOk() (*string, bool)`

GetRecipientCodeOk returns a tuple with the RecipientCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipientCode

`func (o *TransferRecipientCreateResponseData) SetRecipientCode(v string)`

SetRecipientCode sets RecipientCode field to given value.


### GetType

`func (o *TransferRecipientCreateResponseData) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TransferRecipientCreateResponseData) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TransferRecipientCreateResponseData) SetType(v string)`

SetType sets Type field to given value.


### GetUpdatedAt

`func (o *TransferRecipientCreateResponseData) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *TransferRecipientCreateResponseData) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *TransferRecipientCreateResponseData) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.


### GetIsDeleted

`func (o *TransferRecipientCreateResponseData) GetIsDeleted() bool`

GetIsDeleted returns the IsDeleted field if non-nil, zero value otherwise.

### GetIsDeletedOk

`func (o *TransferRecipientCreateResponseData) GetIsDeletedOk() (*bool, bool)`

GetIsDeletedOk returns a tuple with the IsDeleted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsDeleted

`func (o *TransferRecipientCreateResponseData) SetIsDeleted(v bool)`

SetIsDeleted sets IsDeleted field to given value.


### GetDetails

`func (o *TransferRecipientCreateResponseData) GetDetails() TransferRecipientListResponseArrayDetails`

GetDetails returns the Details field if non-nil, zero value otherwise.

### GetDetailsOk

`func (o *TransferRecipientCreateResponseData) GetDetailsOk() (*TransferRecipientListResponseArrayDetails, bool)`

GetDetailsOk returns a tuple with the Details field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetails

`func (o *TransferRecipientCreateResponseData) SetDetails(v TransferRecipientListResponseArrayDetails)`

SetDetails sets Details field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


