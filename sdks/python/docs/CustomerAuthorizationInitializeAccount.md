# CustomerAuthorizationInitializeAccount


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number** | **str** | The customer&#39;s account number | 
**bank_code** | **str** | The code representing the customer&#39;s bank | 

## Example

```python
from alexasomba_paystack.models.customer_authorization_initialize_account import CustomerAuthorizationInitializeAccount

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerAuthorizationInitializeAccount from a JSON string
customer_authorization_initialize_account_instance = CustomerAuthorizationInitializeAccount.from_json(json)
# print the JSON string representation of the object
print CustomerAuthorizationInitializeAccount.to_json()

# convert the object into a dict
customer_authorization_initialize_account_dict = customer_authorization_initialize_account_instance.to_dict()
# create an instance of CustomerAuthorizationInitializeAccount from a dict
customer_authorization_initialize_account_form_dict = customer_authorization_initialize_account.from_dict(customer_authorization_initialize_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


