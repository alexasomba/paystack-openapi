# ChargeSubmitPin

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pin** | **string** | Customer&#39;s PIN for the ongoing transaction | 
**Reference** | **string** | Transaction reference that requires the PIN | 

## Methods

### NewChargeSubmitPin

`func NewChargeSubmitPin(pin string, reference string, ) *ChargeSubmitPin`

NewChargeSubmitPin instantiates a new ChargeSubmitPin object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChargeSubmitPinWithDefaults

`func NewChargeSubmitPinWithDefaults() *ChargeSubmitPin`

NewChargeSubmitPinWithDefaults instantiates a new ChargeSubmitPin object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPin

`func (o *ChargeSubmitPin) GetPin() string`

GetPin returns the Pin field if non-nil, zero value otherwise.

### GetPinOk

`func (o *ChargeSubmitPin) GetPinOk() (*string, bool)`

GetPinOk returns a tuple with the Pin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPin

`func (o *ChargeSubmitPin) SetPin(v string)`

SetPin sets Pin field to given value.


### GetReference

`func (o *ChargeSubmitPin) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *ChargeSubmitPin) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *ChargeSubmitPin) SetReference(v string)`

SetReference sets Reference field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


