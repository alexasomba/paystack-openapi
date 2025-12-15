# DisputeListResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**List[DisputeListResponseArray]**](DisputeListResponseArray.md) |  | 
**meta** | [**SubaccountListResponseMeta**](SubaccountListResponseMeta.md) |  | 

## Example

```python
from alexasomba_paystack.models.dispute_list_response import DisputeListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DisputeListResponse from a JSON string
dispute_list_response_instance = DisputeListResponse.from_json(json)
# print the JSON string representation of the object
print DisputeListResponse.to_json()

# convert the object into a dict
dispute_list_response_dict = dispute_list_response_instance.to_dict()
# create an instance of DisputeListResponse from a dict
dispute_list_response_form_dict = dispute_list_response.from_dict(dispute_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


