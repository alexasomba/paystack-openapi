# CustomerCreate


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Customer&#39;s email address | 
**first_name** | **str** | Customer&#39;s first name | [optional] 
**last_name** | **str** | Customer&#39;s last name | [optional] 
**phone** | **str** | Customer&#39;s phone number | [optional] 
**metadata** | **str** | Stringified JSON object of custom data | [optional] 

## Example

```python
from alexasomba_paystack.models.customer_create import CustomerCreate

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerCreate from a JSON string
customer_create_instance = CustomerCreate.from_json(json)
# print the JSON string representation of the object
print CustomerCreate.to_json()

# convert the object into a dict
customer_create_dict = customer_create_instance.to_dict()
# create an instance of CustomerCreate from a dict
customer_create_form_dict = customer_create.from_dict(customer_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


