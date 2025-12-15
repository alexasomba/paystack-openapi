# CustomerAuthorizationInitializeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Email** | **string** | Customer&#39;s email address | 
**Channel** | **string** | direct_debit is the only supported option for now | 
**CallbackUrl** | Pointer to **string** | Fully qualified url (e.g. https://example.com/) to redirect your customer to | [optional] 
**Account** | Pointer to [**CustomerAuthorizationInitializeAccount**](CustomerAuthorizationInitializeAccount.md) |  | [optional] 
**Address** | Pointer to [**CustomerAuthorizationInitializeAddress**](CustomerAuthorizationInitializeAddress.md) |  | [optional] 

## Methods

### NewCustomerAuthorizationInitializeRequest

`func NewCustomerAuthorizationInitializeRequest(email string, channel string, ) *CustomerAuthorizationInitializeRequest`

NewCustomerAuthorizationInitializeRequest instantiates a new CustomerAuthorizationInitializeRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomerAuthorizationInitializeRequestWithDefaults

`func NewCustomerAuthorizationInitializeRequestWithDefaults() *CustomerAuthorizationInitializeRequest`

NewCustomerAuthorizationInitializeRequestWithDefaults instantiates a new CustomerAuthorizationInitializeRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmail

`func (o *CustomerAuthorizationInitializeRequest) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *CustomerAuthorizationInitializeRequest) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *CustomerAuthorizationInitializeRequest) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetChannel

`func (o *CustomerAuthorizationInitializeRequest) GetChannel() string`

GetChannel returns the Channel field if non-nil, zero value otherwise.

### GetChannelOk

`func (o *CustomerAuthorizationInitializeRequest) GetChannelOk() (*string, bool)`

GetChannelOk returns a tuple with the Channel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannel

`func (o *CustomerAuthorizationInitializeRequest) SetChannel(v string)`

SetChannel sets Channel field to given value.


### GetCallbackUrl

`func (o *CustomerAuthorizationInitializeRequest) GetCallbackUrl() string`

GetCallbackUrl returns the CallbackUrl field if non-nil, zero value otherwise.

### GetCallbackUrlOk

`func (o *CustomerAuthorizationInitializeRequest) GetCallbackUrlOk() (*string, bool)`

GetCallbackUrlOk returns a tuple with the CallbackUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCallbackUrl

`func (o *CustomerAuthorizationInitializeRequest) SetCallbackUrl(v string)`

SetCallbackUrl sets CallbackUrl field to given value.

### HasCallbackUrl

`func (o *CustomerAuthorizationInitializeRequest) HasCallbackUrl() bool`

HasCallbackUrl returns a boolean if a field has been set.

### GetAccount

`func (o *CustomerAuthorizationInitializeRequest) GetAccount() CustomerAuthorizationInitializeAccount`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *CustomerAuthorizationInitializeRequest) GetAccountOk() (*CustomerAuthorizationInitializeAccount, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *CustomerAuthorizationInitializeRequest) SetAccount(v CustomerAuthorizationInitializeAccount)`

SetAccount sets Account field to given value.

### HasAccount

`func (o *CustomerAuthorizationInitializeRequest) HasAccount() bool`

HasAccount returns a boolean if a field has been set.

### GetAddress

`func (o *CustomerAuthorizationInitializeRequest) GetAddress() CustomerAuthorizationInitializeAddress`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *CustomerAuthorizationInitializeRequest) GetAddressOk() (*CustomerAuthorizationInitializeAddress, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *CustomerAuthorizationInitializeRequest) SetAddress(v CustomerAuthorizationInitializeAddress)`

SetAddress sets Address field to given value.

### HasAddress

`func (o *CustomerAuthorizationInitializeRequest) HasAddress() bool`

HasAddress returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


