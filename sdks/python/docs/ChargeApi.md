# alexasomba_paystack.ChargeApi

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**charge_check**](ChargeApi.md#charge_check) | **GET** /charge/{reference} | Check pending charge
[**charge_create**](ChargeApi.md#charge_create) | **POST** /charge | Create Charge
[**charge_submit_address**](ChargeApi.md#charge_submit_address) | **POST** /charge/submit_address | Submit Address
[**charge_submit_birthday**](ChargeApi.md#charge_submit_birthday) | **POST** /charge/submit_birthday | Submit Birthday
[**charge_submit_otp**](ChargeApi.md#charge_submit_otp) | **POST** /charge/submit_otp | Submit OTP
[**charge_submit_phone**](ChargeApi.md#charge_submit_phone) | **POST** /charge/submit_phone | Submit Phone
[**charge_submit_pin**](ChargeApi.md#charge_submit_pin) | **POST** /charge/submit_pin | Submit PIN


# **charge_check**
> ChargeReference charge_check(reference)

Check pending charge

When you get `pending` as a charge status or if there was an exception when calling any of the `/charge` endpoints, wait 10 seconds or more, then make a check to see if its status has changed. Don't call too early as you may get a lot more pending than you should. 

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.charge_reference import ChargeReference
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
    api_instance = alexasomba_paystack.ChargeApi(api_client)
    reference = '5bwib5v6anhe9xa' # str | The reference of the ongoing transaction

    try:
        # Check pending charge
        api_response = api_instance.charge_check(reference)
        print("The response of ChargeApi->charge_check:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChargeApi->charge_check: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reference** | **str**| The reference of the ongoing transaction | 

### Return type

[**ChargeReference**](ChargeReference.md)

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

# **charge_create**
> ChargeCreateResponse charge_create(charge_create_request=charge_create_request)

Create Charge

Initiate a payment by integrating the payment channel of your choice.

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.charge_create_request import ChargeCreateRequest
from alexasomba_paystack.models.charge_create_response import ChargeCreateResponse
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
    api_instance = alexasomba_paystack.ChargeApi(api_client)
    charge_create_request = alexasomba_paystack.ChargeCreateRequest() # ChargeCreateRequest |  (optional)

    try:
        # Create Charge
        api_response = api_instance.charge_create(charge_create_request=charge_create_request)
        print("The response of ChargeApi->charge_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChargeApi->charge_create: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **charge_create_request** | [**ChargeCreateRequest**](ChargeCreateRequest.md)|  | [optional] 

### Return type

[**ChargeCreateResponse**](ChargeCreateResponse.md)

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

# **charge_submit_address**
> Response charge_submit_address(charge_submit_address=charge_submit_address)

Submit Address

Send the details of the customer's address for address verification

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.charge_submit_address import ChargeSubmitAddress
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
    api_instance = alexasomba_paystack.ChargeApi(api_client)
    charge_submit_address = alexasomba_paystack.ChargeSubmitAddress() # ChargeSubmitAddress |  (optional)

    try:
        # Submit Address
        api_response = api_instance.charge_submit_address(charge_submit_address=charge_submit_address)
        print("The response of ChargeApi->charge_submit_address:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChargeApi->charge_submit_address: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **charge_submit_address** | [**ChargeSubmitAddress**](ChargeSubmitAddress.md)|  | [optional] 

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

# **charge_submit_birthday**
> ChargeSubmitBirthdayResponse charge_submit_birthday(charge_submit_birthday=charge_submit_birthday)

Submit Birthday

Submit the customer's birthday when requested

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.charge_submit_birthday import ChargeSubmitBirthday
from alexasomba_paystack.models.charge_submit_birthday_response import ChargeSubmitBirthdayResponse
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
    api_instance = alexasomba_paystack.ChargeApi(api_client)
    charge_submit_birthday = alexasomba_paystack.ChargeSubmitBirthday() # ChargeSubmitBirthday |  (optional)

    try:
        # Submit Birthday
        api_response = api_instance.charge_submit_birthday(charge_submit_birthday=charge_submit_birthday)
        print("The response of ChargeApi->charge_submit_birthday:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChargeApi->charge_submit_birthday: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **charge_submit_birthday** | [**ChargeSubmitBirthday**](ChargeSubmitBirthday.md)|  | [optional] 

### Return type

[**ChargeSubmitBirthdayResponse**](ChargeSubmitBirthdayResponse.md)

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

# **charge_submit_otp**
> ChargeSubmitOtpResponse charge_submit_otp(charge_submit_otp=charge_submit_otp)

Submit OTP

Submit OTP to complete a charge

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.charge_submit_otp import ChargeSubmitOTP
from alexasomba_paystack.models.charge_submit_otp_response import ChargeSubmitOtpResponse
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
    api_instance = alexasomba_paystack.ChargeApi(api_client)
    charge_submit_otp = alexasomba_paystack.ChargeSubmitOTP() # ChargeSubmitOTP |  (optional)

    try:
        # Submit OTP
        api_response = api_instance.charge_submit_otp(charge_submit_otp=charge_submit_otp)
        print("The response of ChargeApi->charge_submit_otp:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChargeApi->charge_submit_otp: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **charge_submit_otp** | [**ChargeSubmitOTP**](ChargeSubmitOTP.md)|  | [optional] 

### Return type

[**ChargeSubmitOtpResponse**](ChargeSubmitOtpResponse.md)

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

# **charge_submit_phone**
> ChargeSubmitPhoneResponse charge_submit_phone(charge_submit_phone=charge_submit_phone)

Submit Phone

Submit phone number when requested

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.charge_submit_phone import ChargeSubmitPhone
from alexasomba_paystack.models.charge_submit_phone_response import ChargeSubmitPhoneResponse
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
    api_instance = alexasomba_paystack.ChargeApi(api_client)
    charge_submit_phone = alexasomba_paystack.ChargeSubmitPhone() # ChargeSubmitPhone |  (optional)

    try:
        # Submit Phone
        api_response = api_instance.charge_submit_phone(charge_submit_phone=charge_submit_phone)
        print("The response of ChargeApi->charge_submit_phone:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChargeApi->charge_submit_phone: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **charge_submit_phone** | [**ChargeSubmitPhone**](ChargeSubmitPhone.md)|  | [optional] 

### Return type

[**ChargeSubmitPhoneResponse**](ChargeSubmitPhoneResponse.md)

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

# **charge_submit_pin**
> ChargeSubmitPinResponse charge_submit_pin(charge_submit_pin=charge_submit_pin)

Submit PIN

Submit PIN to continue a charge

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.charge_submit_pin import ChargeSubmitPin
from alexasomba_paystack.models.charge_submit_pin_response import ChargeSubmitPinResponse
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
    api_instance = alexasomba_paystack.ChargeApi(api_client)
    charge_submit_pin = alexasomba_paystack.ChargeSubmitPin() # ChargeSubmitPin |  (optional)

    try:
        # Submit PIN
        api_response = api_instance.charge_submit_pin(charge_submit_pin=charge_submit_pin)
        print("The response of ChargeApi->charge_submit_pin:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChargeApi->charge_submit_pin: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **charge_submit_pin** | [**ChargeSubmitPin**](ChargeSubmitPin.md)|  | [optional] 

### Return type

[**ChargeSubmitPinResponse**](ChargeSubmitPinResponse.md)

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

