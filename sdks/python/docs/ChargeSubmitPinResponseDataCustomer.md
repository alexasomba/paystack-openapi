# ChargeSubmitPinResponseDataCustomer


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **str** |  | 
**last_name** | **str** |  | 
**email** | **str** |  | 
**customer_code** | **str** |  | 
**phone** | **str** |  | 
**risk_action** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.charge_submit_pin_response_data_customer import ChargeSubmitPinResponseDataCustomer

# TODO update the JSON string below
json = "{}"
# create an instance of ChargeSubmitPinResponseDataCustomer from a JSON string
charge_submit_pin_response_data_customer_instance = ChargeSubmitPinResponseDataCustomer.from_json(json)
# print the JSON string representation of the object
print ChargeSubmitPinResponseDataCustomer.to_json()

# convert the object into a dict
charge_submit_pin_response_data_customer_dict = charge_submit_pin_response_data_customer_instance.to_dict()
# create an instance of ChargeSubmitPinResponseDataCustomer from a dict
charge_submit_pin_response_data_customer_form_dict = charge_submit_pin_response_data_customer.from_dict(charge_submit_pin_response_data_customer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


