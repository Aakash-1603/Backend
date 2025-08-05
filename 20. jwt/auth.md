# Stateful vs Stateless Authentication

## 🔐 Main Concept

| **Aspect**       | **Stateful Authentication**                          | **Stateless Authentication**                                    |
| ---------------- | ---------------------------------------------------- | --------------------------------------------------------------- |
| **Definition**   | Server **stores session** info after login           | Server **doesn't store** session; uses token (JWT)              |
| **Session Data** | Stored on **server-side** (e.g., in memory/database) | Stored on **client-side** (e.g., token in cookies/localStorage) |
| **Scalability**  | Harder to scale (session sync needed across servers) | Easier to scale (no server session dependency)                  |
| **Speed**        | Slightly slower (server lookup for session)          | Faster (token verified without lookup)                          |
| **Security**     | Can invalidate sessions anytime                      | Token valid until expiry unless blacklisted                     |
| **Example**      | Traditional web apps with login sessions             | Modern REST APIs using JWT                                      |

## ✅ Summary

- **Stateful**: Server tracks the user.
- **Stateless**: User proves identity with each request (usually via a token).
- Stateless is better for APIs and scalability.
- Stateful is simpler for small, traditional apps.
