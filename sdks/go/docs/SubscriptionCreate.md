# SubscriptionCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Customer** | **string** | Customer&#39;s email address or customer code | 
**Plan** | **string** | Plan code | 
**Authorization** | Pointer to **string** | If customer has multiple authorizations, you can set the desired authorization you wish to use for this subscription here.  If this is not supplied, the customer&#39;s most recent authorization would be used | [optional] 
**StartDate** | Pointer to **time.Time** | Set the date for the first debit. (ISO 8601 format) e.g. 2017-05-16T00:30:13+01:00 | [optional] 

## Methods

### NewSubscriptionCreate

`func NewSubscriptionCreate(customer string, plan string, ) *SubscriptionCreate`

NewSubscriptionCreate instantiates a new SubscriptionCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubscriptionCreateWithDefaults

`func NewSubscriptionCreateWithDefaults() *SubscriptionCreate`

NewSubscriptionCreateWithDefaults instantiates a new SubscriptionCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomer

`func (o *SubscriptionCreate) GetCustomer() string`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *SubscriptionCreate) GetCustomerOk() (*string, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *SubscriptionCreate) SetCustomer(v string)`

SetCustomer sets Customer field to given value.


### GetPlan

`func (o *SubscriptionCreate) GetPlan() string`

GetPlan returns the Plan field if non-nil, zero value otherwise.

### GetPlanOk

`func (o *SubscriptionCreate) GetPlanOk() (*string, bool)`

GetPlanOk returns a tuple with the Plan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlan

`func (o *SubscriptionCreate) SetPlan(v string)`

SetPlan sets Plan field to given value.


### GetAuthorization

`func (o *SubscriptionCreate) GetAuthorization() string`

GetAuthorization returns the Authorization field if non-nil, zero value otherwise.

### GetAuthorizationOk

`func (o *SubscriptionCreate) GetAuthorizationOk() (*string, bool)`

GetAuthorizationOk returns a tuple with the Authorization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorization

`func (o *SubscriptionCreate) SetAuthorization(v string)`

SetAuthorization sets Authorization field to given value.

### HasAuthorization

`func (o *SubscriptionCreate) HasAuthorization() bool`

HasAuthorization returns a boolean if a field has been set.

### GetStartDate

`func (o *SubscriptionCreate) GetStartDate() time.Time`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *SubscriptionCreate) GetStartDateOk() (*time.Time, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *SubscriptionCreate) SetStartDate(v time.Time)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *SubscriptionCreate) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


