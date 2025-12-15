# DisputeHistoryArray


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**by** | **str** |  | 
**created_at** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.dispute_history_array import DisputeHistoryArray

# TODO update the JSON string below
json = "{}"
# create an instance of DisputeHistoryArray from a JSON string
dispute_history_array_instance = DisputeHistoryArray.from_json(json)
# print the JSON string representation of the object
print DisputeHistoryArray.to_json()

# convert the object into a dict
dispute_history_array_dict = dispute_history_array_instance.to_dict()
# create an instance of DisputeHistoryArray from a dict
dispute_history_array_form_dict = dispute_history_array.from_dict(dispute_history_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


