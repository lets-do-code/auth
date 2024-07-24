
import express from 'express';
import { DeleteUser, Login, Register } from '../controllers/auth.js';


const router = express.Router();

router.post('/register', Register);
router.post('/login', Login);
router.post('/deleteuser', DeleteUser);

export default router;