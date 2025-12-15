# TransferFetchResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** |  | 
**created_at** | **str** |  | 
**currency** | **str** |  | 
**domain** | **str** |  | 
**failures** | **object** |  | 
**id** | **int** |  | 
**integration** | **int** |  | 
**reason** | **str** |  | 
**reference** | **str** |  | 
**source** | **str** |  | 
**source_details** | **object** |  | 
**status** | **str** |  | 
**titan_code** | **object** |  | 
**transfer_code** | **str** |  | 
**request** | **int** |  | 
**transferred_at** | **object** |  | 
**updated_at** | **str** |  | 
**recipient** | [**TransferListResponseArrayRecipient**](TransferListResponseArrayRecipient.md) |  | 
**session** | [**TransferListResponseArraySession**](TransferListResponseArraySession.md) |  | 
**fee_charged** | **int** |  | 
**fees_breakdown** | [**List[TransferFeesBreakdownArray]**](TransferFeesBreakdownArray.md) |  | 
**gateway_response** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.transfer_fetch_response_data import TransferFetchResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of TransferFetchResponseData from a JSON string
transfer_fetch_response_data_instance = TransferFetchResponseData.from_json(json)
# print the JSON string representation of the object
print TransferFetchResponseData.to_json()

# convert the object into a dict
transfer_fetch_response_data_dict = transfer_fetch_response_data_instance.to_dict()
# create an instance of TransferFetchResponseData from a dict
transfer_fetch_response_data_form_dict = transfer_fetch_response_data.from_dict(transfer_fetch_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


