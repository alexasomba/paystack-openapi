# RefundFetchResponseDataCustomer


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**first_name** | **str** |  | 
**last_name** | **str** |  | 
**email** | **str** |  | 
**customer_code** | **str** |  | 
**phone** | **str** |  | 
**metadata** | **str** |  | 
**risk_action** | **str** |  | 
**international_format_phone** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.refund_fetch_response_data_customer import RefundFetchResponseDataCustomer

# TODO update the JSON string below
json = "{}"
# create an instance of RefundFetchResponseDataCustomer from a JSON string
refund_fetch_response_data_customer_instance = RefundFetchResponseDataCustomer.from_json(json)
# print the JSON string representation of the object
print RefundFetchResponseDataCustomer.to_json()

# convert the object into a dict
refund_fetch_response_data_customer_dict = refund_fetch_response_data_customer_instance.to_dict()
# create an instance of RefundFetchResponseDataCustomer from a dict
refund_fetch_response_data_customer_form_dict = refund_fetch_response_data_customer.from_dict(refund_fetch_response_data_customer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


