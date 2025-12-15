# TransactionCheckAuthorization


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Customer&#39;s email address | 
**amount** | **int** | Amount should be in kobo if currency is NGN, pesewas if currency is GHS, and cents if currency is ZAR | 
**authorization_code** | **str** | Valid authorization code to charge | [optional] 
**currency** | **str** | The transaction currency | [optional] 

## Example

```python
from alexasomba_paystack.models.transaction_check_authorization import TransactionCheckAuthorization

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionCheckAuthorization from a JSON string
transaction_check_authorization_instance = TransactionCheckAuthorization.from_json(json)
# print the JSON string representation of the object
print TransactionCheckAuthorization.to_json()

# convert the object into a dict
transaction_check_authorization_dict = transaction_check_authorization_instance.to_dict()
# create an instance of TransactionCheckAuthorization from a dict
transaction_check_authorization_form_dict = transaction_check_authorization.from_dict(transaction_check_authorization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


