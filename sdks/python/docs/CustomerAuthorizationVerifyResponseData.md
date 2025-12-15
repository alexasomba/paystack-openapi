# CustomerAuthorizationVerifyResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_code** | **str** |  | 
**channel** | **str** |  | 
**bank** | **str** |  | 
**active** | **bool** |  | 
**customer** | [**CustomerAuthorizationVerifyResponseCustomer**](CustomerAuthorizationVerifyResponseCustomer.md) |  | 

## Example

```python
from alexasomba_paystack.models.customer_authorization_verify_response_data import CustomerAuthorizationVerifyResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerAuthorizationVerifyResponseData from a JSON string
customer_authorization_verify_response_data_instance = CustomerAuthorizationVerifyResponseData.from_json(json)
# print the JSON string representation of the object
print CustomerAuthorizationVerifyResponseData.to_json()

# convert the object into a dict
customer_authorization_verify_response_data_dict = customer_authorization_verify_response_data_instance.to_dict()
# create an instance of CustomerAuthorizationVerifyResponseData from a dict
customer_authorization_verify_response_data_form_dict = customer_authorization_verify_response_data.from_dict(customer_authorization_verify_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


