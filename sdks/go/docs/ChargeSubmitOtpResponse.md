# ChargeSubmitOtpResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**ChargeSubmitPinResponseData**](ChargeSubmitPinResponseData.md) |  | 

## Methods

### NewChargeSubmitOtpResponse

`func NewChargeSubmitOtpResponse(status bool, message string, data ChargeSubmitPinResponseData, ) *ChargeSubmitOtpResponse`

NewChargeSubmitOtpResponse instantiates a new ChargeSubmitOtpResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChargeSubmitOtpResponseWithDefaults

`func NewChargeSubmitOtpResponseWithDefaults() *ChargeSubmitOtpResponse`

NewChargeSubmitOtpResponseWithDefaults instantiates a new ChargeSubmitOtpResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *ChargeSubmitOtpResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ChargeSubmitOtpResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ChargeSubmitOtpResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *ChargeSubmitOtpResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ChargeSubmitOtpResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ChargeSubmitOtpResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *ChargeSubmitOtpResponse) GetData() ChargeSubmitPinResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *ChargeSubmitOtpResponse) GetDataOk() (*ChargeSubmitPinResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *ChargeSubmitOtpResponse) SetData(v ChargeSubmitPinResponseData)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


