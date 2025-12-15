# SubaccountUpdateResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Domain** | **string** |  | 
**SubaccountCode** | **string** |  | 
**AccountName** | Pointer to **NullableString** |  | [optional] 
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
**Integration** | **int32** |  | 
**Bank** | **int32** |  | 
**ManagedByIntegration** | **int32** |  | 
**CreatedAt** | **string** |  | 
**UpdatedAt** | **string** |  | 

## Methods

### NewSubaccountUpdateResponseData

`func NewSubaccountUpdateResponseData(domain string, subaccountCode string, businessName string, description string, primaryContactName string, primaryContactEmail string, primaryContactPhone string, metadata string, percentageCharge float32, isVerified bool, settlementBank string, accountNumber string, settlementSchedule string, active bool, migrate bool, currency string, product string, id int32, integration int32, bank int32, managedByIntegration int32, createdAt string, updatedAt string, ) *SubaccountUpdateResponseData`

NewSubaccountUpdateResponseData instantiates a new SubaccountUpdateResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubaccountUpdateResponseDataWithDefaults

`func NewSubaccountUpdateResponseDataWithDefaults() *SubaccountUpdateResponseData`

NewSubaccountUpdateResponseDataWithDefaults instantiates a new SubaccountUpdateResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDomain

`func (o *SubaccountUpdateResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *SubaccountUpdateResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *SubaccountUpdateResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetSubaccountCode

`func (o *SubaccountUpdateResponseData) GetSubaccountCode() string`

GetSubaccountCode returns the SubaccountCode field if non-nil, zero value otherwise.

### GetSubaccountCodeOk

`func (o *SubaccountUpdateResponseData) GetSubaccountCodeOk() (*string, bool)`

GetSubaccountCodeOk returns a tuple with the SubaccountCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubaccountCode

`func (o *SubaccountUpdateResponseData) SetSubaccountCode(v string)`

SetSubaccountCode sets SubaccountCode field to given value.


### GetAccountName

`func (o *SubaccountUpdateResponseData) GetAccountName() string`

GetAccountName returns the AccountName field if non-nil, zero value otherwise.

### GetAccountNameOk

`func (o *SubaccountUpdateResponseData) GetAccountNameOk() (*string, bool)`

GetAccountNameOk returns a tuple with the AccountName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountName

`func (o *SubaccountUpdateResponseData) SetAccountName(v string)`

SetAccountName sets AccountName field to given value.

### HasAccountName

`func (o *SubaccountUpdateResponseData) HasAccountName() bool`

HasAccountName returns a boolean if a field has been set.

### SetAccountNameNil

`func (o *SubaccountUpdateResponseData) SetAccountNameNil(b bool)`

 SetAccountNameNil sets the value for AccountName to be an explicit nil

### UnsetAccountName
`func (o *SubaccountUpdateResponseData) UnsetAccountName()`

UnsetAccountName ensures that no value is present for AccountName, not even an explicit nil
### GetBusinessName

`func (o *SubaccountUpdateResponseData) GetBusinessName() string`

GetBusinessName returns the BusinessName field if non-nil, zero value otherwise.

### GetBusinessNameOk

`func (o *SubaccountUpdateResponseData) GetBusinessNameOk() (*string, bool)`

GetBusinessNameOk returns a tuple with the BusinessName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessName

`func (o *SubaccountUpdateResponseData) SetBusinessName(v string)`

SetBusinessName sets BusinessName field to given value.


### GetDescription

`func (o *SubaccountUpdateResponseData) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *SubaccountUpdateResponseData) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *SubaccountUpdateResponseData) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetPrimaryContactName

`func (o *SubaccountUpdateResponseData) GetPrimaryContactName() string`

GetPrimaryContactName returns the PrimaryContactName field if non-nil, zero value otherwise.

### GetPrimaryContactNameOk

`func (o *SubaccountUpdateResponseData) GetPrimaryContactNameOk() (*string, bool)`

GetPrimaryContactNameOk returns a tuple with the PrimaryContactName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryContactName

`func (o *SubaccountUpdateResponseData) SetPrimaryContactName(v string)`

SetPrimaryContactName sets PrimaryContactName field to given value.


### GetPrimaryContactEmail

`func (o *SubaccountUpdateResponseData) GetPrimaryContactEmail() string`

GetPrimaryContactEmail returns the PrimaryContactEmail field if non-nil, zero value otherwise.

### GetPrimaryContactEmailOk

`func (o *SubaccountUpdateResponseData) GetPrimaryContactEmailOk() (*string, bool)`

GetPrimaryContactEmailOk returns a tuple with the PrimaryContactEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryContactEmail

`func (o *SubaccountUpdateResponseData) SetPrimaryContactEmail(v string)`

SetPrimaryContactEmail sets PrimaryContactEmail field to given value.


### GetPrimaryContactPhone

`func (o *SubaccountUpdateResponseData) GetPrimaryContactPhone() string`

GetPrimaryContactPhone returns the PrimaryContactPhone field if non-nil, zero value otherwise.

### GetPrimaryContactPhoneOk

`func (o *SubaccountUpdateResponseData) GetPrimaryContactPhoneOk() (*string, bool)`

GetPrimaryContactPhoneOk returns a tuple with the PrimaryContactPhone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryContactPhone

`func (o *SubaccountUpdateResponseData) SetPrimaryContactPhone(v string)`

SetPrimaryContactPhone sets PrimaryContactPhone field to given value.


### GetMetadata

