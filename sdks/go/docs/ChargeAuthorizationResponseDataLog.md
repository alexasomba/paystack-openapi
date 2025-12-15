# ChargeAuthorizationResponseDataLog

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StartTime** | **int32** |  | 
**TimeSpent** | **int32** |  | 
**Attempts** | **int32** |  | 
**Errors** | **int32** |  | 
**Success** | **bool** |  | 
**Mobile** | **bool** |  | 
**Input** | **[]interface{}** |  | 
**History** | [**[]ChargeAuthorizationResponseDataLogHistoryInner**](ChargeAuthorizationResponseDataLogHistoryInner.md) |  | 

## Methods

### NewChargeAuthorizationResponseDataLog

`func NewChargeAuthorizationResponseDataLog(startTime int32, timeSpent int32, attempts int32, errors int32, success bool, mobile bool, input []interface{}, history []ChargeAuthorizationResponseDataLogHistoryInner, ) *ChargeAuthorizationResponseDataLog`

NewChargeAuthorizationResponseDataLog instantiates a new ChargeAuthorizationResponseDataLog object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChargeAuthorizationResponseDataLogWithDefaults

`func NewChargeAuthorizationResponseDataLogWithDefaults() *ChargeAuthorizationResponseDataLog`

NewChargeAuthorizationResponseDataLogWithDefaults instantiates a new ChargeAuthorizationResponseDataLog object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStartTime

`func (o *ChargeAuthorizationResponseDataLog) GetStartTime() int32`

GetStartTime returns the StartTime field if non-nil, zero value otherwise.

### GetStartTimeOk

`func (o *ChargeAuthorizationResponseDataLog) GetStartTimeOk() (*int32, bool)`

GetStartTimeOk returns a tuple with the StartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartTime

`func (o *ChargeAuthorizationResponseDataLog) SetStartTime(v int32)`

SetStartTime sets StartTime field to given value.


### GetTimeSpent

`func (o *ChargeAuthorizationResponseDataLog) GetTimeSpent() int32`

GetTimeSpent returns the TimeSpent field if non-nil, zero value otherwise.

### GetTimeSpentOk

`func (o *ChargeAuthorizationResponseDataLog) GetTimeSpentOk() (*int32, bool)`

GetTimeSpentOk returns a tuple with the TimeSpent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeSpent

`func (o *ChargeAuthorizationResponseDataLog) SetTimeSpent(v int32)`

SetTimeSpent sets TimeSpent field to given value.


### GetAttempts

`func (o *ChargeAuthorizationResponseDataLog) GetAttempts() int32`

GetAttempts returns the Attempts field if non-nil, zero value otherwise.

### GetAttemptsOk

`func (o *ChargeAuthorizationResponseDataLog) GetAttemptsOk() (*int32, bool)`

GetAttemptsOk returns a tuple with the Attempts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttempts

`func (o *ChargeAuthorizationResponseDataLog) SetAttempts(v int32)`

SetAttempts sets Attempts field to given value.


### GetErrors

`func (o *ChargeAuthorizationResponseDataLog) GetErrors() int32`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *ChargeAuthorizationResponseDataLog) GetErrorsOk() (*int32, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *ChargeAuthorizationResponseDataLog) SetErrors(v int32)`

SetErrors sets Errors field to given value.


### GetSuccess

`func (o *ChargeAuthorizationResponseDataLog) GetSuccess() bool`

GetSuccess returns the Success field if non-nil, zero value otherwise.

### GetSuccessOk

`func (o *ChargeAuthorizationResponseDataLog) GetSuccessOk() (*bool, bool)`

GetSuccessOk returns a tuple with the Success field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccess

`func (o *ChargeAuthorizationResponseDataLog) SetSuccess(v bool)`

SetSuccess sets Success field to given value.


### GetMobile

`func (o *ChargeAuthorizationResponseDataLog) GetMobile() bool`

GetMobile returns the Mobile field if non-nil, zero value otherwise.

### GetMobileOk

`func (o *ChargeAuthorizationResponseDataLog) GetMobileOk() (*bool, bool)`

GetMobileOk returns a tuple with the Mobile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMobile

`func (o *ChargeAuthorizationResponseDataLog) SetMobile(v bool)`

SetMobile sets Mobile field to given value.


### GetInput

`func (o *ChargeAuthorizationResponseDataLog) GetInput() []interface{}`

GetInput returns the Input field if non-nil, zero value otherwise.

### GetInputOk

`func (o *ChargeAuthorizationResponseDataLog) GetInputOk() (*[]interface{}, bool)`

GetInputOk returns a tuple with the Input field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInput

`func (o *ChargeAuthorizationResponseDataLog) SetInput(v []interface{})`

SetInput sets Input field to given value.


### GetHistory

`func (o *ChargeAuthorizationResponseDataLog) GetHistory() []ChargeAuthorizationResponseDataLogHistoryInner`

GetHistory returns the History field if non-nil, zero value otherwise.

### GetHistoryOk

`func (o *ChargeAuthorizationResponseDataLog) GetHistoryOk() (*[]ChargeAuthorizationResponseDataLogHistoryInner, bool)`

GetHistoryOk returns a tuple with the History field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHistory

`func (o *ChargeAuthorizationResponseDataLog) SetHistory(v []ChargeAuthorizationResponseDataLogHistoryInner)`

SetHistory sets History field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


