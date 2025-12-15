# ChargeCreateResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**domain** | **str** |  | 
**status** | **str** |  | 
**reference** | **str** |  | 
**receipt_number** | **object** |  | 
**amount** | **int** |  | 
**message** | **str** |  | 
**gateway_response** | **str** |  | 
**paid_at** | **str** |  | 
**created_at** | **str** |  | 
**channel** | **str** |  | 
**currency** | **str** |  | 
**ip_address** | **str** |  | 
**metadata** | [**TransactionFetchResponseDataMetadata**](TransactionFetchResponseDataMetadata.md) |  | 
**log** | [**ChargeAuthorizationResponseDataLog**](ChargeAuthorizationResponseDataLog.md) |  | 
**fees** | **int** |  | 
**fees_split** | **int** |  | 
**authorization** | [**TransactionFetchResponseDataAuthorization**](TransactionFetchResponseDataAuthorization.md) |  | 
**customer** | [**TransactionFetchResponseDataCustomer**](TransactionFetchResponseDataCustomer.md) |  | 
**plan** | **object** |  | 
**split** | **object** |  | 
**order_id** | **object** |  | 
**requested_amount** | **int** |  | 
**pos_transaction_data** | **object** |  | 
**source** | **object** |  | 
**fees_breakdown** | **object** |  | 
**connect** | **object** |  | 
**transaction_date** | **str** |  | 
**plan_object** | **object** |  | 
**subaccount** | **object** |  | 

## Example

```python
from alexasomba_paystack.models.charge_create_response_data import ChargeCreateResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ChargeCreateResponseData from a JSON string
charge_create_response_data_instance = ChargeCreateResponseData.from_json(json)
# print the JSON string representation of the object
print ChargeCreateResponseData.to_json()

# convert the object into a dict
charge_create_response_data_dict = charge_create_response_data_instance.to_dict()
# create an instance of ChargeCreateResponseData from a dict
charge_create_response_data_form_dict = charge_create_response_data.from_dict(charge_create_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


