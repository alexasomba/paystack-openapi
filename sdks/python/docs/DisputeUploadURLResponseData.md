# DisputeUploadURLResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signed_url** | **str** |  | 
**file_name** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.dispute_upload_url_response_data import DisputeUploadURLResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of DisputeUploadURLResponseData from a JSON string
dispute_upload_url_response_data_instance = DisputeUploadURLResponseData.from_json(json)
# print the JSON string representation of the object
print DisputeUploadURLResponseData.to_json()

# convert the object into a dict
dispute_upload_url_response_data_dict = dispute_upload_url_response_data_instance.to_dict()
# create an instance of DisputeUploadURLResponseData from a dict
dispute_upload_url_response_data_form_dict = dispute_upload_url_response_data.from_dict(dispute_upload_url_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


