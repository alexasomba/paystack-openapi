# alexasomba_paystack.BulkChargeApi

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulk_charge_charges**](BulkChargeApi.md#bulk_charge_charges) | **GET** /bulkcharge/{code}/charges | List Charges in a Batch
[**bulk_charge_fetch**](BulkChargeApi.md#bulk_charge_fetch) | **GET** /bulkcharge/{code} | Fetch Bulk Charge Batch
[**bulk_charge_initiate**](BulkChargeApi.md#bulk_charge_initiate) | **POST** /bulkcharge | Initiate Bulk Charge
[**bulk_charge_list**](BulkChargeApi.md#bulk_charge_list) | **GET** /bulkcharge | List Bulk Charge Batches
[**bulk_charge_pause**](BulkChargeApi.md#bulk_charge_pause) | **GET** /bulkcharge/pause/{code} | Pause Bulk Charge Batch
[**bulk_charge_resume**](BulkChargeApi.md#bulk_charge_resume) | **GET** /bulkcharge/resume/{code} | Resume Bulk Charge Batch


# **bulk_charge_charges**
> BulkChargeFetchBulkBatchChargesResponse bulk_charge_charges(code, per_page=per_page, page=page, status=status)

List Charges in a Batch

This endpoint retrieves the charges associated with a specified batch code

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.bulk_charge_fetch_bulk_batch_charges_response import BulkChargeFetchBulkBatchChargesResponse
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
    api_instance = alexasomba_paystack.BulkChargeApi(api_client)
    code = 'BCH_180tl7oq7cayggh' # str | An code for the batch whose charges you want to retrieve
    per_page = 56 # int | Number of records to fetch per page (optional)
    page = 56 # int | The offset to retrieve data from (optional)
    status = 'status_example' # str | Filter by the status of the charges (optional)

    try:
        # List Charges in a Batch
        api_response = api_instance.bulk_charge_charges(code, per_page=per_page, page=page, status=status)
        print("The response of BulkChargeApi->bulk_charge_charges:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BulkChargeApi->bulk_charge_charges: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| An code for the batch whose charges you want to retrieve | 
 **per_page** | **int**| Number of records to fetch per page | [optional] 
 **page** | **int**| The offset to retrieve data from | [optional] 
 **status** | **str**| Filter by the status of the charges | [optional] 

### Return type

[**BulkChargeFetchBulkBatchChargesResponse**](BulkChargeFetchBulkBatchChargesResponse.md)

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

# **bulk_charge_fetch**
> BulkChargeFetchResponse bulk_charge_fetch(code)

Fetch Bulk Charge Batch

This endpoint retrieves a specific batch code. It also returns useful information on its progress by  way of the `total_charges` and `pending_charges` attributes. 

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.bulk_charge_fetch_response import BulkChargeFetchResponse
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
    api_instance = alexasomba_paystack.BulkChargeApi(api_client)
    code = 'BCH_180tl7oq7cayggh' # str | The code for the charge whose batches you want to retrieve

    try:
        # Fetch Bulk Charge Batch
        api_response = api_instance.bulk_charge_fetch(code)
        print("The response of BulkChargeApi->bulk_charge_fetch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BulkChargeApi->bulk_charge_fetch: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| The code for the charge whose batches you want to retrieve | 

### Return type

[**BulkChargeFetchResponse**](BulkChargeFetchResponse.md)

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

# **bulk_charge_initiate**
> BulkChargeInitiateResponse bulk_charge_initiate(bulk_charge_initiate=bulk_charge_initiate)

Initiate Bulk Charge

Charge multiple customers in batches

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.bulk_charge_initiate import BulkChargeInitiate
from alexasomba_paystack.models.bulk_charge_initiate_response import BulkChargeInitiateResponse
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
    api_instance = alexasomba_paystack.BulkChargeApi(api_client)
    bulk_charge_initiate = [alexasomba_paystack.BulkChargeInitiate()] # List[BulkChargeInitiate] |  (optional)

    try:
        # Initiate Bulk Charge
        api_response = api_instance.bulk_charge_initiate(bulk_charge_initiate=bulk_charge_initiate)
        print("The response of BulkChargeApi->bulk_charge_initiate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BulkChargeApi->bulk_charge_initiate: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulk_charge_initiate** | [**List[BulkChargeInitiate]**](BulkChargeInitiate.md)|  | [optional] 

### Return type

[**BulkChargeInitiateResponse**](BulkChargeInitiateResponse.md)

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

# **bulk_charge_list**
> BulkChargeListResponse bulk_charge_list(per_page=per_page, page=page, status=status)

List Bulk Charge Batches

List all bulk charge batches.

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.bulk_charge_list_response import BulkChargeListResponse
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
    api_instance = alexasomba_paystack.BulkChargeApi(api_client)
    per_page = 56 # int | Number of records to fetch per page (optional)
    page = 56 # int | The offset to retrieve data from (optional)
    status = 'status_example' # str | Filter by the status of the charges (optional)

    try:
        # List Bulk Charge Batches
        api_response = api_instance.bulk_charge_list(per_page=per_page, page=page, status=status)
        print("The response of BulkChargeApi->bulk_charge_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BulkChargeApi->bulk_charge_list: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **per_page** | **int**| Number of records to fetch per page | [optional] 
 **page** | **int**| The offset to retrieve data from | [optional] 
 **status** | **str**| Filter by the status of the charges | [optional] 

### Return type

[**BulkChargeListResponse**](BulkChargeListResponse.md)

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

# **bulk_charge_pause**
> BulkChargePauseResponse bulk_charge_pause(code)

Pause Bulk Charge Batch

Pause the processing of a charge batch

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.bulk_charge_pause_response import BulkChargePauseResponse
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
    api_instance = alexasomba_paystack.BulkChargeApi(api_client)
    code = 'BCH_180tl7oq7cayggh' # str | The batch code for the bulk charge you want to pause

    try:
        # Pause Bulk Charge Batch
        api_response = api_instance.bulk_charge_pause(code)
        print("The response of BulkChargeApi->bulk_charge_pause:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BulkChargeApi->bulk_charge_pause: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| The batch code for the bulk charge you want to pause | 

### Return type

[**BulkChargePauseResponse**](BulkChargePauseResponse.md)

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

# **bulk_charge_resume**
> BulkChargeResumeResponse bulk_charge_resume(code)

Resume Bulk Charge Batch

Resume the processing of a previously paused charge batch

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.bulk_charge_resume_response import BulkChargeResumeResponse
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
    api_instance = alexasomba_paystack.BulkChargeApi(api_client)
    code = 'BCH_180tl7oq7cayggh' # str | The batch code for the bulk charge you want to pause

    try:
        # Resume Bulk Charge Batch
        api_response = api_instance.bulk_charge_resume(code)
        print("The response of BulkChargeApi->bulk_charge_resume:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BulkChargeApi->bulk_charge_resume: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| The batch code for the bulk charge you want to pause | 

### Return type

[**BulkChargeResumeResponse**](BulkChargeResumeResponse.md)

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

