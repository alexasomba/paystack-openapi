# alexasomba_paystack.DisputeApi

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dispute_download**](DisputeApi.md#dispute_download) | **GET** /dispute/export | Export Disputes
[**dispute_evidence**](DisputeApi.md#dispute_evidence) | **POST** /dispute/{id}/evidence | Add Evidence
[**dispute_fetch**](DisputeApi.md#dispute_fetch) | **GET** /dispute/{id} | Fetch Dispute
[**dispute_list**](DisputeApi.md#dispute_list) | **GET** /dispute | List Disputes
[**dispute_resolve**](DisputeApi.md#dispute_resolve) | **PUT** /dispute/{id}/resolve | Resolve Dispute
[**dispute_transaction**](DisputeApi.md#dispute_transaction) | **GET** /dispute/transaction/{id} | List Transaction Disputes
[**dispute_update**](DisputeApi.md#dispute_update) | **PUT** /dispute/{id} | Update Dispute
[**dispute_upload_url**](DisputeApi.md#dispute_upload_url) | **GET** /dispute/{id}/upload_url | Fetch Upload URL


# **dispute_download**
> DisputeExportResponse dispute_download(per_page=per_page, page=page, status=status, var_from=var_from, to=to)

Export Disputes

Export the disputes available on your integration

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.dispute_export_response import DisputeExportResponse
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
    api_instance = alexasomba_paystack.DisputeApi(api_client)
    per_page = 56 # int | Number of records to fetch per page (optional)
    page = 56 # int | The section to retrieve (optional)
    status = 'awaiting-merchant-feedback' # str |  (optional)
    var_from = '2013-10-20T19:20:30+01:00' # datetime | The start date (optional)
    to = '2013-10-20T19:20:30+01:00' # datetime | The end date (optional)

    try:
        # Export Disputes
        api_response = api_instance.dispute_download(per_page=per_page, page=page, status=status, var_from=var_from, to=to)
        print("The response of DisputeApi->dispute_download:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisputeApi->dispute_download: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **per_page** | **int**| Number of records to fetch per page | [optional] 
 **page** | **int**| The section to retrieve | [optional] 
 **status** | **str**|  | [optional] 
 **var_from** | **datetime**| The start date | [optional] 
 **to** | **datetime**| The end date | [optional] 

### Return type

[**DisputeExportResponse**](DisputeExportResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Dispute Export response |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dispute_evidence**
> DisputeAddEvidenceResponse dispute_evidence(id, body=body)

Add Evidence

Provide evidence for a dispute

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.dispute_add_evidence_response import DisputeAddEvidenceResponse
from alexasomba_paystack.models.dispute_id_evidence import DisputeIdEvidence
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
    api_instance = alexasomba_paystack.DisputeApi(api_client)
    id = 4734583785 # int | The unique identifier of the dispute
    body = alexasomba_paystack.DisputeIdEvidence() # DisputeIdEvidence |  (optional)

    try:
        # Add Evidence
        api_response = api_instance.dispute_evidence(id, body=body)
        print("The response of DisputeApi->dispute_evidence:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisputeApi->dispute_evidence: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The unique identifier of the dispute | 
 **body** | **DisputeIdEvidence**|  | [optional] 

### Return type

[**DisputeAddEvidenceResponse**](DisputeAddEvidenceResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Dispute Add Evidence response |  -  |
**401** | Unauthorized operation |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dispute_fetch**
> DisputeFetchResponse dispute_fetch(id)

Fetch Dispute

Fetch a transaction dispute

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.dispute_fetch_response import DisputeFetchResponse
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
    api_instance = alexasomba_paystack.DisputeApi(api_client)
    id = 1801929 # int | The unique identifier of the dispute

    try:
        # Fetch Dispute
        api_response = api_instance.dispute_fetch(id)
        print("The response of DisputeApi->dispute_fetch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisputeApi->dispute_fetch: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The unique identifier of the dispute | 

### Return type

[**DisputeFetchResponse**](DisputeFetchResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Dispute Fetch response |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dispute_list**
> DisputeListResponse dispute_list(per_page=per_page, page=page, status=status, transaction=transaction, var_from=var_from, to=to)

List Disputes

List transaction disputes filed by customers

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.dispute_list_response import DisputeListResponse
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
    api_instance = alexasomba_paystack.DisputeApi(api_client)
    per_page = 56 # int | Number of records to fetch per page (optional)
    page = 56 # int | The section to retrieve (optional)
    status = 'awaiting-merchant-feedback' # str | Dispute status (optional)
    transaction = 'transaction_example' # str | Transaction ID (optional)
    var_from = '2013-10-20T19:20:30+01:00' # datetime | The start date (optional)
    to = '2013-10-20T19:20:30+01:00' # datetime | The end date (optional)

    try:
        # List Disputes
        api_response = api_instance.dispute_list(per_page=per_page, page=page, status=status, transaction=transaction, var_from=var_from, to=to)
        print("The response of DisputeApi->dispute_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisputeApi->dispute_list: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **per_page** | **int**| Number of records to fetch per page | [optional] 
 **page** | **int**| The section to retrieve | [optional] 
 **status** | **str**| Dispute status | [optional] 
 **transaction** | **str**| Transaction ID | [optional] 
 **var_from** | **datetime**| The start date | [optional] 
 **to** | **datetime**| The end date | [optional] 

### Return type

[**DisputeListResponse**](DisputeListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Dispute List response |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dispute_resolve**
> DisputeResolveResponse dispute_resolve(id, body=body)

Resolve Dispute

Resolve a transaction dispute

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.dispute_id_resolve import DisputeIdResolve
from alexasomba_paystack.models.dispute_resolve_response import DisputeResolveResponse
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
    api_instance = alexasomba_paystack.DisputeApi(api_client)
    id = 4734583785 # int | The unique identifier of the dispute
    body = alexasomba_paystack.DisputeIdResolve() # DisputeIdResolve |  (optional)

    try:
        # Resolve Dispute
        api_response = api_instance.dispute_resolve(id, body=body)
        print("The response of DisputeApi->dispute_resolve:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisputeApi->dispute_resolve: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The unique identifier of the dispute | 
 **body** | **DisputeIdResolve**|  | [optional] 

### Return type

[**DisputeResolveResponse**](DisputeResolveResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Dispute Resolve response |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dispute_transaction**
> DisputeListTransactionResponse dispute_transaction(id)

List Transaction Disputes

List all disputes filed for a transaction

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.dispute_list_transaction_response import DisputeListTransactionResponse
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
    api_instance = alexasomba_paystack.DisputeApi(api_client)
    id = 4734583785 # int | The unique identifier of the transaction

    try:
        # List Transaction Disputes
        api_response = api_instance.dispute_transaction(id)
        print("The response of DisputeApi->dispute_transaction:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisputeApi->dispute_transaction: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The unique identifier of the transaction | 

### Return type

[**DisputeListTransactionResponse**](DisputeListTransactionResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Dispute List Transaction response |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dispute_update**
> DisputeUpdateResponse dispute_update(id, body=body)

Update Dispute

Update a transaction dispute

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.dispute_id import DisputeId
from alexasomba_paystack.models.dispute_update_response import DisputeUpdateResponse
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
    api_instance = alexasomba_paystack.DisputeApi(api_client)
    id = 1801929 # int | The unique identifier of the dispute
    body = alexasomba_paystack.DisputeId() # DisputeId |  (optional)

    try:
        # Update Dispute
        api_response = api_instance.dispute_update(id, body=body)
        print("The response of DisputeApi->dispute_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisputeApi->dispute_update: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The unique identifier of the dispute | 
 **body** | **DisputeId**|  | [optional] 

### Return type

[**DisputeUpdateResponse**](DisputeUpdateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Dispute Update response |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dispute_upload_url**
> DisputeUploadURLResponse dispute_upload_url(id)

Fetch Upload URL

Get the URL to upload a dispute evidence

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.dispute_upload_url_response import DisputeUploadURLResponse
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
    api_instance = alexasomba_paystack.DisputeApi(api_client)
    id = 4734583785 # int | The unique identifier of the dispute

    try:
        # Fetch Upload URL
        api_response = api_instance.dispute_upload_url(id)
        print("The response of DisputeApi->dispute_upload_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisputeApi->dispute_upload_url: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The unique identifier of the dispute | 

### Return type

[**DisputeUploadURLResponse**](DisputeUploadURLResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Dispute Upload URL response |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

