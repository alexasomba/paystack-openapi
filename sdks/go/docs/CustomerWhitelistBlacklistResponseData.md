# CustomerWhitelistBlacklistResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Transactions** | **[]map[string]interface{}** |  | 
**Subscriptions** | **[]map[string]interface{}** |  | 
**Authorizations** | **[]map[string]interface{}** |  | 
**FirstName** | **string** |  | 
**LastName** | **string** |  | 
**Email** | **string** |  | 
**Phone** | **string** |  | 
**Metadata** | **map[string]interface{}** |  | 
**Domain** | **string** |  | 
**CustomerCode** | **string** |  | 
**RiskAction** | **string** |  | 
**Id** | **int32** |  | 
**Integration** | **int32** |  | 
**CreatedAt** | **string** |  | 
**UpdatedAt** | **string** |  | 
**Identified** | **bool** |  | 
**Identifications** | **map[string]interface{}** |  | 

## Methods

### NewCustomerWhitelistBlacklistResponseData

`func NewCustomerWhitelistBlacklistResponseData(transactions []map[string]interface{}, subscriptions []map[string]interface{}, authorizations []map[string]interface{}, firstName string, lastName string, email string, phone string, metadata map[string]interface{}, domain string, customerCode string, riskAction string, id int32, integration int32, createdAt string, updatedAt string, identified bool, identifications map[string]interface{}, ) *CustomerWhitelistBlacklistResponseData`

NewCustomerWhitelistBlacklistResponseData instantiates a new CustomerWhitelistBlacklistResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomerWhitelistBlacklistResponseDataWithDefaults

`func NewCustomerWhitelistBlacklistResponseDataWithDefaults() *CustomerWhitelistBlacklistResponseData`

NewCustomerWhitelistBlacklistResponseDataWithDefaults instantiates a new CustomerWhitelistBlacklistResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransactions

`func (o *CustomerWhitelistBlacklistResponseData) GetTransactions() []map[string]interface{}`

GetTransactions returns the Transactions field if non-nil, zero value otherwise.

### GetTransactionsOk

`func (o *CustomerWhitelistBlacklistResponseData) GetTransactionsOk() (*[]map[string]interface{}, bool)`

GetTransactionsOk returns a tuple with the Transactions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactions

`func (o *CustomerWhitelistBlacklistResponseData) SetTransactions(v []map[string]interface{})`

SetTransactions sets Transactions field to given value.


### GetSubscriptions

`func (o *CustomerWhitelistBlacklistResponseData) GetSubscriptions() []map[string]interface{}`

GetSubscriptions returns the Subscriptions field if non-nil, zero value otherwise.

### GetSubscriptionsOk

`func (o *CustomerWhitelistBlacklistResponseData) GetSubscriptionsOk() (*[]map[string]interface{}, bool)`

GetSubscriptionsOk returns a tuple with the Subscriptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubscriptions

`func (o *CustomerWhitelistBlacklistResponseData) SetSubscriptions(v []map[string]interface{})`

SetSubscriptions sets Subscriptions field to given value.


### GetAuthorizations

`func (o *CustomerWhitelistBlacklistResponseData) GetAuthorizations() []map[string]interface{}`

GetAuthorizations returns the Authorizations field if non-nil, zero value otherwise.

### GetAuthorizationsOk

`func (o *CustomerWhitelistBlacklistResponseData) GetAuthorizationsOk() (*[]map[string]interface{}, bool)`

GetAuthorizationsOk returns a tuple with the Authorizations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizations

`func (o *CustomerWhitelistBlacklistResponseData) SetAuthorizations(v []map[string]interface{})`

SetAuthorizations sets Authorizations field to given value.


### GetFirstName

`func (o *CustomerWhitelistBlacklistResponseData) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *CustomerWhitelistBlacklistResponseData) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *CustomerWhitelistBlacklistResponseData) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.


### GetLastName

`func (o *CustomerWhitelistBlacklistResponseData) GetLastName() string`

GetLastName returns the LastName field if non-nil, zero value otherwise.

### GetLastNameOk

`func (o *CustomerWhitelistBlacklistResponseData) GetLastNameOk() (*string, bool)`

GetLastNameOk returns a tuple with the LastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName

`func (o *CustomerWhitelistBlacklistResponseData) SetLastName(v string)`

SetLastName sets LastName field to given value.


### GetEmail

`func (o *CustomerWhitelistBlacklistResponseData) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *CustomerWhitelistBlacklistResponseData) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *CustomerWhitelistBlacklistResponseData) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetPhone

