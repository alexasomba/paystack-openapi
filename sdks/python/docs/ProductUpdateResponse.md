# ProductUpdateResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**ProductUpdateResponseData**](ProductUpdateResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.product_update_response import ProductUpdateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ProductUpdateResponse from a JSON string
product_update_response_instance = ProductUpdateResponse.from_json(json)
# print the JSON string representation of the object
print ProductUpdateResponse.to_json()

# convert the object into a dict
product_update_response_dict = product_update_response_instance.to_dict()
# create an instance of ProductUpdateResponse from a dict
product_update_response_form_dict = product_update_response.from_dict(product_update_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


