# StorefrontFetchResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**StorefrontCreateResponseData**](StorefrontCreateResponseData.md) |  | 
**meta** | [**StorefrontFetchResponseMeta**](StorefrontFetchResponseMeta.md) |  | 

## Example

```python
from alexasomba_paystack.models.storefront_fetch_response import StorefrontFetchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of StorefrontFetchResponse from a JSON string
storefront_fetch_response_instance = StorefrontFetchResponse.from_json(json)
# print the JSON string representation of the object
print StorefrontFetchResponse.to_json()

# convert the object into a dict
storefront_fetch_response_dict = storefront_fetch_response_instance.to_dict()
# create an instance of StorefrontFetchResponse from a dict
storefront_fetch_response_form_dict = storefront_fetch_response.from_dict(storefront_fetch_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


