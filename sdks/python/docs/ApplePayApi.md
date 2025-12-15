# alexasomba_paystack.ApplePayApi

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apple_pay_list_domain**](ApplePayApi.md#apple_pay_list_domain) | **GET** /apple-pay/domain | List Domains
[**apple_pay_register_domain**](ApplePayApi.md#apple_pay_register_domain) | **POST** /apple-pay/domain | Register Domain
[**apple_pay_unregister_domain**](ApplePayApi.md#apple_pay_unregister_domain) | **DELETE** /apple-pay/domain | Unregister Domain


# **apple_pay_list_domain**
> Response apple_pay_list_domain(use_cursor=use_cursor, next=next, previous=previous)

List Domains

Lists all registered domains on your integration. Returns an empty array if no domains have been added.

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.response import Response
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
    api_instance = alexasomba_paystack.ApplePayApi(api_client)
    use_cursor = true # bool | A flag to indicate if cursor based pagination should be used (optional)
    next = 'next_example' # str | An alphanumeric value returned for every cursor based retrieval, used to retrieve the next set of data  (optional)
    previous = 'previous_example' # str | An alphanumeric value returned for every cursor based retrieval, used to retrieve the previous set of data  (optional)

    try:
        # List Domains
        api_response = api_instance.apple_pay_list_domain(use_cursor=use_cursor, next=next, previous=previous)
        print("The response of ApplePayApi->apple_pay_list_domain:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplePayApi->apple_pay_list_domain: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **use_cursor** | **bool**| A flag to indicate if cursor based pagination should be used | [optional] 
 **next** | **str**| An alphanumeric value returned for every cursor based retrieval, used to retrieve the next set of data  | [optional] 
 **previous** | **str**| An alphanumeric value returned for every cursor based retrieval, used to retrieve the previous set of data  | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apple_pay_register_domain**
> ApplePayCreateOkModel apple_pay_register_domain(apple_pay_param=apple_pay_param)

Register Domain

Register a top-level domain or subdomain for your Apple Pay integration.  > This endpoint can only be called with one domain or subdomain at a time. 

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.apple_pay_create_ok_model import ApplePayCreateOkModel
from alexasomba_paystack.models.apple_pay_param import ApplePayParam
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
    api_instance = alexasomba_paystack.ApplePayApi(api_client)
    apple_pay_param = alexasomba_paystack.ApplePayParam() # ApplePayParam |  (optional)

    try:
        # Register Domain
        api_response = api_instance.apple_pay_register_domain(apple_pay_param=apple_pay_param)
        print("The response of ApplePayApi->apple_pay_register_domain:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplePayApi->apple_pay_register_domain: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apple_pay_param** | [**ApplePayParam**](ApplePayParam.md)|  | [optional] 

### Return type

[**ApplePayCreateOkModel**](ApplePayCreateOkModel.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Responses from the Transaction Initialize endpoint |  -  |
**401** | Unauthorized operation |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apple_pay_unregister_domain**
> Response apple_pay_unregister_domain(apple_pay_param=apple_pay_param)

Unregister Domain

Unregister a top-level domain or subdomain previously used for your Apple Pay integration. 

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.apple_pay_param import ApplePayParam
from alexasomba_paystack.models.response import Response
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
    api_instance = alexasomba_paystack.ApplePayApi(api_client)
    apple_pay_param = alexasomba_paystack.ApplePayParam() # ApplePayParam |  (optional)

    try:
        # Unregister Domain
        api_response = api_instance.apple_pay_unregister_domain(apple_pay_param=apple_pay_param)
        print("The response of ApplePayApi->apple_pay_unregister_domain:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplePayApi->apple_pay_unregister_domain: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apple_pay_param** | [**ApplePayParam**](ApplePayParam.md)|  | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

