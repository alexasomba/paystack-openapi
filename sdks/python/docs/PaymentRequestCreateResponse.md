# PaymentRequestCreateResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**PaymentRequestCreateResponseData**](PaymentRequestCreateResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.payment_request_create_response import PaymentRequestCreateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentRequestCreateResponse from a JSON string
payment_request_create_response_instance = PaymentRequestCreateResponse.from_json(json)
# print the JSON string representation of the object
print PaymentRequestCreateResponse.to_json()

# convert the object into a dict
payment_request_create_response_dict = payment_request_create_response_instance.to_dict()
# create an instance of PaymentRequestCreateResponse from a dict
payment_request_create_response_form_dict = payment_request_create_response.from_dict(payment_request_create_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


