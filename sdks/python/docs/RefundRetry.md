# RefundRetry


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**refund_account_details** | [**RefundRetryAccountDetails**](RefundRetryAccountDetails.md) |  | 

## Example

```python
from alexasomba_paystack.models.refund_retry import RefundRetry

# TODO update the JSON string below
json = "{}"
# create an instance of RefundRetry from a JSON string
refund_retry_instance = RefundRetry.from_json(json)
# print the JSON string representation of the object
print RefundRetry.to_json()

# convert the object into a dict
refund_retry_dict = refund_retry_instance.to_dict()
# create an instance of RefundRetry from a dict
refund_retry_form_dict = refund_retry.from_dict(refund_retry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


