# PageCreateResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**integration** | **int** |  | 
**domain** | **str** |  | 
**slug** | **str** |  | 
**currency** | **str** |  | 
**type** | **str** |  | 
**collect_phone** | **bool** |  | 
**active** | **bool** |  | 
**published** | **bool** |  | 
**migrate** | **bool** |  | 
**id** | **int** |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.page_create_response_data import PageCreateResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of PageCreateResponseData from a JSON string
page_create_response_data_instance = PageCreateResponseData.from_json(json)
# print the JSON string representation of the object
print PageCreateResponseData.to_json()

# convert the object into a dict
page_create_response_data_dict = page_create_response_data_instance.to_dict()
# create an instance of PageCreateResponseData from a dict
page_create_response_data_form_dict = page_create_response_data.from_dict(page_create_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


