# REST API / RESTful API: Complete Guide

## 🔸 What is an API?
**API (Application Programming Interface)** is a set of rules that allows two applications to communicate with each other.

Example:
- App → API → Database
- Weather App → Weather API → Server responds with data

---

## 🔸 What is REST?
**REST (Representational State Transfer)** is an architectural style for designing networked applications. REST uses **HTTP** to perform **CRUD** operations.

---

## 🔸 REST vs RESTful
- **REST**: Architectural style
- **RESTful**: Web services that follow REST architecture are called RESTful APIs

---

## 🔸 Key Features of REST
- Stateless: No client context stored on server
- Client-Server Architecture
- Uniform Interface
- Cacheable
- Layered System
- Code on Demand (optional)

---

## 🔸 Common HTTP Methods (CRUD Operations)

| Method | Operation | Usage            |
|--------|-----------|------------------|
| GET    | Read      | Fetch data       |
| POST   | Create    | Add new data     |
| PUT    | Update    | Replace data     |
| PATCH  | Update    | Modify part of data |
| DELETE | Delete    | Remove data      |

---

## 🔸 REST API Endpoint Structure




### Example:
- `GET /users` → Get all users
- `GET /users/1` → Get user with ID 1
- `POST /users` → Create a new user
- `PUT /users/1` → Update user with ID 1
- `DELETE /users/1` → Delete user with ID 1

---

## 🔸 HTTP Status Codes

| Code | Meaning               |
|------|------------------------|
| 200  | OK                    |
| 201  | Created               |
| 204  | No Content (Deleted) |
| 400  | Bad Request           |
| 401  | Unauthorized          |
| 403  | Forbidden             |
| 404  | Not Found             |
| 500  | Internal Server Error |

---

## 🔸 REST API in JSON Format
APIs commonly use JSON to send/receive data.

