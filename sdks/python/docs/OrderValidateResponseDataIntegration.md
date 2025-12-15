# OrderValidateResponseDataIntegration


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** |  | 
**name** | **str** |  | 
**logo** | **str** |  | 
**allowed_currencies** | **List[object]** |  | 

## Example

```python
from alexasomba_paystack.models.order_validate_response_data_integration import OrderValidateResponseDataIntegration

# TODO update the JSON string below
json = "{}"
# create an instance of OrderValidateResponseDataIntegration from a JSON string
order_validate_response_data_integration_instance = OrderValidateResponseDataIntegration.from_json(json)
# print the JSON string representation of the object
print OrderValidateResponseDataIntegration.to_json()

# convert the object into a dict
order_validate_response_data_integration_dict = order_validate_response_data_integration_instance.to_dict()
# create an instance of OrderValidateResponseDataIntegration from a dict
order_validate_response_data_integration_form_dict = order_validate_response_data_integration.from_dict(order_validate_response_data_integration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


