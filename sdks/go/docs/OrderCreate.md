# OrderCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Email** | **string** | The email of the customer placing the order | 
**FirstName** | **string** | The customer&#39;s first name | 
**LastName** | **string** | The customer&#39;s last name | 
**Phone** | **string** | The customer&#39;s mobile number | 
**Currency** | **string** | Currency in which amount is set | 
**Items** | [**[]OrderItems**](OrderItems.md) |  | 
**Shipping** | [**OrderShipping**](OrderShipping.md) |  | 
**IsGift** | Pointer to **bool** | A flag to indicate if the order is for someone else | [optional] 
**PayForMe** | Pointer to **bool** | A flag to indicate if the someone else should pay for the order | [optional] 

## Methods

### NewOrderCreate

`func NewOrderCreate(email string, firstName string, lastName string, phone string, currency string, items []OrderItems, shipping OrderShipping, ) *OrderCreate`

NewOrderCreate instantiates a new OrderCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrderCreateWithDefaults

`func NewOrderCreateWithDefaults() *OrderCreate`

NewOrderCreateWithDefaults instantiates a new OrderCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmail

`func (o *OrderCreate) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *OrderCreate) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *OrderCreate) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetFirstName

`func (o *OrderCreate) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *OrderCreate) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *OrderCreate) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.


### GetLastName

`func (o *OrderCreate) GetLastName() string`

GetLastName returns the LastName field if non-nil, zero value otherwise.

### GetLastNameOk

`func (o *OrderCreate) GetLastNameOk() (*string, bool)`

GetLastNameOk returns a tuple with the LastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName

`func (o *OrderCreate) SetLastName(v string)`

SetLastName sets LastName field to given value.


### GetPhone

`func (o *OrderCreate) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *OrderCreate) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *OrderCreate) SetPhone(v string)`

SetPhone sets Phone field to given value.


### GetCurrency

`func (o *OrderCreate) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *OrderCreate) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *OrderCreate) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetItems

`func (o *OrderCreate) GetItems() []OrderItems`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *OrderCreate) GetItemsOk() (*[]OrderItems, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *OrderCreate) SetItems(v []OrderItems)`

SetItems sets Items field to given value.


### GetShipping

`func (o *OrderCreate) GetShipping() OrderShipping`

GetShipping returns the Shipping field if non-nil, zero value otherwise.

### GetShippingOk

`func (o *OrderCreate) GetShippingOk() (*OrderShipping, bool)`

GetShippingOk returns a tuple with the Shipping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShipping

`func (o *OrderCreate) SetShipping(v OrderShipping)`

SetShipping sets Shipping field to given value.


### GetIsGift

`func (o *OrderCreate) GetIsGift() bool`

GetIsGift returns the IsGift field if non-nil, zero value otherwise.

### GetIsGiftOk

`func (o *OrderCreate) GetIsGiftOk() (*bool, bool)`

GetIsGiftOk returns a tuple with the IsGift field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsGift

`func (o *OrderCreate) SetIsGift(v bool)`

SetIsGift sets IsGift field to given value.

### HasIsGift

`func (o *OrderCreate) HasIsGift() bool`

HasIsGift returns a boolean if a field has been set.

### GetPayForMe

`func (o *OrderCreate) GetPayForMe() bool`

GetPayForMe returns the PayForMe field if non-nil, zero value otherwise.

### GetPayForMeOk

`func (o *OrderCreate) GetPayForMeOk() (*bool, bool)`

GetPayForMeOk returns a tuple with the PayForMe field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayForMe

`func (o *OrderCreate) SetPayForMe(v bool)`

SetPayForMe sets PayForMe field to given value.

### HasPayForMe

`func (o *OrderCreate) HasPayForMe() bool`

HasPayForMe returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


