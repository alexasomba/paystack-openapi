# TransferCreateResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transfersessionid** | **List[object]** |  | 
**transfertrials** | **List[object]** |  | 
**domain** | **str** |  | 
**amount** | **int** |  | 
**currency** | **str** |  | 
**reference** | **str** |  | 
**source** | **str** |  | 
**source_details** | **object** |  | 
**reason** | **str** |  | 
**status** | **str** |  | 
**failures** | **object** |  | 
**transfer_code** | **str** |  | 
**titan_code** | **object** |  | 
**transferred_at** | **object** |  | 
**id** | **int** |  | 
**integration** | **int** |  | 
**request** | **int** |  | 
**recipient** | **int** |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.transfer_create_response_data import TransferCreateResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of TransferCreateResponseData from a JSON string
transfer_create_response_data_instance = TransferCreateResponseData.from_json(json)
# print the JSON string representation of the object
print TransferCreateResponseData.to_json()

# convert the object into a dict
transfer_create_response_data_dict = transfer_create_response_data_instance.to_dict()
# create an instance of TransferCreateResponseData from a dict
transfer_create_response_data_form_dict = transfer_create_response_data.from_dict(transfer_create_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


