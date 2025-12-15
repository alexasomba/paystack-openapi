# VirtualTerminalCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The name of the virtual terminal | 
**Destinations** | [**[]VirtualTerminalCreateDestinationsInner**](VirtualTerminalCreateDestinationsInner.md) | Array of objects containing recipients for payment notifications for the Virtual Terminal. | 
**SplitCode** | Pointer to **string** | Split code to associate with the virtual terminal | [optional] 
**Metadata** | Pointer to **map[string]interface{}** | Additional custom data as key-value pairs | [optional] 

## Methods

### NewVirtualTerminalCreate

`func NewVirtualTerminalCreate(name string, destinations []VirtualTerminalCreateDestinationsInner, ) *VirtualTerminalCreate`

NewVirtualTerminalCreate instantiates a new VirtualTerminalCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVirtualTerminalCreateWithDefaults

`func NewVirtualTerminalCreateWithDefaults() *VirtualTerminalCreate`

NewVirtualTerminalCreateWithDefaults instantiates a new VirtualTerminalCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *VirtualTerminalCreate) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *VirtualTerminalCreate) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *VirtualTerminalCreate) SetName(v string)`

SetName sets Name field to given value.


### GetDestinations

`func (o *VirtualTerminalCreate) GetDestinations() []VirtualTerminalCreateDestinationsInner`

GetDestinations returns the Destinations field if non-nil, zero value otherwise.

### GetDestinationsOk

`func (o *VirtualTerminalCreate) GetDestinationsOk() (*[]VirtualTerminalCreateDestinationsInner, bool)`

GetDestinationsOk returns a tuple with the Destinations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDestinations

`func (o *VirtualTerminalCreate) SetDestinations(v []VirtualTerminalCreateDestinationsInner)`

SetDestinations sets Destinations field to given value.


### GetSplitCode

`func (o *VirtualTerminalCreate) GetSplitCode() string`

GetSplitCode returns the SplitCode field if non-nil, zero value otherwise.

### GetSplitCodeOk

`func (o *VirtualTerminalCreate) GetSplitCodeOk() (*string, bool)`

GetSplitCodeOk returns a tuple with the SplitCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplitCode

`func (o *VirtualTerminalCreate) SetSplitCode(v string)`

SetSplitCode sets SplitCode field to given value.

### HasSplitCode

`func (o *VirtualTerminalCreate) HasSplitCode() bool`

HasSplitCode returns a boolean if a field has been set.

### GetMetadata

`func (o *VirtualTerminalCreate) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *VirtualTerminalCreate) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *VirtualTerminalCreate) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *VirtualTerminalCreate) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


