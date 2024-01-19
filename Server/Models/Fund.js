import mongoose from 'mongoose'
const fundSchema = new mongoose.Schema({
    fund: {
        type: Number,
        required: true
    },
});

const Fund = mongoose.model('Fund', fundSchema);

export default Fund