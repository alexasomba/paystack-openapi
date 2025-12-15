# StorefrontCreateResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SocialMedia** | **[]map[string]interface{}** |  | 
**Contacts** | [**[]StorefrontContactsArray**](StorefrontContactsArray.md) |  | 
**Name** | **string** |  | 
**Slug** | **string** |  | 
**Currency** | **string** |  | 
**WelcomeMessage** | **map[string]interface{}** |  | 
**SuccessMessage** | **map[string]interface{}** |  | 
**RedirectUrl** | **map[string]interface{}** |  | 
**Description** | **map[string]interface{}** |  | 
**DeliveryNote** | **string** |  | 
**BackgroundColor** | **string** |  | 
**Status** | **string** |  | 
**Shippable** | **bool** |  | 
**Integration** | **int32** |  | 
**Domain** | **string** |  | 
**DigitalProductExpiry** | **map[string]interface{}** |  | 
**Metadata** | Pointer to **map[string]interface{}** |  | [optional] 
**Id** | **int32** |  | 
**CreatedAt** | **string** |  | 
**UpdatedAt** | **string** |  | 
**Products** | **[]map[string]interface{}** |  | 
**ShippingFees** | **[]map[string]interface{}** |  | 

## Methods

### NewStorefrontCreateResponseData

`func NewStorefrontCreateResponseData(socialMedia []map[string]interface{}, contacts []StorefrontContactsArray, name string, slug string, currency string, welcomeMessage map[string]interface{}, successMessage map[string]interface{}, redirectUrl map[string]interface{}, description map[string]interface{}, deliveryNote string, backgroundColor string, status string, shippable bool, integration int32, domain string, digitalProductExpiry map[string]interface{}, id int32, createdAt string, updatedAt string, products []map[string]interface{}, shippingFees []map[string]interface{}, ) *StorefrontCreateResponseData`

NewStorefrontCreateResponseData instantiates a new StorefrontCreateResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStorefrontCreateResponseDataWithDefaults

`func NewStorefrontCreateResponseDataWithDefaults() *StorefrontCreateResponseData`

NewStorefrontCreateResponseDataWithDefaults instantiates a new StorefrontCreateResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSocialMedia

`func (o *StorefrontCreateResponseData) GetSocialMedia() []map[string]interface{}`

GetSocialMedia returns the SocialMedia field if non-nil, zero value otherwise.

### GetSocialMediaOk

`func (o *StorefrontCreateResponseData) GetSocialMediaOk() (*[]map[string]interface{}, bool)`

GetSocialMediaOk returns a tuple with the SocialMedia field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSocialMedia

`func (o *StorefrontCreateResponseData) SetSocialMedia(v []map[string]interface{})`

SetSocialMedia sets SocialMedia field to given value.


### GetContacts

`func (o *StorefrontCreateResponseData) GetContacts() []StorefrontContactsArray`

GetContacts returns the Contacts field if non-nil, zero value otherwise.

### GetContactsOk

`func (o *StorefrontCreateResponseData) GetContactsOk() (*[]StorefrontContactsArray, bool)`

GetContactsOk returns a tuple with the Contacts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContacts

`func (o *StorefrontCreateResponseData) SetContacts(v []StorefrontContactsArray)`

SetContacts sets Contacts field to given value.


### GetName

`func (o *StorefrontCreateResponseData) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *StorefrontCreateResponseData) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *StorefrontCreateResponseData) SetName(v string)`

SetName sets Name field to given value.


### GetSlug

`func (o *StorefrontCreateResponseData) GetSlug() string`

GetSlug returns the Slug field if non-nil, zero value otherwise.

### GetSlugOk

`func (o *StorefrontCreateResponseData) GetSlugOk() (*string, bool)`

GetSlugOk returns a tuple with the Slug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlug

`func (o *StorefrontCreateResponseData) SetSlug(v string)`

SetSlug sets Slug field to given value.


### GetCurrency

