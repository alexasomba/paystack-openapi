# SubaccountUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BusinessName** | Pointer to **string** | Name of business for subaccount | [optional] 
**SettlementBank** | Pointer to **string** | Bank code for the bank. You can get the list of Bank Codes by calling the List Banks endpoint. | [optional] 
**AccountNumber** | Pointer to **string** | Bank account number | [optional] 
**Active** | Pointer to **bool** | Activate or deactivate a subaccount | [optional] 
**PercentageCharge** | Pointer to **float32** | Customer&#39;s phone number | [optional] 
**Description** | Pointer to **string** | A description for this subaccount | [optional] 
**PrimaryContactEmail** | Pointer to **string** | A contact email for the subaccount | [optional] 
**PrimaryContactName** | Pointer to **string** | The name of the contact person for this subaccount | [optional] 
**PrimaryContactPhone** | Pointer to **string** | A phone number to call for this subaccount | [optional] 
**Metadata** | Pointer to **string** | Stringified JSON object of custom data | [optional] 

## Methods

### NewSubaccountUpdate

`func NewSubaccountUpdate() *SubaccountUpdate`

NewSubaccountUpdate instantiates a new SubaccountUpdate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubaccountUpdateWithDefaults

`func NewSubaccountUpdateWithDefaults() *SubaccountUpdate`

NewSubaccountUpdateWithDefaults instantiates a new SubaccountUpdate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBusinessName

`func (o *SubaccountUpdate) GetBusinessName() string`

GetBusinessName returns the BusinessName field if non-nil, zero value otherwise.

### GetBusinessNameOk

`func (o *SubaccountUpdate) GetBusinessNameOk() (*string, bool)`

GetBusinessNameOk returns a tuple with the BusinessName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessName

`func (o *SubaccountUpdate) SetBusinessName(v string)`

SetBusinessName sets BusinessName field to given value.

### HasBusinessName

`func (o *SubaccountUpdate) HasBusinessName() bool`

HasBusinessName returns a boolean if a field has been set.

### GetSettlementBank

`func (o *SubaccountUpdate) GetSettlementBank() string`

GetSettlementBank returns the SettlementBank field if non-nil, zero value otherwise.

### GetSettlementBankOk

`func (o *SubaccountUpdate) GetSettlementBankOk() (*string, bool)`

GetSettlementBankOk returns a tuple with the SettlementBank field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSettlementBank

`func (o *SubaccountUpdate) SetSettlementBank(v string)`

SetSettlementBank sets SettlementBank field to given value.

### HasSettlementBank

`func (o *SubaccountUpdate) HasSettlementBank() bool`

HasSettlementBank returns a boolean if a field has been set.

### GetAccountNumber

`func (o *SubaccountUpdate) GetAccountNumber() string`

GetAccountNumber returns the AccountNumber field if non-nil, zero value otherwise.

### GetAccountNumberOk

`func (o *SubaccountUpdate) GetAccountNumberOk() (*string, bool)`

GetAccountNumberOk returns a tuple with the AccountNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountNumber

`func (o *SubaccountUpdate) SetAccountNumber(v string)`

SetAccountNumber sets AccountNumber field to given value.

### HasAccountNumber

`func (o *SubaccountUpdate) HasAccountNumber() bool`

HasAccountNumber returns a boolean if a field has been set.

### GetActive

`func (o *SubaccountUpdate) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *SubaccountUpdate) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *SubaccountUpdate) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *SubaccountUpdate) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetPercentageCharge

`func (o *SubaccountUpdate) GetPercentageCharge() float32`

GetPercentageCharge returns the PercentageCharge field if non-nil, zero value otherwise.

### GetPercentageChargeOk

`func (o *SubaccountUpdate) GetPercentageChargeOk() (*float32, bool)`

GetPercentageChargeOk returns a tuple with the PercentageCharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentageCharge

`func (o *SubaccountUpdate) SetPercentageCharge(v float32)`

SetPercentageCharge sets PercentageCharge field to given value.

### HasPercentageCharge

`func (o *SubaccountUpdate) HasPercentageCharge() bool`

HasPercentageCharge returns a boolean if a field has been set.

### GetDescription

`func (o *SubaccountUpdate) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *SubaccountUpdate) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *SubaccountUpdate) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *SubaccountUpdate) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetPrimaryContactEmail

`func (o *SubaccountUpdate) GetPrimaryContactEmail() string`

GetPrimaryContactEmail returns the PrimaryContactEmail field if non-nil, zero value otherwise.

### GetPrimaryContactEmailOk

`func (o *SubaccountUpdate) GetPrimaryContactEmailOk() (*string, bool)`

GetPrimaryContactEmailOk returns a tuple with the PrimaryContactEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryContactEmail

`func (o *SubaccountUpdate) SetPrimaryContactEmail(v string)`

SetPrimaryContactEmail sets PrimaryContactEmail field to given value.

### HasPrimaryContactEmail

`func (o *SubaccountUpdate) HasPrimaryContactEmail() bool`

HasPrimaryContactEmail returns a boolean if a field has been set.

### GetPrimaryContactName

`func (o *SubaccountUpdate) GetPrimaryContactName() string`

GetPrimaryContactName returns the PrimaryContactName field if non-nil, zero value otherwise.

### GetPrimaryContactNameOk

`func (o *SubaccountUpdate) GetPrimaryContactNameOk() (*string, bool)`

GetPrimaryContactNameOk returns a tuple with the PrimaryContactName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryContactName

`func (o *SubaccountUpdate) SetPrimaryContactName(v string)`

SetPrimaryContactName sets PrimaryContactName field to given value.

### HasPrimaryContactName

`func (o *SubaccountUpdate) HasPrimaryContactName() bool`

HasPrimaryContactName returns a boolean if a field has been set.

### GetPrimaryContactPhone

`func (o *SubaccountUpdate) GetPrimaryContactPhone() string`

GetPrimaryContactPhone returns the PrimaryContactPhone field if non-nil, zero value otherwise.

### GetPrimaryContactPhoneOk

`func (o *SubaccountUpdate) GetPrimaryContactPhoneOk() (*string, bool)`

GetPrimaryContactPhoneOk returns a tuple with the PrimaryContactPhone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryContactPhone

`func (o *SubaccountUpdate) SetPrimaryContactPhone(v string)`

SetPrimaryContactPhone sets PrimaryContactPhone field to given value.

### HasPrimaryContactPhone

`func (o *SubaccountUpdate) HasPrimaryContactPhone() bool`

HasPrimaryContactPhone returns a boolean if a field has been set.

### GetMetadata

`func (o *SubaccountUpdate) GetMetadata() string`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *SubaccountUpdate) GetMetadataOk() (*string, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *SubaccountUpdate) SetMetadata(v string)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *SubaccountUpdate) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


