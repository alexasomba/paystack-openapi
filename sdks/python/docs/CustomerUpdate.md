# CustomerUpdate


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **str** | Customer&#39;s first name | [optional] 
**last_name** | **str** | Customer&#39;s last name | [optional] 
**phone** | **str** | Customer&#39;s phone number | [optional] 
**metadata** | **str** | Stringified JSON object of custom data | [optional] 

## Example

```python
from alexasomba_paystack.models.customer_update import CustomerUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerUpdate from a JSON string
customer_update_instance = CustomerUpdate.from_json(json)
# print the JSON string representation of the object
print CustomerUpdate.to_json()

# convert the object into a dict
customer_update_dict = customer_update_instance.to_dict()
# create an instance of CustomerUpdate from a dict
customer_update_form_dict = customer_update.from_dict(customer_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


