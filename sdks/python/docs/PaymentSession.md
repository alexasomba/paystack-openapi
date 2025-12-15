# PaymentSession


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timeout** | **int** | Time in seconds before a transaction becomes invalid | 

## Example

```python
from alexasomba_paystack.models.payment_session import PaymentSession

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentSession from a JSON string
payment_session_instance = PaymentSession.from_json(json)
# print the JSON string representation of the object
print PaymentSession.to_json()

# convert the object into a dict
payment_session_dict = payment_session_instance.to_dict()
# create an instance of PaymentSession from a dict
payment_session_form_dict = payment_session.from_dict(payment_session_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


