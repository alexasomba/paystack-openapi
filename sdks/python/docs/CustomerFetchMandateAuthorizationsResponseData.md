# CustomerFetchMandateAuthorizationsResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**status** | **str** |  | 
**mandate_id** | **int** |  | 
**authorization_id** | **int** |  | 
**authorization_code** | **str** |  | 
**integration_id** | **int** |  | 
**account_number** | **str** |  | 
**bank_code** | **str** |  | 
**bank_name** | **str** |  | [optional] 
**customer** | [**CustomerFetchMandateAuthorizationsResponseDataCustomer**](CustomerFetchMandateAuthorizationsResponseDataCustomer.md) |  | 
**authorized_at** | **datetime** |  | 

## Example

```python
from alexasomba_paystack.models.customer_fetch_mandate_authorizations_response_data import CustomerFetchMandateAuthorizationsResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerFetchMandateAuthorizationsResponseData from a JSON string
customer_fetch_mandate_authorizations_response_data_instance = CustomerFetchMandateAuthorizationsResponseData.from_json(json)
# print the JSON string representation of the object
print CustomerFetchMandateAuthorizationsResponseData.to_json()

# convert the object into a dict
customer_fetch_mandate_authorizations_response_data_dict = customer_fetch_mandate_authorizations_response_data_instance.to_dict()
# create an instance of CustomerFetchMandateAuthorizationsResponseData from a dict
customer_fetch_mandate_authorizations_response_data_form_dict = customer_fetch_mandate_authorizations_response_data.from_dict(customer_fetch_mandate_authorizations_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


