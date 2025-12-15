# DisputeUpdateResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**DisputeFetchResponseData**](DisputeFetchResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.dispute_update_response import DisputeUpdateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DisputeUpdateResponse from a JSON string
dispute_update_response_instance = DisputeUpdateResponse.from_json(json)
# print the JSON string representation of the object
print DisputeUpdateResponse.to_json()

# convert the object into a dict
dispute_update_response_dict = dispute_update_response_instance.to_dict()
# create an instance of DisputeUpdateResponse from a dict
dispute_update_response_form_dict = dispute_update_response.from_dict(dispute_update_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


