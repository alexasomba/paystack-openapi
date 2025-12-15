# VerifyResponseDataPlanObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **int32** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**PlanCode** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **interface{}** |  | [optional] 
**Amount** | Pointer to **int32** |  | [optional] 
**Interval** | Pointer to **string** |  | [optional] 
**SendInvoices** | Pointer to **bool** |  | [optional] 
**SendSms** | Pointer to **bool** |  | [optional] 
**Currency** | Pointer to **string** |  | [optional] 

## Methods

### NewVerifyResponseDataPlanObject

`func NewVerifyResponseDataPlanObject() *VerifyResponseDataPlanObject`

NewVerifyResponseDataPlanObject instantiates a new VerifyResponseDataPlanObject object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVerifyResponseDataPlanObjectWithDefaults

`func NewVerifyResponseDataPlanObjectWithDefaults() *VerifyResponseDataPlanObject`

NewVerifyResponseDataPlanObjectWithDefaults instantiates a new VerifyResponseDataPlanObject object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *VerifyResponseDataPlanObject) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *VerifyResponseDataPlanObject) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *VerifyResponseDataPlanObject) SetId(v int32)`

SetId sets Id field to given value.

### HasId

`func (o *VerifyResponseDataPlanObject) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *VerifyResponseDataPlanObject) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *VerifyResponseDataPlanObject) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *VerifyResponseDataPlanObject) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *VerifyResponseDataPlanObject) HasName() bool`

HasName returns a boolean if a field has been set.

### GetPlanCode

`func (o *VerifyResponseDataPlanObject) GetPlanCode() string`

GetPlanCode returns the PlanCode field if non-nil, zero value otherwise.

### GetPlanCodeOk

`func (o *VerifyResponseDataPlanObject) GetPlanCodeOk() (*string, bool)`

GetPlanCodeOk returns a tuple with the PlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlanCode

`func (o *VerifyResponseDataPlanObject) SetPlanCode(v string)`

SetPlanCode sets PlanCode field to given value.

### HasPlanCode

`func (o *VerifyResponseDataPlanObject) HasPlanCode() bool`

HasPlanCode returns a boolean if a field has been set.

### GetDescription

`func (o *VerifyResponseDataPlanObject) GetDescription() interface{}`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *VerifyResponseDataPlanObject) GetDescriptionOk() (*interface{}, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *VerifyResponseDataPlanObject) SetDescription(v interface{})`

SetDescription sets Description field to given value.

### HasDescription

`func (o *VerifyResponseDataPlanObject) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *VerifyResponseDataPlanObject) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *VerifyResponseDataPlanObject) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetAmount

`func (o *VerifyResponseDataPlanObject) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *VerifyResponseDataPlanObject) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *VerifyResponseDataPlanObject) SetAmount(v int32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *VerifyResponseDataPlanObject) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetInterval

`func (o *VerifyResponseDataPlanObject) GetInterval() string`

GetInterval returns the Interval field if non-nil, zero value otherwise.

### GetIntervalOk

`func (o *VerifyResponseDataPlanObject) GetIntervalOk() (*string, bool)`

GetIntervalOk returns a tuple with the Interval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterval

`func (o *VerifyResponseDataPlanObject) SetInterval(v string)`

SetInterval sets Interval field to given value.

### HasInterval

`func (o *VerifyResponseDataPlanObject) HasInterval() bool`

HasInterval returns a boolean if a field has been set.

### GetSendInvoices

`func (o *VerifyResponseDataPlanObject) GetSendInvoices() bool`

GetSendInvoices returns the SendInvoices field if non-nil, zero value otherwise.

### GetSendInvoicesOk

`func (o *VerifyResponseDataPlanObject) GetSendInvoicesOk() (*bool, bool)`

GetSendInvoicesOk returns a tuple with the SendInvoices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSendInvoices

`func (o *VerifyResponseDataPlanObject) SetSendInvoices(v bool)`

SetSendInvoices sets SendInvoices field to given value.

### HasSendInvoices

`func (o *VerifyResponseDataPlanObject) HasSendInvoices() bool`

HasSendInvoices returns a boolean if a field has been set.

### GetSendSms

`func (o *VerifyResponseDataPlanObject) GetSendSms() bool`

GetSendSms returns the SendSms field if non-nil, zero value otherwise.

### GetSendSmsOk

`func (o *VerifyResponseDataPlanObject) GetSendSmsOk() (*bool, bool)`

GetSendSmsOk returns a tuple with the SendSms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSendSms

`func (o *VerifyResponseDataPlanObject) SetSendSms(v bool)`

SetSendSms sets SendSms field to given value.

### HasSendSms

`func (o *VerifyResponseDataPlanObject) HasSendSms() bool`

HasSendSms returns a boolean if a field has been set.

### GetCurrency

`func (o *VerifyResponseDataPlanObject) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *VerifyResponseDataPlanObject) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *VerifyResponseDataPlanObject) SetCurrency(v string)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *VerifyResponseDataPlanObject) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


