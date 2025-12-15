# TerminalSendEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | The type of event to push | [optional] 
**Action** | Pointer to **string** | The action the Terminal needs to perform. For the invoice type, the action can either be process or view.  For the transaction type, the action can either be process or print.  | [optional] 
**Data** | Pointer to [**TerminalSendEventData**](TerminalSendEventData.md) |  | [optional] 

## Methods

### NewTerminalSendEvent

`func NewTerminalSendEvent() *TerminalSendEvent`

NewTerminalSendEvent instantiates a new TerminalSendEvent object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTerminalSendEventWithDefaults

`func NewTerminalSendEventWithDefaults() *TerminalSendEvent`

NewTerminalSendEventWithDefaults instantiates a new TerminalSendEvent object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *TerminalSendEvent) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TerminalSendEvent) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TerminalSendEvent) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *TerminalSendEvent) HasType() bool`

HasType returns a boolean if a field has been set.

### GetAction

`func (o *TerminalSendEvent) GetAction() string`

GetAction returns the Action field if non-nil, zero value otherwise.

### GetActionOk

`func (o *TerminalSendEvent) GetActionOk() (*string, bool)`

GetActionOk returns a tuple with the Action field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAction

`func (o *TerminalSendEvent) SetAction(v string)`

SetAction sets Action field to given value.

### HasAction

`func (o *TerminalSendEvent) HasAction() bool`

HasAction returns a boolean if a field has been set.

### GetData

`func (o *TerminalSendEvent) GetData() TerminalSendEventData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *TerminalSendEvent) GetDataOk() (*TerminalSendEventData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *TerminalSendEvent) SetData(v TerminalSendEventData)`

SetData sets Data field to given value.

### HasData

`func (o *TerminalSendEvent) HasData() bool`

HasData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


