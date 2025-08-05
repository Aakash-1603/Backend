const User = require("../models/user");
const { v4: uuidv4 } = require("uuid");
const { setuser } = require("../service/auth");

async function handleUserSign(req, res) {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
  return res.render("/");
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  await User.findOne({
    email,
    password,
  });
  if (!User) {
    return res.render("login", {
      error: "Invalid email or password",
    });
  }
  const token = setuser(User);
  res.cookie("uid", token);
  return res.render("/");
}

module.exports = {
  handleUserSign,
  handleUserLogin,
};
