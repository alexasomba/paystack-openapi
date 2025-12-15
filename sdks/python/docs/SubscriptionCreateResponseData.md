# SubscriptionCreateResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | **int** |  | 
**plan** | **int** |  | 
**integration** | **int** |  | 
**domain** | **str** |  | 
**start** | **int** |  | 
**status** | **str** |  | 
**quantity** | **int** |  | 
**amount** | **int** |  | 
**authorization** | **int** |  | 
**invoice_limit** | **int** |  | 
**split_code** | **object** |  | 
**subscription_code** | **str** |  | 
**email_token** | **str** |  | 
**id** | **int** |  | 
**cancelled_at** | **object** |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 
**cron_expression** | **str** |  | 
**next_payment_date** | **str** |  | 
**easy_cron_id** | **str** |  | 
**open_invoice** | **str** |  | 
**metadata** | **object** |  | 

## Example

```python
from alexasomba_paystack.models.subscription_create_response_data import SubscriptionCreateResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionCreateResponseData from a JSON string
subscription_create_response_data_instance = SubscriptionCreateResponseData.from_json(json)
# print the JSON string representation of the object
print SubscriptionCreateResponseData.to_json()

# convert the object into a dict
subscription_create_response_data_dict = subscription_create_response_data_instance.to_dict()
# create an instance of SubscriptionCreateResponseData from a dict
subscription_create_response_data_form_dict = subscription_create_response_data.from_dict(subscription_create_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


