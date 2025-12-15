# OrderListResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**List[OrderListResponseArray]**](OrderListResponseArray.md) |  | 
**meta** | [**OrderListResponseMeta**](OrderListResponseMeta.md) |  | 

## Example

```python
from alexasomba_paystack.models.order_list_response import OrderListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OrderListResponse from a JSON string
order_list_response_instance = OrderListResponse.from_json(json)
# print the JSON string representation of the object
print OrderListResponse.to_json()

# convert the object into a dict
order_list_response_dict = order_list_response_instance.to_dict()
# create an instance of OrderListResponse from a dict
order_list_response_form_dict = order_list_response.from_dict(order_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


