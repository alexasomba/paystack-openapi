# TransactionListResponseArray


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**domain** | **str** |  | 
**status** | **str** |  | 
**reference** | **str** |  | 
**amount** | **int** |  | 
**message** | **object** |  | 
**gateway_response** | **str** |  | 
**paid_at** | **str** |  | 
**created_at** | **str** |  | 
**channel** | **str** |  | 
**currency** | **str** |  | 
**ip_address** | **str** |  | 
**metadata** | **object** |  | 
**log** | [**ChargeAuthorizationResponseDataLog**](ChargeAuthorizationResponseDataLog.md) |  | 
**fees** | **int** |  | 
**fees_split** | **int** |  | 
**customer** | [**TransactionListResponseArrayCustomer**](TransactionListResponseArrayCustomer.md) |  | 
**authorization** | [**TransactionListResponseArrayAuthorization**](TransactionListResponseArrayAuthorization.md) |  | 
**plan** | **object** |  | 
**split** | **object** |  | 
**subaccount** | **object** |  | 
**order_id** | **object** |  | 
**requested_amount** | **int** |  | 
**source** | [**TransactionListResponseArraySource**](TransactionListResponseArraySource.md) |  | 
**connect** | **object** |  | 
**pos_transaction_data** | **object** |  | 

## Example

```python
from alexasomba_paystack.models.transaction_list_response_array import TransactionListResponseArray

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionListResponseArray from a JSON string
transaction_list_response_array_instance = TransactionListResponseArray.from_json(json)
# print the JSON string representation of the object
print TransactionListResponseArray.to_json()

# convert the object into a dict
transaction_list_response_array_dict = transaction_list_response_array_instance.to_dict()
# create an instance of TransactionListResponseArray from a dict
transaction_list_response_array_form_dict = transaction_list_response_array.from_dict(transaction_list_response_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


