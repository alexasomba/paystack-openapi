# alexasomba_paystack.SplitApi

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**split_add_subaccount**](SplitApi.md#split_add_subaccount) | **POST** /split/{id}/subaccount/add | Add Subaccount to Split
[**split_create**](SplitApi.md#split_create) | **POST** /split | Create Split
[**split_fetch**](SplitApi.md#split_fetch) | **GET** /split/{id} | Fetch Split
[**split_list**](SplitApi.md#split_list) | **GET** /split | List Splits
[**split_remove_subaccount**](SplitApi.md#split_remove_subaccount) | **POST** /split/{id}/subaccount/remove | Remove Subaccount from split
[**split_update**](SplitApi.md#split_update) | **PUT** /split/{id} | Update Split


# **split_add_subaccount**
> SplitAddUpdateSubaccountResponse split_add_subaccount(id, split_subaccounts=split_subaccounts)

Add Subaccount to Split

Add a subaccount to a split configuration, or update the share of an existing subaccount

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.split_add_update_subaccount_response import SplitAddUpdateSubaccountResponse
from alexasomba_paystack.models.split_subaccounts import SplitSubaccounts
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
    api_instance = alexasomba_paystack.SplitApi(api_client)
    id = 4896895 # int | The ID of the split configuration to fetch
    split_subaccounts = alexasomba_paystack.SplitSubaccounts() # SplitSubaccounts |  (optional)

    try:
        # Add Subaccount to Split
        api_response = api_instance.split_add_subaccount(id, split_subaccounts=split_subaccounts)
        print("The response of SplitApi->split_add_subaccount:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SplitApi->split_add_subaccount: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the split configuration to fetch | 
 **split_subaccounts** | [**SplitSubaccounts**](SplitSubaccounts.md)|  | [optional] 

### Return type

[**SplitAddUpdateSubaccountResponse**](SplitAddUpdateSubaccountResponse.md)

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
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **split_create**
> SplitCreateResponse split_create(split_create=split_create)

Create Split

Create a split configuration for transactions

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.split_create import SplitCreate
from alexasomba_paystack.models.split_create_response import SplitCreateResponse
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
    api_instance = alexasomba_paystack.SplitApi(api_client)
    split_create = alexasomba_paystack.SplitCreate() # SplitCreate |  (optional)

    try:
        # Create Split
        api_response = api_instance.split_create(split_create=split_create)
        print("The response of SplitApi->split_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SplitApi->split_create: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **split_create** | [**SplitCreate**](SplitCreate.md)|  | [optional] 

### Return type

[**SplitCreateResponse**](SplitCreateResponse.md)

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
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **split_fetch**
> SplitFetchResponse split_fetch(id)

Fetch Split

Get details of a split configuration for a transaction

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.split_fetch_response import SplitFetchResponse
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
    api_instance = alexasomba_paystack.SplitApi(api_client)
    id = 4896895 # int | The ID of the split configuration to fetch

    try:
        # Fetch Split
        api_response = api_instance.split_fetch(id)
        print("The response of SplitApi->split_fetch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SplitApi->split_fetch: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the split configuration to fetch | 

### Return type

[**SplitFetchResponse**](SplitFetchResponse.md)

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

# **split_list**
> SplitListResponse split_list(subaccount_code=subaccount_code, name=name, active=active, per_page=per_page, page=page, var_from=var_from, to=to)

List Splits

List the transaction splits available on your integration

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.split_list_response import SplitListResponse
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
    api_instance = alexasomba_paystack.SplitApi(api_client)
    subaccount_code = 'ACCT_dskvlw3y3dMukmt' # str | Filter by subaccount code (optional)
    name = 'name_example' # str | The name of the split (optional)
    active = True # bool | The status of the split (optional)
    per_page = 56 # int | The number of records to fetch per request (optional)
    page = 56 # int | The offset to retrieve data from (optional)
    var_from = '2013-10-20T19:20:30+01:00' # datetime | The start date (optional)
    to = '2013-10-20T19:20:30+01:00' # datetime | The end date (optional)

    try:
        # List Splits
        api_response = api_instance.split_list(subaccount_code=subaccount_code, name=name, active=active, per_page=per_page, page=page, var_from=var_from, to=to)
        print("The response of SplitApi->split_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SplitApi->split_list: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subaccount_code** | **str**| Filter by subaccount code | [optional] 
 **name** | **str**| The name of the split | [optional] 
 **active** | **bool**| The status of the split | [optional] 
 **per_page** | **int**| The number of records to fetch per request | [optional] 
 **page** | **int**| The offset to retrieve data from | [optional] 
 **var_from** | **datetime**| The start date | [optional] 
 **to** | **datetime**| The end date | [optional] 

### Return type

[**SplitListResponse**](SplitListResponse.md)

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

# **split_remove_subaccount**
> SplitRemoveSubaccountResponse split_remove_subaccount(id, split_subaccounts=split_subaccounts)

Remove Subaccount from split

Remove a subaccount from a split configuration

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.split_remove_subaccount_response import SplitRemoveSubaccountResponse
from alexasomba_paystack.models.split_subaccounts import SplitSubaccounts
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
    api_instance = alexasomba_paystack.SplitApi(api_client)
    id = 4896895 # int | The ID of the split configuration to fetch
    split_subaccounts = alexasomba_paystack.SplitSubaccounts() # SplitSubaccounts |  (optional)

    try:
        # Remove Subaccount from split
        api_response = api_instance.split_remove_subaccount(id, split_subaccounts=split_subaccounts)
        print("The response of SplitApi->split_remove_subaccount:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SplitApi->split_remove_subaccount: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the split configuration to fetch | 
 **split_subaccounts** | [**SplitSubaccounts**](SplitSubaccounts.md)|  | [optional] 

### Return type

[**SplitRemoveSubaccountResponse**](SplitRemoveSubaccountResponse.md)

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
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **split_update**
> SplitUpdateResponse split_update(id, split_update=split_update)

Update Split

Update a split configuration for transactions

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.split_update import SplitUpdate
from alexasomba_paystack.models.split_update_response import SplitUpdateResponse
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
    api_instance = alexasomba_paystack.SplitApi(api_client)
    id = 'id_example' # str | 
    split_update = alexasomba_paystack.SplitUpdate() # SplitUpdate |  (optional)

    try:
        # Update Split
        api_response = api_instance.split_update(id, split_update=split_update)
        print("The response of SplitApi->split_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SplitApi->split_update: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **split_update** | [**SplitUpdate**](SplitUpdate.md)|  | [optional] 

### Return type

[**SplitUpdateResponse**](SplitUpdateResponse.md)

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

