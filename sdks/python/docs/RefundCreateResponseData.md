# RefundCreateResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction** | [**RefundCreateResponseDataTransaction**](RefundCreateResponseDataTransaction.md) |  | 
**integration** | **int** |  | 
**deducted_amount** | **int** |  | 
**channel** | **object** |  | 
**merchant_note** | **str** |  | 
**customer_note** | **str** |  | 
**status** | **str** |  | 
**refunded_by** | **str** |  | 
**expected_at** | **str** |  | 
**currency** | **str** |  | 
**domain** | **str** |  | 
**amount** | **int** |  | 
**fully_deducted** | **bool** |  | 
**id** | **int** |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.refund_create_response_data import RefundCreateResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of RefundCreateResponseData from a JSON string
refund_create_response_data_instance = RefundCreateResponseData.from_json(json)
# print the JSON string representation of the object
print RefundCreateResponseData.to_json()

# convert the object into a dict
refund_create_response_data_dict = refund_create_response_data_instance.to_dict()
# create an instance of RefundCreateResponseData from a dict
refund_create_response_data_form_dict = refund_create_response_data.from_dict(refund_create_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


