# CustomerWhitelistBlacklistResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**CustomerWhitelistBlacklistResponseData**](CustomerWhitelistBlacklistResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.customer_whitelist_blacklist_response import CustomerWhitelistBlacklistResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerWhitelistBlacklistResponse from a JSON string
customer_whitelist_blacklist_response_instance = CustomerWhitelistBlacklistResponse.from_json(json)
# print the JSON string representation of the object
print CustomerWhitelistBlacklistResponse.to_json()

# convert the object into a dict
customer_whitelist_blacklist_response_dict = customer_whitelist_blacklist_response_instance.to_dict()
# create an instance of CustomerWhitelistBlacklistResponse from a dict
customer_whitelist_blacklist_response_form_dict = customer_whitelist_blacklist_response.from_dict(customer_whitelist_blacklist_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


