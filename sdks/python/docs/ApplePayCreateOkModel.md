# ApplePayCreateOkModel


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** | An indicator | [optional] 
**message** | **str** | A short description of the response | [optional] 

## Example

```python
from alexasomba_paystack.models.apple_pay_create_ok_model import ApplePayCreateOkModel

# TODO update the JSON string below
json = "{}"
# create an instance of ApplePayCreateOkModel from a JSON string
apple_pay_create_ok_model_instance = ApplePayCreateOkModel.from_json(json)
# print the JSON string representation of the object
print ApplePayCreateOkModel.to_json()

# convert the object into a dict
apple_pay_create_ok_model_dict = apple_pay_create_ok_model_instance.to_dict()
# create an instance of ApplePayCreateOkModel from a dict
apple_pay_create_ok_model_form_dict = apple_pay_create_ok_model.from_dict(apple_pay_create_ok_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


