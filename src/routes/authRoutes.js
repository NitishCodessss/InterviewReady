import { Router } from 'express';
import authControllers from '../controllers/authController.js';

const router = Router();

/***
 * @routes POST /api/auth/register
 * @description Register a new user
 * @access Public
 */

router.post("/register", authControllers.register)  

export default router;