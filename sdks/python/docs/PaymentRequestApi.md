# alexasomba_paystack.PaymentRequestApi

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**payment_request_archive**](PaymentRequestApi.md#payment_request_archive) | **POST** /paymentrequest/archive/{id} | Archive Payment Request
[**payment_request_create**](PaymentRequestApi.md#payment_request_create) | **POST** /paymentrequest | Create Payment Request
[**payment_request_fetch**](PaymentRequestApi.md#payment_request_fetch) | **GET** /paymentrequest/{id} | Fetch Payment Request
[**payment_request_finalize**](PaymentRequestApi.md#payment_request_finalize) | **POST** /paymentrequest/finalize/{id} | Finalize Payment Request
[**payment_request_list**](PaymentRequestApi.md#payment_request_list) | **GET** /paymentrequest | List Payment Request
[**payment_request_notify**](PaymentRequestApi.md#payment_request_notify) | **POST** /paymentrequest/notify/{id} | Send Notification
[**payment_request_totals**](PaymentRequestApi.md#payment_request_totals) | **GET** /paymentrequest/totals | Payment Request Total
[**payment_request_update**](PaymentRequestApi.md#payment_request_update) | **PUT** /paymentrequest/{id} | Update Payment Request
[**payment_request_verify**](PaymentRequestApi.md#payment_request_verify) | **GET** /paymentrequest/verify/{id} | Verify Payment Request


# **payment_request_archive**
> PaymentRequestArchiveResponse payment_request_archive(id)

Archive Payment Request

Archive a payment request to clean up your records. An archived payment request cannot be verified and will not  be returned when listing all previously created payment requests. 

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.payment_request_archive_response import PaymentRequestArchiveResponse
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
    api_instance = alexasomba_paystack.PaymentRequestApi(api_client)
    id = 18823736 # int | The unique identifier of a previously created payment request

    try:
        # Archive Payment Request
        api_response = api_instance.payment_request_archive(id)
        print("The response of PaymentRequestApi->payment_request_archive:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentRequestApi->payment_request_archive: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The unique identifier of a previously created payment request | 

### Return type

[**PaymentRequestArchiveResponse**](PaymentRequestArchiveResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Payment Request Archive response |  -  |
**401** | Unauthorized operation |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **payment_request_create**
> PaymentRequestCreateResponse payment_request_create(payment_request_create=payment_request_create)

Create Payment Request

Create a new payment request by issuing an invoice to a customer

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.payment_request_create import PaymentRequestCreate
from alexasomba_paystack.models.payment_request_create_response import PaymentRequestCreateResponse
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
    api_instance = alexasomba_paystack.PaymentRequestApi(api_client)
    payment_request_create = alexasomba_paystack.PaymentRequestCreate() # PaymentRequestCreate |  (optional)

    try:
        # Create Payment Request
        api_response = api_instance.payment_request_create(payment_request_create=payment_request_create)
        print("The response of PaymentRequestApi->payment_request_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentRequestApi->payment_request_create: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payment_request_create** | [**PaymentRequestCreate**](PaymentRequestCreate.md)|  | [optional] 

### Return type

[**PaymentRequestCreateResponse**](PaymentRequestCreateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Payment Request Create response |  -  |
**401** | Unauthorized operation |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **payment_request_fetch**
> PaymentRequestListResponse payment_request_fetch(id)

Fetch Payment Request

Fetch a previously created payment request

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.payment_request_list_response import PaymentRequestListResponse
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
    api_instance = alexasomba_paystack.PaymentRequestApi(api_client)
    id = 18823736 # int | The unique identifier of a previously created payment request

    try:
        # Fetch Payment Request
        api_response = api_instance.payment_request_fetch(id)
        print("The response of PaymentRequestApi->payment_request_fetch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentRequestApi->payment_request_fetch: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The unique identifier of a previously created payment request | 

### Return type

[**PaymentRequestListResponse**](PaymentRequestListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Payment Request List response |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **payment_request_finalize**
> PaymentRequestFinalizeResponse payment_request_finalize(id)

Finalize Payment Request

Finalise the creation of a draft payment request for a customer

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.payment_request_finalize_response import PaymentRequestFinalizeResponse
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
    api_instance = alexasomba_paystack.PaymentRequestApi(api_client)
    id = 18823736 # int | The unique identifier of a draft payment request

    try:
        # Finalize Payment Request
        api_response = api_instance.payment_request_finalize(id)
        print("The response of PaymentRequestApi->payment_request_finalize:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentRequestApi->payment_request_finalize: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The unique identifier of a draft payment request | 

### Return type

[**PaymentRequestFinalizeResponse**](PaymentRequestFinalizeResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Payment Request Finalize response |  -  |
**401** | Unauthorized operation |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **payment_request_list**
> PaymentRequestListResponse payment_request_list(per_page=per_page, page=page, customer=customer, status=status, currency=currency, var_from=var_from, to=to)

List Payment Request

List all previously created payment requests to your customers

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.payment_request_list_response import PaymentRequestListResponse
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
    api_instance = alexasomba_paystack.PaymentRequestApi(api_client)
    per_page = 56 # int | Number of records to fetch per page (optional)
    page = 56 # int | The section to retrieve (optional)
    customer = 'customer_example' # str | Customer ID (optional)
    status = 'success' # str | Invoice status to filter (optional)
    currency = 'currency_example' # str | If your integration supports more than one currency, choose the one to filter (optional)
    var_from = '2013-10-20T19:20:30+01:00' # datetime | The start date (optional)
    to = '2013-10-20T19:20:30+01:00' # datetime | The end date (optional)

    try:
        # List Payment Request
        api_response = api_instance.payment_request_list(per_page=per_page, page=page, customer=customer, status=status, currency=currency, var_from=var_from, to=to)
        print("The response of PaymentRequestApi->payment_request_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentRequestApi->payment_request_list: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **per_page** | **int**| Number of records to fetch per page | [optional] 
 **page** | **int**| The section to retrieve | [optional] 
 **customer** | **str**| Customer ID | [optional] 
 **status** | **str**| Invoice status to filter | [optional] 
 **currency** | **str**| If your integration supports more than one currency, choose the one to filter | [optional] 
 **var_from** | **datetime**| The start date | [optional] 
 **to** | **datetime**| The end date | [optional] 

### Return type

[**PaymentRequestListResponse**](PaymentRequestListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Payment Request List response |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **payment_request_notify**
> PaymentRequestSendNotificationResponse payment_request_notify(id)

Send Notification

Trigger an email reminder to a customer for a previously created payment request

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.payment_request_send_notification_response import PaymentRequestSendNotificationResponse
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
    api_instance = alexasomba_paystack.PaymentRequestApi(api_client)
    id = 18823736 # int | The unique identifier of a previously created payment request

    try:
        # Send Notification
        api_response = api_instance.payment_request_notify(id)
        print("The response of PaymentRequestApi->payment_request_notify:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentRequestApi->payment_request_notify: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The unique identifier of a previously created payment request | 

### Return type

[**PaymentRequestSendNotificationResponse**](PaymentRequestSendNotificationResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Payment Request Send Notification response |  -  |
**401** | Unauthorized operation |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **payment_request_totals**
> PaymentRequestTotalResponse payment_request_totals()

Payment Request Total

Get the metric of all pending and successful payment requests

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.payment_request_total_response import PaymentRequestTotalResponse
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
    api_instance = alexasomba_paystack.PaymentRequestApi(api_client)

    try:
        # Payment Request Total
        api_response = api_instance.payment_request_totals()
        print("The response of PaymentRequestApi->payment_request_totals:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentRequestApi->payment_request_totals: %s\n" % e)
```



### Parameters
This endpoint does not need any parameter.

### Return type

[**PaymentRequestTotalResponse**](PaymentRequestTotalResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Payment Request Total response |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **payment_request_update**
> PaymentRequestUpdateResponse payment_request_update(id, body=body)

Update Payment Request

Update a previously created payment request

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.payment_request_update_response import PaymentRequestUpdateResponse
from alexasomba_paystack.models.paymentrequest_id import PaymentrequestId
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
    api_instance = alexasomba_paystack.PaymentRequestApi(api_client)
    id = 18823736 # int | The unique identifier of a previously created payment request
    body = alexasomba_paystack.PaymentrequestId() # PaymentrequestId |  (optional)

    try:
        # Update Payment Request
        api_response = api_instance.payment_request_update(id, body=body)
        print("The response of PaymentRequestApi->payment_request_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentRequestApi->payment_request_update: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The unique identifier of a previously created payment request | 
 **body** | **PaymentrequestId**|  | [optional] 

### Return type

[**PaymentRequestUpdateResponse**](PaymentRequestUpdateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Payment Request Update response |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **payment_request_verify**
> PaymentRequestVerifyResponse payment_request_verify(id)

Verify Payment Request

Verify the status of a previously created payment request

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.payment_request_verify_response import PaymentRequestVerifyResponse
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
    api_instance = alexasomba_paystack.PaymentRequestApi(api_client)
    id = 18823736 # int | The unique identifier of a previously created payment request

    try:
        # Verify Payment Request
        api_response = api_instance.payment_request_verify(id)
        print("The response of PaymentRequestApi->payment_request_verify:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentRequestApi->payment_request_verify: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The unique identifier of a previously created payment request | 

### Return type

[**PaymentRequestVerifyResponse**](PaymentRequestVerifyResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Payment Request Verify response |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

