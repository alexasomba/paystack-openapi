# alexasomba_paystack.PageApi

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**page_add_products**](PageApi.md#page_add_products) | **POST** /page/{id}/product | Add Products
[**page_check_slug_availability**](PageApi.md#page_check_slug_availability) | **GET** /page/check_slug_availability/{slug} | Check Slug Availability
[**page_create**](PageApi.md#page_create) | **POST** /page | Create Page
[**page_fetch**](PageApi.md#page_fetch) | **GET** /page/{id} | Fetch Page
[**page_list**](PageApi.md#page_list) | **GET** /page | List Pages
[**page_update**](PageApi.md#page_update) | **PUT** /page/{id} | Update Page


# **page_add_products**
> PageAddProductsResponse page_add_products(id, page_product=page_product)

Add Products

Add products to a previously created payment page. You can only add products to pages that was created with a `product` type. 

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.page_add_products_response import PageAddProductsResponse
from alexasomba_paystack.models.page_product import PageProduct
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
    api_instance = alexasomba_paystack.PageApi(api_client)
    id = 'id_example' # str | 
    page_product = alexasomba_paystack.PageProduct() # PageProduct |  (optional)

    try:
        # Add Products
        api_response = api_instance.page_add_products(id, page_product=page_product)
        print("The response of PageApi->page_add_products:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PageApi->page_add_products: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **page_product** | [**PageProduct**](PageProduct.md)|  | [optional] 

### Return type

[**PageAddProductsResponse**](PageAddProductsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Page Add Products response |  -  |
**401** | Unauthorized operation |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **page_check_slug_availability**
> PageCheckSlugAvailabilityResponse page_check_slug_availability(slug)

Check Slug Availability

Check if a custom slug is available for use when creating a payment page

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.page_check_slug_availability_response import PageCheckSlugAvailabilityResponse
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
    api_instance = alexasomba_paystack.PageApi(api_client)
    slug = 'risky-burger' # str | The custom slug to check

    try:
        # Check Slug Availability
        api_response = api_instance.page_check_slug_availability(slug)
        print("The response of PageApi->page_check_slug_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PageApi->page_check_slug_availability: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slug** | **str**| The custom slug to check | 

### Return type

[**PageCheckSlugAvailabilityResponse**](PageCheckSlugAvailabilityResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Page Check Slug Availability response |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **page_create**
> PageCreateResponse page_create(page_create=page_create)

Create Page

Create a webpage to receive payments

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.page_create import PageCreate
from alexasomba_paystack.models.page_create_response import PageCreateResponse
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
    api_instance = alexasomba_paystack.PageApi(api_client)
    page_create = alexasomba_paystack.PageCreate() # PageCreate |  (optional)

    try:
        # Create Page
        api_response = api_instance.page_create(page_create=page_create)
        print("The response of PageApi->page_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PageApi->page_create: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_create** | [**PageCreate**](PageCreate.md)|  | [optional] 

### Return type

[**PageCreateResponse**](PageCreateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Page Create response |  -  |
**401** | Unauthorized operation |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **page_fetch**
> PageFetchResponse page_fetch(id)

Fetch Page

Get a previously created payment page

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.page_fetch_response import PageFetchResponse
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
    api_instance = alexasomba_paystack.PageApi(api_client)
    id = 1891222 # int | The unique identifier of a payment page

    try:
        # Fetch Page
        api_response = api_instance.page_fetch(id)
        print("The response of PageApi->page_fetch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PageApi->page_fetch: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The unique identifier of a payment page | 

### Return type

[**PageFetchResponse**](PageFetchResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Page Fetch response |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **page_list**
> PageListResponse page_list(per_page=per_page, page=page, var_from=var_from, to=to)

List Pages

List all previously created payment pages

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.page_list_response import PageListResponse
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
    api_instance = alexasomba_paystack.PageApi(api_client)
    per_page = 50 # int | Number of records to fetch per page (optional) (default to 50)
    page = 56 # int | The section to retrieve (optional)
    var_from = '2013-10-20T19:20:30+01:00' # datetime | The start date (optional)
    to = '2013-10-20T19:20:30+01:00' # datetime | The end date (optional)

    try:
        # List Pages
        api_response = api_instance.page_list(per_page=per_page, page=page, var_from=var_from, to=to)
        print("The response of PageApi->page_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PageApi->page_list: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **per_page** | **int**| Number of records to fetch per page | [optional] [default to 50]
 **page** | **int**| The section to retrieve | [optional] 
 **var_from** | **datetime**| The start date | [optional] 
 **to** | **datetime**| The end date | [optional] 

### Return type

[**PageListResponse**](PageListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Page List response |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **page_update**
> PageUpdateResponse page_update(id, page_update=page_update)

Update Page

Update a previously created payment page

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.page_update import PageUpdate
from alexasomba_paystack.models.page_update_response import PageUpdateResponse
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
    api_instance = alexasomba_paystack.PageApi(api_client)
    id = 1891222 # int | The unique identifier of a payment page
    page_update = alexasomba_paystack.PageUpdate() # PageUpdate |  (optional)

    try:
        # Update Page
        api_response = api_instance.page_update(id, page_update=page_update)
        print("The response of PageApi->page_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PageApi->page_update: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The unique identifier of a payment page | 
 **page_update** | [**PageUpdate**](PageUpdate.md)|  | [optional] 

### Return type

[**PageUpdateResponse**](PageUpdateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Page Update response |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

