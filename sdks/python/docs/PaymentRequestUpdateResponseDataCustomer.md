# PaymentRequestUpdateResponseDataCustomer


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**first_name** | **str** |  | 
**last_name** | **str** |  | 
**email** | **str** |  | 
**customer_code** | **str** |  | 
**phone** | **str** |  | 
**metadata** | [**CustomerCreateResponseDataMetadata**](CustomerCreateResponseDataMetadata.md) |  | 
**risk_action** | **str** |  | 
**international_format_phone** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.payment_request_update_response_data_customer import PaymentRequestUpdateResponseDataCustomer

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentRequestUpdateResponseDataCustomer from a JSON string
payment_request_update_response_data_customer_instance = PaymentRequestUpdateResponseDataCustomer.from_json(json)
# print the JSON string representation of the object
print PaymentRequestUpdateResponseDataCustomer.to_json()

# convert the object into a dict
payment_request_update_response_data_customer_dict = payment_request_update_response_data_customer_instance.to_dict()
# create an instance of PaymentRequestUpdateResponseDataCustomer from a dict
payment_request_update_response_data_customer_form_dict = payment_request_update_response_data_customer.from_dict(payment_request_update_response_data_customer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


