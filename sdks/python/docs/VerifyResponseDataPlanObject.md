# VerifyResponseDataPlanObject


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**plan_code** | **str** |  | [optional] 
**description** | **object** |  | [optional] 
**amount** | **int** |  | [optional] 
**interval** | **str** |  | [optional] 
**send_invoices** | **bool** |  | [optional] 
**send_sms** | **bool** |  | [optional] 
**currency** | **str** |  | [optional] 

## Example

```python
from alexasomba_paystack.models.verify_response_data_plan_object import VerifyResponseDataPlanObject

# TODO update the JSON string below
json = "{}"
# create an instance of VerifyResponseDataPlanObject from a JSON string
verify_response_data_plan_object_instance = VerifyResponseDataPlanObject.from_json(json)
# print the JSON string representation of the object
print VerifyResponseDataPlanObject.to_json()

# convert the object into a dict
verify_response_data_plan_object_dict = verify_response_data_plan_object_instance.to_dict()
# create an instance of VerifyResponseDataPlanObject from a dict
verify_response_data_plan_object_form_dict = verify_response_data_plan_object.from_dict(verify_response_data_plan_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


