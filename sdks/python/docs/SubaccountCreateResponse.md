# SubaccountCreateResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**SubaccountCreateResponseData**](SubaccountCreateResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.subaccount_create_response import SubaccountCreateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SubaccountCreateResponse from a JSON string
subaccount_create_response_instance = SubaccountCreateResponse.from_json(json)
# print the JSON string representation of the object
print SubaccountCreateResponse.to_json()

# convert the object into a dict
subaccount_create_response_dict = subaccount_create_response_instance.to_dict()
# create an instance of SubaccountCreateResponse from a dict
subaccount_create_response_form_dict = subaccount_create_response.from_dict(subaccount_create_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


