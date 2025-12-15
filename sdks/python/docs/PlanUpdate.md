# PlanUpdate


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of plan | [optional] 
**amount** | **int** | Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR | [optional] 
**interval** | **str** | Payment interval | [optional] 
**description** | **bool** | A description for this plan | [optional] 
**send_invoices** | **bool** | Set to false if you don&#39;t want invoices to be sent to your customers | [optional] 
**send_sms** | **bool** | Set to false if you don&#39;t want text messages to be sent to your customers | [optional] 
**currency** | **str** | Currency in which amount is set. Allowed values are NGN, GHS, ZAR or USD | [optional] 
**invoice_limit** | **int** | Number of invoices to raise during subscription to this plan.  Can be overridden by specifying an invoice_limit while subscribing. | [optional] 

## Example

```python
from alexasomba_paystack.models.plan_update import PlanUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of PlanUpdate from a JSON string
plan_update_instance = PlanUpdate.from_json(json)
# print the JSON string representation of the object
print PlanUpdate.to_json()

# convert the object into a dict
plan_update_dict = plan_update_instance.to_dict()
# create an instance of PlanUpdate from a dict
plan_update_form_dict = plan_update.from_dict(plan_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


