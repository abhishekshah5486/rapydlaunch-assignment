const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const courseStudentSchema = new mongoose.Schema({
    course_student_id: {
        type: String,
        required: true,
        unique: true,
        default: () => uuidv4(),
    },
    courseId: {
        type: String,
        required: true,
    },
    studentId: {
        type: String,
        required: true,
    },
    courseStatus: {
        type: String,
        enum: ['enrolled', 'completed'],
        default: 'enrolled',
    },
    courseProgress: {
        type: Number,
        default: 0,
    },
    lastActive: {
        type: Date,
        default: Date.now,
    },
});

const courseStudentModel = mongoose.model('course_students', courseStudentSchema);
module.exports = courseStudentModel;