# alexasomba_paystack.TransferApi

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**transfer_bulk**](TransferApi.md#transfer_bulk) | **POST** /transfer/bulk | Initiate Bulk Transfer
[**transfer_disable_otp**](TransferApi.md#transfer_disable_otp) | **POST** /transfer/disable_otp | Disable OTP for Transfers
[**transfer_disable_otp_finalize**](TransferApi.md#transfer_disable_otp_finalize) | **POST** /transfer/disable_otp_finalize | Finalize Disabling OTP for Transfers
[**transfer_enable_otp**](TransferApi.md#transfer_enable_otp) | **POST** /transfer/enable_otp | Enable OTP requirement for Transfers
[**transfer_export_transfer**](TransferApi.md#transfer_export_transfer) | **GET** /transfer/export | Export Transfers
[**transfer_fetch**](TransferApi.md#transfer_fetch) | **GET** /transfer/{code} | Fetch Transfer
[**transfer_finalize**](TransferApi.md#transfer_finalize) | **POST** /transfer/finalize_transfer | Finalize Transfer
[**transfer_initiate**](TransferApi.md#transfer_initiate) | **POST** /transfer | Initiate Transfer
[**transfer_list**](TransferApi.md#transfer_list) | **GET** /transfer | List Transfers
[**transfer_resend_otp**](TransferApi.md#transfer_resend_otp) | **POST** /transfer/resend_otp | Resend OTP for Transfer
[**transfer_verify**](TransferApi.md#transfer_verify) | **GET** /transfer/verify/{reference} | Verify Transfer


# **transfer_bulk**
> TransferBulkResponse transfer_bulk(transfer_bulk=transfer_bulk)

Initiate Bulk Transfer

Batch multiple transfers in a single request.  You need to disable the Transfers OTP requirement to use this endpoint. 

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.transfer_bulk import TransferBulk
from alexasomba_paystack.models.transfer_bulk_response import TransferBulkResponse
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
    api_instance = alexasomba_paystack.TransferApi(api_client)
    transfer_bulk = alexasomba_paystack.TransferBulk() # TransferBulk |  (optional)

    try:
        # Initiate Bulk Transfer
        api_response = api_instance.transfer_bulk(transfer_bulk=transfer_bulk)
        print("The response of TransferApi->transfer_bulk:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransferApi->transfer_bulk: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transfer_bulk** | [**TransferBulk**](TransferBulk.md)|  | [optional] 

### Return type

[**TransferBulkResponse**](TransferBulkResponse.md)

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

# **transfer_disable_otp**
> TransferDisablesOtpResponse transfer_disable_otp()

Disable OTP for Transfers

This is used in the event that you want to be able to complete transfers programmatically without use of OTPs.  No arguments required. You will get an OTP to complete the request. 

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.transfer_disables_otp_response import TransferDisablesOtpResponse
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
    api_instance = alexasomba_paystack.TransferApi(api_client)

    try:
        # Disable OTP for Transfers
        api_response = api_instance.transfer_disable_otp()
        print("The response of TransferApi->transfer_disable_otp:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransferApi->transfer_disable_otp: %s\n" % e)
```



### Parameters
This endpoint does not need any parameter.

### Return type

[**TransferDisablesOtpResponse**](TransferDisablesOtpResponse.md)

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
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transfer_disable_otp_finalize**
> TransferFinalizeDisablesOtpResponse transfer_disable_otp_finalize(transfer_finalize_disable_otp=transfer_finalize_disable_otp)

Finalize Disabling OTP for Transfers

Finalize the request to disable OTP on your transfers

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.transfer_finalize_disable_otp import TransferFinalizeDisableOTP
from alexasomba_paystack.models.transfer_finalize_disables_otp_response import TransferFinalizeDisablesOtpResponse
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
    api_instance = alexasomba_paystack.TransferApi(api_client)
    transfer_finalize_disable_otp = alexasomba_paystack.TransferFinalizeDisableOTP() # TransferFinalizeDisableOTP |  (optional)

    try:
        # Finalize Disabling OTP for Transfers
        api_response = api_instance.transfer_disable_otp_finalize(transfer_finalize_disable_otp=transfer_finalize_disable_otp)
        print("The response of TransferApi->transfer_disable_otp_finalize:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransferApi->transfer_disable_otp_finalize: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transfer_finalize_disable_otp** | [**TransferFinalizeDisableOTP**](TransferFinalizeDisableOTP.md)|  | [optional] 

### Return type

[**TransferFinalizeDisablesOtpResponse**](TransferFinalizeDisablesOtpResponse.md)

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
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transfer_enable_otp**
> TransferEnablesOtpResponse transfer_enable_otp()

Enable OTP requirement for Transfers

In the event that a customer wants to stop being able to complete transfers programmatically, this endpoint helps turn OTP requirement back on.  No arguments required. 

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.transfer_enables_otp_response import TransferEnablesOtpResponse
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
    api_instance = alexasomba_paystack.TransferApi(api_client)

    try:
        # Enable OTP requirement for Transfers
        api_response = api_instance.transfer_enable_otp()
        print("The response of TransferApi->transfer_enable_otp:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransferApi->transfer_enable_otp: %s\n" % e)
```



### Parameters
This endpoint does not need any parameter.

### Return type

[**TransferEnablesOtpResponse**](TransferEnablesOtpResponse.md)

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
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transfer_export_transfer**
> Response transfer_export_transfer(recipient=recipient, status=status, var_from=var_from, to=to)

Export Transfers

Export a list of transfers carried out on your integration

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
    api_instance = alexasomba_paystack.TransferApi(api_client)
    recipient = 'recipient_example' # str | Export transfer by the recipient code (optional)
    status = 'pending' # str | Export transfer by status (optional) (default to 'pending')
    var_from = '2013-10-20T19:20:30+01:00' # datetime | The start date (optional)
    to = '2013-10-20T19:20:30+01:00' # datetime | The end date (optional)

    try:
        # Export Transfers
        api_response = api_instance.transfer_export_transfer(recipient=recipient, status=status, var_from=var_from, to=to)
        print("The response of TransferApi->transfer_export_transfer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransferApi->transfer_export_transfer: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipient** | **str**| Export transfer by the recipient code | [optional] 
 **status** | **str**| Export transfer by status | [optional] [default to &#39;pending&#39;]
 **var_from** | **datetime**| The start date | [optional] 
 **to** | **datetime**| The end date | [optional] 

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

# **transfer_fetch**
> TransferCode transfer_fetch(code)

Fetch Transfer

Get details of a transfer on your integration

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.transfer_code import TransferCode
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
    api_instance = alexasomba_paystack.TransferApi(api_client)
    code = 'TRF_1ptvuv321ahaa7q' # str | Transfer code

    try:
        # Fetch Transfer
        api_response = api_instance.transfer_fetch(code)
        print("The response of TransferApi->transfer_fetch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransferApi->transfer_fetch: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Transfer code | 

### Return type

[**TransferCode**](TransferCode.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Succesful operation |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transfer_finalize**
> Response transfer_finalize(transfer_finalize=transfer_finalize)

Finalize Transfer

Finalize an initiated transfer

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.response import Response
from alexasomba_paystack.models.transfer_finalize import TransferFinalize
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
    api_instance = alexasomba_paystack.TransferApi(api_client)
    transfer_finalize = alexasomba_paystack.TransferFinalize() # TransferFinalize |  (optional)

    try:
        # Finalize Transfer
        api_response = api_instance.transfer_finalize(transfer_finalize=transfer_finalize)
        print("The response of TransferApi->transfer_finalize:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransferApi->transfer_finalize: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transfer_finalize** | [**TransferFinalize**](TransferFinalize.md)|  | [optional] 

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

# **transfer_initiate**
> TransferCreateResponse transfer_initiate(transfer_initiate=transfer_initiate)

Initiate Transfer

Send money to your customers

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.transfer_create_response import TransferCreateResponse
from alexasomba_paystack.models.transfer_initiate import TransferInitiate
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
    api_instance = alexasomba_paystack.TransferApi(api_client)
    transfer_initiate = alexasomba_paystack.TransferInitiate() # TransferInitiate |  (optional)

    try:
        # Initiate Transfer
        api_response = api_instance.transfer_initiate(transfer_initiate=transfer_initiate)
        print("The response of TransferApi->transfer_initiate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransferApi->transfer_initiate: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transfer_initiate** | [**TransferInitiate**](TransferInitiate.md)|  | [optional] 

### Return type

[**TransferCreateResponse**](TransferCreateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**401** | Unauthorized operation |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transfer_list**
> TransferListResponse transfer_list(use_cursor=use_cursor, next=next, previous=previous, per_page=per_page, page=page, var_from=var_from, to=to, recipient=recipient, status=status)

List Transfers

List the transfers made on your integration

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.transfer_list_response import TransferListResponse
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
    api_instance = alexasomba_paystack.TransferApi(api_client)
    use_cursor = true # bool | A flag to indicate if cursor based pagination should be used (optional)
    next = 'next_example' # str | An alphanumeric value returned for every cursor based retrieval, used to retrieve the next set of data  (optional)
    previous = 'previous_example' # str | An alphanumeric value returned for every cursor based retrieval, used to retrieve the previous set of data  (optional)
    per_page = 56 # int | The number of records to fetch per request (optional)
    page = 56 # int | The offset to retrieve data from (optional)
    var_from = '2013-10-20T19:20:30+01:00' # datetime | The start date (optional)
    to = '2013-10-20T19:20:30+01:00' # datetime | The end date (optional)
    recipient = 'recipient_example' # str | Filter transfer by the recipient code (optional)
    status = 'pending' # str | Filter transfer by status (optional) (default to 'pending')

    try:
        # List Transfers
        api_response = api_instance.transfer_list(use_cursor=use_cursor, next=next, previous=previous, per_page=per_page, page=page, var_from=var_from, to=to, recipient=recipient, status=status)
        print("The response of TransferApi->transfer_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransferApi->transfer_list: %s\n" % e)
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
 **recipient** | **str**| Filter transfer by the recipient code | [optional] 
 **status** | **str**| Filter transfer by status | [optional] [default to &#39;pending&#39;]

### Return type

[**TransferListResponse**](TransferListResponse.md)

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

# **transfer_resend_otp**
> TransferResendsOtpResponse transfer_resend_otp(transfer_resend_otp=transfer_resend_otp)

Resend OTP for Transfer

Generates and send a new OTP to customer in the event they are having trouble receiving one.

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.transfer_resend_otp import TransferResendOTP
from alexasomba_paystack.models.transfer_resends_otp_response import TransferResendsOtpResponse
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
    api_instance = alexasomba_paystack.TransferApi(api_client)
    transfer_resend_otp = alexasomba_paystack.TransferResendOTP() # TransferResendOTP |  (optional)

    try:
        # Resend OTP for Transfer
        api_response = api_instance.transfer_resend_otp(transfer_resend_otp=transfer_resend_otp)
        print("The response of TransferApi->transfer_resend_otp:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransferApi->transfer_resend_otp: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transfer_resend_otp** | [**TransferResendOTP**](TransferResendOTP.md)|  | [optional] 

### Return type

[**TransferResendsOtpResponse**](TransferResendsOtpResponse.md)

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

# **transfer_verify**
> TransferVerifyReference transfer_verify(reference)

Verify Transfer

Verify the status of a transfer on your integration

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.transfer_verify_reference import TransferVerifyReference
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
    api_instance = alexasomba_paystack.TransferApi(api_client)
    reference = 'acv_9ee55786-2323-4760-98e2-6380c9cb3f67' # str | Transfer reference

    try:
        # Verify Transfer
        api_response = api_instance.transfer_verify(reference)
        print("The response of TransferApi->transfer_verify:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransferApi->transfer_verify: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reference** | **str**| Transfer reference | 

### Return type

[**TransferVerifyReference**](TransferVerifyReference.md)

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

