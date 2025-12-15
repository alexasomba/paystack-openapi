# CustomerFetchMandateAuthorizationsResponseMeta


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**per_page** | **int** |  | 
**next** | **str** |  | [optional] 
**count** | **int** |  | 
**total** | **int** |  | 

## Example

```python
from alexasomba_paystack.models.customer_fetch_mandate_authorizations_response_meta import CustomerFetchMandateAuthorizationsResponseMeta

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerFetchMandateAuthorizationsResponseMeta from a JSON string
customer_fetch_mandate_authorizations_response_meta_instance = CustomerFetchMandateAuthorizationsResponseMeta.from_json(json)
# print the JSON string representation of the object
print CustomerFetchMandateAuthorizationsResponseMeta.to_json()

# convert the object into a dict
customer_fetch_mandate_authorizations_response_meta_dict = customer_fetch_mandate_authorizations_response_meta_instance.to_dict()
# create an instance of CustomerFetchMandateAuthorizationsResponseMeta from a dict
customer_fetch_mandate_authorizations_response_meta_form_dict = customer_fetch_mandate_authorizations_response_meta.from_dict(customer_fetch_mandate_authorizations_response_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


