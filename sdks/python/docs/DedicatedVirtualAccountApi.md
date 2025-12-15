# alexasomba_paystack.DedicatedVirtualAccountApi

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dedicated_account_add_split**](DedicatedVirtualAccountApi.md#dedicated_account_add_split) | **POST** /dedicated_account/split | Split Dedicated Account Transaction
[**dedicated_account_assign**](DedicatedVirtualAccountApi.md#dedicated_account_assign) | **POST** /dedicated_account/assign | Assign Dedicated Account
[**dedicated_account_available_providers**](DedicatedVirtualAccountApi.md#dedicated_account_available_providers) | **GET** /dedicated_account/available_providers | Fetch Bank Providers
[**dedicated_account_create**](DedicatedVirtualAccountApi.md#dedicated_account_create) | **POST** /dedicated_account | Create Dedicated Account
[**dedicated_account_deactivate**](DedicatedVirtualAccountApi.md#dedicated_account_deactivate) | **DELETE** /dedicated_account/{id} | Deactivate Dedicated Account
[**dedicated_account_fetch**](DedicatedVirtualAccountApi.md#dedicated_account_fetch) | **GET** /dedicated_account/{id} | Fetch Dedicated Account
[**dedicated_account_list**](DedicatedVirtualAccountApi.md#dedicated_account_list) | **GET** /dedicated_account | List Dedicated Accounts
[**dedicated_account_remove_split**](DedicatedVirtualAccountApi.md#dedicated_account_remove_split) | **DELETE** /dedicated_account/split | Remove Split from Dedicated Account
[**dedicated_account_requery**](DedicatedVirtualAccountApi.md#dedicated_account_requery) | **GET** /dedicated_account/requery | Requery Dedicated Account


# **dedicated_account_add_split**
> Response dedicated_account_add_split(dedicated_virtual_account_split=dedicated_virtual_account_split)

Split Dedicated Account Transaction

Split a dedicated virtual account transaction with one or more accounts

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.dedicated_virtual_account_split import DedicatedVirtualAccountSplit
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
    api_instance = alexasomba_paystack.DedicatedVirtualAccountApi(api_client)
    dedicated_virtual_account_split = alexasomba_paystack.DedicatedVirtualAccountSplit() # DedicatedVirtualAccountSplit |  (optional)

    try:
        # Split Dedicated Account Transaction
        api_response = api_instance.dedicated_account_add_split(dedicated_virtual_account_split=dedicated_virtual_account_split)
        print("The response of DedicatedVirtualAccountApi->dedicated_account_add_split:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DedicatedVirtualAccountApi->dedicated_account_add_split: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dedicated_virtual_account_split** | [**DedicatedVirtualAccountSplit**](DedicatedVirtualAccountSplit.md)|  | [optional] 

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

# **dedicated_account_assign**
> Response dedicated_account_assign(dedicated_virtual_account_assign=dedicated_virtual_account_assign)

Assign Dedicated Account

With this endpoint, you can create a customer, validate the customer, and assign a DVA to the customer.

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.dedicated_virtual_account_assign import DedicatedVirtualAccountAssign
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
    api_instance = alexasomba_paystack.DedicatedVirtualAccountApi(api_client)
    dedicated_virtual_account_assign = alexasomba_paystack.DedicatedVirtualAccountAssign() # DedicatedVirtualAccountAssign |  (optional)

    try:
        # Assign Dedicated Account
        api_response = api_instance.dedicated_account_assign(dedicated_virtual_account_assign=dedicated_virtual_account_assign)
        print("The response of DedicatedVirtualAccountApi->dedicated_account_assign:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DedicatedVirtualAccountApi->dedicated_account_assign: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dedicated_virtual_account_assign** | [**DedicatedVirtualAccountAssign**](DedicatedVirtualAccountAssign.md)|  | [optional] 

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

# **dedicated_account_available_providers**
> Response dedicated_account_available_providers()

Fetch Bank Providers

Get available bank providers for a dedicated virtual account

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
    api_instance = alexasomba_paystack.DedicatedVirtualAccountApi(api_client)

    try:
        # Fetch Bank Providers
        api_response = api_instance.dedicated_account_available_providers()
        print("The response of DedicatedVirtualAccountApi->dedicated_account_available_providers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DedicatedVirtualAccountApi->dedicated_account_available_providers: %s\n" % e)
```



### Parameters
This endpoint does not need any parameter.

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

# **dedicated_account_create**
> DedicatedNubanCreateResponse dedicated_account_create(dedicated_virtual_account_create=dedicated_virtual_account_create)

Create Dedicated Account

Create a dedicated virtual account for an existing customer

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.dedicated_nuban_create_response import DedicatedNubanCreateResponse
from alexasomba_paystack.models.dedicated_virtual_account_create import DedicatedVirtualAccountCreate
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
    api_instance = alexasomba_paystack.DedicatedVirtualAccountApi(api_client)
    dedicated_virtual_account_create = alexasomba_paystack.DedicatedVirtualAccountCreate() # DedicatedVirtualAccountCreate |  (optional)

    try:
        # Create Dedicated Account
        api_response = api_instance.dedicated_account_create(dedicated_virtual_account_create=dedicated_virtual_account_create)
        print("The response of DedicatedVirtualAccountApi->dedicated_account_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DedicatedVirtualAccountApi->dedicated_account_create: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dedicated_virtual_account_create** | [**DedicatedVirtualAccountCreate**](DedicatedVirtualAccountCreate.md)|  | [optional] 

### Return type

[**DedicatedNubanCreateResponse**](DedicatedNubanCreateResponse.md)

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

# **dedicated_account_deactivate**
> DedicatedNubanDeactivateResponse dedicated_account_deactivate(id)

Deactivate Dedicated Account

Deactivate a dedicated virtual account on your integration.

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.dedicated_nuban_deactivate_response import DedicatedNubanDeactivateResponse
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
    api_instance = alexasomba_paystack.DedicatedVirtualAccountApi(api_client)
    id = 'id_example' # str | ID of dedicated virtual account

    try:
        # Deactivate Dedicated Account
        api_response = api_instance.dedicated_account_deactivate(id)
        print("The response of DedicatedVirtualAccountApi->dedicated_account_deactivate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DedicatedVirtualAccountApi->dedicated_account_deactivate: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID of dedicated virtual account | 

### Return type

[**DedicatedNubanDeactivateResponse**](DedicatedNubanDeactivateResponse.md)

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

# **dedicated_account_fetch**
> DedicatedNubanFetchResponse dedicated_account_fetch(id)

Fetch Dedicated Account

Get details of a dedicated virtual account on your integration.

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.dedicated_nuban_fetch_response import DedicatedNubanFetchResponse
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
    api_instance = alexasomba_paystack.DedicatedVirtualAccountApi(api_client)
    id = 'id_example' # str | ID of dedicated virtual account

    try:
        # Fetch Dedicated Account
        api_response = api_instance.dedicated_account_fetch(id)
        print("The response of DedicatedVirtualAccountApi->dedicated_account_fetch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DedicatedVirtualAccountApi->dedicated_account_fetch: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID of dedicated virtual account | 

### Return type

[**DedicatedNubanFetchResponse**](DedicatedNubanFetchResponse.md)

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

# **dedicated_account_list**
> DedicatedNubanListResponse dedicated_account_list(active=active, customer=customer, currency=currency, provider_slug=provider_slug, bank_id=bank_id, per_page=per_page, page=page)

List Dedicated Accounts

List dedicated virtual accounts available on your integration.

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.dedicated_nuban_list_response import DedicatedNubanListResponse
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
    api_instance = alexasomba_paystack.DedicatedVirtualAccountApi(api_client)
    active = true # bool | Status of the dedicated virtual account (optional)
    customer = 297346561 # int | The customer's ID (optional)
    currency = 'currency_example' # str | The currency of the dedicated virtual account (optional)
    provider_slug = 'titan-paystack' # str | The bank's slug in lowercase, without spaces (optional)
    bank_id = '035' # str | The bank's ID (optional)
    per_page = 50 # int | The number of records to fetch per request (optional) (default to 50)
    page = 1 # int | The offset to retrieve data from (optional) (default to 1)

    try:
        # List Dedicated Accounts
        api_response = api_instance.dedicated_account_list(active=active, customer=customer, currency=currency, provider_slug=provider_slug, bank_id=bank_id, per_page=per_page, page=page)
        print("The response of DedicatedVirtualAccountApi->dedicated_account_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DedicatedVirtualAccountApi->dedicated_account_list: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | **bool**| Status of the dedicated virtual account | [optional] 
 **customer** | **int**| The customer&#39;s ID | [optional] 
 **currency** | **str**| The currency of the dedicated virtual account | [optional] 
 **provider_slug** | **str**| The bank&#39;s slug in lowercase, without spaces | [optional] 
 **bank_id** | **str**| The bank&#39;s ID | [optional] 
 **per_page** | **int**| The number of records to fetch per request | [optional] [default to 50]
 **page** | **int**| The offset to retrieve data from | [optional] [default to 1]

### Return type

[**DedicatedNubanListResponse**](DedicatedNubanListResponse.md)

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

# **dedicated_account_remove_split**
> Response dedicated_account_remove_split(dedicated_virtual_account_remove_split=dedicated_virtual_account_remove_split)

Remove Split from Dedicated Account

If you've previously set up split payment for transactions on a dedicated virtual account, you can remove it with this endpoint

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.dedicated_virtual_account_remove_split import DedicatedVirtualAccountRemoveSplit
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
    api_instance = alexasomba_paystack.DedicatedVirtualAccountApi(api_client)
    dedicated_virtual_account_remove_split = alexasomba_paystack.DedicatedVirtualAccountRemoveSplit() # DedicatedVirtualAccountRemoveSplit |  (optional)

    try:
        # Remove Split from Dedicated Account
        api_response = api_instance.dedicated_account_remove_split(dedicated_virtual_account_remove_split=dedicated_virtual_account_remove_split)
        print("The response of DedicatedVirtualAccountApi->dedicated_account_remove_split:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DedicatedVirtualAccountApi->dedicated_account_remove_split: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dedicated_virtual_account_remove_split** | [**DedicatedVirtualAccountRemoveSplit**](DedicatedVirtualAccountRemoveSplit.md)|  | [optional] 

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

# **dedicated_account_requery**
> Response dedicated_account_requery(account_number=account_number, provider_slug=provider_slug, var_date=var_date)

Requery Dedicated Account

Requery Dedicated Virtual Account for new transactions

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
    api_instance = alexasomba_paystack.DedicatedVirtualAccountApi(api_client)
    account_number = '0033322211' # str | Virtual account number to requery (optional)
    provider_slug = 'titan-paystack' # str | The bank's slug in lowercase, without spaces. (optional)
    var_date = '2013-10-20T19:20:30+01:00' # datetime | The day the transfer was made (optional)

    try:
        # Requery Dedicated Account
        api_response = api_instance.dedicated_account_requery(account_number=account_number, provider_slug=provider_slug, var_date=var_date)
        print("The response of DedicatedVirtualAccountApi->dedicated_account_requery:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DedicatedVirtualAccountApi->dedicated_account_requery: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_number** | **str**| Virtual account number to requery | [optional] 
 **provider_slug** | **str**| The bank&#39;s slug in lowercase, without spaces. | [optional] 
 **var_date** | **datetime**| The day the transfer was made | [optional] 

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

