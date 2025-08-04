# Authentication in Backend

Authentication is the process of verifying the identity of a user or system. It is a crucial component in any secure web application.

---

## 🧾 Types of Authentication

### 1. **Session-Based Authentication**

- Server creates a session for the user and stores it in memory/database.
- A session ID is sent back to the client as a cookie.
- On each request, the cookie is sent to the server to verify the session.

### 2. **Token-Based Authentication (JWT)**

- User logs in, server issues a JSON Web Token (JWT).
- Token is sent in headers (usually `Authorization: Bearer <token>`).
- No need to store sessions on the server.

### 3. **OAuth**

- Common for third-party logins (Google, Facebook).
- Access tokens and refresh tokens are used.
- Follows Authorization Code Flow.

### 4. **API Key Authentication**

- Simple token (key) sent with each request.
- Often used in server-to-server communication.

---

## 🔒 How Authentication Works (Basic Flow)

1. User sends credentials (username/password) to server.
2. Server validates credentials.
3. If valid, server returns a token or sets a session.
4. Client stores the token (usually in localStorage/cookies).
5. Client sends token/session ID in subsequent requests.
6. Server verifies token/session and provides access.

---

## 🛡️ Best Practices

- Hash passwords using bcrypt/scrypt/argon2.
- Use HTTPS to encrypt communication.
- Expire tokens and sessions appropriately.
- Use refresh tokens for longer sessions.
- Store secrets (e.g., JWT secret) securely.

---

## 🔧 Sample Code (Node.js + Express + JWT)

```js
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const express = require("express");
const app = express();

app.use(express.json());

const users = []; // Temporary storage

app.post("/register", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  users.push({ username: req.body.username, password: hashedPassword });
  res.status(201).send("User registered");
});

app.post("/login", async (req, res) => {
  const user = users.find((u) => u.username === req.body.username);
  if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
    return res.status(403).send("Invalid credentials");
  }
  const token = jwt.sign({ username: user.username }, "secret_key", {
    expiresIn: "1h",
  });
  res.json({ token });
});

app.get("/protected", (req, res) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, "secret_key", (err, user) => {
    if (err) return res.sendStatus(403);
    res.send("Protected data");
  });
});

app.listen(3000);
```

---

## 🧠 Summary

- **Authentication** ensures that users are who they claim to be.
- **Session-based** is best for traditional apps; **JWT** for REST APIs.
- Always hash passwords and secure tokens.
- Validate tokens/sessions on every protected request.

---

## 📚 Resources

- [JWT.io](https://jwt.io/)
- [OAuth 2.0 Simplified](https://oauth.net/2/)
- [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
