# PaymentRequestTotalResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pending** | [**[]PaymentRequestPendingArray**](PaymentRequestPendingArray.md) |  | 
**Successful** | [**[]PaymentRequestSuccessfulArray**](PaymentRequestSuccessfulArray.md) |  | 
**Total** | [**[]PaymentRequestTotalArray**](PaymentRequestTotalArray.md) |  | 

## Methods

### NewPaymentRequestTotalResponseData

`func NewPaymentRequestTotalResponseData(pending []PaymentRequestPendingArray, successful []PaymentRequestSuccessfulArray, total []PaymentRequestTotalArray, ) *PaymentRequestTotalResponseData`

NewPaymentRequestTotalResponseData instantiates a new PaymentRequestTotalResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaymentRequestTotalResponseDataWithDefaults

`func NewPaymentRequestTotalResponseDataWithDefaults() *PaymentRequestTotalResponseData`

NewPaymentRequestTotalResponseDataWithDefaults instantiates a new PaymentRequestTotalResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPending

`func (o *PaymentRequestTotalResponseData) GetPending() []PaymentRequestPendingArray`

GetPending returns the Pending field if non-nil, zero value otherwise.

### GetPendingOk

`func (o *PaymentRequestTotalResponseData) GetPendingOk() (*[]PaymentRequestPendingArray, bool)`

GetPendingOk returns a tuple with the Pending field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPending

`func (o *PaymentRequestTotalResponseData) SetPending(v []PaymentRequestPendingArray)`

SetPending sets Pending field to given value.


### GetSuccessful

`func (o *PaymentRequestTotalResponseData) GetSuccessful() []PaymentRequestSuccessfulArray`

GetSuccessful returns the Successful field if non-nil, zero value otherwise.

### GetSuccessfulOk

`func (o *PaymentRequestTotalResponseData) GetSuccessfulOk() (*[]PaymentRequestSuccessfulArray, bool)`

GetSuccessfulOk returns a tuple with the Successful field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccessful

`func (o *PaymentRequestTotalResponseData) SetSuccessful(v []PaymentRequestSuccessfulArray)`

SetSuccessful sets Successful field to given value.


### GetTotal

`func (o *PaymentRequestTotalResponseData) GetTotal() []PaymentRequestTotalArray`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *PaymentRequestTotalResponseData) GetTotalOk() (*[]PaymentRequestTotalArray, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *PaymentRequestTotalResponseData) SetTotal(v []PaymentRequestTotalArray)`

SetTotal sets Total field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


