# DisputeMessagesArray


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sender** | **str** |  | 
**body** | **str** |  | 
**created_at** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.dispute_messages_array import DisputeMessagesArray

# TODO update the JSON string below
json = "{}"
# create an instance of DisputeMessagesArray from a JSON string
dispute_messages_array_instance = DisputeMessagesArray.from_json(json)
# print the JSON string representation of the object
print DisputeMessagesArray.to_json()

# convert the object into a dict
dispute_messages_array_dict = dispute_messages_array_instance.to_dict()
# create an instance of DisputeMessagesArray from a dict
dispute_messages_array_form_dict = dispute_messages_array.from_dict(dispute_messages_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


