# PageUpdate


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of page | [optional] 
**description** | **str** | The description of the page | [optional] 
**amount** | **int** | Amount should be in the subunit of the currency | [optional] 
**active** | **bool** | Set to false to deactivate page url | [optional] 

## Example

```python
from alexasomba_paystack.models.page_update import PageUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of PageUpdate from a JSON string
page_update_instance = PageUpdate.from_json(json)
# print the JSON string representation of the object
print PageUpdate.to_json()

# convert the object into a dict
page_update_dict = page_update_instance.to_dict()
# create an instance of PageUpdate from a dict
page_update_form_dict = page_update.from_dict(page_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


