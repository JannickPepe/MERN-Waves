import express from 'express';
const router = express.Router();

import { getAllFaqs } from '../controllers/faqsController.js';

router.route('/').get(getAllFaqs);

export default router;