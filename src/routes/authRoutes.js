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

/**
 * @route Get /api/auth/logout
 * @description Logout the user
 * @access Public
 */

router.get("/logout", authController.logout);

export default router;