# Pagination

Pagination allows you to efficiently retrieve large sets of data from the Paystack API. Instead of returning all results at once, which could be slow and resource-intensive, pagination breaks the data into smaller chunks before sending it. This improves performance, reduces network load, and makes large datasets easier to work with.

### Pagination Types

The Paystack API supports two types of pagination:

- Offset pagination
- Cursor pagination

Each type has its own use cases and implementation details.

### Offset Pagination

Offset pagination allows you to request specific `page` and `perPage` values when fetching records. The `page` parameter specifies which page of records to retrieve, while the `perPage` parameter specifies how many records you want to retrieve per page.

To use offset pagination, include the `page` and `perPage` parameters as query parameters in your API request.

### Query Parameters

- `page` (`Number`): The page to retrieve.
- `perPage` (`Number`): The number of records to return per request. Default: `50`.

### Additional Meta Parameter

The `meta` object in the JSON response from `GET /transaction` includes a `total_volume` parameter, which is the sum of all the transactions that have been fetched.

**Endpoint:** `GET /transaction?page=1&perPage=50`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/transaction?page=1&perPage=50"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Offset Pagination Metadata

```json
{
  "meta": {
    "total": 7316,
    "total_volume": 397800,
    "skipped": 0,
    "perPage": 50,
    "page": 1,
    "pageCount": 147
  }
}
```

### Cursor Pagination

Cursor pagination uses a unique identifier called a cursor to keep track of where in the dataset to continue from. This method is more efficient for retrieving large datasets and provides more consistent results when items are being added or removed frequently.

To use cursor pagination, include the `use_cursor` query parameter and set it to `true` on your first request. The `meta` object in the JSON response will contain a `next` parameter with the cursor for the next set of records and a `previous` parameter for the previous set. Include either of these as query parameters in subsequent requests to move through the dataset.

### Query Parameters

- `use_cursor` (`Boolean`): Set this to `true` to retrieve results using cursor pagination.
- `next` (`String`): A cursor that points to the next page of the dataset. Set this to the `next` cursor returned in the `meta` object of a previous request.
- `previous` (`String`): A cursor that points to the previous page of the dataset. Set this to the `previous` cursor returned in the `meta` object of a previous request.
- `perPage` (`Number`): The number of records to return per request. Default: `50`.

### Cursor Pagination Availability

Cursor-based pagination is currently available on the following endpoints:

- Transactions
- Customers
- Dedicated Accounts
- Transfer Recipient
- Transfers
- Disputes

**Endpoint:** `GET /transaction?use_cursor=true&perPage=50`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/transaction?use_cursor=true&perPage=50"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Cursor Pagination Metadata

```json
{
  "meta": {
    "next": "dW5kZWZpbmVkOjQwOTczNTgxNTg=",
    "previous": "null",
    "perPage": 49
  }
}
```

### Best Practices

- Choose the right pagination type. Use offset pagination for smaller, more static datasets. For larger or frequently updated datasets, prefer cursor pagination.
- Set reasonable page sizes. Start with the default of `50` items per page. Avoid requesting very large pages at once.
- Handle edge cases. For offset pagination, keep fetching until no more results are returned. For cursor pagination, the absence of a `next` cursor usually means you have reached the end.
- Implement error handling. Be prepared to handle invalid page numbers, invalid cursors, and malformed query parameters.
- Consider rate limits. Be mindful of Paystack's rate limits when paginating through large datasets.
- Cache carefully. If you cache paginated results, make sure your invalidation strategy accounts for changing records.
