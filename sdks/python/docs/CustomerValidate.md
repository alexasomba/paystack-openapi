# CustomerValidate


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **str** | Customer&#39;s first name | 
**middle_name** | **str** | Customer&#39;s middle name | [optional] 
**last_name** | **str** | Customer&#39;s last name | 
**type** | **str** | Predefined types of identification. | [default to 'bank_account']
**value** | **str** | Customer&#39;s identification number. | [optional] 
**country** | **str** | Two-letter country code of identification issuer | 
**bvn** | **str** | Customer&#39;s Bank Verification Number | 
**bank_code** | **str** | You can get the list of bank codes by calling the List Banks endpoint (https://api.paystack.co/bank). | 
**account_number** | **str** | Customer&#39;s bank account number. | 

## Example

```python
from alexasomba_paystack.models.customer_validate import CustomerValidate

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerValidate from a JSON string
customer_validate_instance = CustomerValidate.from_json(json)
# print the JSON string representation of the object
print CustomerValidate.to_json()

# convert the object into a dict
customer_validate_dict = customer_validate_instance.to_dict()
# create an instance of CustomerValidate from a dict
customer_validate_form_dict = customer_validate.from_dict(customer_validate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


