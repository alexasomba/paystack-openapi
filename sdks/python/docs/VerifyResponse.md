# VerifyResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**VerifyResponseData**](VerifyResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.verify_response import VerifyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of VerifyResponse from a JSON string
verify_response_instance = VerifyResponse.from_json(json)
# print the JSON string representation of the object
print VerifyResponse.to_json()

# convert the object into a dict
verify_response_dict = verify_response_instance.to_dict()
# create an instance of VerifyResponse from a dict
verify_response_form_dict = verify_response.from_dict(verify_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


