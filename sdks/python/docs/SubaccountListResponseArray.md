# SubaccountListResponseArray


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**subaccount_code** | **str** |  | 
**business_name** | **str** |  | 
**description** | **str** |  | 
**primary_contact_name** | **str** |  | 
**primary_contact_email** | **str** |  | 
**primary_contact_phone** | **str** |  | 
**metadata** | **str** |  | 
**percentage_charge** | **float** |  | 
**settlement_bank** | **str** |  | 
**bank_id** | **int** |  | 
**account_number** | **str** |  | 
**currency** | **str** |  | 
**active** | **int** |  | 
**is_verified** | **bool** |  | 

## Example

```python
from alexasomba_paystack.models.subaccount_list_response_array import SubaccountListResponseArray

# TODO update the JSON string below
json = "{}"
# create an instance of SubaccountListResponseArray from a JSON string
subaccount_list_response_array_instance = SubaccountListResponseArray.from_json(json)
# print the JSON string representation of the object
print SubaccountListResponseArray.to_json()

# convert the object into a dict
subaccount_list_response_array_dict = subaccount_list_response_array_instance.to_dict()
# create an instance of SubaccountListResponseArray from a dict
subaccount_list_response_array_form_dict = subaccount_list_response_array.from_dict(subaccount_list_response_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


