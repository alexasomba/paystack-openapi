# alexasomba_paystack.BalanceApi

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**balance_fetch**](BalanceApi.md#balance_fetch) | **GET** /balance | Fetch Balance
[**balance_ledger**](BalanceApi.md#balance_ledger) | **GET** /balance/ledger | Balance Ledger


# **balance_fetch**
> BalanceCheckResponse balance_fetch()

Fetch Balance

Fetch the available balance on your integration

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.balance_check_response import BalanceCheckResponse
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
    api_instance = alexasomba_paystack.BalanceApi(api_client)

    try:
        # Fetch Balance
        api_response = api_instance.balance_fetch()
        print("The response of BalanceApi->balance_fetch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BalanceApi->balance_fetch: %s\n" % e)
```



### Parameters
This endpoint does not need any parameter.

### Return type

[**BalanceCheckResponse**](BalanceCheckResponse.md)

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

# **balance_ledger**
> BalanceFetchLedgerResponse balance_ledger(per_page=per_page, page=page, var_from=var_from, to=to)

Balance Ledger

Fetch all pay-ins and pay-outs that occured on your integration

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.balance_fetch_ledger_response import BalanceFetchLedgerResponse
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
    api_instance = alexasomba_paystack.BalanceApi(api_client)
    per_page = 56 # int | Number of records to fetch per page (optional)
    page = 56 # int | The section to retrieve (optional)
    var_from = '2013-10-20T19:20:30+01:00' # datetime | The start date (optional)
    to = '2013-10-20T19:20:30+01:00' # datetime | The end date (optional)

    try:
        # Balance Ledger
        api_response = api_instance.balance_ledger(per_page=per_page, page=page, var_from=var_from, to=to)
        print("The response of BalanceApi->balance_ledger:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BalanceApi->balance_ledger: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **per_page** | **int**| Number of records to fetch per page | [optional] 
 **page** | **int**| The section to retrieve | [optional] 
 **var_from** | **datetime**| The start date | [optional] 
 **to** | **datetime**| The end date | [optional] 

### Return type

[**BalanceFetchLedgerResponse**](BalanceFetchLedgerResponse.md)

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

