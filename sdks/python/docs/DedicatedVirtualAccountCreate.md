# DedicatedVirtualAccountCreate


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | **str** | The code for the previously created customer | 
**preferred_bank** | **str** | The bank slug for preferred bank. To get a list of available banks, use the List Providers endpoint | [optional] 
**subaccount** | **str** | Subaccount code of the account you want to split the transaction with | [optional] 
**split_code** | **str** | Split code consisting of the lists of accounts you want to split the transaction with | [optional] 

## Example

```python
from alexasomba_paystack.models.dedicated_virtual_account_create import DedicatedVirtualAccountCreate

# TODO update the JSON string below
json = "{}"
# create an instance of DedicatedVirtualAccountCreate from a JSON string
dedicated_virtual_account_create_instance = DedicatedVirtualAccountCreate.from_json(json)
# print the JSON string representation of the object
print DedicatedVirtualAccountCreate.to_json()

# convert the object into a dict
dedicated_virtual_account_create_dict = dedicated_virtual_account_create_instance.to_dict()
# create an instance of DedicatedVirtualAccountCreate from a dict
dedicated_virtual_account_create_form_dict = dedicated_virtual_account_create.from_dict(dedicated_virtual_account_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


