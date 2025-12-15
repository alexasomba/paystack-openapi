# ChargeSubmitOTP

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Otp** | **string** | Customer&#39;s OTP for ongoing transaction | 
**Reference** | **string** | The reference of the ongoing transaction | 

## Methods

### NewChargeSubmitOTP

`func NewChargeSubmitOTP(otp string, reference string, ) *ChargeSubmitOTP`

NewChargeSubmitOTP instantiates a new ChargeSubmitOTP object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChargeSubmitOTPWithDefaults

`func NewChargeSubmitOTPWithDefaults() *ChargeSubmitOTP`

NewChargeSubmitOTPWithDefaults instantiates a new ChargeSubmitOTP object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOtp

`func (o *ChargeSubmitOTP) GetOtp() string`

GetOtp returns the Otp field if non-nil, zero value otherwise.

### GetOtpOk

`func (o *ChargeSubmitOTP) GetOtpOk() (*string, bool)`

GetOtpOk returns a tuple with the Otp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOtp

`func (o *ChargeSubmitOTP) SetOtp(v string)`

SetOtp sets Otp field to given value.


### GetReference

`func (o *ChargeSubmitOTP) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *ChargeSubmitOTP) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *ChargeSubmitOTP) SetReference(v string)`

SetReference sets Reference field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


