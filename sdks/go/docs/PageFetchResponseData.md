# PageFetchResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Integration** | **int32** |  | 
**Domain** | **string** |  | 
**Name** | **string** |  | 
**Description** | **map[string]interface{}** |  | 
**Amount** | **NullableInt32** |  | 
**Currency** | **string** |  | 
**Slug** | **string** |  | 
**CustomFields** | **map[string]interface{}** |  | 
**Type** | **string** |  | 
**RedirectUrl** | **map[string]interface{}** |  | 
**SuccessMessage** | **map[string]interface{}** |  | 
**CollectPhone** | **bool** |  | 
**Active** | **bool** |  | 
**Published** | **bool** |  | 
**Migrate** | **bool** |  | 
**NotificationEmail** | **map[string]interface{}** |  | 
**Metadata** | **map[string]interface{}** |  | 
**SplitCode** | **map[string]interface{}** |  | 
**Id** | **int32** |  | 
**CreatedAt** | **string** |  | 
**UpdatedAt** | **string** |  | 

## Methods

### NewPageFetchResponseData

`func NewPageFetchResponseData(integration int32, domain string, name string, description map[string]interface{}, amount NullableInt32, currency string, slug string, customFields map[string]interface{}, type_ string, redirectUrl map[string]interface{}, successMessage map[string]interface{}, collectPhone bool, active bool, published bool, migrate bool, notificationEmail map[string]interface{}, metadata map[string]interface{}, splitCode map[string]interface{}, id int32, createdAt string, updatedAt string, ) *PageFetchResponseData`

NewPageFetchResponseData instantiates a new PageFetchResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPageFetchResponseDataWithDefaults

`func NewPageFetchResponseDataWithDefaults() *PageFetchResponseData`

NewPageFetchResponseDataWithDefaults instantiates a new PageFetchResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIntegration

`func (o *PageFetchResponseData) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *PageFetchResponseData) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *PageFetchResponseData) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetDomain

`func (o *PageFetchResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *PageFetchResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *PageFetchResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetName

`func (o *PageFetchResponseData) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PageFetchResponseData) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PageFetchResponseData) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *PageFetchResponseData) GetDescription() map[string]interface{}`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *PageFetchResponseData) GetDescriptionOk() (*map[string]interface{}, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *PageFetchResponseData) SetDescription(v map[string]interface{})`

SetDescription sets Description field to given value.


### SetDescriptionNil

`func (o *PageFetchResponseData) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *PageFetchResponseData) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetAmount

