# StorefrontContactsArray


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** |  | 
**id** | **int** |  | 
**type_name** | **object** |  | 
**type** | **int** |  | 

## Example

```python
from alexasomba_paystack.models.storefront_contacts_array import StorefrontContactsArray

# TODO update the JSON string below
json = "{}"
# create an instance of StorefrontContactsArray from a JSON string
storefront_contacts_array_instance = StorefrontContactsArray.from_json(json)
# print the JSON string representation of the object
print StorefrontContactsArray.to_json()

# convert the object into a dict
storefront_contacts_array_dict = storefront_contacts_array_instance.to_dict()
# create an instance of StorefrontContactsArray from a dict
storefront_contacts_array_form_dict = storefront_contacts_array.from_dict(storefront_contacts_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


