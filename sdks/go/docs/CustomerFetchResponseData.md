# CustomerFetchResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Transactions** | **[]interface{}** |  | 
**Subscriptions** | **[]interface{}** |  | 
**Authorizations** | **[]interface{}** |  | 
**FirstName** | **string** |  | 
**LastName** | **string** |  | 
**Email** | **string** |  | 
**Phone** | **string** |  | 
**Metadata** | [**BulkChargeFetchBulkBatchChargesResponseArrayCustomerMetadata**](BulkChargeFetchBulkBatchChargesResponseArrayCustomerMetadata.md) |  | 
**Domain** | **string** |  | 
**CustomerCode** | **string** |  | 
**RiskAction** | **string** |  | 
**Id** | **int32** |  | 
**Integration** | **int32** |  | 
**CreatedAt** | **string** |  | 
**UpdatedAt** | **string** |  | 
**TotalTransactions** | **int32** |  | 
**TotalTransactionValue** | **[]interface{}** |  | 
**DedicatedAccount** | **interface{}** |  | 
**DedicatedAccounts** | **[]interface{}** |  | 
**Identified** | **bool** |  | 
**Identifications** | **interface{}** |  | 

## Methods

### NewCustomerFetchResponseData

`func NewCustomerFetchResponseData(transactions []interface{}, subscriptions []interface{}, authorizations []interface{}, firstName string, lastName string, email string, phone string, metadata BulkChargeFetchBulkBatchChargesResponseArrayCustomerMetadata, domain string, customerCode string, riskAction string, id int32, integration int32, createdAt string, updatedAt string, totalTransactions int32, totalTransactionValue []interface{}, dedicatedAccount interface{}, dedicatedAccounts []interface{}, identified bool, identifications interface{}, ) *CustomerFetchResponseData`

NewCustomerFetchResponseData instantiates a new CustomerFetchResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomerFetchResponseDataWithDefaults

`func NewCustomerFetchResponseDataWithDefaults() *CustomerFetchResponseData`

NewCustomerFetchResponseDataWithDefaults instantiates a new CustomerFetchResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransactions

`func (o *CustomerFetchResponseData) GetTransactions() []interface{}`

GetTransactions returns the Transactions field if non-nil, zero value otherwise.

### GetTransactionsOk

`func (o *CustomerFetchResponseData) GetTransactionsOk() (*[]interface{}, bool)`

GetTransactionsOk returns a tuple with the Transactions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactions

`func (o *CustomerFetchResponseData) SetTransactions(v []interface{})`

SetTransactions sets Transactions field to given value.


### GetSubscriptions

`func (o *CustomerFetchResponseData) GetSubscriptions() []interface{}`

GetSubscriptions returns the Subscriptions field if non-nil, zero value otherwise.

### GetSubscriptionsOk

`func (o *CustomerFetchResponseData) GetSubscriptionsOk() (*[]interface{}, bool)`

GetSubscriptionsOk returns a tuple with the Subscriptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubscriptions

`func (o *CustomerFetchResponseData) SetSubscriptions(v []interface{})`

SetSubscriptions sets Subscriptions field to given value.


### GetAuthorizations

`func (o *CustomerFetchResponseData) GetAuthorizations() []interface{}`

GetAuthorizations returns the Authorizations field if non-nil, zero value otherwise.

### GetAuthorizationsOk

`func (o *CustomerFetchResponseData) GetAuthorizationsOk() (*[]interface{}, bool)`

GetAuthorizationsOk returns a tuple with the Authorizations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizations

`func (o *CustomerFetchResponseData) SetAuthorizations(v []interface{})`

SetAuthorizations sets Authorizations field to given value.


### GetFirstName

`func (o *CustomerFetchResponseData) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *CustomerFetchResponseData) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *CustomerFetchResponseData) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.


### GetLastName

`func (o *CustomerFetchResponseData) GetLastName() string`

GetLastName returns the LastName field if non-nil, zero value otherwise.

### GetLastNameOk

`func (o *CustomerFetchResponseData) GetLastNameOk() (*string, bool)`

GetLastNameOk returns a tuple with the LastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName

`func (o *CustomerFetchResponseData) SetLastName(v string)`

SetLastName sets LastName field to given value.


### GetEmail

`func (o *CustomerFetchResponseData) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *CustomerFetchResponseData) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *CustomerFetchResponseData) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetPhone

`func (o *CustomerFetchResponseData) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *CustomerFetchResponseData) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *CustomerFetchResponseData) SetPhone(v string)`

SetPhone sets Phone field to given value.


### GetMetadata

`func (o *CustomerFetchResponseData) GetMetadata() BulkChargeFetchBulkBatchChargesResponseArrayCustomerMetadata`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *CustomerFetchResponseData) GetMetadataOk() (*BulkChargeFetchBulkBatchChargesResponseArrayCustomerMetadata, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *CustomerFetchResponseData) SetMetadata(v BulkChargeFetchBulkBatchChargesResponseArrayCustomerMetadata)`

SetMetadata sets Metadata field to given value.


### GetDomain

`func (o *CustomerFetchResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *CustomerFetchResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *CustomerFetchResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetCustomerCode

`func (o *CustomerFetchResponseData) GetCustomerCode() string`

GetCustomerCode returns the CustomerCode field if non-nil, zero value otherwise.

### GetCustomerCodeOk

`func (o *CustomerFetchResponseData) GetCustomerCodeOk() (*string, bool)`

GetCustomerCodeOk returns a tuple with the CustomerCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerCode

`func (o *CustomerFetchResponseData) SetCustomerCode(v string)`

SetCustomerCode sets CustomerCode field to given value.


### GetRiskAction

`func (o *CustomerFetchResponseData) GetRiskAction() string`

GetRiskAction returns the RiskAction field if non-nil, zero value otherwise.

### GetRiskActionOk

`func (o *CustomerFetchResponseData) GetRiskActionOk() (*string, bool)`

GetRiskActionOk returns a tuple with the RiskAction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRiskAction

`func (o *CustomerFetchResponseData) SetRiskAction(v string)`

SetRiskAction sets RiskAction field to given value.


### GetId

`func (o *CustomerFetchResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CustomerFetchResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CustomerFetchResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetIntegration

`func (o *CustomerFetchResponseData) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *CustomerFetchResponseData) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *CustomerFetchResponseData) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetCreatedAt

