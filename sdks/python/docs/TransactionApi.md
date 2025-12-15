# alexasomba_paystack.TransactionApi

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**transaction_charge_authorization**](TransactionApi.md#transaction_charge_authorization) | **POST** /transaction/charge_authorization | Charge Authorization
[**transaction_check_authorization**](TransactionApi.md#transaction_check_authorization) | **POST** /transaction/check_authorization | Check Authorization
[**transaction_event**](TransactionApi.md#transaction_event) | **GET** /transaction/{id}/event | Get Transaction Event
[**transaction_export**](TransactionApi.md#transaction_export) | **GET** /transaction/export | Export Transactions
[**transaction_fetch**](TransactionApi.md#transaction_fetch) | **GET** /transaction/{id} | Fetch Transaction
[**transaction_initialize**](TransactionApi.md#transaction_initialize) | **POST** /transaction/initialize | Initialize Transaction
[**transaction_list**](TransactionApi.md#transaction_list) | **GET** /transaction | List Transactions
[**transaction_partial_debit**](TransactionApi.md#transaction_partial_debit) | **POST** /transaction/partial_debit | Partial Debit
[**transaction_session**](TransactionApi.md#transaction_session) | **GET** /transaction/{id}/session | Get Transaction Session
[**transaction_timeline**](TransactionApi.md#transaction_timeline) | **GET** /transaction/timeline/{id} | Fetch Transaction Timeline
[**transaction_totals**](TransactionApi.md#transaction_totals) | **GET** /transaction/totals | Transaction Totals
[**transaction_verify**](TransactionApi.md#transaction_verify) | **GET** /transaction/verify/{reference} | Verify Transaction


# **transaction_charge_authorization**
> ChargeAuthorizationResponse transaction_charge_authorization(transaction_charge_authorization=transaction_charge_authorization)

Charge Authorization

Charge all authorizations marked as reusable with this endpoint whenever you need to receive payments

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.charge_authorization_response import ChargeAuthorizationResponse
from alexasomba_paystack.models.transaction_charge_authorization import TransactionChargeAuthorization
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
    api_instance = alexasomba_paystack.TransactionApi(api_client)
    transaction_charge_authorization = alexasomba_paystack.TransactionChargeAuthorization() # TransactionChargeAuthorization |  (optional)

    try:
        # Charge Authorization
        api_response = api_instance.transaction_charge_authorization(transaction_charge_authorization=transaction_charge_authorization)
        print("The response of TransactionApi->transaction_charge_authorization:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionApi->transaction_charge_authorization: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction_charge_authorization** | [**TransactionChargeAuthorization**](TransactionChargeAuthorization.md)|  | [optional] 

### Return type

[**ChargeAuthorizationResponse**](ChargeAuthorizationResponse.md)

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

# **transaction_check_authorization**
> Response transaction_check_authorization(email, amount, authorization_code=authorization_code, currency=currency)

Check Authorization

Check if an authorization code can be used for a charge.

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
    api_instance = alexasomba_paystack.TransactionApi(api_client)
    email = 'email_example' # str | Customer's email address
    amount = 56 # int | Amount should be in kobo if currency is NGN, pesewas if currency is GHS, and cents if currency is ZAR
    authorization_code = 'authorization_code_example' # str | Valid authorization code to charge (optional)
    currency = 'currency_example' # str | The transaction currency (optional)

    try:
        # Check Authorization
        api_response = api_instance.transaction_check_authorization(email, amount, authorization_code=authorization_code, currency=currency)
        print("The response of TransactionApi->transaction_check_authorization:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionApi->transaction_check_authorization: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **str**| Customer&#39;s email address | 
 **amount** | **int**| Amount should be in kobo if currency is NGN, pesewas if currency is GHS, and cents if currency is ZAR | 
 **authorization_code** | **str**| Valid authorization code to charge | [optional] 
 **currency** | **str**| The transaction currency | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful |  -  |
**401** | Unauthorized operation |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transaction_event**
> Response transaction_event(id)

Get Transaction Event

Fetch the event for a specific transaction.

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
    api_instance = alexasomba_paystack.TransactionApi(api_client)
    id = 56 # int | The ID of the transaction

    try:
        # Get Transaction Event
        api_response = api_instance.transaction_event(id)
        print("The response of TransactionApi->transaction_event:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionApi->transaction_event: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the transaction | 

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

# **transaction_export**
> TransactionExportResponse transaction_export(var_from=var_from, to=to, status=status, customer=customer, subaccount_code=subaccount_code, settlement=settlement)

Export Transactions

Download transactions that occurred on your integration for a specific timeframe

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.transaction_export_response import TransactionExportResponse
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
    api_instance = alexasomba_paystack.TransactionApi(api_client)
    var_from = '2024-06-01T00:00:01Z' # datetime | The start date (optional)
    to = '2024-06-30T13:36:54Z' # datetime | The end date (optional)
    status = 'success' # str | Filter by the status of the transaction (optional)
    customer = 123172416 # float | Filter by customer ID (optional)
    subaccount_code = 'ACCT_dskvlw3y3dMukmt' # str | Filter by subaccount code (optional)
    settlement = 5687910 # int | Filter by the settlement ID (optional)

    try:
        # Export Transactions
        api_response = api_instance.transaction_export(var_from=var_from, to=to, status=status, customer=customer, subaccount_code=subaccount_code, settlement=settlement)
        print("The response of TransactionApi->transaction_export:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionApi->transaction_export: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_from** | **datetime**| The start date | [optional] 
 **to** | **datetime**| The end date | [optional] 
 **status** | **str**| Filter by the status of the transaction | [optional] 
 **customer** | **float**| Filter by customer ID | [optional] 
 **subaccount_code** | **str**| Filter by subaccount code | [optional] 
 **settlement** | **int**| Filter by the settlement ID | [optional] 

### Return type

[**TransactionExportResponse**](TransactionExportResponse.md)

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

# **transaction_fetch**
> TransactionId transaction_fetch(id)

Fetch Transaction

Fetch a transaction to get its details

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.transaction_id import TransactionId
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
    api_instance = alexasomba_paystack.TransactionApi(api_client)
    id = 4099260516 # int | The ID of the transaction to fetch

    try:
        # Fetch Transaction
        api_response = api_instance.transaction_fetch(id)
        print("The response of TransactionApi->transaction_fetch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionApi->transaction_fetch: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the transaction to fetch | 

### Return type

[**TransactionId**](TransactionId.md)

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

# **transaction_initialize**
> TransactionInitializeResponse transaction_initialize(transaction_initialize=transaction_initialize)

Initialize Transaction

Create a new transaction

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.transaction_initialize import TransactionInitialize
from alexasomba_paystack.models.transaction_initialize_response import TransactionInitializeResponse
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
    api_instance = alexasomba_paystack.TransactionApi(api_client)
    transaction_initialize = alexasomba_paystack.TransactionInitialize() # TransactionInitialize |  (optional)

    try:
        # Initialize Transaction
        api_response = api_instance.transaction_initialize(transaction_initialize=transaction_initialize)
        print("The response of TransactionApi->transaction_initialize:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionApi->transaction_initialize: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction_initialize** | [**TransactionInitialize**](TransactionInitialize.md)|  | [optional] 

### Return type

[**TransactionInitializeResponse**](TransactionInitializeResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Responses from the Transaction Initialize endpoint |  -  |
**401** | Unauthorized operation |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transaction_list**
> TransactionListResponse transaction_list(use_cursor=use_cursor, next=next, previous=previous, per_page=per_page, page=page, var_from=var_from, to=to, status=status, source=source, terminal_id=terminal_id, virtual_account_number=virtual_account_number, customer_code=customer_code, amount=amount, settlement=settlement, channel=channel, subaccount_code=subaccount_code, split_code=split_code)

List Transactions

List transactions that has occurred on your integration

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.transaction_list_response import TransactionListResponse
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
    api_instance = alexasomba_paystack.TransactionApi(api_client)
    use_cursor = true # bool | A flag to indicate if cursor based pagination should be used (optional)
    next = 'next_example' # str | An alphanumeric value returned for every cursor based retrieval, used to retrieve the next set of data  (optional)
    previous = 'previous_example' # str | An alphanumeric value returned for every cursor based retrieval, used to retrieve the previous set of data  (optional)
    per_page = 56 # int | The number of records to fetch per request (optional)
    page = 56 # int | The offset to retrieve data from (optional)
    var_from = '2013-10-20T19:20:30+01:00' # datetime | The start date (optional)
    to = '2013-10-20T19:20:30+01:00' # datetime | The end date (optional)
    status = 'status_example' # str | Filter transaction by status (optional)
    source = 'source_example' # str | The origin of the payment (optional)
    terminal_id = 'terminal_id_example' # str | Filter transactions by a terminal ID (optional)
    virtual_account_number = 'virtual_account_number_example' # str | Filter transactions by a virtual account number (optional)
    customer_code = 'customer_code_example' # str | Filter transactions by a customer code (optional)
    amount = 56 # int | Filter transactions by a specific amount (optional)
    settlement = 56 # int | The settlement ID to filter for settled transactions (optional)
    channel = 'channel_example' # str | The payment method the customer used to complete the transaction (optional)
    subaccount_code = 'subaccount_code_example' # str | Filter transaction by subaccount code (optional)
    split_code = 'split_code_example' # str | Filter transaction by split code (optional)

    try:
        # List Transactions
        api_response = api_instance.transaction_list(use_cursor=use_cursor, next=next, previous=previous, per_page=per_page, page=page, var_from=var_from, to=to, status=status, source=source, terminal_id=terminal_id, virtual_account_number=virtual_account_number, customer_code=customer_code, amount=amount, settlement=settlement, channel=channel, subaccount_code=subaccount_code, split_code=split_code)
        print("The response of TransactionApi->transaction_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionApi->transaction_list: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **use_cursor** | **bool**| A flag to indicate if cursor based pagination should be used | [optional] 
 **next** | **str**| An alphanumeric value returned for every cursor based retrieval, used to retrieve the next set of data  | [optional] 
 **previous** | **str**| An alphanumeric value returned for every cursor based retrieval, used to retrieve the previous set of data  | [optional] 
 **per_page** | **int**| The number of records to fetch per request | [optional] 
 **page** | **int**| The offset to retrieve data from | [optional] 
 **var_from** | **datetime**| The start date | [optional] 
 **to** | **datetime**| The end date | [optional] 
 **status** | **str**| Filter transaction by status | [optional] 
 **source** | **str**| The origin of the payment | [optional] 
 **terminal_id** | **str**| Filter transactions by a terminal ID | [optional] 
 **virtual_account_number** | **str**| Filter transactions by a virtual account number | [optional] 
 **customer_code** | **str**| Filter transactions by a customer code | [optional] 
 **amount** | **int**| Filter transactions by a specific amount | [optional] 
 **settlement** | **int**| The settlement ID to filter for settled transactions | [optional] 
 **channel** | **str**| The payment method the customer used to complete the transaction | [optional] 
 **subaccount_code** | **str**| Filter transaction by subaccount code | [optional] 
 **split_code** | **str**| Filter transaction by split code | [optional] 

### Return type

[**TransactionListResponse**](TransactionListResponse.md)

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

# **transaction_partial_debit**
> TransactionPartialDebitResponse transaction_partial_debit(transaction_partial_debit=transaction_partial_debit)

Partial Debit

Retrieve part of a payment from a customer

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.transaction_partial_debit import TransactionPartialDebit
from alexasomba_paystack.models.transaction_partial_debit_response import TransactionPartialDebitResponse
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
    api_instance = alexasomba_paystack.TransactionApi(api_client)
    transaction_partial_debit = alexasomba_paystack.TransactionPartialDebit() # TransactionPartialDebit |  (optional)

    try:
        # Partial Debit
        api_response = api_instance.transaction_partial_debit(transaction_partial_debit=transaction_partial_debit)
        print("The response of TransactionApi->transaction_partial_debit:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionApi->transaction_partial_debit: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction_partial_debit** | [**TransactionPartialDebit**](TransactionPartialDebit.md)|  | [optional] 

### Return type

[**TransactionPartialDebitResponse**](TransactionPartialDebitResponse.md)

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

# **transaction_session**
> Response transaction_session(id)

Get Transaction Session

Fetch the session for a specific transaction.

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
    api_instance = alexasomba_paystack.TransactionApi(api_client)
    id = 56 # int | The ID of the transaction

    try:
        # Get Transaction Session
        api_response = api_instance.transaction_session(id)
        print("The response of TransactionApi->transaction_session:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionApi->transaction_session: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the transaction | 

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

# **transaction_timeline**
> TransactionTimelineId transaction_timeline(id)

Fetch Transaction Timeline

Fetch the steps taken from the initiation to the completion of a transaction

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.transaction_timeline_id import TransactionTimelineId
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
    api_instance = alexasomba_paystack.TransactionApi(api_client)
    id = 3936799950 # int | The ID of the transaction to fetch

    try:
        # Fetch Transaction Timeline
        api_response = api_instance.transaction_timeline(id)
        print("The response of TransactionApi->transaction_timeline:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionApi->transaction_timeline: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the transaction to fetch | 

### Return type

[**TransactionTimelineId**](TransactionTimelineId.md)

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

# **transaction_totals**
> TransactionTotalsResponse transaction_totals(var_from=var_from, to=to)

Transaction Totals

Get the total amount of all transactions

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.transaction_totals_response import TransactionTotalsResponse
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
    api_instance = alexasomba_paystack.TransactionApi(api_client)
    var_from = '2024-06-01T00:00:01Z' # datetime | The start date (optional)
    to = '2024-06-30T13:36:54Z' # datetime | The end date (optional)

    try:
        # Transaction Totals
        api_response = api_instance.transaction_totals(var_from=var_from, to=to)
        print("The response of TransactionApi->transaction_totals:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionApi->transaction_totals: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_from** | **datetime**| The start date | [optional] 
 **to** | **datetime**| The end date | [optional] 

### Return type

[**TransactionTotalsResponse**](TransactionTotalsResponse.md)

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

# **transaction_verify**
> TransactionVerifyReference transaction_verify(reference)

Verify Transaction

Verify a previously initiated transaction using it's reference

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.transaction_verify_reference import TransactionVerifyReference
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
    api_instance = alexasomba_paystack.TransactionApi(api_client)
    reference = 're4lyvq3s3' # str | The transaction reference to verify

    try:
        # Verify Transaction
        api_response = api_instance.transaction_verify(reference)
        print("The response of TransactionApi->transaction_verify:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionApi->transaction_verify: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reference** | **str**| The transaction reference to verify | 

### Return type

[**TransactionVerifyReference**](TransactionVerifyReference.md)

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

