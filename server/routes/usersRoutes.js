import express from 'express';
import { getUsers, logOut, signIn, signUp } from '../controllers/userController.js';

const router = express.Router();

router.post('/signIn', signIn);
router.post('/signUp', signUp);
router.get('/', getUsers);
router.patch('/:id', logOut);

export default router;
