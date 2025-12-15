# RefundCreateResponseDataTransaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**Domain** | **string** |  | 
**Reference** | **string** |  | 
**Amount** | **int32** |  | 
**PaidAt** | **string** |  | 
**Channel** | **string** |  | 
**Currency** | **string** |  | 
**Authorization** | [**RefundCreateResponseDataTransactionAuthorization**](RefundCreateResponseDataTransactionAuthorization.md) |  | 
**Customer** | [**RefundCreateResponseDataTransactionCustomer**](RefundCreateResponseDataTransactionCustomer.md) |  | 
**Plan** | **map[string]interface{}** |  | 
**Subaccount** | [**RefundCreateResponseDataTransactionSubaccount**](RefundCreateResponseDataTransactionSubaccount.md) |  | 
**Split** | **map[string]interface{}** |  | 
**OrderId** | **map[string]interface{}** |  | 
**PosTransactionData** | **map[string]interface{}** |  | 
**Source** | **map[string]interface{}** |  | 
**FeesBreakdown** | **map[string]interface{}** |  | 

## Methods

### NewRefundCreateResponseDataTransaction

`func NewRefundCreateResponseDataTransaction(id int32, domain string, reference string, amount int32, paidAt string, channel string, currency string, authorization RefundCreateResponseDataTransactionAuthorization, customer RefundCreateResponseDataTransactionCustomer, plan map[string]interface{}, subaccount RefundCreateResponseDataTransactionSubaccount, split map[string]interface{}, orderId map[string]interface{}, posTransactionData map[string]interface{}, source map[string]interface{}, feesBreakdown map[string]interface{}, ) *RefundCreateResponseDataTransaction`

NewRefundCreateResponseDataTransaction instantiates a new RefundCreateResponseDataTransaction object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRefundCreateResponseDataTransactionWithDefaults

`func NewRefundCreateResponseDataTransactionWithDefaults() *RefundCreateResponseDataTransaction`

NewRefundCreateResponseDataTransactionWithDefaults instantiates a new RefundCreateResponseDataTransaction object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *RefundCreateResponseDataTransaction) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RefundCreateResponseDataTransaction) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RefundCreateResponseDataTransaction) SetId(v int32)`

SetId sets Id field to given value.


### GetDomain

`func (o *RefundCreateResponseDataTransaction) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *RefundCreateResponseDataTransaction) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *RefundCreateResponseDataTransaction) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetReference

`func (o *RefundCreateResponseDataTransaction) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *RefundCreateResponseDataTransaction) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *RefundCreateResponseDataTransaction) SetReference(v string)`

SetReference sets Reference field to given value.


### GetAmount

`func (o *RefundCreateResponseDataTransaction) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *RefundCreateResponseDataTransaction) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *RefundCreateResponseDataTransaction) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetPaidAt

`func (o *RefundCreateResponseDataTransaction) GetPaidAt() string`

GetPaidAt returns the PaidAt field if non-nil, zero value otherwise.

### GetPaidAtOk

`func (o *RefundCreateResponseDataTransaction) GetPaidAtOk() (*string, bool)`

GetPaidAtOk returns a tuple with the PaidAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaidAt

`func (o *RefundCreateResponseDataTransaction) SetPaidAt(v string)`

SetPaidAt sets PaidAt field to given value.


### GetChannel

`func (o *RefundCreateResponseDataTransaction) GetChannel() string`

GetChannel returns the Channel field if non-nil, zero value otherwise.

### GetChannelOk

`func (o *RefundCreateResponseDataTransaction) GetChannelOk() (*string, bool)`

GetChannelOk returns a tuple with the Channel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannel

`func (o *RefundCreateResponseDataTransaction) SetChannel(v string)`

SetChannel sets Channel field to given value.


### GetCurrency

`func (o *RefundCreateResponseDataTransaction) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *RefundCreateResponseDataTransaction) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *RefundCreateResponseDataTransaction) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetAuthorization

`func (o *RefundCreateResponseDataTransaction) GetAuthorization() RefundCreateResponseDataTransactionAuthorization`

GetAuthorization returns the Authorization field if non-nil, zero value otherwise.

### GetAuthorizationOk

`func (o *RefundCreateResponseDataTransaction) GetAuthorizationOk() (*RefundCreateResponseDataTransactionAuthorization, bool)`

GetAuthorizationOk returns a tuple with the Authorization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorization

`func (o *RefundCreateResponseDataTransaction) SetAuthorization(v RefundCreateResponseDataTransactionAuthorization)`

SetAuthorization sets Authorization field to given value.


### GetCustomer

