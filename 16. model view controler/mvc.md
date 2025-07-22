# 📦 Model View Controller (MVC) in Node.js

The **MVC** architecture is a software design pattern that separates an application into three main logical components:

## 🌐 1. What is MVC?

MVC stands for:
- **Model** – Manages the data, logic, and rules of the application.
- **View** – Handles the UI, rendering data to the user.
- **Controller** – Handles user input and interacts with the model.

---

## 🏗️ 2. Folder Structure Example


project/
│
├── controllers/
│ └── user.controller.js
│
├── models/
│ └── user.model.js
│
├── routes/
│ └── user.routes.js
│
├── views/
│ └── user.ejs (optional for templating)
│
├── app.js
└── config/
└── db.js






---

## 🧠 3. Model – `models/user.model.js`

- Defines the **schema** and **data structure**.
- Uses libraries like **Mongoose** for MongoDB.

```js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

module.exports = mongoose.model('User', userSchema);







🧩 4. Controller – controllers/user.controller.js
Handles business logic.

Communicates with the model and sends data to the view or response.


const User = require('../models/user.model');

// Get all users
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// Create a user
exports.createUser = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).json(user);
};






🚏 5. Routes – routes/user.routes.js
Defines the API endpoints.

Calls the appropriate controller function.


const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/', userController.getUsers);
router.post('/', userController.createUser);

module.exports = router;






🎨 6. View – views/user.ejs (optional with templating engines)
Used when rendering HTML on the server side.

<ul>
  <% users.forEach(user => { %>
    <li><%= user.name %></li>
  <% }) %>
</ul>





🛠️ 7. Main Entry File – app.js



const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.routes');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myapp');

// Use Routes
app.use('/api/users', userRoutes);

// Start Server
app.listen(3000, () => console.log('Server running on port 3000'));






📚 8. Advantages of MVC :-

Separation of concerns

Scalable and maintainable

Organized folder structure

Easier collaboration (frontend/backend split)



🧪 9. Tools Commonly Used with MVC in Node.js:----


Express.js – Web framework

Mongoose – ODM for MongoDB

EJS / Pug / Handlebars – Templating engines (for View)

dotenv – To manage environment variables




✅ 10. Summary


| Layer      | Responsibility                         |
| ---------- | -------------------------------------- |
| Model      | Data, schema, database logic           |
| View       | UI / HTML rendering (optional in APIs) |
| Controller | Request handling, business logic       |
