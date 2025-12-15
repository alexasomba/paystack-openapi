# SubaccountListResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**List[SubaccountListResponseArray]**](SubaccountListResponseArray.md) |  | 
**meta** | [**SubaccountListResponseMeta**](SubaccountListResponseMeta.md) |  | 

## Example

```python
from alexasomba_paystack.models.subaccount_list_response import SubaccountListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SubaccountListResponse from a JSON string
subaccount_list_response_instance = SubaccountListResponse.from_json(json)
# print the JSON string representation of the object
print SubaccountListResponse.to_json()

# convert the object into a dict
subaccount_list_response_dict = subaccount_list_response_instance.to_dict()
# create an instance of SubaccountListResponse from a dict
subaccount_list_response_form_dict = subaccount_list_response.from_dict(subaccount_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


