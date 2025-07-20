# MongoDB in Backend Development

## 📌 Introduction
MongoDB is a **NoSQL** database that stores data in **JSON-like documents** with dynamic schemas, making it flexible and scalable. It's commonly used with backend technologies like **Node.js**, **Express**, **Python**, and more.

---

## 🔧 Key Features

- **Document-Oriented**: Stores data as BSON (Binary JSON).
- **Schema-less**: No predefined schema required.
- **Scalable**: Horizontal scaling with sharding.
- **High Performance**: Faster read/write with indexing.
- **Flexible Queries**: Supports powerful and flexible queries.

---

## 🗃️ Core Concepts

| Concept            | Description |
|--------------------|-------------|
| **Database**       | Container for collections |
| **Collection**     | Group of documents (like a table) |
| **Document**       | Data structure (like a row) stored in BSON |
| **Field**          | Key-value pairs inside a document |
| **ObjectId**       | Unique ID automatically assigned to each document |

---

## 💻 CRUD Operations

### ➕ Create
```js
db.users.insertOne({ name: "Aakash", age: 21 });







📖 Read

db.users.find(); // Find all
db.users.findOne({ name: "Aakash" }); // Find one



✏️ Update

db.users.updateOne({ name: "Aakash" }, { $set: { age: 22 } });



❌ Delete

db.users.deleteOne({ name: "Aakash" });





⚙️ Integrating MongoDB with Node.js


1. Install MongoDB Driver

npm install mongodb


2. Sample Code Using Native Driver

const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("testDB");
    const collection = db.collection("users");
    await collection.insertOne({ name: "Aakash", age: 21 });
    const users = await collection.find().toArray();
    console.log(users);
  } finally {
    await client.close();
  }
}
run();






🚀 Using Mongoose with Node.js


1. Install Mongoose

npm install mongoose


2. Sample Code

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/testDB")
  .then(() => console.log("Connected"))
  .catch(err => console.log(err));

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

const user = new User({ name: "Aakash", age: 21 });
user.save().then(() => console.log("User saved"));






🛡️ Best Practices ---

Use Schema validation with Mongoose.

Avoid storing large files directly in MongoDB.

Use indexes for faster queries.

Use environment variables for DB credentials.

Always handle errors and connection failures.






🔐 Security Tips ----

Enable authentication & authorization.

Use TLS/SSL for secure communication.

Avoid exposing your database to the public internet.

Regularly back up your data.





🌐 MongoDB Atlas (Cloud) ----

MongoDB Atlas is the cloud version of MongoDB:

Free and paid tiers.

Easy scaling and management.

Hosted, secured, and backed-up.

Quick deployment for production-ready apps.





📚 Useful Commands -----

# Start MongoDB
mongod

# Open Mongo Shell
mongo

# Show all databases
show dbs

# Switch database
use myDB

# Show collections
show collections








# 📚 Databases in Backend Development

## 📌 What is a Database?

A **database** is an organized collection of structured or unstructured data that can be easily accessed, managed, and updated. In backend development, databases are used to store and retrieve data for web applications.

---

## 🧭 Types of Databases

### 1. Relational Databases (SQL)
- Stores data in **tables** (rows and columns).
- Uses **SQL (Structured Query Language)**.
- **Schema-based**: fixed structure.
- Examples: **MySQL**, **PostgreSQL**, **SQLite**, **Oracle**.

### 2. Non-Relational Databases (NoSQL)
- Stores data in **flexible formats** like documents, key-value pairs, graphs.
- Schema-less or dynamic schema.
- Examples: **MongoDB**, **Cassandra**, **Redis**, **Firebase**.

---

## 🗃️ SQL vs NoSQL

| Feature         | SQL (Relational) | NoSQL (Non-Relational)       |
|----------------|------------------|-------------------------------|
| Structure       | Table-based      | Document/Key-Value/Graph etc.|
| Schema          | Fixed            | Flexible                     |
| Query Language  | SQL              | Varies (Mongo Query, etc.)   |
| Scalability     | Vertical         | Horizontal                   |
| Transactions    | Strong ACID      | Often eventual consistency   |

---

## ⚙️ Common Database Operations (CRUD)

- **C**reate – Insert new data
- **R**ead – Retrieve data
- **U**pdate – Modify existing data
- **D**elete – Remove data

---

## 💻 Database in Backend Development

Databases are integrated with backend via:
- **ORMs (Object Relational Mappers)** like Sequelize, TypeORM (SQL) and Mongoose (MongoDB)
- **Drivers** like `mysql`, `pg`, `mongodb`, etc.

### Example (Node.js + MySQL using mysql2)
```js
const mysql = require('mysql2');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb'
});
db.connect();






🔌 Connecting Database to Backend (Example Workflows)


MongoDB + Node.js ---

Install Mongoose: npm install mongoose

Connect using mongoose.connect()

Define Schema and perform CRUD








MySQL + Node.js ----

Install mysql2: npm install mysql2

Create connection

Execute SQL queries with .query()




🛡️ Database Best Practices ------

Use indexes for performance.

Always sanitize inputs to prevent SQL injection.

Apply data validation.

Backup your database regularly.

Use environment variables for DB credentials.

Use connection pooling in production.

Separate read and write operations for large-scale apps.




🔐 Security Practices ----

Use authentication and authorization.

Encrypt sensitive data (e.g., passwords using bcrypt).

Restrict remote access.

Enable firewalls and TLS/SSL.




📊 Popular Database Systems




Relational (SQL) -----

MySQL – Fast, open-source, widely used

PostgreSQL – Feature-rich, open-source

SQLite – Lightweight, file-based

MS SQL Server – Microsoft-based enterprise DB



Non-Relational (NoSQL) ----

MongoDB – Document-based

Redis – In-memory key-value store

Cassandra – Column-store for big data

Firebase – Realtime database by Google






⚒️ Tools for Working with Databases



GUI Clients:----

MySQL: MySQL Workbench, DBeaver

MongoDB: MongoDB Compass


CLI Tools:----

mongo, mysql, psql


Cloud Databases:----

MongoDB Atlas, Amazon RDS, Firebase, Supabase