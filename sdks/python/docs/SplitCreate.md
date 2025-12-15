# SplitCreate

Split configuration for transactions 

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the transaction split | 
**type** | **str** | The type of transaction split you want to create. | 
**subaccounts** | [**List[SplitSubaccounts]**](SplitSubaccounts.md) | A list of object containing subaccount code and number of shares | 
**currency** | **str** | The transaction currency | 
**bearer_type** | **str** | This allows you specify how the transaction charge should be processed | [optional] 
**bearer_subaccount** | **str** | This is the subaccount code of the customer or partner that would bear the transaction charge if you specified subaccount as the bearer type | [optional] 

## Example

```python
from alexasomba_paystack.models.split_create import SplitCreate

# TODO update the JSON string below
json = "{}"
# create an instance of SplitCreate from a JSON string
split_create_instance = SplitCreate.from_json(json)
# print the JSON string representation of the object
print SplitCreate.to_json()

# convert the object into a dict
split_create_dict = split_create_instance.to_dict()
# create an instance of SplitCreate from a dict
split_create_form_dict = split_create.from_dict(split_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