`func (o *StorefrontCreateResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *StorefrontCreateResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *StorefrontCreateResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetWelcomeMessage

`func (o *StorefrontCreateResponseData) GetWelcomeMessage() map[string]interface{}`

GetWelcomeMessage returns the WelcomeMessage field if non-nil, zero value otherwise.

### GetWelcomeMessageOk

`func (o *StorefrontCreateResponseData) GetWelcomeMessageOk() (*map[string]interface{}, bool)`

GetWelcomeMessageOk returns a tuple with the WelcomeMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWelcomeMessage

`func (o *StorefrontCreateResponseData) SetWelcomeMessage(v map[string]interface{})`

SetWelcomeMessage sets WelcomeMessage field to given value.


### SetWelcomeMessageNil

`func (o *StorefrontCreateResponseData) SetWelcomeMessageNil(b bool)`

 SetWelcomeMessageNil sets the value for WelcomeMessage to be an explicit nil

### UnsetWelcomeMessage
`func (o *StorefrontCreateResponseData) UnsetWelcomeMessage()`

UnsetWelcomeMessage ensures that no value is present for WelcomeMessage, not even an explicit nil
### GetSuccessMessage

`func (o *StorefrontCreateResponseData) GetSuccessMessage() map[string]interface{}`

GetSuccessMessage returns the SuccessMessage field if non-nil, zero value otherwise.

### GetSuccessMessageOk

`func (o *StorefrontCreateResponseData) GetSuccessMessageOk() (*map[string]interface{}, bool)`

GetSuccessMessageOk returns a tuple with the SuccessMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccessMessage

`func (o *StorefrontCreateResponseData) SetSuccessMessage(v map[string]interface{})`

SetSuccessMessage sets SuccessMessage field to given value.


### SetSuccessMessageNil

`func (o *StorefrontCreateResponseData) SetSuccessMessageNil(b bool)`

 SetSuccessMessageNil sets the value for SuccessMessage to be an explicit nil

### UnsetSuccessMessage
`func (o *StorefrontCreateResponseData) UnsetSuccessMessage()`

UnsetSuccessMessage ensures that no value is present for SuccessMessage, not even an explicit nil
### GetRedirectUrl

`func (o *StorefrontCreateResponseData) GetRedirectUrl() map[string]interface{}`

GetRedirectUrl returns the RedirectUrl field if non-nil, zero value otherwise.

### GetRedirectUrlOk

`func (o *StorefrontCreateResponseData) GetRedirectUrlOk() (*map[string]interface{}, bool)`

GetRedirectUrlOk returns a tuple with the RedirectUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRedirectUrl

`func (o *StorefrontCreateResponseData) SetRedirectUrl(v map[string]interface{})`

SetRedirectUrl sets RedirectUrl field to given value.


### SetRedirectUrlNil

`func (o *StorefrontCreateResponseData) SetRedirectUrlNil(b bool)`

 SetRedirectUrlNil sets the value for RedirectUrl to be an explicit nil

### UnsetRedirectUrl
`func (o *StorefrontCreateResponseData) UnsetRedirectUrl()`

UnsetRedirectUrl ensures that no value is present for RedirectUrl, not even an explicit nil
### GetDescription

`func (o *StorefrontCreateResponseData) GetDescription() map[string]interface{}`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *StorefrontCreateResponseData) GetDescriptionOk() (*map[string]interface{}, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *StorefrontCreateResponseData) SetDescription(v map[string]interface{})`

SetDescription sets Description field to given value.


### SetDescriptionNil

`func (o *StorefrontCreateResponseData) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *StorefrontCreateResponseData) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetDeliveryNote

`func (o *StorefrontCreateResponseData) GetDeliveryNote() string`

GetDeliveryNote returns the DeliveryNote field if non-nil, zero value otherwise.

### GetDeliveryNoteOk

`func (o *StorefrontCreateResponseData) GetDeliveryNoteOk() (*string, bool)`

GetDeliveryNoteOk returns a tuple with the DeliveryNote field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveryNote

`func (o *StorefrontCreateResponseData) SetDeliveryNote(v string)`

SetDeliveryNote sets DeliveryNote field to given value.


### GetBackgroundColor

`func (o *StorefrontCreateResponseData) GetBackgroundColor() string`

GetBackgroundColor returns the BackgroundColor field if non-nil, zero value otherwise.

### GetBackgroundColorOk

`func (o *StorefrontCreateResponseData) GetBackgroundColorOk() (*string, bool)`

GetBackgroundColorOk returns a tuple with the BackgroundColor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackgroundColor

`func (o *StorefrontCreateResponseData) SetBackgroundColor(v string)`

SetBackgroundColor sets BackgroundColor field to given value.


### GetStatus

`func (o *StorefrontCreateResponseData) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *StorefrontCreateResponseData) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *StorefrontCreateResponseData) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetShippable

