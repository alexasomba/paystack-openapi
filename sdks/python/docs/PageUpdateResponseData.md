# PageUpdateResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **str** |  | 
**name** | **str** |  | 
**description** | **object** |  | 
**amount** | **object** |  | 
**currency** | **str** |  | 
**slug** | **str** |  | 
**custom_fields** | **object** |  | 
**type** | **str** |  | 
**redirect_url** | **object** |  | 
**success_message** | **object** |  | 
**collect_phone** | **bool** |  | 
**active** | **bool** |  | 
**published** | **bool** |  | 
**migrate** | **bool** |  | 
**notification_email** | **object** |  | 
**metadata** | **object** |  | 
**split_code** | **object** |  | 
**id** | **int** |  | 
**integration** | **int** |  | 
**plan** | **object** |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.page_update_response_data import PageUpdateResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of PageUpdateResponseData from a JSON string
page_update_response_data_instance = PageUpdateResponseData.from_json(json)
# print the JSON string representation of the object
print PageUpdateResponseData.to_json()

# convert the object into a dict
page_update_response_data_dict = page_update_response_data_instance.to_dict()
# create an instance of PageUpdateResponseData from a dict
page_update_response_data_form_dict = page_update_response_data.from_dict(page_update_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


