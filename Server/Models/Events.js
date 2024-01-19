import mongoose from 'mongoose'
const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    funds: {
        type: Number,
        required: true
    },
    approved: {
        type: Boolean,
        required: true
    },
});

const Event = mongoose.model('Event', eventSchema);

export default Event