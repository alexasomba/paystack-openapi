# ProductCreateResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VariantsOptions** | **[]map[string]interface{}** |  | 
**Variants** | **[]map[string]interface{}** |  | 
**Name** | **string** |  | 
**Description** | **string** |  | 
**Currency** | **string** |  | 
**Price** | **int32** |  | 
**Quantity** | **int32** |  | 
**Type** | **string** |  | 
**IsShippable** | **bool** |  | 
**Unlimited** | **bool** |  | 
**Files** | **[]map[string]interface{}** |  | 
**ShippingFields** | [**ProductCreateResponseDataShippingFields**](ProductCreateResponseDataShippingFields.md) |  | 
**Integration** | **int32** |  | 
**Domain** | **string** |  | 
**Metadata** | [**ProductCreateResponseDataMetadata**](ProductCreateResponseDataMetadata.md) |  | 
**Slug** | **string** |  | 
**ProductCode** | **string** |  | 
**QuantitySold** | **int32** |  | 
**Active** | **bool** |  | 
**DeletedAt** | **map[string]interface{}** |  | 
**InStock** | **bool** |  | 
**MinimumOrderable** | **int32** |  | 
**MaximumOrderable** | **NullableInt32** |  | 
**RedirectUrl** | Pointer to **NullableString** |  | [optional] 
**LowStockAlert** | **bool** |  | 
**Id** | **int32** |  | 
**CreatedAt** | **string** |  | 
**UpdatedAt** | **string** |  | 

## Methods

### NewProductCreateResponseData

`func NewProductCreateResponseData(variantsOptions []map[string]interface{}, variants []map[string]interface{}, name string, description string, currency string, price int32, quantity int32, type_ string, isShippable bool, unlimited bool, files []map[string]interface{}, shippingFields ProductCreateResponseDataShippingFields, integration int32, domain string, metadata ProductCreateResponseDataMetadata, slug string, productCode string, quantitySold int32, active bool, deletedAt map[string]interface{}, inStock bool, minimumOrderable int32, maximumOrderable NullableInt32, lowStockAlert bool, id int32, createdAt string, updatedAt string, ) *ProductCreateResponseData`

NewProductCreateResponseData instantiates a new ProductCreateResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProductCreateResponseDataWithDefaults

`func NewProductCreateResponseDataWithDefaults() *ProductCreateResponseData`

NewProductCreateResponseDataWithDefaults instantiates a new ProductCreateResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetVariantsOptions

`func (o *ProductCreateResponseData) GetVariantsOptions() []map[string]interface{}`

GetVariantsOptions returns the VariantsOptions field if non-nil, zero value otherwise.

### GetVariantsOptionsOk

`func (o *ProductCreateResponseData) GetVariantsOptionsOk() (*[]map[string]interface{}, bool)`

GetVariantsOptionsOk returns a tuple with the VariantsOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVariantsOptions

`func (o *ProductCreateResponseData) SetVariantsOptions(v []map[string]interface{})`

SetVariantsOptions sets VariantsOptions field to given value.


### GetVariants

`func (o *ProductCreateResponseData) GetVariants() []map[string]interface{}`

GetVariants returns the Variants field if non-nil, zero value otherwise.

### GetVariantsOk

`func (o *ProductCreateResponseData) GetVariantsOk() (*[]map[string]interface{}, bool)`

GetVariantsOk returns a tuple with the Variants field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVariants

`func (o *ProductCreateResponseData) SetVariants(v []map[string]interface{})`

SetVariants sets Variants field to given value.


### GetName

`func (o *ProductCreateResponseData) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ProductCreateResponseData) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ProductCreateResponseData) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *ProductCreateResponseData) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ProductCreateResponseData) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ProductCreateResponseData) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetCurrency

`func (o *ProductCreateResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *ProductCreateResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *ProductCreateResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetPrice

`func (o *ProductCreateResponseData) GetPrice() int32`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *ProductCreateResponseData) GetPriceOk() (*int32, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *ProductCreateResponseData) SetPrice(v int32)`

SetPrice sets Price field to given value.


### GetQuantity

`func (o *ProductCreateResponseData) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *ProductCreateResponseData) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *ProductCreateResponseData) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.


### GetType

`func (o *ProductCreateResponseData) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ProductCreateResponseData) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ProductCreateResponseData) SetType(v string)`

SetType sets Type field to given value.


### GetIsShippable

`func (o *ProductCreateResponseData) GetIsShippable() bool`

GetIsShippable returns the IsShippable field if non-nil, zero value otherwise.

