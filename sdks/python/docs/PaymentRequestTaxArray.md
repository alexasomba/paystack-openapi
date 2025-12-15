# PaymentRequestTaxArray


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**amount** | **int** |  | 

## Example

```python
from alexasomba_paystack.models.payment_request_tax_array import PaymentRequestTaxArray

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentRequestTaxArray from a JSON string
payment_request_tax_array_instance = PaymentRequestTaxArray.from_json(json)
# print the JSON string representation of the object
print PaymentRequestTaxArray.to_json()

# convert the object into a dict
payment_request_tax_array_dict = payment_request_tax_array_instance.to_dict()
# create an instance of PaymentRequestTaxArray from a dict
payment_request_tax_array_form_dict = payment_request_tax_array.from_dict(payment_request_tax_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


