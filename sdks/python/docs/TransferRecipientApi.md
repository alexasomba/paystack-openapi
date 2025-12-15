# alexasomba_paystack.TransferRecipientApi

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**transferrecipient_bulk**](TransferRecipientApi.md#transferrecipient_bulk) | **POST** /transferrecipient/bulk | Bulk Create Transfer Recipient
[**transferrecipient_create**](TransferRecipientApi.md#transferrecipient_create) | **POST** /transferrecipient | Create Transfer Recipient
[**transferrecipient_delete**](TransferRecipientApi.md#transferrecipient_delete) | **DELETE** /transferrecipient/{code} | Delete Transfer Recipient
[**transferrecipient_fetch**](TransferRecipientApi.md#transferrecipient_fetch) | **GET** /transferrecipient/{code} | Fetch Transfer recipient
[**transferrecipient_list**](TransferRecipientApi.md#transferrecipient_list) | **GET** /transferrecipient | List Transfer Recipients
[**transferrecipient_update**](TransferRecipientApi.md#transferrecipient_update) | **PUT** /transferrecipient/{code} | Update Transfer Recipient


# **transferrecipient_bulk**
> TransferRecipientBulkCreateResponse transferrecipient_bulk(transfer_recipient_bulk=transfer_recipient_bulk)

Bulk Create Transfer Recipient

Create multiple transfer recipients in batches. A duplicate account number will lead to the retrieval of the existing record. 

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.transfer_recipient_bulk import TransferRecipientBulk
from alexasomba_paystack.models.transfer_recipient_bulk_create_response import TransferRecipientBulkCreateResponse
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
    api_instance = alexasomba_paystack.TransferRecipientApi(api_client)
    transfer_recipient_bulk = alexasomba_paystack.TransferRecipientBulk() # TransferRecipientBulk |  (optional)

    try:
        # Bulk Create Transfer Recipient
        api_response = api_instance.transferrecipient_bulk(transfer_recipient_bulk=transfer_recipient_bulk)
        print("The response of TransferRecipientApi->transferrecipient_bulk:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransferRecipientApi->transferrecipient_bulk: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transfer_recipient_bulk** | [**TransferRecipientBulk**](TransferRecipientBulk.md)|  | [optional] 

### Return type

[**TransferRecipientBulkCreateResponse**](TransferRecipientBulkCreateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Sucessful response |  -  |
**401** | Unauthorized operation |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transferrecipient_create**
> TransferRecipientCreateResponse transferrecipient_create(transfer_recipient_create=transfer_recipient_create)

Create Transfer Recipient

Creates a new recipient. A duplicate account number will lead to the retrieval of the existing record.

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.transfer_recipient_create import TransferRecipientCreate
from alexasomba_paystack.models.transfer_recipient_create_response import TransferRecipientCreateResponse
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
    api_instance = alexasomba_paystack.TransferRecipientApi(api_client)
    transfer_recipient_create = alexasomba_paystack.TransferRecipientCreate() # TransferRecipientCreate |  (optional)

    try:
        # Create Transfer Recipient
        api_response = api_instance.transferrecipient_create(transfer_recipient_create=transfer_recipient_create)
        print("The response of TransferRecipientApi->transferrecipient_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransferRecipientApi->transferrecipient_create: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transfer_recipient_create** | [**TransferRecipientCreate**](TransferRecipientCreate.md)|  | [optional] 

### Return type

[**TransferRecipientCreateResponse**](TransferRecipientCreateResponse.md)

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

# **transferrecipient_delete**
> TransferRecipientDeleteResponse transferrecipient_delete(code)

Delete Transfer Recipient

Delete a transfer recipient (sets the transfer recipient to inactive)

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.transfer_recipient_delete_response import TransferRecipientDeleteResponse
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
    api_instance = alexasomba_paystack.TransferRecipientApi(api_client)
    code = 'RCP_5ap8rcimmcj8lbi' # str | Transfer recipient code

    try:
        # Delete Transfer Recipient
        api_response = api_instance.transferrecipient_delete(code)
        print("The response of TransferRecipientApi->transferrecipient_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransferRecipientApi->transferrecipient_delete: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Transfer recipient code | 

### Return type

[**TransferRecipientDeleteResponse**](TransferRecipientDeleteResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transferrecipient_fetch**
> TransferRecipientFetchResponse transferrecipient_fetch(code)

Fetch Transfer recipient

Fetch the details of a transfer recipient

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.transfer_recipient_fetch_response import TransferRecipientFetchResponse
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
    api_instance = alexasomba_paystack.TransferRecipientApi(api_client)
    code = 'RCP_5ap8rcimmcj8lbi' # str | Transfer recipient code

    try:
        # Fetch Transfer recipient
        api_response = api_instance.transferrecipient_fetch(code)
        print("The response of TransferRecipientApi->transferrecipient_fetch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransferRecipientApi->transferrecipient_fetch: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Transfer recipient code | 

### Return type

[**TransferRecipientFetchResponse**](TransferRecipientFetchResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transferrecipient_list**
> TransferRecipientListResponse transferrecipient_list(use_cursor=use_cursor, next=next, previous=previous, per_page=per_page, page=page)

List Transfer Recipients

List transfer recipients available on your integration

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.transfer_recipient_list_response import TransferRecipientListResponse
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
    api_instance = alexasomba_paystack.TransferRecipientApi(api_client)
    use_cursor = True # bool | A flag to indicate if cursor based pagination should be used (optional)
    next = 'next_example' # str | An alphanumeric value returned for every cursor based retrieval, used to retrieve the next set of data  (optional)
    previous = 'previous_example' # str | An alphanumeric value returned for every cursor based retrieval, used to retrieve the previous set of data  (optional)
    per_page = 56 # int | The number of records to fetch per request (optional)
    page = 56 # int | The offset to retrieve data from (optional)

    try:
        # List Transfer Recipients
        api_response = api_instance.transferrecipient_list(use_cursor=use_cursor, next=next, previous=previous, per_page=per_page, page=page)
        print("The response of TransferRecipientApi->transferrecipient_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransferRecipientApi->transferrecipient_list: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **use_cursor** | **bool**| A flag to indicate if cursor based pagination should be used | [optional] 
 **next** | **str**| An alphanumeric value returned for every cursor based retrieval, used to retrieve the next set of data  | [optional] 
 **previous** | **str**| An alphanumeric value returned for every cursor based retrieval, used to retrieve the previous set of data  | [optional] 
 **per_page** | **int**| The number of records to fetch per request | [optional] 
 **page** | **int**| The offset to retrieve data from | [optional] 

### Return type

[**TransferRecipientListResponse**](TransferRecipientListResponse.md)

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

# **transferrecipient_update**
> TransferRecipientUpdateResponse transferrecipient_update(code, transfer_recipient_update=transfer_recipient_update)

Update Transfer Recipient

Update the details of a transfer recipient

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.transfer_recipient_update import TransferRecipientUpdate
from alexasomba_paystack.models.transfer_recipient_update_response import TransferRecipientUpdateResponse
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
    api_instance = alexasomba_paystack.TransferRecipientApi(api_client)
    code = 'RCP_5ap8rcimmcj8lbi' # str | Transfer recipient code
    transfer_recipient_update = alexasomba_paystack.TransferRecipientUpdate() # TransferRecipientUpdate |  (optional)

    try:
        # Update Transfer Recipient
        api_response = api_instance.transferrecipient_update(code, transfer_recipient_update=transfer_recipient_update)
        print("The response of TransferRecipientApi->transferrecipient_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransferRecipientApi->transferrecipient_update: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Transfer recipient code | 
 **transfer_recipient_update** | [**TransferRecipientUpdate**](TransferRecipientUpdate.md)|  | [optional] 

### Return type

[**TransferRecipientUpdateResponse**](TransferRecipientUpdateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