### Example:
**Request:**
```json
POST /users
{
  "name": "Aakash",
  "email": "aakash@example.com"
}

Response:

{
  "id": 1,
  "name": "Aakash",
  "email": "aakash@example.com"
}






🔸 REST vs SOAP vs GraphQL

| Feature        | REST     | SOAP     | GraphQL |
| -------------- | -------- | -------- | ------- |
| Format         | JSON/XML | XML only | JSON    |
| Speed          | Fast     | Slower   | Fast    |
| Flexibility    | Medium   | Low      | High    |
| Learning Curve | Easy     | Complex  | Medium  |





🔸 REST API Best Practices :--

Use nouns not verbs in URIs: /users not /getUsers

Use proper HTTP methods

Use plural nouns: /users

Version your APIs: /api/v1/users

Use HTTP status codes properly

Keep URL simple and consistent

Use JWT or OAuth for authentication

Include pagination, filtering, sorting





🔸 REST API Example Using Node.js + Express


const express = require('express');
const app = express();
app.use(express.json());

const users = [];

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json(user);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});






🔸 Tools for Testing REST API :--

Postman

Insomnia

cURL (CLI tool)




🔸 Authentication in REST APIs :--

Basic Auth

JWT (JSON Web Token)

OAuth2.0




🔸 Conclusion
RESTful APIs are a powerful way to build scalable and simple web services. They follow HTTP standards and are easy to implement and consume.

✅ Widely used in web & mobile apps
✅ Easy to test, secure, and scalable
✅ Preferred for microservices and web APIs










# SSR vs CSR – Server-Side Rendering vs Client-Side Rendering

## 🔸 What is Rendering?

**Rendering** refers to the process of converting your application’s code into HTML that can be displayed in the browser.

---

## 🔸 SSR – Server-Side Rendering

### 📌 Definition:
In **SSR**, the server renders the complete HTML for a page and sends it to the browser on each request.

### ✅ How it works:
1. Client requests a page
2. Server processes request and fetches data
3. Server renders HTML and sends it to browser
4. Browser displays the page

### ✅ Benefits:
- Faster initial page load (especially on slow networks)
- Better SEO (search engines get full HTML)
- Ideal for static pages or content-heavy sites

### ❌ Drawbacks:
- Slower navigation between pages (since each click makes a new server request)
- More load on server

### ✅ Frameworks:
- **Next.js (React)**
- **Nuxt.js (Vue)**

---

## 🔸 CSR – Client-Side Rendering

### 📌 Definition:
In **CSR**, the browser first loads a minimal HTML and JavaScript, then renders the content on the client side.

### ✅ How it works:
1. Client gets an empty HTML shell and JS files
2. JS executes in browser, fetches data
3. HTML is built in the browser (via JavaScript)
4. Page is displayed

### ✅ Benefits:
- Fast page transitions after initial load
- Offloads rendering from server to client
- Great for dynamic and interactive apps

### ❌ Drawbacks:
- Slower first load
- Poor SEO (without special handling like pre-rendering)
- Requires JavaScript to be enabled

### ✅ Frameworks:
- **React.js**
- **Vue.js**
- **Angular**

---

## 🔸 Key Differences Table

| Feature            | SSR                              | CSR                             |
|--------------------|-----------------------------------|----------------------------------|
| Initial Load Speed | Fast                             | Slow                            |
| SEO Friendly       | Yes                              | No (unless pre-rendered)        |
| Server Load        | High                             | Low                             |
| Page Navigation    | Slower                           | Faster                          |
| Use Case           | Blogs, e-commerce, news sites    | Dashboards, SPAs, web apps      |
| Tools/Frameworks   | Next.js, Nuxt.js, Laravel        | React, Angular, Vue             |

---

## 🔸 Hybrid Approach

Modern frameworks support both:
- **Next.js**: CSR + SSR + SSG + ISR
- You can render some pages on server, others on client

---

## 🔸 When to Use What?

| Scenario                                | Prefer       |
|-----------------------------------------|--------------|
| SEO is critical                         | SSR          |
| Content doesn’t change often            | SSR/SSG      |
| Highly dynamic & interactive app        | CSR          |
| Dashboard with user-specific data       | CSR          |
| News or blog website                    | SSR or SSG   |

---

## 🔸 Conclusion

Both SSR and CSR have their own strengths. Use them based on your app’s needs.

> ✅ **SSR**: Better for SEO & faster first load  
> ✅ **CSR**: Better for rich, interactive apps

---





# 📦 All About Render & Rendering in Web Development

---

## 🔸 What is Rendering?

**Rendering** is the process of converting code (JavaScript, HTML, CSS) into a visual interface (UI) that users see in the browser.

It transforms the application logic into HTML elements and displays them on screen.

---

## 🔸 Types of Rendering

### 1. Server-Side Rendering (SSR)
- HTML is generated on the server.
- Sent fully to browser.
- Faster initial load, better SEO.

### 2. Client-Side Rendering (CSR)
- Minimal HTML sent to browser.
- JavaScript runs in browser and builds UI.
- Slower initial load, faster page transitions.

### 3. Static Site Generation (SSG)
- HTML is generated at build time.
- Pre-rendered content, very fast load.

### 4. Incremental Static Regeneration (ISR)
- Pages pre-rendered like SSG.
- Updates content in background (Next.js feature).

### 5. Universal Rendering (Isomorphic Rendering)
- Combines SSR and CSR.
- Initial load via SSR, then CSR takes over.

---

## 🔸 Rendering in React

### React Render Flow:
1. JSX → React Elements
2. Virtual DOM created
3. DOM is updated using ReactDOM

### React Lifecycle:
- `render()` method is called during:
  - Mounting
  - Updating

### Example:
```jsx
class MyComponent extends React.Component {
  render() {
    return <h1>Hello, Aakash!</h1>;
  }
}



🔸 Rendering Phases (React) :--

| Phase      | Description                   |
| ---------- | ----------------------------- |
| Mounting   | Component is added to the DOM |
| Updating   | Component is updated          |
| Unmounting | Component is removed          |



🔸 Types of Rendering in React :--


| Type               | Description                                |
| ------------------ | ------------------------------------------ |
| Initial Render     | First time DOM elements are created        |
| Re-render          | Component updates due to state/prop change |
| Conditional Render | Render different UI based on condition     |
| List Render        | Render a list of items using `.map()`      |
| Dynamic Render     | Render based on dynamic input              |



🔸 Conditional Rendering in React :--

{isLoggedIn ? <Dashboard /> : <Login />}




🔸 Rendering Optimization :-- 

🧠 Tips:
Use React.memo()

Use shouldComponentUpdate() or PureComponent

Avoid unnecessary state

Key props in lists

Lazy loading with React.lazy




🔸 Rendering in Browser :-- 

Rendering Engine (e.g., Blink, Gecko):
Parse HTML → DOM Tree

Parse CSS → CSSOM Tree

Combine → Render Tree

Layout → Where each element goes

Paint → Fill pixels on screen

Composite → Display final image



🔸 Reflow vs Repaint :--


| Term    | Meaning                                    |
| ------- | ------------------------------------------ |
| Reflow  | Affects layout; entire tree recalculated   |
| Repaint | Affects visuals (color, style), not layout |



🔸 Conclusion :-- 

Rendering is the heart of the user interface in any web application. Whether it’s on the server or the client, understanding rendering helps you build efficient and high-performance apps.

✅ Choose the right rendering strategy
✅ Optimize performance
✅ Know how the browser renders your app