# VerifyResponseDataLog


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_time** | **int** |  | 
**time_spent** | **int** |  | 
**attempts** | **int** |  | 
**errors** | **int** |  | 
**success** | **bool** |  | 
**mobile** | **bool** |  | 
**input** | **List[object]** |  | 
**history** | [**List[VerifyResponseDataLogHistoryInner]**](VerifyResponseDataLogHistoryInner.md) |  | 

## Example

```python
from alexasomba_paystack.models.verify_response_data_log import VerifyResponseDataLog

# TODO update the JSON string below
json = "{}"
# create an instance of VerifyResponseDataLog from a JSON string
verify_response_data_log_instance = VerifyResponseDataLog.from_json(json)
# print the JSON string representation of the object
print VerifyResponseDataLog.to_json()

# convert the object into a dict
verify_response_data_log_dict = verify_response_data_log_instance.to_dict()
# create an instance of VerifyResponseDataLog from a dict
verify_response_data_log_form_dict = verify_response_data_log.from_dict(verify_response_data_log_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


