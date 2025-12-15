# EFT

Details of the EFT provider

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider** | **str** | The EFT provider | [optional] 

## Example

```python
from alexasomba_paystack.models.eft import EFT

# TODO update the JSON string below
json = "{}"
# create an instance of EFT from a JSON string
eft_instance = EFT.from_json(json)
# print the JSON string representation of the object
print EFT.to_json()

# convert the object into a dict
eft_dict = eft_instance.to_dict()
# create an instance of EFT from a dict
eft_form_dict = eft.from_dict(eft_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


