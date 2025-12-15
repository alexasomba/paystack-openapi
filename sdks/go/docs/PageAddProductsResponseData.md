# PageAddProductsResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Integration** | **int32** |  | 
**Plan** | **map[string]interface{}** |  | 
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
**CreatedAt** | **string** |  | 
**UpdatedAt** | **string** |  | 
**Products** | [**[]PageProductsArray**](PageProductsArray.md) |  | 

## Methods

### NewPageAddProductsResponseData

`func NewPageAddProductsResponseData(integration int32, plan map[string]interface{}, domain string, name string, description map[string]interface{}, amount map[string]interface{}, currency string, slug string, customFields map[string]interface{}, type_ string, redirectUrl map[string]interface{}, successMessage map[string]interface{}, collectPhone bool, active bool, published bool, migrate bool, notificationEmail map[string]interface{}, metadata map[string]interface{}, splitCode map[string]interface{}, id int32, createdAt string, updatedAt string, products []PageProductsArray, ) *PageAddProductsResponseData`

NewPageAddProductsResponseData instantiates a new PageAddProductsResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPageAddProductsResponseDataWithDefaults

`func NewPageAddProductsResponseDataWithDefaults() *PageAddProductsResponseData`

NewPageAddProductsResponseDataWithDefaults instantiates a new PageAddProductsResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIntegration

`func (o *PageAddProductsResponseData) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *PageAddProductsResponseData) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *PageAddProductsResponseData) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetPlan

`func (o *PageAddProductsResponseData) GetPlan() map[string]interface{}`

GetPlan returns the Plan field if non-nil, zero value otherwise.

### GetPlanOk

`func (o *PageAddProductsResponseData) GetPlanOk() (*map[string]interface{}, bool)`

GetPlanOk returns a tuple with the Plan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlan

`func (o *PageAddProductsResponseData) SetPlan(v map[string]interface{})`

SetPlan sets Plan field to given value.


### SetPlanNil

`func (o *PageAddProductsResponseData) SetPlanNil(b bool)`

 SetPlanNil sets the value for Plan to be an explicit nil

### UnsetPlan
`func (o *PageAddProductsResponseData) UnsetPlan()`

UnsetPlan ensures that no value is present for Plan, not even an explicit nil
### GetDomain

`func (o *PageAddProductsResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *PageAddProductsResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *PageAddProductsResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetName

`func (o *PageAddProductsResponseData) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PageAddProductsResponseData) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PageAddProductsResponseData) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *PageAddProductsResponseData) GetDescription() map[string]interface{}`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *PageAddProductsResponseData) GetDescriptionOk() (*map[string]interface{}, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *PageAddProductsResponseData) SetDescription(v map[string]interface{})`

SetDescription sets Description field to given value.


### SetDescriptionNil

`func (o *PageAddProductsResponseData) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *PageAddProductsResponseData) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetAmount

