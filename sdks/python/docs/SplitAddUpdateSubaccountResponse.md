# SplitAddUpdateSubaccountResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**SplitFetchResponseData**](SplitFetchResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.split_add_update_subaccount_response import SplitAddUpdateSubaccountResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SplitAddUpdateSubaccountResponse from a JSON string
split_add_update_subaccount_response_instance = SplitAddUpdateSubaccountResponse.from_json(json)
# print the JSON string representation of the object
print SplitAddUpdateSubaccountResponse.to_json()

# convert the object into a dict
split_add_update_subaccount_response_dict = split_add_update_subaccount_response_instance.to_dict()
# create an instance of SplitAddUpdateSubaccountResponse from a dict
split_add_update_subaccount_response_form_dict = split_add_update_subaccount_response.from_dict(split_add_update_subaccount_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


