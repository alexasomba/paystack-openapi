# StorefrontFetchResponseMeta


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_count** | **int** |  | 
**total** | **int** |  | 
**skipped** | **int** |  | 
**per_page** | **int** |  | 
**page** | **int** |  | 
**page_count** | **int** |  | 

## Example

```python
from alexasomba_paystack.models.storefront_fetch_response_meta import StorefrontFetchResponseMeta

# TODO update the JSON string below
json = "{}"
# create an instance of StorefrontFetchResponseMeta from a JSON string
storefront_fetch_response_meta_instance = StorefrontFetchResponseMeta.from_json(json)
# print the JSON string representation of the object
print StorefrontFetchResponseMeta.to_json()

# convert the object into a dict
storefront_fetch_response_meta_dict = storefront_fetch_response_meta_instance.to_dict()
# create an instance of StorefrontFetchResponseMeta from a dict
storefront_fetch_response_meta_form_dict = storefront_fetch_response_meta.from_dict(storefront_fetch_response_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


