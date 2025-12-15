# CustomerCreateResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactions** | **List[object]** |  | 
**subscriptions** | **List[object]** |  | 
**authorizations** | **List[object]** |  | 
**email** | **str** |  | 
**first_name** | **str** |  | 
**last_name** | **str** |  | 
**phone** | **str** |  | 
**integration** | **int** |  | 
**domain** | **str** |  | 
**metadata** | [**BulkChargeFetchBulkBatchChargesResponseArrayCustomerMetadata**](BulkChargeFetchBulkBatchChargesResponseArrayCustomerMetadata.md) |  | 
**customer_code** | **str** |  | 
**risk_action** | **str** |  | 
**id** | **int** |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 
**identified** | **bool** |  | 
**identifications** | **object** |  | 

## Example

```python
from alexasomba_paystack.models.customer_create_response_data import CustomerCreateResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerCreateResponseData from a JSON string
customer_create_response_data_instance = CustomerCreateResponseData.from_json(json)
# print the JSON string representation of the object
print CustomerCreateResponseData.to_json()

# convert the object into a dict
customer_create_response_data_dict = customer_create_response_data_instance.to_dict()
# create an instance of CustomerCreateResponseData from a dict
customer_create_response_data_form_dict = customer_create_response_data.from_dict(customer_create_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


