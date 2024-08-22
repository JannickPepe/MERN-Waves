
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';
import checkPermissions from '../utils/checkPermissions.js';
import Faq from '../models/Faq.js';


// Create FAQ
const createFaq = async (req, res) => {

    const { faqtitle, faqtext } = req.body;

    if (!faqtitle || !faqtext ) {
        throw new BadRequestError('Please provide all values');
    }

    req.body.createdBy = req.user.userId;
    const faq = await Faq.create(req.body);
    res.status(StatusCodes.CREATED).json({ faq });
};

// getAllFAQS
const getAllFaqs = async (req, res) => {

    const { isLandingFaq } = req.query;

    try {
        let queryObject = {
            // createdBy: req.user.userId,
        };

        if (!isLandingFaq) {
            queryObject = {
                createdBy: req.user.userId,
            };
        }


        // NO AWAIT
        let result = [];
        if (isLandingFaq) {
            result = Faq.find({});
        }
        else {
            result = Faq.find(queryObject);
        }


        // setup pagination
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        result = result.skip(skip).limit(limit);

        const faqs = await result;

        const totalFaqs = await Faq.countDocuments(queryObject);
        const numOfPages = Math.ceil(totalFaqs / limit);


        res.status(StatusCodes.OK).json({ faqs, totalFaqs, numOfPages });
    } catch (error) {
        res.status(404).json({ message: error.message });

    }
};

// Update FAQ
const updateFaq = async (req, res) => {

    const { id: faqId } = req.params;
    const { faqtitle, faqtext } = req.body;

    if (!faqtitle || !faqtext ) {
        throw new BadRequestError('Please provide all values');
    }
    const faq = await Faq.findOne({ _id: faqId });

    if (!faq) {
        throw new NotFoundError(`No faq with id :${faqId}`);
    }

    // check permissions
    // checkPermissions(req.user, faq.createdBy);

    const updatedFaq = await Faq.findOneAndUpdate({ _id: faqId }, req.body, {
        new: true,
        runValidators: true,
    });

    res.status(StatusCodes.OK).json({ updatedFaq });
};

// Delete FAQ
const deleteFaq = async (req, res) => {

    const { id: faqId } = req.params;
    const faq = await Faq.findOne({ _id: faqId });

    if (!faq) {
        throw new NotFoundError(`No FaQ with id :${faqId}`);
    }

    // checkPermissions(req.user, faq.createdBy);

    await faq.deleteOne();

    res.status(StatusCodes.OK).json({ msg: 'Success! FaQ removed' });
};



export { createFaq, deleteFaq, getAllFaqs, updateFaq };