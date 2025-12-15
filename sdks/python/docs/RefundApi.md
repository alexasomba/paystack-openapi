# alexasomba_paystack.RefundApi

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**refund_create**](RefundApi.md#refund_create) | **POST** /refund | Create Refund
[**refund_fetch**](RefundApi.md#refund_fetch) | **GET** /refund/{id} | Fetch Refund
[**refund_list**](RefundApi.md#refund_list) | **GET** /refund | List Refunds
[**refund_retry**](RefundApi.md#refund_retry) | **POST** /refund/retry_with_customer_details/{id} | Retry Refund


# **refund_create**
> RefundCreateResponse refund_create(refund_create=refund_create)

Create Refund

Initiate a refund for a previously completed transaction

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.refund_create import RefundCreate
from alexasomba_paystack.models.refund_create_response import RefundCreateResponse
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
    api_instance = alexasomba_paystack.RefundApi(api_client)
    refund_create = alexasomba_paystack.RefundCreate() # RefundCreate |  (optional)

    try:
        # Create Refund
        api_response = api_instance.refund_create(refund_create=refund_create)
        print("The response of RefundApi->refund_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RefundApi->refund_create: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refund_create** | [**RefundCreate**](RefundCreate.md)|  | [optional] 

### Return type

[**RefundCreateResponse**](RefundCreateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Refund Create response |  -  |
**401** | Unauthorized operation |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **refund_fetch**
> RefundFetchResponse refund_fetch(id)

Fetch Refund

Get a previously created refund

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.refund_fetch_response import RefundFetchResponse
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
    api_instance = alexasomba_paystack.RefundApi(api_client)
    id = 15581137 # int | The identifier of the refund

    try:
        # Fetch Refund
        api_response = api_instance.refund_fetch(id)
        print("The response of RefundApi->refund_fetch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RefundApi->refund_fetch: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The identifier of the refund | 

### Return type

[**RefundFetchResponse**](RefundFetchResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Refund Fetch response |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **refund_list**
> RefundListResponse refund_list(per_page=per_page, page=page, var_from=var_from, to=to)

List Refunds

List previously created refunds

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.refund_list_response import RefundListResponse
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
    api_instance = alexasomba_paystack.RefundApi(api_client)
    per_page = 50 # int | Number of records to fetch per page (optional) (default to 50)
    page = 56 # int | The section to retrieve (optional)
    var_from = '2013-10-20T19:20:30+01:00' # datetime | The start date (optional)
    to = '2013-10-20T19:20:30+01:00' # datetime | The end date (optional)

    try:
        # List Refunds
        api_response = api_instance.refund_list(per_page=per_page, page=page, var_from=var_from, to=to)
        print("The response of RefundApi->refund_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RefundApi->refund_list: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **per_page** | **int**| Number of records to fetch per page | [optional] [default to 50]
 **page** | **int**| The section to retrieve | [optional] 
 **var_from** | **datetime**| The start date | [optional] 
 **to** | **datetime**| The end date | [optional] 

### Return type

[**RefundListResponse**](RefundListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Refund List response |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **refund_retry**
> RefundRetryResponse refund_retry(id, refund_retry=refund_retry)

Retry Refund

Retry a refund with a `needs-attention` status by providing the bank account details of a customer.

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.refund_retry import RefundRetry
from alexasomba_paystack.models.refund_retry_response import RefundRetryResponse
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
    api_instance = alexasomba_paystack.RefundApi(api_client)
    id = 15581137 # int | The identifier of the refund
    refund_retry = alexasomba_paystack.RefundRetry() # RefundRetry |  (optional)

    try:
        # Retry Refund
        api_response = api_instance.refund_retry(id, refund_retry=refund_retry)
        print("The response of RefundApi->refund_retry:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RefundApi->refund_retry: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The identifier of the refund | 
 **refund_retry** | [**RefundRetry**](RefundRetry.md)|  | [optional] 

### Return type

[**RefundRetryResponse**](RefundRetryResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Refund Create response |  -  |
**422** | Unauthorized operation |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

