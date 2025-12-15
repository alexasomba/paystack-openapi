# SubaccountFetchResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**SubaccountFetchResponseData**](SubaccountFetchResponseData.md) |  | 

## Methods

### NewSubaccountFetchResponse

`func NewSubaccountFetchResponse(status bool, message string, data SubaccountFetchResponseData, ) *SubaccountFetchResponse`

NewSubaccountFetchResponse instantiates a new SubaccountFetchResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubaccountFetchResponseWithDefaults

`func NewSubaccountFetchResponseWithDefaults() *SubaccountFetchResponse`

NewSubaccountFetchResponseWithDefaults instantiates a new SubaccountFetchResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *SubaccountFetchResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *SubaccountFetchResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *SubaccountFetchResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *SubaccountFetchResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *SubaccountFetchResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *SubaccountFetchResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *SubaccountFetchResponse) GetData() SubaccountFetchResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *SubaccountFetchResponse) GetDataOk() (*SubaccountFetchResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *SubaccountFetchResponse) SetData(v SubaccountFetchResponseData)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


