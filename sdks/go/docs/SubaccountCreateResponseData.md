# SubaccountCreateResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BusinessName** | **string** |  | 
**AccountName** | Pointer to **NullableString** |  | [optional] 
**Description** | **string** |  | 
**PrimaryContactName** | **string** |  | 
**PrimaryContactEmail** | **string** |  | 
**PrimaryContactPhone** | **string** |  | 
**Metadata** | **string** |  | 
**AccountNumber** | **string** |  | 
**PercentageCharge** | **float32** |  | 
**SettlementBank** | **string** |  | 
**Currency** | **string** |  | 
**Bank** | **int32** |  | 
**Integration** | **int32** |  | 
**Domain** | **string** |  | 
**Product** | **string** |  | 
**ManagedByIntegration** | **int32** |  | 
**SubaccountCode** | **string** |  | 
**IsVerified** | **bool** |  | 
**SettlementSchedule** | **string** |  | 
**Active** | **bool** |  | 
**Migrate** | **bool** |  | 
**Id** | **int32** |  | 
**CreatedAt** | **string** |  | 
**UpdatedAt** | **string** |  | 

## Methods

### NewSubaccountCreateResponseData

`func NewSubaccountCreateResponseData(businessName string, description string, primaryContactName string, primaryContactEmail string, primaryContactPhone string, metadata string, accountNumber string, percentageCharge float32, settlementBank string, currency string, bank int32, integration int32, domain string, product string, managedByIntegration int32, subaccountCode string, isVerified bool, settlementSchedule string, active bool, migrate bool, id int32, createdAt string, updatedAt string, ) *SubaccountCreateResponseData`

NewSubaccountCreateResponseData instantiates a new SubaccountCreateResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubaccountCreateResponseDataWithDefaults

`func NewSubaccountCreateResponseDataWithDefaults() *SubaccountCreateResponseData`

NewSubaccountCreateResponseDataWithDefaults instantiates a new SubaccountCreateResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBusinessName

`func (o *SubaccountCreateResponseData) GetBusinessName() string`

GetBusinessName returns the BusinessName field if non-nil, zero value otherwise.

### GetBusinessNameOk

`func (o *SubaccountCreateResponseData) GetBusinessNameOk() (*string, bool)`

GetBusinessNameOk returns a tuple with the BusinessName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessName

`func (o *SubaccountCreateResponseData) SetBusinessName(v string)`

SetBusinessName sets BusinessName field to given value.


### GetAccountName

`func (o *SubaccountCreateResponseData) GetAccountName() string`

GetAccountName returns the AccountName field if non-nil, zero value otherwise.

### GetAccountNameOk

`func (o *SubaccountCreateResponseData) GetAccountNameOk() (*string, bool)`

GetAccountNameOk returns a tuple with the AccountName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountName

`func (o *SubaccountCreateResponseData) SetAccountName(v string)`

SetAccountName sets AccountName field to given value.

### HasAccountName

`func (o *SubaccountCreateResponseData) HasAccountName() bool`

HasAccountName returns a boolean if a field has been set.

### SetAccountNameNil

`func (o *SubaccountCreateResponseData) SetAccountNameNil(b bool)`

 SetAccountNameNil sets the value for AccountName to be an explicit nil

### UnsetAccountName
`func (o *SubaccountCreateResponseData) UnsetAccountName()`

UnsetAccountName ensures that no value is present for AccountName, not even an explicit nil
### GetDescription

