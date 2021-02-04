const db = require("../data/config");

module.exports = {
  find,

};

function find() {
  return db('items');
}
