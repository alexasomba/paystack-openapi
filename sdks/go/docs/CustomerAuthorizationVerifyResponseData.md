# CustomerAuthorizationVerifyResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthorizationCode** | **string** |  | 
**Channel** | **string** |  | 
**Bank** | **string** |  | 
**Active** | **bool** |  | 
**Customer** | [**CustomerAuthorizationVerifyResponseCustomer**](CustomerAuthorizationVerifyResponseCustomer.md) |  | 

## Methods

### NewCustomerAuthorizationVerifyResponseData

`func NewCustomerAuthorizationVerifyResponseData(authorizationCode string, channel string, bank string, active bool, customer CustomerAuthorizationVerifyResponseCustomer, ) *CustomerAuthorizationVerifyResponseData`

NewCustomerAuthorizationVerifyResponseData instantiates a new CustomerAuthorizationVerifyResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomerAuthorizationVerifyResponseDataWithDefaults

`func NewCustomerAuthorizationVerifyResponseDataWithDefaults() *CustomerAuthorizationVerifyResponseData`

NewCustomerAuthorizationVerifyResponseDataWithDefaults instantiates a new CustomerAuthorizationVerifyResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthorizationCode

`func (o *CustomerAuthorizationVerifyResponseData) GetAuthorizationCode() string`

GetAuthorizationCode returns the AuthorizationCode field if non-nil, zero value otherwise.

### GetAuthorizationCodeOk

`func (o *CustomerAuthorizationVerifyResponseData) GetAuthorizationCodeOk() (*string, bool)`

GetAuthorizationCodeOk returns a tuple with the AuthorizationCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizationCode

`func (o *CustomerAuthorizationVerifyResponseData) SetAuthorizationCode(v string)`

SetAuthorizationCode sets AuthorizationCode field to given value.


### GetChannel

`func (o *CustomerAuthorizationVerifyResponseData) GetChannel() string`

GetChannel returns the Channel field if non-nil, zero value otherwise.

### GetChannelOk

`func (o *CustomerAuthorizationVerifyResponseData) GetChannelOk() (*string, bool)`

GetChannelOk returns a tuple with the Channel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannel

`func (o *CustomerAuthorizationVerifyResponseData) SetChannel(v string)`

SetChannel sets Channel field to given value.


### GetBank

`func (o *CustomerAuthorizationVerifyResponseData) GetBank() string`

GetBank returns the Bank field if non-nil, zero value otherwise.

### GetBankOk

`func (o *CustomerAuthorizationVerifyResponseData) GetBankOk() (*string, bool)`

GetBankOk returns a tuple with the Bank field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBank

`func (o *CustomerAuthorizationVerifyResponseData) SetBank(v string)`

SetBank sets Bank field to given value.


### GetActive

`func (o *CustomerAuthorizationVerifyResponseData) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *CustomerAuthorizationVerifyResponseData) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *CustomerAuthorizationVerifyResponseData) SetActive(v bool)`

SetActive sets Active field to given value.


### GetCustomer

`func (o *CustomerAuthorizationVerifyResponseData) GetCustomer() CustomerAuthorizationVerifyResponseCustomer`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *CustomerAuthorizationVerifyResponseData) GetCustomerOk() (*CustomerAuthorizationVerifyResponseCustomer, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *CustomerAuthorizationVerifyResponseData) SetCustomer(v CustomerAuthorizationVerifyResponseCustomer)`

SetCustomer sets Customer field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


