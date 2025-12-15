# alexasomba_paystack.StorefrontApi

All URIs are relative to *https://api.paystack.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**storefront_add_products**](StorefrontApi.md#storefront_add_products) | **POST** /storefront/{id}/product | Add Products to Storefront
[**storefront_create**](StorefrontApi.md#storefront_create) | **POST** /storefront | Create Storefront
[**storefront_delete**](StorefrontApi.md#storefront_delete) | **DELETE** /storefront/{id} | Delete Storefront
[**storefront_duplicate**](StorefrontApi.md#storefront_duplicate) | **POST** /storefront/{id}/duplicate | Duplicate Storefront
[**storefront_fetch**](StorefrontApi.md#storefront_fetch) | **GET** /storefront/{id} | Fetch Storefront
[**storefront_fetch_orders**](StorefrontApi.md#storefront_fetch_orders) | **GET** /storefront/{id}/order | Fetch Storefront Orders
[**storefront_list**](StorefrontApi.md#storefront_list) | **GET** /storefront | List Storefronts
[**storefront_list_products**](StorefrontApi.md#storefront_list_products) | **GET** /storefront/{id}/product | List Storefront Products
[**storefront_publish**](StorefrontApi.md#storefront_publish) | **POST** /storefront/{id}/publish | Publish Storefront
[**storefront_update**](StorefrontApi.md#storefront_update) | **PUT** /storefront/{id} | Update Storefront
[**storefront_verify_slug**](StorefrontApi.md#storefront_verify_slug) | **GET** /storefront/verify/{slug} | Verify Storefront Slug


# **storefront_add_products**
> Response storefront_add_products(id, body=body)

Add Products to Storefront

Add previously created products to a Storefront

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.response import Response
from alexasomba_paystack.models.storefront_id_product import StorefrontIdProduct
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
    api_instance = alexasomba_paystack.StorefrontApi(api_client)
    id = 1559046 # int | The unique identifier of the Storefront
    body = alexasomba_paystack.StorefrontIdProduct() # StorefrontIdProduct |  (optional)

    try:
        # Add Products to Storefront
        api_response = api_instance.storefront_add_products(id, body=body)
        print("The response of StorefrontApi->storefront_add_products:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorefrontApi->storefront_add_products: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The unique identifier of the Storefront | 
 **body** | **StorefrontIdProduct**|  | [optional] 

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
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storefront_create**
> StorefrontCreateResponse storefront_create(storefront_create=storefront_create)

Create Storefront

Create a digital shop to manage and display your products

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.storefront_create import StorefrontCreate
from alexasomba_paystack.models.storefront_create_response import StorefrontCreateResponse
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
    api_instance = alexasomba_paystack.StorefrontApi(api_client)
    storefront_create = alexasomba_paystack.StorefrontCreate() # StorefrontCreate |  (optional)

    try:
        # Create Storefront
        api_response = api_instance.storefront_create(storefront_create=storefront_create)
        print("The response of StorefrontApi->storefront_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorefrontApi->storefront_create: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_create** | [**StorefrontCreate**](StorefrontCreate.md)|  | [optional] 

### Return type

[**StorefrontCreateResponse**](StorefrontCreateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Storefront Create response |  -  |
**400** | Unauthorized operation |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storefront_delete**
> StorefrontDeleteResponse storefront_delete(id)

Delete Storefront

Delete a previously created Storefront

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.storefront_delete_response import StorefrontDeleteResponse
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
    api_instance = alexasomba_paystack.StorefrontApi(api_client)
    id = 1559046 # int | The unique identifier of the Storefront

    try:
        # Delete Storefront
        api_response = api_instance.storefront_delete(id)
        print("The response of StorefrontApi->storefront_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorefrontApi->storefront_delete: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The unique identifier of the Storefront | 

### Return type

[**StorefrontDeleteResponse**](StorefrontDeleteResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Storefront Delete response |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storefront_duplicate**
> Response storefront_duplicate(id)

Duplicate Storefront

Duplicate a previously created Storefront

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
    api_instance = alexasomba_paystack.StorefrontApi(api_client)
    id = 1559046 # int | The unique identifier of the Storefront

    try:
        # Duplicate Storefront
        api_response = api_instance.storefront_duplicate(id)
        print("The response of StorefrontApi->storefront_duplicate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorefrontApi->storefront_duplicate: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The unique identifier of the Storefront | 

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

# **storefront_fetch**
> StorefrontFetchResponse storefront_fetch(id)

Fetch Storefront

Get the details of a previously created Storefront

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.storefront_fetch_response import StorefrontFetchResponse
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
    api_instance = alexasomba_paystack.StorefrontApi(api_client)
    id = 1559046 # int | The unique identifier of the Storefront

    try:
        # Fetch Storefront
        api_response = api_instance.storefront_fetch(id)
        print("The response of StorefrontApi->storefront_fetch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorefrontApi->storefront_fetch: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The unique identifier of the Storefront | 

### Return type

[**StorefrontFetchResponse**](StorefrontFetchResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Storefront Fetch response |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storefront_fetch_orders**
> Response storefront_fetch_orders(id)

Fetch Storefront Orders

Fetch all orders in your Storefront

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
    api_instance = alexasomba_paystack.StorefrontApi(api_client)
    id = 1559046 # int | The unique identifier of the Storefront

    try:
        # Fetch Storefront Orders
        api_response = api_instance.storefront_fetch_orders(id)
        print("The response of StorefrontApi->storefront_fetch_orders:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorefrontApi->storefront_fetch_orders: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The unique identifier of the Storefront | 

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
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storefront_list**
> StorefrontListResponse storefront_list(per_page=per_page, page=page, status=status)

List Storefronts

List the storefronts you previously created

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.storefront_list_response import StorefrontListResponse
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
    api_instance = alexasomba_paystack.StorefrontApi(api_client)
    per_page = 50 # int | Number of records to fetch per request (optional) (default to 50)
    page = 1 # int | The offset to retrieve data from (optional) (default to 1)
    status = 'active' # str |  (optional)

    try:
        # List Storefronts
        api_response = api_instance.storefront_list(per_page=per_page, page=page, status=status)
        print("The response of StorefrontApi->storefront_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorefrontApi->storefront_list: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **per_page** | **int**| Number of records to fetch per request | [optional] [default to 50]
 **page** | **int**| The offset to retrieve data from | [optional] [default to 1]
 **status** | **str**|  | [optional] 

### Return type

[**StorefrontListResponse**](StorefrontListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Storefront List response |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storefront_list_products**
> Response storefront_list_products(id)

List Storefront Products

List the products in a Storefront

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
    api_instance = alexasomba_paystack.StorefrontApi(api_client)
    id = 1559046 # int | The unique identifier of the Storefront

    try:
        # List Storefront Products
        api_response = api_instance.storefront_list_products(id)
        print("The response of StorefrontApi->storefront_list_products:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorefrontApi->storefront_list_products: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The unique identifier of the Storefront | 

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

# **storefront_publish**
> Response storefront_publish(id)

Publish Storefront

Make your Storefront publicly available

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
    api_instance = alexasomba_paystack.StorefrontApi(api_client)
    id = 1559046 # int | The unique identifier of the Storefront

    try:
        # Publish Storefront
        api_response = api_instance.storefront_publish(id)
        print("The response of StorefrontApi->storefront_publish:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorefrontApi->storefront_publish: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The unique identifier of the Storefront | 

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

# **storefront_update**
> StorefrontUpdateResponse storefront_update(id, body=body)

Update Storefront

Update the details of a previously created Storefront

### Example

* Bearer Authentication (bearerAuth):
```python
import time
import os
import alexasomba_paystack
from alexasomba_paystack.models.storefront_id import StorefrontId
from alexasomba_paystack.models.storefront_update_response import StorefrontUpdateResponse
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
    api_instance = alexasomba_paystack.StorefrontApi(api_client)
    id = 1559046 # int | The unique identifier of the Storefront
    body = alexasomba_paystack.StorefrontId() # StorefrontId |  (optional)

    try:
        # Update Storefront
        api_response = api_instance.storefront_update(id, body=body)
        print("The response of StorefrontApi->storefront_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorefrontApi->storefront_update: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The unique identifier of the Storefront | 
 **body** | **StorefrontId**|  | [optional] 

### Return type

[**StorefrontUpdateResponse**](StorefrontUpdateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Storefront Update response |  -  |
**401** | Unauthorized operation |  -  |
**404** | Entity not found |  -  |
**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storefront_verify_slug**
> Response storefront_verify_slug(slug)

Verify Storefront Slug

Verify the availability of a slug before using it for your Storefront

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
    api_instance = alexasomba_paystack.StorefrontApi(api_client)
    slug = 'struct_and_faces' # str | The custom slug to check

    try:
        # Verify Storefront Slug
        api_response = api_instance.storefront_verify_slug(slug)
        print("The response of StorefrontApi->storefront_verify_slug:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorefrontApi->storefront_verify_slug: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slug** | **str**| The custom slug to check | 

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

