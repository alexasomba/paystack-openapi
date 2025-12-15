# BulkChargeInitiate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Authorization** | **string** | Customer&#39;s card authorization code | 
**Amount** | **int32** | Amount to charge on the authorization | 
**Reference** | Pointer to **string** | A unique identifier containing lowercase letters &#x60;(a-z)&#x60;, digits &#x60;(0-9)&#x60; and these symbols: dash (&#x60;-&#x60;), underscore(&#x60;_&#x60;)  | [optional] 
**AttemptPartialDebit** | Pointer to **bool** | A flag to indicate if you want us to try recouping lower amounts when the customer has insufficient fund | [optional] 
**AtLeast** | Pointer to **int32** | Minimum amount to charge if the attempt_partial_debit flag is set | [optional] 
**Metadata** | Pointer to **map[string]interface{}** | JSON object of custom data | [optional] 

## Methods

### NewBulkChargeInitiate

`func NewBulkChargeInitiate(authorization string, amount int32, ) *BulkChargeInitiate`

NewBulkChargeInitiate instantiates a new BulkChargeInitiate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkChargeInitiateWithDefaults

`func NewBulkChargeInitiateWithDefaults() *BulkChargeInitiate`

NewBulkChargeInitiateWithDefaults instantiates a new BulkChargeInitiate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthorization

`func (o *BulkChargeInitiate) GetAuthorization() string`

GetAuthorization returns the Authorization field if non-nil, zero value otherwise.

### GetAuthorizationOk

`func (o *BulkChargeInitiate) GetAuthorizationOk() (*string, bool)`

GetAuthorizationOk returns a tuple with the Authorization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorization

`func (o *BulkChargeInitiate) SetAuthorization(v string)`

SetAuthorization sets Authorization field to given value.


### GetAmount

`func (o *BulkChargeInitiate) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *BulkChargeInitiate) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *BulkChargeInitiate) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetReference

`func (o *BulkChargeInitiate) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *BulkChargeInitiate) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *BulkChargeInitiate) SetReference(v string)`

SetReference sets Reference field to given value.

### HasReference

`func (o *BulkChargeInitiate) HasReference() bool`

HasReference returns a boolean if a field has been set.

### GetAttemptPartialDebit

`func (o *BulkChargeInitiate) GetAttemptPartialDebit() bool`

GetAttemptPartialDebit returns the AttemptPartialDebit field if non-nil, zero value otherwise.

### GetAttemptPartialDebitOk

`func (o *BulkChargeInitiate) GetAttemptPartialDebitOk() (*bool, bool)`

GetAttemptPartialDebitOk returns a tuple with the AttemptPartialDebit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttemptPartialDebit

`func (o *BulkChargeInitiate) SetAttemptPartialDebit(v bool)`

SetAttemptPartialDebit sets AttemptPartialDebit field to given value.

### HasAttemptPartialDebit

`func (o *BulkChargeInitiate) HasAttemptPartialDebit() bool`

HasAttemptPartialDebit returns a boolean if a field has been set.

### GetAtLeast

`func (o *BulkChargeInitiate) GetAtLeast() int32`

GetAtLeast returns the AtLeast field if non-nil, zero value otherwise.

### GetAtLeastOk

`func (o *BulkChargeInitiate) GetAtLeastOk() (*int32, bool)`

GetAtLeastOk returns a tuple with the AtLeast field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAtLeast

`func (o *BulkChargeInitiate) SetAtLeast(v int32)`

SetAtLeast sets AtLeast field to given value.

### HasAtLeast

`func (o *BulkChargeInitiate) HasAtLeast() bool`

HasAtLeast returns a boolean if a field has been set.

### GetMetadata

`func (o *BulkChargeInitiate) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *BulkChargeInitiate) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *BulkChargeInitiate) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *BulkChargeInitiate) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


