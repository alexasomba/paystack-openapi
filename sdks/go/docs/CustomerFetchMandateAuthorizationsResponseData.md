# CustomerFetchMandateAuthorizationsResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**Status** | **string** |  | 
**MandateId** | **int32** |  | 
**AuthorizationId** | **int32** |  | 
**AuthorizationCode** | **string** |  | 
**IntegrationId** | **int32** |  | 
**AccountNumber** | **string** |  | 
**BankCode** | **string** |  | 
**BankName** | Pointer to **NullableString** |  | [optional] 
**Customer** | [**CustomerFetchMandateAuthorizationsResponseDataCustomer**](CustomerFetchMandateAuthorizationsResponseDataCustomer.md) |  | 
**AuthorizedAt** | **time.Time** |  | 

## Methods

### NewCustomerFetchMandateAuthorizationsResponseData

`func NewCustomerFetchMandateAuthorizationsResponseData(id int32, status string, mandateId int32, authorizationId int32, authorizationCode string, integrationId int32, accountNumber string, bankCode string, customer CustomerFetchMandateAuthorizationsResponseDataCustomer, authorizedAt time.Time, ) *CustomerFetchMandateAuthorizationsResponseData`

NewCustomerFetchMandateAuthorizationsResponseData instantiates a new CustomerFetchMandateAuthorizationsResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomerFetchMandateAuthorizationsResponseDataWithDefaults

`func NewCustomerFetchMandateAuthorizationsResponseDataWithDefaults() *CustomerFetchMandateAuthorizationsResponseData`

NewCustomerFetchMandateAuthorizationsResponseDataWithDefaults instantiates a new CustomerFetchMandateAuthorizationsResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CustomerFetchMandateAuthorizationsResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CustomerFetchMandateAuthorizationsResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CustomerFetchMandateAuthorizationsResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetStatus

