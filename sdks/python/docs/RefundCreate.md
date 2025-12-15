# RefundCreate


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction** | **str** | The reference of a previosuly completed transaction | 
**amount** | **int** | Amount to be refunded to the customer. It cannot be more than the original transaction amount | [optional] 
**currency** | **str** | Three-letter ISO currency | [optional] 
**customer_note** | **str** | Customer reason | [optional] 
**merchant_note** | **str** | Merchant reason | [optional] 

## Example

```python
from alexasomba_paystack.models.refund_create import RefundCreate

# TODO update the JSON string below
json = "{}"
# create an instance of RefundCreate from a JSON string
refund_create_instance = RefundCreate.from_json(json)
# print the JSON string representation of the object
print RefundCreate.to_json()

# convert the object into a dict
refund_create_dict = refund_create_instance.to_dict()
# create an instance of RefundCreate from a dict
refund_create_form_dict = refund_create.from_dict(refund_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


