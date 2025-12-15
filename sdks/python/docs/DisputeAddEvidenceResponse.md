# DisputeAddEvidenceResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**DisputeAddEvidenceResponseData**](DisputeAddEvidenceResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.dispute_add_evidence_response import DisputeAddEvidenceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DisputeAddEvidenceResponse from a JSON string
dispute_add_evidence_response_instance = DisputeAddEvidenceResponse.from_json(json)
# print the JSON string representation of the object
print DisputeAddEvidenceResponse.to_json()

# convert the object into a dict
dispute_add_evidence_response_dict = dispute_add_evidence_response_instance.to_dict()
# create an instance of DisputeAddEvidenceResponse from a dict
dispute_add_evidence_response_form_dict = dispute_add_evidence_response.from_dict(dispute_add_evidence_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


