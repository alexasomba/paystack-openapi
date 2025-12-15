# TerminalSendEventData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **int64** | The invoice or transaction  ID you want to push to the Terminal | [optional] 
**Reference** | Pointer to **string** | The offline_reference from the Payment Request response | [optional] 

## Methods

### NewTerminalSendEventData

`func NewTerminalSendEventData() *TerminalSendEventData`

NewTerminalSendEventData instantiates a new TerminalSendEventData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTerminalSendEventDataWithDefaults

`func NewTerminalSendEventDataWithDefaults() *TerminalSendEventData`

NewTerminalSendEventDataWithDefaults instantiates a new TerminalSendEventData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *TerminalSendEventData) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *TerminalSendEventData) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *TerminalSendEventData) SetId(v int64)`

SetId sets Id field to given value.

### HasId

`func (o *TerminalSendEventData) HasId() bool`

HasId returns a boolean if a field has been set.

### GetReference

`func (o *TerminalSendEventData) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *TerminalSendEventData) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *TerminalSendEventData) SetReference(v string)`

SetReference sets Reference field to given value.

### HasReference

`func (o *TerminalSendEventData) HasReference() bool`

HasReference returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


