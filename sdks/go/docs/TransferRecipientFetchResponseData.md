# TransferRecipientFetchResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Integration** | **int32** |  | 
**Domain** | **string** |  | 
**Type** | **string** |  | 
**Currency** | **string** |  | 
**Name** | **string** |  | 
**Details** | [**TransferRecipientFetchResponseDataDetails**](TransferRecipientFetchResponseDataDetails.md) |  | 
**Description** | **string** |  | 
**Metadata** | Pointer to **map[string]interface{}** |  | [optional] 
**RecipientCode** | **string** |  | 
**Active** | **bool** |  | 
**RecipientAccount** | **string** |  | 
**InstitutionCode** | **string** |  | 
**Email** | **string** |  | 
**Id** | **int32** |  | 
**IsDeleted** | **bool** |  | 
**CreatedAt** | **string** |  | 
**UpdatedAt** | **string** |  | 

## Methods

### NewTransferRecipientFetchResponseData

`func NewTransferRecipientFetchResponseData(integration int32, domain string, type_ string, currency string, name string, details TransferRecipientFetchResponseDataDetails, description string, recipientCode string, active bool, recipientAccount string, institutionCode string, email string, id int32, isDeleted bool, createdAt string, updatedAt string, ) *TransferRecipientFetchResponseData`

NewTransferRecipientFetchResponseData instantiates a new TransferRecipientFetchResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransferRecipientFetchResponseDataWithDefaults

`func NewTransferRecipientFetchResponseDataWithDefaults() *TransferRecipientFetchResponseData`

NewTransferRecipientFetchResponseDataWithDefaults instantiates a new TransferRecipientFetchResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIntegration

`func (o *TransferRecipientFetchResponseData) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *TransferRecipientFetchResponseData) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *TransferRecipientFetchResponseData) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetDomain

`func (o *TransferRecipientFetchResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *TransferRecipientFetchResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *TransferRecipientFetchResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetType

`func (o *TransferRecipientFetchResponseData) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TransferRecipientFetchResponseData) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TransferRecipientFetchResponseData) SetType(v string)`

SetType sets Type field to given value.


### GetCurrency

`func (o *TransferRecipientFetchResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *TransferRecipientFetchResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *TransferRecipientFetchResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetName

`func (o *TransferRecipientFetchResponseData) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *TransferRecipientFetchResponseData) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *TransferRecipientFetchResponseData) SetName(v string)`

SetName sets Name field to given value.


### GetDetails

`func (o *TransferRecipientFetchResponseData) GetDetails() TransferRecipientFetchResponseDataDetails`

GetDetails returns the Details field if non-nil, zero value otherwise.

### GetDetailsOk

`func (o *TransferRecipientFetchResponseData) GetDetailsOk() (*TransferRecipientFetchResponseDataDetails, bool)`

GetDetailsOk returns a tuple with the Details field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetails

`func (o *TransferRecipientFetchResponseData) SetDetails(v TransferRecipientFetchResponseDataDetails)`

SetDetails sets Details field to given value.


### GetDescription

`func (o *TransferRecipientFetchResponseData) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TransferRecipientFetchResponseData) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TransferRecipientFetchResponseData) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetMetadata

`func (o *TransferRecipientFetchResponseData) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *TransferRecipientFetchResponseData) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *TransferRecipientFetchResponseData) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *TransferRecipientFetchResponseData) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### SetMetadataNil

`func (o *TransferRecipientFetchResponseData) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *TransferRecipientFetchResponseData) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil
### GetRecipientCode

`func (o *TransferRecipientFetchResponseData) GetRecipientCode() string`

GetRecipientCode returns the RecipientCode field if non-nil, zero value otherwise.

### GetRecipientCodeOk

`func (o *TransferRecipientFetchResponseData) GetRecipientCodeOk() (*string, bool)`

GetRecipientCodeOk returns a tuple with the RecipientCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipientCode

`func (o *TransferRecipientFetchResponseData) SetRecipientCode(v string)`

SetRecipientCode sets RecipientCode field to given value.


### GetActive

`func (o *TransferRecipientFetchResponseData) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *TransferRecipientFetchResponseData) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *TransferRecipientFetchResponseData) SetActive(v bool)`

SetActive sets Active field to given value.


### GetRecipientAccount

`func (o *TransferRecipientFetchResponseData) GetRecipientAccount() string`

GetRecipientAccount returns the RecipientAccount field if non-nil, zero value otherwise.

### GetRecipientAccountOk

`func (o *TransferRecipientFetchResponseData) GetRecipientAccountOk() (*string, bool)`

GetRecipientAccountOk returns a tuple with the RecipientAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipientAccount

`func (o *TransferRecipientFetchResponseData) SetRecipientAccount(v string)`

SetRecipientAccount sets RecipientAccount field to given value.


### GetInstitutionCode

`func (o *TransferRecipientFetchResponseData) GetInstitutionCode() string`

GetInstitutionCode returns the InstitutionCode field if non-nil, zero value otherwise.

### GetInstitutionCodeOk

`func (o *TransferRecipientFetchResponseData) GetInstitutionCodeOk() (*string, bool)`

GetInstitutionCodeOk returns a tuple with the InstitutionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstitutionCode

`func (o *TransferRecipientFetchResponseData) SetInstitutionCode(v string)`

SetInstitutionCode sets InstitutionCode field to given value.


### GetEmail

`func (o *TransferRecipientFetchResponseData) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *TransferRecipientFetchResponseData) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *TransferRecipientFetchResponseData) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetId

`func (o *TransferRecipientFetchResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *TransferRecipientFetchResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *TransferRecipientFetchResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetIsDeleted

`func (o *TransferRecipientFetchResponseData) GetIsDeleted() bool`

GetIsDeleted returns the IsDeleted field if non-nil, zero value otherwise.

### GetIsDeletedOk

`func (o *TransferRecipientFetchResponseData) GetIsDeletedOk() (*bool, bool)`

GetIsDeletedOk returns a tuple with the IsDeleted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsDeleted

`func (o *TransferRecipientFetchResponseData) SetIsDeleted(v bool)`

SetIsDeleted sets IsDeleted field to given value.


### GetCreatedAt

`func (o *TransferRecipientFetchResponseData) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *TransferRecipientFetchResponseData) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *TransferRecipientFetchResponseData) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *TransferRecipientFetchResponseData) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *TransferRecipientFetchResponseData) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *TransferRecipientFetchResponseData) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


