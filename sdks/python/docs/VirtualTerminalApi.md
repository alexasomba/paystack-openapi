# alexasomba_paystack.VirtualTerminalApi

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**virtual_terminal_add_split_code**](VirtualTerminalApi.md#virtual_terminal_add_split_code) | **PUT** /virtual_terminal/{code}/split_code | Add Split Code to Virtual Terminal
[**virtual_terminal_create**](VirtualTerminalApi.md#virtual_terminal_create) | **POST** /virtual_terminal | Create Virtual Terminal
[**virtual_terminal_deactivate**](VirtualTerminalApi.md#virtual_terminal_deactivate) | **PUT** /virtual_terminal/{code}/deactivate | Deactivate Virtual Terminal
[**virtual_terminal_delete_split_code**](VirtualTerminalApi.md#virtual_terminal_delete_split_code) | **DELETE** /virtual_terminal/{code}/split_code | Remove Split Code from Virtual Terminal
[**virtual_terminal_destination_assign**](VirtualTerminalApi.md#virtual_terminal_destination_assign) | **POST** /virtual_terminal/{code}/destination/assign | Assign Destination to Virtual Terminal
[**virtual_terminal_destination_unassign**](VirtualTerminalApi.md#virtual_terminal_destination_unassign) | **POST** /virtual_terminal/{code}/destination/unassign | Unassign Destination from Virtual Terminal
[**virtual_terminal_fetch**](VirtualTerminalApi.md#virtual_terminal_fetch) | **GET** /virtual_terminal/{code} | Fetch Virtual Terminal
[**virtual_terminal_list**](VirtualTerminalApi.md#virtual_terminal_list) | **GET** /virtual_terminal | List Virtual Terminals
[**virtual_terminal_update**](VirtualTerminalApi.md#virtual_terminal_update) | **PUT** /virtual_terminal/{code} | Update Virtual Terminal


# **virtual_terminal_add_split_code**
> VirtualTerminalAddSplitCodeResponse virtual_terminal_add_split_code(code, body=body)

Add Split Code to Virtual Terminal

Add Split Code to Virtual Terminal

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.virtual_terminal_add_split_code_response import VirtualTerminalAddSplitCodeResponse
from alexasomba_paystack.models.virtual_terminal_code_split_code import VirtualTerminalCodeSplitCode
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
    api_instance = alexasomba_paystack.VirtualTerminalApi(api_client)
    code = 'VT_MCK5292Z' # str | Code of the Virtual Terminal
    body = alexasomba_paystack.VirtualTerminalCodeSplitCode() # VirtualTerminalCodeSplitCode |  (optional)

    try:
        # Add Split Code to Virtual Terminal
        api_response = api_instance.virtual_terminal_add_split_code(code, body=body)
        print("The response of VirtualTerminalApi->virtual_terminal_add_split_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualTerminalApi->virtual_terminal_add_split_code: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Code of the Virtual Terminal | 
 **body** | **VirtualTerminalCodeSplitCode**|  | [optional] 

### Return type

[**VirtualTerminalAddSplitCodeResponse**](VirtualTerminalAddSplitCodeResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Virtual Terminal Split Assign response |  -  |
**401** | Unauthorized operation |  -  |
**0** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_terminal_create**
> VirtualTerminalCreateResponse virtual_terminal_create(virtual_terminal_create=virtual_terminal_create)

Create Virtual Terminal

Create a Virtual Terminal on your integration

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.virtual_terminal_create import VirtualTerminalCreate
from alexasomba_paystack.models.virtual_terminal_create_response import VirtualTerminalCreateResponse
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
    api_instance = alexasomba_paystack.VirtualTerminalApi(api_client)
    virtual_terminal_create = alexasomba_paystack.VirtualTerminalCreate() # VirtualTerminalCreate |  (optional)

    try:
        # Create Virtual Terminal
        api_response = api_instance.virtual_terminal_create(virtual_terminal_create=virtual_terminal_create)
        print("The response of VirtualTerminalApi->virtual_terminal_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualTerminalApi->virtual_terminal_create: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **virtual_terminal_create** | [**VirtualTerminalCreate**](VirtualTerminalCreate.md)|  | [optional] 

### Return type

[**VirtualTerminalCreateResponse**](VirtualTerminalCreateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Virtual Terminal Create response |  -  |
**401** | Unauthorized operation |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_terminal_deactivate**
> VirtualTerminalDeactivateResponse virtual_terminal_deactivate(code)

Deactivate Virtual Terminal

Deactivate a Virtual Terminal on your integration

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.virtual_terminal_deactivate_response import VirtualTerminalDeactivateResponse
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
    api_instance = alexasomba_paystack.VirtualTerminalApi(api_client)
    code = 'VT_MCK5292Z' # str | Code of the Virtual Terminal

    try:
        # Deactivate Virtual Terminal
        api_response = api_instance.virtual_terminal_deactivate(code)
        print("The response of VirtualTerminalApi->virtual_terminal_deactivate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualTerminalApi->virtual_terminal_deactivate: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Code of the Virtual Terminal | 

### Return type

[**VirtualTerminalDeactivateResponse**](VirtualTerminalDeactivateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Virtual Terminal Deactivate response |  -  |
**401** | Unauthorized operation |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_terminal_delete_split_code**
> VirtualTerminalDeleteSplitCodeResponse virtual_terminal_delete_split_code(code, body=body)

Remove Split Code from Virtual Terminal

Remove Split Code from Virtual Terminal

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.virtual_terminal_code_split_code import VirtualTerminalCodeSplitCode
from alexasomba_paystack.models.virtual_terminal_delete_split_code_response import VirtualTerminalDeleteSplitCodeResponse
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
    api_instance = alexasomba_paystack.VirtualTerminalApi(api_client)
    code = 'VT_MCK5292Z' # str | Code of the Virtual Terminal
    body = alexasomba_paystack.VirtualTerminalCodeSplitCode() # VirtualTerminalCodeSplitCode |  (optional)

    try:
        # Remove Split Code from Virtual Terminal
        api_response = api_instance.virtual_terminal_delete_split_code(code, body=body)
        print("The response of VirtualTerminalApi->virtual_terminal_delete_split_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualTerminalApi->virtual_terminal_delete_split_code: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Code of the Virtual Terminal | 
 **body** | **VirtualTerminalCodeSplitCode**|  | [optional] 

### Return type

[**VirtualTerminalDeleteSplitCodeResponse**](VirtualTerminalDeleteSplitCodeResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Virtual Terminal Split Remove response |  -  |
**401** | Unauthorized operation |  -  |
**0** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_terminal_destination_assign**
> VirtualTerminalDestinationAssignResponse virtual_terminal_destination_assign(code, body=body)

Assign Destination to Virtual Terminal

Add a destination (WhatsApp number) to a Virtual Terminal on your integration

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.virtual_terminal_code_destination_assign import VirtualTerminalCodeDestinationAssign
from alexasomba_paystack.models.virtual_terminal_destination_assign_response import VirtualTerminalDestinationAssignResponse
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
    api_instance = alexasomba_paystack.VirtualTerminalApi(api_client)
    code = 'VT_MCK5292Z' # str | Code of the Virtual Terminal
    body = alexasomba_paystack.VirtualTerminalCodeDestinationAssign() # VirtualTerminalCodeDestinationAssign |  (optional)

    try:
        # Assign Destination to Virtual Terminal
        api_response = api_instance.virtual_terminal_destination_assign(code, body=body)
        print("The response of VirtualTerminalApi->virtual_terminal_destination_assign:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualTerminalApi->virtual_terminal_destination_assign: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Code of the Virtual Terminal | 
 **body** | **VirtualTerminalCodeDestinationAssign**|  | [optional] 

### Return type

[**VirtualTerminalDestinationAssignResponse**](VirtualTerminalDestinationAssignResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Virtual Terminal Deactivate response |  -  |
**401** | Unauthorized operation |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_terminal_destination_unassign**
> VirtualTerminalDestinationUnassignResponse virtual_terminal_destination_unassign(code, body=body)

Unassign Destination from Virtual Terminal

Unassign a destination (WhatsApp Number) from a Virtual Terminal on your integration

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.virtual_terminal_code_destination_unassign import VirtualTerminalCodeDestinationUnassign
from alexasomba_paystack.models.virtual_terminal_destination_unassign_response import VirtualTerminalDestinationUnassignResponse
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
    api_instance = alexasomba_paystack.VirtualTerminalApi(api_client)
    code = 'VT_MCK5292Z' # str | Code of the Virtual Terminal
    body = alexasomba_paystack.VirtualTerminalCodeDestinationUnassign() # VirtualTerminalCodeDestinationUnassign |  (optional)

    try:
        # Unassign Destination from Virtual Terminal
        api_response = api_instance.virtual_terminal_destination_unassign(code, body=body)
        print("The response of VirtualTerminalApi->virtual_terminal_destination_unassign:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualTerminalApi->virtual_terminal_destination_unassign: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Code of the Virtual Terminal | 
 **body** | **VirtualTerminalCodeDestinationUnassign**|  | [optional] 

### Return type

[**VirtualTerminalDestinationUnassignResponse**](VirtualTerminalDestinationUnassignResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Virtual Terminal unassign response |  -  |
**401** | Unauthorized operation |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_terminal_fetch**
> VirtualTerminalFetchResponse virtual_terminal_fetch(code)

Fetch Virtual Terminal

Fetch a Virtual Terminal on your integration

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.virtual_terminal_fetch_response import VirtualTerminalFetchResponse
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
    api_instance = alexasomba_paystack.VirtualTerminalApi(api_client)
    code = 'VT_MCK5292Z' # str | Code of the Virtual Terminal

    try:
        # Fetch Virtual Terminal
        api_response = api_instance.virtual_terminal_fetch(code)
        print("The response of VirtualTerminalApi->virtual_terminal_fetch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualTerminalApi->virtual_terminal_fetch: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Code of the Virtual Terminal | 

### Return type

[**VirtualTerminalFetchResponse**](VirtualTerminalFetchResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Virtual Terminal Fetch response |  -  |
**401** | Unauthorized operation |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_terminal_list**
> VirtualTerminalListResponse virtual_terminal_list(per_page=per_page, page=page)

List Virtual Terminals

List Virtual Terminals on your integration

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.virtual_terminal_list_response import VirtualTerminalListResponse
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
    api_instance = alexasomba_paystack.VirtualTerminalApi(api_client)
    per_page = 75 # int | The number of records to fetch per request (optional)
    page = 56 # int | The offset to retrieve data from (optional)

    try:
        # List Virtual Terminals
        api_response = api_instance.virtual_terminal_list(per_page=per_page, page=page)
        print("The response of VirtualTerminalApi->virtual_terminal_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualTerminalApi->virtual_terminal_list: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **per_page** | **int**| The number of records to fetch per request | [optional] 
 **page** | **int**| The offset to retrieve data from | [optional] 

### Return type

[**VirtualTerminalListResponse**](VirtualTerminalListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Virtual Terminal Lists response |  -  |
**401** | Unauthorized operation |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_terminal_update**
> VirtualTerminalUpdateResponse virtual_terminal_update(code, body=body)

Update Virtual Terminal

Update a Virtual Terminal on your integration

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.virtual_terminal_code import VirtualTerminalCode
from alexasomba_paystack.models.virtual_terminal_update_response import VirtualTerminalUpdateResponse
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
    api_instance = alexasomba_paystack.VirtualTerminalApi(api_client)
    code = 'VT_MCK5292Z' # str | Code of the Virtual Terminal
    body = alexasomba_paystack.VirtualTerminalCode() # VirtualTerminalCode |  (optional)

    try:
        # Update Virtual Terminal
        api_response = api_instance.virtual_terminal_update(code, body=body)
        print("The response of VirtualTerminalApi->virtual_terminal_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualTerminalApi->virtual_terminal_update: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Code of the Virtual Terminal | 
 **body** | **VirtualTerminalCode**|  | [optional] 

### Return type

[**VirtualTerminalUpdateResponse**](VirtualTerminalUpdateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Virtual Terminal Update response |  -  |
**401** | Unauthorized operation |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

