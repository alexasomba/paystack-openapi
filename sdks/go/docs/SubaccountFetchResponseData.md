# SubaccountFetchResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Integration** | **int32** |  | 
**AccountName** | Pointer to **NullableString** |  | [optional] 
**Bank** | **int32** |  | 
**ManagedByIntegration** | **int32** |  | 
**Domain** | **string** |  | 
**SubaccountCode** | **string** |  | 
**BusinessName** | **string** |  | 
**Description** | **string** |  | 
**PrimaryContactName** | **string** |  | 
**PrimaryContactEmail** | **string** |  | 
**PrimaryContactPhone** | **string** |  | 
**Metadata** | **string** |  | 
**PercentageCharge** | **float32** |  | 
**IsVerified** | **bool** |  | 
**SettlementBank** | **string** |  | 
**AccountNumber** | **string** |  | 
**SettlementSchedule** | **string** |  | 
**Active** | **bool** |  | 
**Migrate** | **bool** |  | 
**Currency** | **string** |  | 
**Product** | **string** |  | 
**Id** | **int32** |  | 
**CreatedAt** | **string** |  | 
**UpdatedAt** | **string** |  | 

## Methods

### NewSubaccountFetchResponseData

`func NewSubaccountFetchResponseData(integration int32, bank int32, managedByIntegration int32, domain string, subaccountCode string, businessName string, description string, primaryContactName string, primaryContactEmail string, primaryContactPhone string, metadata string, percentageCharge float32, isVerified bool, settlementBank string, accountNumber string, settlementSchedule string, active bool, migrate bool, currency string, product string, id int32, createdAt string, updatedAt string, ) *SubaccountFetchResponseData`

NewSubaccountFetchResponseData instantiates a new SubaccountFetchResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubaccountFetchResponseDataWithDefaults

`func NewSubaccountFetchResponseDataWithDefaults() *SubaccountFetchResponseData`

NewSubaccountFetchResponseDataWithDefaults instantiates a new SubaccountFetchResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIntegration

