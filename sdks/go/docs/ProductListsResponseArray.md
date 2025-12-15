# ProductListsResponseArray

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**Name** | **string** |  | 
**Description** | **string** |  | 
**ProductCode** | **string** |  | 
**Slug** | **string** |  | 
**Currency** | **string** |  | 
**Price** | **int32** |  | 
**Quantity** | **int32** |  | 
**QuantitySold** | **int32** |  | 
**Active** | **bool** |  | 
**Domain** | **string** |  | 
**Type** | **string** |  | 
**InStock** | **bool** |  | 
**Unlimited** | **bool** |  | 
**Metadata** | [**ProductCreateResponseDataMetadata**](ProductCreateResponseDataMetadata.md) |  | 
**Files** | **[]map[string]interface{}** |  | 
**SuccessMessage** | **map[string]interface{}** |  | 
**RedirectUrl** | **map[string]interface{}** |  | 
**SplitCode** | **map[string]interface{}** |  | 
**NotificationEmails** | **map[string]interface{}** |  | 
**MinimumOrderable** | **int32** |  | 
**MaximumOrderable** | **map[string]interface{}** |  | 
**CreatedAt** | **string** |  | 
**UpdatedAt** | **string** |  | 
**DigitalAssets** | **[]map[string]interface{}** |  | 
**VariantOptions** | **[]map[string]interface{}** |  | 
**IsShippable** | **bool** |  | 
**ShippingFields** | [**ProductCreateResponseDataShippingFields**](ProductCreateResponseDataShippingFields.md) |  | 
**Integration** | **int32** |  | 
**LowStockAlert** | **int32** |  | 

## Methods

### NewProductListsResponseArray

`func NewProductListsResponseArray(id int32, name string, description string, productCode string, slug string, currency string, price int32, quantity int32, quantitySold int32, active bool, domain string, type_ string, inStock bool, unlimited bool, metadata ProductCreateResponseDataMetadata, files []map[string]interface{}, successMessage map[string]interface{}, redirectUrl map[string]interface{}, splitCode map[string]interface{}, notificationEmails map[string]interface{}, minimumOrderable int32, maximumOrderable map[string]interface{}, createdAt string, updatedAt string, digitalAssets []map[string]interface{}, variantOptions []map[string]interface{}, isShippable bool, shippingFields ProductCreateResponseDataShippingFields, integration int32, lowStockAlert int32, ) *ProductListsResponseArray`

NewProductListsResponseArray instantiates a new ProductListsResponseArray object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProductListsResponseArrayWithDefaults

`func NewProductListsResponseArrayWithDefaults() *ProductListsResponseArray`

NewProductListsResponseArrayWithDefaults instantiates a new ProductListsResponseArray object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ProductListsResponseArray) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ProductListsResponseArray) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ProductListsResponseArray) SetId(v int32)`

SetId sets Id field to given value.


### GetName

`func (o *ProductListsResponseArray) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ProductListsResponseArray) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ProductListsResponseArray) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *ProductListsResponseArray) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ProductListsResponseArray) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ProductListsResponseArray) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetProductCode

`func (o *ProductListsResponseArray) GetProductCode() string`

GetProductCode returns the ProductCode field if non-nil, zero value otherwise.

### GetProductCodeOk

`func (o *ProductListsResponseArray) GetProductCodeOk() (*string, bool)`

GetProductCodeOk returns a tuple with the ProductCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductCode

`func (o *ProductListsResponseArray) SetProductCode(v string)`

SetProductCode sets ProductCode field to given value.


### GetSlug

`func (o *ProductListsResponseArray) GetSlug() string`

GetSlug returns the Slug field if non-nil, zero value otherwise.

### GetSlugOk

`func (o *ProductListsResponseArray) GetSlugOk() (*string, bool)`

GetSlugOk returns a tuple with the Slug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlug

`func (o *ProductListsResponseArray) SetSlug(v string)`

SetSlug sets Slug field to given value.


### GetCurrency

