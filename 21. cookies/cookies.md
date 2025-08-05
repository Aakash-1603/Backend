# 🍪 All About Cookies in Web Development

## What are Cookies?

Cookies are small pieces of data stored on the user's browser by a website to remember information between sessions.

---

## 📦 Structure of a Cookie

A cookie consists of:

- `Name=Value` pair
- Optional attributes:
  - `Expires` or `Max-Age`
  - `Domain`
  - `Path`
  - `Secure`
  - `HttpOnly`
  - `SameSite`

---

## 📌 Why Use Cookies?

- Maintain **sessions** (e.g., login info)
- Store **user preferences** (e.g., dark mode)
- Track **analytics** and **user behavior**
- Perform **personalization** (e.g., cart items)

---

## 🧠 How Cookies Work?

1. Server sends `Set-Cookie` header in response.
2. Browser stores the cookie.
3. For every future request to the same domain/path, the cookie is sent in the `Cookie` header.

---

## ✉️ Example

### Server Response Header:

Set-Cookie: username=Aakash; Max-Age=3600; HttpOnly

### Client Request Header:

Cookie: username=Aakash

---

## 🛡️ Types of Cookies

| Type           | Description                          |
| -------------- | ------------------------------------ |
| **Session**    | Deleted when the browser is closed   |
| **Persistent** | Stored until expiration date         |
| **Secure**     | Sent only over HTTPS                 |
| **HttpOnly**   | Not accessible via JavaScript        |
| **SameSite**   | Controls cross-site request behavior |

---

## 🔐 Security Concerns

- ❗ **Cross-Site Scripting (XSS)**: Prevent with `HttpOnly`
- ❗ **Cross-Site Request Forgery (CSRF)**: Prevent with `SameSite` & tokens
- ❗ **Cookie theft**: Use `Secure` and HTTPS

---

## 🍽️ JavaScript and Cookies

### Set Cookie:

```js
document.cookie = "user=John; max-age=3600; path=/";




Get Cookies:
console.log(document.cookie);




⚙️ Set-Cookie Attributes

| Attribute  | Use                                                    |
| ---------- | ------------------------------------------------------ |
| `Expires`  | Date when cookie expires                               |
| `Max-Age`  | Time in seconds before expiration                      |
| `Domain`   | Domain for which cookie is valid                       |
| `Path`     | URL path where cookie is valid                         |
| `Secure`   | Send over HTTPS only                                   |
| `HttpOnly` | Not accessible via JavaScript                          |
| `SameSite` | Controls cross-site behavior (`Strict`, `Lax`, `None`) |






🆚 Cookies vs Other Storage

| Feature        | Cookie       | LocalStorage  | SessionStorage |
| -------------- | ------------ | ------------- | -------------- |
| Size Limit     | \~4KB        | \~5MB         | \~5MB          |
| Expiration     | Manual       | Until deleted | On tab close   |
| Sent to Server | ✅ Yes        | ❌ No          | ❌ No           |
| Access         | All requests | JS only       | JS only        |




🧾 Real-Life Use Case
Login Session Cookie

Set-Cookie: token=abcd1234; HttpOnly; Secure; Max-Age=86400; SameSite=Strict



. Used to authenticate user for 24 hours.

. Protected from XSS (HttpOnly) and CSRF (SameSite=Strict).




✅ Best Practices
Always use Secure and HttpOnly

Use SameSite=Strict if possible

Keep cookie size small

Avoid storing sensitive data directly
```
