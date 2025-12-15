# alexasomba_paystack.SubaccountApi

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subaccount_create**](SubaccountApi.md#subaccount_create) | **POST** /subaccount | Create Subaccount
[**subaccount_fetch**](SubaccountApi.md#subaccount_fetch) | **GET** /subaccount/{code} | Fetch Subaccount
[**subaccount_list**](SubaccountApi.md#subaccount_list) | **GET** /subaccount | List Subaccounts
[**subaccount_update**](SubaccountApi.md#subaccount_update) | **PUT** /subaccount/{code} | Update Subaccount


# **subaccount_create**
> SubaccountCreateResponse subaccount_create(subaccount_create=subaccount_create)

Create Subaccount

Create a subacount for a partner

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.subaccount_create import SubaccountCreate
from alexasomba_paystack.models.subaccount_create_response import SubaccountCreateResponse
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
    api_instance = alexasomba_paystack.SubaccountApi(api_client)
    subaccount_create = alexasomba_paystack.SubaccountCreate() # SubaccountCreate |  (optional)

    try:
        # Create Subaccount
        api_response = api_instance.subaccount_create(subaccount_create=subaccount_create)
        print("The response of SubaccountApi->subaccount_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubaccountApi->subaccount_create: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subaccount_create** | [**SubaccountCreate**](SubaccountCreate.md)|  | [optional] 

### Return type

[**SubaccountCreateResponse**](SubaccountCreateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |
**401** | Unauthorized operation |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subaccount_fetch**
> SubaccountFetchResponse subaccount_fetch(code)

Fetch Subaccount

Get details of a subaccount on your integration

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.subaccount_fetch_response import SubaccountFetchResponse
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
    api_instance = alexasomba_paystack.SubaccountApi(api_client)
    code = 'ACCT_6uujpqtzmnufzkw' # str | The subaccount code you want to fetch

    try:
        # Fetch Subaccount
        api_response = api_instance.subaccount_fetch(code)
        print("The response of SubaccountApi->subaccount_fetch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubaccountApi->subaccount_fetch: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| The subaccount code you want to fetch | 

### Return type

[**SubaccountFetchResponse**](SubaccountFetchResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subaccount_list**
> SubaccountListResponse subaccount_list(per_page=per_page, page=page, active=active)

List Subaccounts

List subaccounts available on your integration

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.subaccount_list_response import SubaccountListResponse
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
    api_instance = alexasomba_paystack.SubaccountApi(api_client)
    per_page = 50 # int | Number of records to fetch per request (optional) (default to 50)
    page = 1 # int | The offset to retrieve data from (optional) (default to 1)
    active = True # bool | Filter by the state of the subaccounts (optional)

    try:
        # List Subaccounts
        api_response = api_instance.subaccount_list(per_page=per_page, page=page, active=active)
        print("The response of SubaccountApi->subaccount_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubaccountApi->subaccount_list: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **per_page** | **int**| Number of records to fetch per request | [optional] [default to 50]
 **page** | **int**| The offset to retrieve data from | [optional] [default to 1]
 **active** | **bool**| Filter by the state of the subaccounts | [optional] 

### Return type

[**SubaccountListResponse**](SubaccountListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subaccount_update**
> SubaccountUpdateResponse subaccount_update(code, subaccount_update=subaccount_update)

Update Subaccount

Update a subaccount details on your integration

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.subaccount_update import SubaccountUpdate
from alexasomba_paystack.models.subaccount_update_response import SubaccountUpdateResponse
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
    api_instance = alexasomba_paystack.SubaccountApi(api_client)
    code = 'ACCT_6uujpqtzmnufzkw' # str | The subaccount code you want to fetch
    subaccount_update = alexasomba_paystack.SubaccountUpdate() # SubaccountUpdate |  (optional)

    try:
        # Update Subaccount
        api_response = api_instance.subaccount_update(code, subaccount_update=subaccount_update)
        print("The response of SubaccountApi->subaccount_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubaccountApi->subaccount_update: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| The subaccount code you want to fetch | 
 **subaccount_update** | [**SubaccountUpdate**](SubaccountUpdate.md)|  | [optional] 

### Return type

[**SubaccountUpdateResponse**](SubaccountUpdateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