`func (o *ProductListsResponseArray) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *ProductListsResponseArray) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *ProductListsResponseArray) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetPrice

`func (o *ProductListsResponseArray) GetPrice() int32`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *ProductListsResponseArray) GetPriceOk() (*int32, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *ProductListsResponseArray) SetPrice(v int32)`

SetPrice sets Price field to given value.


### GetQuantity

`func (o *ProductListsResponseArray) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *ProductListsResponseArray) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *ProductListsResponseArray) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.


### GetQuantitySold

`func (o *ProductListsResponseArray) GetQuantitySold() int32`

GetQuantitySold returns the QuantitySold field if non-nil, zero value otherwise.

### GetQuantitySoldOk

`func (o *ProductListsResponseArray) GetQuantitySoldOk() (*int32, bool)`

GetQuantitySoldOk returns a tuple with the QuantitySold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantitySold

`func (o *ProductListsResponseArray) SetQuantitySold(v int32)`

SetQuantitySold sets QuantitySold field to given value.


### GetActive

`func (o *ProductListsResponseArray) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *ProductListsResponseArray) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *ProductListsResponseArray) SetActive(v bool)`

SetActive sets Active field to given value.


### GetDomain

`func (o *ProductListsResponseArray) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *ProductListsResponseArray) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *ProductListsResponseArray) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetType

`func (o *ProductListsResponseArray) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ProductListsResponseArray) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ProductListsResponseArray) SetType(v string)`

SetType sets Type field to given value.


### GetInStock

`func (o *ProductListsResponseArray) GetInStock() bool`

GetInStock returns the InStock field if non-nil, zero value otherwise.

### GetInStockOk

`func (o *ProductListsResponseArray) GetInStockOk() (*bool, bool)`

GetInStockOk returns a tuple with the InStock field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInStock

`func (o *ProductListsResponseArray) SetInStock(v bool)`

SetInStock sets InStock field to given value.


### GetUnlimited

`func (o *ProductListsResponseArray) GetUnlimited() bool`

GetUnlimited returns the Unlimited field if non-nil, zero value otherwise.

### GetUnlimitedOk

`func (o *ProductListsResponseArray) GetUnlimitedOk() (*bool, bool)`

GetUnlimitedOk returns a tuple with the Unlimited field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnlimited

`func (o *ProductListsResponseArray) SetUnlimited(v bool)`

SetUnlimited sets Unlimited field to given value.


### GetMetadata

