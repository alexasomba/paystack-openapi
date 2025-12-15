# ControlPanelUpdatePaymentSessionTimeoutResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**ControlPanelFetchPaymentSessionTimeoutResponseData**](ControlPanelFetchPaymentSessionTimeoutResponseData.md) |  | 

## Methods

### NewControlPanelUpdatePaymentSessionTimeoutResponse

`func NewControlPanelUpdatePaymentSessionTimeoutResponse(status bool, message string, data ControlPanelFetchPaymentSessionTimeoutResponseData, ) *ControlPanelUpdatePaymentSessionTimeoutResponse`

NewControlPanelUpdatePaymentSessionTimeoutResponse instantiates a new ControlPanelUpdatePaymentSessionTimeoutResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewControlPanelUpdatePaymentSessionTimeoutResponseWithDefaults

`func NewControlPanelUpdatePaymentSessionTimeoutResponseWithDefaults() *ControlPanelUpdatePaymentSessionTimeoutResponse`

NewControlPanelUpdatePaymentSessionTimeoutResponseWithDefaults instantiates a new ControlPanelUpdatePaymentSessionTimeoutResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *ControlPanelUpdatePaymentSessionTimeoutResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ControlPanelUpdatePaymentSessionTimeoutResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ControlPanelUpdatePaymentSessionTimeoutResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *ControlPanelUpdatePaymentSessionTimeoutResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ControlPanelUpdatePaymentSessionTimeoutResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ControlPanelUpdatePaymentSessionTimeoutResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *ControlPanelUpdatePaymentSessionTimeoutResponse) GetData() ControlPanelFetchPaymentSessionTimeoutResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *ControlPanelUpdatePaymentSessionTimeoutResponse) GetDataOk() (*ControlPanelFetchPaymentSessionTimeoutResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *ControlPanelUpdatePaymentSessionTimeoutResponse) SetData(v ControlPanelFetchPaymentSessionTimeoutResponseData)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


