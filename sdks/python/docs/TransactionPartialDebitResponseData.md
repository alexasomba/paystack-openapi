# TransactionPartialDebitResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** |  | 
**currency** | **str** |  | 
**transaction_date** | **str** |  | 
**status** | **str** |  | 
**reference** | **str** |  | 
**domain** | **str** |  | 
**metadata** | **str** |  | 
**gateway_response** | **str** |  | 
**message** | **object** |  | 
**channel** | **str** |  | 
**ip_address** | **object** |  | 
**log** | [**ChargeAuthorizationResponseDataLog**](ChargeAuthorizationResponseDataLog.md) |  | 
**fees** | **int** |  | 
**authorization** | [**TransactionPartialDebitResponseDataAuthorization**](TransactionPartialDebitResponseDataAuthorization.md) |  | 
**customer** | [**TransactionPartialDebitResponseDataCustomer**](TransactionPartialDebitResponseDataCustomer.md) |  | 
**plan** | **int** |  | 
**requested_amount** | **int** |  | 
**id** | **int** |  | 

## Example

```python
from alexasomba_paystack.models.transaction_partial_debit_response_data import TransactionPartialDebitResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionPartialDebitResponseData from a JSON string
transaction_partial_debit_response_data_instance = TransactionPartialDebitResponseData.from_json(json)
# print the JSON string representation of the object
print TransactionPartialDebitResponseData.to_json()

# convert the object into a dict
transaction_partial_debit_response_data_dict = transaction_partial_debit_response_data_instance.to_dict()
# create an instance of TransactionPartialDebitResponseData from a dict
transaction_partial_debit_response_data_form_dict = transaction_partial_debit_response_data.from_dict(transaction_partial_debit_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


