# PageCreate


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of page | 
**description** | **str** | The description of the page | [optional] 
**amount** | **int** | Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR | [optional] 
**currency** | **str** | The transaction currency. Defaults to your integration currency. | [optional] 
**slug** | **str** | URL slug you would like to be associated with this page. Page will be accessible at &#x60;https://paystack.com/pay/[slug]&#x60; | [optional] 
**type** | **str** | The type of payment page to create. Defaults to &#x60;payment&#x60; if no type is specified.  | [optional] 
**plan** | **str** | The ID of the plan to subscribe customers on this payment page to when &#x60;type&#x60; is set to &#x60;subscription&#x60;. | [optional] 
**fixed_amount** | **bool** | Specifies whether to collect a fixed amount on the payment page. If true, &#x60;amount&#x60; must be passed. | [optional] 
**split_code** | **str** | The split code of the transaction split. e.g. &#x60;SPL_98WF13Eb3w&#x60; | [optional] 
**metadata** | **object** | JSON object of custom data | [optional] 
**redirect_url** | **str** | If you would like Paystack to redirect to a URL upon successful payment, specify the URL here.  | [optional] 
**success_message** | **str** | A success message to display to the customer after a successful transaction  | [optional] 
**notification_email** | **str** | An email address that will receive transaction notifications for this payment page  | [optional] 
**collect_phone** | **bool** | Specify whether to collect phone numbers on the payment page  | [optional] 
**custom_fields** | **List[object]** | If you would like to accept custom fields, specify them here. | [optional] 

## Example

```python
from alexasomba_paystack.models.page_create import PageCreate

# TODO update the JSON string below
json = "{}"
# create an instance of PageCreate from a JSON string
page_create_instance = PageCreate.from_json(json)
# print the JSON string representation of the object
print PageCreate.to_json()

# convert the object into a dict
page_create_dict = page_create_instance.to_dict()
# create an instance of PageCreate from a dict
page_create_form_dict = page_create.from_dict(page_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