### GetIsShippableOk

`func (o *ProductCreateResponseData) GetIsShippableOk() (*bool, bool)`

GetIsShippableOk returns a tuple with the IsShippable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsShippable

`func (o *ProductCreateResponseData) SetIsShippable(v bool)`

SetIsShippable sets IsShippable field to given value.


### GetUnlimited

`func (o *ProductCreateResponseData) GetUnlimited() bool`

GetUnlimited returns the Unlimited field if non-nil, zero value otherwise.

### GetUnlimitedOk

`func (o *ProductCreateResponseData) GetUnlimitedOk() (*bool, bool)`

GetUnlimitedOk returns a tuple with the Unlimited field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnlimited

`func (o *ProductCreateResponseData) SetUnlimited(v bool)`

SetUnlimited sets Unlimited field to given value.


### GetFiles

`func (o *ProductCreateResponseData) GetFiles() []map[string]interface{}`

GetFiles returns the Files field if non-nil, zero value otherwise.

### GetFilesOk

`func (o *ProductCreateResponseData) GetFilesOk() (*[]map[string]interface{}, bool)`

GetFilesOk returns a tuple with the Files field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiles

`func (o *ProductCreateResponseData) SetFiles(v []map[string]interface{})`

SetFiles sets Files field to given value.


### GetShippingFields

`func (o *ProductCreateResponseData) GetShippingFields() ProductCreateResponseDataShippingFields`

GetShippingFields returns the ShippingFields field if non-nil, zero value otherwise.

### GetShippingFieldsOk

`func (o *ProductCreateResponseData) GetShippingFieldsOk() (*ProductCreateResponseDataShippingFields, bool)`

GetShippingFieldsOk returns a tuple with the ShippingFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShippingFields

`func (o *ProductCreateResponseData) SetShippingFields(v ProductCreateResponseDataShippingFields)`

SetShippingFields sets ShippingFields field to given value.


### GetIntegration

