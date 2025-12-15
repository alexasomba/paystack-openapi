# ProductUpdateResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Description** | **string** |  | 
**ProductCode** | **string** |  | 
**Price** | **int32** |  | 
**Currency** | **string** |  | 
**Quantity** | **int32** |  | 
**QuantitySold** | **int32** |  | 
**Type** | **string** |  | 
**Files** | **[]map[string]interface{}** |  | 
**FilePath** | **map[string]interface{}** |  | 
**IsShippable** | **bool** |  | 
**ShippingFields** | [**ProductCreateResponseDataShippingFields**](ProductCreateResponseDataShippingFields.md) |  | 
**Unlimited** | **bool** |  | 
**Domain** | **string** |  | 
**Active** | **bool** |  | 
**Features** | **map[string]interface{}** |  | 
**InStock** | **bool** |  | 
**Metadata** | [**ProductCreateResponseDataMetadata**](ProductCreateResponseDataMetadata.md) |  | 
**Slug** | **string** |  | 
**SuccessMessage** | **map[string]interface{}** |  | 
**RedirectUrl** | **map[string]interface{}** |  | 
**SplitCode** | **map[string]interface{}** |  | 
**NotificationEmails** | **map[string]interface{}** |  | 
**MinimumOrderable** | **int32** |  | 
**MaximumOrderable** | **map[string]interface{}** |  | 
**LowStockAlert** | **bool** |  | 
**StockThreshold** | **map[string]interface{}** |  | 
**ExpiresIn** | **map[string]interface{}** |  | 
**Id** | **int32** |  | 
**Integration** | **int32** |  | 
**CreatedAt** | **string** |  | 
**UpdatedAt** | **string** |  | 

## Methods

### NewProductUpdateResponseData

`func NewProductUpdateResponseData(name string, description string, productCode string, price int32, currency string, quantity int32, quantitySold int32, type_ string, files []map[string]interface{}, filePath map[string]interface{}, isShippable bool, shippingFields ProductCreateResponseDataShippingFields, unlimited bool, domain string, active bool, features map[string]interface{}, inStock bool, metadata ProductCreateResponseDataMetadata, slug string, successMessage map[string]interface{}, redirectUrl map[string]interface{}, splitCode map[string]interface{}, notificationEmails map[string]interface{}, minimumOrderable int32, maximumOrderable map[string]interface{}, lowStockAlert bool, stockThreshold map[string]interface{}, expiresIn map[string]interface{}, id int32, integration int32, createdAt string, updatedAt string, ) *ProductUpdateResponseData`

NewProductUpdateResponseData instantiates a new ProductUpdateResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProductUpdateResponseDataWithDefaults

`func NewProductUpdateResponseDataWithDefaults() *ProductUpdateResponseData`

NewProductUpdateResponseDataWithDefaults instantiates a new ProductUpdateResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ProductUpdateResponseData) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ProductUpdateResponseData) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ProductUpdateResponseData) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *ProductUpdateResponseData) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ProductUpdateResponseData) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ProductUpdateResponseData) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetProductCode

`func (o *ProductUpdateResponseData) GetProductCode() string`

GetProductCode returns the ProductCode field if non-nil, zero value otherwise.

### GetProductCodeOk

`func (o *ProductUpdateResponseData) GetProductCodeOk() (*string, bool)`

GetProductCodeOk returns a tuple with the ProductCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductCode

`func (o *ProductUpdateResponseData) SetProductCode(v string)`

SetProductCode sets ProductCode field to given value.


### GetPrice

