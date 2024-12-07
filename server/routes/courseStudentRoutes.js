const express = require('express');
const router = express.Router();

const courseStudentControllers = require('../controllers/courseStudentControllers');

// Enroll a student in a course
router.post('/enroll', courseStudentControllers.enroll_student_in_course);
// Retrieve all courses by student id
router.get('/student/:studentId', courseStudentControllers.retrieve_courses_by_student_id);

module.exports = router;