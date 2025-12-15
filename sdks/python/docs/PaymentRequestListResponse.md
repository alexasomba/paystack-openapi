# PaymentRequestListResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**List[PaymentRequestListResponseArray]**](PaymentRequestListResponseArray.md) |  | 
**meta** | [**BulkChargeListResponseMeta**](BulkChargeListResponseMeta.md) |  | 

## Example

```python
from alexasomba_paystack.models.payment_request_list_response import PaymentRequestListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentRequestListResponse from a JSON string
payment_request_list_response_instance = PaymentRequestListResponse.from_json(json)
# print the JSON string representation of the object
print PaymentRequestListResponse.to_json()

# convert the object into a dict
payment_request_list_response_dict = payment_request_list_response_instance.to_dict()
# create an instance of PaymentRequestListResponse from a dict
payment_request_list_response_form_dict = payment_request_list_response.from_dict(payment_request_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


