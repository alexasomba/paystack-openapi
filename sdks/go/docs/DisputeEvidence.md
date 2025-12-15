# DisputeEvidence

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomerEmail** | **string** | Customer email | 
**CustomerName** | **string** | Customer name | 
**CustomerPhone** | **string** | Customer mobile number | 
**ServiceDetails** | **string** | Details of service offered | 
**DeliveryAddress** | Pointer to **string** | Delivery address | [optional] 
**DeliveryDate** | Pointer to **time.Time** | ISO 8601 representation of delivery date (YYYY-MM-DD) | [optional] 

## Methods

### NewDisputeEvidence

`func NewDisputeEvidence(customerEmail string, customerName string, customerPhone string, serviceDetails string, ) *DisputeEvidence`

NewDisputeEvidence instantiates a new DisputeEvidence object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDisputeEvidenceWithDefaults

`func NewDisputeEvidenceWithDefaults() *DisputeEvidence`

NewDisputeEvidenceWithDefaults instantiates a new DisputeEvidence object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomerEmail

`func (o *DisputeEvidence) GetCustomerEmail() string`

GetCustomerEmail returns the CustomerEmail field if non-nil, zero value otherwise.

### GetCustomerEmailOk

`func (o *DisputeEvidence) GetCustomerEmailOk() (*string, bool)`

GetCustomerEmailOk returns a tuple with the CustomerEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerEmail

`func (o *DisputeEvidence) SetCustomerEmail(v string)`

SetCustomerEmail sets CustomerEmail field to given value.


### GetCustomerName

`func (o *DisputeEvidence) GetCustomerName() string`

GetCustomerName returns the CustomerName field if non-nil, zero value otherwise.

### GetCustomerNameOk

`func (o *DisputeEvidence) GetCustomerNameOk() (*string, bool)`

GetCustomerNameOk returns a tuple with the CustomerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerName

`func (o *DisputeEvidence) SetCustomerName(v string)`

SetCustomerName sets CustomerName field to given value.


### GetCustomerPhone

`func (o *DisputeEvidence) GetCustomerPhone() string`

GetCustomerPhone returns the CustomerPhone field if non-nil, zero value otherwise.

### GetCustomerPhoneOk

`func (o *DisputeEvidence) GetCustomerPhoneOk() (*string, bool)`

GetCustomerPhoneOk returns a tuple with the CustomerPhone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerPhone

`func (o *DisputeEvidence) SetCustomerPhone(v string)`

SetCustomerPhone sets CustomerPhone field to given value.


### GetServiceDetails

`func (o *DisputeEvidence) GetServiceDetails() string`

GetServiceDetails returns the ServiceDetails field if non-nil, zero value otherwise.

### GetServiceDetailsOk

`func (o *DisputeEvidence) GetServiceDetailsOk() (*string, bool)`

GetServiceDetailsOk returns a tuple with the ServiceDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceDetails

`func (o *DisputeEvidence) SetServiceDetails(v string)`

SetServiceDetails sets ServiceDetails field to given value.


### GetDeliveryAddress

`func (o *DisputeEvidence) GetDeliveryAddress() string`

GetDeliveryAddress returns the DeliveryAddress field if non-nil, zero value otherwise.

### GetDeliveryAddressOk

`func (o *DisputeEvidence) GetDeliveryAddressOk() (*string, bool)`

GetDeliveryAddressOk returns a tuple with the DeliveryAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveryAddress

`func (o *DisputeEvidence) SetDeliveryAddress(v string)`

SetDeliveryAddress sets DeliveryAddress field to given value.

### HasDeliveryAddress

`func (o *DisputeEvidence) HasDeliveryAddress() bool`

HasDeliveryAddress returns a boolean if a field has been set.

### GetDeliveryDate

`func (o *DisputeEvidence) GetDeliveryDate() time.Time`

GetDeliveryDate returns the DeliveryDate field if non-nil, zero value otherwise.

### GetDeliveryDateOk

`func (o *DisputeEvidence) GetDeliveryDateOk() (*time.Time, bool)`

GetDeliveryDateOk returns a tuple with the DeliveryDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveryDate

`func (o *DisputeEvidence) SetDeliveryDate(v time.Time)`

SetDeliveryDate sets DeliveryDate field to given value.

### HasDeliveryDate

`func (o *DisputeEvidence) HasDeliveryDate() bool`

HasDeliveryDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


