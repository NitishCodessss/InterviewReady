import { Router } from 'express';
import authController from '../controller/authController.js';


const router = Router();

/***
 * @routes POST /api/auth/register
 * @description Register a new user
 * @access Public
 */

router.post("/register", authController.register) 

/**
 * @routes POST /api/auth/login
 * @description Login a user
 * @access Public
 */

router.post("/login", authController.login);

export default router;