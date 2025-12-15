# DisputeResolveResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** |  | 
**last4** | **str** |  | 
**bin** | **str** |  | 
**transaction_reference** | **object** |  | 
**merchant_transaction_reference** | **str** |  | 
**refund_amount** | **int** |  | 
**status** | **str** |  | 
**domain** | **str** |  | 
**resolution** | **str** |  | 
**category** | **str** |  | 
**note** | **object** |  | 
**attachments** | **str** |  | 
**id** | **int** |  | 
**integration** | **int** |  | 
**transaction** | **int** |  | 
**created_by** | **int** |  | 
**evidence** | **int** |  | 
**resolved_at** | **str** |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 
**due_at** | **object** |  | 
**message** | [**DisputeResolveResponseDataMessage**](DisputeResolveResponseDataMessage.md) |  | 

## Example

```python
from alexasomba_paystack.models.dispute_resolve_response_data import DisputeResolveResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of DisputeResolveResponseData from a JSON string
dispute_resolve_response_data_instance = DisputeResolveResponseData.from_json(json)
# print the JSON string representation of the object
print DisputeResolveResponseData.to_json()

# convert the object into a dict
dispute_resolve_response_data_dict = dispute_resolve_response_data_instance.to_dict()
# create an instance of DisputeResolveResponseData from a dict
dispute_resolve_response_data_form_dict = dispute_resolve_response_data.from_dict(dispute_resolve_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


