import express from 'express';
const router = express.Router();

import { createTopQuote, deleteTopQuote, getAllTopQuotes, updateTopQuote } from '../controllers/topQuotesController.js';
import testUser from '../middleware/testUser.js';


router.route('/').post(testUser, createTopQuote).get(getAllTopQuotes);
// remember about :id
router.route('/:id').delete(testUser, deleteTopQuote).patch(testUser, updateTopQuote);

export default router;
