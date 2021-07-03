const express = require("express");
const {employeeController} = require('./index');
const router = express.Router();
router.get("/", getEmployees);
router.post("/", insertEmployees);
async function getEmployees(req, res) {
    let employees=await employeeController.getEmployees()
  res.send(employees);
}
async function insertEmployees(req, res) {
console.log('JMMS_req.body',req.body)
    let employees=await employeeController.insertEmployees(req.body)
    console.log('JMMS_employees red',employees)
  res.sendStatus(201);
}
module.exports = router;
