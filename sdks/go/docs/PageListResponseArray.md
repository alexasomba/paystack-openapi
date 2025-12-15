# PageListResponseArray

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Integration** | **int32** |  | 
**Plan** | **map[string]interface{}** |  | 
**Domain** | **string** |  | 
**Name** | **string** |  | 
**Description** | **NullableString** |  | 
**Amount** | **NullableInt32** |  | 
**Currency** | **string** |  | 
**Slug** | **string** |  | 
**CustomFields** | **[]map[string]interface{}** |  | 
**Type** | **string** |  | 
**RedirectUrl** | **NullableString** |  | 
**SuccessMessage** | **NullableString** |  | 
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

### NewPageListResponseArray

`func NewPageListResponseArray(integration int32, plan map[string]interface{}, domain string, name string, description NullableString, amount NullableInt32, currency string, slug string, customFields []map[string]interface{}, type_ string, redirectUrl NullableString, successMessage NullableString, collectPhone bool, active bool, published bool, migrate bool, notificationEmail map[string]interface{}, metadata map[string]interface{}, splitCode map[string]interface{}, id int32, createdAt string, updatedAt string, ) *PageListResponseArray`

NewPageListResponseArray instantiates a new PageListResponseArray object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPageListResponseArrayWithDefaults

`func NewPageListResponseArrayWithDefaults() *PageListResponseArray`

NewPageListResponseArrayWithDefaults instantiates a new PageListResponseArray object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIntegration

`func (o *PageListResponseArray) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *PageListResponseArray) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *PageListResponseArray) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetPlan

`func (o *PageListResponseArray) GetPlan() map[string]interface{}`

GetPlan returns the Plan field if non-nil, zero value otherwise.

### GetPlanOk

`func (o *PageListResponseArray) GetPlanOk() (*map[string]interface{}, bool)`

GetPlanOk returns a tuple with the Plan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlan

`func (o *PageListResponseArray) SetPlan(v map[string]interface{})`

SetPlan sets Plan field to given value.


### SetPlanNil

`func (o *PageListResponseArray) SetPlanNil(b bool)`

 SetPlanNil sets the value for Plan to be an explicit nil

### UnsetPlan
`func (o *PageListResponseArray) UnsetPlan()`

UnsetPlan ensures that no value is present for Plan, not even an explicit nil
### GetDomain

`func (o *PageListResponseArray) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *PageListResponseArray) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *PageListResponseArray) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetName

`func (o *PageListResponseArray) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PageListResponseArray) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PageListResponseArray) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *PageListResponseArray) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *PageListResponseArray) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *PageListResponseArray) SetDescription(v string)`

SetDescription sets Description field to given value.


### SetDescriptionNil

`func (o *PageListResponseArray) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *PageListResponseArray) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetAmount

`func (o *PageListResponseArray) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *PageListResponseArray) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *PageListResponseArray) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### SetAmountNil

`func (o *PageListResponseArray) SetAmountNil(b bool)`

 SetAmountNil sets the value for Amount to be an explicit nil

### UnsetAmount
`func (o *PageListResponseArray) UnsetAmount()`

UnsetAmount ensures that no value is present for Amount, not even an explicit nil
### GetCurrency

