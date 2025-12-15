# DisputeFetchResponseDataTransaction


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**domain** | **str** |  | 
**status** | **str** |  | 
**reference** | **str** |  | 
**receipt_number** | **int** |  | [optional] 
**amount** | **int** |  | 
**message** | **object** |  | 
**gateway_response** | **str** |  | 
**paid_at** | **str** |  | 
**created_at** | **str** |  | 
**channel** | **str** |  | 
**currency** | **str** |  | 
**ip_address** | **str** |  | 
**metadata** | [**TransactionFetchResponseDataMetadata**](TransactionFetchResponseDataMetadata.md) |  | 
**log** | [**ChargeAuthorizationResponseDataLog**](ChargeAuthorizationResponseDataLog.md) |  | 
**fees** | **int** |  | 
**fees_split** | **int** |  | 
**authorization** | [**DisputeFetchResponseDataTransactionAuthorization**](DisputeFetchResponseDataTransactionAuthorization.md) |  | 
**customer** | [**DisputeFetchResponseDataTransactionCustomer**](DisputeFetchResponseDataTransactionCustomer.md) |  | 
**plan** | **object** |  | 
**subaccount** | **object** |  | 
**split** | **object** |  | 
**order_id** | **object** |  | 
**requested_amount** | **int** |  | 
**pos_transaction_data** | **object** |  | 
**source** | **object** |  | 
**fees_breakdown** | **object** |  | 
**connect** | **object** |  | 

## Example

```python
from alexasomba_paystack.models.dispute_fetch_response_data_transaction import DisputeFetchResponseDataTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of DisputeFetchResponseDataTransaction from a JSON string
dispute_fetch_response_data_transaction_instance = DisputeFetchResponseDataTransaction.from_json(json)
# print the JSON string representation of the object
print DisputeFetchResponseDataTransaction.to_json()

# convert the object into a dict
dispute_fetch_response_data_transaction_dict = dispute_fetch_response_data_transaction_instance.to_dict()
# create an instance of DisputeFetchResponseDataTransaction from a dict
dispute_fetch_response_data_transaction_form_dict = dispute_fetch_response_data_transaction.from_dict(dispute_fetch_response_data_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


