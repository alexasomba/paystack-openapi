# DisputeFetchResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**DisputeFetchResponseData**](DisputeFetchResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.dispute_fetch_response import DisputeFetchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DisputeFetchResponse from a JSON string
dispute_fetch_response_instance = DisputeFetchResponse.from_json(json)
# print the JSON string representation of the object
print DisputeFetchResponse.to_json()

# convert the object into a dict
dispute_fetch_response_dict = dispute_fetch_response_instance.to_dict()
# create an instance of DisputeFetchResponse from a dict
dispute_fetch_response_form_dict = dispute_fetch_response.from_dict(dispute_fetch_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


