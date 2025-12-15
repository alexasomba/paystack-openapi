# ProductFetchResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DigitalAssets** | **[]interface{}** |  | 
**Integration** | **int32** |  | 
**Name** | **string** |  | 
**Description** | **string** |  | 
**ProductCode** | **string** |  | 
**Price** | **int32** |  | 
**Currency** | **string** |  | 
**Quantity** | **int32** |  | 
**QuantitySold** | **interface{}** |  | 
**Type** | **string** |  | 
**Files** | **[]interface{}** |  | 
**FilePath** | **interface{}** |  | 
**IsShippable** | **bool** |  | 
**ShippingFields** | [**ProductListsResponseArrayShippingFields**](ProductListsResponseArrayShippingFields.md) |  | 
**Unlimited** | **bool** |  | 
**Domain** | **string** |  | 
**Active** | **bool** |  | 
**Features** | **interface{}** |  | 
**InStock** | **bool** |  | 
**Metadata** | [**ProductListsResponseArrayMetadata**](ProductListsResponseArrayMetadata.md) |  | 
**Slug** | **string** |  | 
**SuccessMessage** | **interface{}** |  | 
**RedirectUrl** | **interface{}** |  | 
**SplitCode** | **interface{}** |  | 
**NotificationEmails** | **interface{}** |  | 
**MinimumOrderable** | **int32** |  | 
**MaximumOrderable** | **interface{}** |  | 
**LowStockAlert** | **bool** |  | 
**StockThreshold** | **interface{}** |  | 
**ExpiresIn** | **interface{}** |  | 
**Id** | **int32** |  | 
**CreatedAt** | **string** |  | 
**UpdatedAt** | **string** |  | 

## Methods

### NewProductFetchResponseData

`func NewProductFetchResponseData(digitalAssets []interface{}, integration int32, name string, description string, productCode string, price int32, currency string, quantity int32, quantitySold interface{}, type_ string, files []interface{}, filePath interface{}, isShippable bool, shippingFields ProductListsResponseArrayShippingFields, unlimited bool, domain string, active bool, features interface{}, inStock bool, metadata ProductListsResponseArrayMetadata, slug string, successMessage interface{}, redirectUrl interface{}, splitCode interface{}, notificationEmails interface{}, minimumOrderable int32, maximumOrderable interface{}, lowStockAlert bool, stockThreshold interface{}, expiresIn interface{}, id int32, createdAt string, updatedAt string, ) *ProductFetchResponseData`

NewProductFetchResponseData instantiates a new ProductFetchResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProductFetchResponseDataWithDefaults

`func NewProductFetchResponseDataWithDefaults() *ProductFetchResponseData`

NewProductFetchResponseDataWithDefaults instantiates a new ProductFetchResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDigitalAssets

`func (o *ProductFetchResponseData) GetDigitalAssets() []interface{}`

GetDigitalAssets returns the DigitalAssets field if non-nil, zero value otherwise.

### GetDigitalAssetsOk

`func (o *ProductFetchResponseData) GetDigitalAssetsOk() (*[]interface{}, bool)`

GetDigitalAssetsOk returns a tuple with the DigitalAssets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDigitalAssets

`func (o *ProductFetchResponseData) SetDigitalAssets(v []interface{})`

SetDigitalAssets sets DigitalAssets field to given value.


### GetIntegration

`func (o *ProductFetchResponseData) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *ProductFetchResponseData) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *ProductFetchResponseData) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetName

`func (o *ProductFetchResponseData) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ProductFetchResponseData) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ProductFetchResponseData) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *ProductFetchResponseData) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ProductFetchResponseData) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ProductFetchResponseData) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetProductCode

`func (o *ProductFetchResponseData) GetProductCode() string`

GetProductCode returns the ProductCode field if non-nil, zero value otherwise.

### GetProductCodeOk

`func (o *ProductFetchResponseData) GetProductCodeOk() (*string, bool)`

GetProductCodeOk returns a tuple with the ProductCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductCode

`func (o *ProductFetchResponseData) SetProductCode(v string)`

SetProductCode sets ProductCode field to given value.


### GetPrice

