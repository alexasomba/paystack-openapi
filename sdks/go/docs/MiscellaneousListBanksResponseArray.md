# MiscellaneousListBanksResponseArray

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Slug** | **string** |  | 
**Code** | **string** |  | 
**Longcode** | **string** |  | 
**Gateway** | **NullableString** |  | 
**PayWithBank** | **bool** |  | 
**SupportsTransfer** | **bool** |  | 
**AvailableForDirectDebit** | **bool** |  | 
**Active** | **bool** |  | 
**IsDeleted** | **NullableBool** |  | 
**Country** | **string** |  | 
**Currency** | **string** |  | 
**Type** | **string** |  | 
**Id** | **int32** |  | 
**CreatedAt** | **string** |  | 
**UpdatedAt** | **string** |  | 

## Methods

### NewMiscellaneousListBanksResponseArray

`func NewMiscellaneousListBanksResponseArray(name string, slug string, code string, longcode string, gateway NullableString, payWithBank bool, supportsTransfer bool, availableForDirectDebit bool, active bool, isDeleted NullableBool, country string, currency string, type_ string, id int32, createdAt string, updatedAt string, ) *MiscellaneousListBanksResponseArray`

NewMiscellaneousListBanksResponseArray instantiates a new MiscellaneousListBanksResponseArray object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMiscellaneousListBanksResponseArrayWithDefaults

`func NewMiscellaneousListBanksResponseArrayWithDefaults() *MiscellaneousListBanksResponseArray`

