const express = require('express');
const router = express.Router();

const courseControllers = require('../controllers/courseControllers');
const verify_admin_credentials = require('../middlewares/adminMiddleware');

// Create a new course
router.post('/', verify_admin_credentials, courseControllers.create_course);
// Retrieve all courses
router.get('/', courseControllers.get_all_courses);
// Retrieve a single course by course id
router.get('/:courseId', courseControllers.get_course_by_id);
// Retrieve all courses by instructor id
router.get('/instructor/:instructorId', courseControllers.get_courses_by_instructor_id);

module.exports = router;