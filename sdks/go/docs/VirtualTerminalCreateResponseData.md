# VirtualTerminalCreateResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**Name** | **string** |  | 
**Integration** | **int32** |  | 
**Domain** | **string** |  | 
**Code** | **string** |  | 
**PaymentMethods** | **[]interface{}** |  | 
**Active** | **bool** |  | 
**Metadata** | **interface{}** |  | 
**Destinations** | [**[]VirtualTerminalCreateResponseDataDestinationsInner**](VirtualTerminalCreateResponseDataDestinationsInner.md) |  | 
**Currency** | **string** |  | 

## Methods

### NewVirtualTerminalCreateResponseData

`func NewVirtualTerminalCreateResponseData(id int32, name string, integration int32, domain string, code string, paymentMethods []interface{}, active bool, metadata interface{}, destinations []VirtualTerminalCreateResponseDataDestinationsInner, currency string, ) *VirtualTerminalCreateResponseData`

NewVirtualTerminalCreateResponseData instantiates a new VirtualTerminalCreateResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVirtualTerminalCreateResponseDataWithDefaults

`func NewVirtualTerminalCreateResponseDataWithDefaults() *VirtualTerminalCreateResponseData`

NewVirtualTerminalCreateResponseDataWithDefaults instantiates a new VirtualTerminalCreateResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *VirtualTerminalCreateResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *VirtualTerminalCreateResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *VirtualTerminalCreateResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetName

`func (o *VirtualTerminalCreateResponseData) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *VirtualTerminalCreateResponseData) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *VirtualTerminalCreateResponseData) SetName(v string)`

SetName sets Name field to given value.


### GetIntegration

`func (o *VirtualTerminalCreateResponseData) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *VirtualTerminalCreateResponseData) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *VirtualTerminalCreateResponseData) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetDomain

`func (o *VirtualTerminalCreateResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *VirtualTerminalCreateResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *VirtualTerminalCreateResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetCode

`func (o *VirtualTerminalCreateResponseData) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *VirtualTerminalCreateResponseData) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *VirtualTerminalCreateResponseData) SetCode(v string)`

SetCode sets Code field to given value.


### GetPaymentMethods

`func (o *VirtualTerminalCreateResponseData) GetPaymentMethods() []interface{}`

GetPaymentMethods returns the PaymentMethods field if non-nil, zero value otherwise.

### GetPaymentMethodsOk

`func (o *VirtualTerminalCreateResponseData) GetPaymentMethodsOk() (*[]interface{}, bool)`

GetPaymentMethodsOk returns a tuple with the PaymentMethods field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethods

`func (o *VirtualTerminalCreateResponseData) SetPaymentMethods(v []interface{})`

SetPaymentMethods sets PaymentMethods field to given value.


### GetActive

`func (o *VirtualTerminalCreateResponseData) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *VirtualTerminalCreateResponseData) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *VirtualTerminalCreateResponseData) SetActive(v bool)`

SetActive sets Active field to given value.


### GetMetadata

`func (o *VirtualTerminalCreateResponseData) GetMetadata() interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *VirtualTerminalCreateResponseData) GetMetadataOk() (*interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *VirtualTerminalCreateResponseData) SetMetadata(v interface{})`

SetMetadata sets Metadata field to given value.


### SetMetadataNil

`func (o *VirtualTerminalCreateResponseData) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *VirtualTerminalCreateResponseData) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil
### GetDestinations

`func (o *VirtualTerminalCreateResponseData) GetDestinations() []VirtualTerminalCreateResponseDataDestinationsInner`

GetDestinations returns the Destinations field if non-nil, zero value otherwise.

### GetDestinationsOk

`func (o *VirtualTerminalCreateResponseData) GetDestinationsOk() (*[]VirtualTerminalCreateResponseDataDestinationsInner, bool)`

GetDestinationsOk returns a tuple with the Destinations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDestinations

`func (o *VirtualTerminalCreateResponseData) SetDestinations(v []VirtualTerminalCreateResponseDataDestinationsInner)`

SetDestinations sets Destinations field to given value.


### GetCurrency

`func (o *VirtualTerminalCreateResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *VirtualTerminalCreateResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *VirtualTerminalCreateResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