NewMiscellaneousListBanksResponseArrayWithDefaults instantiates a new MiscellaneousListBanksResponseArray object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *MiscellaneousListBanksResponseArray) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MiscellaneousListBanksResponseArray) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MiscellaneousListBanksResponseArray) SetName(v string)`

SetName sets Name field to given value.


### GetSlug

`func (o *MiscellaneousListBanksResponseArray) GetSlug() string`

GetSlug returns the Slug field if non-nil, zero value otherwise.

### GetSlugOk

`func (o *MiscellaneousListBanksResponseArray) GetSlugOk() (*string, bool)`

GetSlugOk returns a tuple with the Slug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlug

`func (o *MiscellaneousListBanksResponseArray) SetSlug(v string)`

SetSlug sets Slug field to given value.


### GetCode

`func (o *MiscellaneousListBanksResponseArray) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *MiscellaneousListBanksResponseArray) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *MiscellaneousListBanksResponseArray) SetCode(v string)`

SetCode sets Code field to given value.


### GetLongcode

`func (o *MiscellaneousListBanksResponseArray) GetLongcode() string`

GetLongcode returns the Longcode field if non-nil, zero value otherwise.

### GetLongcodeOk

`func (o *MiscellaneousListBanksResponseArray) GetLongcodeOk() (*string, bool)`

GetLongcodeOk returns a tuple with the Longcode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLongcode

`func (o *MiscellaneousListBanksResponseArray) SetLongcode(v string)`

SetLongcode sets Longcode field to given value.


### GetGateway

`func (o *MiscellaneousListBanksResponseArray) GetGateway() string`

GetGateway returns the Gateway field if non-nil, zero value otherwise.

### GetGatewayOk

`func (o *MiscellaneousListBanksResponseArray) GetGatewayOk() (*string, bool)`

GetGatewayOk returns a tuple with the Gateway field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGateway

`func (o *MiscellaneousListBanksResponseArray) SetGateway(v string)`

SetGateway sets Gateway field to given value.


### SetGatewayNil

`func (o *MiscellaneousListBanksResponseArray) SetGatewayNil(b bool)`

 SetGatewayNil sets the value for Gateway to be an explicit nil

### UnsetGateway
`func (o *MiscellaneousListBanksResponseArray) UnsetGateway()`

UnsetGateway ensures that no value is present for Gateway, not even an explicit nil
### GetPayWithBank

`func (o *MiscellaneousListBanksResponseArray) GetPayWithBank() bool`

GetPayWithBank returns the PayWithBank field if non-nil, zero value otherwise.

### GetPayWithBankOk

`func (o *MiscellaneousListBanksResponseArray) GetPayWithBankOk() (*bool, bool)`

GetPayWithBankOk returns a tuple with the PayWithBank field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayWithBank

`func (o *MiscellaneousListBanksResponseArray) SetPayWithBank(v bool)`

SetPayWithBank sets PayWithBank field to given value.


### GetSupportsTransfer

`func (o *MiscellaneousListBanksResponseArray) GetSupportsTransfer() bool`

GetSupportsTransfer returns the SupportsTransfer field if non-nil, zero value otherwise.

### GetSupportsTransferOk

`func (o *MiscellaneousListBanksResponseArray) GetSupportsTransferOk() (*bool, bool)`

GetSupportsTransferOk returns a tuple with the SupportsTransfer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupportsTransfer

`func (o *MiscellaneousListBanksResponseArray) SetSupportsTransfer(v bool)`

SetSupportsTransfer sets SupportsTransfer field to given value.


### GetAvailableForDirectDebit

`func (o *MiscellaneousListBanksResponseArray) GetAvailableForDirectDebit() bool`

GetAvailableForDirectDebit returns the AvailableForDirectDebit field if non-nil, zero value otherwise.

### GetAvailableForDirectDebitOk

`func (o *MiscellaneousListBanksResponseArray) GetAvailableForDirectDebitOk() (*bool, bool)`

GetAvailableForDirectDebitOk returns a tuple with the AvailableForDirectDebit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvailableForDirectDebit

`func (o *MiscellaneousListBanksResponseArray) SetAvailableForDirectDebit(v bool)`

SetAvailableForDirectDebit sets AvailableForDirectDebit field to given value.


### GetActive

`func (o *MiscellaneousListBanksResponseArray) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *MiscellaneousListBanksResponseArray) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *MiscellaneousListBanksResponseArray) SetActive(v bool)`

SetActive sets Active field to given value.


### GetIsDeleted

`func (o *MiscellaneousListBanksResponseArray) GetIsDeleted() bool`

GetIsDeleted returns the IsDeleted field if non-nil, zero value otherwise.

### GetIsDeletedOk

`func (o *MiscellaneousListBanksResponseArray) GetIsDeletedOk() (*bool, bool)`

GetIsDeletedOk returns a tuple with the IsDeleted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsDeleted

`func (o *MiscellaneousListBanksResponseArray) SetIsDeleted(v bool)`

SetIsDeleted sets IsDeleted field to given value.


### SetIsDeletedNil

`func (o *MiscellaneousListBanksResponseArray) SetIsDeletedNil(b bool)`

 SetIsDeletedNil sets the value for IsDeleted to be an explicit nil

### UnsetIsDeleted
`func (o *MiscellaneousListBanksResponseArray) UnsetIsDeleted()`

UnsetIsDeleted ensures that no value is present for IsDeleted, not even an explicit nil
### GetCountry

`func (o *MiscellaneousListBanksResponseArray) GetCountry() string`

GetCountry returns the Country field if non-nil, zero value otherwise.

### GetCountryOk

`func (o *MiscellaneousListBanksResponseArray) GetCountryOk() (*string, bool)`

GetCountryOk returns a tuple with the Country field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountry

`func (o *MiscellaneousListBanksResponseArray) SetCountry(v string)`

SetCountry sets Country field to given value.


### GetCurrency

`func (o *MiscellaneousListBanksResponseArray) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *MiscellaneousListBanksResponseArray) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *MiscellaneousListBanksResponseArray) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetType

`func (o *MiscellaneousListBanksResponseArray) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *MiscellaneousListBanksResponseArray) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *MiscellaneousListBanksResponseArray) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *MiscellaneousListBanksResponseArray) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *MiscellaneousListBanksResponseArray) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *MiscellaneousListBanksResponseArray) SetId(v int32)`

SetId sets Id field to given value.


### GetCreatedAt

`func (o *MiscellaneousListBanksResponseArray) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *MiscellaneousListBanksResponseArray) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *MiscellaneousListBanksResponseArray) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *MiscellaneousListBanksResponseArray) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *MiscellaneousListBanksResponseArray) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *MiscellaneousListBanksResponseArray) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


