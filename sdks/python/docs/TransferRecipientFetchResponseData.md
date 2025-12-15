# TransferRecipientFetchResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integration** | **int** |  | 
**domain** | **str** |  | 
**type** | **str** |  | 
**currency** | **str** |  | 
**name** | **str** |  | 
**details** | [**TransferRecipientFetchResponseDataDetails**](TransferRecipientFetchResponseDataDetails.md) |  | 
**description** | **str** |  | 
**metadata** | **object** |  | [optional] 
**recipient_code** | **str** |  | 
**active** | **bool** |  | 
**recipient_account** | **str** |  | 
**institution_code** | **str** |  | 
**email** | **str** |  | 
**id** | **int** |  | 
**is_deleted** | **bool** |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.transfer_recipient_fetch_response_data import TransferRecipientFetchResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of TransferRecipientFetchResponseData from a JSON string
transfer_recipient_fetch_response_data_instance = TransferRecipientFetchResponseData.from_json(json)
# print the JSON string representation of the object
print TransferRecipientFetchResponseData.to_json()

# convert the object into a dict
transfer_recipient_fetch_response_data_dict = transfer_recipient_fetch_response_data_instance.to_dict()
# create an instance of TransferRecipientFetchResponseData from a dict
transfer_recipient_fetch_response_data_form_dict = transfer_recipient_fetch_response_data.from_dict(transfer_recipient_fetch_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


