const course_student_model = require('../models/course_student_model');
const courseModel = require('../models/courseModel');
const userModel = require('../models/userModel');
const send_course_purchase_email_notification = require('./emailController');

// Enroll a student in a course
exports.enroll_student_in_course = async (req, res) => {
    try {

        const { courseId, studentId } = req.body;
        const newCourseStudent = new course_student_model({
            courseId,
            studentId,
        });

        await newCourseStudent.save();

        // Send email notification to student
        // const course_details = await courseModel.findOne({ courseId: courseId });
        // const student_details = await userModel.findOne({ userId: studentId });

        // const student_email = student_details.email;

        // const email_response = await send_course_purchase_email_notification(student_email, course_details);

        return res.status(200).json({
            success: true,
            message: 'Student enrolled in course successfully.',
            data: newCourseStudent,
        });

    } catch (err) {

        return res.status(500).json({
            success: false,
            message: 'Internal server error.',
            error: err.message,
        });

    }
}

// Retrieve all courses a student is enrolled in 
exports.retrieve_courses_by_student_id = async (req, res) => {
    try {

        const { studentId } = req.params;
        // const courses = await course_student_model.find({ studentId: studentId });


        const courses = await course_student_model.aggregate([
            {
                $match: { studentId: studentId }, // Filter by studentId in studentCourses
            },
            {
                $lookup: {
                    from: 'courses', // Target collection
                    localField: 'courseId', // courseId field in studentCourses
                    foreignField: 'courseId', // courseId field in courses
                    as: 'courseDetails', // Alias for the joined data
                },
            },
            {
                $unwind: '$courseDetails', // Flatten the courseDetails array
            },
            {
                $replaceRoot: { newRoot: '$courseDetails' }, // Replace root with courseDetails object
            },
        ]);

        return res.status(200).json({
            success: true,
            message: 'Courses retrieved successfully.',
            data: courses,
        });

    } catch (err) {
            
            return res.status(500).json({
                success: false,
                message: 'Internal server error.',
                error: err.message,
            });
    
    }
}