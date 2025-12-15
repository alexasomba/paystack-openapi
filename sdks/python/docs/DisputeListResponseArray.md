# DisputeListResponseArray


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**refund_amount** | **int** |  | 
**currency** | **str** |  | 
**status** | **str** |  | 
**resolution** | **object** |  | 
**domain** | **str** |  | 
**transaction** | [**DisputeListResponseArrayTransaction**](DisputeListResponseArrayTransaction.md) |  | 
**transaction_reference** | **object** |  | 
**category** | **str** |  | 
**customer** | [**SubscriptionListResponseArrayCustomer**](SubscriptionListResponseArrayCustomer.md) |  | 
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
from alexasomba_paystack.models.dispute_list_response_array import DisputeListResponseArray

# TODO update the JSON string below
json = "{}"
# create an instance of DisputeListResponseArray from a JSON string
dispute_list_response_array_instance = DisputeListResponseArray.from_json(json)
# print the JSON string representation of the object
print DisputeListResponseArray.to_json()

# convert the object into a dict
dispute_list_response_array_dict = dispute_list_response_array_instance.to_dict()
# create an instance of DisputeListResponseArray from a dict
dispute_list_response_array_form_dict = dispute_list_response_array.from_dict(dispute_list_response_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


