# ApplePayParam


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain_name** | **str** | The domain or subdomain for your application | 

## Example

```python
from alexasomba_paystack.models.apple_pay_param import ApplePayParam

# TODO update the JSON string below
json = "{}"
# create an instance of ApplePayParam from a JSON string
apple_pay_param_instance = ApplePayParam.from_json(json)
# print the JSON string representation of the object
print ApplePayParam.to_json()

# convert the object into a dict
apple_pay_param_dict = apple_pay_param_instance.to_dict()
# create an instance of ApplePayParam from a dict
apple_pay_param_form_dict = apple_pay_param.from_dict(apple_pay_param_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


