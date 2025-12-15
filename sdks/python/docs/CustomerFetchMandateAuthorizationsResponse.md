# CustomerFetchMandateAuthorizationsResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**List[CustomerFetchMandateAuthorizationsResponseData]**](CustomerFetchMandateAuthorizationsResponseData.md) |  | 
**meta** | [**CustomerFetchMandateAuthorizationsResponseMeta**](CustomerFetchMandateAuthorizationsResponseMeta.md) |  | 

## Example

```python
from alexasomba_paystack.models.customer_fetch_mandate_authorizations_response import CustomerFetchMandateAuthorizationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerFetchMandateAuthorizationsResponse from a JSON string
customer_fetch_mandate_authorizations_response_instance = CustomerFetchMandateAuthorizationsResponse.from_json(json)
# print the JSON string representation of the object
print CustomerFetchMandateAuthorizationsResponse.to_json()

# convert the object into a dict
customer_fetch_mandate_authorizations_response_dict = customer_fetch_mandate_authorizations_response_instance.to_dict()
# create an instance of CustomerFetchMandateAuthorizationsResponse from a dict
customer_fetch_mandate_authorizations_response_form_dict = customer_fetch_mandate_authorizations_response.from_dict(customer_fetch_mandate_authorizations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