`func (o *PageListResponseArray) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *PageListResponseArray) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *PageListResponseArray) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetSlug

`func (o *PageListResponseArray) GetSlug() string`

GetSlug returns the Slug field if non-nil, zero value otherwise.

### GetSlugOk

`func (o *PageListResponseArray) GetSlugOk() (*string, bool)`

GetSlugOk returns a tuple with the Slug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlug

`func (o *PageListResponseArray) SetSlug(v string)`

SetSlug sets Slug field to given value.


### GetCustomFields

`func (o *PageListResponseArray) GetCustomFields() []map[string]interface{}`

GetCustomFields returns the CustomFields field if non-nil, zero value otherwise.

### GetCustomFieldsOk

`func (o *PageListResponseArray) GetCustomFieldsOk() (*[]map[string]interface{}, bool)`

GetCustomFieldsOk returns a tuple with the CustomFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomFields

`func (o *PageListResponseArray) SetCustomFields(v []map[string]interface{})`

SetCustomFields sets CustomFields field to given value.


### SetCustomFieldsNil

`func (o *PageListResponseArray) SetCustomFieldsNil(b bool)`

 SetCustomFieldsNil sets the value for CustomFields to be an explicit nil

### UnsetCustomFields
`func (o *PageListResponseArray) UnsetCustomFields()`

UnsetCustomFields ensures that no value is present for CustomFields, not even an explicit nil
### GetType

`func (o *PageListResponseArray) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *PageListResponseArray) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *PageListResponseArray) SetType(v string)`

SetType sets Type field to given value.


### GetRedirectUrl

`func (o *PageListResponseArray) GetRedirectUrl() string`

GetRedirectUrl returns the RedirectUrl field if non-nil, zero value otherwise.

### GetRedirectUrlOk

`func (o *PageListResponseArray) GetRedirectUrlOk() (*string, bool)`

GetRedirectUrlOk returns a tuple with the RedirectUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRedirectUrl

`func (o *PageListResponseArray) SetRedirectUrl(v string)`

SetRedirectUrl sets RedirectUrl field to given value.


### SetRedirectUrlNil

`func (o *PageListResponseArray) SetRedirectUrlNil(b bool)`

 SetRedirectUrlNil sets the value for RedirectUrl to be an explicit nil

### UnsetRedirectUrl
`func (o *PageListResponseArray) UnsetRedirectUrl()`

UnsetRedirectUrl ensures that no value is present for RedirectUrl, not even an explicit nil
### GetSuccessMessage

`func (o *PageListResponseArray) GetSuccessMessage() string`

GetSuccessMessage returns the SuccessMessage field if non-nil, zero value otherwise.

### GetSuccessMessageOk

`func (o *PageListResponseArray) GetSuccessMessageOk() (*string, bool)`

GetSuccessMessageOk returns a tuple with the SuccessMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccessMessage

`func (o *PageListResponseArray) SetSuccessMessage(v string)`

SetSuccessMessage sets SuccessMessage field to given value.


### SetSuccessMessageNil

`func (o *PageListResponseArray) SetSuccessMessageNil(b bool)`

 SetSuccessMessageNil sets the value for SuccessMessage to be an explicit nil

### UnsetSuccessMessage
`func (o *PageListResponseArray) UnsetSuccessMessage()`

UnsetSuccessMessage ensures that no value is present for SuccessMessage, not even an explicit nil
### GetCollectPhone

`func (o *PageListResponseArray) GetCollectPhone() bool`

GetCollectPhone returns the CollectPhone field if non-nil, zero value otherwise.

### GetCollectPhoneOk

`func (o *PageListResponseArray) GetCollectPhoneOk() (*bool, bool)`

GetCollectPhoneOk returns a tuple with the CollectPhone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCollectPhone

`func (o *PageListResponseArray) SetCollectPhone(v bool)`

SetCollectPhone sets CollectPhone field to given value.


### GetActive

`func (o *PageListResponseArray) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *PageListResponseArray) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *PageListResponseArray) SetActive(v bool)`

SetActive sets Active field to given value.


### GetPublished

`func (o *PageListResponseArray) GetPublished() bool`

GetPublished returns the Published field if non-nil, zero value otherwise.

### GetPublishedOk

`func (o *PageListResponseArray) GetPublishedOk() (*bool, bool)`

GetPublishedOk returns a tuple with the Published field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublished

`func (o *PageListResponseArray) SetPublished(v bool)`

SetPublished sets Published field to given value.


### GetMigrate

`func (o *PageListResponseArray) GetMigrate() bool`

GetMigrate returns the Migrate field if non-nil, zero value otherwise.

### GetMigrateOk

`func (o *PageListResponseArray) GetMigrateOk() (*bool, bool)`

GetMigrateOk returns a tuple with the Migrate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMigrate

`func (o *PageListResponseArray) SetMigrate(v bool)`

SetMigrate sets Migrate field to given value.


### GetNotificationEmail

`func (o *PageListResponseArray) GetNotificationEmail() map[string]interface{}`

GetNotificationEmail returns the NotificationEmail field if non-nil, zero value otherwise.

### GetNotificationEmailOk

`func (o *PageListResponseArray) GetNotificationEmailOk() (*map[string]interface{}, bool)`

GetNotificationEmailOk returns a tuple with the NotificationEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotificationEmail

`func (o *PageListResponseArray) SetNotificationEmail(v map[string]interface{})`

SetNotificationEmail sets NotificationEmail field to given value.


### SetNotificationEmailNil

`func (o *PageListResponseArray) SetNotificationEmailNil(b bool)`

 SetNotificationEmailNil sets the value for NotificationEmail to be an explicit nil

### UnsetNotificationEmail
`func (o *PageListResponseArray) UnsetNotificationEmail()`

UnsetNotificationEmail ensures that no value is present for NotificationEmail, not even an explicit nil
### GetMetadata

`func (o *PageListResponseArray) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *PageListResponseArray) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *PageListResponseArray) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.


### SetMetadataNil

`func (o *PageListResponseArray) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *PageListResponseArray) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil
### GetSplitCode

`func (o *PageListResponseArray) GetSplitCode() map[string]interface{}`

GetSplitCode returns the SplitCode field if non-nil, zero value otherwise.

### GetSplitCodeOk

`func (o *PageListResponseArray) GetSplitCodeOk() (*map[string]interface{}, bool)`

GetSplitCodeOk returns a tuple with the SplitCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplitCode

`func (o *PageListResponseArray) SetSplitCode(v map[string]interface{})`

SetSplitCode sets SplitCode field to given value.


### SetSplitCodeNil

`func (o *PageListResponseArray) SetSplitCodeNil(b bool)`

 SetSplitCodeNil sets the value for SplitCode to be an explicit nil

### UnsetSplitCode
`func (o *PageListResponseArray) UnsetSplitCode()`

UnsetSplitCode ensures that no value is present for SplitCode, not even an explicit nil
### GetId

`func (o *PageListResponseArray) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *PageListResponseArray) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *PageListResponseArray) SetId(v int32)`

SetId sets Id field to given value.


### GetCreatedAt

`func (o *PageListResponseArray) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *PageListResponseArray) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *PageListResponseArray) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *PageListResponseArray) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *PageListResponseArray) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *PageListResponseArray) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


