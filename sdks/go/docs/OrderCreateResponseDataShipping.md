# OrderCreateResponseDataShipping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Customer** | **int32** |  | 
**Integration** | **int32** |  | 
**Domain** | **string** |  | 
**Fees** | **int32** |  | 
**DeliveryNote** | **interface{}** |  | 
**StreetLine** | **string** |  | 
**City** | **string** |  | 
**State** | **string** |  | 
**Country** | **string** |  | 
**IsShipped** | **bool** |  | 
**DeliveryTrackingLink** | **interface{}** |  | 
**Id** | **int32** |  | 
**CreatedAt** | **string** |  | 
**UpdatedAt** | **string** |  | 

## Methods

### NewOrderCreateResponseDataShipping

`func NewOrderCreateResponseDataShipping(customer int32, integration int32, domain string, fees int32, deliveryNote interface{}, streetLine string, city string, state string, country string, isShipped bool, deliveryTrackingLink interface{}, id int32, createdAt string, updatedAt string, ) *OrderCreateResponseDataShipping`

NewOrderCreateResponseDataShipping instantiates a new OrderCreateResponseDataShipping object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrderCreateResponseDataShippingWithDefaults

`func NewOrderCreateResponseDataShippingWithDefaults() *OrderCreateResponseDataShipping`

NewOrderCreateResponseDataShippingWithDefaults instantiates a new OrderCreateResponseDataShipping object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomer

`func (o *OrderCreateResponseDataShipping) GetCustomer() int32`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *OrderCreateResponseDataShipping) GetCustomerOk() (*int32, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *OrderCreateResponseDataShipping) SetCustomer(v int32)`

SetCustomer sets Customer field to given value.


### GetIntegration

`func (o *OrderCreateResponseDataShipping) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *OrderCreateResponseDataShipping) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *OrderCreateResponseDataShipping) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetDomain

`func (o *OrderCreateResponseDataShipping) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *OrderCreateResponseDataShipping) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *OrderCreateResponseDataShipping) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetFees

`func (o *OrderCreateResponseDataShipping) GetFees() int32`

GetFees returns the Fees field if non-nil, zero value otherwise.

### GetFeesOk

`func (o *OrderCreateResponseDataShipping) GetFeesOk() (*int32, bool)`

GetFeesOk returns a tuple with the Fees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFees

`func (o *OrderCreateResponseDataShipping) SetFees(v int32)`

SetFees sets Fees field to given value.


### GetDeliveryNote

`func (o *OrderCreateResponseDataShipping) GetDeliveryNote() interface{}`

GetDeliveryNote returns the DeliveryNote field if non-nil, zero value otherwise.

### GetDeliveryNoteOk

`func (o *OrderCreateResponseDataShipping) GetDeliveryNoteOk() (*interface{}, bool)`

GetDeliveryNoteOk returns a tuple with the DeliveryNote field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveryNote

`func (o *OrderCreateResponseDataShipping) SetDeliveryNote(v interface{})`

SetDeliveryNote sets DeliveryNote field to given value.


### SetDeliveryNoteNil

`func (o *OrderCreateResponseDataShipping) SetDeliveryNoteNil(b bool)`

 SetDeliveryNoteNil sets the value for DeliveryNote to be an explicit nil

### UnsetDeliveryNote
`func (o *OrderCreateResponseDataShipping) UnsetDeliveryNote()`

UnsetDeliveryNote ensures that no value is present for DeliveryNote, not even an explicit nil
### GetStreetLine

`func (o *OrderCreateResponseDataShipping) GetStreetLine() string`

GetStreetLine returns the StreetLine field if non-nil, zero value otherwise.

### GetStreetLineOk

`func (o *OrderCreateResponseDataShipping) GetStreetLineOk() (*string, bool)`

GetStreetLineOk returns a tuple with the StreetLine field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStreetLine

`func (o *OrderCreateResponseDataShipping) SetStreetLine(v string)`

SetStreetLine sets StreetLine field to given value.


### GetCity

`func (o *OrderCreateResponseDataShipping) GetCity() string`

GetCity returns the City field if non-nil, zero value otherwise.

### GetCityOk

`func (o *OrderCreateResponseDataShipping) GetCityOk() (*string, bool)`

GetCityOk returns a tuple with the City field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCity

`func (o *OrderCreateResponseDataShipping) SetCity(v string)`

SetCity sets City field to given value.


### GetState

`func (o *OrderCreateResponseDataShipping) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *OrderCreateResponseDataShipping) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *OrderCreateResponseDataShipping) SetState(v string)`

SetState sets State field to given value.


### GetCountry

`func (o *OrderCreateResponseDataShipping) GetCountry() string`

GetCountry returns the Country field if non-nil, zero value otherwise.

### GetCountryOk

`func (o *OrderCreateResponseDataShipping) GetCountryOk() (*string, bool)`

GetCountryOk returns a tuple with the Country field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountry

`func (o *OrderCreateResponseDataShipping) SetCountry(v string)`

SetCountry sets Country field to given value.


### GetIsShipped

`func (o *OrderCreateResponseDataShipping) GetIsShipped() bool`

GetIsShipped returns the IsShipped field if non-nil, zero value otherwise.

### GetIsShippedOk

`func (o *OrderCreateResponseDataShipping) GetIsShippedOk() (*bool, bool)`

GetIsShippedOk returns a tuple with the IsShipped field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsShipped

`func (o *OrderCreateResponseDataShipping) SetIsShipped(v bool)`

SetIsShipped sets IsShipped field to given value.


### GetDeliveryTrackingLink

`func (o *OrderCreateResponseDataShipping) GetDeliveryTrackingLink() interface{}`

GetDeliveryTrackingLink returns the DeliveryTrackingLink field if non-nil, zero value otherwise.

### GetDeliveryTrackingLinkOk

`func (o *OrderCreateResponseDataShipping) GetDeliveryTrackingLinkOk() (*interface{}, bool)`

GetDeliveryTrackingLinkOk returns a tuple with the DeliveryTrackingLink field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveryTrackingLink

`func (o *OrderCreateResponseDataShipping) SetDeliveryTrackingLink(v interface{})`

SetDeliveryTrackingLink sets DeliveryTrackingLink field to given value.


### SetDeliveryTrackingLinkNil

`func (o *OrderCreateResponseDataShipping) SetDeliveryTrackingLinkNil(b bool)`

 SetDeliveryTrackingLinkNil sets the value for DeliveryTrackingLink to be an explicit nil

### UnsetDeliveryTrackingLink
`func (o *OrderCreateResponseDataShipping) UnsetDeliveryTrackingLink()`

UnsetDeliveryTrackingLink ensures that no value is present for DeliveryTrackingLink, not even an explicit nil
### GetId

`func (o *OrderCreateResponseDataShipping) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *OrderCreateResponseDataShipping) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *OrderCreateResponseDataShipping) SetId(v int32)`

SetId sets Id field to given value.


### GetCreatedAt

`func (o *OrderCreateResponseDataShipping) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *OrderCreateResponseDataShipping) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *OrderCreateResponseDataShipping) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *OrderCreateResponseDataShipping) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *OrderCreateResponseDataShipping) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *OrderCreateResponseDataShipping) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


