# ProductCreateResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**ProductCreateResponseData**](ProductCreateResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.product_create_response import ProductCreateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ProductCreateResponse from a JSON string
product_create_response_instance = ProductCreateResponse.from_json(json)
# print the JSON string representation of the object
print ProductCreateResponse.to_json()

# convert the object into a dict
product_create_response_dict = product_create_response_instance.to_dict()
# create an instance of ProductCreateResponse from a dict
product_create_response_form_dict = product_create_response.from_dict(product_create_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