`func (o *RefundCreateResponseDataTransaction) GetCustomer() RefundCreateResponseDataTransactionCustomer`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *RefundCreateResponseDataTransaction) GetCustomerOk() (*RefundCreateResponseDataTransactionCustomer, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *RefundCreateResponseDataTransaction) SetCustomer(v RefundCreateResponseDataTransactionCustomer)`

SetCustomer sets Customer field to given value.


### GetPlan

`func (o *RefundCreateResponseDataTransaction) GetPlan() map[string]interface{}`

GetPlan returns the Plan field if non-nil, zero value otherwise.

### GetPlanOk

`func (o *RefundCreateResponseDataTransaction) GetPlanOk() (*map[string]interface{}, bool)`

GetPlanOk returns a tuple with the Plan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlan

`func (o *RefundCreateResponseDataTransaction) SetPlan(v map[string]interface{})`

SetPlan sets Plan field to given value.


### GetSubaccount

`func (o *RefundCreateResponseDataTransaction) GetSubaccount() RefundCreateResponseDataTransactionSubaccount`

GetSubaccount returns the Subaccount field if non-nil, zero value otherwise.

### GetSubaccountOk

`func (o *RefundCreateResponseDataTransaction) GetSubaccountOk() (*RefundCreateResponseDataTransactionSubaccount, bool)`

GetSubaccountOk returns a tuple with the Subaccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubaccount

`func (o *RefundCreateResponseDataTransaction) SetSubaccount(v RefundCreateResponseDataTransactionSubaccount)`

SetSubaccount sets Subaccount field to given value.


### GetSplit

`func (o *RefundCreateResponseDataTransaction) GetSplit() map[string]interface{}`

GetSplit returns the Split field if non-nil, zero value otherwise.

### GetSplitOk

`func (o *RefundCreateResponseDataTransaction) GetSplitOk() (*map[string]interface{}, bool)`

GetSplitOk returns a tuple with the Split field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplit

`func (o *RefundCreateResponseDataTransaction) SetSplit(v map[string]interface{})`

SetSplit sets Split field to given value.


### GetOrderId

`func (o *RefundCreateResponseDataTransaction) GetOrderId() map[string]interface{}`

GetOrderId returns the OrderId field if non-nil, zero value otherwise.

### GetOrderIdOk

`func (o *RefundCreateResponseDataTransaction) GetOrderIdOk() (*map[string]interface{}, bool)`

GetOrderIdOk returns a tuple with the OrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderId

`func (o *RefundCreateResponseDataTransaction) SetOrderId(v map[string]interface{})`

SetOrderId sets OrderId field to given value.


### SetOrderIdNil

`func (o *RefundCreateResponseDataTransaction) SetOrderIdNil(b bool)`

 SetOrderIdNil sets the value for OrderId to be an explicit nil

### UnsetOrderId
`func (o *RefundCreateResponseDataTransaction) UnsetOrderId()`

UnsetOrderId ensures that no value is present for OrderId, not even an explicit nil
### GetPosTransactionData

`func (o *RefundCreateResponseDataTransaction) GetPosTransactionData() map[string]interface{}`

GetPosTransactionData returns the PosTransactionData field if non-nil, zero value otherwise.

### GetPosTransactionDataOk

`func (o *RefundCreateResponseDataTransaction) GetPosTransactionDataOk() (*map[string]interface{}, bool)`

GetPosTransactionDataOk returns a tuple with the PosTransactionData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPosTransactionData

`func (o *RefundCreateResponseDataTransaction) SetPosTransactionData(v map[string]interface{})`

SetPosTransactionData sets PosTransactionData field to given value.


### SetPosTransactionDataNil

`func (o *RefundCreateResponseDataTransaction) SetPosTransactionDataNil(b bool)`

 SetPosTransactionDataNil sets the value for PosTransactionData to be an explicit nil

### UnsetPosTransactionData
`func (o *RefundCreateResponseDataTransaction) UnsetPosTransactionData()`

UnsetPosTransactionData ensures that no value is present for PosTransactionData, not even an explicit nil
### GetSource

`func (o *RefundCreateResponseDataTransaction) GetSource() map[string]interface{}`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *RefundCreateResponseDataTransaction) GetSourceOk() (*map[string]interface{}, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *RefundCreateResponseDataTransaction) SetSource(v map[string]interface{})`

SetSource sets Source field to given value.


### SetSourceNil

`func (o *RefundCreateResponseDataTransaction) SetSourceNil(b bool)`

 SetSourceNil sets the value for Source to be an explicit nil

### UnsetSource
`func (o *RefundCreateResponseDataTransaction) UnsetSource()`

UnsetSource ensures that no value is present for Source, not even an explicit nil
### GetFeesBreakdown

`func (o *RefundCreateResponseDataTransaction) GetFeesBreakdown() map[string]interface{}`

GetFeesBreakdown returns the FeesBreakdown field if non-nil, zero value otherwise.

### GetFeesBreakdownOk

`func (o *RefundCreateResponseDataTransaction) GetFeesBreakdownOk() (*map[string]interface{}, bool)`

GetFeesBreakdownOk returns a tuple with the FeesBreakdown field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeesBreakdown

`func (o *RefundCreateResponseDataTransaction) SetFeesBreakdown(v map[string]interface{})`

SetFeesBreakdown sets FeesBreakdown field to given value.


### SetFeesBreakdownNil

`func (o *RefundCreateResponseDataTransaction) SetFeesBreakdownNil(b bool)`

 SetFeesBreakdownNil sets the value for FeesBreakdown to be an explicit nil

### UnsetFeesBreakdown
`func (o *RefundCreateResponseDataTransaction) UnsetFeesBreakdown()`

UnsetFeesBreakdown ensures that no value is present for FeesBreakdown, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


