# SplitAddUpdateSubaccountResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** |  | 
**Message** | **string** |  | 
**Data** | [**SplitFetchResponseData**](SplitFetchResponseData.md) |  | 

## Methods

### NewSplitAddUpdateSubaccountResponse

`func NewSplitAddUpdateSubaccountResponse(status bool, message string, data SplitFetchResponseData, ) *SplitAddUpdateSubaccountResponse`

NewSplitAddUpdateSubaccountResponse instantiates a new SplitAddUpdateSubaccountResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSplitAddUpdateSubaccountResponseWithDefaults

`func NewSplitAddUpdateSubaccountResponseWithDefaults() *SplitAddUpdateSubaccountResponse`

NewSplitAddUpdateSubaccountResponseWithDefaults instantiates a new SplitAddUpdateSubaccountResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *SplitAddUpdateSubaccountResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *SplitAddUpdateSubaccountResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *SplitAddUpdateSubaccountResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *SplitAddUpdateSubaccountResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *SplitAddUpdateSubaccountResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *SplitAddUpdateSubaccountResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetData

`func (o *SplitAddUpdateSubaccountResponse) GetData() SplitFetchResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *SplitAddUpdateSubaccountResponse) GetDataOk() (*SplitFetchResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *SplitAddUpdateSubaccountResponse) SetData(v SplitFetchResponseData)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


