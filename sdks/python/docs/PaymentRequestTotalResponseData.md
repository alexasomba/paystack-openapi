# PaymentRequestTotalResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pending** | [**List[PaymentRequestPendingArray]**](PaymentRequestPendingArray.md) |  | 
**successful** | [**List[PaymentRequestSuccessfulArray]**](PaymentRequestSuccessfulArray.md) |  | 
**total** | [**List[PaymentRequestTotalArray]**](PaymentRequestTotalArray.md) |  | 

## Example

```python
from alexasomba_paystack.models.payment_request_total_response_data import PaymentRequestTotalResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentRequestTotalResponseData from a JSON string
payment_request_total_response_data_instance = PaymentRequestTotalResponseData.from_json(json)
# print the JSON string representation of the object
print PaymentRequestTotalResponseData.to_json()

# convert the object into a dict
payment_request_total_response_data_dict = payment_request_total_response_data_instance.to_dict()
# create an instance of PaymentRequestTotalResponseData from a dict
payment_request_total_response_data_form_dict = payment_request_total_response_data.from_dict(payment_request_total_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


