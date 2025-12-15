# StorefrontCreateResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**social_media** | **List[object]** |  | 
**contacts** | [**List[StorefrontContactsArray]**](StorefrontContactsArray.md) |  | 
**name** | **str** |  | 
**slug** | **str** |  | 
**currency** | **str** |  | 
**welcome_message** | **object** |  | 
**success_message** | **object** |  | 
**redirect_url** | **object** |  | 
**description** | **object** |  | 
**delivery_note** | **str** |  | 
**background_color** | **str** |  | 
**status** | **str** |  | 
**shippable** | **bool** |  | 
**integration** | **int** |  | 
**domain** | **str** |  | 
**digital_product_expiry** | **object** |  | 
**metadata** | **object** |  | [optional] 
**id** | **int** |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 
**products** | **List[object]** |  | 
**shipping_fees** | **List[object]** |  | 

## Example

```python
from alexasomba_paystack.models.storefront_create_response_data import StorefrontCreateResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of StorefrontCreateResponseData from a JSON string
storefront_create_response_data_instance = StorefrontCreateResponseData.from_json(json)
# print the JSON string representation of the object
print StorefrontCreateResponseData.to_json()

# convert the object into a dict
storefront_create_response_data_dict = storefront_create_response_data_instance.to_dict()
# create an instance of StorefrontCreateResponseData from a dict
storefront_create_response_data_form_dict = storefront_create_response_data.from_dict(storefront_create_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


