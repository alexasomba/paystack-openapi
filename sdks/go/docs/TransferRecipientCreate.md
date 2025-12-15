# TransferRecipientCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Recipient Type | 
**Name** | **string** | The recipient&#39;s name according to their account registration. | 
**AccountNumber** | **string** | Recipient&#39;s bank account number | 
**BankCode** | **string** | Recipient&#39;s bank code. You can get the list of Bank Codes by calling the List Banks endpoint | 
**Description** | Pointer to **string** | A description for this recipient | [optional] 
**Currency** | Pointer to **string** | Currency for the account receiving the transfer | [optional] 
**AuthorizationCode** | Pointer to **string** | An authorization code from a previous transaction | [optional] 
**Metadata** | Pointer to **map[string]interface{}** | JSON object of custom data | [optional] 

## Methods

### NewTransferRecipientCreate

`func NewTransferRecipientCreate(type_ string, name string, accountNumber string, bankCode string, ) *TransferRecipientCreate`

NewTransferRecipientCreate instantiates a new TransferRecipientCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransferRecipientCreateWithDefaults

`func NewTransferRecipientCreateWithDefaults() *TransferRecipientCreate`

NewTransferRecipientCreateWithDefaults instantiates a new TransferRecipientCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *TransferRecipientCreate) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TransferRecipientCreate) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TransferRecipientCreate) SetType(v string)`

SetType sets Type field to given value.


### GetName

`func (o *TransferRecipientCreate) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *TransferRecipientCreate) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *TransferRecipientCreate) SetName(v string)`

SetName sets Name field to given value.


### GetAccountNumber

`func (o *TransferRecipientCreate) GetAccountNumber() string`

GetAccountNumber returns the AccountNumber field if non-nil, zero value otherwise.

### GetAccountNumberOk

`func (o *TransferRecipientCreate) GetAccountNumberOk() (*string, bool)`

GetAccountNumberOk returns a tuple with the AccountNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountNumber

`func (o *TransferRecipientCreate) SetAccountNumber(v string)`

SetAccountNumber sets AccountNumber field to given value.


### GetBankCode

`func (o *TransferRecipientCreate) GetBankCode() string`

GetBankCode returns the BankCode field if non-nil, zero value otherwise.

### GetBankCodeOk

`func (o *TransferRecipientCreate) GetBankCodeOk() (*string, bool)`

GetBankCodeOk returns a tuple with the BankCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBankCode

`func (o *TransferRecipientCreate) SetBankCode(v string)`

SetBankCode sets BankCode field to given value.


### GetDescription

`func (o *TransferRecipientCreate) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TransferRecipientCreate) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TransferRecipientCreate) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *TransferRecipientCreate) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetCurrency

`func (o *TransferRecipientCreate) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *TransferRecipientCreate) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *TransferRecipientCreate) SetCurrency(v string)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *TransferRecipientCreate) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### GetAuthorizationCode

`func (o *TransferRecipientCreate) GetAuthorizationCode() string`

GetAuthorizationCode returns the AuthorizationCode field if non-nil, zero value otherwise.

### GetAuthorizationCodeOk

`func (o *TransferRecipientCreate) GetAuthorizationCodeOk() (*string, bool)`

GetAuthorizationCodeOk returns a tuple with the AuthorizationCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizationCode

`func (o *TransferRecipientCreate) SetAuthorizationCode(v string)`

SetAuthorizationCode sets AuthorizationCode field to given value.

### HasAuthorizationCode

`func (o *TransferRecipientCreate) HasAuthorizationCode() bool`

HasAuthorizationCode returns a boolean if a field has been set.

### GetMetadata

`func (o *TransferRecipientCreate) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *TransferRecipientCreate) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *TransferRecipientCreate) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *TransferRecipientCreate) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


