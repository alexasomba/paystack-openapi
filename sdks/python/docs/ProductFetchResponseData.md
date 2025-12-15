# ProductFetchResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**digital_assets** | **List[object]** |  | 
**integration** | **int** |  | 
**name** | **str** |  | 
**description** | **str** |  | 
**product_code** | **str** |  | 
**price** | **int** |  | 
**currency** | **str** |  | 
**quantity** | **int** |  | 
**quantity_sold** | **object** |  | 
**type** | **str** |  | 
**files** | **List[object]** |  | 
**file_path** | **object** |  | 
**is_shippable** | **bool** |  | 
**shipping_fields** | [**ProductCreateResponseDataShippingFields**](ProductCreateResponseDataShippingFields.md) |  | 
**unlimited** | **bool** |  | 
**domain** | **str** |  | 
**active** | **bool** |  | 
**features** | **object** |  | 
**in_stock** | **bool** |  | 
**metadata** | [**ProductCreateResponseDataMetadata**](ProductCreateResponseDataMetadata.md) |  | 
**slug** | **str** |  | 
**success_message** | **object** |  | 
**redirect_url** | **object** |  | 
**split_code** | **object** |  | 
**notification_emails** | **object** |  | 
**minimum_orderable** | **int** |  | 
**maximum_orderable** | **object** |  | 
**low_stock_alert** | **bool** |  | 
**stock_threshold** | **object** |  | 
**expires_in** | **object** |  | 
**id** | **int** |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.product_fetch_response_data import ProductFetchResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ProductFetchResponseData from a JSON string
product_fetch_response_data_instance = ProductFetchResponseData.from_json(json)
# print the JSON string representation of the object
print ProductFetchResponseData.to_json()

# convert the object into a dict
product_fetch_response_data_dict = product_fetch_response_data_instance.to_dict()
# create an instance of ProductFetchResponseData from a dict
product_fetch_response_data_form_dict = product_fetch_response_data.from_dict(product_fetch_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


