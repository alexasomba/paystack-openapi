# ProductCreateResponseDataShippingFields


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery_note** | **str** |  | 
**shipping_address** | **str** |  | 
**shipping_fees** | **List[object]** |  | 

## Example

```python
from alexasomba_paystack.models.product_create_response_data_shipping_fields import ProductCreateResponseDataShippingFields

# TODO update the JSON string below
json = "{}"
# create an instance of ProductCreateResponseDataShippingFields from a JSON string
product_create_response_data_shipping_fields_instance = ProductCreateResponseDataShippingFields.from_json(json)
# print the JSON string representation of the object
print ProductCreateResponseDataShippingFields.to_json()

# convert the object into a dict
product_create_response_data_shipping_fields_dict = product_create_response_data_shipping_fields_instance.to_dict()
# create an instance of ProductCreateResponseDataShippingFields from a dict
product_create_response_data_shipping_fields_form_dict = product_create_response_data_shipping_fields.from_dict(product_create_response_data_shipping_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


