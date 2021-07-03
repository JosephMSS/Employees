const { response } = require("express");

let db = {
  employee: [{ id: "1", name: "Joseph Morales", email: "joseph@joseph.com" }],
};
async function list(table) {
  return db[table] || [];
}
async function upsert(table, data) {
    console.log('JMMS_data',data)
    if (!db[table]) {
      db[table]=[];
    }
    let response=await db[table].push(data)
    console.log('JMMS_response',response)
    return response;
}
module.exports = {
    list,
    upsert
};

