# RefundRetryResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**RefundRetryResponseData**](RefundRetryResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.refund_retry_response import RefundRetryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RefundRetryResponse from a JSON string
refund_retry_response_instance = RefundRetryResponse.from_json(json)
# print the JSON string representation of the object
print RefundRetryResponse.to_json()

# convert the object into a dict
refund_retry_response_dict = refund_retry_response_instance.to_dict()
# create an instance of RefundRetryResponse from a dict
refund_retry_response_form_dict = refund_retry_response.from_dict(refund_retry_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


