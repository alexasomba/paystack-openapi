# ProductCreate


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of product | 
**description** | **str** | The description of the product | 
**price** | **int** | Price should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR  | 
**currency** | **str** | Currency in which price is set. Allowed values are: NGN, GHS, ZAR or USD  | 
**unlimited** | **bool** | Set to true if the product has unlimited stock. Leave as false if the product has limited stock  | [optional] 
**quantity** | **int** | Number of products in stock. Use if limited is true | [optional] 
**split_code** | **str** | The split code if sharing the transaction with partners | [optional] 
**metadata** | **str** | Stringified JSON object of custom data | [optional] 

## Example

```python
from alexasomba_paystack.models.product_create import ProductCreate

# TODO update the JSON string below
json = "{}"
# create an instance of ProductCreate from a JSON string
product_create_instance = ProductCreate.from_json(json)
# print the JSON string representation of the object
print ProductCreate.to_json()

# convert the object into a dict
product_create_dict = product_create_instance.to_dict()
# create an instance of ProductCreate from a dict
product_create_form_dict = product_create.from_dict(product_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


