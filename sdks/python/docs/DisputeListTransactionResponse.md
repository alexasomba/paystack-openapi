# DisputeListTransactionResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**DisputeListTransactionResponseData**](DisputeListTransactionResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.dispute_list_transaction_response import DisputeListTransactionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DisputeListTransactionResponse from a JSON string
dispute_list_transaction_response_instance = DisputeListTransactionResponse.from_json(json)
# print the JSON string representation of the object
print DisputeListTransactionResponse.to_json()

# convert the object into a dict
dispute_list_transaction_response_dict = dispute_list_transaction_response_instance.to_dict()
# create an instance of DisputeListTransactionResponse from a dict
dispute_list_transaction_response_form_dict = dispute_list_transaction_response.from_dict(dispute_list_transaction_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


