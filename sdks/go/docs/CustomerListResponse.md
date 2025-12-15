# CustomerListResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**[]CustomerListResponseArray**](CustomerListResponseArray.md) |  | 
**Meta** | [**CustomerListResponseMeta**](CustomerListResponseMeta.md) |  | 

## Methods

### NewCustomerListResponse

`func NewCustomerListResponse(status bool, message string, data []CustomerListResponseArray, meta CustomerListResponseMeta, ) *CustomerListResponse`

NewCustomerListResponse instantiates a new CustomerListResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomerListResponseWithDefaults

`func NewCustomerListResponseWithDefaults() *CustomerListResponse`

NewCustomerListResponseWithDefaults instantiates a new CustomerListResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *CustomerListResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *CustomerListResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *CustomerListResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *CustomerListResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *CustomerListResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *CustomerListResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *CustomerListResponse) GetData() []CustomerListResponseArray`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *CustomerListResponse) GetDataOk() (*[]CustomerListResponseArray, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *CustomerListResponse) SetData(v []CustomerListResponseArray)`

SetData sets Data field to given value.


### GetMeta

`func (o *CustomerListResponse) GetMeta() CustomerListResponseMeta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *CustomerListResponse) GetMetaOk() (*CustomerListResponseMeta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *CustomerListResponse) SetMeta(v CustomerListResponseMeta)`

SetMeta sets Meta field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


