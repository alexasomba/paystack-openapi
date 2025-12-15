# alexasomba_paystack.CustomerApi

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customer_create**](CustomerApi.md#customer_create) | **POST** /customer | Create Customer
[**customer_deactivate_authorization**](CustomerApi.md#customer_deactivate_authorization) | **POST** /customer/authorization/deactivate | Deactivate Authorization
[**customer_direct_debit_activation_charge**](CustomerApi.md#customer_direct_debit_activation_charge) | **PUT** /customer/{id}/directdebit-activation-charge | Direct Debit Activation Charge
[**customer_fetch**](CustomerApi.md#customer_fetch) | **GET** /customer/{code} | Fetch Customer
[**customer_fetch_mandate_authorizations**](CustomerApi.md#customer_fetch_mandate_authorizations) | **GET** /customer/{id}/directdebit-mandate-authorizations | Fetch Mandate Authorizations
[**customer_initialize_authorization**](CustomerApi.md#customer_initialize_authorization) | **POST** /customer/authorization/initialize | Initialize Authorization
[**customer_initialize_direct_debit**](CustomerApi.md#customer_initialize_direct_debit) | **POST** /customer/{id}/initialize-direct-debit | Initialize Direct Debit
[**customer_list**](CustomerApi.md#customer_list) | **GET** /customer | List Customers
[**customer_risk_action**](CustomerApi.md#customer_risk_action) | **POST** /customer/set_risk_action | Set Risk Action
[**customer_update**](CustomerApi.md#customer_update) | **PUT** /customer/{code} | Update Customer
[**customer_validate**](CustomerApi.md#customer_validate) | **POST** /customer/{code}/identification | Validate Customer
[**customer_verify_authorization**](CustomerApi.md#customer_verify_authorization) | **GET** /customer/authorization/verify/{reference} | Verify Authorization


# **customer_create**
> CustomerCreateResponse customer_create(customer_create=customer_create)

Create Customer

Create a customer on your integration

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.customer_create import CustomerCreate
from alexasomba_paystack.models.customer_create_response import CustomerCreateResponse
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
    api_instance = alexasomba_paystack.CustomerApi(api_client)
    customer_create = alexasomba_paystack.CustomerCreate() # CustomerCreate |  (optional)

    try:
        # Create Customer
        api_response = api_instance.customer_create(customer_create=customer_create)
        print("The response of CustomerApi->customer_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerApi->customer_create: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_create** | [**CustomerCreate**](CustomerCreate.md)|  | [optional] 

### Return type

[**CustomerCreateResponse**](CustomerCreateResponse.md)

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

# **customer_deactivate_authorization**
> CustomerDeactivateAuthorizationResponse customer_deactivate_authorization(customer_deactivate_authorization=customer_deactivate_authorization)

Deactivate Authorization

Deactivate an authorization for any payment channel.

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.customer_deactivate_authorization import CustomerDeactivateAuthorization
from alexasomba_paystack.models.customer_deactivate_authorization_response import CustomerDeactivateAuthorizationResponse
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
    api_instance = alexasomba_paystack.CustomerApi(api_client)
    customer_deactivate_authorization = alexasomba_paystack.CustomerDeactivateAuthorization() # CustomerDeactivateAuthorization |  (optional)

    try:
        # Deactivate Authorization
        api_response = api_instance.customer_deactivate_authorization(customer_deactivate_authorization=customer_deactivate_authorization)
        print("The response of CustomerApi->customer_deactivate_authorization:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerApi->customer_deactivate_authorization: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_deactivate_authorization** | [**CustomerDeactivateAuthorization**](CustomerDeactivateAuthorization.md)|  | [optional] 

### Return type

[**CustomerDeactivateAuthorizationResponse**](CustomerDeactivateAuthorizationResponse.md)

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

# **customer_direct_debit_activation_charge**
> CustomerDirectDebitActivationChargeResponse customer_direct_debit_activation_charge(id, body=body)

Direct Debit Activation Charge

Trigger an activation charge on an inactive mandate on behalf of your customer

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.customer_direct_debit_activation_charge_response import CustomerDirectDebitActivationChargeResponse
from alexasomba_paystack.models.customer_id_directdebit_activation_charge import CustomerIdDirectdebitActivationCharge
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
    api_instance = alexasomba_paystack.CustomerApi(api_client)
    id = 297346561 # int | The customer ID attached to the authorization
    body = alexasomba_paystack.CustomerIdDirectdebitActivationCharge() # CustomerIdDirectdebitActivationCharge |  (optional)

    try:
        # Direct Debit Activation Charge
        api_response = api_instance.customer_direct_debit_activation_charge(id, body=body)
        print("The response of CustomerApi->customer_direct_debit_activation_charge:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerApi->customer_direct_debit_activation_charge: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The customer ID attached to the authorization | 
 **body** | **CustomerIdDirectdebitActivationCharge**|  | [optional] 

### Return type

[**CustomerDirectDebitActivationChargeResponse**](CustomerDirectDebitActivationChargeResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Customer Direct Debit Activation Charge response |  -  |
**401** | Unauthorized operation |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customer_fetch**
> CustomerCode customer_fetch(code)

Fetch Customer

Get details of a customer on your integration.

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.customer_code import CustomerCode
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
    api_instance = alexasomba_paystack.CustomerApi(api_client)
    code = 'CUS_c6wqvwmvwopw4ms' # str | The code for the customer gotten from the response of the customer creation

    try:
        # Fetch Customer
        api_response = api_instance.customer_fetch(code)
        print("The response of CustomerApi->customer_fetch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerApi->customer_fetch: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| The code for the customer gotten from the response of the customer creation | 

### Return type

[**CustomerCode**](CustomerCode.md)

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

# **customer_fetch_mandate_authorizations**
> CustomerFetchMandateAuthorizationsResponse customer_fetch_mandate_authorizations(id)

Fetch Mandate Authorizations

Get the list of direct debit mandates associated with a customer

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.customer_fetch_mandate_authorizations_response import CustomerFetchMandateAuthorizationsResponse
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
    api_instance = alexasomba_paystack.CustomerApi(api_client)
    id = 297346561 # int | The customer ID for the authorizations to fetch

    try:
        # Fetch Mandate Authorizations
        api_response = api_instance.customer_fetch_mandate_authorizations(id)
        print("The response of CustomerApi->customer_fetch_mandate_authorizations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerApi->customer_fetch_mandate_authorizations: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The customer ID for the authorizations to fetch | 

### Return type

[**CustomerFetchMandateAuthorizationsResponse**](CustomerFetchMandateAuthorizationsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Customer Fetch Mandate Authorizations response |  -  |
**401** | Unauthorized operation |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customer_initialize_authorization**
> CustomerAuthorizationInitializeResponse customer_initialize_authorization(customer_authorization_initialize_request)

Initialize Authorization

Initiate a request to create a reusable authorization code for recurring transactions

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.customer_authorization_initialize_request import CustomerAuthorizationInitializeRequest
from alexasomba_paystack.models.customer_authorization_initialize_response import CustomerAuthorizationInitializeResponse
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
    api_instance = alexasomba_paystack.CustomerApi(api_client)
    customer_authorization_initialize_request = alexasomba_paystack.CustomerAuthorizationInitializeRequest() # CustomerAuthorizationInitializeRequest | 

    try:
        # Initialize Authorization
        api_response = api_instance.customer_initialize_authorization(customer_authorization_initialize_request)
        print("The response of CustomerApi->customer_initialize_authorization:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerApi->customer_initialize_authorization: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_authorization_initialize_request** | [**CustomerAuthorizationInitializeRequest**](CustomerAuthorizationInitializeRequest.md)|  | 

### Return type

[**CustomerAuthorizationInitializeResponse**](CustomerAuthorizationInitializeResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Customer Authorization Initialize response |  -  |
**401** | Unauthorized operation |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customer_initialize_direct_debit**
> CustomerInitializeDirectDebitResponse customer_initialize_direct_debit(id, body=body)

Initialize Direct Debit

Initialize the process of linking an account to a customer for Direct Debit transactions

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.customer_id_initialize_direct_debit import CustomerIdInitializeDirectDebit
from alexasomba_paystack.models.customer_initialize_direct_debit_response import CustomerInitializeDirectDebitResponse
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
    api_instance = alexasomba_paystack.CustomerApi(api_client)
    id = 297346561 # int | The ID of the customer to initialize the direct debit for
    body = alexasomba_paystack.CustomerIdInitializeDirectDebit() # CustomerIdInitializeDirectDebit |  (optional)

    try:
        # Initialize Direct Debit
        api_response = api_instance.customer_initialize_direct_debit(id, body=body)
        print("The response of CustomerApi->customer_initialize_direct_debit:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerApi->customer_initialize_direct_debit: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the customer to initialize the direct debit for | 
 **body** | **CustomerIdInitializeDirectDebit**|  | [optional] 

### Return type

[**CustomerInitializeDirectDebitResponse**](CustomerInitializeDirectDebitResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Customer Initialize Direct Debit response |  -  |
**401** | Unauthorized operation |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customer_list**
> CustomerListResponse customer_list(use_cursor=use_cursor, next=next, previous=previous, var_from=var_from, to=to, per_page=per_page, page=page)

List Customers

List customers on your integration

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.customer_list_response import CustomerListResponse
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
    api_instance = alexasomba_paystack.CustomerApi(api_client)
    use_cursor = True # bool | A flag to indicate if cursor based pagination should be used (optional)
    next = 'next_example' # str | An alphanumeric value returned for every cursor based retrieval, used to retrieve the next set of data  (optional)
    previous = 'previous_example' # str | An alphanumeric value returned for every cursor based retrieval, used to retrieve the previous set of data  (optional)
    var_from = '2013-10-20T19:20:30+01:00' # datetime | The start date (optional)
    to = '2013-10-20T19:20:30+01:00' # datetime | The end date (optional)
    per_page = 'per_page_example' # str | The number of records to fetch per request (optional)
    page = 'page_example' # str | The offset to retrieve data from (optional)

    try:
        # List Customers
        api_response = api_instance.customer_list(use_cursor=use_cursor, next=next, previous=previous, var_from=var_from, to=to, per_page=per_page, page=page)
        print("The response of CustomerApi->customer_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerApi->customer_list: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **use_cursor** | **bool**| A flag to indicate if cursor based pagination should be used | [optional] 
 **next** | **str**| An alphanumeric value returned for every cursor based retrieval, used to retrieve the next set of data  | [optional] 
 **previous** | **str**| An alphanumeric value returned for every cursor based retrieval, used to retrieve the previous set of data  | [optional] 
 **var_from** | **datetime**| The start date | [optional] 
 **to** | **datetime**| The end date | [optional] 
 **per_page** | **str**| The number of records to fetch per request | [optional] 
 **page** | **str**| The offset to retrieve data from | [optional] 

### Return type

[**CustomerListResponse**](CustomerListResponse.md)

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

# **customer_risk_action**
> CustomerWhitelistBlacklistResponse customer_risk_action(customer_risk_action=customer_risk_action)

Set Risk Action

Set customer's risk action by whitelisting or blacklisting the customer

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.customer_risk_action import CustomerRiskAction
from alexasomba_paystack.models.customer_whitelist_blacklist_response import CustomerWhitelistBlacklistResponse
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
    api_instance = alexasomba_paystack.CustomerApi(api_client)
    customer_risk_action = alexasomba_paystack.CustomerRiskAction() # CustomerRiskAction |  (optional)

    try:
        # Set Risk Action
        api_response = api_instance.customer_risk_action(customer_risk_action=customer_risk_action)
        print("The response of CustomerApi->customer_risk_action:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerApi->customer_risk_action: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_risk_action** | [**CustomerRiskAction**](CustomerRiskAction.md)|  | [optional] 

### Return type

[**CustomerWhitelistBlacklistResponse**](CustomerWhitelistBlacklistResponse.md)

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

# **customer_update**
> CustomerCode customer_update(code, body=body)

Update Customer

Update a customer's details on your integration

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.customer_code import CustomerCode
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
    api_instance = alexasomba_paystack.CustomerApi(api_client)
    code = 'CUS_c6wqvwmvwopw4ms' # str | The code for the customer gotten from the response of the customer creation
    body = alexasomba_paystack.CustomerCode() # CustomerCode |  (optional)

    try:
        # Update Customer
        api_response = api_instance.customer_update(code, body=body)
        print("The response of CustomerApi->customer_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerApi->customer_update: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| The code for the customer gotten from the response of the customer creation | 
 **body** | **CustomerCode**|  | [optional] 

### Return type

[**CustomerCode**](CustomerCode.md)

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
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customer_validate**
> CustomerCodeIdentification customer_validate(code, body=body)

Validate Customer

Validate a customer's identity

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.customer_code_identification import CustomerCodeIdentification
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
    api_instance = alexasomba_paystack.CustomerApi(api_client)
    code = 'CUS_c6wqvwmvwopw4ms' # str | The code for the customer gotten from the response of the customer creation
    body = alexasomba_paystack.CustomerCodeIdentification() # CustomerCodeIdentification |  (optional)

    try:
        # Validate Customer
        api_response = api_instance.customer_validate(code, body=body)
        print("The response of CustomerApi->customer_validate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerApi->customer_validate: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| The code for the customer gotten from the response of the customer creation | 
 **body** | **CustomerCodeIdentification**|  | [optional] 

### Return type

[**CustomerCodeIdentification**](CustomerCodeIdentification.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** |  |  -  |
**401** | Unauthorized operation |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customer_verify_authorization**
> CustomerAuthorizationVerifyResponse customer_verify_authorization(reference)

Verify Authorization

Check the status of an authorization request

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.customer_authorization_verify_response import CustomerAuthorizationVerifyResponse
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
    api_instance = alexasomba_paystack.CustomerApi(api_client)
    reference = 'dfbzfotsrbv4n5s82t4mp5b5mfn51h' # str | The reference returned in the initialization response

    try:
        # Verify Authorization
        api_response = api_instance.customer_verify_authorization(reference)
        print("The response of CustomerApi->customer_verify_authorization:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerApi->customer_verify_authorization: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reference** | **str**| The reference returned in the initialization response | 

### Return type

[**CustomerAuthorizationVerifyResponse**](CustomerAuthorizationVerifyResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Customer Authorization Verify response |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