`func (o *CustomerFetchMandateAuthorizationsResponseData) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *CustomerFetchMandateAuthorizationsResponseData) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *CustomerFetchMandateAuthorizationsResponseData) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetMandateId

`func (o *CustomerFetchMandateAuthorizationsResponseData) GetMandateId() int32`

GetMandateId returns the MandateId field if non-nil, zero value otherwise.

### GetMandateIdOk

`func (o *CustomerFetchMandateAuthorizationsResponseData) GetMandateIdOk() (*int32, bool)`

GetMandateIdOk returns a tuple with the MandateId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMandateId

`func (o *CustomerFetchMandateAuthorizationsResponseData) SetMandateId(v int32)`

SetMandateId sets MandateId field to given value.


### GetAuthorizationId

`func (o *CustomerFetchMandateAuthorizationsResponseData) GetAuthorizationId() int32`

GetAuthorizationId returns the AuthorizationId field if non-nil, zero value otherwise.

### GetAuthorizationIdOk

`func (o *CustomerFetchMandateAuthorizationsResponseData) GetAuthorizationIdOk() (*int32, bool)`

GetAuthorizationIdOk returns a tuple with the AuthorizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizationId

`func (o *CustomerFetchMandateAuthorizationsResponseData) SetAuthorizationId(v int32)`

SetAuthorizationId sets AuthorizationId field to given value.


### GetAuthorizationCode

`func (o *CustomerFetchMandateAuthorizationsResponseData) GetAuthorizationCode() string`

GetAuthorizationCode returns the AuthorizationCode field if non-nil, zero value otherwise.

### GetAuthorizationCodeOk

`func (o *CustomerFetchMandateAuthorizationsResponseData) GetAuthorizationCodeOk() (*string, bool)`

GetAuthorizationCodeOk returns a tuple with the AuthorizationCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizationCode

`func (o *CustomerFetchMandateAuthorizationsResponseData) SetAuthorizationCode(v string)`

SetAuthorizationCode sets AuthorizationCode field to given value.


### GetIntegrationId

`func (o *CustomerFetchMandateAuthorizationsResponseData) GetIntegrationId() int32`

GetIntegrationId returns the IntegrationId field if non-nil, zero value otherwise.

### GetIntegrationIdOk

`func (o *CustomerFetchMandateAuthorizationsResponseData) GetIntegrationIdOk() (*int32, bool)`

GetIntegrationIdOk returns a tuple with the IntegrationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegrationId

`func (o *CustomerFetchMandateAuthorizationsResponseData) SetIntegrationId(v int32)`

SetIntegrationId sets IntegrationId field to given value.


### GetAccountNumber

`func (o *CustomerFetchMandateAuthorizationsResponseData) GetAccountNumber() string`

GetAccountNumber returns the AccountNumber field if non-nil, zero value otherwise.

### GetAccountNumberOk

`func (o *CustomerFetchMandateAuthorizationsResponseData) GetAccountNumberOk() (*string, bool)`

GetAccountNumberOk returns a tuple with the AccountNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountNumber

`func (o *CustomerFetchMandateAuthorizationsResponseData) SetAccountNumber(v string)`

SetAccountNumber sets AccountNumber field to given value.


### GetBankCode

`func (o *CustomerFetchMandateAuthorizationsResponseData) GetBankCode() string`

GetBankCode returns the BankCode field if non-nil, zero value otherwise.

### GetBankCodeOk

`func (o *CustomerFetchMandateAuthorizationsResponseData) GetBankCodeOk() (*string, bool)`

GetBankCodeOk returns a tuple with the BankCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBankCode

`func (o *CustomerFetchMandateAuthorizationsResponseData) SetBankCode(v string)`

SetBankCode sets BankCode field to given value.


### GetBankName

`func (o *CustomerFetchMandateAuthorizationsResponseData) GetBankName() string`

GetBankName returns the BankName field if non-nil, zero value otherwise.

### GetBankNameOk

`func (o *CustomerFetchMandateAuthorizationsResponseData) GetBankNameOk() (*string, bool)`

GetBankNameOk returns a tuple with the BankName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBankName

`func (o *CustomerFetchMandateAuthorizationsResponseData) SetBankName(v string)`

SetBankName sets BankName field to given value.

### HasBankName

`func (o *CustomerFetchMandateAuthorizationsResponseData) HasBankName() bool`

HasBankName returns a boolean if a field has been set.

### SetBankNameNil

`func (o *CustomerFetchMandateAuthorizationsResponseData) SetBankNameNil(b bool)`

 SetBankNameNil sets the value for BankName to be an explicit nil

### UnsetBankName
`func (o *CustomerFetchMandateAuthorizationsResponseData) UnsetBankName()`

UnsetBankName ensures that no value is present for BankName, not even an explicit nil
### GetCustomer

`func (o *CustomerFetchMandateAuthorizationsResponseData) GetCustomer() CustomerFetchMandateAuthorizationsResponseDataCustomer`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *CustomerFetchMandateAuthorizationsResponseData) GetCustomerOk() (*CustomerFetchMandateAuthorizationsResponseDataCustomer, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *CustomerFetchMandateAuthorizationsResponseData) SetCustomer(v CustomerFetchMandateAuthorizationsResponseDataCustomer)`

SetCustomer sets Customer field to given value.


### GetAuthorizedAt

`func (o *CustomerFetchMandateAuthorizationsResponseData) GetAuthorizedAt() time.Time`

GetAuthorizedAt returns the AuthorizedAt field if non-nil, zero value otherwise.

### GetAuthorizedAtOk

`func (o *CustomerFetchMandateAuthorizationsResponseData) GetAuthorizedAtOk() (*time.Time, bool)`

GetAuthorizedAtOk returns a tuple with the AuthorizedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizedAt

`func (o *CustomerFetchMandateAuthorizationsResponseData) SetAuthorizedAt(v time.Time)`

SetAuthorizedAt sets AuthorizedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


