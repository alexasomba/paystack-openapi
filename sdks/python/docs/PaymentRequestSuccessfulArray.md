# PaymentRequestSuccessfulArray


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** |  | 
**amount** | **int** |  | 

## Example

```python
from alexasomba_paystack.models.payment_request_successful_array import PaymentRequestSuccessfulArray

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentRequestSuccessfulArray from a JSON string
payment_request_successful_array_instance = PaymentRequestSuccessfulArray.from_json(json)
# print the JSON string representation of the object
print PaymentRequestSuccessfulArray.to_json()

# convert the object into a dict
payment_request_successful_array_dict = payment_request_successful_array_instance.to_dict()
# create an instance of PaymentRequestSuccessfulArray from a dict
payment_request_successful_array_form_dict = payment_request_successful_array.from_dict(payment_request_successful_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