`func (o *ProductCreateResponseData) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *ProductCreateResponseData) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *ProductCreateResponseData) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetDomain

`func (o *ProductCreateResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *ProductCreateResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *ProductCreateResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetMetadata

`func (o *ProductCreateResponseData) GetMetadata() ProductCreateResponseDataMetadata`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *ProductCreateResponseData) GetMetadataOk() (*ProductCreateResponseDataMetadata, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *ProductCreateResponseData) SetMetadata(v ProductCreateResponseDataMetadata)`

SetMetadata sets Metadata field to given value.


### GetSlug

`func (o *ProductCreateResponseData) GetSlug() string`

GetSlug returns the Slug field if non-nil, zero value otherwise.

### GetSlugOk

`func (o *ProductCreateResponseData) GetSlugOk() (*string, bool)`

GetSlugOk returns a tuple with the Slug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlug

`func (o *ProductCreateResponseData) SetSlug(v string)`

SetSlug sets Slug field to given value.


### GetProductCode

`func (o *ProductCreateResponseData) GetProductCode() string`

GetProductCode returns the ProductCode field if non-nil, zero value otherwise.

### GetProductCodeOk

`func (o *ProductCreateResponseData) GetProductCodeOk() (*string, bool)`

GetProductCodeOk returns a tuple with the ProductCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductCode

`func (o *ProductCreateResponseData) SetProductCode(v string)`

SetProductCode sets ProductCode field to given value.


### GetQuantitySold

`func (o *ProductCreateResponseData) GetQuantitySold() int32`

GetQuantitySold returns the QuantitySold field if non-nil, zero value otherwise.

### GetQuantitySoldOk

`func (o *ProductCreateResponseData) GetQuantitySoldOk() (*int32, bool)`

GetQuantitySoldOk returns a tuple with the QuantitySold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantitySold

`func (o *ProductCreateResponseData) SetQuantitySold(v int32)`

SetQuantitySold sets QuantitySold field to given value.


### GetActive

`func (o *ProductCreateResponseData) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *ProductCreateResponseData) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *ProductCreateResponseData) SetActive(v bool)`

SetActive sets Active field to given value.


### GetDeletedAt

`func (o *ProductCreateResponseData) GetDeletedAt() map[string]interface{}`

GetDeletedAt returns the DeletedAt field if non-nil, zero value otherwise.

### GetDeletedAtOk

`func (o *ProductCreateResponseData) GetDeletedAtOk() (*map[string]interface{}, bool)`

GetDeletedAtOk returns a tuple with the DeletedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeletedAt

`func (o *ProductCreateResponseData) SetDeletedAt(v map[string]interface{})`

SetDeletedAt sets DeletedAt field to given value.


### SetDeletedAtNil

`func (o *ProductCreateResponseData) SetDeletedAtNil(b bool)`

 SetDeletedAtNil sets the value for DeletedAt to be an explicit nil

### UnsetDeletedAt
`func (o *ProductCreateResponseData) UnsetDeletedAt()`

UnsetDeletedAt ensures that no value is present for DeletedAt, not even an explicit nil
### GetInStock

`func (o *ProductCreateResponseData) GetInStock() bool`

GetInStock returns the InStock field if non-nil, zero value otherwise.

### GetInStockOk

`func (o *ProductCreateResponseData) GetInStockOk() (*bool, bool)`

GetInStockOk returns a tuple with the InStock field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInStock

`func (o *ProductCreateResponseData) SetInStock(v bool)`

SetInStock sets InStock field to given value.


### GetMinimumOrderable

`func (o *ProductCreateResponseData) GetMinimumOrderable() int32`

GetMinimumOrderable returns the MinimumOrderable field if non-nil, zero value otherwise.

### GetMinimumOrderableOk

`func (o *ProductCreateResponseData) GetMinimumOrderableOk() (*int32, bool)`

GetMinimumOrderableOk returns a tuple with the MinimumOrderable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinimumOrderable

`func (o *ProductCreateResponseData) SetMinimumOrderable(v int32)`

SetMinimumOrderable sets MinimumOrderable field to given value.


### GetMaximumOrderable

`func (o *ProductCreateResponseData) GetMaximumOrderable() int32`

GetMaximumOrderable returns the MaximumOrderable field if non-nil, zero value otherwise.

### GetMaximumOrderableOk

`func (o *ProductCreateResponseData) GetMaximumOrderableOk() (*int32, bool)`

GetMaximumOrderableOk returns a tuple with the MaximumOrderable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaximumOrderable

`func (o *ProductCreateResponseData) SetMaximumOrderable(v int32)`

SetMaximumOrderable sets MaximumOrderable field to given value.


### SetMaximumOrderableNil

`func (o *ProductCreateResponseData) SetMaximumOrderableNil(b bool)`

 SetMaximumOrderableNil sets the value for MaximumOrderable to be an explicit nil

### UnsetMaximumOrderable
`func (o *ProductCreateResponseData) UnsetMaximumOrderable()`

UnsetMaximumOrderable ensures that no value is present for MaximumOrderable, not even an explicit nil
### GetRedirectUrl

`func (o *ProductCreateResponseData) GetRedirectUrl() string`

GetRedirectUrl returns the RedirectUrl field if non-nil, zero value otherwise.

### GetRedirectUrlOk

`func (o *ProductCreateResponseData) GetRedirectUrlOk() (*string, bool)`

GetRedirectUrlOk returns a tuple with the RedirectUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRedirectUrl

`func (o *ProductCreateResponseData) SetRedirectUrl(v string)`

SetRedirectUrl sets RedirectUrl field to given value.

### HasRedirectUrl

`func (o *ProductCreateResponseData) HasRedirectUrl() bool`

HasRedirectUrl returns a boolean if a field has been set.

### SetRedirectUrlNil

`func (o *ProductCreateResponseData) SetRedirectUrlNil(b bool)`

 SetRedirectUrlNil sets the value for RedirectUrl to be an explicit nil

### UnsetRedirectUrl
`func (o *ProductCreateResponseData) UnsetRedirectUrl()`

UnsetRedirectUrl ensures that no value is present for RedirectUrl, not even an explicit nil
### GetLowStockAlert

`func (o *ProductCreateResponseData) GetLowStockAlert() bool`

GetLowStockAlert returns the LowStockAlert field if non-nil, zero value otherwise.

### GetLowStockAlertOk

`func (o *ProductCreateResponseData) GetLowStockAlertOk() (*bool, bool)`

GetLowStockAlertOk returns a tuple with the LowStockAlert field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLowStockAlert

`func (o *ProductCreateResponseData) SetLowStockAlert(v bool)`

SetLowStockAlert sets LowStockAlert field to given value.


### GetId

`func (o *ProductCreateResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ProductCreateResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ProductCreateResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetCreatedAt

`func (o *ProductCreateResponseData) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *ProductCreateResponseData) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *ProductCreateResponseData) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *ProductCreateResponseData) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *ProductCreateResponseData) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *ProductCreateResponseData) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