`func (o *ProductUpdateResponseData) GetPrice() int32`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *ProductUpdateResponseData) GetPriceOk() (*int32, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *ProductUpdateResponseData) SetPrice(v int32)`

SetPrice sets Price field to given value.


### GetCurrency

`func (o *ProductUpdateResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *ProductUpdateResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *ProductUpdateResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetQuantity

`func (o *ProductUpdateResponseData) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *ProductUpdateResponseData) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *ProductUpdateResponseData) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.


### GetQuantitySold

`func (o *ProductUpdateResponseData) GetQuantitySold() int32`

GetQuantitySold returns the QuantitySold field if non-nil, zero value otherwise.

### GetQuantitySoldOk

`func (o *ProductUpdateResponseData) GetQuantitySoldOk() (*int32, bool)`

GetQuantitySoldOk returns a tuple with the QuantitySold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantitySold

`func (o *ProductUpdateResponseData) SetQuantitySold(v int32)`

SetQuantitySold sets QuantitySold field to given value.


### GetType

`func (o *ProductUpdateResponseData) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ProductUpdateResponseData) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ProductUpdateResponseData) SetType(v string)`

SetType sets Type field to given value.


### GetFiles

`func (o *ProductUpdateResponseData) GetFiles() []map[string]interface{}`

GetFiles returns the Files field if non-nil, zero value otherwise.

### GetFilesOk

`func (o *ProductUpdateResponseData) GetFilesOk() (*[]map[string]interface{}, bool)`

GetFilesOk returns a tuple with the Files field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiles

`func (o *ProductUpdateResponseData) SetFiles(v []map[string]interface{})`

SetFiles sets Files field to given value.


### GetFilePath

`func (o *ProductUpdateResponseData) GetFilePath() map[string]interface{}`

GetFilePath returns the FilePath field if non-nil, zero value otherwise.

### GetFilePathOk

`func (o *ProductUpdateResponseData) GetFilePathOk() (*map[string]interface{}, bool)`

GetFilePathOk returns a tuple with the FilePath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilePath

`func (o *ProductUpdateResponseData) SetFilePath(v map[string]interface{})`

SetFilePath sets FilePath field to given value.


### SetFilePathNil

`func (o *ProductUpdateResponseData) SetFilePathNil(b bool)`

 SetFilePathNil sets the value for FilePath to be an explicit nil

### UnsetFilePath
`func (o *ProductUpdateResponseData) UnsetFilePath()`

UnsetFilePath ensures that no value is present for FilePath, not even an explicit nil
### GetIsShippable

`func (o *ProductUpdateResponseData) GetIsShippable() bool`

GetIsShippable returns the IsShippable field if non-nil, zero value otherwise.

### GetIsShippableOk

`func (o *ProductUpdateResponseData) GetIsShippableOk() (*bool, bool)`

GetIsShippableOk returns a tuple with the IsShippable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsShippable

`func (o *ProductUpdateResponseData) SetIsShippable(v bool)`

SetIsShippable sets IsShippable field to given value.


### GetShippingFields

`func (o *ProductUpdateResponseData) GetShippingFields() ProductCreateResponseDataShippingFields`

GetShippingFields returns the ShippingFields field if non-nil, zero value otherwise.

### GetShippingFieldsOk

`func (o *ProductUpdateResponseData) GetShippingFieldsOk() (*ProductCreateResponseDataShippingFields, bool)`

GetShippingFieldsOk returns a tuple with the ShippingFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShippingFields

`func (o *ProductUpdateResponseData) SetShippingFields(v ProductCreateResponseDataShippingFields)`

SetShippingFields sets ShippingFields field to given value.


### GetUnlimited

`func (o *ProductUpdateResponseData) GetUnlimited() bool`

GetUnlimited returns the Unlimited field if non-nil, zero value otherwise.

### GetUnlimitedOk

`func (o *ProductUpdateResponseData) GetUnlimitedOk() (*bool, bool)`

GetUnlimitedOk returns a tuple with the Unlimited field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnlimited

`func (o *ProductUpdateResponseData) SetUnlimited(v bool)`

SetUnlimited sets Unlimited field to given value.


### GetDomain

`func (o *ProductUpdateResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *ProductUpdateResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *ProductUpdateResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetActive

`func (o *ProductUpdateResponseData) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *ProductUpdateResponseData) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *ProductUpdateResponseData) SetActive(v bool)`

SetActive sets Active field to given value.


### GetFeatures

`func (o *ProductUpdateResponseData) GetFeatures() map[string]interface{}`

GetFeatures returns the Features field if non-nil, zero value otherwise.

### GetFeaturesOk

`func (o *ProductUpdateResponseData) GetFeaturesOk() (*map[string]interface{}, bool)`

GetFeaturesOk returns a tuple with the Features field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeatures

`func (o *ProductUpdateResponseData) SetFeatures(v map[string]interface{})`

SetFeatures sets Features field to given value.


### SetFeaturesNil

`func (o *ProductUpdateResponseData) SetFeaturesNil(b bool)`

 SetFeaturesNil sets the value for Features to be an explicit nil

### UnsetFeatures
`func (o *ProductUpdateResponseData) UnsetFeatures()`

UnsetFeatures ensures that no value is present for Features, not even an explicit nil
### GetInStock

`func (o *ProductUpdateResponseData) GetInStock() bool`

GetInStock returns the InStock field if non-nil, zero value otherwise.

### GetInStockOk

`func (o *ProductUpdateResponseData) GetInStockOk() (*bool, bool)`

GetInStockOk returns a tuple with the InStock field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInStock

`func (o *ProductUpdateResponseData) SetInStock(v bool)`

SetInStock sets InStock field to given value.


### GetMetadata

`func (o *ProductUpdateResponseData) GetMetadata() ProductCreateResponseDataMetadata`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *ProductUpdateResponseData) GetMetadataOk() (*ProductCreateResponseDataMetadata, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *ProductUpdateResponseData) SetMetadata(v ProductCreateResponseDataMetadata)`

SetMetadata sets Metadata field to given value.


### GetSlug

`func (o *ProductUpdateResponseData) GetSlug() string`

GetSlug returns the Slug field if non-nil, zero value otherwise.

### GetSlugOk

`func (o *ProductUpdateResponseData) GetSlugOk() (*string, bool)`

GetSlugOk returns a tuple with the Slug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlug

`func (o *ProductUpdateResponseData) SetSlug(v string)`

SetSlug sets Slug field to given value.


### GetSuccessMessage

`func (o *ProductUpdateResponseData) GetSuccessMessage() map[string]interface{}`

GetSuccessMessage returns the SuccessMessage field if non-nil, zero value otherwise.

### GetSuccessMessageOk

`func (o *ProductUpdateResponseData) GetSuccessMessageOk() (*map[string]interface{}, bool)`

GetSuccessMessageOk returns a tuple with the SuccessMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccessMessage

`func (o *ProductUpdateResponseData) SetSuccessMessage(v map[string]interface{})`

SetSuccessMessage sets SuccessMessage field to given value.


### SetSuccessMessageNil

`func (o *ProductUpdateResponseData) SetSuccessMessageNil(b bool)`

 SetSuccessMessageNil sets the value for SuccessMessage to be an explicit nil

### UnsetSuccessMessage
`func (o *ProductUpdateResponseData) UnsetSuccessMessage()`

UnsetSuccessMessage ensures that no value is present for SuccessMessage, not even an explicit nil
### GetRedirectUrl

`func (o *ProductUpdateResponseData) GetRedirectUrl() map[string]interface{}`

GetRedirectUrl returns the RedirectUrl field if non-nil, zero value otherwise.

### GetRedirectUrlOk

`func (o *ProductUpdateResponseData) GetRedirectUrlOk() (*map[string]interface{}, bool)`

GetRedirectUrlOk returns a tuple with the RedirectUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRedirectUrl

`func (o *ProductUpdateResponseData) SetRedirectUrl(v map[string]interface{})`

SetRedirectUrl sets RedirectUrl field to given value.


### SetRedirectUrlNil

`func (o *ProductUpdateResponseData) SetRedirectUrlNil(b bool)`

 SetRedirectUrlNil sets the value for RedirectUrl to be an explicit nil

### UnsetRedirectUrl
`func (o *ProductUpdateResponseData) UnsetRedirectUrl()`

UnsetRedirectUrl ensures that no value is present for RedirectUrl, not even an explicit nil
### GetSplitCode

`func (o *ProductUpdateResponseData) GetSplitCode() map[string]interface{}`

GetSplitCode returns the SplitCode field if non-nil, zero value otherwise.

### GetSplitCodeOk

`func (o *ProductUpdateResponseData) GetSplitCodeOk() (*map[string]interface{}, bool)`

GetSplitCodeOk returns a tuple with the SplitCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplitCode

`func (o *ProductUpdateResponseData) SetSplitCode(v map[string]interface{})`

SetSplitCode sets SplitCode field to given value.


### SetSplitCodeNil

`func (o *ProductUpdateResponseData) SetSplitCodeNil(b bool)`

 SetSplitCodeNil sets the value for SplitCode to be an explicit nil

### UnsetSplitCode
`func (o *ProductUpdateResponseData) UnsetSplitCode()`

UnsetSplitCode ensures that no value is present for SplitCode, not even an explicit nil
### GetNotificationEmails

`func (o *ProductUpdateResponseData) GetNotificationEmails() map[string]interface{}`

GetNotificationEmails returns the NotificationEmails field if non-nil, zero value otherwise.

### GetNotificationEmailsOk

`func (o *ProductUpdateResponseData) GetNotificationEmailsOk() (*map[string]interface{}, bool)`

GetNotificationEmailsOk returns a tuple with the NotificationEmails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotificationEmails

`func (o *ProductUpdateResponseData) SetNotificationEmails(v map[string]interface{})`

SetNotificationEmails sets NotificationEmails field to given value.


### SetNotificationEmailsNil

`func (o *ProductUpdateResponseData) SetNotificationEmailsNil(b bool)`

 SetNotificationEmailsNil sets the value for NotificationEmails to be an explicit nil

### UnsetNotificationEmails
`func (o *ProductUpdateResponseData) UnsetNotificationEmails()`

UnsetNotificationEmails ensures that no value is present for NotificationEmails, not even an explicit nil
### GetMinimumOrderable

`func (o *ProductUpdateResponseData) GetMinimumOrderable() int32`

GetMinimumOrderable returns the MinimumOrderable field if non-nil, zero value otherwise.

### GetMinimumOrderableOk

`func (o *ProductUpdateResponseData) GetMinimumOrderableOk() (*int32, bool)`

GetMinimumOrderableOk returns a tuple with the MinimumOrderable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinimumOrderable

`func (o *ProductUpdateResponseData) SetMinimumOrderable(v int32)`

SetMinimumOrderable sets MinimumOrderable field to given value.


### GetMaximumOrderable

`func (o *ProductUpdateResponseData) GetMaximumOrderable() map[string]interface{}`

GetMaximumOrderable returns the MaximumOrderable field if non-nil, zero value otherwise.

### GetMaximumOrderableOk

`func (o *ProductUpdateResponseData) GetMaximumOrderableOk() (*map[string]interface{}, bool)`

GetMaximumOrderableOk returns a tuple with the MaximumOrderable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaximumOrderable

`func (o *ProductUpdateResponseData) SetMaximumOrderable(v map[string]interface{})`

SetMaximumOrderable sets MaximumOrderable field to given value.


### SetMaximumOrderableNil

`func (o *ProductUpdateResponseData) SetMaximumOrderableNil(b bool)`

 SetMaximumOrderableNil sets the value for MaximumOrderable to be an explicit nil

### UnsetMaximumOrderable
`func (o *ProductUpdateResponseData) UnsetMaximumOrderable()`

UnsetMaximumOrderable ensures that no value is present for MaximumOrderable, not even an explicit nil
### GetLowStockAlert

`func (o *ProductUpdateResponseData) GetLowStockAlert() bool`

GetLowStockAlert returns the LowStockAlert field if non-nil, zero value otherwise.

### GetLowStockAlertOk

`func (o *ProductUpdateResponseData) GetLowStockAlertOk() (*bool, bool)`

GetLowStockAlertOk returns a tuple with the LowStockAlert field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLowStockAlert

`func (o *ProductUpdateResponseData) SetLowStockAlert(v bool)`

SetLowStockAlert sets LowStockAlert field to given value.


### GetStockThreshold

`func (o *ProductUpdateResponseData) GetStockThreshold() map[string]interface{}`

GetStockThreshold returns the StockThreshold field if non-nil, zero value otherwise.

### GetStockThresholdOk

`func (o *ProductUpdateResponseData) GetStockThresholdOk() (*map[string]interface{}, bool)`

GetStockThresholdOk returns a tuple with the StockThreshold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStockThreshold

`func (o *ProductUpdateResponseData) SetStockThreshold(v map[string]interface{})`

SetStockThreshold sets StockThreshold field to given value.


### SetStockThresholdNil

`func (o *ProductUpdateResponseData) SetStockThresholdNil(b bool)`

 SetStockThresholdNil sets the value for StockThreshold to be an explicit nil

### UnsetStockThreshold
`func (o *ProductUpdateResponseData) UnsetStockThreshold()`

UnsetStockThreshold ensures that no value is present for StockThreshold, not even an explicit nil
### GetExpiresIn

`func (o *ProductUpdateResponseData) GetExpiresIn() map[string]interface{}`

GetExpiresIn returns the ExpiresIn field if non-nil, zero value otherwise.

### GetExpiresInOk

`func (o *ProductUpdateResponseData) GetExpiresInOk() (*map[string]interface{}, bool)`

GetExpiresInOk returns a tuple with the ExpiresIn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiresIn

`func (o *ProductUpdateResponseData) SetExpiresIn(v map[string]interface{})`

SetExpiresIn sets ExpiresIn field to given value.


### SetExpiresInNil

`func (o *ProductUpdateResponseData) SetExpiresInNil(b bool)`

 SetExpiresInNil sets the value for ExpiresIn to be an explicit nil

### UnsetExpiresIn
`func (o *ProductUpdateResponseData) UnsetExpiresIn()`

UnsetExpiresIn ensures that no value is present for ExpiresIn, not even an explicit nil
### GetId

`func (o *ProductUpdateResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ProductUpdateResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ProductUpdateResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetIntegration

`func (o *ProductUpdateResponseData) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *ProductUpdateResponseData) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *ProductUpdateResponseData) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetCreatedAt

`func (o *ProductUpdateResponseData) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *ProductUpdateResponseData) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *ProductUpdateResponseData) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *ProductUpdateResponseData) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *ProductUpdateResponseData) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *ProductUpdateResponseData) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


