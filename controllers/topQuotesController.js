
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';
import checkPermissions from '../utils/checkPermissions.js';
import TopQuotes from '../models/TopQuotes.js';


// Create TopQuote
const createTopQuote = async (req, res) => {

    const { topquotestitle, topquotestext, topquotesauthor } = req.body;

    if (!topquotestitle || !topquotestext || !topquotesauthor) {
        throw new BadRequestError('Please provide all values');
    }

    req.body.createdBy = req.user.userId;
    const topquotes = await TopQuotes.create(req.body);
    res.status(StatusCodes.CREATED).json({ topquotes });
};

// getAllTOPQUOTES
const getAllTopQuotes = async (req, res) => {

    const { isLandingTopQuotes } = req.query;

    try {
        let queryObject = {
            // createdBy: req.user.userId,
        };

        if (!isLandingTopQuotes) {
            queryObject = {
                createdBy: req.user.userId,
            };
        }


        // NO AWAIT
        let result = [];
        if (isLandingTopQuotes) {
            result = TopQuotes.find({});
        }
        else {
            result = TopQuotes.find(queryObject);
        }


        // setup pagination
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        result = result.skip(skip).limit(limit);

        const topquotes = await result;

        const totalTopQuotes = await TopQuotes.countDocuments(queryObject);
        const numOfPages = Math.ceil(totalTopQuotes / limit);


        res.status(StatusCodes.OK).json({ topquotes, totalTopQuotes, numOfPages });
    } catch (error) {
        res.status(404).json({ message: error.message });

    }
};

// Update TOPQUOTES
const updateTopQuote = async (req, res) => {

    const { id: topquotesId } = req.params;
    const { topquotestitle, topquotestext, topquotesauthor } = req.body;

    if (!topquotestitle || !topquotestext || !topquotesauthor) {
        throw new BadRequestError('Please provide all values');
    }
    const topquotes = await TopQuotes.findOne({ _id: topquotesId });

    if (!topquotes) {
        throw new NotFoundError(`No topquotes with id :${topquotesId}`);
    }

    // check permissions
    // checkPermissions(req.user, topquotes.createdBy);

    const updatedTopQuotes = await TopQuotes.findOneAndUpdate({ _id: topquotesId }, req.body, {
        new: true,
        runValidators: true,
    });

    res.status(StatusCodes.OK).json({ updatedTopQuotes });
};

// Delete TopQuote
const deleteTopQuote = async (req, res) => {

    const { id: topquotesId } = req.params;
    const topquotes = await TopQuotes.findOne({ _id: topquotesId });

    if (!topquotes) {
        throw new NotFoundError(`No topquotes with id :${topquotesId}`);
    }

    // checkPermissions(req.user, faq.createdBy);

    await topquotes.deleteOne();

    res.status(StatusCodes.OK).json({ msg: 'Success! TopQuotés removed' });
};



export { createTopQuote, deleteTopQuote, getAllTopQuotes, updateTopQuote };