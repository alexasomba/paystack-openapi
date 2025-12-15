# PaymentRequestUpdateResponseDataCustomer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**FirstName** | **string** |  | 
**LastName** | **string** |  | 
**Email** | **string** |  | 
**CustomerCode** | **string** |  | 
**Phone** | **string** |  | 
**Metadata** | [**CustomerCreateResponseDataMetadata**](CustomerCreateResponseDataMetadata.md) |  | 
**RiskAction** | **string** |  | 
**InternationalFormatPhone** | **string** |  | 

## Methods

### NewPaymentRequestUpdateResponseDataCustomer

`func NewPaymentRequestUpdateResponseDataCustomer(id int32, firstName string, lastName string, email string, customerCode string, phone string, metadata CustomerCreateResponseDataMetadata, riskAction string, internationalFormatPhone string, ) *PaymentRequestUpdateResponseDataCustomer`

NewPaymentRequestUpdateResponseDataCustomer instantiates a new PaymentRequestUpdateResponseDataCustomer object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaymentRequestUpdateResponseDataCustomerWithDefaults

`func NewPaymentRequestUpdateResponseDataCustomerWithDefaults() *PaymentRequestUpdateResponseDataCustomer`

NewPaymentRequestUpdateResponseDataCustomerWithDefaults instantiates a new PaymentRequestUpdateResponseDataCustomer object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *PaymentRequestUpdateResponseDataCustomer) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *PaymentRequestUpdateResponseDataCustomer) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *PaymentRequestUpdateResponseDataCustomer) SetId(v int32)`

SetId sets Id field to given value.


### GetFirstName

`func (o *PaymentRequestUpdateResponseDataCustomer) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *PaymentRequestUpdateResponseDataCustomer) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *PaymentRequestUpdateResponseDataCustomer) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.


### GetLastName

`func (o *PaymentRequestUpdateResponseDataCustomer) GetLastName() string`

GetLastName returns the LastName field if non-nil, zero value otherwise.

### GetLastNameOk

`func (o *PaymentRequestUpdateResponseDataCustomer) GetLastNameOk() (*string, bool)`

GetLastNameOk returns a tuple with the LastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName

`func (o *PaymentRequestUpdateResponseDataCustomer) SetLastName(v string)`

SetLastName sets LastName field to given value.


### GetEmail

`func (o *PaymentRequestUpdateResponseDataCustomer) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *PaymentRequestUpdateResponseDataCustomer) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *PaymentRequestUpdateResponseDataCustomer) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetCustomerCode

`func (o *PaymentRequestUpdateResponseDataCustomer) GetCustomerCode() string`

GetCustomerCode returns the CustomerCode field if non-nil, zero value otherwise.

### GetCustomerCodeOk

`func (o *PaymentRequestUpdateResponseDataCustomer) GetCustomerCodeOk() (*string, bool)`

GetCustomerCodeOk returns a tuple with the CustomerCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerCode

`func (o *PaymentRequestUpdateResponseDataCustomer) SetCustomerCode(v string)`

SetCustomerCode sets CustomerCode field to given value.


### GetPhone

`func (o *PaymentRequestUpdateResponseDataCustomer) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *PaymentRequestUpdateResponseDataCustomer) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *PaymentRequestUpdateResponseDataCustomer) SetPhone(v string)`

SetPhone sets Phone field to given value.


### GetMetadata

`func (o *PaymentRequestUpdateResponseDataCustomer) GetMetadata() CustomerCreateResponseDataMetadata`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *PaymentRequestUpdateResponseDataCustomer) GetMetadataOk() (*CustomerCreateResponseDataMetadata, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *PaymentRequestUpdateResponseDataCustomer) SetMetadata(v CustomerCreateResponseDataMetadata)`

SetMetadata sets Metadata field to given value.


### GetRiskAction

`func (o *PaymentRequestUpdateResponseDataCustomer) GetRiskAction() string`

GetRiskAction returns the RiskAction field if non-nil, zero value otherwise.

### GetRiskActionOk

`func (o *PaymentRequestUpdateResponseDataCustomer) GetRiskActionOk() (*string, bool)`

GetRiskActionOk returns a tuple with the RiskAction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRiskAction

`func (o *PaymentRequestUpdateResponseDataCustomer) SetRiskAction(v string)`

SetRiskAction sets RiskAction field to given value.


### GetInternationalFormatPhone

`func (o *PaymentRequestUpdateResponseDataCustomer) GetInternationalFormatPhone() string`

GetInternationalFormatPhone returns the InternationalFormatPhone field if non-nil, zero value otherwise.

### GetInternationalFormatPhoneOk

`func (o *PaymentRequestUpdateResponseDataCustomer) GetInternationalFormatPhoneOk() (*string, bool)`

GetInternationalFormatPhoneOk returns a tuple with the InternationalFormatPhone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternationalFormatPhone

`func (o *PaymentRequestUpdateResponseDataCustomer) SetInternationalFormatPhone(v string)`

SetInternationalFormatPhone sets InternationalFormatPhone field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


