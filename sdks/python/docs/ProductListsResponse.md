# ProductListsResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**List[ProductListsResponseArray]**](ProductListsResponseArray.md) |  | 
**meta** | [**ProductListsResponseMeta**](ProductListsResponseMeta.md) |  | 

## Example

```python
from alexasomba_paystack.models.product_lists_response import ProductListsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ProductListsResponse from a JSON string
product_lists_response_instance = ProductListsResponse.from_json(json)
# print the JSON string representation of the object
print ProductListsResponse.to_json()

# convert the object into a dict
product_lists_response_dict = product_lists_response_instance.to_dict()
# create an instance of ProductListsResponse from a dict
product_lists_response_form_dict = product_lists_response.from_dict(product_lists_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


