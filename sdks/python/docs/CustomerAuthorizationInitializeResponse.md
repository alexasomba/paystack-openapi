# CustomerAuthorizationInitializeResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**CustomerAuthorizationInitializeResponseData**](CustomerAuthorizationInitializeResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.customer_authorization_initialize_response import CustomerAuthorizationInitializeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerAuthorizationInitializeResponse from a JSON string
customer_authorization_initialize_response_instance = CustomerAuthorizationInitializeResponse.from_json(json)
# print the JSON string representation of the object
print CustomerAuthorizationInitializeResponse.to_json()

# convert the object into a dict
customer_authorization_initialize_response_dict = customer_authorization_initialize_response_instance.to_dict()
# create an instance of CustomerAuthorizationInitializeResponse from a dict
customer_authorization_initialize_response_form_dict = customer_authorization_initialize_response.from_dict(customer_authorization_initialize_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


