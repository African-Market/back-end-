const db = require('../data/config');

async function add(user) {
  const userId = await db('users').insert(user)
  return userId
}
//? README  Resolves to the newly inserted scheme, including `id`.

function update(changes, id) {
  return db("users")
    .update(changes)
    .where({ id });
}

async function findByValues(values) {
  return await db("users").where(values).first() /*? same as {id}*/
}
