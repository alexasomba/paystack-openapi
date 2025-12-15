# BalanceCheckResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**List[BalanceCheckResponseArray]**](BalanceCheckResponseArray.md) |  | 

## Example

```python
from alexasomba_paystack.models.balance_check_response import BalanceCheckResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BalanceCheckResponse from a JSON string
balance_check_response_instance = BalanceCheckResponse.from_json(json)
# print the JSON string representation of the object
print BalanceCheckResponse.to_json()

# convert the object into a dict
balance_check_response_dict = balance_check_response_instance.to_dict()
# create an instance of BalanceCheckResponse from a dict
balance_check_response_form_dict = balance_check_response.from_dict(balance_check_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


