# DisputeEvidence


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_email** | **str** | Customer email | 
**customer_name** | **str** | Customer name | 
**customer_phone** | **str** | Customer mobile number | 
**service_details** | **str** | Details of service offered | 
**delivery_address** | **str** | Delivery address | [optional] 
**delivery_date** | **datetime** | ISO 8601 representation of delivery date (YYYY-MM-DD) | [optional] 

## Example

```python
from alexasomba_paystack.models.dispute_evidence import DisputeEvidence

# TODO update the JSON string below
json = "{}"
# create an instance of DisputeEvidence from a JSON string
dispute_evidence_instance = DisputeEvidence.from_json(json)
# print the JSON string representation of the object
print DisputeEvidence.to_json()

# convert the object into a dict
dispute_evidence_dict = dispute_evidence_instance.to_dict()
# create an instance of DisputeEvidence from a dict
dispute_evidence_form_dict = dispute_evidence.from_dict(dispute_evidence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


