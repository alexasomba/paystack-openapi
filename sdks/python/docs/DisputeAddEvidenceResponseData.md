# DisputeAddEvidenceResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_email** | **str** |  | 
**customer_name** | **str** |  | 
**customer_phone** | **str** |  | 
**service_details** | **str** |  | 
**delivery_address** | **str** |  | 
**delivery_date** | **str** |  | 
**dispute** | **int** |  | 
**id** | **int** |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.dispute_add_evidence_response_data import DisputeAddEvidenceResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of DisputeAddEvidenceResponseData from a JSON string
dispute_add_evidence_response_data_instance = DisputeAddEvidenceResponseData.from_json(json)
# print the JSON string representation of the object
print DisputeAddEvidenceResponseData.to_json()

# convert the object into a dict
dispute_add_evidence_response_data_dict = dispute_add_evidence_response_data_instance.to_dict()
# create an instance of DisputeAddEvidenceResponseData from a dict
dispute_add_evidence_response_data_form_dict = dispute_add_evidence_response_data.from_dict(dispute_add_evidence_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


