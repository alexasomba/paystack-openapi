# OrderCreateResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**OrderCreateResponseData**](OrderCreateResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.order_create_response import OrderCreateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OrderCreateResponse from a JSON string
order_create_response_instance = OrderCreateResponse.from_json(json)
# print the JSON string representation of the object
print OrderCreateResponse.to_json()

# convert the object into a dict
order_create_response_dict = order_create_response_instance.to_dict()
# create an instance of OrderCreateResponse from a dict
order_create_response_form_dict = order_create_response.from_dict(order_create_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


