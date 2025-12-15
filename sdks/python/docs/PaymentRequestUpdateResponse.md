# PaymentRequestUpdateResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**PaymentRequestUpdateResponseData**](PaymentRequestUpdateResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.payment_request_update_response import PaymentRequestUpdateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentRequestUpdateResponse from a JSON string
payment_request_update_response_instance = PaymentRequestUpdateResponse.from_json(json)
# print the JSON string representation of the object
print PaymentRequestUpdateResponse.to_json()

# convert the object into a dict
payment_request_update_response_dict = payment_request_update_response_instance.to_dict()
# create an instance of PaymentRequestUpdateResponse from a dict
payment_request_update_response_form_dict = payment_request_update_response.from_dict(payment_request_update_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


