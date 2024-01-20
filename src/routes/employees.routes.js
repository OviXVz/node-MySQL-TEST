import { Router } from "express";

import { getEmployees, getEmployee, createEmployees, updateEmployees, deleteEmployees } from "../controllers/employees.controller.js";
const router = Router();

router.get('/empleados', getEmployees);
router.get('/empleados/:id', getEmployee);

router.post('/empleados', createEmployees);

router.patch('/empleados/:id', updateEmployees);

router.delete('/empleados/:id', deleteEmployees);

export default router;