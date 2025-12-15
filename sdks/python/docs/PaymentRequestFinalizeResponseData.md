# PaymentRequestFinalizeResponseData


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
**pdf_url** | **object** |  | 
**line_items** | [**List[PaymentRequestLineItemsArray]**](PaymentRequestLineItemsArray.md) |  | 
**tax** | [**List[PaymentRequestTaxArray]**](PaymentRequestTaxArray.md) |  | 
**request_code** | **str** |  | 
**status** | **str** |  | 
**paid** | **bool** |  | 
**paid_at** | **object** |  | 
**metadata** | **object** |  | 
**notifications** | **List[object]** |  | 
**offline_reference** | **str** |  | 
**customer** | [**PaymentRequestUpdateResponseDataCustomer**](PaymentRequestUpdateResponseDataCustomer.md) |  | 
**created_at** | **str** |  | 
**discount** | [**PaymentRequestFinalizeResponseDataDiscount**](PaymentRequestFinalizeResponseDataDiscount.md) |  | 
**split_code** | **object** |  | 
**pending_amount** | **int** |  | 

## Example

```python
from alexasomba_paystack.models.payment_request_finalize_response_data import PaymentRequestFinalizeResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentRequestFinalizeResponseData from a JSON string
payment_request_finalize_response_data_instance = PaymentRequestFinalizeResponseData.from_json(json)
# print the JSON string representation of the object
print PaymentRequestFinalizeResponseData.to_json()

# convert the object into a dict
payment_request_finalize_response_data_dict = payment_request_finalize_response_data_instance.to_dict()
# create an instance of PaymentRequestFinalizeResponseData from a dict
payment_request_finalize_response_data_form_dict = payment_request_finalize_response_data.from_dict(payment_request_finalize_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


