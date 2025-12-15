# alexasomba_paystack.TerminalApi

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**terminal_commission**](TerminalApi.md#terminal_commission) | **POST** /terminal/commission_device | Commission Terminal
[**terminal_decommission**](TerminalApi.md#terminal_decommission) | **POST** /terminal/decommission_device | Decommission Terminal
[**terminal_fetch**](TerminalApi.md#terminal_fetch) | **GET** /terminal/{terminal_id} | Fetch Terminal
[**terminal_fetch_event_status**](TerminalApi.md#terminal_fetch_event_status) | **GET** /terminal/{terminal_id}/event/{event_id} | Fetch Event Status
[**terminal_fetch_terminal_status**](TerminalApi.md#terminal_fetch_terminal_status) | **GET** /terminal/{terminal_id}/presence | Fetch Terminal Status
[**terminal_list**](TerminalApi.md#terminal_list) | **GET** /terminal | List Terminals
[**terminal_send_event**](TerminalApi.md#terminal_send_event) | **POST** /terminal/{id}/event | Send Event
[**terminal_update**](TerminalApi.md#terminal_update) | **PUT** /terminal/{terminal_id} | Update Terminal


# **terminal_commission**
> TerminalCommissionDeviceResponse terminal_commission(terminal_activation_toggle=terminal_activation_toggle)

Commission Terminal

Activate your debug device by linking it to your integration

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.terminal_activation_toggle import TerminalActivationToggle
from alexasomba_paystack.models.terminal_commission_device_response import TerminalCommissionDeviceResponse
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
    api_instance = alexasomba_paystack.TerminalApi(api_client)
    terminal_activation_toggle = alexasomba_paystack.TerminalActivationToggle() # TerminalActivationToggle |  (optional)

    try:
        # Commission Terminal
        api_response = api_instance.terminal_commission(terminal_activation_toggle=terminal_activation_toggle)
        print("The response of TerminalApi->terminal_commission:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TerminalApi->terminal_commission: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **terminal_activation_toggle** | [**TerminalActivationToggle**](TerminalActivationToggle.md)|  | [optional] 

### Return type

[**TerminalCommissionDeviceResponse**](TerminalCommissionDeviceResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Terminal Commission Device response |  -  |
**401** | Unauthorized operation |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **terminal_decommission**
> TerminalDecommissionDeviceResponse terminal_decommission(terminal_activation_toggle=terminal_activation_toggle)

Decommission Terminal

Unlink your debug device from your integration

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.terminal_activation_toggle import TerminalActivationToggle
from alexasomba_paystack.models.terminal_decommission_device_response import TerminalDecommissionDeviceResponse
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
    api_instance = alexasomba_paystack.TerminalApi(api_client)
    terminal_activation_toggle = alexasomba_paystack.TerminalActivationToggle() # TerminalActivationToggle |  (optional)

    try:
        # Decommission Terminal
        api_response = api_instance.terminal_decommission(terminal_activation_toggle=terminal_activation_toggle)
        print("The response of TerminalApi->terminal_decommission:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TerminalApi->terminal_decommission: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **terminal_activation_toggle** | [**TerminalActivationToggle**](TerminalActivationToggle.md)|  | [optional] 

### Return type

[**TerminalDecommissionDeviceResponse**](TerminalDecommissionDeviceResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Terminal Decommission Device response |  -  |
**401** | Unauthorized operation |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **terminal_fetch**
> TerminalGetResponse terminal_fetch(terminal_id)

Fetch Terminal

Get the details of a Terminal

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.terminal_get_response import TerminalGetResponse
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
    api_instance = alexasomba_paystack.TerminalApi(api_client)
    terminal_id = 'Z0R4orOU' # str | The ID of the Terminal the event should be sent to.

    try:
        # Fetch Terminal
        api_response = api_instance.terminal_fetch(terminal_id)
        print("The response of TerminalApi->terminal_fetch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TerminalApi->terminal_fetch: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **terminal_id** | **str**| The ID of the Terminal the event should be sent to. | 

### Return type

[**TerminalGetResponse**](TerminalGetResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Terminal Get response |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **terminal_fetch_event_status**
> Response terminal_fetch_event_status(terminal_id, event_id)

Fetch Event Status

Check the status of an event sent to the Terminal

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
    api_instance = alexasomba_paystack.TerminalApi(api_client)
    terminal_id = 'Z0R4orOU' # str | The ID of the Terminal the event should be sent to.
    event_id = '616d721e8c5cd40a0cdd54a6' # str | The ID of the event that was sent to the Terminal

    try:
        # Fetch Event Status
        api_response = api_instance.terminal_fetch_event_status(terminal_id, event_id)
        print("The response of TerminalApi->terminal_fetch_event_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TerminalApi->terminal_fetch_event_status: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **terminal_id** | **str**| The ID of the Terminal the event should be sent to. | 
 **event_id** | **str**| The ID of the event that was sent to the Terminal | 

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

# **terminal_fetch_terminal_status**
> TerminalGetStatusResponse terminal_fetch_terminal_status(terminal_id)

Fetch Terminal Status

Check the availiability of a Terminal before sending an event to it

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.terminal_get_status_response import TerminalGetStatusResponse
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
    api_instance = alexasomba_paystack.TerminalApi(api_client)
    terminal_id = 'Z0R4orOU' # str | The ID of the Terminal the event should be sent to.

    try:
        # Fetch Terminal Status
        api_response = api_instance.terminal_fetch_terminal_status(terminal_id)
        print("The response of TerminalApi->terminal_fetch_terminal_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TerminalApi->terminal_fetch_terminal_status: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **terminal_id** | **str**| The ID of the Terminal the event should be sent to. | 

### Return type

[**TerminalGetStatusResponse**](TerminalGetStatusResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Terminal Get Status response |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **terminal_list**
> TerminalListsResponse terminal_list(next=next, previous=previous, per_page=per_page)

List Terminals

List the Terminals available on your integration

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.terminal_lists_response import TerminalListsResponse
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
    api_instance = alexasomba_paystack.TerminalApi(api_client)
    next = 'next_example' # str | A cursor that indicates your place in the list. It can be used to fetch the next page of the list (optional)
    previous = 'previous_example' # str | A cursor that indicates your place in the list. It should be used to fetch the previous page of the list after an intial next request (optional)
    per_page = 50 # int | Specify how many records you want to retrieve per page (optional) (default to 50)

    try:
        # List Terminals
        api_response = api_instance.terminal_list(next=next, previous=previous, per_page=per_page)
        print("The response of TerminalApi->terminal_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TerminalApi->terminal_list: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **next** | **str**| A cursor that indicates your place in the list. It can be used to fetch the next page of the list | [optional] 
 **previous** | **str**| A cursor that indicates your place in the list. It should be used to fetch the previous page of the list after an intial next request | [optional] 
 **per_page** | **int**| Specify how many records you want to retrieve per page | [optional] [default to 50]

### Return type

[**TerminalListsResponse**](TerminalListsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Terminal Lists response |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **terminal_send_event**
> Response terminal_send_event(id, body=body)

Send Event

Send an event from your application to the Paystack Terminal

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.response import Response
from alexasomba_paystack.models.terminal_id_event import TerminalIdEvent
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
    api_instance = alexasomba_paystack.TerminalApi(api_client)
    id = 'Z0R4orOU' # str | The ID of the Terminal the event should be sent to.
    body = alexasomba_paystack.TerminalIdEvent() # TerminalIdEvent |  (optional)

    try:
        # Send Event
        api_response = api_instance.terminal_send_event(id, body=body)
        print("The response of TerminalApi->terminal_send_event:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TerminalApi->terminal_send_event: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the Terminal the event should be sent to. | 
 **body** | **TerminalIdEvent**|  | [optional] 

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
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **terminal_update**
> TerminalUpdateResponse terminal_update(terminal_id, body=body)

Update Terminal

Update the details of a Terminal

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.terminal_terminal_id import TerminalTerminalId
from alexasomba_paystack.models.terminal_update_response import TerminalUpdateResponse
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
    api_instance = alexasomba_paystack.TerminalApi(api_client)
    terminal_id = 'Z0R4orOU' # str | The ID of the Terminal the event should be sent to.
    body = alexasomba_paystack.TerminalTerminalId() # TerminalTerminalId |  (optional)

    try:
        # Update Terminal
        api_response = api_instance.terminal_update(terminal_id, body=body)
        print("The response of TerminalApi->terminal_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TerminalApi->terminal_update: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **terminal_id** | **str**| The ID of the Terminal the event should be sent to. | 
 **body** | **TerminalTerminalId**|  | [optional] 

### Return type

[**TerminalUpdateResponse**](TerminalUpdateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Terminal Update response |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

