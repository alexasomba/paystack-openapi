# CustomerFetchResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactions** | **List[object]** |  | 
**subscriptions** | **List[object]** |  | 
**authorizations** | **List[object]** |  | 
**first_name** | **str** |  | 
**last_name** | **str** |  | 
**email** | **str** |  | 
**phone** | **str** |  | 
**metadata** | [**BulkChargeFetchBulkBatchChargesResponseArrayCustomerMetadata**](BulkChargeFetchBulkBatchChargesResponseArrayCustomerMetadata.md) |  | 
**domain** | **str** |  | 
**customer_code** | **str** |  | 
**risk_action** | **str** |  | 
**id** | **int** |  | 
**integration** | **int** |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 
**total_transactions** | **int** |  | 
**total_transaction_value** | **List[object]** |  | 
**dedicated_account** | **object** |  | 
**dedicated_accounts** | **List[object]** |  | 
**identified** | **bool** |  | 
**identifications** | **object** |  | 

## Example

```python
from alexasomba_paystack.models.customer_fetch_response_data import CustomerFetchResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerFetchResponseData from a JSON string
customer_fetch_response_data_instance = CustomerFetchResponseData.from_json(json)
# print the JSON string representation of the object
print CustomerFetchResponseData.to_json()

# convert the object into a dict
customer_fetch_response_data_dict = customer_fetch_response_data_instance.to_dict()
# create an instance of CustomerFetchResponseData from a dict
customer_fetch_response_data_form_dict = customer_fetch_response_data.from_dict(customer_fetch_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


