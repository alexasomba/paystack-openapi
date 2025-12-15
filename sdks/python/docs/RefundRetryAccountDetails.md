# RefundRetryAccountDetails

An object that contains the customer’s account details for refund

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** | The currency of the customer&#39;s bank account. It should be the same as the currency the payment was made | 
**account_number** | **str** | The customer&#39;s account number | 
**bank_id** | **str** | The ID representing the customer&#39;s bank. You can get the list of bank IDs by calling the List Banks endpoint. | 

## Example

```python
from alexasomba_paystack.models.refund_retry_account_details import RefundRetryAccountDetails

# TODO update the JSON string below
json = "{}"
# create an instance of RefundRetryAccountDetails from a JSON string
refund_retry_account_details_instance = RefundRetryAccountDetails.from_json(json)
# print the JSON string representation of the object
print RefundRetryAccountDetails.to_json()

# convert the object into a dict
refund_retry_account_details_dict = refund_retry_account_details_instance.to_dict()
# create an instance of RefundRetryAccountDetails from a dict
refund_retry_account_details_form_dict = refund_retry_account_details.from_dict(refund_retry_account_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


