# CustomerFetchMandateAuthorizationsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**[]CustomerFetchMandateAuthorizationsResponseData**](CustomerFetchMandateAuthorizationsResponseData.md) |  | 
**Meta** | [**CustomerFetchMandateAuthorizationsResponseMeta**](CustomerFetchMandateAuthorizationsResponseMeta.md) |  | 

## Methods

### NewCustomerFetchMandateAuthorizationsResponse

`func NewCustomerFetchMandateAuthorizationsResponse(status bool, message string, data []CustomerFetchMandateAuthorizationsResponseData, meta CustomerFetchMandateAuthorizationsResponseMeta, ) *CustomerFetchMandateAuthorizationsResponse`

NewCustomerFetchMandateAuthorizationsResponse instantiates a new CustomerFetchMandateAuthorizationsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomerFetchMandateAuthorizationsResponseWithDefaults

`func NewCustomerFetchMandateAuthorizationsResponseWithDefaults() *CustomerFetchMandateAuthorizationsResponse`

NewCustomerFetchMandateAuthorizationsResponseWithDefaults instantiates a new CustomerFetchMandateAuthorizationsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *CustomerFetchMandateAuthorizationsResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *CustomerFetchMandateAuthorizationsResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *CustomerFetchMandateAuthorizationsResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *CustomerFetchMandateAuthorizationsResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *CustomerFetchMandateAuthorizationsResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *CustomerFetchMandateAuthorizationsResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *CustomerFetchMandateAuthorizationsResponse) GetData() []CustomerFetchMandateAuthorizationsResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *CustomerFetchMandateAuthorizationsResponse) GetDataOk() (*[]CustomerFetchMandateAuthorizationsResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *CustomerFetchMandateAuthorizationsResponse) SetData(v []CustomerFetchMandateAuthorizationsResponseData)`

SetData sets Data field to given value.


### GetMeta

`func (o *CustomerFetchMandateAuthorizationsResponse) GetMeta() CustomerFetchMandateAuthorizationsResponseMeta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *CustomerFetchMandateAuthorizationsResponse) GetMetaOk() (*CustomerFetchMandateAuthorizationsResponseMeta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *CustomerFetchMandateAuthorizationsResponse) SetMeta(v CustomerFetchMandateAuthorizationsResponseMeta)`

SetMeta sets Meta field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


