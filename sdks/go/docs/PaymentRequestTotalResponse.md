# PaymentRequestTotalResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**PaymentRequestTotalResponseData**](PaymentRequestTotalResponseData.md) |  | 

## Methods

### NewPaymentRequestTotalResponse

`func NewPaymentRequestTotalResponse(status bool, message string, data PaymentRequestTotalResponseData, ) *PaymentRequestTotalResponse`

NewPaymentRequestTotalResponse instantiates a new PaymentRequestTotalResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaymentRequestTotalResponseWithDefaults

`func NewPaymentRequestTotalResponseWithDefaults() *PaymentRequestTotalResponse`

NewPaymentRequestTotalResponseWithDefaults instantiates a new PaymentRequestTotalResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *PaymentRequestTotalResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *PaymentRequestTotalResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *PaymentRequestTotalResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *PaymentRequestTotalResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *PaymentRequestTotalResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *PaymentRequestTotalResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *PaymentRequestTotalResponse) GetData() PaymentRequestTotalResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *PaymentRequestTotalResponse) GetDataOk() (*PaymentRequestTotalResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *PaymentRequestTotalResponse) SetData(v PaymentRequestTotalResponseData)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


