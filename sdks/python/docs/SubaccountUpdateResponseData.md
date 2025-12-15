# SubaccountUpdateResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **str** |  | 
**subaccount_code** | **str** |  | 
**account_name** | **str** |  | [optional] 
**business_name** | **str** |  | 
**description** | **str** |  | 
**primary_contact_name** | **str** |  | 
**primary_contact_email** | **str** |  | 
**primary_contact_phone** | **str** |  | 
**metadata** | **str** |  | 
**percentage_charge** | **float** |  | 
**is_verified** | **bool** |  | 
**settlement_bank** | **str** |  | 
**account_number** | **str** |  | 
**settlement_schedule** | **str** |  | 
**active** | **bool** |  | 
**migrate** | **bool** |  | 
**currency** | **str** |  | 
**product** | **str** |  | 
**id** | **int** |  | 
**integration** | **int** |  | 
**bank** | **int** |  | 
**managed_by_integration** | **int** |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.subaccount_update_response_data import SubaccountUpdateResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of SubaccountUpdateResponseData from a JSON string
subaccount_update_response_data_instance = SubaccountUpdateResponseData.from_json(json)
# print the JSON string representation of the object
print SubaccountUpdateResponseData.to_json()

# convert the object into a dict
subaccount_update_response_data_dict = subaccount_update_response_data_instance.to_dict()
# create an instance of SubaccountUpdateResponseData from a dict
subaccount_update_response_data_form_dict = subaccount_update_response_data.from_dict(subaccount_update_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


