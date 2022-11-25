import express from 'express';

import { getFishes, getFish, createFishPost, deleteFishPost, updateFishPost } from '../controllers/fishController.js'

const router = express.Router();

router.get('/:id', getFish);
router.patch('/:id', updateFishPost);
router.delete('/:id', deleteFishPost)
router.get('/', getFishes);
router.post('/', createFishPost);

export default router;