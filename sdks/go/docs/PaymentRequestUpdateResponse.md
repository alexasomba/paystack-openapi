# PaymentRequestUpdateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**PaymentRequestUpdateResponseData**](PaymentRequestUpdateResponseData.md) |  | 

## Methods

### NewPaymentRequestUpdateResponse

`func NewPaymentRequestUpdateResponse(status bool, message string, data PaymentRequestUpdateResponseData, ) *PaymentRequestUpdateResponse`

NewPaymentRequestUpdateResponse instantiates a new PaymentRequestUpdateResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaymentRequestUpdateResponseWithDefaults

`func NewPaymentRequestUpdateResponseWithDefaults() *PaymentRequestUpdateResponse`

NewPaymentRequestUpdateResponseWithDefaults instantiates a new PaymentRequestUpdateResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *PaymentRequestUpdateResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *PaymentRequestUpdateResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *PaymentRequestUpdateResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *PaymentRequestUpdateResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *PaymentRequestUpdateResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *PaymentRequestUpdateResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *PaymentRequestUpdateResponse) GetData() PaymentRequestUpdateResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *PaymentRequestUpdateResponse) GetDataOk() (*PaymentRequestUpdateResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *PaymentRequestUpdateResponse) SetData(v PaymentRequestUpdateResponseData)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


