# PaymentRequestCreateResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**integration** | **int** |  | 
**domain** | **str** |  | 
**amount** | **int** |  | 
**currency** | **str** |  | 
**due_date** | **str** |  | 
**has_invoice** | **bool** |  | 
**invoice_number** | **int** |  | 
**description** | **str** |  | 
**line_items** | **List[object]** |  | 
**tax** | **List[object]** |  | 
**request_code** | **str** |  | 
**status** | **str** |  | 
**paid** | **bool** |  | 
**metadata** | **object** |  | 
**notifications** | **List[object]** |  | 
**offline_reference** | **str** |  | 
**customer** | **int** |  | 
**created_at** | **str** |  | 
**discount** | **object** |  | 
**split_code** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.payment_request_create_response_data import PaymentRequestCreateResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentRequestCreateResponseData from a JSON string
payment_request_create_response_data_instance = PaymentRequestCreateResponseData.from_json(json)
# print the JSON string representation of the object
print PaymentRequestCreateResponseData.to_json()

# convert the object into a dict
payment_request_create_response_data_dict = payment_request_create_response_data_instance.to_dict()
# create an instance of PaymentRequestCreateResponseData from a dict
payment_request_create_response_data_form_dict = payment_request_create_response_data.from_dict(payment_request_create_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