`func (o *ProductFetchResponseData) GetPrice() int32`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *ProductFetchResponseData) GetPriceOk() (*int32, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *ProductFetchResponseData) SetPrice(v int32)`

SetPrice sets Price field to given value.


### GetCurrency

`func (o *ProductFetchResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *ProductFetchResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *ProductFetchResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetQuantity

`func (o *ProductFetchResponseData) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *ProductFetchResponseData) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *ProductFetchResponseData) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.


### GetQuantitySold

`func (o *ProductFetchResponseData) GetQuantitySold() interface{}`

GetQuantitySold returns the QuantitySold field if non-nil, zero value otherwise.

### GetQuantitySoldOk

`func (o *ProductFetchResponseData) GetQuantitySoldOk() (*interface{}, bool)`

GetQuantitySoldOk returns a tuple with the QuantitySold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantitySold

`func (o *ProductFetchResponseData) SetQuantitySold(v interface{})`

SetQuantitySold sets QuantitySold field to given value.


### SetQuantitySoldNil

`func (o *ProductFetchResponseData) SetQuantitySoldNil(b bool)`

 SetQuantitySoldNil sets the value for QuantitySold to be an explicit nil

### UnsetQuantitySold
`func (o *ProductFetchResponseData) UnsetQuantitySold()`

UnsetQuantitySold ensures that no value is present for QuantitySold, not even an explicit nil
### GetType

`func (o *ProductFetchResponseData) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ProductFetchResponseData) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ProductFetchResponseData) SetType(v string)`

SetType sets Type field to given value.


### GetFiles

`func (o *ProductFetchResponseData) GetFiles() []interface{}`

GetFiles returns the Files field if non-nil, zero value otherwise.

### GetFilesOk

`func (o *ProductFetchResponseData) GetFilesOk() (*[]interface{}, bool)`

GetFilesOk returns a tuple with the Files field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiles

`func (o *ProductFetchResponseData) SetFiles(v []interface{})`

SetFiles sets Files field to given value.


### GetFilePath

`func (o *ProductFetchResponseData) GetFilePath() interface{}`

GetFilePath returns the FilePath field if non-nil, zero value otherwise.

### GetFilePathOk

`func (o *ProductFetchResponseData) GetFilePathOk() (*interface{}, bool)`

GetFilePathOk returns a tuple with the FilePath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilePath

`func (o *ProductFetchResponseData) SetFilePath(v interface{})`

SetFilePath sets FilePath field to given value.


### SetFilePathNil

`func (o *ProductFetchResponseData) SetFilePathNil(b bool)`

 SetFilePathNil sets the value for FilePath to be an explicit nil

### UnsetFilePath
`func (o *ProductFetchResponseData) UnsetFilePath()`

UnsetFilePath ensures that no value is present for FilePath, not even an explicit nil
### GetIsShippable

`func (o *ProductFetchResponseData) GetIsShippable() bool`

GetIsShippable returns the IsShippable field if non-nil, zero value otherwise.

### GetIsShippableOk

`func (o *ProductFetchResponseData) GetIsShippableOk() (*bool, bool)`

GetIsShippableOk returns a tuple with the IsShippable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsShippable

`func (o *ProductFetchResponseData) SetIsShippable(v bool)`

SetIsShippable sets IsShippable field to given value.


### GetShippingFields

`func (o *ProductFetchResponseData) GetShippingFields() ProductListsResponseArrayShippingFields`

GetShippingFields returns the ShippingFields field if non-nil, zero value otherwise.

### GetShippingFieldsOk

`func (o *ProductFetchResponseData) GetShippingFieldsOk() (*ProductListsResponseArrayShippingFields, bool)`

GetShippingFieldsOk returns a tuple with the ShippingFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShippingFields

`func (o *ProductFetchResponseData) SetShippingFields(v ProductListsResponseArrayShippingFields)`

SetShippingFields sets ShippingFields field to given value.


### GetUnlimited

`func (o *ProductFetchResponseData) GetUnlimited() bool`

GetUnlimited returns the Unlimited field if non-nil, zero value otherwise.

### GetUnlimitedOk

`func (o *ProductFetchResponseData) GetUnlimitedOk() (*bool, bool)`

GetUnlimitedOk returns a tuple with the Unlimited field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnlimited

`func (o *ProductFetchResponseData) SetUnlimited(v bool)`

SetUnlimited sets Unlimited field to given value.


### GetDomain

`func (o *ProductFetchResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *ProductFetchResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *ProductFetchResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetActive

`func (o *ProductFetchResponseData) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *ProductFetchResponseData) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *ProductFetchResponseData) SetActive(v bool)`

SetActive sets Active field to given value.


### GetFeatures

`func (o *ProductFetchResponseData) GetFeatures() interface{}`

GetFeatures returns the Features field if non-nil, zero value otherwise.

### GetFeaturesOk

`func (o *ProductFetchResponseData) GetFeaturesOk() (*interface{}, bool)`

GetFeaturesOk returns a tuple with the Features field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeatures

`func (o *ProductFetchResponseData) SetFeatures(v interface{})`

SetFeatures sets Features field to given value.


### SetFeaturesNil

`func (o *ProductFetchResponseData) SetFeaturesNil(b bool)`

 SetFeaturesNil sets the value for Features to be an explicit nil

### UnsetFeatures
`func (o *ProductFetchResponseData) UnsetFeatures()`

UnsetFeatures ensures that no value is present for Features, not even an explicit nil
### GetInStock

`func (o *ProductFetchResponseData) GetInStock() bool`

GetInStock returns the InStock field if non-nil, zero value otherwise.

### GetInStockOk

`func (o *ProductFetchResponseData) GetInStockOk() (*bool, bool)`

GetInStockOk returns a tuple with the InStock field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInStock

`func (o *ProductFetchResponseData) SetInStock(v bool)`

SetInStock sets InStock field to given value.


### GetMetadata

`func (o *ProductFetchResponseData) GetMetadata() ProductListsResponseArrayMetadata`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *ProductFetchResponseData) GetMetadataOk() (*ProductListsResponseArrayMetadata, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *ProductFetchResponseData) SetMetadata(v ProductListsResponseArrayMetadata)`

SetMetadata sets Metadata field to given value.


### GetSlug

`func (o *ProductFetchResponseData) GetSlug() string`

GetSlug returns the Slug field if non-nil, zero value otherwise.

### GetSlugOk

`func (o *ProductFetchResponseData) GetSlugOk() (*string, bool)`

GetSlugOk returns a tuple with the Slug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlug

`func (o *ProductFetchResponseData) SetSlug(v string)`

SetSlug sets Slug field to given value.


### GetSuccessMessage

`func (o *ProductFetchResponseData) GetSuccessMessage() interface{}`

GetSuccessMessage returns the SuccessMessage field if non-nil, zero value otherwise.

### GetSuccessMessageOk

`func (o *ProductFetchResponseData) GetSuccessMessageOk() (*interface{}, bool)`

GetSuccessMessageOk returns a tuple with the SuccessMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccessMessage

`func (o *ProductFetchResponseData) SetSuccessMessage(v interface{})`

SetSuccessMessage sets SuccessMessage field to given value.


### SetSuccessMessageNil

`func (o *ProductFetchResponseData) SetSuccessMessageNil(b bool)`

 SetSuccessMessageNil sets the value for SuccessMessage to be an explicit nil

### UnsetSuccessMessage
`func (o *ProductFetchResponseData) UnsetSuccessMessage()`

UnsetSuccessMessage ensures that no value is present for SuccessMessage, not even an explicit nil
### GetRedirectUrl

`func (o *ProductFetchResponseData) GetRedirectUrl() interface{}`

GetRedirectUrl returns the RedirectUrl field if non-nil, zero value otherwise.

### GetRedirectUrlOk

`func (o *ProductFetchResponseData) GetRedirectUrlOk() (*interface{}, bool)`

GetRedirectUrlOk returns a tuple with the RedirectUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRedirectUrl

`func (o *ProductFetchResponseData) SetRedirectUrl(v interface{})`

SetRedirectUrl sets RedirectUrl field to given value.


### SetRedirectUrlNil

`func (o *ProductFetchResponseData) SetRedirectUrlNil(b bool)`

 SetRedirectUrlNil sets the value for RedirectUrl to be an explicit nil

### UnsetRedirectUrl
`func (o *ProductFetchResponseData) UnsetRedirectUrl()`

UnsetRedirectUrl ensures that no value is present for RedirectUrl, not even an explicit nil
### GetSplitCode

`func (o *ProductFetchResponseData) GetSplitCode() interface{}`

GetSplitCode returns the SplitCode field if non-nil, zero value otherwise.

### GetSplitCodeOk

`func (o *ProductFetchResponseData) GetSplitCodeOk() (*interface{}, bool)`

GetSplitCodeOk returns a tuple with the SplitCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplitCode

`func (o *ProductFetchResponseData) SetSplitCode(v interface{})`

SetSplitCode sets SplitCode field to given value.


### SetSplitCodeNil

`func (o *ProductFetchResponseData) SetSplitCodeNil(b bool)`

 SetSplitCodeNil sets the value for SplitCode to be an explicit nil

### UnsetSplitCode
`func (o *ProductFetchResponseData) UnsetSplitCode()`

UnsetSplitCode ensures that no value is present for SplitCode, not even an explicit nil
### GetNotificationEmails

`func (o *ProductFetchResponseData) GetNotificationEmails() interface{}`

GetNotificationEmails returns the NotificationEmails field if non-nil, zero value otherwise.

### GetNotificationEmailsOk

`func (o *ProductFetchResponseData) GetNotificationEmailsOk() (*interface{}, bool)`

GetNotificationEmailsOk returns a tuple with the NotificationEmails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotificationEmails

`func (o *ProductFetchResponseData) SetNotificationEmails(v interface{})`

SetNotificationEmails sets NotificationEmails field to given value.


### SetNotificationEmailsNil

`func (o *ProductFetchResponseData) SetNotificationEmailsNil(b bool)`

 SetNotificationEmailsNil sets the value for NotificationEmails to be an explicit nil

### UnsetNotificationEmails
`func (o *ProductFetchResponseData) UnsetNotificationEmails()`

UnsetNotificationEmails ensures that no value is present for NotificationEmails, not even an explicit nil
### GetMinimumOrderable

`func (o *ProductFetchResponseData) GetMinimumOrderable() int32`

GetMinimumOrderable returns the MinimumOrderable field if non-nil, zero value otherwise.

### GetMinimumOrderableOk

`func (o *ProductFetchResponseData) GetMinimumOrderableOk() (*int32, bool)`

GetMinimumOrderableOk returns a tuple with the MinimumOrderable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinimumOrderable

`func (o *ProductFetchResponseData) SetMinimumOrderable(v int32)`

SetMinimumOrderable sets MinimumOrderable field to given value.


### GetMaximumOrderable

`func (o *ProductFetchResponseData) GetMaximumOrderable() interface{}`

GetMaximumOrderable returns the MaximumOrderable field if non-nil, zero value otherwise.

### GetMaximumOrderableOk

`func (o *ProductFetchResponseData) GetMaximumOrderableOk() (*interface{}, bool)`

GetMaximumOrderableOk returns a tuple with the MaximumOrderable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaximumOrderable

`func (o *ProductFetchResponseData) SetMaximumOrderable(v interface{})`

SetMaximumOrderable sets MaximumOrderable field to given value.


### SetMaximumOrderableNil

`func (o *ProductFetchResponseData) SetMaximumOrderableNil(b bool)`

 SetMaximumOrderableNil sets the value for MaximumOrderable to be an explicit nil

### UnsetMaximumOrderable
`func (o *ProductFetchResponseData) UnsetMaximumOrderable()`

UnsetMaximumOrderable ensures that no value is present for MaximumOrderable, not even an explicit nil
### GetLowStockAlert

`func (o *ProductFetchResponseData) GetLowStockAlert() bool`

GetLowStockAlert returns the LowStockAlert field if non-nil, zero value otherwise.

### GetLowStockAlertOk

`func (o *ProductFetchResponseData) GetLowStockAlertOk() (*bool, bool)`

GetLowStockAlertOk returns a tuple with the LowStockAlert field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLowStockAlert

`func (o *ProductFetchResponseData) SetLowStockAlert(v bool)`

SetLowStockAlert sets LowStockAlert field to given value.


### GetStockThreshold

`func (o *ProductFetchResponseData) GetStockThreshold() interface{}`

GetStockThreshold returns the StockThreshold field if non-nil, zero value otherwise.

### GetStockThresholdOk

`func (o *ProductFetchResponseData) GetStockThresholdOk() (*interface{}, bool)`

GetStockThresholdOk returns a tuple with the StockThreshold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStockThreshold

`func (o *ProductFetchResponseData) SetStockThreshold(v interface{})`

SetStockThreshold sets StockThreshold field to given value.


### SetStockThresholdNil

`func (o *ProductFetchResponseData) SetStockThresholdNil(b bool)`

 SetStockThresholdNil sets the value for StockThreshold to be an explicit nil

### UnsetStockThreshold
`func (o *ProductFetchResponseData) UnsetStockThreshold()`

UnsetStockThreshold ensures that no value is present for StockThreshold, not even an explicit nil
### GetExpiresIn

`func (o *ProductFetchResponseData) GetExpiresIn() interface{}`

GetExpiresIn returns the ExpiresIn field if non-nil, zero value otherwise.

### GetExpiresInOk

`func (o *ProductFetchResponseData) GetExpiresInOk() (*interface{}, bool)`

GetExpiresInOk returns a tuple with the ExpiresIn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiresIn

`func (o *ProductFetchResponseData) SetExpiresIn(v interface{})`

SetExpiresIn sets ExpiresIn field to given value.


### SetExpiresInNil

`func (o *ProductFetchResponseData) SetExpiresInNil(b bool)`

 SetExpiresInNil sets the value for ExpiresIn to be an explicit nil

### UnsetExpiresIn
`func (o *ProductFetchResponseData) UnsetExpiresIn()`

UnsetExpiresIn ensures that no value is present for ExpiresIn, not even an explicit nil
### GetId

`func (o *ProductFetchResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ProductFetchResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ProductFetchResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetCreatedAt

`func (o *ProductFetchResponseData) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *ProductFetchResponseData) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *ProductFetchResponseData) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *ProductFetchResponseData) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *ProductFetchResponseData) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *ProductFetchResponseData) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


