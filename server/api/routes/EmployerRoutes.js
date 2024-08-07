import Express from 'express';
import { register,login,createEmployer,getEmployer,getEmployers,deleteEmployer} from '../controllers/EmployerController.js';
import { verifyToken } from '../middlewares/verifyToken.js';
const router = Express.Router();

router.post('/register',register);
router.post('/login',login);
router.post('/create',verifyToken,createEmployer);
router.get('/:id',getEmployer);
router.get('/',getEmployers);
// router.put('/:id',updateEmployer);
router.delete('/:id',deleteEmployer);

export default router;