const { response } = require("express");

let db = {
  employee: [
    { id: "1", name: "Marjorie Benavides", email: "Marjorie@Benavides.com" },
    { id: "2", name: "Joseph Morales", email: "Joseph@Morales.com" },
  ],
};
async function list(table) {
  return db[table] || [];
}
async function insert(table, data) {
  if (!db[table]) {
    db[table] = [];
  }
  await db[table].push(data);
  let response = db[table].find((item) => item.id === data.id);
  return response;
}
async function update(table, data) {
  if (!db[table]) {
    db[table] = [];
  }
  const index = db[table].findIndex((item) => item.id === data.id);
  if (index >= 0) {
    db[table][index] = data;
    let response = db[table][index];
    return response;
  }
  throw new Error("Usuario no encontrado");
}
async function remove(table, id) {
  const index = db[table].findIndex((item) => item.id === id);
  if (index >= 0) {
    db[table].splice(index, 1);
    return true;
  }
  throw new Error("Usuario no encontrado");
}
module.exports = {
  list,
  insert,
  update,
  remove,
};
