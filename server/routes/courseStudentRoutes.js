const express = require('express');
const router = express.Router();

const courseStudentControllers = require('../controllers/courseStudentControllers');

// Enroll a student in a course
router.post('/enroll', courseStudentControllers.enroll_student_in_course);

module.exports = router;