`func (o *PageFetchResponseData) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *PageFetchResponseData) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *PageFetchResponseData) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### SetAmountNil

`func (o *PageFetchResponseData) SetAmountNil(b bool)`

 SetAmountNil sets the value for Amount to be an explicit nil

### UnsetAmount
`func (o *PageFetchResponseData) UnsetAmount()`

UnsetAmount ensures that no value is present for Amount, not even an explicit nil
### GetCurrency

`func (o *PageFetchResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *PageFetchResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *PageFetchResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetSlug

`func (o *PageFetchResponseData) GetSlug() string`

GetSlug returns the Slug field if non-nil, zero value otherwise.

### GetSlugOk

`func (o *PageFetchResponseData) GetSlugOk() (*string, bool)`

GetSlugOk returns a tuple with the Slug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlug

`func (o *PageFetchResponseData) SetSlug(v string)`

SetSlug sets Slug field to given value.


### GetCustomFields

`func (o *PageFetchResponseData) GetCustomFields() map[string]interface{}`

GetCustomFields returns the CustomFields field if non-nil, zero value otherwise.

### GetCustomFieldsOk

`func (o *PageFetchResponseData) GetCustomFieldsOk() (*map[string]interface{}, bool)`

GetCustomFieldsOk returns a tuple with the CustomFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomFields

`func (o *PageFetchResponseData) SetCustomFields(v map[string]interface{})`

SetCustomFields sets CustomFields field to given value.


### SetCustomFieldsNil

`func (o *PageFetchResponseData) SetCustomFieldsNil(b bool)`

 SetCustomFieldsNil sets the value for CustomFields to be an explicit nil

### UnsetCustomFields
`func (o *PageFetchResponseData) UnsetCustomFields()`

UnsetCustomFields ensures that no value is present for CustomFields, not even an explicit nil
### GetType

`func (o *PageFetchResponseData) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *PageFetchResponseData) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *PageFetchResponseData) SetType(v string)`

SetType sets Type field to given value.


### GetRedirectUrl

`func (o *PageFetchResponseData) GetRedirectUrl() map[string]interface{}`

GetRedirectUrl returns the RedirectUrl field if non-nil, zero value otherwise.

### GetRedirectUrlOk

`func (o *PageFetchResponseData) GetRedirectUrlOk() (*map[string]interface{}, bool)`

GetRedirectUrlOk returns a tuple with the RedirectUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRedirectUrl

`func (o *PageFetchResponseData) SetRedirectUrl(v map[string]interface{})`

SetRedirectUrl sets RedirectUrl field to given value.


### SetRedirectUrlNil

`func (o *PageFetchResponseData) SetRedirectUrlNil(b bool)`

 SetRedirectUrlNil sets the value for RedirectUrl to be an explicit nil

### UnsetRedirectUrl
`func (o *PageFetchResponseData) UnsetRedirectUrl()`

UnsetRedirectUrl ensures that no value is present for RedirectUrl, not even an explicit nil
### GetSuccessMessage

`func (o *PageFetchResponseData) GetSuccessMessage() map[string]interface{}`

GetSuccessMessage returns the SuccessMessage field if non-nil, zero value otherwise.

### GetSuccessMessageOk

`func (o *PageFetchResponseData) GetSuccessMessageOk() (*map[string]interface{}, bool)`

GetSuccessMessageOk returns a tuple with the SuccessMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccessMessage

`func (o *PageFetchResponseData) SetSuccessMessage(v map[string]interface{})`

SetSuccessMessage sets SuccessMessage field to given value.


### SetSuccessMessageNil

`func (o *PageFetchResponseData) SetSuccessMessageNil(b bool)`

 SetSuccessMessageNil sets the value for SuccessMessage to be an explicit nil

### UnsetSuccessMessage
`func (o *PageFetchResponseData) UnsetSuccessMessage()`

UnsetSuccessMessage ensures that no value is present for SuccessMessage, not even an explicit nil
### GetCollectPhone

`func (o *PageFetchResponseData) GetCollectPhone() bool`

GetCollectPhone returns the CollectPhone field if non-nil, zero value otherwise.

### GetCollectPhoneOk

`func (o *PageFetchResponseData) GetCollectPhoneOk() (*bool, bool)`

GetCollectPhoneOk returns a tuple with the CollectPhone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCollectPhone

`func (o *PageFetchResponseData) SetCollectPhone(v bool)`

SetCollectPhone sets CollectPhone field to given value.


### GetActive

`func (o *PageFetchResponseData) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *PageFetchResponseData) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *PageFetchResponseData) SetActive(v bool)`

SetActive sets Active field to given value.


### GetPublished

`func (o *PageFetchResponseData) GetPublished() bool`

GetPublished returns the Published field if non-nil, zero value otherwise.

### GetPublishedOk

`func (o *PageFetchResponseData) GetPublishedOk() (*bool, bool)`

GetPublishedOk returns a tuple with the Published field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublished

`func (o *PageFetchResponseData) SetPublished(v bool)`

SetPublished sets Published field to given value.


### GetMigrate

`func (o *PageFetchResponseData) GetMigrate() bool`

GetMigrate returns the Migrate field if non-nil, zero value otherwise.

### GetMigrateOk

`func (o *PageFetchResponseData) GetMigrateOk() (*bool, bool)`

GetMigrateOk returns a tuple with the Migrate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMigrate

`func (o *PageFetchResponseData) SetMigrate(v bool)`

SetMigrate sets Migrate field to given value.


### GetNotificationEmail

`func (o *PageFetchResponseData) GetNotificationEmail() map[string]interface{}`

GetNotificationEmail returns the NotificationEmail field if non-nil, zero value otherwise.

### GetNotificationEmailOk

`func (o *PageFetchResponseData) GetNotificationEmailOk() (*map[string]interface{}, bool)`

GetNotificationEmailOk returns a tuple with the NotificationEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotificationEmail

`func (o *PageFetchResponseData) SetNotificationEmail(v map[string]interface{})`

SetNotificationEmail sets NotificationEmail field to given value.


### SetNotificationEmailNil

`func (o *PageFetchResponseData) SetNotificationEmailNil(b bool)`

 SetNotificationEmailNil sets the value for NotificationEmail to be an explicit nil

### UnsetNotificationEmail
`func (o *PageFetchResponseData) UnsetNotificationEmail()`

UnsetNotificationEmail ensures that no value is present for NotificationEmail, not even an explicit nil
### GetMetadata

`func (o *PageFetchResponseData) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *PageFetchResponseData) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *PageFetchResponseData) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.


### SetMetadataNil

`func (o *PageFetchResponseData) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *PageFetchResponseData) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil
### GetSplitCode

`func (o *PageFetchResponseData) GetSplitCode() map[string]interface{}`

GetSplitCode returns the SplitCode field if non-nil, zero value otherwise.

### GetSplitCodeOk

`func (o *PageFetchResponseData) GetSplitCodeOk() (*map[string]interface{}, bool)`

GetSplitCodeOk returns a tuple with the SplitCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplitCode

`func (o *PageFetchResponseData) SetSplitCode(v map[string]interface{})`

SetSplitCode sets SplitCode field to given value.


### SetSplitCodeNil

`func (o *PageFetchResponseData) SetSplitCodeNil(b bool)`

 SetSplitCodeNil sets the value for SplitCode to be an explicit nil

### UnsetSplitCode
`func (o *PageFetchResponseData) UnsetSplitCode()`

UnsetSplitCode ensures that no value is present for SplitCode, not even an explicit nil
### GetId

`func (o *PageFetchResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *PageFetchResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *PageFetchResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetCreatedAt

`func (o *PageFetchResponseData) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *PageFetchResponseData) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *PageFetchResponseData) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *PageFetchResponseData) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *PageFetchResponseData) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *PageFetchResponseData) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


