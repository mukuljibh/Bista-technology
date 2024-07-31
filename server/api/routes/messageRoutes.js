import express from 'express';
import { leaveMessage } from '../controllers/messageController.js';
const router = express.Router();

router.post('/leave-message',leaveMessage);

export default router;