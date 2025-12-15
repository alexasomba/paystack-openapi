# DisputeFetchResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**refund_amount** | **int** |  | 
**currency** | **str** |  | 
**status** | **str** |  | 
**resolution** | **object** |  | 
**domain** | **str** |  | 
**transaction** | [**DisputeFetchResponseDataTransaction**](DisputeFetchResponseDataTransaction.md) |  | 
**transaction_reference** | **object** |  | 
**category** | **str** |  | 
**customer** | [**ChargeCreateResponseDataCustomer**](ChargeCreateResponseDataCustomer.md) |  | 
**bin** | **str** |  | 
**last4** | **str** |  | 
**due_at** | **object** |  | 
**resolved_at** | **object** |  | 
**evidence** | **object** |  | 
**attachments** | **object** |  | 
**note** | **object** |  | 
**history** | [**List[DisputeHistoryArray]**](DisputeHistoryArray.md) |  | 
**messages** | [**List[DisputeMessagesArray]**](DisputeMessagesArray.md) |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.dispute_fetch_response_data import DisputeFetchResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of DisputeFetchResponseData from a JSON string
dispute_fetch_response_data_instance = DisputeFetchResponseData.from_json(json)
# print the JSON string representation of the object
print DisputeFetchResponseData.to_json()

# convert the object into a dict
dispute_fetch_response_data_dict = dispute_fetch_response_data_instance.to_dict()
# create an instance of DisputeFetchResponseData from a dict
dispute_fetch_response_data_form_dict = dispute_fetch_response_data.from_dict(dispute_fetch_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


