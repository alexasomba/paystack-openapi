# alexasomba_paystack.DirectDebitApi

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**directdebit_list_mandate_authorizations**](DirectDebitApi.md#directdebit_list_mandate_authorizations) | **GET** /directdebit/mandate-authorizations | List Mandate Authorizations
[**directdebit_trigger_activation_charge**](DirectDebitApi.md#directdebit_trigger_activation_charge) | **PUT** /directdebit/activation-charge | Trigger Activation Charge


# **directdebit_list_mandate_authorizations**
> CustomerFetchMandateAuthorizationsResponse directdebit_list_mandate_authorizations(cursor=cursor, status=status, per_page=per_page)

List Mandate Authorizations

Get a list of all the direct debit mandates on your integration

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.customer_fetch_mandate_authorizations_response import CustomerFetchMandateAuthorizationsResponse
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
    api_instance = alexasomba_paystack.DirectDebitApi(api_client)
    cursor = 'cursor_example' # str | The cursor value of the next set of authorizations to fetch. You can get this from the meta object of the response (optional)
    status = 'status_example' # str | Filter by the authorization status (optional)
    per_page = 56 # int | The number of authorizations to fetch per request (optional)

    try:
        # List Mandate Authorizations
        api_response = api_instance.directdebit_list_mandate_authorizations(cursor=cursor, status=status, per_page=per_page)
        print("The response of DirectDebitApi->directdebit_list_mandate_authorizations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DirectDebitApi->directdebit_list_mandate_authorizations: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **str**| The cursor value of the next set of authorizations to fetch. You can get this from the meta object of the response | [optional] 
 **status** | **str**| Filter by the authorization status | [optional] 
 **per_page** | **int**| The number of authorizations to fetch per request | [optional] 

### Return type

[**CustomerFetchMandateAuthorizationsResponse**](CustomerFetchMandateAuthorizationsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Customer Fetch Mandate Authorizations response |  -  |
**401** | Unauthorized operation |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **directdebit_trigger_activation_charge**
> DirectDebitActivationChargeResponse directdebit_trigger_activation_charge(direct_debit_activation_charge_request)

Trigger Activation Charge

Trigger activation charge for specified customers

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.direct_debit_activation_charge_request import DirectDebitActivationChargeRequest
from alexasomba_paystack.models.direct_debit_activation_charge_response import DirectDebitActivationChargeResponse
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
    api_instance = alexasomba_paystack.DirectDebitApi(api_client)
    direct_debit_activation_charge_request = alexasomba_paystack.DirectDebitActivationChargeRequest() # DirectDebitActivationChargeRequest | 

    try:
        # Trigger Activation Charge
        api_response = api_instance.directdebit_trigger_activation_charge(direct_debit_activation_charge_request)
        print("The response of DirectDebitApi->directdebit_trigger_activation_charge:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DirectDebitApi->directdebit_trigger_activation_charge: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direct_debit_activation_charge_request** | [**DirectDebitActivationChargeRequest**](DirectDebitActivationChargeRequest.md)|  | 

### Return type

[**DirectDebitActivationChargeResponse**](DirectDebitActivationChargeResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Direct Debit Activation Charge response |  -  |
**401** | Unauthorized operation |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

