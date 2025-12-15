# CustomerValidateResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.customer_validate_response import CustomerValidateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerValidateResponse from a JSON string
customer_validate_response_instance = CustomerValidateResponse.from_json(json)
# print the JSON string representation of the object
print CustomerValidateResponse.to_json()

# convert the object into a dict
customer_validate_response_dict = customer_validate_response_instance.to_dict()
# create an instance of CustomerValidateResponse from a dict
customer_validate_response_form_dict = customer_validate_response.from_dict(customer_validate_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


