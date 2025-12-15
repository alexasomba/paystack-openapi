# ErrorMeta

Extra details to help with a resolution of the error

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_step** | **str** | A summarised solution for the error | [optional] 

## Example

```python
from alexasomba_paystack.models.error_meta import ErrorMeta

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorMeta from a JSON string
error_meta_instance = ErrorMeta.from_json(json)
# print the JSON string representation of the object
print ErrorMeta.to_json()

# convert the object into a dict
error_meta_dict = error_meta_instance.to_dict()
# create an instance of ErrorMeta from a dict
error_meta_form_dict = error_meta.from_dict(error_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


