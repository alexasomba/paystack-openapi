# alexasomba_paystack.BankApi

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bank_list**](BankApi.md#bank_list) | **GET** /bank | List Banks
[**bank_resolve_account_number**](BankApi.md#bank_resolve_account_number) | **GET** /bank/resolve | Resolve Account Number
[**bank_validate_account_number**](BankApi.md#bank_validate_account_number) | **POST** /bank/validate | Validate Bank Account


# **bank_list**
> MiscellaneousListBanksResponse bank_list(country=country, currency=currency, use_cursor=use_cursor, per_page=per_page, page=page, next=next, previous=previous, pay_with_bank_transfer=pay_with_bank_transfer, pay_with_bank=pay_with_bank, enabled_for_verification=enabled_for_verification, gateway=gateway, type=type, include_nip_sort_code=include_nip_sort_code)

List Banks

List banks supported on Paystack

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.miscellaneous_list_banks_response import MiscellaneousListBanksResponse
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
    api_instance = alexasomba_paystack.BankApi(api_client)
    country = 'nigeria' # str | The country from which to obtain the list of supported banks (optional)
    currency = 'NGN' # str | The country from which to obtain the list of supported banks (optional)
    use_cursor = True # bool | A flag to indicate if cursor based pagination should be used (optional)
    per_page = 56 # int | The number of records to fetch per request (optional)
    page = 56 # int | The offset to retrieve data from (optional)
    next = 'next_example' # str | An alphanumeric value returned for every cursor based retrieval, used to retrieve the next set of data  (optional)
    previous = 'previous_example' # str | An alphanumeric value returned for every cursor based retrieval, used to retrieve the previous set of data  (optional)
    pay_with_bank_transfer = True # bool | A flag to filter for available banks a customer can make a transfer to complete a payment (optional)
    pay_with_bank = True # bool | A flag to filter for banks a customer can pay directly from (optional)
    enabled_for_verification = True # bool | A flag to filter the banks that are supported for account verification in South Africa. You need to combine this with either the `currency` or `country` filter.  (optional)
    gateway = 'gateway_example' # str | The type of gateway for a Nigerian bank (optional)
    type = 'type_example' # str | Type of financial channel (optional)
    include_nip_sort_code = True # bool | A flag that returns Nigerian banks with their NIP institution code.  The returned value can be used in identifying institutions on NIP.  (optional)

    try:
        # List Banks
        api_response = api_instance.bank_list(country=country, currency=currency, use_cursor=use_cursor, per_page=per_page, page=page, next=next, previous=previous, pay_with_bank_transfer=pay_with_bank_transfer, pay_with_bank=pay_with_bank, enabled_for_verification=enabled_for_verification, gateway=gateway, type=type, include_nip_sort_code=include_nip_sort_code)
        print("The response of BankApi->bank_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BankApi->bank_list: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **str**| The country from which to obtain the list of supported banks | [optional] 
 **currency** | **str**| The country from which to obtain the list of supported banks | [optional] 
 **use_cursor** | **bool**| A flag to indicate if cursor based pagination should be used | [optional] 
 **per_page** | **int**| The number of records to fetch per request | [optional] 
 **page** | **int**| The offset to retrieve data from | [optional] 
 **next** | **str**| An alphanumeric value returned for every cursor based retrieval, used to retrieve the next set of data  | [optional] 
 **previous** | **str**| An alphanumeric value returned for every cursor based retrieval, used to retrieve the previous set of data  | [optional] 
 **pay_with_bank_transfer** | **bool**| A flag to filter for available banks a customer can make a transfer to complete a payment | [optional] 
 **pay_with_bank** | **bool**| A flag to filter for banks a customer can pay directly from | [optional] 
 **enabled_for_verification** | **bool**| A flag to filter the banks that are supported for account verification in South Africa. You need to combine this with either the &#x60;currency&#x60; or &#x60;country&#x60; filter.  | [optional] 
 **gateway** | **str**| The type of gateway for a Nigerian bank | [optional] 
 **type** | **str**| Type of financial channel | [optional] 
 **include_nip_sort_code** | **bool**| A flag that returns Nigerian banks with their NIP institution code.  The returned value can be used in identifying institutions on NIP.  | [optional] 

### Return type

[**MiscellaneousListBanksResponse**](MiscellaneousListBanksResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Miscellaneous List Banks response |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bank_resolve_account_number**
> VerificationResolveAccountNumberResponse bank_resolve_account_number(account_number=account_number, bank_code=bank_code)

Resolve Account Number

Resolve an account number to confirm the name associated with it

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.verification_resolve_account_number_response import VerificationResolveAccountNumberResponse
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
    api_instance = alexasomba_paystack.BankApi(api_client)
    account_number = 22728151 # int | The account number of interest (optional)
    bank_code = 63 # int | The bank code associated with the account number (optional)

    try:
        # Resolve Account Number
        api_response = api_instance.bank_resolve_account_number(account_number=account_number, bank_code=bank_code)
        print("The response of BankApi->bank_resolve_account_number:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BankApi->bank_resolve_account_number: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_number** | **int**| The account number of interest | [optional] 
 **bank_code** | **int**| The bank code associated with the account number | [optional] 

### Return type

[**VerificationResolveAccountNumberResponse**](VerificationResolveAccountNumberResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Verification Resolve Account Number response |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bank_validate_account_number**
> VerificationValidateAccountResponse bank_validate_account_number(bank_validate_request=bank_validate_request)

Validate Bank Account

Confirm the authenticity of a customer's account number before sending money

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.bank_validate_request import BankValidateRequest
from alexasomba_paystack.models.verification_validate_account_response import VerificationValidateAccountResponse
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
    api_instance = alexasomba_paystack.BankApi(api_client)
    bank_validate_request = alexasomba_paystack.BankValidateRequest() # BankValidateRequest |  (optional)

    try:
        # Validate Bank Account
        api_response = api_instance.bank_validate_account_number(bank_validate_request=bank_validate_request)
        print("The response of BankApi->bank_validate_account_number:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BankApi->bank_validate_account_number: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bank_validate_request** | [**BankValidateRequest**](BankValidateRequest.md)|  | [optional] 

### Return type

[**VerificationValidateAccountResponse**](VerificationValidateAccountResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Verification Validate Account response |  -  |
**401** | Unauthorized operation |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

