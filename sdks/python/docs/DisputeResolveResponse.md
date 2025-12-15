# DisputeResolveResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**DisputeResolveResponseData**](DisputeResolveResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.dispute_resolve_response import DisputeResolveResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DisputeResolveResponse from a JSON string
dispute_resolve_response_instance = DisputeResolveResponse.from_json(json)
# print the JSON string representation of the object
print DisputeResolveResponse.to_json()

# convert the object into a dict
dispute_resolve_response_dict = dispute_resolve_response_instance.to_dict()
# create an instance of DisputeResolveResponse from a dict
dispute_resolve_response_form_dict = dispute_resolve_response.from_dict(dispute_resolve_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


