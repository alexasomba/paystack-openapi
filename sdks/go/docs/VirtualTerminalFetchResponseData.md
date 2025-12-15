# VirtualTerminalFetchResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**Code** | **string** |  | 
**Name** | **string** |  | 
**Integration** | **int32** |  | 
**Domain** | **string** |  | 
**PaymentMethods** | **[]map[string]interface{}** |  | 
**Active** | **bool** |  | 
**CreatedAt** | **string** |  | 
**ConnectAccountId** | **map[string]interface{}** |  | 
**Destinations** | [**[]VirtualTerminalFetchResponseDataDestinationsInner**](VirtualTerminalFetchResponseDataDestinationsInner.md) |  | 
**Currency** | **string** |  | 

## Methods

### NewVirtualTerminalFetchResponseData

`func NewVirtualTerminalFetchResponseData(id int32, code string, name string, integration int32, domain string, paymentMethods []map[string]interface{}, active bool, createdAt string, connectAccountId map[string]interface{}, destinations []VirtualTerminalFetchResponseDataDestinationsInner, currency string, ) *VirtualTerminalFetchResponseData`

NewVirtualTerminalFetchResponseData instantiates a new VirtualTerminalFetchResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVirtualTerminalFetchResponseDataWithDefaults

`func NewVirtualTerminalFetchResponseDataWithDefaults() *VirtualTerminalFetchResponseData`

NewVirtualTerminalFetchResponseDataWithDefaults instantiates a new VirtualTerminalFetchResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *VirtualTerminalFetchResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *VirtualTerminalFetchResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *VirtualTerminalFetchResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetCode

`func (o *VirtualTerminalFetchResponseData) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *VirtualTerminalFetchResponseData) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *VirtualTerminalFetchResponseData) SetCode(v string)`

SetCode sets Code field to given value.


### GetName

`func (o *VirtualTerminalFetchResponseData) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *VirtualTerminalFetchResponseData) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *VirtualTerminalFetchResponseData) SetName(v string)`

SetName sets Name field to given value.


### GetIntegration

`func (o *VirtualTerminalFetchResponseData) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *VirtualTerminalFetchResponseData) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *VirtualTerminalFetchResponseData) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetDomain

`func (o *VirtualTerminalFetchResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *VirtualTerminalFetchResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *VirtualTerminalFetchResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetPaymentMethods

`func (o *VirtualTerminalFetchResponseData) GetPaymentMethods() []map[string]interface{}`

GetPaymentMethods returns the PaymentMethods field if non-nil, zero value otherwise.

### GetPaymentMethodsOk

`func (o *VirtualTerminalFetchResponseData) GetPaymentMethodsOk() (*[]map[string]interface{}, bool)`

GetPaymentMethodsOk returns a tuple with the PaymentMethods field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethods

`func (o *VirtualTerminalFetchResponseData) SetPaymentMethods(v []map[string]interface{})`

SetPaymentMethods sets PaymentMethods field to given value.


### GetActive

`func (o *VirtualTerminalFetchResponseData) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *VirtualTerminalFetchResponseData) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *VirtualTerminalFetchResponseData) SetActive(v bool)`

SetActive sets Active field to given value.


### GetCreatedAt

`func (o *VirtualTerminalFetchResponseData) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *VirtualTerminalFetchResponseData) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *VirtualTerminalFetchResponseData) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetConnectAccountId

`func (o *VirtualTerminalFetchResponseData) GetConnectAccountId() map[string]interface{}`

GetConnectAccountId returns the ConnectAccountId field if non-nil, zero value otherwise.

### GetConnectAccountIdOk

`func (o *VirtualTerminalFetchResponseData) GetConnectAccountIdOk() (*map[string]interface{}, bool)`

GetConnectAccountIdOk returns a tuple with the ConnectAccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectAccountId

`func (o *VirtualTerminalFetchResponseData) SetConnectAccountId(v map[string]interface{})`

SetConnectAccountId sets ConnectAccountId field to given value.


### SetConnectAccountIdNil

`func (o *VirtualTerminalFetchResponseData) SetConnectAccountIdNil(b bool)`

 SetConnectAccountIdNil sets the value for ConnectAccountId to be an explicit nil

### UnsetConnectAccountId
`func (o *VirtualTerminalFetchResponseData) UnsetConnectAccountId()`

UnsetConnectAccountId ensures that no value is present for ConnectAccountId, not even an explicit nil
### GetDestinations

`func (o *VirtualTerminalFetchResponseData) GetDestinations() []VirtualTerminalFetchResponseDataDestinationsInner`

GetDestinations returns the Destinations field if non-nil, zero value otherwise.

### GetDestinationsOk

`func (o *VirtualTerminalFetchResponseData) GetDestinationsOk() (*[]VirtualTerminalFetchResponseDataDestinationsInner, bool)`

GetDestinationsOk returns a tuple with the Destinations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDestinations

`func (o *VirtualTerminalFetchResponseData) SetDestinations(v []VirtualTerminalFetchResponseDataDestinationsInner)`

SetDestinations sets Destinations field to given value.


### GetCurrency

`func (o *VirtualTerminalFetchResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *VirtualTerminalFetchResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *VirtualTerminalFetchResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


