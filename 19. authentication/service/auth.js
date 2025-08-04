const sessionIdUserMap = new Map();

function setuser(id, user) {
  sessionIdUserMap.set(id, user);
}
function getUser(id) {
  return sessionIdUserMap.get(id);
}

module.exports = {
  setuser,
  getUser,
};
