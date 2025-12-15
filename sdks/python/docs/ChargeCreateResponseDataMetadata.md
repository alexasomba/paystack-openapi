# ChargeCreateResponseDataMetadata


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_fields** | [**List[MetadataCustomFieldsArray]**](MetadataCustomFieldsArray.md) |  | 

## Example

```python
from alexasomba_paystack.models.charge_create_response_data_metadata import ChargeCreateResponseDataMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ChargeCreateResponseDataMetadata from a JSON string
charge_create_response_data_metadata_instance = ChargeCreateResponseDataMetadata.from_json(json)
# print the JSON string representation of the object
print ChargeCreateResponseDataMetadata.to_json()

# convert the object into a dict
charge_create_response_data_metadata_dict = charge_create_response_data_metadata_instance.to_dict()
# create an instance of ChargeCreateResponseDataMetadata from a dict
charge_create_response_data_metadata_form_dict = charge_create_response_data_metadata.from_dict(charge_create_response_data_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


