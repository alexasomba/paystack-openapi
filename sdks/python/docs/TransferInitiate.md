# TransferInitiate

Transfer initiation model

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** | Amount to transfer in kobo if currency is NGN and pesewas if currency is GHS. | 
**recipient** | **str** | The transfer recipient&#39;s code | 
**reference** | **str** | To ensure idempotency, you need to provide e a unique identifier for the request.  The identifier should be a lowercase alphanumeric string with only -,_  symbols allowed.  | 
**reason** | **str** | The reason or narration for the transfer. | [optional] 
**source** | **str** | The source of funds to send from | [default to 'balance']
**currency** | **str** | Specify the currency of the transfer. | [optional] [default to 'NGN']

## Example

```python
from alexasomba_paystack.models.transfer_initiate import TransferInitiate

# TODO update the JSON string below
json = "{}"
# create an instance of TransferInitiate from a JSON string
transfer_initiate_instance = TransferInitiate.from_json(json)
# print the JSON string representation of the object
print TransferInitiate.to_json()

# convert the object into a dict
transfer_initiate_dict = transfer_initiate_instance.to_dict()
# create an instance of TransferInitiate from a dict
transfer_initiate_form_dict = transfer_initiate.from_dict(transfer_initiate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


