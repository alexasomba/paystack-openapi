# MiscellaneousListBanksResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**List[MiscellaneousListBanksResponseArray]**](MiscellaneousListBanksResponseArray.md) |  | 

## Example

```python
from alexasomba_paystack.models.miscellaneous_list_banks_response import MiscellaneousListBanksResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MiscellaneousListBanksResponse from a JSON string
miscellaneous_list_banks_response_instance = MiscellaneousListBanksResponse.from_json(json)
# print the JSON string representation of the object
print MiscellaneousListBanksResponse.to_json()

# convert the object into a dict
miscellaneous_list_banks_response_dict = miscellaneous_list_banks_response_instance.to_dict()
# create an instance of MiscellaneousListBanksResponse from a dict
miscellaneous_list_banks_response_form_dict = miscellaneous_list_banks_response.from_dict(miscellaneous_list_banks_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


