import mongoose from 'mongoose'

const FaqSchema = new mongoose.Schema(
    {
        faqtitle: {
            type: String,
            required: [true, 'Please provide a faq title'],
            minLength: 3,
            maxLength: 50,
        },
        faqtext: {
            type: String,
            required: [true, 'Please provide a faq text'],
        },
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: [true, 'Please provide user'],
        },
    },
    { timestamps: true }
)

export default mongoose.model('Faq', FaqSchema)