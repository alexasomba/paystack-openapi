# SubaccountFetchResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**SubaccountFetchResponseData**](SubaccountFetchResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.subaccount_fetch_response import SubaccountFetchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SubaccountFetchResponse from a JSON string
subaccount_fetch_response_instance = SubaccountFetchResponse.from_json(json)
# print the JSON string representation of the object
print SubaccountFetchResponse.to_json()

# convert the object into a dict
subaccount_fetch_response_dict = subaccount_fetch_response_instance.to_dict()
# create an instance of SubaccountFetchResponse from a dict
subaccount_fetch_response_form_dict = subaccount_fetch_response.from_dict(subaccount_fetch_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


