# TransferFeesBreakdownArray


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **str** |  | 
**formula** | **object** |  | 
**type** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.transfer_fees_breakdown_array import TransferFeesBreakdownArray

# TODO update the JSON string below
json = "{}"
# create an instance of TransferFeesBreakdownArray from a JSON string
transfer_fees_breakdown_array_instance = TransferFeesBreakdownArray.from_json(json)
# print the JSON string representation of the object
print TransferFeesBreakdownArray.to_json()

# convert the object into a dict
transfer_fees_breakdown_array_dict = transfer_fees_breakdown_array_instance.to_dict()
# create an instance of TransferFeesBreakdownArray from a dict
transfer_fees_breakdown_array_form_dict = transfer_fees_breakdown_array.from_dict(transfer_fees_breakdown_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


