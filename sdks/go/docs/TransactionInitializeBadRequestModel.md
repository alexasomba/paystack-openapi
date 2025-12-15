# TransactionInitializeBadRequestModel

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

### NewTransactionInitializeBadRequestModel

`func NewTransactionInitializeBadRequestModel() *TransactionInitializeBadRequestModel`

NewTransactionInitializeBadRequestModel instantiates a new TransactionInitializeBadRequestModel object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionInitializeBadRequestModelWithDefaults

`func NewTransactionInitializeBadRequestModelWithDefaults() *TransactionInitializeBadRequestModel`

NewTransactionInitializeBadRequestModelWithDefaults instantiates a new TransactionInitializeBadRequestModel object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *TransactionInitializeBadRequestModel) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *TransactionInitializeBadRequestModel) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *TransactionInitializeBadRequestModel) SetStatus(v bool)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *TransactionInitializeBadRequestModel) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetMessage

`func (o *TransactionInitializeBadRequestModel) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *TransactionInitializeBadRequestModel) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *TransactionInitializeBadRequestModel) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *TransactionInitializeBadRequestModel) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetMeta

`func (o *TransactionInitializeBadRequestModel) GetMeta() ErrorMeta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *TransactionInitializeBadRequestModel) GetMetaOk() (*ErrorMeta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *TransactionInitializeBadRequestModel) SetMeta(v ErrorMeta)`

SetMeta sets Meta field to given value.

### HasMeta

`func (o *TransactionInitializeBadRequestModel) HasMeta() bool`

HasMeta returns a boolean if a field has been set.

### GetType

`func (o *TransactionInitializeBadRequestModel) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TransactionInitializeBadRequestModel) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TransactionInitializeBadRequestModel) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *TransactionInitializeBadRequestModel) HasType() bool`

HasType returns a boolean if a field has been set.

### GetCode

`func (o *TransactionInitializeBadRequestModel) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *TransactionInitializeBadRequestModel) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *TransactionInitializeBadRequestModel) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *TransactionInitializeBadRequestModel) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetErrorCodeMappingNotFound

`func (o *TransactionInitializeBadRequestModel) GetErrorCodeMappingNotFound() bool`

GetErrorCodeMappingNotFound returns the ErrorCodeMappingNotFound field if non-nil, zero value otherwise.

### GetErrorCodeMappingNotFoundOk

`func (o *TransactionInitializeBadRequestModel) GetErrorCodeMappingNotFoundOk() (*bool, bool)`

GetErrorCodeMappingNotFoundOk returns a tuple with the ErrorCodeMappingNotFound field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorCodeMappingNotFound

`func (o *TransactionInitializeBadRequestModel) SetErrorCodeMappingNotFound(v bool)`

SetErrorCodeMappingNotFound sets ErrorCodeMappingNotFound field to given value.

### HasErrorCodeMappingNotFound

`func (o *TransactionInitializeBadRequestModel) HasErrorCodeMappingNotFound() bool`

HasErrorCodeMappingNotFound returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


