# RefundCreateResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**RefundCreateResponseData**](RefundCreateResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.refund_create_response import RefundCreateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RefundCreateResponse from a JSON string
refund_create_response_instance = RefundCreateResponse.from_json(json)
# print the JSON string representation of the object
print RefundCreateResponse.to_json()

# convert the object into a dict
refund_create_response_dict = refund_create_response_instance.to_dict()
# create an instance of RefundCreateResponse from a dict
refund_create_response_form_dict = refund_create_response.from_dict(refund_create_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


