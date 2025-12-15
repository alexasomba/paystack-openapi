# SubaccountCreateResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**business_name** | **str** |  | 
**account_name** | **str** |  | [optional] 
**description** | **str** |  | 
**primary_contact_name** | **str** |  | 
**primary_contact_email** | **str** |  | 
**primary_contact_phone** | **str** |  | 
**metadata** | **str** |  | 
**account_number** | **str** |  | 
**percentage_charge** | **float** |  | 
**settlement_bank** | **str** |  | 
**currency** | **str** |  | 
**bank** | **int** |  | 
**integration** | **int** |  | 
**domain** | **str** |  | 
**product** | **str** |  | 
**managed_by_integration** | **int** |  | 
**subaccount_code** | **str** |  | 
**is_verified** | **bool** |  | 
**settlement_schedule** | **str** |  | 
**active** | **bool** |  | 
**migrate** | **bool** |  | 
**id** | **int** |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.subaccount_create_response_data import SubaccountCreateResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of SubaccountCreateResponseData from a JSON string
subaccount_create_response_data_instance = SubaccountCreateResponseData.from_json(json)
# print the JSON string representation of the object
print SubaccountCreateResponseData.to_json()

# convert the object into a dict
subaccount_create_response_data_dict = subaccount_create_response_data_instance.to_dict()
# create an instance of SubaccountCreateResponseData from a dict
subaccount_create_response_data_form_dict = subaccount_create_response_data.from_dict(subaccount_create_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


