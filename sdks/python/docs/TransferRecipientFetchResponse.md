# TransferRecipientFetchResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**TransferRecipientFetchResponseData**](TransferRecipientFetchResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.transfer_recipient_fetch_response import TransferRecipientFetchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TransferRecipientFetchResponse from a JSON string
transfer_recipient_fetch_response_instance = TransferRecipientFetchResponse.from_json(json)
# print the JSON string representation of the object
print TransferRecipientFetchResponse.to_json()

# convert the object into a dict
transfer_recipient_fetch_response_dict = transfer_recipient_fetch_response_instance.to_dict()
# create an instance of TransferRecipientFetchResponse from a dict
transfer_recipient_fetch_response_form_dict = transfer_recipient_fetch_response.from_dict(transfer_recipient_fetch_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


