# ProductFetchResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**ProductFetchResponseData**](ProductFetchResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.product_fetch_response import ProductFetchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ProductFetchResponse from a JSON string
product_fetch_response_instance = ProductFetchResponse.from_json(json)
# print the JSON string representation of the object
print ProductFetchResponse.to_json()

# convert the object into a dict
product_fetch_response_dict = product_fetch_response_instance.to_dict()
# create an instance of ProductFetchResponse from a dict
product_fetch_response_form_dict = product_fetch_response.from_dict(product_fetch_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


