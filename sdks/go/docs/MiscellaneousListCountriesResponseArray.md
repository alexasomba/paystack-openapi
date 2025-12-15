# MiscellaneousListCountriesResponseArray

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**ActiveForDashboardOnboarding** | **bool** |  | 
**Name** | **string** |  | 
**IsoCode** | **string** |  | 
**DefaultCurrencyCode** | **string** |  | 
**IntegrationDefaults** | **map[string]interface{}** |  | 
**CallingCode** | **string** |  | 
**PilotMode** | **bool** |  | 
**Relationships** | [**MiscellaneousListCountriesResponseArrayRelationships**](MiscellaneousListCountriesResponseArrayRelationships.md) |  | 

## Methods

### NewMiscellaneousListCountriesResponseArray

`func NewMiscellaneousListCountriesResponseArray(id int32, activeForDashboardOnboarding bool, name string, isoCode string, defaultCurrencyCode string, integrationDefaults map[string]interface{}, callingCode string, pilotMode bool, relationships MiscellaneousListCountriesResponseArrayRelationships, ) *MiscellaneousListCountriesResponseArray`

NewMiscellaneousListCountriesResponseArray instantiates a new MiscellaneousListCountriesResponseArray object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMiscellaneousListCountriesResponseArrayWithDefaults

`func NewMiscellaneousListCountriesResponseArrayWithDefaults() *MiscellaneousListCountriesResponseArray`

NewMiscellaneousListCountriesResponseArrayWithDefaults instantiates a new MiscellaneousListCountriesResponseArray object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *MiscellaneousListCountriesResponseArray) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *MiscellaneousListCountriesResponseArray) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *MiscellaneousListCountriesResponseArray) SetId(v int32)`

SetId sets Id field to given value.


### GetActiveForDashboardOnboarding

`func (o *MiscellaneousListCountriesResponseArray) GetActiveForDashboardOnboarding() bool`

GetActiveForDashboardOnboarding returns the ActiveForDashboardOnboarding field if non-nil, zero value otherwise.

### GetActiveForDashboardOnboardingOk

`func (o *MiscellaneousListCountriesResponseArray) GetActiveForDashboardOnboardingOk() (*bool, bool)`

GetActiveForDashboardOnboardingOk returns a tuple with the ActiveForDashboardOnboarding field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActiveForDashboardOnboarding

`func (o *MiscellaneousListCountriesResponseArray) SetActiveForDashboardOnboarding(v bool)`

SetActiveForDashboardOnboarding sets ActiveForDashboardOnboarding field to given value.


### GetName

`func (o *MiscellaneousListCountriesResponseArray) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MiscellaneousListCountriesResponseArray) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MiscellaneousListCountriesResponseArray) SetName(v string)`

SetName sets Name field to given value.


### GetIsoCode

`func (o *MiscellaneousListCountriesResponseArray) GetIsoCode() string`

GetIsoCode returns the IsoCode field if non-nil, zero value otherwise.

### GetIsoCodeOk

`func (o *MiscellaneousListCountriesResponseArray) GetIsoCodeOk() (*string, bool)`

GetIsoCodeOk returns a tuple with the IsoCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsoCode

`func (o *MiscellaneousListCountriesResponseArray) SetIsoCode(v string)`

SetIsoCode sets IsoCode field to given value.


### GetDefaultCurrencyCode

`func (o *MiscellaneousListCountriesResponseArray) GetDefaultCurrencyCode() string`

GetDefaultCurrencyCode returns the DefaultCurrencyCode field if non-nil, zero value otherwise.

### GetDefaultCurrencyCodeOk

`func (o *MiscellaneousListCountriesResponseArray) GetDefaultCurrencyCodeOk() (*string, bool)`

GetDefaultCurrencyCodeOk returns a tuple with the DefaultCurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultCurrencyCode

`func (o *MiscellaneousListCountriesResponseArray) SetDefaultCurrencyCode(v string)`

SetDefaultCurrencyCode sets DefaultCurrencyCode field to given value.


### GetIntegrationDefaults

`func (o *MiscellaneousListCountriesResponseArray) GetIntegrationDefaults() map[string]interface{}`

GetIntegrationDefaults returns the IntegrationDefaults field if non-nil, zero value otherwise.

### GetIntegrationDefaultsOk

`func (o *MiscellaneousListCountriesResponseArray) GetIntegrationDefaultsOk() (*map[string]interface{}, bool)`

GetIntegrationDefaultsOk returns a tuple with the IntegrationDefaults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegrationDefaults

`func (o *MiscellaneousListCountriesResponseArray) SetIntegrationDefaults(v map[string]interface{})`

SetIntegrationDefaults sets IntegrationDefaults field to given value.


### GetCallingCode

`func (o *MiscellaneousListCountriesResponseArray) GetCallingCode() string`

GetCallingCode returns the CallingCode field if non-nil, zero value otherwise.

### GetCallingCodeOk

`func (o *MiscellaneousListCountriesResponseArray) GetCallingCodeOk() (*string, bool)`

GetCallingCodeOk returns a tuple with the CallingCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCallingCode

`func (o *MiscellaneousListCountriesResponseArray) SetCallingCode(v string)`

SetCallingCode sets CallingCode field to given value.


### GetPilotMode

`func (o *MiscellaneousListCountriesResponseArray) GetPilotMode() bool`

GetPilotMode returns the PilotMode field if non-nil, zero value otherwise.

### GetPilotModeOk

`func (o *MiscellaneousListCountriesResponseArray) GetPilotModeOk() (*bool, bool)`

GetPilotModeOk returns a tuple with the PilotMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPilotMode

`func (o *MiscellaneousListCountriesResponseArray) SetPilotMode(v bool)`

SetPilotMode sets PilotMode field to given value.


### GetRelationships

`func (o *MiscellaneousListCountriesResponseArray) GetRelationships() MiscellaneousListCountriesResponseArrayRelationships`

GetRelationships returns the Relationships field if non-nil, zero value otherwise.

### GetRelationshipsOk

`func (o *MiscellaneousListCountriesResponseArray) GetRelationshipsOk() (*MiscellaneousListCountriesResponseArrayRelationships, bool)`

GetRelationshipsOk returns a tuple with the Relationships field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelationships

`func (o *MiscellaneousListCountriesResponseArray) SetRelationships(v MiscellaneousListCountriesResponseArrayRelationships)`

SetRelationships sets Relationships field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


