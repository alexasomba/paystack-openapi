# TransactionInitialize

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Email** | **string** | Customer&#39;s email address | 
**Amount** | **int32** | Amount should be in smallest denomination of the currency.  | 
**Currency** | Pointer to [**Currency**](Currency.md) |  | [optional] 
**Reference** | Pointer to **string** | Unique transaction reference. Only -, ., &#x3D; and alphanumeric characters allowed. | [optional] 
**Channels** | Pointer to **[]string** | An array of payment channels to control what channels you want to make available to the user to make a payment with | [optional] 
**CallbackUrl** | Pointer to **string** | Fully qualified url, e.g. https://example.com/ to redirect your customers to after a successful payment. Use this to override the callback url provided on the dashboard for this transaction  | [optional] 
**Plan** | Pointer to **string** | If transaction is to create a subscription to a predefined plan, provide plan code here.  This would invalidate the value provided in amount  | [optional] 
**InvoiceLimit** | Pointer to **int32** | Number of times to charge customer during subscription to plan | [optional] 
**SplitCode** | Pointer to **string** | The split code of the transaction split | [optional] 
**Split** | Pointer to [**SplitCreate**](SplitCreate.md) |  | [optional] 
**Subaccount** | Pointer to **string** | The code for the subaccount that owns the payment | [optional] 
**TransactionCharge** | Pointer to **string** | A flat fee to charge the subaccount for a transaction.  This overrides the split percentage set when the subaccount was created  | [optional] 
**Bearer** | Pointer to **string** | The bearer of the transaction charge | [optional] 
**Label** | Pointer to **string** | Used to replace the email address shown on the Checkout | [optional] 
**Metadata** | Pointer to **map[string]interface{}** | JSON object of custom data | [optional] 

## Methods

### NewTransactionInitialize

`func NewTransactionInitialize(email string, amount int32, ) *TransactionInitialize`

NewTransactionInitialize instantiates a new TransactionInitialize object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionInitializeWithDefaults

`func NewTransactionInitializeWithDefaults() *TransactionInitialize`

NewTransactionInitializeWithDefaults instantiates a new TransactionInitialize object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmail

`func (o *TransactionInitialize) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *TransactionInitialize) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *TransactionInitialize) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetAmount

`func (o *TransactionInitialize) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *TransactionInitialize) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *TransactionInitialize) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetCurrency

`func (o *TransactionInitialize) GetCurrency() Currency`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *TransactionInitialize) GetCurrencyOk() (*Currency, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *TransactionInitialize) SetCurrency(v Currency)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *TransactionInitialize) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### GetReference

`func (o *TransactionInitialize) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *TransactionInitialize) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *TransactionInitialize) SetReference(v string)`

SetReference sets Reference field to given value.

### HasReference

`func (o *TransactionInitialize) HasReference() bool`

HasReference returns a boolean if a field has been set.

### GetChannels

`func (o *TransactionInitialize) GetChannels() []string`

GetChannels returns the Channels field if non-nil, zero value otherwise.

### GetChannelsOk

`func (o *TransactionInitialize) GetChannelsOk() (*[]string, bool)`

GetChannelsOk returns a tuple with the Channels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannels

`func (o *TransactionInitialize) SetChannels(v []string)`

SetChannels sets Channels field to given value.

### HasChannels

`func (o *TransactionInitialize) HasChannels() bool`

HasChannels returns a boolean if a field has been set.

### GetCallbackUrl

`func (o *TransactionInitialize) GetCallbackUrl() string`

GetCallbackUrl returns the CallbackUrl field if non-nil, zero value otherwise.

### GetCallbackUrlOk

`func (o *TransactionInitialize) GetCallbackUrlOk() (*string, bool)`

GetCallbackUrlOk returns a tuple with the CallbackUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCallbackUrl

`func (o *TransactionInitialize) SetCallbackUrl(v string)`

SetCallbackUrl sets CallbackUrl field to given value.

### HasCallbackUrl

`func (o *TransactionInitialize) HasCallbackUrl() bool`

HasCallbackUrl returns a boolean if a field has been set.

### GetPlan

`func (o *TransactionInitialize) GetPlan() string`

GetPlan returns the Plan field if non-nil, zero value otherwise.

### GetPlanOk

`func (o *TransactionInitialize) GetPlanOk() (*string, bool)`

GetPlanOk returns a tuple with the Plan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlan

`func (o *TransactionInitialize) SetPlan(v string)`

SetPlan sets Plan field to given value.

