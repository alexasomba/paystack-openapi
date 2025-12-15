# BulkChargeResumeResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.bulk_charge_resume_response import BulkChargeResumeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BulkChargeResumeResponse from a JSON string
bulk_charge_resume_response_instance = BulkChargeResumeResponse.from_json(json)
# print the JSON string representation of the object
print BulkChargeResumeResponse.to_json()

# convert the object into a dict
bulk_charge_resume_response_dict = bulk_charge_resume_response_instance.to_dict()
# create an instance of BulkChargeResumeResponse from a dict
bulk_charge_resume_response_form_dict = bulk_charge_resume_response.from_dict(bulk_charge_resume_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