`func (o *CustomerWhitelistBlacklistResponseData) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *CustomerWhitelistBlacklistResponseData) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *CustomerWhitelistBlacklistResponseData) SetPhone(v string)`

SetPhone sets Phone field to given value.


### GetMetadata

`func (o *CustomerWhitelistBlacklistResponseData) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *CustomerWhitelistBlacklistResponseData) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *CustomerWhitelistBlacklistResponseData) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.


### GetDomain

`func (o *CustomerWhitelistBlacklistResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *CustomerWhitelistBlacklistResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *CustomerWhitelistBlacklistResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetCustomerCode

`func (o *CustomerWhitelistBlacklistResponseData) GetCustomerCode() string`

GetCustomerCode returns the CustomerCode field if non-nil, zero value otherwise.

### GetCustomerCodeOk

`func (o *CustomerWhitelistBlacklistResponseData) GetCustomerCodeOk() (*string, bool)`

GetCustomerCodeOk returns a tuple with the CustomerCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerCode

`func (o *CustomerWhitelistBlacklistResponseData) SetCustomerCode(v string)`

SetCustomerCode sets CustomerCode field to given value.


### GetRiskAction

`func (o *CustomerWhitelistBlacklistResponseData) GetRiskAction() string`

GetRiskAction returns the RiskAction field if non-nil, zero value otherwise.

### GetRiskActionOk

`func (o *CustomerWhitelistBlacklistResponseData) GetRiskActionOk() (*string, bool)`

GetRiskActionOk returns a tuple with the RiskAction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRiskAction

`func (o *CustomerWhitelistBlacklistResponseData) SetRiskAction(v string)`

SetRiskAction sets RiskAction field to given value.


### GetId

`func (o *CustomerWhitelistBlacklistResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CustomerWhitelistBlacklistResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CustomerWhitelistBlacklistResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetIntegration

`func (o *CustomerWhitelistBlacklistResponseData) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *CustomerWhitelistBlacklistResponseData) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *CustomerWhitelistBlacklistResponseData) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetCreatedAt

`func (o *CustomerWhitelistBlacklistResponseData) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *CustomerWhitelistBlacklistResponseData) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *CustomerWhitelistBlacklistResponseData) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *CustomerWhitelistBlacklistResponseData) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *CustomerWhitelistBlacklistResponseData) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *CustomerWhitelistBlacklistResponseData) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.


### GetIdentified

`func (o *CustomerWhitelistBlacklistResponseData) GetIdentified() bool`

GetIdentified returns the Identified field if non-nil, zero value otherwise.

### GetIdentifiedOk

`func (o *CustomerWhitelistBlacklistResponseData) GetIdentifiedOk() (*bool, bool)`

GetIdentifiedOk returns a tuple with the Identified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentified

`func (o *CustomerWhitelistBlacklistResponseData) SetIdentified(v bool)`

SetIdentified sets Identified field to given value.


### GetIdentifications

`func (o *CustomerWhitelistBlacklistResponseData) GetIdentifications() map[string]interface{}`

GetIdentifications returns the Identifications field if non-nil, zero value otherwise.

### GetIdentificationsOk

`func (o *CustomerWhitelistBlacklistResponseData) GetIdentificationsOk() (*map[string]interface{}, bool)`

GetIdentificationsOk returns a tuple with the Identifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentifications

`func (o *CustomerWhitelistBlacklistResponseData) SetIdentifications(v map[string]interface{})`

SetIdentifications sets Identifications field to given value.


### SetIdentificationsNil

`func (o *CustomerWhitelistBlacklistResponseData) SetIdentificationsNil(b bool)`

 SetIdentificationsNil sets the value for Identifications to be an explicit nil

### UnsetIdentifications
`func (o *CustomerWhitelistBlacklistResponseData) UnsetIdentifications()`

UnsetIdentifications ensures that no value is present for Identifications, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


