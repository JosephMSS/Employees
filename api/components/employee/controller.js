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
      try {
          
          let id = nanoid();
          let data = { id, name, email };
          let employees = await this.store.insert(TABLE, data);
          resolve(employees);
      } catch (error) {
          reject(error)
          return false
      }
    });
  }
  async updateEmployees({ id, name, email }) {
    return new Promise(async (resolve, reject) => {
      if (!id || !name || !email) {
        reject("Datos no validos!");
        return false;
      }
      try {
        let data = { id, name, email };
        let employees = await this.store.update(TABLE, data);
        resolve(employees);
      } catch (error) {
        reject(error);
        return false;
      }
    });
  }
  async removeEmployee({ id }) {
    return new Promise(async (resolve, reject) => {
      if (!id) {
        reject("Datos no validos!");
        return false;
      }
      try {
        let employees = await this.store.remove(TABLE, id);
        resolve(employees);
      } catch (error) {
        reject(error);
        return false;
      }
    });
  }
};
