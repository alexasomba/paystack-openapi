# PaymentRequestUpdate


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | **str** | Customer id or code | [optional] 
**amount** | **int** | Payment request amount. Only useful if line items and tax values are ignored.  The endpoint will throw a friendly warning if neither is available. | [optional] 
**currency** | **str** | Specify the currency of the invoice. Allowed values are NGN, GHS, ZAR and USD. Defaults to NGN | [optional] 
**due_date** | **datetime** | ISO 8601 representation of request due date | [optional] 
**description** | **str** | A short description of the payment request | [optional] 
**line_items** | **List[object]** | Array of line items | [optional] 
**tax** | **List[object]** | Array of taxes | [optional] 
**send_notification** | **bool** | Indicates whether Paystack sends an email notification to customer. Defaults to true | [optional] 
**draft** | **bool** | Indicate if request should be saved as draft. Defaults to false and overrides send_notification | [optional] 
**has_invoice** | **List[object]** | Set to true to create a draft invoice (adds an auto incrementing invoice number if none is provided) even if there are no line_items or tax passed | [optional] 
**invoice_number** | **int** | Numeric value of invoice. Invoice will start from 1 and auto increment from there. This field is to help override whatever value Paystack decides.  Auto increment for subsequent invoices continue from this point. | [optional] 
**split_code** | **str** | The split code of the transaction split. | [optional] 

## Example

```python
from alexasomba_paystack.models.payment_request_update import PaymentRequestUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentRequestUpdate from a JSON string
payment_request_update_instance = PaymentRequestUpdate.from_json(json)
# print the JSON string representation of the object
print PaymentRequestUpdate.to_json()

# convert the object into a dict
payment_request_update_dict = payment_request_update_instance.to_dict()
# create an instance of PaymentRequestUpdate from a dict
payment_request_update_form_dict = payment_request_update.from_dict(payment_request_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


