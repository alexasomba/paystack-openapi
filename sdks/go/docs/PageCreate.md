# PageCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of page | 
**Description** | Pointer to **string** | The description of the page | [optional] 
**Amount** | Pointer to **int32** | Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR | [optional] 
**Currency** | Pointer to **string** | The transaction currency. Defaults to your integration currency. | [optional] 
**Slug** | Pointer to **string** | URL slug you would like to be associated with this page. Page will be accessible at &#x60;https://paystack.com/pay/[slug]&#x60; | [optional] 
**Type** | Pointer to **string** | The type of payment page to create. Defaults to &#x60;payment&#x60; if no type is specified.  | [optional] 
**Plan** | Pointer to **string** | The ID of the plan to subscribe customers on this payment page to when &#x60;type&#x60; is set to &#x60;subscription&#x60;. | [optional] 
**FixedAmount** | Pointer to **bool** | Specifies whether to collect a fixed amount on the payment page. If true, &#x60;amount&#x60; must be passed. | [optional] 
**SplitCode** | Pointer to **string** | The split code of the transaction split. e.g. &#x60;SPL_98WF13Eb3w&#x60; | [optional] 
**Metadata** | Pointer to **map[string]interface{}** | JSON object of custom data | [optional] 
**RedirectUrl** | Pointer to **string** | If you would like Paystack to redirect to a URL upon successful payment, specify the URL here.  | [optional] 
**SuccessMessage** | Pointer to **string** | A success message to display to the customer after a successful transaction  | [optional] 
**NotificationEmail** | Pointer to **string** | An email address that will receive transaction notifications for this payment page  | [optional] 
**CollectPhone** | Pointer to **bool** | Specify whether to collect phone numbers on the payment page  | [optional] 
**CustomFields** | Pointer to **[]map[string]interface{}** | If you would like to accept custom fields, specify them here. | [optional] 

## Methods

### NewPageCreate

`func NewPageCreate(name string, ) *PageCreate`

NewPageCreate instantiates a new PageCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPageCreateWithDefaults

`func NewPageCreateWithDefaults() *PageCreate`

NewPageCreateWithDefaults instantiates a new PageCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *PageCreate) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PageCreate) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PageCreate) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *PageCreate) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *PageCreate) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *PageCreate) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *PageCreate) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetAmount

`func (o *PageCreate) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *PageCreate) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *PageCreate) SetAmount(v int32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *PageCreate) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetCurrency

`func (o *PageCreate) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *PageCreate) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *PageCreate) SetCurrency(v string)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *PageCreate) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### GetSlug

`func (o *PageCreate) GetSlug() string`

GetSlug returns the Slug field if non-nil, zero value otherwise.

### GetSlugOk

`func (o *PageCreate) GetSlugOk() (*string, bool)`

GetSlugOk returns a tuple with the Slug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlug

`func (o *PageCreate) SetSlug(v string)`

SetSlug sets Slug field to given value.

### HasSlug

`func (o *PageCreate) HasSlug() bool`

HasSlug returns a boolean if a field has been set.

### GetType

`func (o *PageCreate) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *PageCreate) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *PageCreate) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *PageCreate) HasType() bool`

HasType returns a boolean if a field has been set.

### GetPlan

`func (o *PageCreate) GetPlan() string`

GetPlan returns the Plan field if non-nil, zero value otherwise.

### GetPlanOk

`func (o *PageCreate) GetPlanOk() (*string, bool)`

GetPlanOk returns a tuple with the Plan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlan

`func (o *PageCreate) SetPlan(v string)`

SetPlan sets Plan field to given value.

### HasPlan

`func (o *PageCreate) HasPlan() bool`

HasPlan returns a boolean if a field has been set.

### GetFixedAmount

`func (o *PageCreate) GetFixedAmount() bool`

GetFixedAmount returns the FixedAmount field if non-nil, zero value otherwise.

### GetFixedAmountOk

`func (o *PageCreate) GetFixedAmountOk() (*bool, bool)`

GetFixedAmountOk returns a tuple with the FixedAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFixedAmount

`func (o *PageCreate) SetFixedAmount(v bool)`

