# RefundFetchResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**RefundFetchResponseData**](RefundFetchResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.refund_fetch_response import RefundFetchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RefundFetchResponse from a JSON string
refund_fetch_response_instance = RefundFetchResponse.from_json(json)
# print the JSON string representation of the object
print RefundFetchResponse.to_json()

# convert the object into a dict
refund_fetch_response_dict = refund_fetch_response_instance.to_dict()
# create an instance of RefundFetchResponse from a dict
refund_fetch_response_form_dict = refund_fetch_response.from_dict(refund_fetch_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


