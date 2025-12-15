# CustomerCreateResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Transactions** | **[]interface{}** |  | 
**Subscriptions** | **[]interface{}** |  | 
**Authorizations** | **[]interface{}** |  | 
**Email** | **string** |  | 
**FirstName** | **string** |  | 
**LastName** | **string** |  | 
**Phone** | **string** |  | 
**Integration** | **int32** |  | 
**Domain** | **string** |  | 
**Metadata** | [**BulkChargeFetchBulkBatchChargesResponseArrayCustomerMetadata**](BulkChargeFetchBulkBatchChargesResponseArrayCustomerMetadata.md) |  | 
**CustomerCode** | **string** |  | 
**RiskAction** | **string** |  | 
**Id** | **int32** |  | 
**CreatedAt** | **string** |  | 
**UpdatedAt** | **string** |  | 
**Identified** | **bool** |  | 
**Identifications** | **interface{}** |  | 

## Methods

### NewCustomerCreateResponseData

`func NewCustomerCreateResponseData(transactions []interface{}, subscriptions []interface{}, authorizations []interface{}, email string, firstName string, lastName string, phone string, integration int32, domain string, metadata BulkChargeFetchBulkBatchChargesResponseArrayCustomerMetadata, customerCode string, riskAction string, id int32, createdAt string, updatedAt string, identified bool, identifications interface{}, ) *CustomerCreateResponseData`

NewCustomerCreateResponseData instantiates a new CustomerCreateResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomerCreateResponseDataWithDefaults

`func NewCustomerCreateResponseDataWithDefaults() *CustomerCreateResponseData`

NewCustomerCreateResponseDataWithDefaults instantiates a new CustomerCreateResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransactions

`func (o *CustomerCreateResponseData) GetTransactions() []interface{}`

GetTransactions returns the Transactions field if non-nil, zero value otherwise.

### GetTransactionsOk

`func (o *CustomerCreateResponseData) GetTransactionsOk() (*[]interface{}, bool)`

GetTransactionsOk returns a tuple with the Transactions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactions

`func (o *CustomerCreateResponseData) SetTransactions(v []interface{})`

SetTransactions sets Transactions field to given value.


### GetSubscriptions

`func (o *CustomerCreateResponseData) GetSubscriptions() []interface{}`

GetSubscriptions returns the Subscriptions field if non-nil, zero value otherwise.

### GetSubscriptionsOk

`func (o *CustomerCreateResponseData) GetSubscriptionsOk() (*[]interface{}, bool)`

GetSubscriptionsOk returns a tuple with the Subscriptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubscriptions

`func (o *CustomerCreateResponseData) SetSubscriptions(v []interface{})`

SetSubscriptions sets Subscriptions field to given value.


### GetAuthorizations

`func (o *CustomerCreateResponseData) GetAuthorizations() []interface{}`

GetAuthorizations returns the Authorizations field if non-nil, zero value otherwise.

### GetAuthorizationsOk

`func (o *CustomerCreateResponseData) GetAuthorizationsOk() (*[]interface{}, bool)`

GetAuthorizationsOk returns a tuple with the Authorizations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizations

`func (o *CustomerCreateResponseData) SetAuthorizations(v []interface{})`

SetAuthorizations sets Authorizations field to given value.


### GetEmail

`func (o *CustomerCreateResponseData) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *CustomerCreateResponseData) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *CustomerCreateResponseData) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetFirstName

`func (o *CustomerCreateResponseData) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *CustomerCreateResponseData) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *CustomerCreateResponseData) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.


### GetLastName

`func (o *CustomerCreateResponseData) GetLastName() string`

GetLastName returns the LastName field if non-nil, zero value otherwise.

### GetLastNameOk

`func (o *CustomerCreateResponseData) GetLastNameOk() (*string, bool)`

GetLastNameOk returns a tuple with the LastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName

`func (o *CustomerCreateResponseData) SetLastName(v string)`

SetLastName sets LastName field to given value.


### GetPhone

`func (o *CustomerCreateResponseData) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *CustomerCreateResponseData) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *CustomerCreateResponseData) SetPhone(v string)`

SetPhone sets Phone field to given value.


### GetIntegration

`func (o *CustomerCreateResponseData) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *CustomerCreateResponseData) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *CustomerCreateResponseData) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetDomain

`func (o *CustomerCreateResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *CustomerCreateResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *CustomerCreateResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetMetadata

`func (o *CustomerCreateResponseData) GetMetadata() BulkChargeFetchBulkBatchChargesResponseArrayCustomerMetadata`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *CustomerCreateResponseData) GetMetadataOk() (*BulkChargeFetchBulkBatchChargesResponseArrayCustomerMetadata, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *CustomerCreateResponseData) SetMetadata(v BulkChargeFetchBulkBatchChargesResponseArrayCustomerMetadata)`

SetMetadata sets Metadata field to given value.


### GetCustomerCode

`func (o *CustomerCreateResponseData) GetCustomerCode() string`

GetCustomerCode returns the CustomerCode field if non-nil, zero value otherwise.

### GetCustomerCodeOk

`func (o *CustomerCreateResponseData) GetCustomerCodeOk() (*string, bool)`

GetCustomerCodeOk returns a tuple with the CustomerCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerCode

`func (o *CustomerCreateResponseData) SetCustomerCode(v string)`

SetCustomerCode sets CustomerCode field to given value.


### GetRiskAction

`func (o *CustomerCreateResponseData) GetRiskAction() string`

GetRiskAction returns the RiskAction field if non-nil, zero value otherwise.

### GetRiskActionOk

`func (o *CustomerCreateResponseData) GetRiskActionOk() (*string, bool)`

GetRiskActionOk returns a tuple with the RiskAction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRiskAction

`func (o *CustomerCreateResponseData) SetRiskAction(v string)`

SetRiskAction sets RiskAction field to given value.


### GetId

`func (o *CustomerCreateResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CustomerCreateResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CustomerCreateResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetCreatedAt

`func (o *CustomerCreateResponseData) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *CustomerCreateResponseData) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *CustomerCreateResponseData) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *CustomerCreateResponseData) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *CustomerCreateResponseData) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *CustomerCreateResponseData) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.


### GetIdentified

`func (o *CustomerCreateResponseData) GetIdentified() bool`

GetIdentified returns the Identified field if non-nil, zero value otherwise.

### GetIdentifiedOk

`func (o *CustomerCreateResponseData) GetIdentifiedOk() (*bool, bool)`

GetIdentifiedOk returns a tuple with the Identified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentified

`func (o *CustomerCreateResponseData) SetIdentified(v bool)`

SetIdentified sets Identified field to given value.


### GetIdentifications

`func (o *CustomerCreateResponseData) GetIdentifications() interface{}`

GetIdentifications returns the Identifications field if non-nil, zero value otherwise.

### GetIdentificationsOk

`func (o *CustomerCreateResponseData) GetIdentificationsOk() (*interface{}, bool)`

GetIdentificationsOk returns a tuple with the Identifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentifications

`func (o *CustomerCreateResponseData) SetIdentifications(v interface{})`

SetIdentifications sets Identifications field to given value.


### SetIdentificationsNil

`func (o *CustomerCreateResponseData) SetIdentificationsNil(b bool)`

 SetIdentificationsNil sets the value for Identifications to be an explicit nil

### UnsetIdentifications
`func (o *CustomerCreateResponseData) UnsetIdentifications()`

UnsetIdentifications ensures that no value is present for Identifications, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


