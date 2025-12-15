# DisputeUpdate


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**refund_amount** | **int** | The amount to refund, in the subunit of your currency | 
**uploaded_filename** | **str** | Filename of attachment returned via response from the Dispute upload URL | [optional] 

## Example

```python
from alexasomba_paystack.models.dispute_update import DisputeUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of DisputeUpdate from a JSON string
dispute_update_instance = DisputeUpdate.from_json(json)
# print the JSON string representation of the object
print DisputeUpdate.to_json()

# convert the object into a dict
dispute_update_dict = dispute_update_instance.to_dict()
# create an instance of DisputeUpdate from a dict
dispute_update_form_dict = dispute_update.from_dict(dispute_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


