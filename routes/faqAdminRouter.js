import express from 'express';

const router = express.Router();

import { createFaq, deleteFaq, getAllFaqs, updateFaq } from '../controllers/faqsController.js';


router.route('/').post(createFaq).get(getAllFaqs);
// remember about :id
router.route('/:id').delete(deleteFaq).patch(updateFaq);

export default router;
