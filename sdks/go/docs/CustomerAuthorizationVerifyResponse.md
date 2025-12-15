# CustomerAuthorizationVerifyResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**CustomerAuthorizationVerifyResponseData**](CustomerAuthorizationVerifyResponseData.md) |  | 

## Methods

### NewCustomerAuthorizationVerifyResponse

`func NewCustomerAuthorizationVerifyResponse(status bool, message string, data CustomerAuthorizationVerifyResponseData, ) *CustomerAuthorizationVerifyResponse`

NewCustomerAuthorizationVerifyResponse instantiates a new CustomerAuthorizationVerifyResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomerAuthorizationVerifyResponseWithDefaults

`func NewCustomerAuthorizationVerifyResponseWithDefaults() *CustomerAuthorizationVerifyResponse`

NewCustomerAuthorizationVerifyResponseWithDefaults instantiates a new CustomerAuthorizationVerifyResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *CustomerAuthorizationVerifyResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *CustomerAuthorizationVerifyResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *CustomerAuthorizationVerifyResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *CustomerAuthorizationVerifyResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *CustomerAuthorizationVerifyResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *CustomerAuthorizationVerifyResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *CustomerAuthorizationVerifyResponse) GetData() CustomerAuthorizationVerifyResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *CustomerAuthorizationVerifyResponse) GetDataOk() (*CustomerAuthorizationVerifyResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *CustomerAuthorizationVerifyResponse) SetData(v CustomerAuthorizationVerifyResponseData)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