### HasPlan

`func (o *TransactionInitialize) HasPlan() bool`

HasPlan returns a boolean if a field has been set.

### GetInvoiceLimit

`func (o *TransactionInitialize) GetInvoiceLimit() int32`

GetInvoiceLimit returns the InvoiceLimit field if non-nil, zero value otherwise.

### GetInvoiceLimitOk

`func (o *TransactionInitialize) GetInvoiceLimitOk() (*int32, bool)`

GetInvoiceLimitOk returns a tuple with the InvoiceLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceLimit

`func (o *TransactionInitialize) SetInvoiceLimit(v int32)`

SetInvoiceLimit sets InvoiceLimit field to given value.

### HasInvoiceLimit

`func (o *TransactionInitialize) HasInvoiceLimit() bool`

HasInvoiceLimit returns a boolean if a field has been set.

### GetSplitCode

`func (o *TransactionInitialize) GetSplitCode() string`

GetSplitCode returns the SplitCode field if non-nil, zero value otherwise.

### GetSplitCodeOk

`func (o *TransactionInitialize) GetSplitCodeOk() (*string, bool)`

GetSplitCodeOk returns a tuple with the SplitCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplitCode

`func (o *TransactionInitialize) SetSplitCode(v string)`

SetSplitCode sets SplitCode field to given value.

### HasSplitCode

`func (o *TransactionInitialize) HasSplitCode() bool`

HasSplitCode returns a boolean if a field has been set.

### GetSplit

`func (o *TransactionInitialize) GetSplit() SplitCreate`

GetSplit returns the Split field if non-nil, zero value otherwise.

### GetSplitOk

`func (o *TransactionInitialize) GetSplitOk() (*SplitCreate, bool)`

GetSplitOk returns a tuple with the Split field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplit

`func (o *TransactionInitialize) SetSplit(v SplitCreate)`

SetSplit sets Split field to given value.

### HasSplit

`func (o *TransactionInitialize) HasSplit() bool`

HasSplit returns a boolean if a field has been set.

### GetSubaccount

`func (o *TransactionInitialize) GetSubaccount() string`

GetSubaccount returns the Subaccount field if non-nil, zero value otherwise.

### GetSubaccountOk

`func (o *TransactionInitialize) GetSubaccountOk() (*string, bool)`

GetSubaccountOk returns a tuple with the Subaccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubaccount

`func (o *TransactionInitialize) SetSubaccount(v string)`

SetSubaccount sets Subaccount field to given value.

### HasSubaccount

`func (o *TransactionInitialize) HasSubaccount() bool`

HasSubaccount returns a boolean if a field has been set.

### GetTransactionCharge

`func (o *TransactionInitialize) GetTransactionCharge() string`

GetTransactionCharge returns the TransactionCharge field if non-nil, zero value otherwise.

### GetTransactionChargeOk

`func (o *TransactionInitialize) GetTransactionChargeOk() (*string, bool)`

GetTransactionChargeOk returns a tuple with the TransactionCharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCharge

`func (o *TransactionInitialize) SetTransactionCharge(v string)`

SetTransactionCharge sets TransactionCharge field to given value.

### HasTransactionCharge

`func (o *TransactionInitialize) HasTransactionCharge() bool`

HasTransactionCharge returns a boolean if a field has been set.

### GetBearer

`func (o *TransactionInitialize) GetBearer() string`

GetBearer returns the Bearer field if non-nil, zero value otherwise.

### GetBearerOk

`func (o *TransactionInitialize) GetBearerOk() (*string, bool)`

GetBearerOk returns a tuple with the Bearer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBearer

`func (o *TransactionInitialize) SetBearer(v string)`

SetBearer sets Bearer field to given value.

### HasBearer

`func (o *TransactionInitialize) HasBearer() bool`

HasBearer returns a boolean if a field has been set.

### GetLabel

`func (o *TransactionInitialize) GetLabel() string`

GetLabel returns the Label field if non-nil, zero value otherwise.

### GetLabelOk

`func (o *TransactionInitialize) GetLabelOk() (*string, bool)`

GetLabelOk returns a tuple with the Label field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabel

`func (o *TransactionInitialize) SetLabel(v string)`

SetLabel sets Label field to given value.

### HasLabel

`func (o *TransactionInitialize) HasLabel() bool`

HasLabel returns a boolean if a field has been set.

### GetMetadata

`func (o *TransactionInitialize) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *TransactionInitialize) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *TransactionInitialize) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *TransactionInitialize) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


