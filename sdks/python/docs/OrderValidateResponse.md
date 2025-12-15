# OrderValidateResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**OrderValidateResponseData**](OrderValidateResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.order_validate_response import OrderValidateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OrderValidateResponse from a JSON string
order_validate_response_instance = OrderValidateResponse.from_json(json)
# print the JSON string representation of the object
print OrderValidateResponse.to_json()

# convert the object into a dict
order_validate_response_dict = order_validate_response_instance.to_dict()
# create an instance of OrderValidateResponse from a dict
order_validate_response_form_dict = order_validate_response.from_dict(order_validate_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