`func (o *SubaccountFetchResponseData) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *SubaccountFetchResponseData) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *SubaccountFetchResponseData) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetAccountName

`func (o *SubaccountFetchResponseData) GetAccountName() string`

GetAccountName returns the AccountName field if non-nil, zero value otherwise.

### GetAccountNameOk

`func (o *SubaccountFetchResponseData) GetAccountNameOk() (*string, bool)`

GetAccountNameOk returns a tuple with the AccountName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountName

`func (o *SubaccountFetchResponseData) SetAccountName(v string)`

SetAccountName sets AccountName field to given value.

### HasAccountName

`func (o *SubaccountFetchResponseData) HasAccountName() bool`

HasAccountName returns a boolean if a field has been set.

### SetAccountNameNil

`func (o *SubaccountFetchResponseData) SetAccountNameNil(b bool)`

 SetAccountNameNil sets the value for AccountName to be an explicit nil

### UnsetAccountName
`func (o *SubaccountFetchResponseData) UnsetAccountName()`

UnsetAccountName ensures that no value is present for AccountName, not even an explicit nil
### GetBank

`func (o *SubaccountFetchResponseData) GetBank() int32`

GetBank returns the Bank field if non-nil, zero value otherwise.

### GetBankOk

`func (o *SubaccountFetchResponseData) GetBankOk() (*int32, bool)`

GetBankOk returns a tuple with the Bank field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBank

`func (o *SubaccountFetchResponseData) SetBank(v int32)`

SetBank sets Bank field to given value.


### GetManagedByIntegration

`func (o *SubaccountFetchResponseData) GetManagedByIntegration() int32`

GetManagedByIntegration returns the ManagedByIntegration field if non-nil, zero value otherwise.

### GetManagedByIntegrationOk

`func (o *SubaccountFetchResponseData) GetManagedByIntegrationOk() (*int32, bool)`

GetManagedByIntegrationOk returns a tuple with the ManagedByIntegration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedByIntegration

`func (o *SubaccountFetchResponseData) SetManagedByIntegration(v int32)`

SetManagedByIntegration sets ManagedByIntegration field to given value.


### GetDomain

`func (o *SubaccountFetchResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *SubaccountFetchResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *SubaccountFetchResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetSubaccountCode

`func (o *SubaccountFetchResponseData) GetSubaccountCode() string`

GetSubaccountCode returns the SubaccountCode field if non-nil, zero value otherwise.

### GetSubaccountCodeOk

`func (o *SubaccountFetchResponseData) GetSubaccountCodeOk() (*string, bool)`

GetSubaccountCodeOk returns a tuple with the SubaccountCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubaccountCode

`func (o *SubaccountFetchResponseData) SetSubaccountCode(v string)`

SetSubaccountCode sets SubaccountCode field to given value.


### GetBusinessName

`func (o *SubaccountFetchResponseData) GetBusinessName() string`

GetBusinessName returns the BusinessName field if non-nil, zero value otherwise.

### GetBusinessNameOk

`func (o *SubaccountFetchResponseData) GetBusinessNameOk() (*string, bool)`

GetBusinessNameOk returns a tuple with the BusinessName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessName

`func (o *SubaccountFetchResponseData) SetBusinessName(v string)`

SetBusinessName sets BusinessName field to given value.


### GetDescription

`func (o *SubaccountFetchResponseData) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *SubaccountFetchResponseData) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *SubaccountFetchResponseData) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetPrimaryContactName

`func (o *SubaccountFetchResponseData) GetPrimaryContactName() string`

GetPrimaryContactName returns the PrimaryContactName field if non-nil, zero value otherwise.

### GetPrimaryContactNameOk

`func (o *SubaccountFetchResponseData) GetPrimaryContactNameOk() (*string, bool)`

GetPrimaryContactNameOk returns a tuple with the PrimaryContactName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryContactName

`func (o *SubaccountFetchResponseData) SetPrimaryContactName(v string)`

SetPrimaryContactName sets PrimaryContactName field to given value.


### GetPrimaryContactEmail

`func (o *SubaccountFetchResponseData) GetPrimaryContactEmail() string`

GetPrimaryContactEmail returns the PrimaryContactEmail field if non-nil, zero value otherwise.

### GetPrimaryContactEmailOk

`func (o *SubaccountFetchResponseData) GetPrimaryContactEmailOk() (*string, bool)`

GetPrimaryContactEmailOk returns a tuple with the PrimaryContactEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryContactEmail

`func (o *SubaccountFetchResponseData) SetPrimaryContactEmail(v string)`

SetPrimaryContactEmail sets PrimaryContactEmail field to given value.


### GetPrimaryContactPhone

`func (o *SubaccountFetchResponseData) GetPrimaryContactPhone() string`

GetPrimaryContactPhone returns the PrimaryContactPhone field if non-nil, zero value otherwise.

### GetPrimaryContactPhoneOk

`func (o *SubaccountFetchResponseData) GetPrimaryContactPhoneOk() (*string, bool)`

GetPrimaryContactPhoneOk returns a tuple with the PrimaryContactPhone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryContactPhone

`func (o *SubaccountFetchResponseData) SetPrimaryContactPhone(v string)`

SetPrimaryContactPhone sets PrimaryContactPhone field to given value.


### GetMetadata

`func (o *SubaccountFetchResponseData) GetMetadata() string`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *SubaccountFetchResponseData) GetMetadataOk() (*string, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *SubaccountFetchResponseData) SetMetadata(v string)`

SetMetadata sets Metadata field to given value.


### GetPercentageCharge

`func (o *SubaccountFetchResponseData) GetPercentageCharge() float32`

GetPercentageCharge returns the PercentageCharge field if non-nil, zero value otherwise.

### GetPercentageChargeOk

`func (o *SubaccountFetchResponseData) GetPercentageChargeOk() (*float32, bool)`

GetPercentageChargeOk returns a tuple with the PercentageCharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentageCharge

`func (o *SubaccountFetchResponseData) SetPercentageCharge(v float32)`

SetPercentageCharge sets PercentageCharge field to given value.


### GetIsVerified

`func (o *SubaccountFetchResponseData) GetIsVerified() bool`

GetIsVerified returns the IsVerified field if non-nil, zero value otherwise.

### GetIsVerifiedOk

`func (o *SubaccountFetchResponseData) GetIsVerifiedOk() (*bool, bool)`

GetIsVerifiedOk returns a tuple with the IsVerified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsVerified

`func (o *SubaccountFetchResponseData) SetIsVerified(v bool)`

SetIsVerified sets IsVerified field to given value.


### GetSettlementBank

`func (o *SubaccountFetchResponseData) GetSettlementBank() string`

GetSettlementBank returns the SettlementBank field if non-nil, zero value otherwise.

### GetSettlementBankOk

`func (o *SubaccountFetchResponseData) GetSettlementBankOk() (*string, bool)`

GetSettlementBankOk returns a tuple with the SettlementBank field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSettlementBank

`func (o *SubaccountFetchResponseData) SetSettlementBank(v string)`

SetSettlementBank sets SettlementBank field to given value.


### GetAccountNumber

`func (o *SubaccountFetchResponseData) GetAccountNumber() string`

GetAccountNumber returns the AccountNumber field if non-nil, zero value otherwise.

### GetAccountNumberOk

`func (o *SubaccountFetchResponseData) GetAccountNumberOk() (*string, bool)`

GetAccountNumberOk returns a tuple with the AccountNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountNumber

`func (o *SubaccountFetchResponseData) SetAccountNumber(v string)`

SetAccountNumber sets AccountNumber field to given value.


### GetSettlementSchedule

`func (o *SubaccountFetchResponseData) GetSettlementSchedule() string`

GetSettlementSchedule returns the SettlementSchedule field if non-nil, zero value otherwise.

### GetSettlementScheduleOk

`func (o *SubaccountFetchResponseData) GetSettlementScheduleOk() (*string, bool)`

GetSettlementScheduleOk returns a tuple with the SettlementSchedule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSettlementSchedule

`func (o *SubaccountFetchResponseData) SetSettlementSchedule(v string)`

SetSettlementSchedule sets SettlementSchedule field to given value.


### GetActive

`func (o *SubaccountFetchResponseData) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *SubaccountFetchResponseData) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *SubaccountFetchResponseData) SetActive(v bool)`

SetActive sets Active field to given value.


### GetMigrate

`func (o *SubaccountFetchResponseData) GetMigrate() bool`

GetMigrate returns the Migrate field if non-nil, zero value otherwise.

### GetMigrateOk

`func (o *SubaccountFetchResponseData) GetMigrateOk() (*bool, bool)`

GetMigrateOk returns a tuple with the Migrate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMigrate

`func (o *SubaccountFetchResponseData) SetMigrate(v bool)`

SetMigrate sets Migrate field to given value.


### GetCurrency

`func (o *SubaccountFetchResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *SubaccountFetchResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *SubaccountFetchResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetProduct

`func (o *SubaccountFetchResponseData) GetProduct() string`

GetProduct returns the Product field if non-nil, zero value otherwise.

### GetProductOk

`func (o *SubaccountFetchResponseData) GetProductOk() (*string, bool)`

GetProductOk returns a tuple with the Product field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProduct

`func (o *SubaccountFetchResponseData) SetProduct(v string)`

SetProduct sets Product field to given value.


### GetId

`func (o *SubaccountFetchResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SubaccountFetchResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SubaccountFetchResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetCreatedAt

`func (o *SubaccountFetchResponseData) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *SubaccountFetchResponseData) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *SubaccountFetchResponseData) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *SubaccountFetchResponseData) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *SubaccountFetchResponseData) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *SubaccountFetchResponseData) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


