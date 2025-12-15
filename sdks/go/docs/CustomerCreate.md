# CustomerCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Email** | **string** | Customer&#39;s email address | 
**FirstName** | Pointer to **string** | Customer&#39;s first name | [optional] 
**LastName** | Pointer to **string** | Customer&#39;s last name | [optional] 
**Phone** | Pointer to **string** | Customer&#39;s phone number | [optional] 
**Metadata** | Pointer to **string** | Stringified JSON object of custom data | [optional] 

## Methods

### NewCustomerCreate

`func NewCustomerCreate(email string, ) *CustomerCreate`

NewCustomerCreate instantiates a new CustomerCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomerCreateWithDefaults

`func NewCustomerCreateWithDefaults() *CustomerCreate`

NewCustomerCreateWithDefaults instantiates a new CustomerCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmail

`func (o *CustomerCreate) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *CustomerCreate) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *CustomerCreate) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetFirstName

`func (o *CustomerCreate) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *CustomerCreate) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *CustomerCreate) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.

### HasFirstName

`func (o *CustomerCreate) HasFirstName() bool`

HasFirstName returns a boolean if a field has been set.

### GetLastName

`func (o *CustomerCreate) GetLastName() string`

GetLastName returns the LastName field if non-nil, zero value otherwise.

### GetLastNameOk

`func (o *CustomerCreate) GetLastNameOk() (*string, bool)`

GetLastNameOk returns a tuple with the LastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName

`func (o *CustomerCreate) SetLastName(v string)`

SetLastName sets LastName field to given value.

### HasLastName

`func (o *CustomerCreate) HasLastName() bool`

HasLastName returns a boolean if a field has been set.

### GetPhone

`func (o *CustomerCreate) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *CustomerCreate) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *CustomerCreate) SetPhone(v string)`

SetPhone sets Phone field to given value.

### HasPhone

`func (o *CustomerCreate) HasPhone() bool`

HasPhone returns a boolean if a field has been set.

### GetMetadata

`func (o *CustomerCreate) GetMetadata() string`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *CustomerCreate) GetMetadataOk() (*string, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *CustomerCreate) SetMetadata(v string)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *CustomerCreate) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


