# PaymentRequestNotificationsArray


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sent_at** | **str** |  | 
**channel** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.payment_request_notifications_array import PaymentRequestNotificationsArray

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentRequestNotificationsArray from a JSON string
payment_request_notifications_array_instance = PaymentRequestNotificationsArray.from_json(json)
# print the JSON string representation of the object
print PaymentRequestNotificationsArray.to_json()

# convert the object into a dict
payment_request_notifications_array_dict = payment_request_notifications_array_instance.to_dict()
# create an instance of PaymentRequestNotificationsArray from a dict
payment_request_notifications_array_form_dict = payment_request_notifications_array.from_dict(payment_request_notifications_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