`func (o *StorefrontCreateResponseData) GetShippable() bool`

GetShippable returns the Shippable field if non-nil, zero value otherwise.

### GetShippableOk

`func (o *StorefrontCreateResponseData) GetShippableOk() (*bool, bool)`

GetShippableOk returns a tuple with the Shippable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShippable

`func (o *StorefrontCreateResponseData) SetShippable(v bool)`

SetShippable sets Shippable field to given value.


### GetIntegration

`func (o *StorefrontCreateResponseData) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *StorefrontCreateResponseData) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *StorefrontCreateResponseData) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetDomain

`func (o *StorefrontCreateResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *StorefrontCreateResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *StorefrontCreateResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetDigitalProductExpiry

`func (o *StorefrontCreateResponseData) GetDigitalProductExpiry() map[string]interface{}`

GetDigitalProductExpiry returns the DigitalProductExpiry field if non-nil, zero value otherwise.

### GetDigitalProductExpiryOk

`func (o *StorefrontCreateResponseData) GetDigitalProductExpiryOk() (*map[string]interface{}, bool)`

GetDigitalProductExpiryOk returns a tuple with the DigitalProductExpiry field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDigitalProductExpiry

`func (o *StorefrontCreateResponseData) SetDigitalProductExpiry(v map[string]interface{})`

SetDigitalProductExpiry sets DigitalProductExpiry field to given value.


### SetDigitalProductExpiryNil

`func (o *StorefrontCreateResponseData) SetDigitalProductExpiryNil(b bool)`

 SetDigitalProductExpiryNil sets the value for DigitalProductExpiry to be an explicit nil

### UnsetDigitalProductExpiry
`func (o *StorefrontCreateResponseData) UnsetDigitalProductExpiry()`

UnsetDigitalProductExpiry ensures that no value is present for DigitalProductExpiry, not even an explicit nil
### GetMetadata

`func (o *StorefrontCreateResponseData) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *StorefrontCreateResponseData) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *StorefrontCreateResponseData) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *StorefrontCreateResponseData) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### SetMetadataNil

`func (o *StorefrontCreateResponseData) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *StorefrontCreateResponseData) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil
### GetId

`func (o *StorefrontCreateResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *StorefrontCreateResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *StorefrontCreateResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetCreatedAt

`func (o *StorefrontCreateResponseData) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *StorefrontCreateResponseData) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *StorefrontCreateResponseData) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *StorefrontCreateResponseData) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *StorefrontCreateResponseData) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *StorefrontCreateResponseData) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.


### GetProducts

`func (o *StorefrontCreateResponseData) GetProducts() []map[string]interface{}`

GetProducts returns the Products field if non-nil, zero value otherwise.

### GetProductsOk

`func (o *StorefrontCreateResponseData) GetProductsOk() (*[]map[string]interface{}, bool)`

GetProductsOk returns a tuple with the Products field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProducts

`func (o *StorefrontCreateResponseData) SetProducts(v []map[string]interface{})`

SetProducts sets Products field to given value.


### GetShippingFees

`func (o *StorefrontCreateResponseData) GetShippingFees() []map[string]interface{}`

GetShippingFees returns the ShippingFees field if non-nil, zero value otherwise.

### GetShippingFeesOk

`func (o *StorefrontCreateResponseData) GetShippingFeesOk() (*[]map[string]interface{}, bool)`

GetShippingFeesOk returns a tuple with the ShippingFees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShippingFees

`func (o *StorefrontCreateResponseData) SetShippingFees(v []map[string]interface{})`

SetShippingFees sets ShippingFees field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


