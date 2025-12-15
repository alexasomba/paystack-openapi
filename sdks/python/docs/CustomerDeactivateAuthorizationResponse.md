# CustomerDeactivateAuthorizationResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.customer_deactivate_authorization_response import CustomerDeactivateAuthorizationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerDeactivateAuthorizationResponse from a JSON string
customer_deactivate_authorization_response_instance = CustomerDeactivateAuthorizationResponse.from_json(json)
# print the JSON string representation of the object
print CustomerDeactivateAuthorizationResponse.to_json()

# convert the object into a dict
customer_deactivate_authorization_response_dict = customer_deactivate_authorization_response_instance.to_dict()
# create an instance of CustomerDeactivateAuthorizationResponse from a dict
customer_deactivate_authorization_response_form_dict = customer_deactivate_authorization_response.from_dict(customer_deactivate_authorization_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


