# TransferResendOTP

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TransferCode** | **string** | The transfer code that requires an OTP validation | 
**Reason** | **string** | Specify the flag to indicate the purpose of the OTP | [default to "transfer"]

## Methods

### NewTransferResendOTP

`func NewTransferResendOTP(transferCode string, reason string, ) *TransferResendOTP`

NewTransferResendOTP instantiates a new TransferResendOTP object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransferResendOTPWithDefaults

`func NewTransferResendOTPWithDefaults() *TransferResendOTP`

NewTransferResendOTPWithDefaults instantiates a new TransferResendOTP object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransferCode

`func (o *TransferResendOTP) GetTransferCode() string`

GetTransferCode returns the TransferCode field if non-nil, zero value otherwise.

### GetTransferCodeOk

`func (o *TransferResendOTP) GetTransferCodeOk() (*string, bool)`

GetTransferCodeOk returns a tuple with the TransferCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransferCode

`func (o *TransferResendOTP) SetTransferCode(v string)`

SetTransferCode sets TransferCode field to given value.


### GetReason

`func (o *TransferResendOTP) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *TransferResendOTP) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *TransferResendOTP) SetReason(v string)`

SetReason sets Reason field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


