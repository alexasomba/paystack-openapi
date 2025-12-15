# TransferVerifyResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**TransferVerifyResponseData**](TransferVerifyResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.transfer_verify_response import TransferVerifyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TransferVerifyResponse from a JSON string
transfer_verify_response_instance = TransferVerifyResponse.from_json(json)
# print the JSON string representation of the object
print TransferVerifyResponse.to_json()

# convert the object into a dict
transfer_verify_response_dict = transfer_verify_response_instance.to_dict()
# create an instance of TransferVerifyResponse from a dict
transfer_verify_response_form_dict = transfer_verify_response.from_dict(transfer_verify_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


