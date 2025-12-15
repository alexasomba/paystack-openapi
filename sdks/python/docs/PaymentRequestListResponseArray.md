# PaymentRequestListResponseArray


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
**pdf_url** | **str** |  | 
**line_items** | [**List[PaymentRequestLineItemsArray]**](PaymentRequestLineItemsArray.md) |  | 
**tax** | [**List[PaymentRequestTaxArray]**](PaymentRequestTaxArray.md) |  | 
**request_code** | **str** |  | 
**status** | **str** |  | 
**paid** | **bool** |  | 
**paid_at** | **object** |  | 
**metadata** | **object** |  | 
**notifications** | **List[object]** |  | 
**offline_reference** | **str** |  | 
**customer** | [**TransactionFetchResponseDataCustomer**](TransactionFetchResponseDataCustomer.md) |  | 
**created_at** | **str** |  | 
**discount** | **object** |  | 
**split_code** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.payment_request_list_response_array import PaymentRequestListResponseArray

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentRequestListResponseArray from a JSON string
payment_request_list_response_array_instance = PaymentRequestListResponseArray.from_json(json)
# print the JSON string representation of the object
print PaymentRequestListResponseArray.to_json()

# convert the object into a dict
payment_request_list_response_array_dict = payment_request_list_response_array_instance.to_dict()
# create an instance of PaymentRequestListResponseArray from a dict
payment_request_list_response_array_form_dict = payment_request_list_response_array.from_dict(payment_request_list_response_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


