# DisputeListTransactionResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**history** | [**List[DisputeHistoryArray]**](DisputeHistoryArray.md) |  | 
**messages** | [**List[DisputeMessagesArray]**](DisputeMessagesArray.md) |  | 
**currency** | **str** |  | 
**last4** | **str** |  | 
**bin** | **str** |  | 
**transaction_reference** | **object** |  | 
**merchant_transaction_reference** | **str** |  | 
**refund_amount** | **int** |  | 
**status** | **str** |  | 
**domain** | **str** |  | 
**resolution** | **object** |  | 
**category** | **str** |  | 
**note** | **object** |  | 
**attachments** | **object** |  | 
**id** | **int** |  | 
**integration** | **int** |  | 
**transaction** | [**DisputeListTransactionResponseDataTransaction**](DisputeListTransactionResponseDataTransaction.md) |  | 
**created_by** | **int** |  | 
**evidence** | **object** |  | 
**resolved_at** | **object** |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 
**due_at** | **object** |  | 

## Example

```python
from alexasomba_paystack.models.dispute_list_transaction_response_data import DisputeListTransactionResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of DisputeListTransactionResponseData from a JSON string
dispute_list_transaction_response_data_instance = DisputeListTransactionResponseData.from_json(json)
# print the JSON string representation of the object
print DisputeListTransactionResponseData.to_json()

# convert the object into a dict
dispute_list_transaction_response_data_dict = dispute_list_transaction_response_data_instance.to_dict()
# create an instance of DisputeListTransactionResponseData from a dict
dispute_list_transaction_response_data_form_dict = dispute_list_transaction_response_data.from_dict(dispute_list_transaction_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


