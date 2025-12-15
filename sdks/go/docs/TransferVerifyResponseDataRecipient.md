# TransferVerifyResponseDataRecipient

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
**Details** | [**TransferVerifyResponseDataRecipientDetails**](TransferVerifyResponseDataRecipientDetails.md) |  | 

## Methods

### NewTransferVerifyResponseDataRecipient

`func NewTransferVerifyResponseDataRecipient(active bool, createdAt string, currency string, description string, domain string, email string, id int32, integration int32, name string, recipientCode string, type_ string, updatedAt string, isDeleted bool, details TransferVerifyResponseDataRecipientDetails, ) *TransferVerifyResponseDataRecipient`

NewTransferVerifyResponseDataRecipient instantiates a new TransferVerifyResponseDataRecipient object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransferVerifyResponseDataRecipientWithDefaults

`func NewTransferVerifyResponseDataRecipientWithDefaults() *TransferVerifyResponseDataRecipient`

NewTransferVerifyResponseDataRecipientWithDefaults instantiates a new TransferVerifyResponseDataRecipient object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActive

`func (o *TransferVerifyResponseDataRecipient) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *TransferVerifyResponseDataRecipient) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *TransferVerifyResponseDataRecipient) SetActive(v bool)`

SetActive sets Active field to given value.


### GetCreatedAt

`func (o *TransferVerifyResponseDataRecipient) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *TransferVerifyResponseDataRecipient) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *TransferVerifyResponseDataRecipient) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetCurrency

`func (o *TransferVerifyResponseDataRecipient) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *TransferVerifyResponseDataRecipient) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *TransferVerifyResponseDataRecipient) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetDescription

`func (o *TransferVerifyResponseDataRecipient) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TransferVerifyResponseDataRecipient) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TransferVerifyResponseDataRecipient) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetDomain

`func (o *TransferVerifyResponseDataRecipient) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *TransferVerifyResponseDataRecipient) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *TransferVerifyResponseDataRecipient) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetEmail

`func (o *TransferVerifyResponseDataRecipient) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *TransferVerifyResponseDataRecipient) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *TransferVerifyResponseDataRecipient) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetId

`func (o *TransferVerifyResponseDataRecipient) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *TransferVerifyResponseDataRecipient) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *TransferVerifyResponseDataRecipient) SetId(v int32)`

SetId sets Id field to given value.


### GetIntegration

`func (o *TransferVerifyResponseDataRecipient) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *TransferVerifyResponseDataRecipient) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *TransferVerifyResponseDataRecipient) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetMetadata

`func (o *TransferVerifyResponseDataRecipient) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *TransferVerifyResponseDataRecipient) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *TransferVerifyResponseDataRecipient) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *TransferVerifyResponseDataRecipient) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### SetMetadataNil

`func (o *TransferVerifyResponseDataRecipient) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *TransferVerifyResponseDataRecipient) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil
### GetName

`func (o *TransferVerifyResponseDataRecipient) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *TransferVerifyResponseDataRecipient) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *TransferVerifyResponseDataRecipient) SetName(v string)`

SetName sets Name field to given value.


### GetRecipientCode

`func (o *TransferVerifyResponseDataRecipient) GetRecipientCode() string`

GetRecipientCode returns the RecipientCode field if non-nil, zero value otherwise.

### GetRecipientCodeOk

`func (o *TransferVerifyResponseDataRecipient) GetRecipientCodeOk() (*string, bool)`

GetRecipientCodeOk returns a tuple with the RecipientCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipientCode

`func (o *TransferVerifyResponseDataRecipient) SetRecipientCode(v string)`

SetRecipientCode sets RecipientCode field to given value.


### GetType

`func (o *TransferVerifyResponseDataRecipient) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TransferVerifyResponseDataRecipient) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TransferVerifyResponseDataRecipient) SetType(v string)`

SetType sets Type field to given value.


### GetUpdatedAt

`func (o *TransferVerifyResponseDataRecipient) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *TransferVerifyResponseDataRecipient) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *TransferVerifyResponseDataRecipient) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.


### GetIsDeleted

`func (o *TransferVerifyResponseDataRecipient) GetIsDeleted() bool`

GetIsDeleted returns the IsDeleted field if non-nil, zero value otherwise.

### GetIsDeletedOk

`func (o *TransferVerifyResponseDataRecipient) GetIsDeletedOk() (*bool, bool)`

GetIsDeletedOk returns a tuple with the IsDeleted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsDeleted

`func (o *TransferVerifyResponseDataRecipient) SetIsDeleted(v bool)`

SetIsDeleted sets IsDeleted field to given value.


### GetDetails

`func (o *TransferVerifyResponseDataRecipient) GetDetails() TransferVerifyResponseDataRecipientDetails`

GetDetails returns the Details field if non-nil, zero value otherwise.

### GetDetailsOk

`func (o *TransferVerifyResponseDataRecipient) GetDetailsOk() (*TransferVerifyResponseDataRecipientDetails, bool)`

GetDetailsOk returns a tuple with the Details field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetails

`func (o *TransferVerifyResponseDataRecipient) SetDetails(v TransferVerifyResponseDataRecipientDetails)`

SetDetails sets Details field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


