# PaymentSession

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Timeout** | **int32** | Time in seconds before a transaction becomes invalid | 

## Methods

### NewPaymentSession

`func NewPaymentSession(timeout int32, ) *PaymentSession`

NewPaymentSession instantiates a new PaymentSession object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaymentSessionWithDefaults

`func NewPaymentSessionWithDefaults() *PaymentSession`

NewPaymentSessionWithDefaults instantiates a new PaymentSession object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTimeout

`func (o *PaymentSession) GetTimeout() int32`

GetTimeout returns the Timeout field if non-nil, zero value otherwise.

### GetTimeoutOk

`func (o *PaymentSession) GetTimeoutOk() (*int32, bool)`

GetTimeoutOk returns a tuple with the Timeout field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeout

`func (o *PaymentSession) SetTimeout(v int32)`

SetTimeout sets Timeout field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


