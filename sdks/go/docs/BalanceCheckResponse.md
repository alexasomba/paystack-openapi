# BalanceCheckResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**[]BalanceCheckResponseArray**](BalanceCheckResponseArray.md) |  | 

## Methods

### NewBalanceCheckResponse

`func NewBalanceCheckResponse(status bool, message string, data []BalanceCheckResponseArray, ) *BalanceCheckResponse`

NewBalanceCheckResponse instantiates a new BalanceCheckResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBalanceCheckResponseWithDefaults

`func NewBalanceCheckResponseWithDefaults() *BalanceCheckResponse`

NewBalanceCheckResponseWithDefaults instantiates a new BalanceCheckResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *BalanceCheckResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *BalanceCheckResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *BalanceCheckResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *BalanceCheckResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *BalanceCheckResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *BalanceCheckResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *BalanceCheckResponse) GetData() []BalanceCheckResponseArray`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *BalanceCheckResponse) GetDataOk() (*[]BalanceCheckResponseArray, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *BalanceCheckResponse) SetData(v []BalanceCheckResponseArray)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


