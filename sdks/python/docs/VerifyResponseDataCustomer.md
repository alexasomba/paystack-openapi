# VerifyResponseDataCustomer


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**first_name** | **str** |  | 
**last_name** | **str** |  | 
**email** | **str** |  | 
**customer_code** | **str** |  | 
**phone** | **str** |  | 
**metadata** | **object** |  | 
**risk_action** | **str** |  | 
**international_format_phone** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.verify_response_data_customer import VerifyResponseDataCustomer

# TODO update the JSON string below
json = "{}"
# create an instance of VerifyResponseDataCustomer from a JSON string
verify_response_data_customer_instance = VerifyResponseDataCustomer.from_json(json)
# print the JSON string representation of the object
print VerifyResponseDataCustomer.to_json()

# convert the object into a dict
verify_response_data_customer_dict = verify_response_data_customer_instance.to_dict()
# create an instance of VerifyResponseDataCustomer from a dict
verify_response_data_customer_form_dict = verify_response_data_customer.from_dict(verify_response_data_customer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


