# PaymentRequestVerifyResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**PaymentRequestVerifyResponseData**](PaymentRequestVerifyResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.payment_request_verify_response import PaymentRequestVerifyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentRequestVerifyResponse from a JSON string
payment_request_verify_response_instance = PaymentRequestVerifyResponse.from_json(json)
# print the JSON string representation of the object
print PaymentRequestVerifyResponse.to_json()

# convert the object into a dict
payment_request_verify_response_dict = payment_request_verify_response_instance.to_dict()
# create an instance of PaymentRequestVerifyResponse from a dict
payment_request_verify_response_form_dict = payment_request_verify_response.from_dict(payment_request_verify_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


