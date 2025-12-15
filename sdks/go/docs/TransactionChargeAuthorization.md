# TransactionChargeAuthorization

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Email** | **string** | Customer&#39;s email address | 
**Amount** | **int32** | Amount in the lower denomination of your currency | 
**AuthorizationCode** | **string** | Valid authorization code to charge | 
**Reference** | Pointer to **string** | Unique transaction reference. Only -, ., &#x3D; and alphanumeric characters allowed. | [optional] 
**Currency** | Pointer to [**Currency**](Currency.md) |  | [optional] 
**SplitCode** | Pointer to **string** | The split code of the transaction split | [optional] 
**Split** | Pointer to [**SplitCreate**](SplitCreate.md) |  | [optional] 
**Subaccount** | Pointer to **string** | The code for the subaccount that owns the payment | [optional] 
**TransactionCharge** | Pointer to **string** | A flat fee to charge the subaccount for a transaction.  This overrides the split percentage set when the subaccount was created | [optional] 
**Bearer** | Pointer to **string** | The bearer of the transaction charge | [optional] 
**Metadata** | Pointer to **string** | Stringified JSON object of custom data | [optional] 
**Queue** | Pointer to **bool** | If you are making a scheduled charge call, it is a good idea to queue them so the processing system does not get overloaded causing transaction processing errors. | [optional] 

## Methods

### NewTransactionChargeAuthorization

`func NewTransactionChargeAuthorization(email string, amount int32, authorizationCode string, ) *TransactionChargeAuthorization`

NewTransactionChargeAuthorization instantiates a new TransactionChargeAuthorization object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionChargeAuthorizationWithDefaults

`func NewTransactionChargeAuthorizationWithDefaults() *TransactionChargeAuthorization`

NewTransactionChargeAuthorizationWithDefaults instantiates a new TransactionChargeAuthorization object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmail

`func (o *TransactionChargeAuthorization) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *TransactionChargeAuthorization) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *TransactionChargeAuthorization) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetAmount

`func (o *TransactionChargeAuthorization) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *TransactionChargeAuthorization) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *TransactionChargeAuthorization) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetAuthorizationCode

`func (o *TransactionChargeAuthorization) GetAuthorizationCode() string`

GetAuthorizationCode returns the AuthorizationCode field if non-nil, zero value otherwise.

### GetAuthorizationCodeOk

`func (o *TransactionChargeAuthorization) GetAuthorizationCodeOk() (*string, bool)`

GetAuthorizationCodeOk returns a tuple with the AuthorizationCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizationCode

`func (o *TransactionChargeAuthorization) SetAuthorizationCode(v string)`

SetAuthorizationCode sets AuthorizationCode field to given value.


### GetReference

`func (o *TransactionChargeAuthorization) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *TransactionChargeAuthorization) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *TransactionChargeAuthorization) SetReference(v string)`

SetReference sets Reference field to given value.

### HasReference

`func (o *TransactionChargeAuthorization) HasReference() bool`

HasReference returns a boolean if a field has been set.

### GetCurrency

`func (o *TransactionChargeAuthorization) GetCurrency() Currency`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *TransactionChargeAuthorization) GetCurrencyOk() (*Currency, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *TransactionChargeAuthorization) SetCurrency(v Currency)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *TransactionChargeAuthorization) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### GetSplitCode

`func (o *TransactionChargeAuthorization) GetSplitCode() string`

GetSplitCode returns the SplitCode field if non-nil, zero value otherwise.

### GetSplitCodeOk

`func (o *TransactionChargeAuthorization) GetSplitCodeOk() (*string, bool)`

GetSplitCodeOk returns a tuple with the SplitCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplitCode

`func (o *TransactionChargeAuthorization) SetSplitCode(v string)`

SetSplitCode sets SplitCode field to given value.

### HasSplitCode

`func (o *TransactionChargeAuthorization) HasSplitCode() bool`

HasSplitCode returns a boolean if a field has been set.

### GetSplit

`func (o *TransactionChargeAuthorization) GetSplit() SplitCreate`

GetSplit returns the Split field if non-nil, zero value otherwise.

### GetSplitOk

`func (o *TransactionChargeAuthorization) GetSplitOk() (*SplitCreate, bool)`

GetSplitOk returns a tuple with the Split field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplit

`func (o *TransactionChargeAuthorization) SetSplit(v SplitCreate)`

SetSplit sets Split field to given value.

### HasSplit

`func (o *TransactionChargeAuthorization) HasSplit() bool`

HasSplit returns a boolean if a field has been set.

### GetSubaccount

`func (o *TransactionChargeAuthorization) GetSubaccount() string`

GetSubaccount returns the Subaccount field if non-nil, zero value otherwise.

### GetSubaccountOk

`func (o *TransactionChargeAuthorization) GetSubaccountOk() (*string, bool)`

GetSubaccountOk returns a tuple with the Subaccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubaccount

`func (o *TransactionChargeAuthorization) SetSubaccount(v string)`

SetSubaccount sets Subaccount field to given value.

### HasSubaccount

`func (o *TransactionChargeAuthorization) HasSubaccount() bool`

HasSubaccount returns a boolean if a field has been set.

### GetTransactionCharge

`func (o *TransactionChargeAuthorization) GetTransactionCharge() string`

GetTransactionCharge returns the TransactionCharge field if non-nil, zero value otherwise.

### GetTransactionChargeOk

`func (o *TransactionChargeAuthorization) GetTransactionChargeOk() (*string, bool)`

GetTransactionChargeOk returns a tuple with the TransactionCharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCharge

`func (o *TransactionChargeAuthorization) SetTransactionCharge(v string)`

SetTransactionCharge sets TransactionCharge field to given value.

### HasTransactionCharge

`func (o *TransactionChargeAuthorization) HasTransactionCharge() bool`

HasTransactionCharge returns a boolean if a field has been set.

### GetBearer

`func (o *TransactionChargeAuthorization) GetBearer() string`

GetBearer returns the Bearer field if non-nil, zero value otherwise.

### GetBearerOk

`func (o *TransactionChargeAuthorization) GetBearerOk() (*string, bool)`

GetBearerOk returns a tuple with the Bearer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBearer

`func (o *TransactionChargeAuthorization) SetBearer(v string)`

SetBearer sets Bearer field to given value.

### HasBearer

`func (o *TransactionChargeAuthorization) HasBearer() bool`

HasBearer returns a boolean if a field has been set.

### GetMetadata

`func (o *TransactionChargeAuthorization) GetMetadata() string`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *TransactionChargeAuthorization) GetMetadataOk() (*string, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *TransactionChargeAuthorization) SetMetadata(v string)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *TransactionChargeAuthorization) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### GetQueue

`func (o *TransactionChargeAuthorization) GetQueue() bool`

GetQueue returns the Queue field if non-nil, zero value otherwise.

### GetQueueOk

`func (o *TransactionChargeAuthorization) GetQueueOk() (*bool, bool)`

GetQueueOk returns a tuple with the Queue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueue

`func (o *TransactionChargeAuthorization) SetQueue(v bool)`

SetQueue sets Queue field to given value.

### HasQueue

`func (o *TransactionChargeAuthorization) HasQueue() bool`

HasQueue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


