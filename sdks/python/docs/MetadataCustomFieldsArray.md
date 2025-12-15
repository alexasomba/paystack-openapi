# MetadataCustomFieldsArray


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** |  | 
**display_name** | **str** |  | 
**variable_name** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.metadata_custom_fields_array import MetadataCustomFieldsArray

# TODO update the JSON string below
json = "{}"
# create an instance of MetadataCustomFieldsArray from a JSON string
metadata_custom_fields_array_instance = MetadataCustomFieldsArray.from_json(json)
# print the JSON string representation of the object
print MetadataCustomFieldsArray.to_json()

# convert the object into a dict
metadata_custom_fields_array_dict = metadata_custom_fields_array_instance.to_dict()
# create an instance of MetadataCustomFieldsArray from a dict
metadata_custom_fields_array_form_dict = metadata_custom_fields_array.from_dict(metadata_custom_fields_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


