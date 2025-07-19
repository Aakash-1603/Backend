# 🌐 HTTP Headers in Express.js

HTTP headers are key-value pairs sent between the **client and server** with requests and responses. They carry metadata such as content type, authentication, caching info, etc.

---

## 📤 Request Headers

### 🔍 Accessing Request Headers

You can access headers sent by the client using:

```js
req.headers      // All headers (lowercase keys)
req.get('Header-Name') // Specific header



📌 Example:

app.get('/', (req, res) => {
  const userAgent = req.get('User-Agent');
  const auth = req.headers['authorization'];
  res.send(`User-Agent is ${userAgent}, Auth: ${auth}`);
});





📥 Response Headers
✅ Setting Headers in Response
Use res.set() or res.header() to set headers:

res.set('Content-Type', 'application/json');
res.set('X-Powered-By', 'Express');


You can also use res.append() to add values to existing headers:

res.append('Link', '<http://localhost>; rel="home"');





🧾 Common Headers in Express

| Header             | Description                             | Direction |
| ------------------ | --------------------------------------- | --------- |
| `Content-Type`     | Media type (e.g., `application/json`)   | Both      |
| `Authorization`    | Auth credentials like Bearer tokens     | Request   |
| `User-Agent`       | Client software info                    | Request   |
| `Accept`           | Content types the client can accept     | Request   |
| `Cookie`           | Cookies from client                     | Request   |
| `Set-Cookie`       | Sends cookie from server to client      | Response  |
| `Cache-Control`    | Caching policies                        | Response  |
| `Access-Control-*` | CORS headers                            | Response  |
| `X-Powered-By`     | By default is `Express`, can be removed | Response  |





🔒 Secure Headers
Use third-party middleware like helmet to set secure HTTP headers.

npm install helmet

const helmet = require('helmet');
app.use(helmet());


It sets headers like:

X-DNS-Prefetch-Control

X-Frame-Options

Strict-Transport-Security

X-XSS-Protection





🍪 Cookies (Header Example)
Cookies are sent via headers.

Set a Cookie:

res.cookie('token', '123abc', { httpOnly: true });


Read a Cookie:
Install cookie parser:

npm install cookie-parser


const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/', (req, res) => {
  console.log(req.cookies.token);
});





📦 Custom Headers
You can set custom headers (usually prefixed with X-):


res.set('X-Custom-Header', 'Aakash-Rocks');




❌ Removing Headers
You can remove headers like:

app.disable('x-powered-by');




📌 Full Example


const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log(req.headers['user-agent']);
  res.set('X-Custom-Header', '12345');
  res.send('Headers example');
});

app.listen(3000, () => console.log('Server running'));



📚 Summary


| Task                    | Method                               |
| ----------------------- | ------------------------------------ |
| Get all request headers | `req.headers`                        |
| Get specific header     | `req.get('Header-Name')`             |
| Set response header     | `res.set('Header-Name', 'value')`    |
| Add to header           | `res.append('Header-Name', 'value')` |
| Remove default header   | `app.disable('x-powered-by')`        |
| Use security headers    | `helmet` middleware                  |
```