`func (o *SubaccountCreateResponseData) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *SubaccountCreateResponseData) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *SubaccountCreateResponseData) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetPrimaryContactName

`func (o *SubaccountCreateResponseData) GetPrimaryContactName() string`

GetPrimaryContactName returns the PrimaryContactName field if non-nil, zero value otherwise.

### GetPrimaryContactNameOk

`func (o *SubaccountCreateResponseData) GetPrimaryContactNameOk() (*string, bool)`

GetPrimaryContactNameOk returns a tuple with the PrimaryContactName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryContactName

`func (o *SubaccountCreateResponseData) SetPrimaryContactName(v string)`

SetPrimaryContactName sets PrimaryContactName field to given value.


### GetPrimaryContactEmail

`func (o *SubaccountCreateResponseData) GetPrimaryContactEmail() string`

GetPrimaryContactEmail returns the PrimaryContactEmail field if non-nil, zero value otherwise.

### GetPrimaryContactEmailOk

`func (o *SubaccountCreateResponseData) GetPrimaryContactEmailOk() (*string, bool)`

GetPrimaryContactEmailOk returns a tuple with the PrimaryContactEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryContactEmail

`func (o *SubaccountCreateResponseData) SetPrimaryContactEmail(v string)`

SetPrimaryContactEmail sets PrimaryContactEmail field to given value.


### GetPrimaryContactPhone

`func (o *SubaccountCreateResponseData) GetPrimaryContactPhone() string`

GetPrimaryContactPhone returns the PrimaryContactPhone field if non-nil, zero value otherwise.

### GetPrimaryContactPhoneOk

`func (o *SubaccountCreateResponseData) GetPrimaryContactPhoneOk() (*string, bool)`

GetPrimaryContactPhoneOk returns a tuple with the PrimaryContactPhone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryContactPhone

`func (o *SubaccountCreateResponseData) SetPrimaryContactPhone(v string)`

SetPrimaryContactPhone sets PrimaryContactPhone field to given value.


### GetMetadata

`func (o *SubaccountCreateResponseData) GetMetadata() string`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *SubaccountCreateResponseData) GetMetadataOk() (*string, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *SubaccountCreateResponseData) SetMetadata(v string)`

SetMetadata sets Metadata field to given value.


### GetAccountNumber

`func (o *SubaccountCreateResponseData) GetAccountNumber() string`

GetAccountNumber returns the AccountNumber field if non-nil, zero value otherwise.

### GetAccountNumberOk

`func (o *SubaccountCreateResponseData) GetAccountNumberOk() (*string, bool)`

GetAccountNumberOk returns a tuple with the AccountNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountNumber

`func (o *SubaccountCreateResponseData) SetAccountNumber(v string)`

SetAccountNumber sets AccountNumber field to given value.


### GetPercentageCharge

`func (o *SubaccountCreateResponseData) GetPercentageCharge() float32`

GetPercentageCharge returns the PercentageCharge field if non-nil, zero value otherwise.

### GetPercentageChargeOk

`func (o *SubaccountCreateResponseData) GetPercentageChargeOk() (*float32, bool)`

GetPercentageChargeOk returns a tuple with the PercentageCharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentageCharge

`func (o *SubaccountCreateResponseData) SetPercentageCharge(v float32)`

SetPercentageCharge sets PercentageCharge field to given value.


### GetSettlementBank

`func (o *SubaccountCreateResponseData) GetSettlementBank() string`

GetSettlementBank returns the SettlementBank field if non-nil, zero value otherwise.

### GetSettlementBankOk

`func (o *SubaccountCreateResponseData) GetSettlementBankOk() (*string, bool)`

GetSettlementBankOk returns a tuple with the SettlementBank field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSettlementBank

`func (o *SubaccountCreateResponseData) SetSettlementBank(v string)`

SetSettlementBank sets SettlementBank field to given value.


### GetCurrency

`func (o *SubaccountCreateResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *SubaccountCreateResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *SubaccountCreateResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetBank

`func (o *SubaccountCreateResponseData) GetBank() int32`

GetBank returns the Bank field if non-nil, zero value otherwise.

### GetBankOk

`func (o *SubaccountCreateResponseData) GetBankOk() (*int32, bool)`

GetBankOk returns a tuple with the Bank field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBank

`func (o *SubaccountCreateResponseData) SetBank(v int32)`

SetBank sets Bank field to given value.


### GetIntegration

`func (o *SubaccountCreateResponseData) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *SubaccountCreateResponseData) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *SubaccountCreateResponseData) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetDomain

`func (o *SubaccountCreateResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *SubaccountCreateResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *SubaccountCreateResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetProduct

`func (o *SubaccountCreateResponseData) GetProduct() string`

GetProduct returns the Product field if non-nil, zero value otherwise.

### GetProductOk

`func (o *SubaccountCreateResponseData) GetProductOk() (*string, bool)`

GetProductOk returns a tuple with the Product field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProduct

`func (o *SubaccountCreateResponseData) SetProduct(v string)`

SetProduct sets Product field to given value.


### GetManagedByIntegration

`func (o *SubaccountCreateResponseData) GetManagedByIntegration() int32`

GetManagedByIntegration returns the ManagedByIntegration field if non-nil, zero value otherwise.

### GetManagedByIntegrationOk

`func (o *SubaccountCreateResponseData) GetManagedByIntegrationOk() (*int32, bool)`

GetManagedByIntegrationOk returns a tuple with the ManagedByIntegration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedByIntegration

`func (o *SubaccountCreateResponseData) SetManagedByIntegration(v int32)`

SetManagedByIntegration sets ManagedByIntegration field to given value.


### GetSubaccountCode

`func (o *SubaccountCreateResponseData) GetSubaccountCode() string`

GetSubaccountCode returns the SubaccountCode field if non-nil, zero value otherwise.

### GetSubaccountCodeOk

`func (o *SubaccountCreateResponseData) GetSubaccountCodeOk() (*string, bool)`

GetSubaccountCodeOk returns a tuple with the SubaccountCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubaccountCode

`func (o *SubaccountCreateResponseData) SetSubaccountCode(v string)`

SetSubaccountCode sets SubaccountCode field to given value.


### GetIsVerified

`func (o *SubaccountCreateResponseData) GetIsVerified() bool`

GetIsVerified returns the IsVerified field if non-nil, zero value otherwise.

### GetIsVerifiedOk

`func (o *SubaccountCreateResponseData) GetIsVerifiedOk() (*bool, bool)`

GetIsVerifiedOk returns a tuple with the IsVerified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsVerified

`func (o *SubaccountCreateResponseData) SetIsVerified(v bool)`

SetIsVerified sets IsVerified field to given value.


### GetSettlementSchedule

`func (o *SubaccountCreateResponseData) GetSettlementSchedule() string`

GetSettlementSchedule returns the SettlementSchedule field if non-nil, zero value otherwise.

### GetSettlementScheduleOk

`func (o *SubaccountCreateResponseData) GetSettlementScheduleOk() (*string, bool)`

GetSettlementScheduleOk returns a tuple with the SettlementSchedule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSettlementSchedule

`func (o *SubaccountCreateResponseData) SetSettlementSchedule(v string)`

SetSettlementSchedule sets SettlementSchedule field to given value.


### GetActive

`func (o *SubaccountCreateResponseData) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *SubaccountCreateResponseData) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *SubaccountCreateResponseData) SetActive(v bool)`

SetActive sets Active field to given value.


### GetMigrate

`func (o *SubaccountCreateResponseData) GetMigrate() bool`

GetMigrate returns the Migrate field if non-nil, zero value otherwise.

### GetMigrateOk

`func (o *SubaccountCreateResponseData) GetMigrateOk() (*bool, bool)`

GetMigrateOk returns a tuple with the Migrate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMigrate

`func (o *SubaccountCreateResponseData) SetMigrate(v bool)`

SetMigrate sets Migrate field to given value.


### GetId

`func (o *SubaccountCreateResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SubaccountCreateResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SubaccountCreateResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetCreatedAt

`func (o *SubaccountCreateResponseData) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *SubaccountCreateResponseData) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *SubaccountCreateResponseData) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *SubaccountCreateResponseData) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *SubaccountCreateResponseData) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *SubaccountCreateResponseData) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