`func (o *PageAddProductsResponseData) GetAmount() map[string]interface{}`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *PageAddProductsResponseData) GetAmountOk() (*map[string]interface{}, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *PageAddProductsResponseData) SetAmount(v map[string]interface{})`

SetAmount sets Amount field to given value.


### SetAmountNil

`func (o *PageAddProductsResponseData) SetAmountNil(b bool)`

 SetAmountNil sets the value for Amount to be an explicit nil

### UnsetAmount
`func (o *PageAddProductsResponseData) UnsetAmount()`

UnsetAmount ensures that no value is present for Amount, not even an explicit nil
### GetCurrency

`func (o *PageAddProductsResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *PageAddProductsResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *PageAddProductsResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetSlug

`func (o *PageAddProductsResponseData) GetSlug() string`

GetSlug returns the Slug field if non-nil, zero value otherwise.

### GetSlugOk

`func (o *PageAddProductsResponseData) GetSlugOk() (*string, bool)`

GetSlugOk returns a tuple with the Slug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlug

`func (o *PageAddProductsResponseData) SetSlug(v string)`

SetSlug sets Slug field to given value.


### GetCustomFields

`func (o *PageAddProductsResponseData) GetCustomFields() map[string]interface{}`

GetCustomFields returns the CustomFields field if non-nil, zero value otherwise.

### GetCustomFieldsOk

`func (o *PageAddProductsResponseData) GetCustomFieldsOk() (*map[string]interface{}, bool)`

GetCustomFieldsOk returns a tuple with the CustomFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomFields

`func (o *PageAddProductsResponseData) SetCustomFields(v map[string]interface{})`

SetCustomFields sets CustomFields field to given value.


### SetCustomFieldsNil

`func (o *PageAddProductsResponseData) SetCustomFieldsNil(b bool)`

 SetCustomFieldsNil sets the value for CustomFields to be an explicit nil

### UnsetCustomFields
`func (o *PageAddProductsResponseData) UnsetCustomFields()`

UnsetCustomFields ensures that no value is present for CustomFields, not even an explicit nil
### GetType

`func (o *PageAddProductsResponseData) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *PageAddProductsResponseData) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *PageAddProductsResponseData) SetType(v string)`

SetType sets Type field to given value.


### GetRedirectUrl

`func (o *PageAddProductsResponseData) GetRedirectUrl() map[string]interface{}`

GetRedirectUrl returns the RedirectUrl field if non-nil, zero value otherwise.

### GetRedirectUrlOk

`func (o *PageAddProductsResponseData) GetRedirectUrlOk() (*map[string]interface{}, bool)`

GetRedirectUrlOk returns a tuple with the RedirectUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRedirectUrl

`func (o *PageAddProductsResponseData) SetRedirectUrl(v map[string]interface{})`

SetRedirectUrl sets RedirectUrl field to given value.


### SetRedirectUrlNil

`func (o *PageAddProductsResponseData) SetRedirectUrlNil(b bool)`

 SetRedirectUrlNil sets the value for RedirectUrl to be an explicit nil

### UnsetRedirectUrl
`func (o *PageAddProductsResponseData) UnsetRedirectUrl()`

UnsetRedirectUrl ensures that no value is present for RedirectUrl, not even an explicit nil
### GetSuccessMessage

`func (o *PageAddProductsResponseData) GetSuccessMessage() map[string]interface{}`

GetSuccessMessage returns the SuccessMessage field if non-nil, zero value otherwise.

### GetSuccessMessageOk

`func (o *PageAddProductsResponseData) GetSuccessMessageOk() (*map[string]interface{}, bool)`

GetSuccessMessageOk returns a tuple with the SuccessMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccessMessage

`func (o *PageAddProductsResponseData) SetSuccessMessage(v map[string]interface{})`

SetSuccessMessage sets SuccessMessage field to given value.


### SetSuccessMessageNil

`func (o *PageAddProductsResponseData) SetSuccessMessageNil(b bool)`

 SetSuccessMessageNil sets the value for SuccessMessage to be an explicit nil

### UnsetSuccessMessage
`func (o *PageAddProductsResponseData) UnsetSuccessMessage()`

UnsetSuccessMessage ensures that no value is present for SuccessMessage, not even an explicit nil
### GetCollectPhone

`func (o *PageAddProductsResponseData) GetCollectPhone() bool`

GetCollectPhone returns the CollectPhone field if non-nil, zero value otherwise.

### GetCollectPhoneOk

`func (o *PageAddProductsResponseData) GetCollectPhoneOk() (*bool, bool)`

GetCollectPhoneOk returns a tuple with the CollectPhone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCollectPhone

`func (o *PageAddProductsResponseData) SetCollectPhone(v bool)`

SetCollectPhone sets CollectPhone field to given value.


### GetActive

`func (o *PageAddProductsResponseData) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *PageAddProductsResponseData) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *PageAddProductsResponseData) SetActive(v bool)`

SetActive sets Active field to given value.


### GetPublished

`func (o *PageAddProductsResponseData) GetPublished() bool`

GetPublished returns the Published field if non-nil, zero value otherwise.

### GetPublishedOk

`func (o *PageAddProductsResponseData) GetPublishedOk() (*bool, bool)`

GetPublishedOk returns a tuple with the Published field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublished

`func (o *PageAddProductsResponseData) SetPublished(v bool)`

SetPublished sets Published field to given value.


### GetMigrate

`func (o *PageAddProductsResponseData) GetMigrate() bool`

GetMigrate returns the Migrate field if non-nil, zero value otherwise.

### GetMigrateOk

`func (o *PageAddProductsResponseData) GetMigrateOk() (*bool, bool)`

GetMigrateOk returns a tuple with the Migrate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMigrate

`func (o *PageAddProductsResponseData) SetMigrate(v bool)`

SetMigrate sets Migrate field to given value.


### GetNotificationEmail

`func (o *PageAddProductsResponseData) GetNotificationEmail() map[string]interface{}`

GetNotificationEmail returns the NotificationEmail field if non-nil, zero value otherwise.

### GetNotificationEmailOk

`func (o *PageAddProductsResponseData) GetNotificationEmailOk() (*map[string]interface{}, bool)`

GetNotificationEmailOk returns a tuple with the NotificationEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotificationEmail

`func (o *PageAddProductsResponseData) SetNotificationEmail(v map[string]interface{})`

SetNotificationEmail sets NotificationEmail field to given value.


### SetNotificationEmailNil

`func (o *PageAddProductsResponseData) SetNotificationEmailNil(b bool)`

 SetNotificationEmailNil sets the value for NotificationEmail to be an explicit nil

### UnsetNotificationEmail
`func (o *PageAddProductsResponseData) UnsetNotificationEmail()`

UnsetNotificationEmail ensures that no value is present for NotificationEmail, not even an explicit nil
### GetMetadata

`func (o *PageAddProductsResponseData) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *PageAddProductsResponseData) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *PageAddProductsResponseData) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.


### SetMetadataNil

`func (o *PageAddProductsResponseData) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *PageAddProductsResponseData) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil
### GetSplitCode

