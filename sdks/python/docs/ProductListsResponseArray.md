# ProductListsResponseArray


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**name** | **str** |  | 
**description** | **str** |  | 
**product_code** | **str** |  | 
**slug** | **str** |  | 
**currency** | **str** |  | 
**price** | **int** |  | 
**quantity** | **int** |  | 
**quantity_sold** | **int** |  | 
**active** | **bool** |  | 
**domain** | **str** |  | 
**type** | **str** |  | 
**in_stock** | **bool** |  | 
**unlimited** | **bool** |  | 
**metadata** | [**ProductCreateResponseDataMetadata**](ProductCreateResponseDataMetadata.md) |  | 
**files** | **List[object]** |  | 
**success_message** | **object** |  | 
**redirect_url** | **object** |  | 
**split_code** | **object** |  | 
**notification_emails** | **object** |  | 
**minimum_orderable** | **int** |  | 
**maximum_orderable** | **object** |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 
**digital_assets** | **List[object]** |  | 
**variant_options** | **List[object]** |  | 
**is_shippable** | **bool** |  | 
**shipping_fields** | [**ProductCreateResponseDataShippingFields**](ProductCreateResponseDataShippingFields.md) |  | 
**integration** | **int** |  | 
**low_stock_alert** | **int** |  | 

## Example

```python
from alexasomba_paystack.models.product_lists_response_array import ProductListsResponseArray

# TODO update the JSON string below
json = "{}"
# create an instance of ProductListsResponseArray from a JSON string
product_lists_response_array_instance = ProductListsResponseArray.from_json(json)
# print the JSON string representation of the object
print ProductListsResponseArray.to_json()

# convert the object into a dict
product_lists_response_array_dict = product_lists_response_array_instance.to_dict()
# create an instance of ProductListsResponseArray from a dict
product_lists_response_array_form_dict = product_lists_response_array.from_dict(product_lists_response_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


