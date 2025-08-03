# Server Side Rendering (SSR)

Server Side Rendering (SSR) is a web application rendering technique where HTML is generated on the server and sent to the client's browser. This contrasts with Client Side Rendering (CSR), where JavaScript in the browser generates the HTML.

---

## 📌 Key Concepts

### 1. What is SSR?

SSR refers to rendering web pages on the server instead of the browser. When a user requests a page, the server processes the request, fetches the necessary data, renders the HTML, and sends it to the browser.

### 2. How SSR Works

1. User sends request to the server.
2. Server fetches data and renders complete HTML.
3. HTML is sent to the browser.
4. Browser displays the page.

---

## ✅ Benefits of SSR

* **Faster First Contentful Paint (FCP):** HTML is ready, so users see content quickly.
* **Better SEO:** Crawlers can easily index server-rendered content.
* **Improved Performance on Slow Devices:** Less JavaScript processing on client.

---

## ❌ Drawbacks of SSR

* **Increased Server Load:** Server does more processing.
* **Longer Time to Interactivity:** User has to wait for JavaScript to become interactive.
* **Complexity in State Management:** Sharing code and state between server and client is tricky.

---

## 🔧 SSR vs CSR vs SSG

| Feature          | SSR    | CSR     | SSG        |
| ---------------- | ------ | ------- | ---------- |
| HTML Generation  | Server | Browser | Build Time |
| SEO              | ✅      | ❌       | ✅          |
| First Load Speed | Fast   | Slow    | Fast       |
| Interactivity    | Slower | Fast    | Fast       |

---

## 🚀 Frameworks Supporting SSR

* **Next.js** (React)
* **Nuxt.js** (Vue)
* **Angular Universal** (Angular)
* **SvelteKit** (Svelte)

---

## 🧠 SSR in Next.js (Example)

```js
// pages/index.js
export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  return { props: { data } };
}

function Home({ data }) {
  return <div>{data.title}</div>;
}

export default Home;
```

---

## 📝 When to Use SSR

* You need dynamic content per request
* SEO is important
* Content changes frequently

---

## 🛠️ Tips for Using SSR

* Use caching to reduce load
* Stream responses for large content
* Minimize blocking operations

---


Server Side Rendering helps in improving SEO and performance by serving fully rendered pages to the browser. Choose SSR when your app benefits from faster initial load and better search engine visibility.