`func (o *CustomerFetchResponseData) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *CustomerFetchResponseData) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *CustomerFetchResponseData) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *CustomerFetchResponseData) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *CustomerFetchResponseData) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *CustomerFetchResponseData) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.


### GetTotalTransactions

`func (o *CustomerFetchResponseData) GetTotalTransactions() int32`

GetTotalTransactions returns the TotalTransactions field if non-nil, zero value otherwise.

### GetTotalTransactionsOk

`func (o *CustomerFetchResponseData) GetTotalTransactionsOk() (*int32, bool)`

GetTotalTransactionsOk returns a tuple with the TotalTransactions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalTransactions

`func (o *CustomerFetchResponseData) SetTotalTransactions(v int32)`

SetTotalTransactions sets TotalTransactions field to given value.


### GetTotalTransactionValue

`func (o *CustomerFetchResponseData) GetTotalTransactionValue() []interface{}`

GetTotalTransactionValue returns the TotalTransactionValue field if non-nil, zero value otherwise.

### GetTotalTransactionValueOk

`func (o *CustomerFetchResponseData) GetTotalTransactionValueOk() (*[]interface{}, bool)`

GetTotalTransactionValueOk returns a tuple with the TotalTransactionValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalTransactionValue

`func (o *CustomerFetchResponseData) SetTotalTransactionValue(v []interface{})`

SetTotalTransactionValue sets TotalTransactionValue field to given value.


### GetDedicatedAccount

`func (o *CustomerFetchResponseData) GetDedicatedAccount() interface{}`

GetDedicatedAccount returns the DedicatedAccount field if non-nil, zero value otherwise.

### GetDedicatedAccountOk

`func (o *CustomerFetchResponseData) GetDedicatedAccountOk() (*interface{}, bool)`

GetDedicatedAccountOk returns a tuple with the DedicatedAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDedicatedAccount

`func (o *CustomerFetchResponseData) SetDedicatedAccount(v interface{})`

SetDedicatedAccount sets DedicatedAccount field to given value.


### SetDedicatedAccountNil

`func (o *CustomerFetchResponseData) SetDedicatedAccountNil(b bool)`

 SetDedicatedAccountNil sets the value for DedicatedAccount to be an explicit nil

### UnsetDedicatedAccount
`func (o *CustomerFetchResponseData) UnsetDedicatedAccount()`

UnsetDedicatedAccount ensures that no value is present for DedicatedAccount, not even an explicit nil
### GetDedicatedAccounts

`func (o *CustomerFetchResponseData) GetDedicatedAccounts() []interface{}`

GetDedicatedAccounts returns the DedicatedAccounts field if non-nil, zero value otherwise.

### GetDedicatedAccountsOk

`func (o *CustomerFetchResponseData) GetDedicatedAccountsOk() (*[]interface{}, bool)`

GetDedicatedAccountsOk returns a tuple with the DedicatedAccounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDedicatedAccounts

`func (o *CustomerFetchResponseData) SetDedicatedAccounts(v []interface{})`

SetDedicatedAccounts sets DedicatedAccounts field to given value.


### SetDedicatedAccountsNil

`func (o *CustomerFetchResponseData) SetDedicatedAccountsNil(b bool)`

 SetDedicatedAccountsNil sets the value for DedicatedAccounts to be an explicit nil

### UnsetDedicatedAccounts
`func (o *CustomerFetchResponseData) UnsetDedicatedAccounts()`

UnsetDedicatedAccounts ensures that no value is present for DedicatedAccounts, not even an explicit nil
### GetIdentified

`func (o *CustomerFetchResponseData) GetIdentified() bool`

GetIdentified returns the Identified field if non-nil, zero value otherwise.

### GetIdentifiedOk

`func (o *CustomerFetchResponseData) GetIdentifiedOk() (*bool, bool)`

GetIdentifiedOk returns a tuple with the Identified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentified

`func (o *CustomerFetchResponseData) SetIdentified(v bool)`

SetIdentified sets Identified field to given value.


### GetIdentifications

`func (o *CustomerFetchResponseData) GetIdentifications() interface{}`

GetIdentifications returns the Identifications field if non-nil, zero value otherwise.

### GetIdentificationsOk

`func (o *CustomerFetchResponseData) GetIdentificationsOk() (*interface{}, bool)`

GetIdentificationsOk returns a tuple with the Identifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentifications

`func (o *CustomerFetchResponseData) SetIdentifications(v interface{})`

SetIdentifications sets Identifications field to given value.


### SetIdentificationsNil

`func (o *CustomerFetchResponseData) SetIdentificationsNil(b bool)`

 SetIdentificationsNil sets the value for Identifications to be an explicit nil

### UnsetIdentifications
`func (o *CustomerFetchResponseData) UnsetIdentifications()`

UnsetIdentifications ensures that no value is present for Identifications, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


