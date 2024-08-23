import mongoose from 'mongoose'

const TopQuotesSchema = new mongoose.Schema(
    {
        topquotestitle: {
            type: String,
            required: [true, 'Please provide a top quotes title'],
            minLength: 3,
            maxLength: 50,
        },
        topquotestext: {
            type: String,
            required: [true, 'Please provide a top quotes text'],
        },
        topquotesauthor: {
            type: String,
            required: [true, 'Please provide a top quotes author'],
        },
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: [true, 'Please provide user'],
        },
    },
    { timestamps: true }
)

export default mongoose.model('TopQuotes', TopQuotesSchema)