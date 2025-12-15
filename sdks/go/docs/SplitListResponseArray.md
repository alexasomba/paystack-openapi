# SplitListResponseArray

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**Name** | **string** |  | 
**Type** | **string** |  | 
**Currency** | **string** |  | 
**Integration** | **int32** |  | 
**Domain** | **string** |  | 
**SplitCode** | **string** |  | 
**Active** | **bool** |  | 
**BearerType** | **string** |  | 
**BearerSubaccount** | **NullableInt32** |  | 
**CreatedAt** | **string** |  | 
**UpdatedAt** | **string** |  | 
**IsDynamic** | **bool** |  | 
**Subaccounts** | [**[]SplitSubaccountsArray**](SplitSubaccountsArray.md) |  | 
**TotalSubaccounts** | **int32** |  | 

## Methods

### NewSplitListResponseArray

`func NewSplitListResponseArray(id int32, name string, type_ string, currency string, integration int32, domain string, splitCode string, active bool, bearerType string, bearerSubaccount NullableInt32, createdAt string, updatedAt string, isDynamic bool, subaccounts []SplitSubaccountsArray, totalSubaccounts int32, ) *SplitListResponseArray`

NewSplitListResponseArray instantiates a new SplitListResponseArray object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSplitListResponseArrayWithDefaults

`func NewSplitListResponseArrayWithDefaults() *SplitListResponseArray`

NewSplitListResponseArrayWithDefaults instantiates a new SplitListResponseArray object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SplitListResponseArray) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SplitListResponseArray) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SplitListResponseArray) SetId(v int32)`

SetId sets Id field to given value.


### GetName

`func (o *SplitListResponseArray) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SplitListResponseArray) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SplitListResponseArray) SetName(v string)`

SetName sets Name field to given value.


### GetType

`func (o *SplitListResponseArray) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SplitListResponseArray) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SplitListResponseArray) SetType(v string)`

SetType sets Type field to given value.


### GetCurrency

`func (o *SplitListResponseArray) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *SplitListResponseArray) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *SplitListResponseArray) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetIntegration

`func (o *SplitListResponseArray) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *SplitListResponseArray) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *SplitListResponseArray) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetDomain

`func (o *SplitListResponseArray) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *SplitListResponseArray) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *SplitListResponseArray) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetSplitCode

`func (o *SplitListResponseArray) GetSplitCode() string`

GetSplitCode returns the SplitCode field if non-nil, zero value otherwise.

### GetSplitCodeOk

`func (o *SplitListResponseArray) GetSplitCodeOk() (*string, bool)`

GetSplitCodeOk returns a tuple with the SplitCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplitCode

`func (o *SplitListResponseArray) SetSplitCode(v string)`

SetSplitCode sets SplitCode field to given value.


### GetActive

`func (o *SplitListResponseArray) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *SplitListResponseArray) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *SplitListResponseArray) SetActive(v bool)`

SetActive sets Active field to given value.


### GetBearerType

`func (o *SplitListResponseArray) GetBearerType() string`

GetBearerType returns the BearerType field if non-nil, zero value otherwise.

### GetBearerTypeOk

`func (o *SplitListResponseArray) GetBearerTypeOk() (*string, bool)`

GetBearerTypeOk returns a tuple with the BearerType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBearerType

`func (o *SplitListResponseArray) SetBearerType(v string)`

SetBearerType sets BearerType field to given value.


### GetBearerSubaccount

`func (o *SplitListResponseArray) GetBearerSubaccount() int32`

GetBearerSubaccount returns the BearerSubaccount field if non-nil, zero value otherwise.

### GetBearerSubaccountOk

`func (o *SplitListResponseArray) GetBearerSubaccountOk() (*int32, bool)`

GetBearerSubaccountOk returns a tuple with the BearerSubaccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBearerSubaccount

`func (o *SplitListResponseArray) SetBearerSubaccount(v int32)`

SetBearerSubaccount sets BearerSubaccount field to given value.


### SetBearerSubaccountNil

`func (o *SplitListResponseArray) SetBearerSubaccountNil(b bool)`

 SetBearerSubaccountNil sets the value for BearerSubaccount to be an explicit nil

### UnsetBearerSubaccount
`func (o *SplitListResponseArray) UnsetBearerSubaccount()`

UnsetBearerSubaccount ensures that no value is present for BearerSubaccount, not even an explicit nil
### GetCreatedAt

`func (o *SplitListResponseArray) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *SplitListResponseArray) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *SplitListResponseArray) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *SplitListResponseArray) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *SplitListResponseArray) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *SplitListResponseArray) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.


### GetIsDynamic

`func (o *SplitListResponseArray) GetIsDynamic() bool`

GetIsDynamic returns the IsDynamic field if non-nil, zero value otherwise.

### GetIsDynamicOk

`func (o *SplitListResponseArray) GetIsDynamicOk() (*bool, bool)`

GetIsDynamicOk returns a tuple with the IsDynamic field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsDynamic

`func (o *SplitListResponseArray) SetIsDynamic(v bool)`

SetIsDynamic sets IsDynamic field to given value.


### GetSubaccounts

`func (o *SplitListResponseArray) GetSubaccounts() []SplitSubaccountsArray`

GetSubaccounts returns the Subaccounts field if non-nil, zero value otherwise.

### GetSubaccountsOk

`func (o *SplitListResponseArray) GetSubaccountsOk() (*[]SplitSubaccountsArray, bool)`

GetSubaccountsOk returns a tuple with the Subaccounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubaccounts

`func (o *SplitListResponseArray) SetSubaccounts(v []SplitSubaccountsArray)`

SetSubaccounts sets Subaccounts field to given value.


### GetTotalSubaccounts

`func (o *SplitListResponseArray) GetTotalSubaccounts() int32`

GetTotalSubaccounts returns the TotalSubaccounts field if non-nil, zero value otherwise.

### GetTotalSubaccountsOk

`func (o *SplitListResponseArray) GetTotalSubaccountsOk() (*int32, bool)`

GetTotalSubaccountsOk returns a tuple with the TotalSubaccounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalSubaccounts

`func (o *SplitListResponseArray) SetTotalSubaccounts(v int32)`

SetTotalSubaccounts sets TotalSubaccounts field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


