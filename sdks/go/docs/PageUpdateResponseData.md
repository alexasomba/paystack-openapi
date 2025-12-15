# PageUpdateResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Domain** | **string** |  | 
**Name** | **string** |  | 
**Description** | **map[string]interface{}** |  | 
**Amount** | **map[string]interface{}** |  | 
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
**Integration** | **int32** |  | 
**Plan** | **map[string]interface{}** |  | 
**CreatedAt** | **string** |  | 
**UpdatedAt** | **string** |  | 

## Methods

### NewPageUpdateResponseData

`func NewPageUpdateResponseData(domain string, name string, description map[string]interface{}, amount map[string]interface{}, currency string, slug string, customFields map[string]interface{}, type_ string, redirectUrl map[string]interface{}, successMessage map[string]interface{}, collectPhone bool, active bool, published bool, migrate bool, notificationEmail map[string]interface{}, metadata map[string]interface{}, splitCode map[string]interface{}, id int32, integration int32, plan map[string]interface{}, createdAt string, updatedAt string, ) *PageUpdateResponseData`

NewPageUpdateResponseData instantiates a new PageUpdateResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPageUpdateResponseDataWithDefaults

`func NewPageUpdateResponseDataWithDefaults() *PageUpdateResponseData`

NewPageUpdateResponseDataWithDefaults instantiates a new PageUpdateResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDomain

`func (o *PageUpdateResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *PageUpdateResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *PageUpdateResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetName

`func (o *PageUpdateResponseData) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PageUpdateResponseData) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PageUpdateResponseData) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *PageUpdateResponseData) GetDescription() map[string]interface{}`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *PageUpdateResponseData) GetDescriptionOk() (*map[string]interface{}, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *PageUpdateResponseData) SetDescription(v map[string]interface{})`

SetDescription sets Description field to given value.


### SetDescriptionNil

`func (o *PageUpdateResponseData) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *PageUpdateResponseData) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetAmount

`func (o *PageUpdateResponseData) GetAmount() map[string]interface{}`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *PageUpdateResponseData) GetAmountOk() (*map[string]interface{}, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *PageUpdateResponseData) SetAmount(v map[string]interface{})`

SetAmount sets Amount field to given value.


### SetAmountNil

`func (o *PageUpdateResponseData) SetAmountNil(b bool)`

 SetAmountNil sets the value for Amount to be an explicit nil

### UnsetAmount
`func (o *PageUpdateResponseData) UnsetAmount()`

UnsetAmount ensures that no value is present for Amount, not even an explicit nil
### GetCurrency

