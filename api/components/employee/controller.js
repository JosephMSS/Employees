const TABLE = "employee";
module.exports = class EmployeeController {
  constructor(store) {
      this.store=store
  }
 async getEmployees(){
     let employees=await this.store.list(TABLE)
     return employees
 }
 async insertEmployees({id,name,email}){
     let data={id,name,email}
     let employees=await this.store.upsert(TABLE,data)
     console.log('JMMS_employees controller',employees)
     return employees
 }
};
