# SplitUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Name of the transaction split | [optional] 
**Active** | Pointer to **bool** | Toggle status of split. When true, the split is active, else it&#39;s inactive | [optional] 
**BearerType** | Pointer to **string** | This allows you specify how the transaction charge should be processed | [optional] 
**BearerSubaccount** | Pointer to **string** | This is the subaccount code of the customer or partner that would bear the transaction charge if you specified subaccount as the bearer type | [optional] 

## Methods

### NewSplitUpdate

`func NewSplitUpdate() *SplitUpdate`

NewSplitUpdate instantiates a new SplitUpdate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSplitUpdateWithDefaults

`func NewSplitUpdateWithDefaults() *SplitUpdate`

NewSplitUpdateWithDefaults instantiates a new SplitUpdate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *SplitUpdate) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SplitUpdate) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SplitUpdate) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SplitUpdate) HasName() bool`

HasName returns a boolean if a field has been set.

### GetActive

`func (o *SplitUpdate) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *SplitUpdate) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *SplitUpdate) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *SplitUpdate) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetBearerType

`func (o *SplitUpdate) GetBearerType() string`

GetBearerType returns the BearerType field if non-nil, zero value otherwise.

### GetBearerTypeOk

`func (o *SplitUpdate) GetBearerTypeOk() (*string, bool)`

GetBearerTypeOk returns a tuple with the BearerType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBearerType

`func (o *SplitUpdate) SetBearerType(v string)`

SetBearerType sets BearerType field to given value.

### HasBearerType

`func (o *SplitUpdate) HasBearerType() bool`

HasBearerType returns a boolean if a field has been set.

### GetBearerSubaccount

`func (o *SplitUpdate) GetBearerSubaccount() string`

GetBearerSubaccount returns the BearerSubaccount field if non-nil, zero value otherwise.

### GetBearerSubaccountOk

`func (o *SplitUpdate) GetBearerSubaccountOk() (*string, bool)`

GetBearerSubaccountOk returns a tuple with the BearerSubaccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBearerSubaccount

`func (o *SplitUpdate) SetBearerSubaccount(v string)`

SetBearerSubaccount sets BearerSubaccount field to given value.

### HasBearerSubaccount

`func (o *SplitUpdate) HasBearerSubaccount() bool`

HasBearerSubaccount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