`func (o *PageUpdateResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *PageUpdateResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *PageUpdateResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetSlug

`func (o *PageUpdateResponseData) GetSlug() string`

GetSlug returns the Slug field if non-nil, zero value otherwise.

### GetSlugOk

`func (o *PageUpdateResponseData) GetSlugOk() (*string, bool)`

GetSlugOk returns a tuple with the Slug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlug

`func (o *PageUpdateResponseData) SetSlug(v string)`

SetSlug sets Slug field to given value.


### GetCustomFields

`func (o *PageUpdateResponseData) GetCustomFields() map[string]interface{}`

GetCustomFields returns the CustomFields field if non-nil, zero value otherwise.

### GetCustomFieldsOk

`func (o *PageUpdateResponseData) GetCustomFieldsOk() (*map[string]interface{}, bool)`

GetCustomFieldsOk returns a tuple with the CustomFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomFields

`func (o *PageUpdateResponseData) SetCustomFields(v map[string]interface{})`

SetCustomFields sets CustomFields field to given value.


### SetCustomFieldsNil

`func (o *PageUpdateResponseData) SetCustomFieldsNil(b bool)`

 SetCustomFieldsNil sets the value for CustomFields to be an explicit nil

### UnsetCustomFields
`func (o *PageUpdateResponseData) UnsetCustomFields()`

UnsetCustomFields ensures that no value is present for CustomFields, not even an explicit nil
### GetType

`func (o *PageUpdateResponseData) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *PageUpdateResponseData) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *PageUpdateResponseData) SetType(v string)`

SetType sets Type field to given value.


### GetRedirectUrl

`func (o *PageUpdateResponseData) GetRedirectUrl() map[string]interface{}`

GetRedirectUrl returns the RedirectUrl field if non-nil, zero value otherwise.

### GetRedirectUrlOk

`func (o *PageUpdateResponseData) GetRedirectUrlOk() (*map[string]interface{}, bool)`

GetRedirectUrlOk returns a tuple with the RedirectUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRedirectUrl

`func (o *PageUpdateResponseData) SetRedirectUrl(v map[string]interface{})`

SetRedirectUrl sets RedirectUrl field to given value.


### SetRedirectUrlNil

`func (o *PageUpdateResponseData) SetRedirectUrlNil(b bool)`

 SetRedirectUrlNil sets the value for RedirectUrl to be an explicit nil

### UnsetRedirectUrl
`func (o *PageUpdateResponseData) UnsetRedirectUrl()`

UnsetRedirectUrl ensures that no value is present for RedirectUrl, not even an explicit nil
### GetSuccessMessage

`func (o *PageUpdateResponseData) GetSuccessMessage() map[string]interface{}`

GetSuccessMessage returns the SuccessMessage field if non-nil, zero value otherwise.

### GetSuccessMessageOk

`func (o *PageUpdateResponseData) GetSuccessMessageOk() (*map[string]interface{}, bool)`

GetSuccessMessageOk returns a tuple with the SuccessMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccessMessage

`func (o *PageUpdateResponseData) SetSuccessMessage(v map[string]interface{})`

SetSuccessMessage sets SuccessMessage field to given value.


### SetSuccessMessageNil

`func (o *PageUpdateResponseData) SetSuccessMessageNil(b bool)`

 SetSuccessMessageNil sets the value for SuccessMessage to be an explicit nil

### UnsetSuccessMessage
`func (o *PageUpdateResponseData) UnsetSuccessMessage()`

UnsetSuccessMessage ensures that no value is present for SuccessMessage, not even an explicit nil
### GetCollectPhone

`func (o *PageUpdateResponseData) GetCollectPhone() bool`

GetCollectPhone returns the CollectPhone field if non-nil, zero value otherwise.

### GetCollectPhoneOk

`func (o *PageUpdateResponseData) GetCollectPhoneOk() (*bool, bool)`

GetCollectPhoneOk returns a tuple with the CollectPhone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCollectPhone

`func (o *PageUpdateResponseData) SetCollectPhone(v bool)`

SetCollectPhone sets CollectPhone field to given value.


### GetActive

`func (o *PageUpdateResponseData) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *PageUpdateResponseData) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *PageUpdateResponseData) SetActive(v bool)`

SetActive sets Active field to given value.


### GetPublished

`func (o *PageUpdateResponseData) GetPublished() bool`

GetPublished returns the Published field if non-nil, zero value otherwise.

### GetPublishedOk

`func (o *PageUpdateResponseData) GetPublishedOk() (*bool, bool)`

GetPublishedOk returns a tuple with the Published field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublished

`func (o *PageUpdateResponseData) SetPublished(v bool)`

SetPublished sets Published field to given value.


### GetMigrate

`func (o *PageUpdateResponseData) GetMigrate() bool`

GetMigrate returns the Migrate field if non-nil, zero value otherwise.

### GetMigrateOk

`func (o *PageUpdateResponseData) GetMigrateOk() (*bool, bool)`

GetMigrateOk returns a tuple with the Migrate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMigrate

`func (o *PageUpdateResponseData) SetMigrate(v bool)`

SetMigrate sets Migrate field to given value.


### GetNotificationEmail

`func (o *PageUpdateResponseData) GetNotificationEmail() map[string]interface{}`

GetNotificationEmail returns the NotificationEmail field if non-nil, zero value otherwise.

### GetNotificationEmailOk

`func (o *PageUpdateResponseData) GetNotificationEmailOk() (*map[string]interface{}, bool)`

GetNotificationEmailOk returns a tuple with the NotificationEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotificationEmail

`func (o *PageUpdateResponseData) SetNotificationEmail(v map[string]interface{})`

SetNotificationEmail sets NotificationEmail field to given value.


### SetNotificationEmailNil

`func (o *PageUpdateResponseData) SetNotificationEmailNil(b bool)`

 SetNotificationEmailNil sets the value for NotificationEmail to be an explicit nil

### UnsetNotificationEmail
`func (o *PageUpdateResponseData) UnsetNotificationEmail()`

UnsetNotificationEmail ensures that no value is present for NotificationEmail, not even an explicit nil
### GetMetadata

`func (o *PageUpdateResponseData) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *PageUpdateResponseData) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *PageUpdateResponseData) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.


### SetMetadataNil

`func (o *PageUpdateResponseData) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *PageUpdateResponseData) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil
### GetSplitCode

`func (o *PageUpdateResponseData) GetSplitCode() map[string]interface{}`

GetSplitCode returns the SplitCode field if non-nil, zero value otherwise.

### GetSplitCodeOk

`func (o *PageUpdateResponseData) GetSplitCodeOk() (*map[string]interface{}, bool)`

GetSplitCodeOk returns a tuple with the SplitCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplitCode

`func (o *PageUpdateResponseData) SetSplitCode(v map[string]interface{})`

SetSplitCode sets SplitCode field to given value.


### SetSplitCodeNil

`func (o *PageUpdateResponseData) SetSplitCodeNil(b bool)`

 SetSplitCodeNil sets the value for SplitCode to be an explicit nil

### UnsetSplitCode
`func (o *PageUpdateResponseData) UnsetSplitCode()`

UnsetSplitCode ensures that no value is present for SplitCode, not even an explicit nil
### GetId

`func (o *PageUpdateResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *PageUpdateResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *PageUpdateResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetIntegration

`func (o *PageUpdateResponseData) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *PageUpdateResponseData) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *PageUpdateResponseData) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetPlan

`func (o *PageUpdateResponseData) GetPlan() map[string]interface{}`

GetPlan returns the Plan field if non-nil, zero value otherwise.

### GetPlanOk

`func (o *PageUpdateResponseData) GetPlanOk() (*map[string]interface{}, bool)`

GetPlanOk returns a tuple with the Plan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlan

`func (o *PageUpdateResponseData) SetPlan(v map[string]interface{})`

SetPlan sets Plan field to given value.


### SetPlanNil

`func (o *PageUpdateResponseData) SetPlanNil(b bool)`

 SetPlanNil sets the value for Plan to be an explicit nil

### UnsetPlan
`func (o *PageUpdateResponseData) UnsetPlan()`

UnsetPlan ensures that no value is present for Plan, not even an explicit nil
### GetCreatedAt

`func (o *PageUpdateResponseData) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *PageUpdateResponseData) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *PageUpdateResponseData) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *PageUpdateResponseData) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *PageUpdateResponseData) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *PageUpdateResponseData) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


