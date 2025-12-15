# SubaccountUpdate


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**business_name** | **str** | Name of business for subaccount | [optional] 
**settlement_bank** | **str** | Bank code for the bank. You can get the list of Bank Codes by calling the List Banks endpoint. | [optional] 
**account_number** | **str** | Bank account number | [optional] 
**active** | **bool** | Activate or deactivate a subaccount | [optional] 
**percentage_charge** | **float** | Customer&#39;s phone number | [optional] 
**description** | **str** | A description for this subaccount | [optional] 
**primary_contact_email** | **str** | A contact email for the subaccount | [optional] 
**primary_contact_name** | **str** | The name of the contact person for this subaccount | [optional] 
**primary_contact_phone** | **str** | A phone number to call for this subaccount | [optional] 
**metadata** | **str** | Stringified JSON object of custom data | [optional] 

## Example

```python
from alexasomba_paystack.models.subaccount_update import SubaccountUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of SubaccountUpdate from a JSON string
subaccount_update_instance = SubaccountUpdate.from_json(json)
# print the JSON string representation of the object
print SubaccountUpdate.to_json()

# convert the object into a dict
subaccount_update_dict = subaccount_update_instance.to_dict()
# create an instance of SubaccountUpdate from a dict
subaccount_update_form_dict = subaccount_update.from_dict(subaccount_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


