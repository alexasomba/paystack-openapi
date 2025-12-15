# DisputeResolveResponseDataMessage


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dispute** | **int** |  | 
**sender** | **str** |  | 
**body** | **str** |  | 
**id** | **int** |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.dispute_resolve_response_data_message import DisputeResolveResponseDataMessage

# TODO update the JSON string below
json = "{}"
# create an instance of DisputeResolveResponseDataMessage from a JSON string
dispute_resolve_response_data_message_instance = DisputeResolveResponseDataMessage.from_json(json)
# print the JSON string representation of the object
print DisputeResolveResponseDataMessage.to_json()

# convert the object into a dict
dispute_resolve_response_data_message_dict = dispute_resolve_response_data_message_instance.to_dict()
# create an instance of DisputeResolveResponseDataMessage from a dict
dispute_resolve_response_data_message_form_dict = dispute_resolve_response_data_message.from_dict(dispute_resolve_response_data_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


