# TransferVerifyResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** |  | 
**created_at** | **str** |  | 
**currency** | **str** |  | 
**domain** | **str** |  | 
**failures** | **object** |  | 
**id** | **int** |  | 
**integration** | **int** |  | 
**reason** | **str** |  | 
**reference** | **str** |  | 
**source** | **str** |  | 
**source_details** | **object** |  | 
**status** | **str** |  | 
**titan_code** | **object** |  | 
**transfer_code** | **str** |  | 
**transferred_at** | **object** |  | 
**updated_at** | **str** |  | 
**recipient** | [**TransferVerifyResponseDataRecipient**](TransferVerifyResponseDataRecipient.md) |  | 
**session** | [**TransferListResponseArraySession**](TransferListResponseArraySession.md) |  | 
**gateway_response** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.transfer_verify_response_data import TransferVerifyResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of TransferVerifyResponseData from a JSON string
transfer_verify_response_data_instance = TransferVerifyResponseData.from_json(json)
# print the JSON string representation of the object
print TransferVerifyResponseData.to_json()

# convert the object into a dict
transfer_verify_response_data_dict = transfer_verify_response_data_instance.to_dict()
# create an instance of TransferVerifyResponseData from a dict
transfer_verify_response_data_form_dict = transfer_verify_response_data.from_dict(transfer_verify_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


