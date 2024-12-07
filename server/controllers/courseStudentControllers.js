const course_student_model = require('../models/course_student_model');
const courseModel = require('../models/courseModel');

// Enroll a student in a course
exports.enroll_student_in_course = async (req, res) => {
    try {

        const { courseId, studentId } = req.body;
        const newCourseStudent = new course_student_model({
            courseId,
            studentId,
        });

        await newCourseStudent.save();

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