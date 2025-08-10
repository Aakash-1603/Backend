# Node.js Clusters and Scaling Applications

## 1. Introduction

Node.js runs on a **single-threaded event loop**, meaning it can handle only one request at a time per process.  
However, modern machines have multiple CPU cores. To utilize all cores and improve performance, Node.js provides the **`cluster` module**.

The `cluster` module allows you to create child processes (workers) that share the same server port.

---

## 2. Why Use Clusters?

- **Utilize multiple CPU cores**
- **Improve throughput** (handle more requests per second)
- **Increase reliability** (if one worker crashes, others still handle requests)
- **Load balancing** (distributes incoming connections across workers)

---

## 3. How the Cluster Module Works

- **Master process**: Responsible for spawning workers and managing them.
- **Worker processes**: Run the actual application code and handle requests.
- All workers share the same server port.

---

## 4. Basic Cluster Example

```js
const cluster = require("cluster");
const http = require("http");
const os = require("os");

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  console.log(`Master process ${process.pid} is running`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    console.log("Starting a new worker...");
    cluster.fork();
  });
} else {
  // Worker processes
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end(`Handled by process ${process.pid}`);
    })
    .listen(3000);

  console.log(`Worker ${process.pid} started`);
}
```

**How it works:**

- The master process forks workers equal to the number of CPU cores.
- Each worker listens on the same port (3000 in this example).
- Requests are distributed among workers.

---

## 5. Scaling a Node.js Application with Clusters

### Step 1: Import required modules

```js
const cluster = require("cluster");
const os = require("os");
```

### Step 2: Check if process is master or worker

```js
if (cluster.isMaster) {
  // Master logic
} else {
  // Worker logic
}
```

### Step 3: Fork workers based on CPU cores

```js
const numCPUs = os.cpus().length;
for (let i = 0; i < numCPUs; i++) {
  cluster.fork();
}
```

### Step 4: Restart workers if they crash

```js
cluster.on("exit", (worker) => {
  console.log(`Worker ${worker.process.pid} died. Restarting...`);
  cluster.fork();
});
```

### Step 5: Run the application logic inside workers

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`Hello from Worker ${process.pid}`);
});

app.listen(3000, () => console.log(`Server started by Worker ${process.pid}`));
```

---

## 6. Best Practices for Using Clusters

- Use **PM2** or other process managers for easier cluster management.
- Keep **stateless** workers (store sessions in Redis or DB, not memory).
- Monitor worker crashes and restart them.
- Use **sticky sessions** for WebSockets (via libraries like socket.io with cluster support).

---

## 7. Using PM2 for Clustering (Alternative)

Instead of manually coding clusters, PM2 can manage them for you:

```sh
npm install -g pm2
pm2 start app.js -i max
```

- `-i max` starts as many workers as CPU cores.

---

## 8. Conclusion

The `cluster` module in Node.js allows you to take full advantage of multi-core CPUs, improving scalability and performance.  
By properly managing workers and keeping applications stateless, you can build highly scalable Node.js applications.
