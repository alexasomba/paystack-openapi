# ProductUpdate


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of product | [optional] 
**description** | **str** | The description of the product | [optional] 
**price** | **int** | Price should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR  | [optional] 
**currency** | **str** | Currency in which price is set. Allowed values are: NGN, GHS, ZAR or USD  | [optional] 
**unlimited** | **bool** | Set to true if the product has unlimited stock. Leave as false if the product has limited stock  | [optional] 
**quantity** | **int** | Number of products in stock. Use if limited is true | [optional] 
**split_code** | **str** | The split code if sharing the transaction with partners | [optional] 
**metadata** | **object** | JSON object of custom data | [optional] 

## Example

```python
from alexasomba_paystack.models.product_update import ProductUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of ProductUpdate from a JSON string
product_update_instance = ProductUpdate.from_json(json)
# print the JSON string representation of the object
print ProductUpdate.to_json()

# convert the object into a dict
product_update_dict = product_update_instance.to_dict()
# create an instance of ProductUpdate from a dict
product_update_form_dict = product_update.from_dict(product_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


