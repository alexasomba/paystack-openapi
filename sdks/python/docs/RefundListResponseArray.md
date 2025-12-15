# RefundListResponseArray


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integration** | **int** |  | 
**transaction** | **int** |  | 
**dispute** | **object** |  | 
**settlement** | **object** |  | 
**id** | **int** |  | 
**domain** | **str** |  | 
**currency** | **str** |  | 
**amount** | **int** |  | 
**status** | **str** |  | 
**refunded_at** | **object** |  | 
**refunded_by** | **str** |  | 
**customer_note** | **str** |  | 
**merchant_note** | **str** |  | 
**deducted_amount** | **int** |  | 
**fully_deducted** | **int** |  | 
**created_at** | **str** |  | 
**bank_reference** | **object** |  | 
**transaction_reference** | **str** |  | 
**reason** | **str** |  | 
**customer** | [**SubscriptionListResponseArrayCustomer**](SubscriptionListResponseArrayCustomer.md) |  | 
**refund_type** | **str** |  | 
**transaction_amount** | **int** |  | 
**initiated_by** | **str** |  | 
**refund_channel** | **str** |  | 
**session_id** | **object** |  | 
**collect_account_number** | **bool** |  | 

## Example

```python
from alexasomba_paystack.models.refund_list_response_array import RefundListResponseArray

# TODO update the JSON string below
json = "{}"
# create an instance of RefundListResponseArray from a JSON string
refund_list_response_array_instance = RefundListResponseArray.from_json(json)
# print the JSON string representation of the object
print RefundListResponseArray.to_json()

# convert the object into a dict
refund_list_response_array_dict = refund_list_response_array_instance.to_dict()
# create an instance of RefundListResponseArray from a dict
refund_list_response_array_form_dict = refund_list_response_array.from_dict(refund_list_response_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


