# RefundCreateResponseDataTransaction


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**domain** | **str** |  | 
**reference** | **str** |  | 
**amount** | **int** |  | 
**paid_at** | **str** |  | 
**channel** | **str** |  | 
**currency** | **str** |  | 
**authorization** | [**RefundCreateResponseDataTransactionAuthorization**](RefundCreateResponseDataTransactionAuthorization.md) |  | 
**customer** | [**RefundCreateResponseDataTransactionCustomer**](RefundCreateResponseDataTransactionCustomer.md) |  | 
**plan** | **object** |  | 
**subaccount** | [**RefundCreateResponseDataTransactionSubaccount**](RefundCreateResponseDataTransactionSubaccount.md) |  | 
**split** | **object** |  | 
**order_id** | **object** |  | 
**pos_transaction_data** | **object** |  | 
**source** | **object** |  | 
**fees_breakdown** | **object** |  | 

## Example

```python
from alexasomba_paystack.models.refund_create_response_data_transaction import RefundCreateResponseDataTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of RefundCreateResponseDataTransaction from a JSON string
refund_create_response_data_transaction_instance = RefundCreateResponseDataTransaction.from_json(json)
# print the JSON string representation of the object
print RefundCreateResponseDataTransaction.to_json()

# convert the object into a dict
refund_create_response_data_transaction_dict = refund_create_response_data_transaction_instance.to_dict()
# create an instance of RefundCreateResponseDataTransaction from a dict
refund_create_response_data_transaction_form_dict = refund_create_response_data_transaction.from_dict(refund_create_response_data_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


