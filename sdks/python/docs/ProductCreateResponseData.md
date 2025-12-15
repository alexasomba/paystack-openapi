# ProductCreateResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**variants_options** | **List[object]** |  | 
**variants** | **List[object]** |  | 
**name** | **str** |  | 
**description** | **str** |  | 
**currency** | **str** |  | 
**price** | **int** |  | 
**quantity** | **int** |  | 
**type** | **str** |  | 
**is_shippable** | **bool** |  | 
**unlimited** | **bool** |  | 
**files** | **List[object]** |  | 
**shipping_fields** | [**ProductListsResponseArrayShippingFields**](ProductListsResponseArrayShippingFields.md) |  | 
**integration** | **int** |  | 
**domain** | **str** |  | 
**metadata** | [**ProductListsResponseArrayMetadata**](ProductListsResponseArrayMetadata.md) |  | 
**slug** | **str** |  | 
**product_code** | **str** |  | 
**quantity_sold** | **int** |  | 
**active** | **bool** |  | 
**deleted_at** | **object** |  | 
**in_stock** | **bool** |  | 
**minimum_orderable** | **int** |  | 
**maximum_orderable** | **int** |  | 
**redirect_url** | **str** |  | [optional] 
**low_stock_alert** | **bool** |  | 
**id** | **int** |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.product_create_response_data import ProductCreateResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ProductCreateResponseData from a JSON string
product_create_response_data_instance = ProductCreateResponseData.from_json(json)
# print the JSON string representation of the object
print ProductCreateResponseData.to_json()

# convert the object into a dict
product_create_response_data_dict = product_create_response_data_instance.to_dict()
# create an instance of ProductCreateResponseData from a dict
product_create_response_data_form_dict = product_create_response_data.from_dict(product_create_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


