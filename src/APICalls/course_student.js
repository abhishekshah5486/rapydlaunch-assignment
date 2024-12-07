const { axiosInstance } = require('./index');

export const enroll_student_in_course = async (courseId, studentId) => {
    try {
        console.log("Course Purchase Request: ", courseId, studentId);
        const response = await axiosInstance.post('/course-students/enroll', { courseId, studentId });
        return response.data;

    } catch (err) {
        
        return {
            success: false,
            message: 'Internal server error.',
        };

    }
}

export const retrieve_courses_by_student_id = async (studentId) => {
    try {
        
        const response = await axiosInstance.get(`/course-students/student/${studentId}`);
        return response.data;

    } catch (err) {
        
        return {
            success: false,
            message: 'Internal server error.',
        };

    }
}