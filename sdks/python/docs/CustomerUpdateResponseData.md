# CustomerUpdateResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **str** |  | 
**last_name** | **str** |  | 
**email** | **str** |  | 
**phone** | **str** |  | 
**metadata** | **object** |  | 
**domain** | **str** |  | 
**customer_code** | **str** |  | 
**risk_action** | **str** |  | 
**id** | **int** |  | 
**integration** | **int** |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 
**identified** | **bool** |  | 
**identifications** | **object** |  | 

## Example

```python
from alexasomba_paystack.models.customer_update_response_data import CustomerUpdateResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerUpdateResponseData from a JSON string
customer_update_response_data_instance = CustomerUpdateResponseData.from_json(json)
# print the JSON string representation of the object
print CustomerUpdateResponseData.to_json()

# convert the object into a dict
customer_update_response_data_dict = customer_update_response_data_instance.to_dict()
# create an instance of CustomerUpdateResponseData from a dict
customer_update_response_data_form_dict = customer_update_response_data.from_dict(customer_update_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


