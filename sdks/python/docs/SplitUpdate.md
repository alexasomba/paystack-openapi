# SplitUpdate


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the transaction split | [optional] 
**active** | **bool** | Toggle status of split. When true, the split is active, else it&#39;s inactive | [optional] 
**bearer_type** | **str** | This allows you specify how the transaction charge should be processed | [optional] 
**bearer_subaccount** | **str** | This is the subaccount code of the customer or partner that would bear the transaction charge if you specified subaccount as the bearer type | [optional] 

## Example

```python
from alexasomba_paystack.models.split_update import SplitUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of SplitUpdate from a JSON string
split_update_instance = SplitUpdate.from_json(json)
# print the JSON string representation of the object
print SplitUpdate.to_json()

# convert the object into a dict
split_update_dict = split_update_instance.to_dict()
# create an instance of SplitUpdate from a dict
split_update_form_dict = split_update.from_dict(split_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


