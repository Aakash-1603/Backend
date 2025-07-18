# 🚀 Postman: Complete Guide from A to Z

---

## 📌 What is Postman?

**Postman** is a popular collaboration platform and tool for testing, developing, and documenting APIs (Application Programming Interfaces).

It provides an easy-to-use interface to send HTTP requests and view responses.

---

## 🧰 Why Use Postman?

- Test RESTful APIs
- Send HTTP methods like GET, POST, PUT, DELETE
- View status codes, headers, and response data
- Automate API testing
- Share API collections with teams
- Create mock servers
- Generate API documentation

---

## 🔧 Installing Postman

### 🖥️ For Desktop:

Download from: [https://www.postman.com/downloads/](https://www.postman.com/downloads/)

### 💻 Via CLI (New):

Postman CLI: `postman`  
Can be used to run collections from terminal.

---

## 🖱️ Postman Interface Overview

| Section         | Description                            |
| --------------- | -------------------------------------- |
| Request Builder | Compose and send HTTP requests         |
| Collections     | Save and organize requests             |
| Environment     | Manage variables and settings          |
| Console         | Debug API calls (like browser console) |
| History         | View previously sent requests          |

---

## 📬 Making a Request

1. Open Postman
2. Select method: GET, POST, etc.
3. Enter URL: `https://api.example.com/users`
4. Add headers (if needed)
5. Add body (for POST, PUT)
6. Click **Send**
7. View response

---

## 🧪 HTTP Methods Supported

| Method | Use Case     |
| ------ | ------------ |
| GET    | Fetch data   |
| POST   | Create data  |
| PUT    | Replace data |
| PATCH  | Update data  |
| DELETE | Remove data  |

---

## 📁 Collections

- Group of saved requests
- Organized by folder and environment
- Shareable and exportable

### ➕ Create Collection:

1. Click "New" → Collection
2. Add requests to it
3. Save for reuse

---

## 🌐 Environment Variables

Store dynamic values like:

- API base URLs
- Tokens
- IDs

### Example:

```env
{{base_url}}/users
```

---

## 🔐 Authorization in Postman

Supports various auth types:

- No Auth
- Bearer Token
- API Key
- Basic Auth
- OAuth 1.0 / 2.0
- Digest Auth

Add from the **Authorization tab** in the request.

---

## 🧪 Testing APIs

You can write **JavaScript test scripts** after a response is received.

### Example:

```js
pm.test("Status is 200", function () {
  pm.response.to.have.status(200);
});
```

---

## 🔁 Running Collections with Runner

- Postman's **Collection Runner** can run all requests in a collection.
- Used for testing APIs with different data sets.
- Supports CSV/JSON data files.

---

## ⚙️ Postman Pre-request & Test Scripts

### 🧷 Pre-request Script

Runs **before** the request is sent.

```js
pm.environment.set("timestamp", Date.now());
```

### 🧪 Test Script

Runs **after** response is received.

```js
pm.test("Response time < 500ms", function () {
  pm.expect(pm.response.responseTime).to.be.below(500);
});
```

---

## 📜 Generating Code Snippets

Click **</> Code** to get code for your request in:

- cURL
- JavaScript (fetch, axios)
- Python (requests)
- Node.js (http)
- PHP, Ruby, Go, etc.

---

## 🧪 Mock Servers

Create a fake API endpoint that returns dummy data.

Useful for:

- Frontend testing without backend
- Prototyping

---

## 📊 Monitor APIs

Postman can monitor API uptime and performance at intervals.

- Useful for health checks
- Alerts on failures

---

## 🔄 Postman CLI (New)

Install and run Postman collections via CLI:

```bash
npm install -g postman
postman login
postman collection run <collection_id>
```

---

## 📤 Export & Import

- Export collections or environments as `.json`
- Share or import via "Import" button

---

## 🔐 API Documentation

Generate interactive API docs from collections:

- Auto-generated
- Share with teams or public

---

## 🔗 Collaboration Features

- Share collections via Postman workspace
- Team collaboration
- Commenting and versioning
- Postman Cloud

---

## 🧠 Postman Alternatives

| Tool                  | Description              |
| --------------------- | ------------------------ |
| Insomnia              | Lightweight API tester   |
| Hoppscotch            | Fast, open-source option |
| REST Client (VS Code) | Extension                |

---

## 🧾 Summary Table

| Feature       | Description                         |
| ------------- | ----------------------------------- |
| Interface     | Easy UI for sending requests        |
| Collections   | Organize and save multiple requests |
| Environments  | Use variables for flexibility       |
| Testing       | Write test scripts for responses    |
| Automation    | Collection runner, monitors, CLI    |
| Documentation | Auto-create API docs                |
| Mock Server   | Simulate endpoints                  |

---

## 🏁 Conclusion

**Postman** is an essential tool for developers, testers, and teams working with APIs.

> ✅ Easy to use  
> ✅ Feature-rich  
> ✅ Great for learning, testing, automating, and documenting APIs

---
