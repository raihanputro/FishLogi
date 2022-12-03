import express from 'express';

import { getFishes, getFish, getFishesBySearch, createFishPost, deleteFishPost, updateFishPost } from '../controllers/fishController.js';
import { auth } from '../middlewares/auth.js';

const router = express.Router();

router.get('/search', getFishesBySearch);
router.get('/:id', getFish);
router.get('/', getFishes);
router.patch('/:id', updateFishPost);
router.delete('/:id', deleteFishPost);
router.post('/',createFishPost);

export default router;