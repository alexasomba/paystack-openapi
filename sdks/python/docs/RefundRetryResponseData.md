# RefundRetryResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integration** | **float** |  | 
**transaction** | **float** |  | 
**dispute** | **object** |  | 
**settlement** | **object** |  | 
**id** | **float** |  | 
**domain** | **str** |  | 
**currency** | **str** |  | 
**amount** | **float** |  | 
**status** | **str** |  | 
**refunded_at** | **str** |  | 
**expected_at** | **str** |  | 
**channel** | **str** |  | 
**refunded_by** | **str** |  | 
**customer_note** | **str** |  | 
**merchant_note** | **str** |  | 
**deducted_amount** | **float** |  | 
**fully_deducted** | **bool** |  | 
**bank_reference** | **str** |  | 
**reason** | **str** |  | 
**customer** | **object** |  | 
**initiated_by** | **str** |  | 
**reversed_at** | **str** |  | 
**session_id** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.refund_retry_response_data import RefundRetryResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of RefundRetryResponseData from a JSON string
refund_retry_response_data_instance = RefundRetryResponseData.from_json(json)
# print the JSON string representation of the object
print RefundRetryResponseData.to_json()

# convert the object into a dict
refund_retry_response_data_dict = refund_retry_response_data_instance.to_dict()
# create an instance of RefundRetryResponseData from a dict
refund_retry_response_data_form_dict = refund_retry_response_data.from_dict(refund_retry_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


