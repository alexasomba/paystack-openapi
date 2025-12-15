# RefundListResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**List[RefundListResponseArray]**](RefundListResponseArray.md) |  | 
**meta** | [**RefundListResponseMeta**](RefundListResponseMeta.md) |  | 

## Example

```python
from alexasomba_paystack.models.refund_list_response import RefundListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RefundListResponse from a JSON string
refund_list_response_instance = RefundListResponse.from_json(json)
# print the JSON string representation of the object
print RefundListResponse.to_json()

# convert the object into a dict
refund_list_response_dict = refund_list_response_instance.to_dict()
# create an instance of RefundListResponse from a dict
refund_list_response_form_dict = refund_list_response.from_dict(refund_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


