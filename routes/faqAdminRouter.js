import express from 'express';
const router = express.Router();

import { createFaq, deleteFaq, getAllFaqs, updateFaq } from '../controllers/faqsController.js';
import testUser from '../middleware/testUser.js';


router.route('/').post(testUser, createFaq).get(getAllFaqs);
// remember about :id
router.route('/:id').delete(testUser, deleteFaq).patch(testUser, updateFaq);

export default router;