`func (o *SubaccountUpdateResponseData) GetMetadata() string`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *SubaccountUpdateResponseData) GetMetadataOk() (*string, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *SubaccountUpdateResponseData) SetMetadata(v string)`

SetMetadata sets Metadata field to given value.


### GetPercentageCharge

`func (o *SubaccountUpdateResponseData) GetPercentageCharge() float32`

GetPercentageCharge returns the PercentageCharge field if non-nil, zero value otherwise.

### GetPercentageChargeOk

`func (o *SubaccountUpdateResponseData) GetPercentageChargeOk() (*float32, bool)`

GetPercentageChargeOk returns a tuple with the PercentageCharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentageCharge

`func (o *SubaccountUpdateResponseData) SetPercentageCharge(v float32)`

SetPercentageCharge sets PercentageCharge field to given value.


### GetIsVerified

`func (o *SubaccountUpdateResponseData) GetIsVerified() bool`

GetIsVerified returns the IsVerified field if non-nil, zero value otherwise.

### GetIsVerifiedOk

`func (o *SubaccountUpdateResponseData) GetIsVerifiedOk() (*bool, bool)`

GetIsVerifiedOk returns a tuple with the IsVerified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsVerified

`func (o *SubaccountUpdateResponseData) SetIsVerified(v bool)`

SetIsVerified sets IsVerified field to given value.


### GetSettlementBank

`func (o *SubaccountUpdateResponseData) GetSettlementBank() string`

GetSettlementBank returns the SettlementBank field if non-nil, zero value otherwise.

### GetSettlementBankOk

`func (o *SubaccountUpdateResponseData) GetSettlementBankOk() (*string, bool)`

GetSettlementBankOk returns a tuple with the SettlementBank field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSettlementBank

`func (o *SubaccountUpdateResponseData) SetSettlementBank(v string)`

SetSettlementBank sets SettlementBank field to given value.


### GetAccountNumber

`func (o *SubaccountUpdateResponseData) GetAccountNumber() string`

GetAccountNumber returns the AccountNumber field if non-nil, zero value otherwise.

### GetAccountNumberOk

`func (o *SubaccountUpdateResponseData) GetAccountNumberOk() (*string, bool)`

GetAccountNumberOk returns a tuple with the AccountNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountNumber

`func (o *SubaccountUpdateResponseData) SetAccountNumber(v string)`

SetAccountNumber sets AccountNumber field to given value.


### GetSettlementSchedule

`func (o *SubaccountUpdateResponseData) GetSettlementSchedule() string`

GetSettlementSchedule returns the SettlementSchedule field if non-nil, zero value otherwise.

### GetSettlementScheduleOk

`func (o *SubaccountUpdateResponseData) GetSettlementScheduleOk() (*string, bool)`

GetSettlementScheduleOk returns a tuple with the SettlementSchedule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSettlementSchedule

`func (o *SubaccountUpdateResponseData) SetSettlementSchedule(v string)`

SetSettlementSchedule sets SettlementSchedule field to given value.


### GetActive

`func (o *SubaccountUpdateResponseData) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *SubaccountUpdateResponseData) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *SubaccountUpdateResponseData) SetActive(v bool)`

SetActive sets Active field to given value.


### GetMigrate

`func (o *SubaccountUpdateResponseData) GetMigrate() bool`

GetMigrate returns the Migrate field if non-nil, zero value otherwise.

### GetMigrateOk

`func (o *SubaccountUpdateResponseData) GetMigrateOk() (*bool, bool)`

GetMigrateOk returns a tuple with the Migrate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMigrate

`func (o *SubaccountUpdateResponseData) SetMigrate(v bool)`

SetMigrate sets Migrate field to given value.


### GetCurrency

`func (o *SubaccountUpdateResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *SubaccountUpdateResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *SubaccountUpdateResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetProduct

`func (o *SubaccountUpdateResponseData) GetProduct() string`

GetProduct returns the Product field if non-nil, zero value otherwise.

### GetProductOk

`func (o *SubaccountUpdateResponseData) GetProductOk() (*string, bool)`

GetProductOk returns a tuple with the Product field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProduct

`func (o *SubaccountUpdateResponseData) SetProduct(v string)`

SetProduct sets Product field to given value.


### GetId

`func (o *SubaccountUpdateResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SubaccountUpdateResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SubaccountUpdateResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetIntegration

`func (o *SubaccountUpdateResponseData) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *SubaccountUpdateResponseData) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *SubaccountUpdateResponseData) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetBank

`func (o *SubaccountUpdateResponseData) GetBank() int32`

GetBank returns the Bank field if non-nil, zero value otherwise.

### GetBankOk

`func (o *SubaccountUpdateResponseData) GetBankOk() (*int32, bool)`

GetBankOk returns a tuple with the Bank field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBank

`func (o *SubaccountUpdateResponseData) SetBank(v int32)`

SetBank sets Bank field to given value.


### GetManagedByIntegration

`func (o *SubaccountUpdateResponseData) GetManagedByIntegration() int32`

GetManagedByIntegration returns the ManagedByIntegration field if non-nil, zero value otherwise.

### GetManagedByIntegrationOk

`func (o *SubaccountUpdateResponseData) GetManagedByIntegrationOk() (*int32, bool)`

GetManagedByIntegrationOk returns a tuple with the ManagedByIntegration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedByIntegration

`func (o *SubaccountUpdateResponseData) SetManagedByIntegration(v int32)`

SetManagedByIntegration sets ManagedByIntegration field to given value.


### GetCreatedAt

`func (o *SubaccountUpdateResponseData) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *SubaccountUpdateResponseData) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *SubaccountUpdateResponseData) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *SubaccountUpdateResponseData) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *SubaccountUpdateResponseData) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *SubaccountUpdateResponseData) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


