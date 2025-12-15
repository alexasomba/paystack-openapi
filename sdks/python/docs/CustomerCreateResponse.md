# CustomerCreateResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**CustomerCreateResponseData**](CustomerCreateResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.customer_create_response import CustomerCreateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerCreateResponse from a JSON string
customer_create_response_instance = CustomerCreateResponse.from_json(json)
# print the JSON string representation of the object
print CustomerCreateResponse.to_json()

# convert the object into a dict
customer_create_response_dict = customer_create_response_instance.to_dict()
# create an instance of CustomerCreateResponse from a dict
customer_create_response_form_dict = customer_create_response.from_dict(customer_create_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


