# SubaccountCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BusinessName** | **string** | Name of business for subaccount | 
**SettlementBank** | **string** | Bank code for the bank. You can get the list of Bank Codes by calling the List Banks endpoint. | 
**AccountNumber** | **string** | Bank account number | 
**PercentageCharge** | **float32** | Customer&#39;s phone number | 
**Description** | Pointer to **string** | A description for this subaccount | [optional] 
**PrimaryContactEmail** | Pointer to **string** | A contact email for the subaccount | [optional] 
**PrimaryContactName** | Pointer to **string** | The name of the contact person for this subaccount | [optional] 
**PrimaryContactPhone** | Pointer to **string** | A phone number to call for this subaccount | [optional] 
**Metadata** | Pointer to **string** | Stringified JSON object of custom data | [optional] 

## Methods

### NewSubaccountCreate

`func NewSubaccountCreate(businessName string, settlementBank string, accountNumber string, percentageCharge float32, ) *SubaccountCreate`

NewSubaccountCreate instantiates a new SubaccountCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubaccountCreateWithDefaults

`func NewSubaccountCreateWithDefaults() *SubaccountCreate`

NewSubaccountCreateWithDefaults instantiates a new SubaccountCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBusinessName

`func (o *SubaccountCreate) GetBusinessName() string`

GetBusinessName returns the BusinessName field if non-nil, zero value otherwise.

### GetBusinessNameOk

`func (o *SubaccountCreate) GetBusinessNameOk() (*string, bool)`

GetBusinessNameOk returns a tuple with the BusinessName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessName

`func (o *SubaccountCreate) SetBusinessName(v string)`

SetBusinessName sets BusinessName field to given value.


### GetSettlementBank

`func (o *SubaccountCreate) GetSettlementBank() string`

GetSettlementBank returns the SettlementBank field if non-nil, zero value otherwise.

### GetSettlementBankOk

`func (o *SubaccountCreate) GetSettlementBankOk() (*string, bool)`

GetSettlementBankOk returns a tuple with the SettlementBank field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSettlementBank

`func (o *SubaccountCreate) SetSettlementBank(v string)`

SetSettlementBank sets SettlementBank field to given value.


### GetAccountNumber

`func (o *SubaccountCreate) GetAccountNumber() string`

GetAccountNumber returns the AccountNumber field if non-nil, zero value otherwise.

### GetAccountNumberOk

`func (o *SubaccountCreate) GetAccountNumberOk() (*string, bool)`

GetAccountNumberOk returns a tuple with the AccountNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountNumber

`func (o *SubaccountCreate) SetAccountNumber(v string)`

SetAccountNumber sets AccountNumber field to given value.


### GetPercentageCharge

`func (o *SubaccountCreate) GetPercentageCharge() float32`

GetPercentageCharge returns the PercentageCharge field if non-nil, zero value otherwise.

### GetPercentageChargeOk

`func (o *SubaccountCreate) GetPercentageChargeOk() (*float32, bool)`

GetPercentageChargeOk returns a tuple with the PercentageCharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentageCharge

`func (o *SubaccountCreate) SetPercentageCharge(v float32)`

SetPercentageCharge sets PercentageCharge field to given value.


### GetDescription

`func (o *SubaccountCreate) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *SubaccountCreate) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *SubaccountCreate) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *SubaccountCreate) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetPrimaryContactEmail

`func (o *SubaccountCreate) GetPrimaryContactEmail() string`

GetPrimaryContactEmail returns the PrimaryContactEmail field if non-nil, zero value otherwise.

### GetPrimaryContactEmailOk

`func (o *SubaccountCreate) GetPrimaryContactEmailOk() (*string, bool)`

GetPrimaryContactEmailOk returns a tuple with the PrimaryContactEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryContactEmail

`func (o *SubaccountCreate) SetPrimaryContactEmail(v string)`

SetPrimaryContactEmail sets PrimaryContactEmail field to given value.

### HasPrimaryContactEmail

`func (o *SubaccountCreate) HasPrimaryContactEmail() bool`

HasPrimaryContactEmail returns a boolean if a field has been set.

### GetPrimaryContactName

`func (o *SubaccountCreate) GetPrimaryContactName() string`

GetPrimaryContactName returns the PrimaryContactName field if non-nil, zero value otherwise.

### GetPrimaryContactNameOk

`func (o *SubaccountCreate) GetPrimaryContactNameOk() (*string, bool)`

GetPrimaryContactNameOk returns a tuple with the PrimaryContactName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryContactName

`func (o *SubaccountCreate) SetPrimaryContactName(v string)`

SetPrimaryContactName sets PrimaryContactName field to given value.

### HasPrimaryContactName

`func (o *SubaccountCreate) HasPrimaryContactName() bool`

HasPrimaryContactName returns a boolean if a field has been set.

### GetPrimaryContactPhone

`func (o *SubaccountCreate) GetPrimaryContactPhone() string`

GetPrimaryContactPhone returns the PrimaryContactPhone field if non-nil, zero value otherwise.

### GetPrimaryContactPhoneOk

`func (o *SubaccountCreate) GetPrimaryContactPhoneOk() (*string, bool)`

GetPrimaryContactPhoneOk returns a tuple with the PrimaryContactPhone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryContactPhone

`func (o *SubaccountCreate) SetPrimaryContactPhone(v string)`

SetPrimaryContactPhone sets PrimaryContactPhone field to given value.

### HasPrimaryContactPhone

`func (o *SubaccountCreate) HasPrimaryContactPhone() bool`

HasPrimaryContactPhone returns a boolean if a field has been set.

### GetMetadata

`func (o *SubaccountCreate) GetMetadata() string`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *SubaccountCreate) GetMetadataOk() (*string, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *SubaccountCreate) SetMetadata(v string)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *SubaccountCreate) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


