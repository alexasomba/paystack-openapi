# TransactionInitializeResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_url** | **str** |  | 
**access_code** | **str** |  | 
**reference** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.transaction_initialize_response_data import TransactionInitializeResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionInitializeResponseData from a JSON string
transaction_initialize_response_data_instance = TransactionInitializeResponseData.from_json(json)
# print the JSON string representation of the object
print TransactionInitializeResponseData.to_json()

# convert the object into a dict
transaction_initialize_response_data_dict = transaction_initialize_response_data_instance.to_dict()
# create an instance of TransactionInitializeResponseData from a dict
transaction_initialize_response_data_form_dict = transaction_initialize_response_data.from_dict(transaction_initialize_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


