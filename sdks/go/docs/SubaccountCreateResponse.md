# SubaccountCreateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**SubaccountCreateResponseData**](SubaccountCreateResponseData.md) |  | 

## Methods

### NewSubaccountCreateResponse

`func NewSubaccountCreateResponse(status bool, message string, data SubaccountCreateResponseData, ) *SubaccountCreateResponse`

NewSubaccountCreateResponse instantiates a new SubaccountCreateResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubaccountCreateResponseWithDefaults

`func NewSubaccountCreateResponseWithDefaults() *SubaccountCreateResponse`

NewSubaccountCreateResponseWithDefaults instantiates a new SubaccountCreateResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *SubaccountCreateResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *SubaccountCreateResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *SubaccountCreateResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *SubaccountCreateResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *SubaccountCreateResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *SubaccountCreateResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *SubaccountCreateResponse) GetData() SubaccountCreateResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *SubaccountCreateResponse) GetDataOk() (*SubaccountCreateResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *SubaccountCreateResponse) SetData(v SubaccountCreateResponseData)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


