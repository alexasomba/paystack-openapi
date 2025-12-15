# CustomerListResponseArray

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Integration** | **int32** |  | 
**FirstName** | **NullableString** |  | 
**LastName** | **NullableString** |  | 
**Email** | **string** |  | 
**Phone** | **NullableString** |  | 
**Metadata** | **map[string]interface{}** |  | 
**Domain** | **string** |  | 
**CustomerCode** | **string** |  | 
**RiskAction** | **string** |  | 
**Id** | **int32** |  | 
**CreatedAt** | **string** |  | 
**UpdatedAt** | **string** |  | 

## Methods

### NewCustomerListResponseArray

`func NewCustomerListResponseArray(integration int32, firstName NullableString, lastName NullableString, email string, phone NullableString, metadata map[string]interface{}, domain string, customerCode string, riskAction string, id int32, createdAt string, updatedAt string, ) *CustomerListResponseArray`

NewCustomerListResponseArray instantiates a new CustomerListResponseArray object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomerListResponseArrayWithDefaults

`func NewCustomerListResponseArrayWithDefaults() *CustomerListResponseArray`

NewCustomerListResponseArrayWithDefaults instantiates a new CustomerListResponseArray object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIntegration

`func (o *CustomerListResponseArray) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *CustomerListResponseArray) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *CustomerListResponseArray) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetFirstName

`func (o *CustomerListResponseArray) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *CustomerListResponseArray) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *CustomerListResponseArray) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.


### SetFirstNameNil

`func (o *CustomerListResponseArray) SetFirstNameNil(b bool)`

 SetFirstNameNil sets the value for FirstName to be an explicit nil

### UnsetFirstName
`func (o *CustomerListResponseArray) UnsetFirstName()`

UnsetFirstName ensures that no value is present for FirstName, not even an explicit nil
### GetLastName

`func (o *CustomerListResponseArray) GetLastName() string`

GetLastName returns the LastName field if non-nil, zero value otherwise.

### GetLastNameOk

`func (o *CustomerListResponseArray) GetLastNameOk() (*string, bool)`

GetLastNameOk returns a tuple with the LastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName

`func (o *CustomerListResponseArray) SetLastName(v string)`

SetLastName sets LastName field to given value.


### SetLastNameNil

`func (o *CustomerListResponseArray) SetLastNameNil(b bool)`

 SetLastNameNil sets the value for LastName to be an explicit nil

### UnsetLastName
`func (o *CustomerListResponseArray) UnsetLastName()`

UnsetLastName ensures that no value is present for LastName, not even an explicit nil
### GetEmail

`func (o *CustomerListResponseArray) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *CustomerListResponseArray) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *CustomerListResponseArray) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetPhone

`func (o *CustomerListResponseArray) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *CustomerListResponseArray) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *CustomerListResponseArray) SetPhone(v string)`

SetPhone sets Phone field to given value.


### SetPhoneNil

`func (o *CustomerListResponseArray) SetPhoneNil(b bool)`

 SetPhoneNil sets the value for Phone to be an explicit nil

### UnsetPhone
`func (o *CustomerListResponseArray) UnsetPhone()`

UnsetPhone ensures that no value is present for Phone, not even an explicit nil
### GetMetadata

`func (o *CustomerListResponseArray) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *CustomerListResponseArray) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *CustomerListResponseArray) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.


### SetMetadataNil

`func (o *CustomerListResponseArray) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *CustomerListResponseArray) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil
### GetDomain

`func (o *CustomerListResponseArray) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *CustomerListResponseArray) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *CustomerListResponseArray) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetCustomerCode

`func (o *CustomerListResponseArray) GetCustomerCode() string`

GetCustomerCode returns the CustomerCode field if non-nil, zero value otherwise.

### GetCustomerCodeOk

`func (o *CustomerListResponseArray) GetCustomerCodeOk() (*string, bool)`

GetCustomerCodeOk returns a tuple with the CustomerCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerCode

`func (o *CustomerListResponseArray) SetCustomerCode(v string)`

SetCustomerCode sets CustomerCode field to given value.


### GetRiskAction

`func (o *CustomerListResponseArray) GetRiskAction() string`

GetRiskAction returns the RiskAction field if non-nil, zero value otherwise.

### GetRiskActionOk

`func (o *CustomerListResponseArray) GetRiskActionOk() (*string, bool)`

GetRiskActionOk returns a tuple with the RiskAction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRiskAction

`func (o *CustomerListResponseArray) SetRiskAction(v string)`

SetRiskAction sets RiskAction field to given value.


### GetId

`func (o *CustomerListResponseArray) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CustomerListResponseArray) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CustomerListResponseArray) SetId(v int32)`

SetId sets Id field to given value.


### GetCreatedAt

`func (o *CustomerListResponseArray) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *CustomerListResponseArray) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *CustomerListResponseArray) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *CustomerListResponseArray) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *CustomerListResponseArray) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *CustomerListResponseArray) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


