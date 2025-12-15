# TerminalListsResponseArray

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**SerialNumber** | **NullableString** |  | 
**DeviceMake** | **NullableString** |  | 
**TerminalId** | **string** |  | 
**Integration** | **int32** |  | 
**Domain** | **string** |  | 
**Name** | **NullableString** |  | 
**Address** | **NullableString** |  | 
**Status** | **string** |  | 

## Methods

### NewTerminalListsResponseArray

`func NewTerminalListsResponseArray(id int32, serialNumber NullableString, deviceMake NullableString, terminalId string, integration int32, domain string, name NullableString, address NullableString, status string, ) *TerminalListsResponseArray`

NewTerminalListsResponseArray instantiates a new TerminalListsResponseArray object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTerminalListsResponseArrayWithDefaults

`func NewTerminalListsResponseArrayWithDefaults() *TerminalListsResponseArray`

NewTerminalListsResponseArrayWithDefaults instantiates a new TerminalListsResponseArray object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *TerminalListsResponseArray) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *TerminalListsResponseArray) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *TerminalListsResponseArray) SetId(v int32)`

SetId sets Id field to given value.


### GetSerialNumber

`func (o *TerminalListsResponseArray) GetSerialNumber() string`

GetSerialNumber returns the SerialNumber field if non-nil, zero value otherwise.

### GetSerialNumberOk

`func (o *TerminalListsResponseArray) GetSerialNumberOk() (*string, bool)`

GetSerialNumberOk returns a tuple with the SerialNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSerialNumber

`func (o *TerminalListsResponseArray) SetSerialNumber(v string)`

SetSerialNumber sets SerialNumber field to given value.


### SetSerialNumberNil

`func (o *TerminalListsResponseArray) SetSerialNumberNil(b bool)`

 SetSerialNumberNil sets the value for SerialNumber to be an explicit nil

### UnsetSerialNumber
`func (o *TerminalListsResponseArray) UnsetSerialNumber()`

UnsetSerialNumber ensures that no value is present for SerialNumber, not even an explicit nil
### GetDeviceMake

`func (o *TerminalListsResponseArray) GetDeviceMake() string`

GetDeviceMake returns the DeviceMake field if non-nil, zero value otherwise.

### GetDeviceMakeOk

`func (o *TerminalListsResponseArray) GetDeviceMakeOk() (*string, bool)`

GetDeviceMakeOk returns a tuple with the DeviceMake field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeviceMake

`func (o *TerminalListsResponseArray) SetDeviceMake(v string)`

SetDeviceMake sets DeviceMake field to given value.


### SetDeviceMakeNil

`func (o *TerminalListsResponseArray) SetDeviceMakeNil(b bool)`

 SetDeviceMakeNil sets the value for DeviceMake to be an explicit nil

### UnsetDeviceMake
`func (o *TerminalListsResponseArray) UnsetDeviceMake()`

UnsetDeviceMake ensures that no value is present for DeviceMake, not even an explicit nil
### GetTerminalId

`func (o *TerminalListsResponseArray) GetTerminalId() string`

GetTerminalId returns the TerminalId field if non-nil, zero value otherwise.

### GetTerminalIdOk

`func (o *TerminalListsResponseArray) GetTerminalIdOk() (*string, bool)`

GetTerminalIdOk returns a tuple with the TerminalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerminalId

`func (o *TerminalListsResponseArray) SetTerminalId(v string)`

SetTerminalId sets TerminalId field to given value.


### GetIntegration

`func (o *TerminalListsResponseArray) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *TerminalListsResponseArray) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *TerminalListsResponseArray) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetDomain

`func (o *TerminalListsResponseArray) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *TerminalListsResponseArray) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *TerminalListsResponseArray) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetName

`func (o *TerminalListsResponseArray) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *TerminalListsResponseArray) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *TerminalListsResponseArray) SetName(v string)`

SetName sets Name field to given value.


### SetNameNil

`func (o *TerminalListsResponseArray) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *TerminalListsResponseArray) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetAddress

`func (o *TerminalListsResponseArray) GetAddress() string`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *TerminalListsResponseArray) GetAddressOk() (*string, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *TerminalListsResponseArray) SetAddress(v string)`

SetAddress sets Address field to given value.


### SetAddressNil

`func (o *TerminalListsResponseArray) SetAddressNil(b bool)`

 SetAddressNil sets the value for Address to be an explicit nil

### UnsetAddress
`func (o *TerminalListsResponseArray) UnsetAddress()`

UnsetAddress ensures that no value is present for Address, not even an explicit nil
### GetStatus

`func (o *TerminalListsResponseArray) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *TerminalListsResponseArray) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *TerminalListsResponseArray) SetStatus(v string)`

SetStatus sets Status field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


