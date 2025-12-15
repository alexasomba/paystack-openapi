# TransactionChargeAuthorization


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Customer&#39;s email address | 
**amount** | **int** | Amount in the lower denomination of your currency | 
**authorization_code** | **str** | Valid authorization code to charge | 
**reference** | **str** | Unique transaction reference. Only -, ., &#x3D; and alphanumeric characters allowed. | [optional] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**split_code** | **str** | The split code of the transaction split | [optional] 
**split** | [**SplitCreate**](SplitCreate.md) |  | [optional] 
**subaccount** | **str** | The code for the subaccount that owns the payment | [optional] 
**transaction_charge** | **str** | A flat fee to charge the subaccount for a transaction.  This overrides the split percentage set when the subaccount was created | [optional] 
**bearer** | **str** | The bearer of the transaction charge | [optional] 
**metadata** | **str** | Stringified JSON object of custom data | [optional] 
**queue** | **bool** | If you are making a scheduled charge call, it is a good idea to queue them so the processing system does not get overloaded causing transaction processing errors. | [optional] 

## Example

```python
from alexasomba_paystack.models.transaction_charge_authorization import TransactionChargeAuthorization

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionChargeAuthorization from a JSON string
transaction_charge_authorization_instance = TransactionChargeAuthorization.from_json(json)
# print the JSON string representation of the object
print TransactionChargeAuthorization.to_json()

# convert the object into a dict
transaction_charge_authorization_dict = transaction_charge_authorization_instance.to_dict()
# create an instance of TransactionChargeAuthorization from a dict
transaction_charge_authorization_form_dict = transaction_charge_authorization.from_dict(transaction_charge_authorization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


