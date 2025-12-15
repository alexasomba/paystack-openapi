# RefundCreateResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Transaction** | [**RefundCreateResponseDataTransaction**](RefundCreateResponseDataTransaction.md) |  | 
**Integration** | **int32** |  | 
**DeductedAmount** | **int32** |  | 
**Channel** | **interface{}** |  | 
**MerchantNote** | **string** |  | 
**CustomerNote** | **string** |  | 
**Status** | **string** |  | 
**RefundedBy** | **string** |  | 
**ExpectedAt** | **string** |  | 
**Currency** | **string** |  | 
**Domain** | **string** |  | 
**Amount** | **int32** |  | 
**FullyDeducted** | **bool** |  | 
**Id** | **int32** |  | 
**CreatedAt** | **string** |  | 
**UpdatedAt** | **string** |  | 

## Methods

### NewRefundCreateResponseData

`func NewRefundCreateResponseData(transaction RefundCreateResponseDataTransaction, integration int32, deductedAmount int32, channel interface{}, merchantNote string, customerNote string, status string, refundedBy string, expectedAt string, currency string, domain string, amount int32, fullyDeducted bool, id int32, createdAt string, updatedAt string, ) *RefundCreateResponseData`

NewRefundCreateResponseData instantiates a new RefundCreateResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRefundCreateResponseDataWithDefaults

`func NewRefundCreateResponseDataWithDefaults() *RefundCreateResponseData`

NewRefundCreateResponseDataWithDefaults instantiates a new RefundCreateResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransaction

`func (o *RefundCreateResponseData) GetTransaction() RefundCreateResponseDataTransaction`

GetTransaction returns the Transaction field if non-nil, zero value otherwise.

### GetTransactionOk

`func (o *RefundCreateResponseData) GetTransactionOk() (*RefundCreateResponseDataTransaction, bool)`

GetTransactionOk returns a tuple with the Transaction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransaction

`func (o *RefundCreateResponseData) SetTransaction(v RefundCreateResponseDataTransaction)`

SetTransaction sets Transaction field to given value.


### GetIntegration

`func (o *RefundCreateResponseData) GetIntegration() int32`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *RefundCreateResponseData) GetIntegrationOk() (*int32, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *RefundCreateResponseData) SetIntegration(v int32)`

SetIntegration sets Integration field to given value.


### GetDeductedAmount

`func (o *RefundCreateResponseData) GetDeductedAmount() int32`

GetDeductedAmount returns the DeductedAmount field if non-nil, zero value otherwise.

### GetDeductedAmountOk

`func (o *RefundCreateResponseData) GetDeductedAmountOk() (*int32, bool)`

GetDeductedAmountOk returns a tuple with the DeductedAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeductedAmount

`func (o *RefundCreateResponseData) SetDeductedAmount(v int32)`

SetDeductedAmount sets DeductedAmount field to given value.


### GetChannel

`func (o *RefundCreateResponseData) GetChannel() interface{}`

GetChannel returns the Channel field if non-nil, zero value otherwise.

### GetChannelOk

`func (o *RefundCreateResponseData) GetChannelOk() (*interface{}, bool)`

GetChannelOk returns a tuple with the Channel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannel

`func (o *RefundCreateResponseData) SetChannel(v interface{})`

SetChannel sets Channel field to given value.


### SetChannelNil

`func (o *RefundCreateResponseData) SetChannelNil(b bool)`

 SetChannelNil sets the value for Channel to be an explicit nil

### UnsetChannel
`func (o *RefundCreateResponseData) UnsetChannel()`

UnsetChannel ensures that no value is present for Channel, not even an explicit nil
### GetMerchantNote

`func (o *RefundCreateResponseData) GetMerchantNote() string`

GetMerchantNote returns the MerchantNote field if non-nil, zero value otherwise.

### GetMerchantNoteOk

`func (o *RefundCreateResponseData) GetMerchantNoteOk() (*string, bool)`

GetMerchantNoteOk returns a tuple with the MerchantNote field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMerchantNote

`func (o *RefundCreateResponseData) SetMerchantNote(v string)`

SetMerchantNote sets MerchantNote field to given value.


### GetCustomerNote

`func (o *RefundCreateResponseData) GetCustomerNote() string`

GetCustomerNote returns the CustomerNote field if non-nil, zero value otherwise.

### GetCustomerNoteOk

`func (o *RefundCreateResponseData) GetCustomerNoteOk() (*string, bool)`

GetCustomerNoteOk returns a tuple with the CustomerNote field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerNote

`func (o *RefundCreateResponseData) SetCustomerNote(v string)`

SetCustomerNote sets CustomerNote field to given value.


### GetStatus

`func (o *RefundCreateResponseData) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *RefundCreateResponseData) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *RefundCreateResponseData) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetRefundedBy

`func (o *RefundCreateResponseData) GetRefundedBy() string`

GetRefundedBy returns the RefundedBy field if non-nil, zero value otherwise.

### GetRefundedByOk

`func (o *RefundCreateResponseData) GetRefundedByOk() (*string, bool)`

GetRefundedByOk returns a tuple with the RefundedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundedBy

`func (o *RefundCreateResponseData) SetRefundedBy(v string)`

SetRefundedBy sets RefundedBy field to given value.


### GetExpectedAt

`func (o *RefundCreateResponseData) GetExpectedAt() string`

GetExpectedAt returns the ExpectedAt field if non-nil, zero value otherwise.

### GetExpectedAtOk

`func (o *RefundCreateResponseData) GetExpectedAtOk() (*string, bool)`

GetExpectedAtOk returns a tuple with the ExpectedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpectedAt

`func (o *RefundCreateResponseData) SetExpectedAt(v string)`

SetExpectedAt sets ExpectedAt field to given value.


### GetCurrency

`func (o *RefundCreateResponseData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *RefundCreateResponseData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *RefundCreateResponseData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetDomain

`func (o *RefundCreateResponseData) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *RefundCreateResponseData) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *RefundCreateResponseData) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetAmount

`func (o *RefundCreateResponseData) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *RefundCreateResponseData) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *RefundCreateResponseData) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetFullyDeducted

`func (o *RefundCreateResponseData) GetFullyDeducted() bool`

GetFullyDeducted returns the FullyDeducted field if non-nil, zero value otherwise.

### GetFullyDeductedOk

`func (o *RefundCreateResponseData) GetFullyDeductedOk() (*bool, bool)`

GetFullyDeductedOk returns a tuple with the FullyDeducted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullyDeducted

`func (o *RefundCreateResponseData) SetFullyDeducted(v bool)`

SetFullyDeducted sets FullyDeducted field to given value.


### GetId

`func (o *RefundCreateResponseData) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RefundCreateResponseData) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RefundCreateResponseData) SetId(v int32)`

SetId sets Id field to given value.


### GetCreatedAt

`func (o *RefundCreateResponseData) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *RefundCreateResponseData) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *RefundCreateResponseData) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *RefundCreateResponseData) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *RefundCreateResponseData) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *RefundCreateResponseData) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


