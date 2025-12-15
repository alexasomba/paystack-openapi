# CustomerFetchMandateAuthorizationsResponseMeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PerPage** | **int32** |  | 
**Next** | Pointer to **NullableString** |  | [optional] 
**Count** | **int32** |  | 
**Total** | **int32** |  | 

## Methods

### NewCustomerFetchMandateAuthorizationsResponseMeta

`func NewCustomerFetchMandateAuthorizationsResponseMeta(perPage int32, count int32, total int32, ) *CustomerFetchMandateAuthorizationsResponseMeta`

NewCustomerFetchMandateAuthorizationsResponseMeta instantiates a new CustomerFetchMandateAuthorizationsResponseMeta object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomerFetchMandateAuthorizationsResponseMetaWithDefaults

`func NewCustomerFetchMandateAuthorizationsResponseMetaWithDefaults() *CustomerFetchMandateAuthorizationsResponseMeta`

NewCustomerFetchMandateAuthorizationsResponseMetaWithDefaults instantiates a new CustomerFetchMandateAuthorizationsResponseMeta object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPerPage

`func (o *CustomerFetchMandateAuthorizationsResponseMeta) GetPerPage() int32`

GetPerPage returns the PerPage field if non-nil, zero value otherwise.

### GetPerPageOk

`func (o *CustomerFetchMandateAuthorizationsResponseMeta) GetPerPageOk() (*int32, bool)`

GetPerPageOk returns a tuple with the PerPage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPerPage

`func (o *CustomerFetchMandateAuthorizationsResponseMeta) SetPerPage(v int32)`

SetPerPage sets PerPage field to given value.


### GetNext

`func (o *CustomerFetchMandateAuthorizationsResponseMeta) GetNext() string`

GetNext returns the Next field if non-nil, zero value otherwise.

### GetNextOk

`func (o *CustomerFetchMandateAuthorizationsResponseMeta) GetNextOk() (*string, bool)`

GetNextOk returns a tuple with the Next field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNext

`func (o *CustomerFetchMandateAuthorizationsResponseMeta) SetNext(v string)`

SetNext sets Next field to given value.

### HasNext

`func (o *CustomerFetchMandateAuthorizationsResponseMeta) HasNext() bool`

HasNext returns a boolean if a field has been set.

### SetNextNil

`func (o *CustomerFetchMandateAuthorizationsResponseMeta) SetNextNil(b bool)`

 SetNextNil sets the value for Next to be an explicit nil

### UnsetNext
`func (o *CustomerFetchMandateAuthorizationsResponseMeta) UnsetNext()`

UnsetNext ensures that no value is present for Next, not even an explicit nil
### GetCount

`func (o *CustomerFetchMandateAuthorizationsResponseMeta) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *CustomerFetchMandateAuthorizationsResponseMeta) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *CustomerFetchMandateAuthorizationsResponseMeta) SetCount(v int32)`

SetCount sets Count field to given value.


### GetTotal

`func (o *CustomerFetchMandateAuthorizationsResponseMeta) GetTotal() int32`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *CustomerFetchMandateAuthorizationsResponseMeta) GetTotalOk() (*int32, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *CustomerFetchMandateAuthorizationsResponseMeta) SetTotal(v int32)`

SetTotal sets Total field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


