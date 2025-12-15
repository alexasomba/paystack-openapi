# alexasomba_paystack.SettlementApi

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**settlements_fetch**](SettlementApi.md#settlements_fetch) | **GET** /settlement | List Settlements
[**settlements_transaction**](SettlementApi.md#settlements_transaction) | **GET** /settlement/{id}/transactions | Fetch Settlement Transactions


# **settlements_fetch**
> Response settlements_fetch(per_page=per_page, page=page)

List Settlements

List settlements made to your settlement accounts

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
    api_instance = alexasomba_paystack.SettlementApi(api_client)
    per_page = 50 # int | The number of records to fetch per request (optional)
    page = 2 # int | The offset to retrieve data from (optional)

    try:
        # List Settlements
        api_response = api_instance.settlements_fetch(per_page=per_page, page=page)
        print("The response of SettlementApi->settlements_fetch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SettlementApi->settlements_fetch: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **per_page** | **int**| The number of records to fetch per request | [optional] 
 **page** | **int**| The offset to retrieve data from | [optional] 

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

# **settlements_transaction**
> Response settlements_transaction(id)

Fetch Settlement Transactions

Get the transactions that make up a particular settlement

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
    api_instance = alexasomba_paystack.SettlementApi(api_client)
    id = 8610870 # int | The settlement ID in which you want to fetch its transactions

    try:
        # Fetch Settlement Transactions
        api_response = api_instance.settlements_transaction(id)
        print("The response of SettlementApi->settlements_transaction:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SettlementApi->settlements_transaction: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The settlement ID in which you want to fetch its transactions | 

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

