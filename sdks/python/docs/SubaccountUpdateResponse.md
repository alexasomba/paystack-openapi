# SubaccountUpdateResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**SubaccountUpdateResponseData**](SubaccountUpdateResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.subaccount_update_response import SubaccountUpdateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SubaccountUpdateResponse from a JSON string
subaccount_update_response_instance = SubaccountUpdateResponse.from_json(json)
# print the JSON string representation of the object
print SubaccountUpdateResponse.to_json()

# convert the object into a dict
subaccount_update_response_dict = subaccount_update_response_instance.to_dict()
# create an instance of SubaccountUpdateResponse from a dict
subaccount_update_response_form_dict = subaccount_update_response.from_dict(subaccount_update_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


