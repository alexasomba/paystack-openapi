# VerifyResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**domain** | **str** |  | 
**status** | **str** |  | 
**reference** | **str** |  | 
**receipt_number** | **str** |  | 
**amount** | **int** |  | 
**message** | **str** |  | 
**gateway_response** | **str** |  | 
**channel** | **str** |  | 
**currency** | **str** |  | 
**ip_address** | **str** |  | 
**metadata** | [**VerifyResponseDataMetadata**](VerifyResponseDataMetadata.md) |  | 
**log** | [**VerifyResponseDataLog**](VerifyResponseDataLog.md) |  | 
**fees** | **int** |  | 
**fees_split** | **object** |  | 
**authorization** | [**VerifyResponseDataAuthorization**](VerifyResponseDataAuthorization.md) |  | 
**customer** | [**VerifyResponseDataCustomer**](VerifyResponseDataCustomer.md) |  | 
**plan** | **str** |  | 
**split** | **object** |  | 
**order_id** | **object** |  | 
**paid_at** | **str** |  | 
**created_at** | **str** |  | 
**requested_amount** | **int** |  | 
**pos_transaction_data** | **object** |  | 
**source** | **object** |  | 
**fees_breakdown** | **object** |  | 
**connect** | **object** |  | 
**transaction_date** | **str** |  | 
**plan_object** | [**VerifyResponseDataPlanObject**](VerifyResponseDataPlanObject.md) |  | 
**subaccount** | **object** |  | 

## Example

```python
from alexasomba_paystack.models.verify_response_data import VerifyResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of VerifyResponseData from a JSON string
verify_response_data_instance = VerifyResponseData.from_json(json)
# print the JSON string representation of the object
print VerifyResponseData.to_json()

# convert the object into a dict
verify_response_data_dict = verify_response_data_instance.to_dict()
# create an instance of VerifyResponseData from a dict
verify_response_data_form_dict = verify_response_data.from_dict(verify_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


