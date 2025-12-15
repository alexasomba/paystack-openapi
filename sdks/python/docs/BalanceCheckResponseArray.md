# BalanceCheckResponseArray


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** |  | 
**balance** | **int** |  | 

## Example

```python
from alexasomba_paystack.models.balance_check_response_array import BalanceCheckResponseArray

# TODO update the JSON string below
json = "{}"
# create an instance of BalanceCheckResponseArray from a JSON string
balance_check_response_array_instance = BalanceCheckResponseArray.from_json(json)
# print the JSON string representation of the object
print BalanceCheckResponseArray.to_json()

# convert the object into a dict
balance_check_response_array_dict = balance_check_response_array_instance.to_dict()
# create an instance of BalanceCheckResponseArray from a dict
balance_check_response_array_form_dict = balance_check_response_array.from_dict(balance_check_response_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


