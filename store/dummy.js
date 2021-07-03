const { response } = require("express");

let db = {
  employee: [{ id: "1", name: "Joseph Morales", email: "joseph@joseph.com" },{ id: "2", name: "Yogurt", email: "yogurt@yogurt.com" }],
};
async function list(table) {
  return db[table] || [];
}
async function insert(table, data) {
    if (!db[table]) {
      db[table]=[];
    }
    let response=await db[table].push(data)
    return response;
}
async function remove(table, id) {
  const index = db[table].findIndex((item) => item.id === id);
  if (index >= 0) {
    db[table].splice(index, 1);
    return true;
  }
   throw new Error('Usuario no encontrado')
}
module.exports = {
    list,
    insert,
    remove
};

