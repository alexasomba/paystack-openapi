# PageUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Name of page | [optional] 
**Description** | Pointer to **string** | The description of the page | [optional] 
**Amount** | Pointer to **int32** | Amount should be in the subunit of the currency | [optional] 
**Active** | Pointer to **bool** | Set to false to deactivate page url | [optional] 

## Methods

### NewPageUpdate

`func NewPageUpdate() *PageUpdate`

NewPageUpdate instantiates a new PageUpdate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPageUpdateWithDefaults

`func NewPageUpdateWithDefaults() *PageUpdate`

NewPageUpdateWithDefaults instantiates a new PageUpdate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *PageUpdate) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PageUpdate) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PageUpdate) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PageUpdate) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *PageUpdate) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *PageUpdate) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *PageUpdate) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *PageUpdate) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetAmount

`func (o *PageUpdate) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *PageUpdate) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *PageUpdate) SetAmount(v int32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *PageUpdate) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetActive

`func (o *PageUpdate) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *PageUpdate) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *PageUpdate) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *PageUpdate) HasActive() bool`

HasActive returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


