# alexasomba_paystack.PlanApi

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**plan_create**](PlanApi.md#plan_create) | **POST** /plan | Create Plan
[**plan_fetch**](PlanApi.md#plan_fetch) | **GET** /plan/{code} | Fetch Plan
[**plan_list**](PlanApi.md#plan_list) | **GET** /plan | List Plans
[**plan_update**](PlanApi.md#plan_update) | **PUT** /plan/{code} | Update Plan


# **plan_create**
> PlanCreateResponse plan_create(plan_create=plan_create)

Create Plan

Create a plan for recurring payments

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.plan_create import PlanCreate
from alexasomba_paystack.models.plan_create_response import PlanCreateResponse
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
    api_instance = alexasomba_paystack.PlanApi(api_client)
    plan_create = alexasomba_paystack.PlanCreate() # PlanCreate |  (optional)

    try:
        # Create Plan
        api_response = api_instance.plan_create(plan_create=plan_create)
        print("The response of PlanApi->plan_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlanApi->plan_create: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **plan_create** | [**PlanCreate**](PlanCreate.md)|  | [optional] 

### Return type

[**PlanCreateResponse**](PlanCreateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Plan Create response |  -  |
**401** | Unauthorized operation |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **plan_fetch**
> PlanFetchResponse plan_fetch(code)

Fetch Plan

Get the details of a payment plan

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.plan_fetch_response import PlanFetchResponse
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
    api_instance = alexasomba_paystack.PlanApi(api_client)
    code = 'PLN_gx2wn530m0i3w3m' # str | The plan code you want to fetch

    try:
        # Fetch Plan
        api_response = api_instance.plan_fetch(code)
        print("The response of PlanApi->plan_fetch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlanApi->plan_fetch: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| The plan code you want to fetch | 

### Return type

[**PlanFetchResponse**](PlanFetchResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Plan Fetch response |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **plan_list**
> PlanListResponse plan_list(per_page=per_page, page=page, interval=interval, amount=amount, var_from=var_from, to=to)

List Plans

List all recurring payment plans

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.plan_list_response import PlanListResponse
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
    api_instance = alexasomba_paystack.PlanApi(api_client)
    per_page = 56 # int | Number of records to fetch per page (optional)
    page = 56 # int | The section to retrieve (optional)
    interval = 'interval_example' # str | Specify interval of the plan (optional)
    amount = 56 # int | The amount on the plans to retrieve (optional)
    var_from = '2013-10-20T19:20:30+01:00' # datetime | The start date (optional)
    to = '2013-10-20T19:20:30+01:00' # datetime | The end date (optional)

    try:
        # List Plans
        api_response = api_instance.plan_list(per_page=per_page, page=page, interval=interval, amount=amount, var_from=var_from, to=to)
        print("The response of PlanApi->plan_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlanApi->plan_list: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **per_page** | **int**| Number of records to fetch per page | [optional] 
 **page** | **int**| The section to retrieve | [optional] 
 **interval** | **str**| Specify interval of the plan | [optional] 
 **amount** | **int**| The amount on the plans to retrieve | [optional] 
 **var_from** | **datetime**| The start date | [optional] 
 **to** | **datetime**| The end date | [optional] 

### Return type

[**PlanListResponse**](PlanListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Plan List response |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **plan_update**
> PlanUpdateResponse plan_update(code, plan_update=plan_update)

Update Plan

Update a plan details on your integration

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.plan_update import PlanUpdate
from alexasomba_paystack.models.plan_update_response import PlanUpdateResponse
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
    api_instance = alexasomba_paystack.PlanApi(api_client)
    code = 'PLN_gx2wn530m0i3w3m' # str | The plan code you want to fetch
    plan_update = alexasomba_paystack.PlanUpdate() # PlanUpdate |  (optional)

    try:
        # Update Plan
        api_response = api_instance.plan_update(code, plan_update=plan_update)
        print("The response of PlanApi->plan_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlanApi->plan_update: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| The plan code you want to fetch | 
 **plan_update** | [**PlanUpdate**](PlanUpdate.md)|  | [optional] 

### Return type

[**PlanUpdateResponse**](PlanUpdateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Plan Update response |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

