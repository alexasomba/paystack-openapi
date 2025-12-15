# RefundListResponseMeta


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **int** |  | 
**skipped** | **int** |  | 
**per_page** | **str** |  | 
**page** | **int** |  | 
**page_count** | **int** |  | 
**failed_refund_count** | **int** |  | 

## Example

```python
from alexasomba_paystack.models.refund_list_response_meta import RefundListResponseMeta

# TODO update the JSON string below
json = "{}"
# create an instance of RefundListResponseMeta from a JSON string
refund_list_response_meta_instance = RefundListResponseMeta.from_json(json)
# print the JSON string representation of the object
print RefundListResponseMeta.to_json()

# convert the object into a dict
refund_list_response_meta_dict = refund_list_response_meta_instance.to_dict()
# create an instance of RefundListResponseMeta from a dict
refund_list_response_meta_form_dict = refund_list_response_meta.from_dict(refund_list_response_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


