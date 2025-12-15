# SplitSubaccounts


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subaccount** | **str** | Subaccount code of the customer or partner | [optional] 
**share** | **int** | The percentage or flat quota of the customer or partner | [optional] 

## Example

```python
from alexasomba_paystack.models.split_subaccounts import SplitSubaccounts

# TODO update the JSON string below
json = "{}"
# create an instance of SplitSubaccounts from a JSON string
split_subaccounts_instance = SplitSubaccounts.from_json(json)
# print the JSON string representation of the object
print SplitSubaccounts.to_json()

# convert the object into a dict
split_subaccounts_dict = split_subaccounts_instance.to_dict()
# create an instance of SplitSubaccounts from a dict
split_subaccounts_form_dict = split_subaccounts.from_dict(split_subaccounts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


