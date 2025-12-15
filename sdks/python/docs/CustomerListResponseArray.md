# CustomerListResponseArray


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integration** | **int** |  | 
**first_name** | **str** |  | 
**last_name** | **str** |  | 
**email** | **str** |  | 
**phone** | **str** |  | 
**metadata** | **object** |  | 
**domain** | **str** |  | 
**customer_code** | **str** |  | 
**risk_action** | **str** |  | 
**id** | **int** |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.customer_list_response_array import CustomerListResponseArray

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerListResponseArray from a JSON string
customer_list_response_array_instance = CustomerListResponseArray.from_json(json)
# print the JSON string representation of the object
print CustomerListResponseArray.to_json()

# convert the object into a dict
customer_list_response_array_dict = customer_list_response_array_instance.to_dict()
# create an instance of CustomerListResponseArray from a dict
customer_list_response_array_form_dict = customer_list_response_array.from_dict(customer_list_response_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


