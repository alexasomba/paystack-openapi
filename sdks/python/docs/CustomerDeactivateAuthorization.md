# CustomerDeactivateAuthorization


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_code** | **str** | Authorization code to be deactivated | 

## Example

```python
from alexasomba_paystack.models.customer_deactivate_authorization import CustomerDeactivateAuthorization

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerDeactivateAuthorization from a JSON string
customer_deactivate_authorization_instance = CustomerDeactivateAuthorization.from_json(json)
# print the JSON string representation of the object
print CustomerDeactivateAuthorization.to_json()

# convert the object into a dict
customer_deactivate_authorization_dict = customer_deactivate_authorization_instance.to_dict()
# create an instance of CustomerDeactivateAuthorization from a dict
customer_deactivate_authorization_form_dict = customer_deactivate_authorization.from_dict(customer_deactivate_authorization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


