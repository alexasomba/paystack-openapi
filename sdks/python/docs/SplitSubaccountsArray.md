# SplitSubaccountsArray


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subaccount** | [**SplitSubaccountsArraySubaccount**](SplitSubaccountsArraySubaccount.md) |  | 
**share** | **int** |  | 

## Example

```python
from alexasomba_paystack.models.split_subaccounts_array import SplitSubaccountsArray

# TODO update the JSON string below
json = "{}"
# create an instance of SplitSubaccountsArray from a JSON string
split_subaccounts_array_instance = SplitSubaccountsArray.from_json(json)
# print the JSON string representation of the object
print SplitSubaccountsArray.to_json()

# convert the object into a dict
split_subaccounts_array_dict = split_subaccounts_array_instance.to_dict()
# create an instance of SplitSubaccountsArray from a dict
split_subaccounts_array_form_dict = split_subaccounts_array.from_dict(split_subaccounts_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


