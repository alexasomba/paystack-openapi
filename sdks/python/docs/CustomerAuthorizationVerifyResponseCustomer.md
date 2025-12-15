# CustomerAuthorizationVerifyResponseCustomer


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | 
**email** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.customer_authorization_verify_response_customer import CustomerAuthorizationVerifyResponseCustomer

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerAuthorizationVerifyResponseCustomer from a JSON string
customer_authorization_verify_response_customer_instance = CustomerAuthorizationVerifyResponseCustomer.from_json(json)
# print the JSON string representation of the object
print CustomerAuthorizationVerifyResponseCustomer.to_json()

# convert the object into a dict
customer_authorization_verify_response_customer_dict = customer_authorization_verify_response_customer_instance.to_dict()
# create an instance of CustomerAuthorizationVerifyResponseCustomer from a dict
customer_authorization_verify_response_customer_form_dict = customer_authorization_verify_response_customer.from_dict(customer_authorization_verify_response_customer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


