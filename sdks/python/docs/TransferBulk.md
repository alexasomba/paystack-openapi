# TransferBulk


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | **str** | The source of funds for the transfer. | [default to 'balance']
**currency** | **str** | Specify the currency of the transfer. | [optional] [default to 'NGN']
**transfers** | [**List[TransferBase]**](TransferBase.md) | A list of transfer object | 

## Example

```python
from alexasomba_paystack.models.transfer_bulk import TransferBulk

# TODO update the JSON string below
json = "{}"
# create an instance of TransferBulk from a JSON string
transfer_bulk_instance = TransferBulk.from_json(json)
# print the JSON string representation of the object
print TransferBulk.to_json()

# convert the object into a dict
transfer_bulk_dict = transfer_bulk_instance.to_dict()
# create an instance of TransferBulk from a dict
transfer_bulk_form_dict = transfer_bulk.from_dict(transfer_bulk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


