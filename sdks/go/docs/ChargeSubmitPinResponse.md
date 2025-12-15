# ChargeSubmitPinResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**ChargeSubmitPinResponseData**](ChargeSubmitPinResponseData.md) |  | 

## Methods

### NewChargeSubmitPinResponse

`func NewChargeSubmitPinResponse(status bool, message string, data ChargeSubmitPinResponseData, ) *ChargeSubmitPinResponse`

NewChargeSubmitPinResponse instantiates a new ChargeSubmitPinResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChargeSubmitPinResponseWithDefaults

`func NewChargeSubmitPinResponseWithDefaults() *ChargeSubmitPinResponse`

NewChargeSubmitPinResponseWithDefaults instantiates a new ChargeSubmitPinResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *ChargeSubmitPinResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ChargeSubmitPinResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ChargeSubmitPinResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *ChargeSubmitPinResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ChargeSubmitPinResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ChargeSubmitPinResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *ChargeSubmitPinResponse) GetData() ChargeSubmitPinResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *ChargeSubmitPinResponse) GetDataOk() (*ChargeSubmitPinResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *ChargeSubmitPinResponse) SetData(v ChargeSubmitPinResponseData)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


