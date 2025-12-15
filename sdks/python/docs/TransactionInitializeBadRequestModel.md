# TransactionInitializeBadRequestModel

Error response returned when a transaction is initialized with incorrect parameters 

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** | An indicator for the state of the request | [optional] 
**message** | **str** | A short description of the error | [optional] 
**meta** | [**ErrorMeta**](ErrorMeta.md) |  | [optional] 
**type** | **str** | A tag to indicate the type of the error | [optional] 
**code** | **str** | The error code | [optional] 
**error_code_mapping_not_found** | **bool** | An indicator for error mapping for the request | [optional] 

## Example

```python
from alexasomba_paystack.models.transaction_initialize_bad_request_model import TransactionInitializeBadRequestModel

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionInitializeBadRequestModel from a JSON string
transaction_initialize_bad_request_model_instance = TransactionInitializeBadRequestModel.from_json(json)
# print the JSON string representation of the object
print TransactionInitializeBadRequestModel.to_json()

# convert the object into a dict
transaction_initialize_bad_request_model_dict = transaction_initialize_bad_request_model_instance.to_dict()
# create an instance of TransactionInitializeBadRequestModel from a dict
transaction_initialize_bad_request_model_form_dict = transaction_initialize_bad_request_model.from_dict(transaction_initialize_bad_request_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


