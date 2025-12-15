# TransactionTimelineResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | **object** |  | 

## Example

```python
from alexasomba_paystack.models.transaction_timeline_response import TransactionTimelineResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionTimelineResponse from a JSON string
transaction_timeline_response_instance = TransactionTimelineResponse.from_json(json)
# print the JSON string representation of the object
print TransactionTimelineResponse.to_json()

# convert the object into a dict
transaction_timeline_response_dict = transaction_timeline_response_instance.to_dict()
# create an instance of TransactionTimelineResponse from a dict
transaction_timeline_response_form_dict = transaction_timeline_response.from_dict(transaction_timeline_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


