# DedicatedVirtualAccountSplit


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **str** | Valid Dedicated virtual account | 
**subaccount** | **str** | Subaccount code of the account you want to split the transaction with | [optional] 
**split_code** | **str** | Split code consisting of the lists of accounts you want to split the transaction with | [optional] 

## Example

```python
from alexasomba_paystack.models.dedicated_virtual_account_split import DedicatedVirtualAccountSplit

# TODO update the JSON string below
json = "{}"
# create an instance of DedicatedVirtualAccountSplit from a JSON string
dedicated_virtual_account_split_instance = DedicatedVirtualAccountSplit.from_json(json)
# print the JSON string representation of the object
print DedicatedVirtualAccountSplit.to_json()

# convert the object into a dict
dedicated_virtual_account_split_dict = dedicated_virtual_account_split_instance.to_dict()
# create an instance of DedicatedVirtualAccountSplit from a dict
dedicated_virtual_account_split_form_dict = dedicated_virtual_account_split.from_dict(dedicated_virtual_account_split_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


