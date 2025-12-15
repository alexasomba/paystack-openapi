# SplitCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the transaction split | 
**Type** | **string** | The type of transaction split you want to create. | 
**Subaccounts** | [**[]SplitSubaccounts**](SplitSubaccounts.md) | A list of object containing subaccount code and number of shares | 
**Currency** | **string** | The transaction currency | 
**BearerType** | Pointer to **string** | This allows you specify how the transaction charge should be processed | [optional] 
**BearerSubaccount** | Pointer to **string** | This is the subaccount code of the customer or partner that would bear the transaction charge if you specified subaccount as the bearer type | [optional] 

## Methods

### NewSplitCreate

`func NewSplitCreate(name string, type_ string, subaccounts []SplitSubaccounts, currency string, ) *SplitCreate`

NewSplitCreate instantiates a new SplitCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSplitCreateWithDefaults

`func NewSplitCreateWithDefaults() *SplitCreate`

NewSplitCreateWithDefaults instantiates a new SplitCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *SplitCreate) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SplitCreate) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SplitCreate) SetName(v string)`

SetName sets Name field to given value.


### GetType

`func (o *SplitCreate) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SplitCreate) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SplitCreate) SetType(v string)`

SetType sets Type field to given value.


### GetSubaccounts

`func (o *SplitCreate) GetSubaccounts() []SplitSubaccounts`

GetSubaccounts returns the Subaccounts field if non-nil, zero value otherwise.

### GetSubaccountsOk

`func (o *SplitCreate) GetSubaccountsOk() (*[]SplitSubaccounts, bool)`

GetSubaccountsOk returns a tuple with the Subaccounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubaccounts

`func (o *SplitCreate) SetSubaccounts(v []SplitSubaccounts)`

SetSubaccounts sets Subaccounts field to given value.


### GetCurrency

`func (o *SplitCreate) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *SplitCreate) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *SplitCreate) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetBearerType

`func (o *SplitCreate) GetBearerType() string`

GetBearerType returns the BearerType field if non-nil, zero value otherwise.

### GetBearerTypeOk

`func (o *SplitCreate) GetBearerTypeOk() (*string, bool)`

GetBearerTypeOk returns a tuple with the BearerType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBearerType

`func (o *SplitCreate) SetBearerType(v string)`

SetBearerType sets BearerType field to given value.

### HasBearerType

`func (o *SplitCreate) HasBearerType() bool`

HasBearerType returns a boolean if a field has been set.

### GetBearerSubaccount

`func (o *SplitCreate) GetBearerSubaccount() string`

GetBearerSubaccount returns the BearerSubaccount field if non-nil, zero value otherwise.

### GetBearerSubaccountOk

`func (o *SplitCreate) GetBearerSubaccountOk() (*string, bool)`

GetBearerSubaccountOk returns a tuple with the BearerSubaccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBearerSubaccount

`func (o *SplitCreate) SetBearerSubaccount(v string)`

SetBearerSubaccount sets BearerSubaccount field to given value.

### HasBearerSubaccount

`func (o *SplitCreate) HasBearerSubaccount() bool`

HasBearerSubaccount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


