# TerminalGetResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**SerialNumber** | **string** |  | 
**DeviceMake** | **NullableString** |  | 
**TerminalId** | **string** |  | 
**Integration** | **int32** |  | 
**Domain** | **string** |  | 
**Name** | **NullableString** |  | 
**Address** | **NullableString** |  | 
**Status** | **string** |  | 
**SplitCode** | **NullableString** |  | 

## Methods

### NewTerminalGetResponseData

`func NewTerminalGetResponseData(id int32, serialNumber string, deviceMake NullableString, terminalId string, integration int32, domain string, name NullableString, address NullableString, status string, splitCode NullableString, ) *TerminalGetResponseData`

NewTerminalGetResponseData instantiates a new TerminalGetResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTerminalGetResponseDataWithDefaults

`func NewTerminalGetResponseDataWithDefaults() *TerminalGetResponseData`

NewTerminalGetResponseDataWithDefaults instantiates a new TerminalGetResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *TerminalGetResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *TerminalGetResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *TerminalGetResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetSerialNumber

`func (o *TerminalGetResponseData) GetSerialNumber() string`

GetSerialNumber returns the SerialNumber field if non-nil, zero value otherwise.

### GetSerialNumberOk

`func (o *TerminalGetResponseData) GetSerialNumberOk() (*string, bool)`

GetSerialNumberOk returns a tuple with the SerialNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSerialNumber

`func (o *TerminalGetResponseData) SetSerialNumber(v string)`

SetSerialNumber sets SerialNumber field to given value.


### GetDeviceMake

`func (o *TerminalGetResponseData) GetDeviceMake() string`

GetDeviceMake returns the DeviceMake field if non-nil, zero value otherwise.

### GetDeviceMakeOk

`func (o *TerminalGetResponseData) GetDeviceMakeOk() (*string, bool)`

GetDeviceMakeOk returns a tuple with the DeviceMake field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeviceMake

`func (o *TerminalGetResponseData) SetDeviceMake(v string)`

SetDeviceMake sets DeviceMake field to given value.


### SetDeviceMakeNil

`func (o *TerminalGetResponseData) SetDeviceMakeNil(b bool)`

 SetDeviceMakeNil sets the value for DeviceMake to be an explicit nil

### UnsetDeviceMake
`func (o *TerminalGetResponseData) UnsetDeviceMake()`

UnsetDeviceMake ensures that no value is present for DeviceMake, not even an explicit nil
### GetTerminalId

`func (o *TerminalGetResponseData) GetTerminalId() string`

GetTerminalId returns the TerminalId field if non-nil, zero value otherwise.

### GetTerminalIdOk

`func (o *TerminalGetResponseData) GetTerminalIdOk() (*string, bool)`

GetTerminalIdOk returns a tuple with the TerminalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerminalId

`func (o *TerminalGetResponseData) SetTerminalId(v string)`

SetTerminalId sets TerminalId field to given value.


### GetIntegration

`func (o *TerminalGetResponseData) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *TerminalGetResponseData) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *TerminalGetResponseData) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetDomain

`func (o *TerminalGetResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *TerminalGetResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *TerminalGetResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetName

`func (o *TerminalGetResponseData) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *TerminalGetResponseData) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *TerminalGetResponseData) SetName(v string)`

SetName sets Name field to given value.


### SetNameNil

`func (o *TerminalGetResponseData) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *TerminalGetResponseData) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetAddress

`func (o *TerminalGetResponseData) GetAddress() string`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *TerminalGetResponseData) GetAddressOk() (*string, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *TerminalGetResponseData) SetAddress(v string)`

SetAddress sets Address field to given value.


### SetAddressNil

`func (o *TerminalGetResponseData) SetAddressNil(b bool)`

 SetAddressNil sets the value for Address to be an explicit nil

### UnsetAddress
`func (o *TerminalGetResponseData) UnsetAddress()`

UnsetAddress ensures that no value is present for Address, not even an explicit nil
### GetStatus

`func (o *TerminalGetResponseData) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *TerminalGetResponseData) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *TerminalGetResponseData) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetSplitCode

`func (o *TerminalGetResponseData) GetSplitCode() string`

GetSplitCode returns the SplitCode field if non-nil, zero value otherwise.

### GetSplitCodeOk

`func (o *TerminalGetResponseData) GetSplitCodeOk() (*string, bool)`

GetSplitCodeOk returns a tuple with the SplitCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplitCode

`func (o *TerminalGetResponseData) SetSplitCode(v string)`

SetSplitCode sets SplitCode field to given value.


### SetSplitCodeNil

`func (o *TerminalGetResponseData) SetSplitCodeNil(b bool)`

 SetSplitCodeNil sets the value for SplitCode to be an explicit nil

### UnsetSplitCode
`func (o *TerminalGetResponseData) UnsetSplitCode()`

UnsetSplitCode ensures that no value is present for SplitCode, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


