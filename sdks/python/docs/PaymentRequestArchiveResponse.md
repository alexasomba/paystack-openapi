# PaymentRequestArchiveResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.payment_request_archive_response import PaymentRequestArchiveResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentRequestArchiveResponse from a JSON string
payment_request_archive_response_instance = PaymentRequestArchiveResponse.from_json(json)
# print the JSON string representation of the object
print PaymentRequestArchiveResponse.to_json()

# convert the object into a dict
payment_request_archive_response_dict = payment_request_archive_response_instance.to_dict()
# create an instance of PaymentRequestArchiveResponse from a dict
payment_request_archive_response_form_dict = payment_request_archive_response.from_dict(payment_request_archive_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


