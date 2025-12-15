# ErrorRecordsArray


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**name** | **str** |  | 
**description** | **str** |  | 
**account_number** | **str** |  | 
**bank_code** | **str** |  | 
**currency** | **str** |  | 
**email** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.error_records_array import ErrorRecordsArray

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorRecordsArray from a JSON string
error_records_array_instance = ErrorRecordsArray.from_json(json)
# print the JSON string representation of the object
print ErrorRecordsArray.to_json()

# convert the object into a dict
error_records_array_dict = error_records_array_instance.to_dict()
# create an instance of ErrorRecordsArray from a dict
error_records_array_form_dict = error_records_array.from_dict(error_records_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


