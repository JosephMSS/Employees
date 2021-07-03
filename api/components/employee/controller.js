const TABLE = "employee";
const { nanoid } = require("nanoid");

module.exports = class EmployeeController {
  constructor(store) {
    this.store = store;
  }
  async getEmployees() {
    let employees = await this.store.list(TABLE);
    return employees;
  }
  async insertEmployees({ name, email }) {
    return new Promise(async (resolve, reject) => {
      if (!name || !email) {
        reject("Datos no validos!");
        return false;
      }
      let id = nanoid();
      let data = { id, name, email };
      let employees = await this.store.insert(TABLE, data);
      resolve(employees);
    });
  }
  async updateEmployees({ id, name, email }) {
    let data = { id, name, email };
    console.log("JMMS_data", data);
    let employees = await this.store.update(TABLE, data);
    return employees;
  }
  async removeEmployee({ id }) {
    let employees = await this.store.remove(TABLE, id);
    return employees;
  }
};
