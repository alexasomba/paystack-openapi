# SubaccountListResponseArray

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**SubaccountCode** | **string** |  | 
**BusinessName** | **string** |  | 
**Description** | **string** |  | 
**PrimaryContactName** | **string** |  | 
**PrimaryContactEmail** | **string** |  | 
**PrimaryContactPhone** | **string** |  | 
**Metadata** | **string** |  | 
**PercentageCharge** | **float32** |  | 
**SettlementBank** | **string** |  | 
**BankId** | **int32** |  | 
**AccountNumber** | **string** |  | 
**Currency** | **string** |  | 
**Active** | **int32** |  | 
**IsVerified** | **bool** |  | 

## Methods

### NewSubaccountListResponseArray

`func NewSubaccountListResponseArray(id int32, subaccountCode string, businessName string, description string, primaryContactName string, primaryContactEmail string, primaryContactPhone string, metadata string, percentageCharge float32, settlementBank string, bankId int32, accountNumber string, currency string, active int32, isVerified bool, ) *SubaccountListResponseArray`

NewSubaccountListResponseArray instantiates a new SubaccountListResponseArray object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubaccountListResponseArrayWithDefaults

`func NewSubaccountListResponseArrayWithDefaults() *SubaccountListResponseArray`

NewSubaccountListResponseArrayWithDefaults instantiates a new SubaccountListResponseArray object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SubaccountListResponseArray) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SubaccountListResponseArray) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SubaccountListResponseArray) SetId(v int32)`

SetId sets Id field to given value.


### GetSubaccountCode

`func (o *SubaccountListResponseArray) GetSubaccountCode() string`

GetSubaccountCode returns the SubaccountCode field if non-nil, zero value otherwise.

### GetSubaccountCodeOk

`func (o *SubaccountListResponseArray) GetSubaccountCodeOk() (*string, bool)`

GetSubaccountCodeOk returns a tuple with the SubaccountCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubaccountCode

`func (o *SubaccountListResponseArray) SetSubaccountCode(v string)`

SetSubaccountCode sets SubaccountCode field to given value.


### GetBusinessName

`func (o *SubaccountListResponseArray) GetBusinessName() string`

GetBusinessName returns the BusinessName field if non-nil, zero value otherwise.

### GetBusinessNameOk

`func (o *SubaccountListResponseArray) GetBusinessNameOk() (*string, bool)`

GetBusinessNameOk returns a tuple with the BusinessName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessName

`func (o *SubaccountListResponseArray) SetBusinessName(v string)`

SetBusinessName sets BusinessName field to given value.


### GetDescription

`func (o *SubaccountListResponseArray) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *SubaccountListResponseArray) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *SubaccountListResponseArray) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetPrimaryContactName

`func (o *SubaccountListResponseArray) GetPrimaryContactName() string`

GetPrimaryContactName returns the PrimaryContactName field if non-nil, zero value otherwise.

### GetPrimaryContactNameOk

`func (o *SubaccountListResponseArray) GetPrimaryContactNameOk() (*string, bool)`

GetPrimaryContactNameOk returns a tuple with the PrimaryContactName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryContactName

`func (o *SubaccountListResponseArray) SetPrimaryContactName(v string)`

SetPrimaryContactName sets PrimaryContactName field to given value.


### GetPrimaryContactEmail

`func (o *SubaccountListResponseArray) GetPrimaryContactEmail() string`

GetPrimaryContactEmail returns the PrimaryContactEmail field if non-nil, zero value otherwise.

### GetPrimaryContactEmailOk

`func (o *SubaccountListResponseArray) GetPrimaryContactEmailOk() (*string, bool)`

GetPrimaryContactEmailOk returns a tuple with the PrimaryContactEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryContactEmail

`func (o *SubaccountListResponseArray) SetPrimaryContactEmail(v string)`

SetPrimaryContactEmail sets PrimaryContactEmail field to given value.


### GetPrimaryContactPhone

`func (o *SubaccountListResponseArray) GetPrimaryContactPhone() string`

GetPrimaryContactPhone returns the PrimaryContactPhone field if non-nil, zero value otherwise.

### GetPrimaryContactPhoneOk

`func (o *SubaccountListResponseArray) GetPrimaryContactPhoneOk() (*string, bool)`

GetPrimaryContactPhoneOk returns a tuple with the PrimaryContactPhone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryContactPhone

`func (o *SubaccountListResponseArray) SetPrimaryContactPhone(v string)`

SetPrimaryContactPhone sets PrimaryContactPhone field to given value.


### GetMetadata

`func (o *SubaccountListResponseArray) GetMetadata() string`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *SubaccountListResponseArray) GetMetadataOk() (*string, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *SubaccountListResponseArray) SetMetadata(v string)`

SetMetadata sets Metadata field to given value.


### GetPercentageCharge

`func (o *SubaccountListResponseArray) GetPercentageCharge() float32`

GetPercentageCharge returns the PercentageCharge field if non-nil, zero value otherwise.

### GetPercentageChargeOk

`func (o *SubaccountListResponseArray) GetPercentageChargeOk() (*float32, bool)`

GetPercentageChargeOk returns a tuple with the PercentageCharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentageCharge

`func (o *SubaccountListResponseArray) SetPercentageCharge(v float32)`

SetPercentageCharge sets PercentageCharge field to given value.


### GetSettlementBank

`func (o *SubaccountListResponseArray) GetSettlementBank() string`

GetSettlementBank returns the SettlementBank field if non-nil, zero value otherwise.

### GetSettlementBankOk

`func (o *SubaccountListResponseArray) GetSettlementBankOk() (*string, bool)`

GetSettlementBankOk returns a tuple with the SettlementBank field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSettlementBank

`func (o *SubaccountListResponseArray) SetSettlementBank(v string)`

SetSettlementBank sets SettlementBank field to given value.


### GetBankId

`func (o *SubaccountListResponseArray) GetBankId() int32`

GetBankId returns the BankId field if non-nil, zero value otherwise.

### GetBankIdOk

`func (o *SubaccountListResponseArray) GetBankIdOk() (*int32, bool)`

GetBankIdOk returns a tuple with the BankId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBankId

`func (o *SubaccountListResponseArray) SetBankId(v int32)`

SetBankId sets BankId field to given value.


### GetAccountNumber

`func (o *SubaccountListResponseArray) GetAccountNumber() string`

GetAccountNumber returns the AccountNumber field if non-nil, zero value otherwise.

### GetAccountNumberOk

`func (o *SubaccountListResponseArray) GetAccountNumberOk() (*string, bool)`

GetAccountNumberOk returns a tuple with the AccountNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountNumber

`func (o *SubaccountListResponseArray) SetAccountNumber(v string)`

SetAccountNumber sets AccountNumber field to given value.


### GetCurrency

`func (o *SubaccountListResponseArray) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *SubaccountListResponseArray) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *SubaccountListResponseArray) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetActive

`func (o *SubaccountListResponseArray) GetActive() int32`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *SubaccountListResponseArray) GetActiveOk() (*int32, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *SubaccountListResponseArray) SetActive(v int32)`

SetActive sets Active field to given value.


### GetIsVerified

`func (o *SubaccountListResponseArray) GetIsVerified() bool`

GetIsVerified returns the IsVerified field if non-nil, zero value otherwise.

### GetIsVerifiedOk

`func (o *SubaccountListResponseArray) GetIsVerifiedOk() (*bool, bool)`

GetIsVerifiedOk returns a tuple with the IsVerified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsVerified

`func (o *SubaccountListResponseArray) SetIsVerified(v bool)`

SetIsVerified sets IsVerified field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


