# OrderShipping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StreetLine** | **string** | The address of for the delivery | 
**City** | **string** | The city of the delivery address | 
**State** | **string** | The state of the delivery address | 
**Country** | **string** | The country of the delivery address | 
**ShippingFee** | **int32** | The cost of delivery | 
**DeliveryNote** | Pointer to **string** | Extra details to be aware of for the delivery | [optional] 

## Methods

### NewOrderShipping

`func NewOrderShipping(streetLine string, city string, state string, country string, shippingFee int32, ) *OrderShipping`

NewOrderShipping instantiates a new OrderShipping object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrderShippingWithDefaults

`func NewOrderShippingWithDefaults() *OrderShipping`

NewOrderShippingWithDefaults instantiates a new OrderShipping object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStreetLine

`func (o *OrderShipping) GetStreetLine() string`

GetStreetLine returns the StreetLine field if non-nil, zero value otherwise.

### GetStreetLineOk

`func (o *OrderShipping) GetStreetLineOk() (*string, bool)`

GetStreetLineOk returns a tuple with the StreetLine field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStreetLine

`func (o *OrderShipping) SetStreetLine(v string)`

SetStreetLine sets StreetLine field to given value.


### GetCity

`func (o *OrderShipping) GetCity() string`

GetCity returns the City field if non-nil, zero value otherwise.

### GetCityOk

`func (o *OrderShipping) GetCityOk() (*string, bool)`

GetCityOk returns a tuple with the City field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCity

`func (o *OrderShipping) SetCity(v string)`

SetCity sets City field to given value.


### GetState

`func (o *OrderShipping) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *OrderShipping) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *OrderShipping) SetState(v string)`

SetState sets State field to given value.


### GetCountry

`func (o *OrderShipping) GetCountry() string`

GetCountry returns the Country field if non-nil, zero value otherwise.

### GetCountryOk

`func (o *OrderShipping) GetCountryOk() (*string, bool)`

GetCountryOk returns a tuple with the Country field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountry

`func (o *OrderShipping) SetCountry(v string)`

SetCountry sets Country field to given value.


### GetShippingFee

`func (o *OrderShipping) GetShippingFee() int32`

GetShippingFee returns the ShippingFee field if non-nil, zero value otherwise.

### GetShippingFeeOk

`func (o *OrderShipping) GetShippingFeeOk() (*int32, bool)`

GetShippingFeeOk returns a tuple with the ShippingFee field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShippingFee

`func (o *OrderShipping) SetShippingFee(v int32)`

SetShippingFee sets ShippingFee field to given value.


### GetDeliveryNote

`func (o *OrderShipping) GetDeliveryNote() string`

GetDeliveryNote returns the DeliveryNote field if non-nil, zero value otherwise.

### GetDeliveryNoteOk

`func (o *OrderShipping) GetDeliveryNoteOk() (*string, bool)`

GetDeliveryNoteOk returns a tuple with the DeliveryNote field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveryNote

`func (o *OrderShipping) SetDeliveryNote(v string)`

SetDeliveryNote sets DeliveryNote field to given value.

### HasDeliveryNote

`func (o *OrderShipping) HasDeliveryNote() bool`

HasDeliveryNote returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