`func (o *ProductListsResponseArray) GetMetadata() ProductCreateResponseDataMetadata`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *ProductListsResponseArray) GetMetadataOk() (*ProductCreateResponseDataMetadata, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *ProductListsResponseArray) SetMetadata(v ProductCreateResponseDataMetadata)`

SetMetadata sets Metadata field to given value.


### GetFiles

`func (o *ProductListsResponseArray) GetFiles() []map[string]interface{}`

GetFiles returns the Files field if non-nil, zero value otherwise.

### GetFilesOk

`func (o *ProductListsResponseArray) GetFilesOk() (*[]map[string]interface{}, bool)`

GetFilesOk returns a tuple with the Files field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiles

`func (o *ProductListsResponseArray) SetFiles(v []map[string]interface{})`

SetFiles sets Files field to given value.


### GetSuccessMessage

`func (o *ProductListsResponseArray) GetSuccessMessage() map[string]interface{}`

GetSuccessMessage returns the SuccessMessage field if non-nil, zero value otherwise.

### GetSuccessMessageOk

`func (o *ProductListsResponseArray) GetSuccessMessageOk() (*map[string]interface{}, bool)`

GetSuccessMessageOk returns a tuple with the SuccessMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccessMessage

`func (o *ProductListsResponseArray) SetSuccessMessage(v map[string]interface{})`

SetSuccessMessage sets SuccessMessage field to given value.


### SetSuccessMessageNil

`func (o *ProductListsResponseArray) SetSuccessMessageNil(b bool)`

 SetSuccessMessageNil sets the value for SuccessMessage to be an explicit nil

### UnsetSuccessMessage
`func (o *ProductListsResponseArray) UnsetSuccessMessage()`

UnsetSuccessMessage ensures that no value is present for SuccessMessage, not even an explicit nil
### GetRedirectUrl

`func (o *ProductListsResponseArray) GetRedirectUrl() map[string]interface{}`

GetRedirectUrl returns the RedirectUrl field if non-nil, zero value otherwise.

### GetRedirectUrlOk

`func (o *ProductListsResponseArray) GetRedirectUrlOk() (*map[string]interface{}, bool)`

GetRedirectUrlOk returns a tuple with the RedirectUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRedirectUrl

`func (o *ProductListsResponseArray) SetRedirectUrl(v map[string]interface{})`

SetRedirectUrl sets RedirectUrl field to given value.


### SetRedirectUrlNil

`func (o *ProductListsResponseArray) SetRedirectUrlNil(b bool)`

 SetRedirectUrlNil sets the value for RedirectUrl to be an explicit nil

### UnsetRedirectUrl
`func (o *ProductListsResponseArray) UnsetRedirectUrl()`

UnsetRedirectUrl ensures that no value is present for RedirectUrl, not even an explicit nil
### GetSplitCode

`func (o *ProductListsResponseArray) GetSplitCode() map[string]interface{}`

GetSplitCode returns the SplitCode field if non-nil, zero value otherwise.

### GetSplitCodeOk

`func (o *ProductListsResponseArray) GetSplitCodeOk() (*map[string]interface{}, bool)`

GetSplitCodeOk returns a tuple with the SplitCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplitCode

`func (o *ProductListsResponseArray) SetSplitCode(v map[string]interface{})`

SetSplitCode sets SplitCode field to given value.


### SetSplitCodeNil

`func (o *ProductListsResponseArray) SetSplitCodeNil(b bool)`

 SetSplitCodeNil sets the value for SplitCode to be an explicit nil

### UnsetSplitCode
`func (o *ProductListsResponseArray) UnsetSplitCode()`

UnsetSplitCode ensures that no value is present for SplitCode, not even an explicit nil
### GetNotificationEmails

`func (o *ProductListsResponseArray) GetNotificationEmails() map[string]interface{}`

GetNotificationEmails returns the NotificationEmails field if non-nil, zero value otherwise.

### GetNotificationEmailsOk

`func (o *ProductListsResponseArray) GetNotificationEmailsOk() (*map[string]interface{}, bool)`

GetNotificationEmailsOk returns a tuple with the NotificationEmails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotificationEmails

`func (o *ProductListsResponseArray) SetNotificationEmails(v map[string]interface{})`

SetNotificationEmails sets NotificationEmails field to given value.


### SetNotificationEmailsNil

`func (o *ProductListsResponseArray) SetNotificationEmailsNil(b bool)`

 SetNotificationEmailsNil sets the value for NotificationEmails to be an explicit nil

### UnsetNotificationEmails
`func (o *ProductListsResponseArray) UnsetNotificationEmails()`

UnsetNotificationEmails ensures that no value is present for NotificationEmails, not even an explicit nil
### GetMinimumOrderable

`func (o *ProductListsResponseArray) GetMinimumOrderable() int32`

GetMinimumOrderable returns the MinimumOrderable field if non-nil, zero value otherwise.

### GetMinimumOrderableOk

`func (o *ProductListsResponseArray) GetMinimumOrderableOk() (*int32, bool)`

GetMinimumOrderableOk returns a tuple with the MinimumOrderable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinimumOrderable

`func (o *ProductListsResponseArray) SetMinimumOrderable(v int32)`

SetMinimumOrderable sets MinimumOrderable field to given value.


### GetMaximumOrderable

`func (o *ProductListsResponseArray) GetMaximumOrderable() map[string]interface{}`

GetMaximumOrderable returns the MaximumOrderable field if non-nil, zero value otherwise.

### GetMaximumOrderableOk

`func (o *ProductListsResponseArray) GetMaximumOrderableOk() (*map[string]interface{}, bool)`

GetMaximumOrderableOk returns a tuple with the MaximumOrderable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaximumOrderable

`func (o *ProductListsResponseArray) SetMaximumOrderable(v map[string]interface{})`

SetMaximumOrderable sets MaximumOrderable field to given value.


### SetMaximumOrderableNil

`func (o *ProductListsResponseArray) SetMaximumOrderableNil(b bool)`

 SetMaximumOrderableNil sets the value for MaximumOrderable to be an explicit nil

### UnsetMaximumOrderable
`func (o *ProductListsResponseArray) UnsetMaximumOrderable()`

UnsetMaximumOrderable ensures that no value is present for MaximumOrderable, not even an explicit nil
### GetCreatedAt

`func (o *ProductListsResponseArray) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *ProductListsResponseArray) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *ProductListsResponseArray) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *ProductListsResponseArray) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *ProductListsResponseArray) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *ProductListsResponseArray) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.


