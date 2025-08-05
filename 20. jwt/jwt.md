# JSON Web Token (JWT)

## 🔹 What is JWT?

JWT (JSON Web Token) is a compact, URL-safe means of representing claims between two parties. It is commonly used for **authentication** and **authorization** in web applications.

---

## 🔹 Structure of JWT

A JWT consists of **three parts**, separated by dots (`.`):

<Header>.<Payload>.<Signature> ```

1. Header (Base64Url encoded)

{
"alg": "HS256",
"typ": "JWT"
}

alg: Signing algorithm (e.g., HS256)

typ: Token type (JWT)

2. Payload (Base64Url encoded)
   Contains the claims (data):

{
"sub": "1234567890",
"name": "John Doe",
"iat": 1516239022
}

sub: Subject (user id)

iat: Issued at (timestamp)

Can include custom claims (e.g., roles, email, etc.)

3. Signature

HMACSHA256(
base64UrlEncode(header) + "." + base64UrlEncode(payload),
secret
)

🔹 How JWT Works (Authentication Flow)
User logs in with credentials.

Server verifies credentials and generates a JWT.

JWT is sent to the client (usually stored in localStorage or cookies).

For every request, the client sends JWT in Authorization header:

Authorization: Bearer <token>

Server validates the JWT and grants/denies access.

🔹 Advantages of JWT
✅ Stateless (no need to store sessions in DB)

✅ Compact and fast

✅ Can be used across domains (cross-platform)

✅ Supports role-based access (RBAC)

🔹 Disadvantages of JWT
❌ If compromised, can't be revoked easily

❌ Larger payloads can be slower

❌ Long expiration can be risky if not managed well

🔹 Common Use Cases
🔐 User Authentication

🧾 Access Control (RBAC)

🔄 API Authentication (token-based)

🛡️ OAuth2 Authorization

🔹 Token Storage (Best Practices)

| Storage         | Pros                    | Cons                      |
| --------------- | ----------------------- | ------------------------- |
| localStorage    | Easy to use             | Vulnerable to XSS attacks |
| sessionStorage  | Similar to localStorage | Data lost on tab close    |
| HttpOnly Cookie | More secure (XSS-safe)  | Vulnerable to CSRF        |

🔹 JWT in Code (Node.js + Express Example)

npm install jsonwebtoken

Sign (Generate) Token:

const jwt = require('jsonwebtoken');
const token = jwt.sign({ id: user.\_id }, 'secretkey', { expiresIn: '1h' });

Verify Token (Middleware):

const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
const token = req.headers.authorization?.split(' ')[1];
if (!token) return res.status(401).send('Access Denied');

try {
const verified = jwt.verify(token, 'secretkey');
req.user = verified;
next();
} catch (err) {
res.status(400).send('Invalid Token');
}
}

🔹 Important JWT Claims

| Claim | Description                     |
| ----- | ------------------------------- |
| `iss` | Issuer of the token             |
| `sub` | Subject (user)                  |
| `aud` | Audience (who can use it)       |
| `exp` | Expiration time                 |
| `nbf` | Not before                      |
| `iat` | Issued at                       |
| `jti` | Unique identifier for the token |

🔹 Tips
Always sign JWTs with a strong secret.

Use short expiration and refresh tokens for security.

Never store sensitive data in the payload (unencrypted).

Prefer HttpOnly cookies for storing tokens.

🔹 JWT vs Session

| Feature     | JWT                         | Session (Stateful)  |
| ----------- | --------------------------- | ------------------- |
| Storage     | Client-side                 | Server-side         |
| Scalability | Highly scalable             | Needs session store |
| Revocation  | Difficult without blacklist | Easy to revoke      |
| Stateless   | Yes                         | No                  |

📌 Summary
JWT is a secure and efficient way to handle authentication in modern web apps. It's best used with proper security practices and short-lived tokens.
