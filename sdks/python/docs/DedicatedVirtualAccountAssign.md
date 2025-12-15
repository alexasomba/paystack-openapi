# DedicatedVirtualAccountAssign


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Customer&#39;s email address | 
**first_name** | **str** | Customer&#39;s first name | 
**last_name** | **str** | Customer&#39;s last name | 
**phone** | **str** | Customer&#39;s phone name | 
**preferred_bank** | **str** | The bank slug for preferred bank. To get a list of available banks,  use the List Banks endpoint, passing &#x60;pay_with_bank_transfer&#x3D;true&#x60; query parameter  | 
**country** | **str** | The two letter code country | 
**account_number** | **str** | Customer&#39;s account number | [optional] 
**bvn** | **str** | Customer&#39;s Bank Verification Number | [optional] 
**bank_code** | **str** | Customer&#39;s bank code | [optional] 
**subaccount** | **str** | Subaccount code of the account you want to split the transaction with | [optional] 
**split_code** | **str** | Split code consisting of the lists of accounts you want to split the transaction with | [optional] 

## Example

```python
from alexasomba_paystack.models.dedicated_virtual_account_assign import DedicatedVirtualAccountAssign

# TODO update the JSON string below
json = "{}"
# create an instance of DedicatedVirtualAccountAssign from a JSON string
dedicated_virtual_account_assign_instance = DedicatedVirtualAccountAssign.from_json(json)
# print the JSON string representation of the object
print DedicatedVirtualAccountAssign.to_json()

# convert the object into a dict
dedicated_virtual_account_assign_dict = dedicated_virtual_account_assign_instance.to_dict()
# create an instance of DedicatedVirtualAccountAssign from a dict
dedicated_virtual_account_assign_form_dict = dedicated_virtual_account_assign.from_dict(dedicated_virtual_account_assign_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


