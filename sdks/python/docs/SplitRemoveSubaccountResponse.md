# SplitRemoveSubaccountResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.split_remove_subaccount_response import SplitRemoveSubaccountResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SplitRemoveSubaccountResponse from a JSON string
split_remove_subaccount_response_instance = SplitRemoveSubaccountResponse.from_json(json)
# print the JSON string representation of the object
print SplitRemoveSubaccountResponse.to_json()

# convert the object into a dict
split_remove_subaccount_response_dict = split_remove_subaccount_response_instance.to_dict()
# create an instance of SplitRemoveSubaccountResponse from a dict
split_remove_subaccount_response_form_dict = split_remove_subaccount_response.from_dict(split_remove_subaccount_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


