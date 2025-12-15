# BulkChargeInitiate

A list of charge object

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization** | **str** | Customer&#39;s card authorization code | 
**amount** | **int** | Amount to charge on the authorization | 
**reference** | **str** | A unique identifier containing lowercase letters &#x60;(a-z)&#x60;, digits &#x60;(0-9)&#x60; and these symbols: dash (&#x60;-&#x60;), underscore(&#x60;_&#x60;)  | [optional] 
**attempt_partial_debit** | **bool** | A flag to indicate if you want us to try recouping lower amounts when the customer has insufficient fund | [optional] 
**at_least** | **int** | Minimum amount to charge if the attempt_partial_debit flag is set | [optional] 
**metadata** | **object** | JSON object of custom data | [optional] 

## Example

```python
from alexasomba_paystack.models.bulk_charge_initiate import BulkChargeInitiate

# TODO update the JSON string below
json = "{}"
# create an instance of BulkChargeInitiate from a JSON string
bulk_charge_initiate_instance = BulkChargeInitiate.from_json(json)
# print the JSON string representation of the object
print BulkChargeInitiate.to_json()

# convert the object into a dict
bulk_charge_initiate_dict = bulk_charge_initiate_instance.to_dict()
# create an instance of BulkChargeInitiate from a dict
bulk_charge_initiate_form_dict = bulk_charge_initiate.from_dict(bulk_charge_initiate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


