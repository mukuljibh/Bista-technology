import express from 'express';
import { register, login,oauthRegister,oauthlogin,getUserById} from '../controllers/userController.js';
const router = express.Router();

router.post('/register',register);
router.post('/oauth-register',oauthRegister);
router.post('/login',login);
router.post('/oauth-login',oauthlogin);

router.get('/:id',getUserById);
export default router;