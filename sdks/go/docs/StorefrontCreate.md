# StorefrontCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the storefront | 
**Slug** | **string** | A unique identifier to access your store. Once the storefront is created, it can be accessed from https://paystack.shop/your-slug  | 
**Currency** | **string** | Currency for prices of products in your storefront. | 
**Description** | Pointer to **string** | The description of the storefront | [optional] 

## Methods

### NewStorefrontCreate

`func NewStorefrontCreate(name string, slug string, currency string, ) *StorefrontCreate`

NewStorefrontCreate instantiates a new StorefrontCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStorefrontCreateWithDefaults

`func NewStorefrontCreateWithDefaults() *StorefrontCreate`

NewStorefrontCreateWithDefaults instantiates a new StorefrontCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *StorefrontCreate) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *StorefrontCreate) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *StorefrontCreate) SetName(v string)`

SetName sets Name field to given value.


### GetSlug

`func (o *StorefrontCreate) GetSlug() string`

GetSlug returns the Slug field if non-nil, zero value otherwise.

### GetSlugOk

`func (o *StorefrontCreate) GetSlugOk() (*string, bool)`

GetSlugOk returns a tuple with the Slug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlug

`func (o *StorefrontCreate) SetSlug(v string)`

SetSlug sets Slug field to given value.


### GetCurrency

`func (o *StorefrontCreate) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *StorefrontCreate) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *StorefrontCreate) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetDescription

`func (o *StorefrontCreate) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *StorefrontCreate) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *StorefrontCreate) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *StorefrontCreate) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


