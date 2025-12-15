# SplitSubaccountsArraySubaccount


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
**settlement_bank** | **str** |  | 
**currency** | **str** |  | 
**account_number** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.split_subaccounts_array_subaccount import SplitSubaccountsArraySubaccount

# TODO update the JSON string below
json = "{}"
# create an instance of SplitSubaccountsArraySubaccount from a JSON string
split_subaccounts_array_subaccount_instance = SplitSubaccountsArraySubaccount.from_json(json)
# print the JSON string representation of the object
print SplitSubaccountsArraySubaccount.to_json()

# convert the object into a dict
split_subaccounts_array_subaccount_dict = split_subaccounts_array_subaccount_instance.to_dict()
# create an instance of SplitSubaccountsArraySubaccount from a dict
split_subaccounts_array_subaccount_form_dict = split_subaccounts_array_subaccount.from_dict(split_subaccounts_array_subaccount_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


