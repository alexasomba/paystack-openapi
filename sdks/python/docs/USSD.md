# USSD

The USSD code for the provider to charge

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The three-digit USSD code. | [optional] 

## Example

```python
from alexasomba_paystack.models.ussd import USSD

# TODO update the JSON string below
json = "{}"
# create an instance of USSD from a JSON string
ussd_instance = USSD.from_json(json)
# print the JSON string representation of the object
print USSD.to_json()

# convert the object into a dict
ussd_dict = ussd_instance.to_dict()
# create an instance of USSD from a dict
ussd_form_dict = ussd.from_dict(ussd_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