### GetDigitalAssets

`func (o *ProductListsResponseArray) GetDigitalAssets() []map[string]interface{}`

GetDigitalAssets returns the DigitalAssets field if non-nil, zero value otherwise.

### GetDigitalAssetsOk

`func (o *ProductListsResponseArray) GetDigitalAssetsOk() (*[]map[string]interface{}, bool)`

GetDigitalAssetsOk returns a tuple with the DigitalAssets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDigitalAssets

`func (o *ProductListsResponseArray) SetDigitalAssets(v []map[string]interface{})`

SetDigitalAssets sets DigitalAssets field to given value.


### GetVariantOptions

`func (o *ProductListsResponseArray) GetVariantOptions() []map[string]interface{}`

GetVariantOptions returns the VariantOptions field if non-nil, zero value otherwise.

### GetVariantOptionsOk

`func (o *ProductListsResponseArray) GetVariantOptionsOk() (*[]map[string]interface{}, bool)`

GetVariantOptionsOk returns a tuple with the VariantOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVariantOptions

`func (o *ProductListsResponseArray) SetVariantOptions(v []map[string]interface{})`

SetVariantOptions sets VariantOptions field to given value.


### GetIsShippable

`func (o *ProductListsResponseArray) GetIsShippable() bool`

GetIsShippable returns the IsShippable field if non-nil, zero value otherwise.

### GetIsShippableOk

`func (o *ProductListsResponseArray) GetIsShippableOk() (*bool, bool)`

GetIsShippableOk returns a tuple with the IsShippable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsShippable

`func (o *ProductListsResponseArray) SetIsShippable(v bool)`

SetIsShippable sets IsShippable field to given value.


### GetShippingFields

`func (o *ProductListsResponseArray) GetShippingFields() ProductCreateResponseDataShippingFields`

GetShippingFields returns the ShippingFields field if non-nil, zero value otherwise.

### GetShippingFieldsOk

`func (o *ProductListsResponseArray) GetShippingFieldsOk() (*ProductCreateResponseDataShippingFields, bool)`

GetShippingFieldsOk returns a tuple with the ShippingFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShippingFields

`func (o *ProductListsResponseArray) SetShippingFields(v ProductCreateResponseDataShippingFields)`

SetShippingFields sets ShippingFields field to given value.


### GetIntegration

`func (o *ProductListsResponseArray) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *ProductListsResponseArray) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *ProductListsResponseArray) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetLowStockAlert

`func (o *ProductListsResponseArray) GetLowStockAlert() int32`

GetLowStockAlert returns the LowStockAlert field if non-nil, zero value otherwise.

### GetLowStockAlertOk

`func (o *ProductListsResponseArray) GetLowStockAlertOk() (*int32, bool)`

GetLowStockAlertOk returns a tuple with the LowStockAlert field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLowStockAlert

`func (o *ProductListsResponseArray) SetLowStockAlert(v int32)`

SetLowStockAlert sets LowStockAlert field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


