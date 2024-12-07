const courseModel = require('../models/courseModel');


exports.create_course = async (req, res) => {
    try {

        const newCourse = new courseModel({
            ...req.body,
        });
        await newCourse.save();

        res.status(201).json({
            success: true,
            message: 'Course created successfully.',
            data: newCourse,
        });

    } catch (err) {
        
        res.status(500).json({
            success: false,
            message: 'Internal server error.',
            error: err.message,
        });

    }
}

exports.get_all_courses = async (req, res) => {
    try {
        
        const courses = await courseModel.find();
        res.status(200).json({
            success: true,
            message: 'Successfully retrieved all courses.',
            data: courses,
        });

    } catch (err) {
        
        res.status(500).json({
            success: false,
            message: 'Internal server error.',
            error: err.message,
        });

    }
}

exports.get_course_by_id = async (req, res) => {
    try {
        
        const course_id = req.params.courseId;
        const course = await courseModel.findOne({ courseId: course_id });

        if (!course) {
            return res.status(404).json({
                success: false,
                message: 'Course not found.',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Successfully retrieved course.',
            data: course,
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: 'Internal server error.',
            error: err.message,
        });
        
    }
}

exports.get_courses_by_instructor_id = async (req, res) => {
    try {
        
        const instructor_id = req.params.instructorId;
        const courses = await courseModel.find({ instructorId: instructor_id });

        if (courses.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No courses found for this instructor.',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Successfully retrieved courses.',
            data: courses,
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: 'Internal server error.',
            error: err.message,
        });

    }
}