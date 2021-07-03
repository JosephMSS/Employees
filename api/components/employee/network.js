const express = require("express");
const { employeeController } = require("./index");
/**
 * Se encarga de el manejo de respuestas,
 * para que sigan una estructura y sean
 * iguales en todos los metodos
 */
const response = require("../../../network/response");
const router = express.Router();
router.get("/", getEmployees);
router.post("/", insertEmployees);
router.put("/:id/update", updateEmployees);
router.delete("/:id", removeEmployee);
async function getEmployees(req, res) {
  try {
    let employees = await employeeController.getEmployees();
    response.success(req, res, employees, "", 200);
  } catch (error) {
    response.error(req, res);
  }
}
async function insertEmployees(req, res) {
  try {
    let newEmployee = await employeeController.insertEmployees(req.body);
    response.success(req, res, newEmployee, "", 201);
  } catch (error) {
    response.error(req, res, error.message);
  }
}
async function updateEmployees(req, res) {
  try {
    console.log('JMMS_req.body',req.body)
    let { name, email }=req.body
    let { id }=req.params
    console.log('JMMS_id',id)
    let data={id,name,email}
    let newEmployee = await employeeController.updateEmployees(data);
    response.success(req, res, newEmployee, "", 201);
  } catch (error) {
    response.error(req, res, error.message);
  }
}
async function removeEmployee(req, res) {
  const { id } = req.params; //extraemos el id de los parametros de la ruta
  try {
    let employees = await employeeController.removeEmployee({ id });
    response.success(req, res, "Eliminado con exito", 200);
  } catch (error) {
    response.error(req, res, error.message, 404);
  }
}
module.exports = router;
