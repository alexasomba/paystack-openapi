# PageListResponseArray


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integration** | **int** |  | 
**plan** | **object** |  | 
**domain** | **str** |  | 
**name** | **str** |  | 
**description** | **str** |  | 
**amount** | **int** |  | 
**currency** | **str** |  | 
**slug** | **str** |  | 
**custom_fields** | **List[object]** |  | 
**type** | **str** |  | 
**redirect_url** | **str** |  | 
**success_message** | **str** |  | 
**collect_phone** | **bool** |  | 
**active** | **bool** |  | 
**published** | **bool** |  | 
**migrate** | **bool** |  | 
**notification_email** | **object** |  | 
**metadata** | **object** |  | 
**split_code** | **object** |  | 
**id** | **int** |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.page_list_response_array import PageListResponseArray

# TODO update the JSON string below
json = "{}"
# create an instance of PageListResponseArray from a JSON string
page_list_response_array_instance = PageListResponseArray.from_json(json)
# print the JSON string representation of the object
print PageListResponseArray.to_json()

# convert the object into a dict
page_list_response_array_dict = page_list_response_array_instance.to_dict()
# create an instance of PageListResponseArray from a dict
page_list_response_array_form_dict = page_list_response_array.from_dict(page_list_response_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


