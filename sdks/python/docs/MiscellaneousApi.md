# alexasomba_paystack.MiscellaneousApi

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**miscellaneous_avs**](MiscellaneousApi.md#miscellaneous_avs) | **GET** /address_verification/states | List States (AVS)
[**miscellaneous_list_countries**](MiscellaneousApi.md#miscellaneous_list_countries) | **GET** /country | List Countries
[**miscellaneous_resolve_card_bin**](MiscellaneousApi.md#miscellaneous_resolve_card_bin) | **GET** /decision/bin/{bin} | Resolve Card BIN


# **miscellaneous_avs**
> MiscellaneousListStatesResponse miscellaneous_avs(country=country)

List States (AVS)

Get a list of states for a country for address verification

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.miscellaneous_list_states_response import MiscellaneousListStatesResponse
from alexasomba_paystack.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.paystack.co
# See configuration.py for a list of all supported configuration parameters.
configuration = alexasomba_paystack.Configuration(
    host = "https://api.paystack.co"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = alexasomba_paystack.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with alexasomba_paystack.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = alexasomba_paystack.MiscellaneousApi(api_client)
    country = 'CA' # str | The country code of the states to list. It is gotten after the charge request (optional)

    try:
        # List States (AVS)
        api_response = api_instance.miscellaneous_avs(country=country)
        print("The response of MiscellaneousApi->miscellaneous_avs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MiscellaneousApi->miscellaneous_avs: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **str**| The country code of the states to list. It is gotten after the charge request | [optional] 

### Return type

[**MiscellaneousListStatesResponse**](MiscellaneousListStatesResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Miscellaneous List States response |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **miscellaneous_list_countries**
> MiscellaneousListCountriesResponse miscellaneous_list_countries()

List Countries

List all supported countries on Paystack

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.miscellaneous_list_countries_response import MiscellaneousListCountriesResponse
from alexasomba_paystack.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.paystack.co
# See configuration.py for a list of all supported configuration parameters.
configuration = alexasomba_paystack.Configuration(
    host = "https://api.paystack.co"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = alexasomba_paystack.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with alexasomba_paystack.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = alexasomba_paystack.MiscellaneousApi(api_client)

    try:
        # List Countries
        api_response = api_instance.miscellaneous_list_countries()
        print("The response of MiscellaneousApi->miscellaneous_list_countries:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MiscellaneousApi->miscellaneous_list_countries: %s\n" % e)
```



### Parameters
This endpoint does not need any parameter.

### Return type

[**MiscellaneousListCountriesResponse**](MiscellaneousListCountriesResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Miscellaneous List Countries response |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **miscellaneous_resolve_card_bin**
> VerificationResolveCardBINResponse miscellaneous_resolve_card_bin(bin)

Resolve Card BIN

Get the details of a card BIN

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.verification_resolve_card_bin_response import VerificationResolveCardBINResponse
from alexasomba_paystack.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.paystack.co
# See configuration.py for a list of all supported configuration parameters.
configuration = alexasomba_paystack.Configuration(
    host = "https://api.paystack.co"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = alexasomba_paystack.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with alexasomba_paystack.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = alexasomba_paystack.MiscellaneousApi(api_client)
    bin = 539983 # int | The card bank identification number

    try:
        # Resolve Card BIN
        api_response = api_instance.miscellaneous_resolve_card_bin(bin)
        print("The response of MiscellaneousApi->miscellaneous_resolve_card_bin:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MiscellaneousApi->miscellaneous_resolve_card_bin: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bin** | **int**| The card bank identification number | 

### Return type

[**VerificationResolveCardBINResponse**](VerificationResolveCardBINResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Verification Resolve Card B I N response |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

