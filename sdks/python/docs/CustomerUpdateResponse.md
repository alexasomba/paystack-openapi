# CustomerUpdateResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**CustomerUpdateResponseData**](CustomerUpdateResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.customer_update_response import CustomerUpdateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerUpdateResponse from a JSON string
customer_update_response_instance = CustomerUpdateResponse.from_json(json)
# print the JSON string representation of the object
print CustomerUpdateResponse.to_json()

# convert the object into a dict
customer_update_response_dict = customer_update_response_instance.to_dict()
# create an instance of CustomerUpdateResponse from a dict
customer_update_response_form_dict = customer_update_response.from_dict(customer_update_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


