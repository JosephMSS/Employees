const EmployeeController=require('./controller')
const store=require('../../../store/dummy')
const employeeController= new EmployeeController(store)
module.exports = {
    employeeController
};
