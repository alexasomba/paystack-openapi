# PlanListResponseArray


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscriptions** | **List[object]** |  | 
**pages** | **List[object]** |  | 
**domain** | **str** |  | 
**name** | **str** |  | 
**plan_code** | **str** |  | 
**description** | **object** |  | 
**amount** | **int** |  | 
**interval** | **str** |  | 
**invoice_limit** | **int** |  | 
**send_invoices** | **bool** |  | 
**send_sms** | **bool** |  | 
**hosted_page** | **bool** |  | 
**hosted_page_url** | **object** |  | 
**hosted_page_summary** | **object** |  | 
**currency** | **str** |  | 
**migrate** | **bool** |  | 
**is_deleted** | **bool** |  | 
**is_archived** | **bool** |  | 
**id** | **int** |  | 
**integration** | **int** |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 
**total_subscriptions** | **int** |  | 
**active_subscriptions** | **int** |  | 
**total_subscriptions_revenue** | **int** |  | 

## Example

```python
from alexasomba_paystack.models.plan_list_response_array import PlanListResponseArray

# TODO update the JSON string below
json = "{}"
# create an instance of PlanListResponseArray from a JSON string
plan_list_response_array_instance = PlanListResponseArray.from_json(json)
# print the JSON string representation of the object
print PlanListResponseArray.to_json()

# convert the object into a dict
plan_list_response_array_dict = plan_list_response_array_instance.to_dict()
# create an instance of PlanListResponseArray from a dict
plan_list_response_array_form_dict = plan_list_response_array.from_dict(plan_list_response_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


