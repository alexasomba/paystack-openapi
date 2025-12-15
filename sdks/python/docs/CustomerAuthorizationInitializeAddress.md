# CustomerAuthorizationInitializeAddress


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**street** | **str** | The customer&#39;s street | 
**city** | **str** | The customer&#39;s city | 
**state** | **str** | The customer&#39;s state | 

## Example

```python
from alexasomba_paystack.models.customer_authorization_initialize_address import CustomerAuthorizationInitializeAddress

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerAuthorizationInitializeAddress from a JSON string
customer_authorization_initialize_address_instance = CustomerAuthorizationInitializeAddress.from_json(json)
# print the JSON string representation of the object
print CustomerAuthorizationInitializeAddress.to_json()

# convert the object into a dict
customer_authorization_initialize_address_dict = customer_authorization_initialize_address_instance.to_dict()
# create an instance of CustomerAuthorizationInitializeAddress from a dict
customer_authorization_initialize_address_form_dict = customer_authorization_initialize_address.from_dict(customer_authorization_initialize_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


