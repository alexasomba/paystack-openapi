# SubscriptionFetchResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**domain** | **str** |  | 
**status** | **str** |  | 
**subscription_code** | **str** |  | 
**email_token** | **str** |  | 
**amount** | **int** |  | 
**cron_expression** | **str** |  | 
**next_payment_date** | **str** |  | 
**open_invoice** | **object** |  | 
**created_at** | **str** |  | 
**cancelled_at** | **object** |  | 
**integration** | **int** |  | 
**plan** | [**SubscriptionFetchResponseDataPlan**](SubscriptionFetchResponseDataPlan.md) |  | 
**authorization** | [**TransactionPartialDebitResponseDataAuthorization**](TransactionPartialDebitResponseDataAuthorization.md) |  | 
**customer** | [**TransactionFetchResponseDataCustomer**](TransactionFetchResponseDataCustomer.md) |  | 
**invoices** | **List[object]** |  | 
**invoices_history** | **List[object]** |  | 
**invoice_limit** | **int** |  | 
**split_code** | **object** |  | 
**most_recent_invoice** | **object** |  | 
**payments_count** | **int** |  | 
**metadata** | **object** |  | 

## Example

```python
from alexasomba_paystack.models.subscription_fetch_response_data import SubscriptionFetchResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionFetchResponseData from a JSON string
subscription_fetch_response_data_instance = SubscriptionFetchResponseData.from_json(json)
# print the JSON string representation of the object
print SubscriptionFetchResponseData.to_json()

# convert the object into a dict
subscription_fetch_response_data_dict = subscription_fetch_response_data_instance.to_dict()
# create an instance of SubscriptionFetchResponseData from a dict
subscription_fetch_response_data_form_dict = subscription_fetch_response_data.from_dict(subscription_fetch_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


