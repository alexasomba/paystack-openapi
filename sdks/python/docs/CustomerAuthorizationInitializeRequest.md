# CustomerAuthorizationInitializeRequest


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Customer&#39;s email address | 
**channel** | **str** | direct_debit is the only supported option for now | 
**callback_url** | **str** | Fully qualified url (e.g. https://example.com/) to redirect your customer to | [optional] 
**account** | [**CustomerAuthorizationInitializeAccount**](CustomerAuthorizationInitializeAccount.md) |  | [optional] 
**address** | [**CustomerAuthorizationInitializeAddress**](CustomerAuthorizationInitializeAddress.md) |  | [optional] 

## Example

```python
from alexasomba_paystack.models.customer_authorization_initialize_request import CustomerAuthorizationInitializeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerAuthorizationInitializeRequest from a JSON string
customer_authorization_initialize_request_instance = CustomerAuthorizationInitializeRequest.from_json(json)
# print the JSON string representation of the object
print CustomerAuthorizationInitializeRequest.to_json()

# convert the object into a dict
customer_authorization_initialize_request_dict = customer_authorization_initialize_request_instance.to_dict()
# create an instance of CustomerAuthorizationInitializeRequest from a dict
customer_authorization_initialize_request_form_dict = customer_authorization_initialize_request.from_dict(customer_authorization_initialize_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


