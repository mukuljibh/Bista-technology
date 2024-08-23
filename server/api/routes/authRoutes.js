import Express from 'express';
import { generateOTP,localVariables,verifyOTP } from '../controllers/authController.js';
import { verifyToken } from '../middlewares/verifyToken.js';
const router = Express.Router();

router.get('/generateOTP',verifyToken,localVariables,generateOTP);
router.get('/verifyOTP',verifyToken,verifyOTP);

export default router;