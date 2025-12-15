# SubaccountFetchResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integration** | **int** |  | 
**account_name** | **str** |  | [optional] 
**bank** | **int** |  | 
**managed_by_integration** | **int** |  | 
**domain** | **str** |  | 
**subaccount_code** | **str** |  | 
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
**created_at** | **str** |  | 
**updated_at** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.subaccount_fetch_response_data import SubaccountFetchResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of SubaccountFetchResponseData from a JSON string
subaccount_fetch_response_data_instance = SubaccountFetchResponseData.from_json(json)
# print the JSON string representation of the object
print SubaccountFetchResponseData.to_json()

# convert the object into a dict
subaccount_fetch_response_data_dict = subaccount_fetch_response_data_instance.to_dict()
# create an instance of SubaccountFetchResponseData from a dict
subaccount_fetch_response_data_form_dict = subaccount_fetch_response_data.from_dict(subaccount_fetch_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


