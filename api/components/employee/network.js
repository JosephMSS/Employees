const express = require("express");
const {employeeController} = require('./index');
/**
 * Se encarga de el manejo de respuestas, 
 * para que sigan una estructura y sean 
 * iguales en todos los metodos
 */
const response=require('../../../network/response')
const router = express.Router();
router.get("/", getEmployees);
router.post("/", insertEmployees);
router.delete("/:id", removeEmployee);
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
async function removeEmployee(req, res) {
console.log('JMMS_req.params',req.params)
  const {id}=req.params//extraemos el id de los parametros de la ruta
  try {
    let employees=await employeeController.removeEmployee({id})
    response.success(req,res,'Eliminado con exito',200)
    
  } catch (error) {
    response.error(req,res,error.message,404)
  }
}
module.exports = router;
