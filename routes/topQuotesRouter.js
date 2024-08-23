import express from 'express';
const router = express.Router();

import { getAllTopQuotes } from '../controllers/topQuotesController.js';

router.route('/').get(getAllTopQuotes);

export default router;