# DedicatedNubanCreateResponseDataCustomer


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**first_name** | **str** |  | 
**last_name** | **str** |  | 
**email** | **str** |  | 
**customer_code** | **str** |  | 
**phone** | **str** |  | 
**metadata** | **object** |  | 
**risk_action** | **str** |  | 
**international_format_phone** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.dedicated_nuban_create_response_data_customer import DedicatedNubanCreateResponseDataCustomer

# TODO update the JSON string below
json = "{}"
# create an instance of DedicatedNubanCreateResponseDataCustomer from a JSON string
dedicated_nuban_create_response_data_customer_instance = DedicatedNubanCreateResponseDataCustomer.from_json(json)
# print the JSON string representation of the object
print DedicatedNubanCreateResponseDataCustomer.to_json()

# convert the object into a dict
dedicated_nuban_create_response_data_customer_dict = dedicated_nuban_create_response_data_customer_instance.to_dict()
# create an instance of DedicatedNubanCreateResponseDataCustomer from a dict
dedicated_nuban_create_response_data_customer_form_dict = dedicated_nuban_create_response_data_customer.from_dict(dedicated_nuban_create_response_data_customer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


