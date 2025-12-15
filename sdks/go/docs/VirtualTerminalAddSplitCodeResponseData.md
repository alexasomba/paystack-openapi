# VirtualTerminalAddSplitCodeResponseData

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
**BearerSubaccount** | **interface{}** |  | 
**CreatedAt** | **string** |  | 
**UpdatedAt** | **string** |  | 
**IsDynamic** | **bool** |  | 
**Subaccounts** | [**[]SplitSubaccountsArray**](SplitSubaccountsArray.md) |  | 
**TotalSubaccounts** | **int32** |  | 

## Methods

### NewVirtualTerminalAddSplitCodeResponseData

`func NewVirtualTerminalAddSplitCodeResponseData(id int32, name string, type_ string, currency string, integration int32, domain string, splitCode string, active bool, bearerType string, bearerSubaccount interface{}, createdAt string, updatedAt string, isDynamic bool, subaccounts []SplitSubaccountsArray, totalSubaccounts int32, ) *VirtualTerminalAddSplitCodeResponseData`

NewVirtualTerminalAddSplitCodeResponseData instantiates a new VirtualTerminalAddSplitCodeResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVirtualTerminalAddSplitCodeResponseDataWithDefaults

`func NewVirtualTerminalAddSplitCodeResponseDataWithDefaults() *VirtualTerminalAddSplitCodeResponseData`

NewVirtualTerminalAddSplitCodeResponseDataWithDefaults instantiates a new VirtualTerminalAddSplitCodeResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *VirtualTerminalAddSplitCodeResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *VirtualTerminalAddSplitCodeResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *VirtualTerminalAddSplitCodeResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetName

`func (o *VirtualTerminalAddSplitCodeResponseData) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *VirtualTerminalAddSplitCodeResponseData) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *VirtualTerminalAddSplitCodeResponseData) SetName(v string)`

SetName sets Name field to given value.


### GetType

`func (o *VirtualTerminalAddSplitCodeResponseData) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *VirtualTerminalAddSplitCodeResponseData) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *VirtualTerminalAddSplitCodeResponseData) SetType(v string)`

SetType sets Type field to given value.


### GetCurrency

`func (o *VirtualTerminalAddSplitCodeResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *VirtualTerminalAddSplitCodeResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *VirtualTerminalAddSplitCodeResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetIntegration

`func (o *VirtualTerminalAddSplitCodeResponseData) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *VirtualTerminalAddSplitCodeResponseData) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *VirtualTerminalAddSplitCodeResponseData) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetDomain

`func (o *VirtualTerminalAddSplitCodeResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *VirtualTerminalAddSplitCodeResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *VirtualTerminalAddSplitCodeResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetSplitCode

`func (o *VirtualTerminalAddSplitCodeResponseData) GetSplitCode() string`

GetSplitCode returns the SplitCode field if non-nil, zero value otherwise.

### GetSplitCodeOk

`func (o *VirtualTerminalAddSplitCodeResponseData) GetSplitCodeOk() (*string, bool)`

GetSplitCodeOk returns a tuple with the SplitCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplitCode

`func (o *VirtualTerminalAddSplitCodeResponseData) SetSplitCode(v string)`

SetSplitCode sets SplitCode field to given value.


### GetActive

`func (o *VirtualTerminalAddSplitCodeResponseData) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *VirtualTerminalAddSplitCodeResponseData) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *VirtualTerminalAddSplitCodeResponseData) SetActive(v bool)`

SetActive sets Active field to given value.


### GetBearerType

`func (o *VirtualTerminalAddSplitCodeResponseData) GetBearerType() string`

GetBearerType returns the BearerType field if non-nil, zero value otherwise.

### GetBearerTypeOk

`func (o *VirtualTerminalAddSplitCodeResponseData) GetBearerTypeOk() (*string, bool)`

GetBearerTypeOk returns a tuple with the BearerType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBearerType

`func (o *VirtualTerminalAddSplitCodeResponseData) SetBearerType(v string)`

SetBearerType sets BearerType field to given value.


### GetBearerSubaccount

`func (o *VirtualTerminalAddSplitCodeResponseData) GetBearerSubaccount() interface{}`

GetBearerSubaccount returns the BearerSubaccount field if non-nil, zero value otherwise.

### GetBearerSubaccountOk

`func (o *VirtualTerminalAddSplitCodeResponseData) GetBearerSubaccountOk() (*interface{}, bool)`

GetBearerSubaccountOk returns a tuple with the BearerSubaccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBearerSubaccount

`func (o *VirtualTerminalAddSplitCodeResponseData) SetBearerSubaccount(v interface{})`

SetBearerSubaccount sets BearerSubaccount field to given value.


### SetBearerSubaccountNil

`func (o *VirtualTerminalAddSplitCodeResponseData) SetBearerSubaccountNil(b bool)`

 SetBearerSubaccountNil sets the value for BearerSubaccount to be an explicit nil

### UnsetBearerSubaccount
`func (o *VirtualTerminalAddSplitCodeResponseData) UnsetBearerSubaccount()`

UnsetBearerSubaccount ensures that no value is present for BearerSubaccount, not even an explicit nil
### GetCreatedAt

`func (o *VirtualTerminalAddSplitCodeResponseData) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *VirtualTerminalAddSplitCodeResponseData) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *VirtualTerminalAddSplitCodeResponseData) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *VirtualTerminalAddSplitCodeResponseData) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *VirtualTerminalAddSplitCodeResponseData) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *VirtualTerminalAddSplitCodeResponseData) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.


### GetIsDynamic

`func (o *VirtualTerminalAddSplitCodeResponseData) GetIsDynamic() bool`

GetIsDynamic returns the IsDynamic field if non-nil, zero value otherwise.

### GetIsDynamicOk

`func (o *VirtualTerminalAddSplitCodeResponseData) GetIsDynamicOk() (*bool, bool)`

GetIsDynamicOk returns a tuple with the IsDynamic field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsDynamic

`func (o *VirtualTerminalAddSplitCodeResponseData) SetIsDynamic(v bool)`

SetIsDynamic sets IsDynamic field to given value.


### GetSubaccounts

`func (o *VirtualTerminalAddSplitCodeResponseData) GetSubaccounts() []SplitSubaccountsArray`

GetSubaccounts returns the Subaccounts field if non-nil, zero value otherwise.

### GetSubaccountsOk

`func (o *VirtualTerminalAddSplitCodeResponseData) GetSubaccountsOk() (*[]SplitSubaccountsArray, bool)`

GetSubaccountsOk returns a tuple with the Subaccounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubaccounts

`func (o *VirtualTerminalAddSplitCodeResponseData) SetSubaccounts(v []SplitSubaccountsArray)`

SetSubaccounts sets Subaccounts field to given value.


### GetTotalSubaccounts

`func (o *VirtualTerminalAddSplitCodeResponseData) GetTotalSubaccounts() int32`

GetTotalSubaccounts returns the TotalSubaccounts field if non-nil, zero value otherwise.

### GetTotalSubaccountsOk

`func (o *VirtualTerminalAddSplitCodeResponseData) GetTotalSubaccountsOk() (*int32, bool)`

GetTotalSubaccountsOk returns a tuple with the TotalSubaccounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalSubaccounts

`func (o *VirtualTerminalAddSplitCodeResponseData) SetTotalSubaccounts(v int32)`

SetTotalSubaccounts sets TotalSubaccounts field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