`func (o *PageAddProductsResponseData) GetSplitCode() map[string]interface{}`

GetSplitCode returns the SplitCode field if non-nil, zero value otherwise.

### GetSplitCodeOk

`func (o *PageAddProductsResponseData) GetSplitCodeOk() (*map[string]interface{}, bool)`

GetSplitCodeOk returns a tuple with the SplitCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplitCode

`func (o *PageAddProductsResponseData) SetSplitCode(v map[string]interface{})`

SetSplitCode sets SplitCode field to given value.


### SetSplitCodeNil

`func (o *PageAddProductsResponseData) SetSplitCodeNil(b bool)`

 SetSplitCodeNil sets the value for SplitCode to be an explicit nil

### UnsetSplitCode
`func (o *PageAddProductsResponseData) UnsetSplitCode()`

UnsetSplitCode ensures that no value is present for SplitCode, not even an explicit nil
### GetId

`func (o *PageAddProductsResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *PageAddProductsResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *PageAddProductsResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetCreatedAt

`func (o *PageAddProductsResponseData) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *PageAddProductsResponseData) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *PageAddProductsResponseData) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *PageAddProductsResponseData) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *PageAddProductsResponseData) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *PageAddProductsResponseData) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.


### GetProducts

`func (o *PageAddProductsResponseData) GetProducts() []PageProductsArray`

GetProducts returns the Products field if non-nil, zero value otherwise.

### GetProductsOk

`func (o *PageAddProductsResponseData) GetProductsOk() (*[]PageProductsArray, bool)`

GetProductsOk returns a tuple with the Products field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProducts

`func (o *PageAddProductsResponseData) SetProducts(v []PageProductsArray)`

SetProducts sets Products field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


