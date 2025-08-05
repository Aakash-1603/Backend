const jwt = require("jsonwebtoken");

const secreatecode = "Akdon@16";

function setuser(id, user) {
  return jwt.sign(user, secreatecode);
}
function getUser(token) {
  if (!token) {
    return null;
  }
  try {
    return jwt.verify(token, secreatecode);
  } catch (err) {
    return null;
  }
}

module.exports = {
  setuser,
  getUser,
};
