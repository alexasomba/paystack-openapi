# CustomerFetchMandateAuthorizationsResponseDataCustomer


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**customer_code** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 

## Example

```python
from alexasomba_paystack.models.customer_fetch_mandate_authorizations_response_data_customer import CustomerFetchMandateAuthorizationsResponseDataCustomer

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerFetchMandateAuthorizationsResponseDataCustomer from a JSON string
customer_fetch_mandate_authorizations_response_data_customer_instance = CustomerFetchMandateAuthorizationsResponseDataCustomer.from_json(json)
# print the JSON string representation of the object
print CustomerFetchMandateAuthorizationsResponseDataCustomer.to_json()

# convert the object into a dict
customer_fetch_mandate_authorizations_response_data_customer_dict = customer_fetch_mandate_authorizations_response_data_customer_instance.to_dict()
# create an instance of CustomerFetchMandateAuthorizationsResponseDataCustomer from a dict
customer_fetch_mandate_authorizations_response_data_customer_form_dict = customer_fetch_mandate_authorizations_response_data_customer.from_dict(customer_fetch_mandate_authorizations_response_data_customer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


