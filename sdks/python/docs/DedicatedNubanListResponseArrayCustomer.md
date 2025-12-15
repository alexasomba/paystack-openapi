# DedicatedNubanListResponseArrayCustomer


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**customer_code** | **str** |  | [optional] 
**phone** | **str** |  | [optional] 
**risk_action** | **str** |  | [optional] 
**international_format_phone** | **str** |  | [optional] 

## Example

```python
from alexasomba_paystack.models.dedicated_nuban_list_response_array_customer import DedicatedNubanListResponseArrayCustomer

# TODO update the JSON string below
json = "{}"
# create an instance of DedicatedNubanListResponseArrayCustomer from a JSON string
dedicated_nuban_list_response_array_customer_instance = DedicatedNubanListResponseArrayCustomer.from_json(json)
# print the JSON string representation of the object
print DedicatedNubanListResponseArrayCustomer.to_json()

# convert the object into a dict
dedicated_nuban_list_response_array_customer_dict = dedicated_nuban_list_response_array_customer_instance.to_dict()
# create an instance of DedicatedNubanListResponseArrayCustomer from a dict
dedicated_nuban_list_response_array_customer_form_dict = dedicated_nuban_list_response_array_customer.from_dict(dedicated_nuban_list_response_array_customer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


