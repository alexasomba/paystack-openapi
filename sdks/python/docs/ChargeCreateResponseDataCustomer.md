# ChargeCreateResponseDataCustomer


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
from alexasomba_paystack.models.charge_create_response_data_customer import ChargeCreateResponseDataCustomer

# TODO update the JSON string below
json = "{}"
# create an instance of ChargeCreateResponseDataCustomer from a JSON string
charge_create_response_data_customer_instance = ChargeCreateResponseDataCustomer.from_json(json)
# print the JSON string representation of the object
print ChargeCreateResponseDataCustomer.to_json()

# convert the object into a dict
charge_create_response_data_customer_dict = charge_create_response_data_customer_instance.to_dict()
# create an instance of ChargeCreateResponseDataCustomer from a dict
charge_create_response_data_customer_form_dict = charge_create_response_data_customer.from_dict(charge_create_response_data_customer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


