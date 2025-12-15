# PaymentRequestFinalizeResponseDataDiscount


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**amount** | **int** |  | 

## Example

```python
from alexasomba_paystack.models.payment_request_finalize_response_data_discount import PaymentRequestFinalizeResponseDataDiscount

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentRequestFinalizeResponseDataDiscount from a JSON string
payment_request_finalize_response_data_discount_instance = PaymentRequestFinalizeResponseDataDiscount.from_json(json)
# print the JSON string representation of the object
print PaymentRequestFinalizeResponseDataDiscount.to_json()

# convert the object into a dict
payment_request_finalize_response_data_discount_dict = payment_request_finalize_response_data_discount_instance.to_dict()
# create an instance of PaymentRequestFinalizeResponseDataDiscount from a dict
payment_request_finalize_response_data_discount_form_dict = payment_request_finalize_response_data_discount.from_dict(payment_request_finalize_response_data_discount_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


