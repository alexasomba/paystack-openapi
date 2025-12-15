# Error

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | Pointer to **bool** | An indicator for the state of the request | [optional] 
**Message** | Pointer to **string** | A short description of the error | [optional] 
**Meta** | Pointer to [**ErrorMeta**](ErrorMeta.md) |  | [optional] 
**Type** | Pointer to **string** | A tag to indicate the type of the error | [optional] 
**Code** | Pointer to **string** | The error code | [optional] 
**ErrorCodeMappingNotFound** | Pointer to **bool** | An indicator for error mapping for the request | [optional] 

## Methods

### NewError

`func NewError() *Error`

NewError instantiates a new Error object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewErrorWithDefaults

`func NewErrorWithDefaults() *Error`

NewErrorWithDefaults instantiates a new Error object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *Error) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Error) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Error) SetStatus(v bool)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Error) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetMessage

`func (o *Error) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *Error) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *Error) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *Error) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetMeta

`func (o *Error) GetMeta() ErrorMeta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *Error) GetMetaOk() (*ErrorMeta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *Error) SetMeta(v ErrorMeta)`

SetMeta sets Meta field to given value.

### HasMeta

`func (o *Error) HasMeta() bool`

HasMeta returns a boolean if a field has been set.

### GetType

`func (o *Error) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Error) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Error) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Error) HasType() bool`

HasType returns a boolean if a field has been set.

### GetCode

`func (o *Error) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *Error) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *Error) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *Error) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetErrorCodeMappingNotFound

`func (o *Error) GetErrorCodeMappingNotFound() bool`

GetErrorCodeMappingNotFound returns the ErrorCodeMappingNotFound field if non-nil, zero value otherwise.

### GetErrorCodeMappingNotFoundOk

`func (o *Error) GetErrorCodeMappingNotFoundOk() (*bool, bool)`

GetErrorCodeMappingNotFoundOk returns a tuple with the ErrorCodeMappingNotFound field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorCodeMappingNotFound

`func (o *Error) SetErrorCodeMappingNotFound(v bool)`

SetErrorCodeMappingNotFound sets ErrorCodeMappingNotFound field to given value.

### HasErrorCodeMappingNotFound

`func (o *Error) HasErrorCodeMappingNotFound() bool`

HasErrorCodeMappingNotFound returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


