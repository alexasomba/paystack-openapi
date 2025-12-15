# DisputeUploadURLResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**DisputeUploadURLResponseData**](DisputeUploadURLResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.dispute_upload_url_response import DisputeUploadURLResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DisputeUploadURLResponse from a JSON string
dispute_upload_url_response_instance = DisputeUploadURLResponse.from_json(json)
# print the JSON string representation of the object
print DisputeUploadURLResponse.to_json()

# convert the object into a dict
dispute_upload_url_response_dict = dispute_upload_url_response_instance.to_dict()
# create an instance of DisputeUploadURLResponse from a dict
dispute_upload_url_response_form_dict = dispute_upload_url_response.from_dict(dispute_upload_url_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


