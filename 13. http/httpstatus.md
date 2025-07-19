# 📡 HTTP Status Codes in Express.js

HTTP status codes are 3-digit numbers sent by a server in response to a client's request to indicate the result of the operation.

---

## 🛠 Setting Status in Express

You can set the status code using:

```js
res.status(code)




Example

res.status(404).send('Not Found');

Or chain it:

res.status(201).json({ message: 'Created' });





✅ 1xx – Informational


| Code | Meaning             | Description                      |
| ---- | ------------------- | -------------------------------- |
| 100  | Continue            | Initial part of request received |
| 101  | Switching Protocols | Switching to different protocol  |




🟢 2xx – Success


| Code | Meaning    | Description                        |
| ---- | ---------- | ---------------------------------- |
| 200  | OK         | Request succeeded                  |
| 201  | Created    | Resource successfully created      |
| 202  | Accepted   | Request accepted but not processed |
| 204  | No Content | No body in response                |



Example

res.status(200).json({ success: true });



🟡 3xx – Redirection


| Code | Meaning           | Description                |
| ---- | ----------------- | -------------------------- |
| 301  | Moved Permanently | Resource moved permanently |
| 302  | Found             | Temporary redirect         |
| 304  | Not Modified      | Use cached version         |




Example

res.redirect(301, 'https://newsite.com');





🔴 4xx – Client Errors



| Code | Meaning            | Description            |
| ---- | ------------------ | ---------------------- |
| 400  | Bad Request        | Invalid request format |
| 401  | Unauthorized       | Auth required          |
| 403  | Forbidden          | No permission          |
| 404  | Not Found          | Resource not found     |
| 405  | Method Not Allowed | Invalid HTTP method    |
| 429  | Too Many Requests  | Rate limit exceeded    |




Example

res.status(401).send('Unauthorized Access');






🔥 5xx – Server Errors



| Code | Meaning               | Description                    |
| ---- | --------------------- | ------------------------------ |
| 500  | Internal Server Error | Server-side error              |
| 502  | Bad Gateway           | Invalid response from upstream |
| 503  | Service Unavailable   | Server is down or overloaded   |
| 504  | Gateway Timeout       | Timeout from upstream server   |



Example

res.status(500).json({ error: 'Something went wrong' });




📌 Custom Error Handling Example



app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});





🚦 Status Code Summary Table



| Category | Range   | Meaning       |
| -------- | ------- | ------------- |
| 1xx      | 100–199 | Informational |
| 2xx      | 200–299 | Success       |
| 3xx      | 300–399 | Redirection   |
| 4xx      | 400–499 | Client Error  |
| 5xx      | 500–599 | Server Error  |






📚 Best Practices ---


Always return appropriate status codes for clarity.

Use 201 for successful POST creation.

Use 204 if no content is returned.

Avoid sending 200 with error messages.

Use middleware for global error handling.
```
