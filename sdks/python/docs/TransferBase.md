# TransferBase


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** | Amount to transfer in kobo if currency is NGN and pesewas if currency is GHS. | 
**recipient** | **str** | The transfer recipient&#39;s code | 
**reference** | **str** | To ensure idempotency, you need to provide e a unique identifier for the request.  The identifier should be a lowercase alphanumeric string with only -,_  symbols allowed.  | 
**reason** | **str** | The reason or narration for the transfer. | [optional] 

## Example

```python
from alexasomba_paystack.models.transfer_base import TransferBase

# TODO update the JSON string below
json = "{}"
# create an instance of TransferBase from a JSON string
transfer_base_instance = TransferBase.from_json(json)
# print the JSON string representation of the object
print TransferBase.to_json()

# convert the object into a dict
transfer_base_dict = transfer_base_instance.to_dict()
# create an instance of TransferBase from a dict
transfer_base_form_dict = transfer_base.from_dict(transfer_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


