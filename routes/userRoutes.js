import express from "express";
import UserController from "../controllers/userController.js";

const router = express.Router();


//Public Routes
router.post('/register',UserController.userRegistration)


// Private Routes



export default router