# alexasomba_paystack.SubscriptionApi

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscription_create**](SubscriptionApi.md#subscription_create) | **POST** /subscription | Create Subscription
[**subscription_disable**](SubscriptionApi.md#subscription_disable) | **POST** /subscription/disable | Disable Subscription
[**subscription_enable**](SubscriptionApi.md#subscription_enable) | **POST** /subscription/enable | Enable Subscription
[**subscription_fetch**](SubscriptionApi.md#subscription_fetch) | **GET** /subscription/{code} | Fetch Subscription
[**subscription_list**](SubscriptionApi.md#subscription_list) | **GET** /subscription | List Subscriptions
[**subscription_manage_email**](SubscriptionApi.md#subscription_manage_email) | **POST** /subscription/{code}/manage/email | Send Update Subscription Link
[**subscription_manage_link**](SubscriptionApi.md#subscription_manage_link) | **GET** /subscription/{code}/manage/link | Generate Update Subscription Link


# **subscription_create**
> SubscriptionCreateResponse subscription_create(subscription_create=subscription_create)

Create Subscription

Create a subscription a customer

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.subscription_create import SubscriptionCreate
from alexasomba_paystack.models.subscription_create_response import SubscriptionCreateResponse
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
    api_instance = alexasomba_paystack.SubscriptionApi(api_client)
    subscription_create = alexasomba_paystack.SubscriptionCreate() # SubscriptionCreate |  (optional)

    try:
        # Create Subscription
        api_response = api_instance.subscription_create(subscription_create=subscription_create)
        print("The response of SubscriptionApi->subscription_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionApi->subscription_create: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_create** | [**SubscriptionCreate**](SubscriptionCreate.md)|  | [optional] 

### Return type

[**SubscriptionCreateResponse**](SubscriptionCreateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Subscription Create response |  -  |
**401** | Unauthorized operation |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscription_disable**
> SubscriptionDisableResponse subscription_disable(subscription_toggle=subscription_toggle)

Disable Subscription

Disable a subscription on your integration

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.subscription_disable_response import SubscriptionDisableResponse
from alexasomba_paystack.models.subscription_toggle import SubscriptionToggle
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
    api_instance = alexasomba_paystack.SubscriptionApi(api_client)
    subscription_toggle = alexasomba_paystack.SubscriptionToggle() # SubscriptionToggle |  (optional)

    try:
        # Disable Subscription
        api_response = api_instance.subscription_disable(subscription_toggle=subscription_toggle)
        print("The response of SubscriptionApi->subscription_disable:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionApi->subscription_disable: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_toggle** | [**SubscriptionToggle**](SubscriptionToggle.md)|  | [optional] 

### Return type

[**SubscriptionDisableResponse**](SubscriptionDisableResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Subscription Disable response |  -  |
**401** | Unauthorized operation |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscription_enable**
> Response subscription_enable(subscription_toggle=subscription_toggle)

Enable Subscription

Enable a subscription on your integration

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.response import Response
from alexasomba_paystack.models.subscription_toggle import SubscriptionToggle
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
    api_instance = alexasomba_paystack.SubscriptionApi(api_client)
    subscription_toggle = alexasomba_paystack.SubscriptionToggle() # SubscriptionToggle |  (optional)

    try:
        # Enable Subscription
        api_response = api_instance.subscription_enable(subscription_toggle=subscription_toggle)
        print("The response of SubscriptionApi->subscription_enable:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionApi->subscription_enable: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_toggle** | [**SubscriptionToggle**](SubscriptionToggle.md)|  | [optional] 

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

# **subscription_fetch**
> SubscriptionFetchResponse subscription_fetch(code)

Fetch Subscription

Get details of a customer's subscription

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.subscription_fetch_response import SubscriptionFetchResponse
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
    api_instance = alexasomba_paystack.SubscriptionApi(api_client)
    code = 'SUB_5co81xgmwg78x3d' # str | The subscription code for the subscription you want to fetch

    try:
        # Fetch Subscription
        api_response = api_instance.subscription_fetch(code)
        print("The response of SubscriptionApi->subscription_fetch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionApi->subscription_fetch: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| The subscription code for the subscription you want to fetch | 

### Return type

[**SubscriptionFetchResponse**](SubscriptionFetchResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Subscription Fetch response |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscription_list**
> SubscriptionListResponse subscription_list(per_page=per_page, page=page, plan=plan, customer=customer, var_from=var_from, to=to)

List Subscriptions

List all subscriptions available on your integration

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.subscription_list_response import SubscriptionListResponse
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
    api_instance = alexasomba_paystack.SubscriptionApi(api_client)
    per_page = 56 # int | Number of records to fetch per page (optional)
    page = 56 # int | The section to retrieve (optional)
    plan = 2697466 # int | Plan ID (optional)
    customer = 'customer_example' # str | Customer ID (optional)
    var_from = '2013-10-20T19:20:30+01:00' # datetime | The start date (optional)
    to = '2013-10-20T19:20:30+01:00' # datetime | The end date (optional)

    try:
        # List Subscriptions
        api_response = api_instance.subscription_list(per_page=per_page, page=page, plan=plan, customer=customer, var_from=var_from, to=to)
        print("The response of SubscriptionApi->subscription_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionApi->subscription_list: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **per_page** | **int**| Number of records to fetch per page | [optional] 
 **page** | **int**| The section to retrieve | [optional] 
 **plan** | **int**| Plan ID | [optional] 
 **customer** | **str**| Customer ID | [optional] 
 **var_from** | **datetime**| The start date | [optional] 
 **to** | **datetime**| The end date | [optional] 

### Return type

[**SubscriptionListResponse**](SubscriptionListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Subscription List response |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscription_manage_email**
> Response subscription_manage_email(code)

Send Update Subscription Link

Email a customer a link for updating the card on their subscription

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
    api_instance = alexasomba_paystack.SubscriptionApi(api_client)
    code = 'qlgwhpyq1ts9nsw' # str | Subscription code

    try:
        # Send Update Subscription Link
        api_response = api_instance.subscription_manage_email(code)
        print("The response of SubscriptionApi->subscription_manage_email:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionApi->subscription_manage_email: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Subscription code | 

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
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscription_manage_link**
> Response subscription_manage_link(code)

Generate Update Subscription Link

Generate a link for updating the card on a subscription

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
    api_instance = alexasomba_paystack.SubscriptionApi(api_client)
    code = 'qlgwhpyq1ts9nsw' # str | Subscription code

    try:
        # Generate Update Subscription Link
        api_response = api_instance.subscription_manage_link(code)
        print("The response of SubscriptionApi->subscription_manage_link:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionApi->subscription_manage_link: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Subscription code | 

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
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

