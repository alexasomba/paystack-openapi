# TransactionFetchResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**domain** | **str** |  | 
**status** | **str** |  | 
**reference** | **str** |  | 
**receipt_number** | **object** |  | 
**amount** | **int** |  | 
**message** | **object** |  | 
**gateway_response** | **str** |  | 
**helpdesk_link** | **object** |  | 
**paid_at** | **str** |  | 
**created_at** | **str** |  | 
**channel** | **str** |  | 
**currency** | **str** |  | 
**ip_address** | **str** |  | 
**metadata** | [**TransactionFetchResponseDataMetadata**](TransactionFetchResponseDataMetadata.md) |  | 
**log** | [**ChargeAuthorizationResponseDataLog**](ChargeAuthorizationResponseDataLog.md) |  | 
**fees** | **int** |  | 
**fees_split** | **int** |  | 
**authorization** | [**TransactionFetchResponseDataAuthorization**](TransactionFetchResponseDataAuthorization.md) |  | 
**customer** | [**TransactionFetchResponseDataCustomer**](TransactionFetchResponseDataCustomer.md) |  | 
**plan** | **object** |  | 
**subaccount** | **object** |  | 
**split** | **object** |  | 
**order_id** | **object** |  | 
**requested_amount** | **int** |  | 
**pos_transaction_data** | **object** |  | 
**source** | [**TransactionFetchResponseDataSource**](TransactionFetchResponseDataSource.md) |  | 
**fees_breakdown** | **object** |  | 
**connect** | **object** |  | 

## Example

```python
from alexasomba_paystack.models.transaction_fetch_response_data import TransactionFetchResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionFetchResponseData from a JSON string
transaction_fetch_response_data_instance = TransactionFetchResponseData.from_json(json)
# print the JSON string representation of the object
print TransactionFetchResponseData.to_json()

# convert the object into a dict
transaction_fetch_response_data_dict = transaction_fetch_response_data_instance.to_dict()
# create an instance of TransactionFetchResponseData from a dict
transaction_fetch_response_data_form_dict = transaction_fetch_response_data.from_dict(transaction_fetch_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


