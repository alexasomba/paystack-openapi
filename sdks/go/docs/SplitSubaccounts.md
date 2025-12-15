# SplitSubaccounts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Subaccount** | Pointer to **string** | Subaccount code of the customer or partner | [optional] 
**Share** | Pointer to **int32** | The percentage or flat quota of the customer or partner | [optional] 

## Methods

### NewSplitSubaccounts

`func NewSplitSubaccounts() *SplitSubaccounts`

NewSplitSubaccounts instantiates a new SplitSubaccounts object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSplitSubaccountsWithDefaults

`func NewSplitSubaccountsWithDefaults() *SplitSubaccounts`

NewSplitSubaccountsWithDefaults instantiates a new SplitSubaccounts object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSubaccount

`func (o *SplitSubaccounts) GetSubaccount() string`

GetSubaccount returns the Subaccount field if non-nil, zero value otherwise.

### GetSubaccountOk

`func (o *SplitSubaccounts) GetSubaccountOk() (*string, bool)`

GetSubaccountOk returns a tuple with the Subaccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubaccount

`func (o *SplitSubaccounts) SetSubaccount(v string)`

SetSubaccount sets Subaccount field to given value.

### HasSubaccount

`func (o *SplitSubaccounts) HasSubaccount() bool`

HasSubaccount returns a boolean if a field has been set.

### GetShare

`func (o *SplitSubaccounts) GetShare() int32`

GetShare returns the Share field if non-nil, zero value otherwise.

### GetShareOk

`func (o *SplitSubaccounts) GetShareOk() (*int32, bool)`

GetShareOk returns a tuple with the Share field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShare

`func (o *SplitSubaccounts) SetShare(v int32)`

SetShare sets Share field to given value.

### HasShare

`func (o *SplitSubaccounts) HasShare() bool`

HasShare returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


