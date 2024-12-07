const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuidv4');

const courseSchema = new mongoose.Schema({
    courseId: {
        type: String,
        required: true,
        unique: true,
        default: () => uuidv4(),
    },
    courseTitle: {
        type: String,
        required: true,
        trim: true,
    },
    imgUrl: {
        type: String,
        required: true,
        trim: true,
    },
    validity: {
        type: String,
        required: true,
    },
    courseDescription: {
        type: String,
        required: true,
        trim: true,
    },
    coursePrice: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
    },
    instructorId: {
        type: String,
        required: true,
    },
});

const courseModel = mongoose.model('courses', courseSchema);
module.exports = courseModel;