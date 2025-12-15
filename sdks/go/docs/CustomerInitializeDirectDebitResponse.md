# CustomerInitializeDirectDebitResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**CustomerInitializeDirectDebitResponseData**](CustomerInitializeDirectDebitResponseData.md) |  | 

## Methods

### NewCustomerInitializeDirectDebitResponse

`func NewCustomerInitializeDirectDebitResponse(status bool, message string, data CustomerInitializeDirectDebitResponseData, ) *CustomerInitializeDirectDebitResponse`

NewCustomerInitializeDirectDebitResponse instantiates a new CustomerInitializeDirectDebitResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomerInitializeDirectDebitResponseWithDefaults

`func NewCustomerInitializeDirectDebitResponseWithDefaults() *CustomerInitializeDirectDebitResponse`

NewCustomerInitializeDirectDebitResponseWithDefaults instantiates a new CustomerInitializeDirectDebitResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *CustomerInitializeDirectDebitResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *CustomerInitializeDirectDebitResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *CustomerInitializeDirectDebitResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *CustomerInitializeDirectDebitResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *CustomerInitializeDirectDebitResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *CustomerInitializeDirectDebitResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *CustomerInitializeDirectDebitResponse) GetData() CustomerInitializeDirectDebitResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *CustomerInitializeDirectDebitResponse) GetDataOk() (*CustomerInitializeDirectDebitResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *CustomerInitializeDirectDebitResponse) SetData(v CustomerInitializeDirectDebitResponseData)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


