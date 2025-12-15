# TransferFinalize

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TransferCode** | **string** | The transfer code you want to finalize | 
**Otp** | **string** | OTP sent to business phone to verify transfer | 

## Methods

### NewTransferFinalize

`func NewTransferFinalize(transferCode string, otp string, ) *TransferFinalize`

NewTransferFinalize instantiates a new TransferFinalize object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransferFinalizeWithDefaults

`func NewTransferFinalizeWithDefaults() *TransferFinalize`

NewTransferFinalizeWithDefaults instantiates a new TransferFinalize object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransferCode

`func (o *TransferFinalize) GetTransferCode() string`

GetTransferCode returns the TransferCode field if non-nil, zero value otherwise.

### GetTransferCodeOk

`func (o *TransferFinalize) GetTransferCodeOk() (*string, bool)`

GetTransferCodeOk returns a tuple with the TransferCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransferCode

`func (o *TransferFinalize) SetTransferCode(v string)`

SetTransferCode sets TransferCode field to given value.


### GetOtp

`func (o *TransferFinalize) GetOtp() string`

GetOtp returns the Otp field if non-nil, zero value otherwise.

### GetOtpOk

`func (o *TransferFinalize) GetOtpOk() (*string, bool)`

GetOtpOk returns a tuple with the Otp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOtp

`func (o *TransferFinalize) SetOtp(v string)`

SetOtp sets Otp field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


