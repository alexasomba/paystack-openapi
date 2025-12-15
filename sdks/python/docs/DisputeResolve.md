# DisputeResolve


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resolution** | **str** | Dispute resolution. Accepted values, merchant-accepted, declined | 
**message** | **str** | Reason for resolving | 
**refund_amount** | **int** | The amount to refund, in the subunit of your integration currency | 
**uploaded_filename** | **str** | Filename of attachment returned via response from the Dispute upload URL | 
**evidence** | **int** | Evidence Id for fraud claims | [optional] 

## Example

```python
from alexasomba_paystack.models.dispute_resolve import DisputeResolve

# TODO update the JSON string below
json = "{}"
# create an instance of DisputeResolve from a JSON string
dispute_resolve_instance = DisputeResolve.from_json(json)
# print the JSON string representation of the object
print DisputeResolve.to_json()

# convert the object into a dict
dispute_resolve_dict = dispute_resolve_instance.to_dict()
# create an instance of DisputeResolve from a dict
dispute_resolve_form_dict = dispute_resolve.from_dict(dispute_resolve_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


