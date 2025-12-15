# PlanCreateResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** |  | 
**name** | **str** |  | 
**amount** | **int** |  | 
**interval** | **str** |  | 
**integration** | **int** |  | 
**domain** | **str** |  | 
**plan_code** | **str** |  | 
**invoice_limit** | **int** |  | 
**send_invoices** | **bool** |  | 
**send_sms** | **bool** |  | 
**hosted_page** | **bool** |  | 
**migrate** | **bool** |  | 
**is_archived** | **bool** |  | 
**id** | **int** |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.plan_create_response_data import PlanCreateResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of PlanCreateResponseData from a JSON string
plan_create_response_data_instance = PlanCreateResponseData.from_json(json)
# print the JSON string representation of the object
print PlanCreateResponseData.to_json()

# convert the object into a dict
plan_create_response_data_dict = plan_create_response_data_instance.to_dict()
# create an instance of PlanCreateResponseData from a dict
plan_create_response_data_form_dict = plan_create_response_data.from_dict(plan_create_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


