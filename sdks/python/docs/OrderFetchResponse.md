# OrderFetchResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**OrderFetchResponseData**](OrderFetchResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.order_fetch_response import OrderFetchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OrderFetchResponse from a JSON string
order_fetch_response_instance = OrderFetchResponse.from_json(json)
# print the JSON string representation of the object
print OrderFetchResponse.to_json()

# convert the object into a dict
order_fetch_response_dict = order_fetch_response_instance.to_dict()
# create an instance of OrderFetchResponse from a dict
order_fetch_response_form_dict = order_fetch_response.from_dict(order_fetch_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


