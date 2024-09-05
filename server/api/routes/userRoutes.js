import express from 'express';
import uploadWithDestination from '../middlewares/multer.js';
import { register, login,oauthRegister,oauthlogin,getUserById,uploadProfilePicture,uploadResume} from '../controllers/userController.js';
import { verifyToken } from '../middlewares/verifyToken.js';
const router = express.Router();

const fields = [
    { name: 'profilePicture', maxCount: 1 },
    { name: 'resume', maxCount: 1 },
]

router.post('/register',register);
router.post('/oauth-register',oauthRegister);
router.post('/login',login);
router.post('/oauth-login',oauthlogin);
router.post('/upload/profile',verifyToken,uploadWithDestination(fields,'./uploads/profilePics',),uploadProfilePicture);
router.post('/upload/resume', verifyToken,uploadWithDestination(fields,'./uploads/resumes',),uploadResume);

router.get('/:id',getUserById);
export default router;