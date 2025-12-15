# OrderItems

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Item** | **int32** | The product ID of the item | 
**Type** | **string** | The type of the item. &#x60;product&#x60; is currently the acceptable value | 
**Quantity** | **int32** | The number of items to get | 
**Amount** | **int32** | The cost of the item | 

## Methods

### NewOrderItems

`func NewOrderItems(item int32, type_ string, quantity int32, amount int32, ) *OrderItems`

NewOrderItems instantiates a new OrderItems object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrderItemsWithDefaults

`func NewOrderItemsWithDefaults() *OrderItems`

NewOrderItemsWithDefaults instantiates a new OrderItems object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItem

`func (o *OrderItems) GetItem() int32`

GetItem returns the Item field if non-nil, zero value otherwise.

### GetItemOk

`func (o *OrderItems) GetItemOk() (*int32, bool)`

GetItemOk returns a tuple with the Item field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItem

`func (o *OrderItems) SetItem(v int32)`

SetItem sets Item field to given value.


### GetType

`func (o *OrderItems) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *OrderItems) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *OrderItems) SetType(v string)`

SetType sets Type field to given value.


### GetQuantity

`func (o *OrderItems) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *OrderItems) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *OrderItems) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.


### GetAmount

`func (o *OrderItems) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *OrderItems) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *OrderItems) SetAmount(v int32)`

SetAmount sets Amount field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