SetFixedAmount sets FixedAmount field to given value.

### HasFixedAmount

`func (o *PageCreate) HasFixedAmount() bool`

HasFixedAmount returns a boolean if a field has been set.

### GetSplitCode

`func (o *PageCreate) GetSplitCode() string`

GetSplitCode returns the SplitCode field if non-nil, zero value otherwise.

### GetSplitCodeOk

`func (o *PageCreate) GetSplitCodeOk() (*string, bool)`

GetSplitCodeOk returns a tuple with the SplitCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplitCode

`func (o *PageCreate) SetSplitCode(v string)`

SetSplitCode sets SplitCode field to given value.

### HasSplitCode

`func (o *PageCreate) HasSplitCode() bool`

HasSplitCode returns a boolean if a field has been set.

### GetMetadata

`func (o *PageCreate) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *PageCreate) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *PageCreate) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *PageCreate) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### GetRedirectUrl

`func (o *PageCreate) GetRedirectUrl() string`

GetRedirectUrl returns the RedirectUrl field if non-nil, zero value otherwise.

### GetRedirectUrlOk

`func (o *PageCreate) GetRedirectUrlOk() (*string, bool)`

GetRedirectUrlOk returns a tuple with the RedirectUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRedirectUrl

`func (o *PageCreate) SetRedirectUrl(v string)`

SetRedirectUrl sets RedirectUrl field to given value.

### HasRedirectUrl

`func (o *PageCreate) HasRedirectUrl() bool`

HasRedirectUrl returns a boolean if a field has been set.

### GetSuccessMessage

`func (o *PageCreate) GetSuccessMessage() string`

GetSuccessMessage returns the SuccessMessage field if non-nil, zero value otherwise.

### GetSuccessMessageOk

`func (o *PageCreate) GetSuccessMessageOk() (*string, bool)`

GetSuccessMessageOk returns a tuple with the SuccessMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccessMessage

`func (o *PageCreate) SetSuccessMessage(v string)`

SetSuccessMessage sets SuccessMessage field to given value.

### HasSuccessMessage

`func (o *PageCreate) HasSuccessMessage() bool`

HasSuccessMessage returns a boolean if a field has been set.

### GetNotificationEmail

`func (o *PageCreate) GetNotificationEmail() string`

GetNotificationEmail returns the NotificationEmail field if non-nil, zero value otherwise.

### GetNotificationEmailOk

`func (o *PageCreate) GetNotificationEmailOk() (*string, bool)`

GetNotificationEmailOk returns a tuple with the NotificationEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotificationEmail

`func (o *PageCreate) SetNotificationEmail(v string)`

SetNotificationEmail sets NotificationEmail field to given value.

### HasNotificationEmail

`func (o *PageCreate) HasNotificationEmail() bool`

HasNotificationEmail returns a boolean if a field has been set.

### GetCollectPhone

`func (o *PageCreate) GetCollectPhone() bool`

GetCollectPhone returns the CollectPhone field if non-nil, zero value otherwise.

### GetCollectPhoneOk

`func (o *PageCreate) GetCollectPhoneOk() (*bool, bool)`

GetCollectPhoneOk returns a tuple with the CollectPhone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCollectPhone

`func (o *PageCreate) SetCollectPhone(v bool)`

SetCollectPhone sets CollectPhone field to given value.

### HasCollectPhone

`func (o *PageCreate) HasCollectPhone() bool`

HasCollectPhone returns a boolean if a field has been set.

### GetCustomFields

`func (o *PageCreate) GetCustomFields() []map[string]interface{}`

GetCustomFields returns the CustomFields field if non-nil, zero value otherwise.

### GetCustomFieldsOk

`func (o *PageCreate) GetCustomFieldsOk() (*[]map[string]interface{}, bool)`

GetCustomFieldsOk returns a tuple with the CustomFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomFields

`func (o *PageCreate) SetCustomFields(v []map[string]interface{})`

SetCustomFields sets CustomFields field to given value.

### HasCustomFields

`func (o *PageCreate) HasCustomFields() bool`

HasCustomFields returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


