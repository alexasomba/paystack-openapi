# ProductDeleteResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.product_delete_response import ProductDeleteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ProductDeleteResponse from a JSON string
product_delete_response_instance = ProductDeleteResponse.from_json(json)
# print the JSON string representation of the object
print ProductDeleteResponse.to_json()

# convert the object into a dict
product_delete_response_dict = product_delete_response_instance.to_dict()
# create an instance of ProductDeleteResponse from a dict
product_delete_response_form_dict = product_delete_response.from_dict(product_delete_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


