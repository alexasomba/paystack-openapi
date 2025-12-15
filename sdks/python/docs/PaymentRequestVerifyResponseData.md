# PaymentRequestVerifyResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**integration** | [**PaymentRequestVerifyResponseDataIntegration**](PaymentRequestVerifyResponseDataIntegration.md) |  | 
**domain** | **str** |  | 
**amount** | **int** |  | 
**currency** | **str** |  | 
**due_date** | **str** |  | 
**has_invoice** | **bool** |  | 
**invoice_number** | **int** |  | 
**description** | **object** |  | 
**pdf_url** | **str** |  | 
**line_items** | **List[object]** |  | 
**tax** | **List[object]** |  | 
**request_code** | **str** |  | 
**status** | **str** |  | 
**paid** | **bool** |  | 
**paid_at** | **object** |  | 
**metadata** | **object** |  | 
**notifications** | [**List[PaymentRequestNotificationsArray]**](PaymentRequestNotificationsArray.md) |  | 
**offline_reference** | **str** |  | 
**customer** | [**PaymentRequestUpdateResponseDataCustomer**](PaymentRequestUpdateResponseDataCustomer.md) |  | 
**created_at** | **str** |  | 
**discount** | **object** |  | 
**split_code** | **object** |  | 
**pending_amount** | **int** |  | 

## Example

```python
from alexasomba_paystack.models.payment_request_verify_response_data import PaymentRequestVerifyResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentRequestVerifyResponseData from a JSON string
payment_request_verify_response_data_instance = PaymentRequestVerifyResponseData.from_json(json)
# print the JSON string representation of the object
print PaymentRequestVerifyResponseData.to_json()

# convert the object into a dict
payment_request_verify_response_data_dict = payment_request_verify_response_data_instance.to_dict()
# create an instance of PaymentRequestVerifyResponseData from a dict
payment_request_verify_response_data_form_dict = payment_request_verify_response_data.from_dict(payment_request_verify_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


