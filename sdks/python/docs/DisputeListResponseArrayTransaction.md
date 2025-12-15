# DisputeListResponseArrayTransaction


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
**paid_at** | **str** |  | [optional] 
**created_at** | **str** |  | [optional] 
**channel** | **str** |  | 
**currency** | **str** |  | 
**ip_address** | **str** |  | 
**metadata** | [**TransactionFetchResponseDataMetadata**](TransactionFetchResponseDataMetadata.md) |  | 
**log** | [**ChargeAuthorizationResponseDataLog**](ChargeAuthorizationResponseDataLog.md) |  | 
**fees** | **int** |  | 
**fees_split** | **int** |  | 
**authorization** | **object** |  | 
**customer** | **object** |  | 
**plan** | **object** |  | 
**subaccount** | **object** |  | 
**split** | **object** |  | 
**order_id** | **object** |  | 
**pos_transaction_data** | **object** |  | 
**source** | **object** |  | 
**fees_breakdown** | **object** |  | 
**connect** | **object** |  | 

## Example

```python
from alexasomba_paystack.models.dispute_list_response_array_transaction import DisputeListResponseArrayTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of DisputeListResponseArrayTransaction from a JSON string
dispute_list_response_array_transaction_instance = DisputeListResponseArrayTransaction.from_json(json)
# print the JSON string representation of the object
print DisputeListResponseArrayTransaction.to_json()

# convert the object into a dict
dispute_list_response_array_transaction_dict = dispute_list_response_array_transaction_instance.to_dict()
# create an instance of DisputeListResponseArrayTransaction from a dict
dispute_list_response_array_transaction_form_dict = dispute_list_response_array_transaction.from_dict(dispute_list_response_array_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


